/** Global */
import "../styles/globals.css";
import styles from "../styles/home.module.css";

/** Ensure styling is normalised globally so we don't get any funky business */
import "normalize.css/normalize.css";

/** NO CONTAINER PRESENT. Gallery.js needs no container 
 * TODO: @joelmce Fix global containers
*/
function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  );
}

export default MyApp;
