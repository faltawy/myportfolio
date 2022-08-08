import "@fontsource/inter"
import "@fontsource/montserrat-alternates";
import '../styles/globals.css';
import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import 'animate.css';
import React, { FC } from "react";
import LoadingScreen from "../components/LoadingScreen";



function renderWithLayout(Rfc, props) {
  if (typeof Rfc == ! typeof FC) {
    throw TypeError('The Rfc parameter should be react functional component')
  } else {
    if (Rfc.DefaultLayout) {
      return <Rfc.DefaultLayout><Rfc {...props} /></Rfc.DefaultLayout>
    } else {
      return <Rfc {...props} />
    }
  }
}



function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => { setLoading(false) }, 3000)
  }, []);


  return (
    <>
      <Head>
        <title>Ahmed Hassan</title>
      </Head>
      {/* <LoadingScreen show={loading} /> */}
      {renderWithLayout(Component, { pageProps: pageProps })}
    </>
  )
}


export default MyApp
