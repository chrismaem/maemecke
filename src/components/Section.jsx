import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Section({ id, children, className = '', skeleton }) {
  const [ref, isVisible] = useScrollReveal(0.05)

  return (
    <section
      id={id}
      ref={ref}
      className={`py-24 md:py-32 ${className}`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {isVisible ? children : (skeleton || <DefaultSkeleton />)}
      </div>
    </section>
  )
}

function DefaultSkeleton() {
  return (
    <div className="space-y-6">
      <div className="h-10 w-48 skeleton-shimmer rounded mx-auto" />
      <div className="space-y-3">
        <div className="h-4 skeleton-shimmer rounded w-full" />
        <div className="h-4 skeleton-shimmer rounded w-5/6" />
        <div className="h-4 skeleton-shimmer rounded w-4/6" />
      </div>
    </div>
  )
}

// ─── Skeleton variants for specific sections ────────────────────────────────

export function ClientsSkeleton() {
  return (
    <div className="space-y-6">
      {/* Skeleton for the 4-column facts grid */}
      <div className="mb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {[...Array(4)].map((_, idx) => (
          <div key={idx}>
            <div className="h-4 w-24 skeleton-shimmer rounded mx-auto mb-2" />
            <div className="h-6 w-20 skeleton-shimmer rounded mx-auto" />
          </div>
        ))}
      </div>
      <div className="h-4 w-56 skeleton-shimmer rounded mx-auto" />
      <div className="w-full flex flex-col items-center max-w-5xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-y-8 gap-x-10 md:gap-x-14 w-full">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center justify-center h-12 w-[120px] skeleton-shimmer rounded" />
          ))}
        </div>
        <div className="flex flex-wrap justify-center items-center gap-y-8 gap-x-10 md:gap-x-14 w-full mt-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center justify-center h-12 w-[120px] skeleton-shimmer rounded" />
          ))}
        </div>
      </div>
    </div>
  )
}

export function AboutSkeleton() {
  return (
    <div className="grid md:grid-cols-3 gap-12 items-center">
      <div className="md:col-span-1 flex justify-center">
        <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl skeleton-shimmer" />
      </div>
      <div className="md:col-span-2 space-y-4">
        <div className="h-10 w-40 skeleton-shimmer rounded" />
        <div className="h-4 skeleton-shimmer rounded w-full" />
        <div className="h-4 skeleton-shimmer rounded w-full" />
        <div className="h-4 skeleton-shimmer rounded w-5/6" />
        <div className="h-4 skeleton-shimmer rounded w-full mt-4" />
        <div className="h-4 skeleton-shimmer rounded w-4/5" />
        <div className="h-4 skeleton-shimmer rounded w-3/4" />
      </div>
    </div>
  )
}

export function ExperienceSkeleton() {
  return (
    <div className="space-y-8">
      <div className="h-10 w-48 skeleton-shimmer rounded mx-auto" />
      <div className="relative">
        {/* Timeline vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-neutral-200 dark:bg-neutral-700 md:-translate-x-px" style={{zIndex:0}} />
        <div className="space-y-12 md:space-y-6">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`relative flex flex-col md:flex-row ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start md:items-center ${i !== 0 ? 'md:-mt-16' : ''}`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full -translate-x-1/2 mt-1.5 md:mt-0 z-10 bg-neutral-300 dark:bg-neutral-600" />
              {/* Content card skeleton */}
              <div className={`ml-10 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="relative p-6 rounded-xl bg-light-card dark:bg-dark-card transition-colors duration-200">
                  {/* Dual logo skeletons */}
                  <div className="absolute top-6 right-6 flex flex-row items-center gap-3">
                    <div className="h-6 w-16 skeleton-shimmer rounded" />
                    {i === 4 && <div className="h-6 w-16 skeleton-shimmer rounded" />} {/* Show dual for last card */}
                  </div>
                  <div className="h-3 w-24 skeleton-shimmer rounded mb-2" /> {/* Dates */}
                  <div className="flex items-center gap-2 mt-4">
                    <div className="h-5 w-40 skeleton-shimmer rounded" /> {/* Title */}
                    {i === 0 && (
                      <div className="h-5 w-12 skeleton-shimmer rounded-full ml-2" />
                    )}
                  </div>
                  <div className="h-4 skeleton-shimmer rounded w-full mt-3" />
                  <div className="h-4 skeleton-shimmer rounded w-4/5" />
                  {/* Logo rows for clients/companies/thesis */}
                  {(i === 1 || i === 3) && (
                    <div className="flex flex-wrap items-center gap-4 mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-700">
                      <div className="h-4 w-16 skeleton-shimmer rounded" />
                      {[...Array(4)].map((_, j) => (
                        <div key={j} className="h-5 w-12 skeleton-shimmer rounded" />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
          {/* Dot for 'past' at the bottom of the timeline */}
          <div className="relative h-8">
            <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-neutral-400 dark:bg-neutral-600 rounded-full -translate-x-1/2 z-10" title="Past" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function SkillsSkeleton() {
  return (
    <div className="space-y-8">
      <div className="h-10 w-48 skeleton-shimmer rounded mx-auto" />
      <div className="grid md:grid-cols-2 gap-8">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="p-6 rounded-xl space-y-4">
            <div className="h-4 w-36 skeleton-shimmer rounded" />
            <div className="flex flex-wrap gap-2">
              {[...Array(5)].map((_, j) => (
                <div key={j} className="h-8 w-24 skeleton-shimmer rounded-lg" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function ProjectsSkeleton() {
  return (
    <div className="space-y-8">
      <div className="h-10 w-40 skeleton-shimmer rounded mx-auto" />
      <div className="grid md:grid-cols-2 gap-8">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="rounded-2xl overflow-hidden">
          <div className="w-full h-56 md:h-72 skeleton-shimmer" />
          <div className="p-8 space-y-3">
            <div className="h-6 w-64 skeleton-shimmer rounded" />
            <div className="h-4 skeleton-shimmer rounded w-full" />
            <div className="h-4 skeleton-shimmer rounded w-5/6" />
            <div className="h-6 w-28 skeleton-shimmer rounded-full mt-2" />
            <div className="flex gap-1.5 mt-2">
              {[...Array(4)].map((_, j) => (
                <div key={j} className="h-6 w-16 skeleton-shimmer rounded-md" />
              ))}
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export function TestimonialsSkeleton() {
  return (
    <div className="space-y-8">
      <div className="h-10 w-52 skeleton-shimmer rounded mx-auto" />
      <div className="grid md:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="p-6 rounded-xl space-y-4">
            <div className="h-8 w-8 skeleton-shimmer rounded" />
            <div className="space-y-2">
              <div className="h-3 skeleton-shimmer rounded w-full" />
              <div className="h-3 skeleton-shimmer rounded w-full" />
              <div className="h-3 skeleton-shimmer rounded w-4/5" />
            </div>
            <div className="pt-4 space-y-2">
              <div className="h-4 w-24 skeleton-shimmer rounded" />
              <div className="h-3 w-36 skeleton-shimmer rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function ContactSkeleton() {
  return (
    <div className="text-center max-w-xl mx-auto space-y-6">
      <div className="h-10 w-52 skeleton-shimmer rounded mx-auto" />
      <div className="h-4 skeleton-shimmer rounded w-full" />
      <div className="h-4 skeleton-shimmer rounded w-3/4 mx-auto" />
      <div className="flex justify-center gap-4 pt-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-12 w-32 skeleton-shimmer rounded-md" />
        ))}
      </div>
    </div>
  )
}





