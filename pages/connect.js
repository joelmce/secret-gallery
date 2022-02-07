import Head from "next/head";
import styles from "../styles/home.module.css";
import cookie from "js-cookie";

/**
 * Ask the user to connect their Keplr wallet
 */
const connect_wallet = async (p) => {
  p.preventDefault();
  try {
    if (!window.getOfflineSigner || !window.keplr) {
      return alert("Please install Keplr");
    }

    let chainId = "secret-4"; // Maybe we need to make this dynamic
    await window.keplr.enable(chainId);

    const offlineSigner = window.getOfflineSigner(chainId);
    const accounts = await offlineSigner.getAccounts();
    let accountAddress = accounts[0].address; // User's connected address

    if (accountAddress /* Success */) {
      cookie.set("wallet", accountAddress);
      window.location.href = "/"
    }
  } catch (e) {
    console.log("Sorry, there was an error with connecting your wallet: " + e);
  }
};

export const disconnect = async(p) => {
  p.preventDefault();

  cookie.remove("wallet");
  window.location.href = "/connect"
}

export default function Connect() {
  return (
    <>
      <Head>
        <title>Secret Collective - Virtual Gallery</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <div className={styles.header}>
        <div className={styles.header_inner}>
          <h1>Connect your wallet.</h1>
        </div>
        <a
          className={`${styles.primary_button} ${styles.w_button}`}
          onClick={connect_wallet}
        >
          Connect Keplr
        </a>
      </div>
      <h2 className={styles.no_margin}>Secret Collective.</h2>
    </>
  );
}
