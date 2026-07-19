import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import Link from 'next/link';

export default function Collection() {
  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="flex justify-between items-center p-6 border-b border-gray-800">
        <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
          Solana NFT Creator
        </Link>
        <WalletMultiButton />
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold mb-8">Collections</h1>

        <div className="bg-gray-950 border border-gray-800 rounded-2xl p-12 text-center">
          <h2 className="text-3xl mb-4">Create Your First Collection</h2>
          <p className="text-gray-400 max-w-md mx-auto mb-8">
            Group your NFTs into collections to increase value and visibility.
          </p>
          <button className="px-10 py-4 bg-gradient-to-r from-green-500 to-cyan-500 rounded-2xl font-semibold">
            Create Collection
          </button>
        </div>

        {/* Future collections will be listed here */}
      </div>
    </div>
  );
}