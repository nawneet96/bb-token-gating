import { useEffect, useState } from 'react'

export const useIsLargeScreen = (): boolean => {
  const [matches, setMatches] = useState(window.matchMedia('(min-width: 1025px)').matches)

  useEffect(() => {
    window.matchMedia('(min-width: 1025px)').addEventListener('change', (e) => setMatches(e.matches))
    return () => window.matchMedia('(min-width: 1025px)').removeEventListener('change', (e) => setMatches(e.matches))
  }, [])

  return !matches
}
