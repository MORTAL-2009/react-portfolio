import { useEffect, useRef } from 'react'

function useScrollAnimation() {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return undefined

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.classList.add('is-visible')
        observer.unobserve(element)
      }
    })

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return ref
}

export default useScrollAnimation
