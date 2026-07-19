import Link from 'next/link';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export default function Home() {
  const { connected } = useWallet();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black">
      <nav className="flex justify-between items-center p-6">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
          Solana NFT Creator
        </h1>
        <WalletMultiButton />
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-6xl font-bold mb-6">Create. Mint. Own.</h2>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          The fastest and easiest way to create and mint NFTs on Solana.
        </p>

        <div className="flex gap-6 justify-center">
          <Link href="/create-nft">
            <button className="px-10 py-4 bg-gradient-to-r from-green-500 to-cyan-500 rounded-xl font-semibold text-lg hover:scale-105 transition">
              Create NFT
            </button>
          </Link>
          {connected && (
            <Link href="/dashboard">
              <button className="px-10 py-4 border border-gray-600 rounded-xl font-semibold text-lg hover:bg-gray-900 transition">
                Go to Dashboard
              </button>
            </Link>
          )}
        </div>
      </main>
    </div>
  );
}