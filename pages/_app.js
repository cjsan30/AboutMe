import '../styles/globals.css'
import { ThemeProvider, CssBaseline } from "@mui/material"
import { CacheProvider } from "@emotion/react";

import createEmotionCache from "../util/createEmotionCache";

const clientSideEmotionCache = createEmotionCache();


const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;  

  return (
    <CacheProvider value={emotionCache}>
        <CssBaseline />
        <Component {...pageProps} />
    </CacheProvider>
  )
}

export default MyApp;