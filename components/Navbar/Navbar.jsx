import Link from 'next/link';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import styles from './Navbar.module.css';

export default function Navbar() {
  const { connected } = useWallet();

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          Solana<span className={styles.logoHighlight}>NFT</span>
        </Link>

        {/* Navigation Links */}
        <div className={styles.links}>
          <Link href="/" className={styles.link}>
            Home
          </Link>
          <Link href="/create-nft" className={styles.link}>
            Create NFT
          </Link>
          <Link href="/my-nfts" className={styles.link}>
            My NFTs
          </Link>
          <Link href="/collection" className={styles.link}>
            Collections
          </Link>
          <Link href="/dashboard" className={styles.link}>
            Dashboard
          </Link>
          <Link href="/about" className={styles.link}>
            About
          </Link>
          <Link href="/contact" className={styles.link}>
            Contact
          </Link>
        </div>

        {/* Wallet Button */}
        <div className={styles.walletSection}>
          <WalletMultiButton className={styles.walletButton} />
        </div>
      </div>
    </nav>
  );
}