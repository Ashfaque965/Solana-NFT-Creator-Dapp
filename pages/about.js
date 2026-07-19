import Link from 'next/link';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="flex justify-between items-center p-6 border-b border-gray-800">
        <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
          Solana NFT Creator
        </Link>
        <WalletMultiButton />
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-6xl font-bold mb-10">About Us</h1>
        
        <div className="prose prose-invert max-w-none text-lg">
          <p className="text-gray-300 leading-relaxed">
            Solana NFT Creator is a powerful and user-friendly platform built to help creators mint NFTs on Solana 
            with minimal fees and lightning-fast transactions.
          </p>
          <p className="text-gray-300 leading-relaxed mt-6">
            Our mission is to democratize NFT creation by removing technical barriers while maintaining full 
            decentralization and security.
          </p>
        </div>
      </div>
    </div>
  );
}