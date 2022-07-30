import "@fontsource/inter"
import "@fontsource/montserrat-alternates";
import '../styles/globals.css';
import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import 'animate.css';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ahmed Hassan</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
