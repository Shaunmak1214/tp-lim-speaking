import { useEffect, useRef, useState } from 'react'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'

export function Reveal({ children, className = '', delay = 0, stagger = false }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in-view')
          io.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <div ref={ref} className={`${stagger ? 'reveal-stagger' : 'reveal'} ${className}`} style={delay ? { animationDelay: `${delay}ms` } : undefined}>
      {children}
    </div>
  )
}

export function Eyebrow({ children, dot = '#ff9700', light = false, className = '' }) {
  return (
    <p className={`inline-flex items-center gap-2.5 font-mono text-[12px] uppercase tracking-[0.16em] ${light ? 'text-white' : 'text-black'} ${className}`}>
      <span className="size-[7px] rounded-full" style={{ background: dot }} />
      {children}
    </p>
  )
}

export function Pill({ children, variant = 'white', className = '', as: Tag = 'a', ...props }) {
  const variants = {
    white: 'bg-white text-black hover:bg-white/85',
    cloud: 'bg-cloud text-black hover:bg-[#e6e6e6]',
    dark: 'bg-panel text-white hover:bg-[#2c2c2c]',
  }
  return (
    <Tag
      {...props}
      className={`inline-flex cursor-pointer items-center justify-center rounded-full px-7 py-[15px] text-[15px] font-semibold tracking-tight transition active:scale-[0.98] ${variants[variant]} ${className}`}
    >
      {children}
    </Tag>
  )
}

export function useCarousel() {
  const trackRef = useRef(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  const update = () => {
    const el = trackRef.current
    if (!el) return
    setCanPrev(el.scrollLeft > 8)
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 8)
  }

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    update()
    el.addEventListener('scroll', update, { passive: true })
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => {
      el.removeEventListener('scroll', update)
      ro.disconnect()
    }
  }, [])

  const scrollBy = (dir) => {
    const el = trackRef.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollBy({ left: dir * Math.round(el.clientWidth * 0.85), behavior: reduce ? 'auto' : 'smooth' })
  }

  return { trackRef, canPrev, canNext, scrollBy }
}

export function CarouselArrows({ canPrev, canNext, onPrev, onNext, light = false }) {
  const base = `grid size-10 place-items-center rounded-full border transition ${
    light
      ? 'border-black/20 text-black hover:bg-black hover:text-white'
      : 'border-white/25 text-white hover:bg-white hover:text-black'
  }`
  return (
    <div className="flex gap-3">
      <button aria-label="Previous" onClick={onPrev} disabled={!canPrev} className={`${base} disabled:opacity-30 disabled:pointer-events-none`}>
        <CaretLeft size={18} weight="bold" />
      </button>
      <button aria-label="Next" onClick={onNext} disabled={!canNext} className={`${base} disabled:opacity-30 disabled:pointer-events-none`}>
        <CaretRight size={18} weight="bold" />
      </button>
    </div>
  )
}

export function Dots({ count, active, light = false, onSelect }) {
  return (
    <div className="flex justify-center gap-2">
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          aria-label={`Slide ${i + 1}`}
          onClick={onSelect ? () => onSelect(i) : undefined}
          className={`size-2 rounded-full transition ${
            i === active ? (light ? 'bg-black' : 'bg-white') : light ? 'bg-black/25' : 'bg-white/30'
          }`}
        />
      ))}
    </div>
  )
}
