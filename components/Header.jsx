import { useAddress, useDisconnect, ConnectWallet } from "@thirdweb-dev/react";
import Link from "next/link";
import React from "react";
import styles from "../styles/Theme.module.css";

export default function Header() {
  // Helpful thirdweb hooks to connect and manage the wallet from metamask.
  const address = useAddress();
  const disconnectWallet = useDisconnect();

  return (
    <div className={styles.header}>
      <div className={styles.center}>
        <Link href="/Sell">
          <a className={styles.headerItem}>Sell</a>
        </Link>
        <Link href="/listings">
          <a className={styles.headerItem}>Listings</a>
        </Link>
        <Link href="/" passHref>
          <img
            src={`/logo.png`}
            alt="Thirdweb Logo"
            className={styles.headerLogo}
          />
        </Link>
        <Link href="/UserVault">
          <a className={styles.headerItem}>Vault</a>
        </Link>
        <Link href="/Profile">
          <a className={styles.headerItem}>Profile</a>
        </Link>
      </div>  
      </div>
  );
}
