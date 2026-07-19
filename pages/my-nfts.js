import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import Link from 'next/link';

export default function MyNFTs() {
  const { connected } = useWallet();

  // Mock data - replace with real data from your backend later
  const nfts = [
    { id: 1, name: "Cyber Ape #001", image: "/assets/images/nft-placeholder.png", mint: "8x...A3kP" },
    { id: 2, name: "Neon Dragon", image: "/assets/images/nft-placeholder.png", mint: "9v...K9mL" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="flex justify-between items-center p-6 border-b border-gray-800">
        <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
          Solana NFT Creator
        </Link>
        <WalletMultiButton />
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold mb-8">My NFTs</h1>

        {!connected ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-400">Please connect your wallet to view your NFTs</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nfts.map((nft) => (
              <div key={nft.id} className="bg-gray-950 border border-gray-800 rounded-2xl overflow-hidden hover:border-cyan-500 transition">
                <img 
                  src={nft.image} 
                  alt={nft.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{nft.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">Mint: {nft.mint}</p>
                  <button className="w-full py-3 bg-gray-900 hover:bg-gray-800 border border-gray-700 rounded-xl transition">
                    View on Explorer
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}