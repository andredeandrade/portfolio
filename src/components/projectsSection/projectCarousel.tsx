'use client'

import Image from 'next/image'
import { useState } from 'react'

type ProjectCarouselProps = {
  images: string[]
  title: string
  type: string
}

export function ProjectCarousel({ images, title, type }: ProjectCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const hasMultipleImages = images.length > 1

  const goToPrevious = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? images.length - 1 : currentIndex - 1,
    )
  }

  const goToNext = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === images.length - 1 ? 0 : currentIndex + 1,
    )
  }

  return (
    <div className="relative min-h-52 overflow-hidden border-b border-cyan-100/10 bg-[linear-gradient(135deg,#1d3556_0%,#12253d_45%,#0e1f35_100%)] sm:min-h-64">
      <div className="absolute -right-8 -top-10 h-40 w-40 rounded-full bg-cyan-300/20 blur-2xl" />
      <div className="absolute -left-8 bottom-0 h-36 w-36 rounded-full bg-blue-400/20 blur-2xl" />

      <div className="absolute left-5 top-6 z-30 rounded-full border border-white/20 bg-[#11253b]/88 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#eafcff] shadow-[0_6px_18px_rgba(4,12,24,0.28)] backdrop-blur-sm">
        {type}
      </div>

      <div className="relative aspect-[16/10] min-h-52 w-full bg-[#0c1b2d] p-5 pt-14 sm:min-h-64 sm:p-6 sm:pt-16">
        <div className="relative h-full w-full overflow-hidden rounded-xl border border-white/10 bg-[#081321] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
          <Image
            src={images[activeIndex]}
            alt={`${title} screenshot ${activeIndex + 1}`}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-contain object-center"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,16,28,0.05)_0%,rgba(8,16,28,0)_28%,rgba(8,16,28,0.14)_100%)]" />
      </div>

      {hasMultipleImages ? (
        <>
          <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-20 flex items-center justify-between px-4">
            <button
              type="button"
              onClick={goToPrevious}
              className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center text-white/85 transition-opacity hover:text-white hover:opacity-100 opacity-80"
              aria-label="Previous screenshot"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            <button
              type="button"
              onClick={goToNext}
              className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center text-white/85 transition-opacity hover:text-white hover:opacity-100 opacity-80"
              aria-label="Next screenshot"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>

          <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-[#0b1a2c]/65 px-3 py-2 backdrop-blur-sm">
            {images.map((image, index) => (
              <button
                key={`${image}-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeIndex
                    ? 'w-6 bg-white'
                    : 'w-2.5 bg-white/35 hover:bg-white/55'
                }`}
                aria-label={`Go to screenshot ${index + 1}`}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  )
}
