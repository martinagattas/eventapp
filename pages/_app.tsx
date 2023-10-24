import type { AppProps } from 'next/app'
import "../styles/global-styles.scss"

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Component {...pageProps} />
    )
}