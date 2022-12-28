import Navbar from '../components/Navbar'
import '../styles/globals.css'
import { AuthContextProvider } from '../context/AuthContext'


export default function App({ Component, pageProps }) {
  return (
    <>
    <AuthContextProvider>
    <Navbar/>
    <Component {...pageProps} />
    </AuthContextProvider>
    </>
  )
}
