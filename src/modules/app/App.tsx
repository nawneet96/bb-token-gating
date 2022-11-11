import './App.css'
import { RoutesComponent } from './routes/Routes'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../../styles/globalStyle'
import { getTheme, Themes } from '../../styles/theme'
import { useEagerConnect } from '../../wallet_helpers/walletListner'
export const App = () => {
  const currentTheme = { ...getTheme(Themes.BASIC), selected: Themes.BASIC }
  useEagerConnect()
  console.log('MORALIS_API_KEY', process.env.NODE_ENV);
  
  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <RoutesComponent />
    </ThemeProvider>
  )
}
