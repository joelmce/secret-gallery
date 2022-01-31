/** Global */
import "../styles/globals.css";
import styles from "../styles/home.module.css";

/** Ensure styling is normalised globally so we don't get any funky business */
import "normalize.css/normalize.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className={`${styles.container} ${styles.wcontainer}`}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
