import { useEffect, useState } from 'react'

export const UseIsBigScreen = (): boolean => {
  const [matches, setMatches] = useState(window.matchMedia('(max-width: 1283px)').matches)

  useEffect(() => {
    window.matchMedia('(max-width: 1283px)').addEventListener('change', (e) => setMatches(e.matches))
    return () => window.matchMedia('(max-width: 1283px)').removeEventListener('change', (e) => setMatches(e.matches))
  }, [])

  return !matches
}
