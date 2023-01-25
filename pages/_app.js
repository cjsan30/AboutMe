import '../styles/globals.css'
import { createTheme, ListItemText, ThemeProvider } from "@mui/material"
import Layout from "../components/Layout"
import Link from 'next/link'

// Mui에 폰트를 입히기 위한 작업
const theme = createTheme({
  typography: {
    fontFamily: "nanumbarun"
  }
})

export default function App({ Component, pageProps }) {
  return ( 
    <Layout>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Layout>
  )
}
