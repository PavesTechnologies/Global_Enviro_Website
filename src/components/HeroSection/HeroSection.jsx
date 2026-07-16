'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export default function HeroSection({
  imageSrc,
  images,
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  align = 'left',
  overlay = 'bg-black/50',
  height = 'h-[600px]',
  className,
}) {
  const alignments = {
    left: 'items-start text-left',
    center: 'items-center text-center',
    right: 'items-end text-right',
  }

  const slides =
    images && images.length > 0 ? images : imageSrc ? [imageSrc] : []
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (slides.length <= 1) return
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 4500)
    return () => clearInterval(id)
  }, [slides.length])

  return (
    <section
      className={cn('relative w-full overflow-hidden', height, className)}
    >
      {/* Background Image(s) */}
      {slides.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={title}
          fill
          priority={index === 0}
          className={cn(
            'object-cover transition-opacity duration-1000 ease-in-out',
            index === current ? 'opacity-100' : 'opacity-0'
          )}
        />
      ))}

      {/* Overlay */}
      <div className={cn('absolute inset-0', overlay)} />

      {/* Content */}
      <div
        className={cn(
          'absolute inset-0 flex flex-col justify-center gap-6 px-6 md:px-16 z-10 text-white',
          alignments[align]
        )}
      >
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-3 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-gray-200 mb-6">{subtitle}</p>
          )}
          <div
            className={cn(
              'flex flex-wrap gap-4',
              align === 'center' && 'justify-center',
              align === 'right' && 'justify-end'
            )}
          >
            {primaryAction && (
              <a
                href={primaryAction.href}
                className="bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-lg transition"
              >
                {primaryAction.label}
              </a>
            )}
            {secondaryAction && (
              <a
                href={secondaryAction.href}
                className="border border-white text-white hover:bg-white hover:text-black font-semibold px-6 py-3 rounded-lg transition"
              >
                {secondaryAction.label}
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      {slides.length > 1 && (
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((src, index) => (
            <button
              key={src}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={cn(
                'h-2.5 rounded-full transition-all duration-300',
                index === current
                  ? 'w-6 bg-white'
                  : 'w-2.5 bg-white/50 hover:bg-white/80'
              )}
            />
          ))}
        </div>
      )}
    </section>
  )
}
