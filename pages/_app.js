import "@fontsource/inter"
import "@fontsource/montserrat-alternates";
import '../styles/globals.css';
import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import 'animate.css';
import React, { FC } from "react";



function renderWithLayout(Rfc, props) {
  if (typeof Rfc ==! typeof FC) {
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
  return (
    <>
      <Head>
        <title>Ahmed Hassan</title>
      </Head>
      {renderWithLayout(Component, { pageProps: pageProps })}
    </>
  )
}

export default MyApp
