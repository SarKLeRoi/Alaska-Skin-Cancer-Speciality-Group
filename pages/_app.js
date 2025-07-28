// pages/_app.js
import React from "react";
import "../styles/global.css"; // You can import global styles here

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
