import Head from "next/head";
import Header from "../components/Header";
import styles from "../styles/home.module.css";

/** TODO @joelmce
 *  Clean up this function, but also fix the tiling
 */
export default function Home({ wallet }) {
  return (
    <>
      <div className={`${styles.container} ${styles.w_container}`}>
        <Head>
          <title>Secret Collective - Virtual Gallery</title>
          <meta name="description" content="Generated by create next app" />
        </Head>

        <Header session={wallet}></Header>

        <div className={styles.header}>
          <div className={styles.headerinner}>
            <h1>Creatively Discreet. </h1>
            <p className={styles.headerlead}>
              <strong>
                Secret Collective presents the virtual gallery built on top of
                the Secret Network. Create, share and immerse yourself in the
                next generation of NFTs in the Cosmos.
              </strong>
            </p>
          </div>
        </div>

        <h2 className={styles.nomargin}>Marketplace.</h2>
        <section id="colors" className={styles.stylesection}>
          <div className={styles.colortiles}>
            <div className={`${styles.colortile} ${styles._1}`}>
              <h6 className={`${styles.colorname} ${styles.black}`}>GENESIS</h6>
              <div className={`${styles.colorinfo} ${styles.dark}`}>
                <div className={styles.gradient}>
                  <div className={styles.colorcode}>Owned by: </div>
                </div>
                <div>This is an awesome gallery.</div>
              </div>
            </div>
            <div className={`${styles.colortile} ${styles._1}`}>
              <h6 className={`${styles.colorname} ${styles.black}`}>GENESIS</h6>
              <div className={`${styles.colorinfo} ${styles.dark}`}>
                <div className={styles.gradient}>
                  <div className={styles.colorcode}>Owned by: </div>
                </div>
                <div>This is an awesome gallery.</div>
              </div>
            </div>
            <div className={`${styles.colortile} ${styles._1}`}>
              <h6 className={`${styles.colorname} ${styles.black}`}>GENESIS</h6>
              <div className={`${styles.colorinfo} ${styles.dark}`}>
                <div className={styles.gradient}>
                  <div className={styles.colorcode}>Owned by: </div>
                </div>
                <div>This is an awesome gallery.</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export function getServerSideProps({ req, res }) {
  return { props: { wallet: req.cookies.wallet ?? null } };
}
