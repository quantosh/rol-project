import { useEffect, useState } from 'react'

export const useTheme = () => {
  const themeFromStorage = localStorage.getItem('theme')
  const [theme, setTheme] = useState(themeFromStorage || 'light')
  const toggleTheme = () => {
    console.log('excecuted')
    setTheme(prev => {
      const newThemeValue = prev === 'dark' ? 'light' : 'dark'
      localStorage.setItem('theme', newThemeValue)
      return newThemeValue
    })
  }
  // initially set the theme and "listen" for changes to apply them to the HTML tag
  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', theme)
  }, [theme])

  return { theme, toggleTheme }
}
