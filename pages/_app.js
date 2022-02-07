/** Global */
import "../styles/globals.css";

/** Ensure styling is normalised globally so we don't get any funky business */
import "normalize.css/normalize.css";

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  );
}

export default MyApp;
