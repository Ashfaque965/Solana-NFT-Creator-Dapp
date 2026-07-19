import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-black p-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <WalletMultiButton />
      </div>
      <p className="mt-10 text-gray-400">Your minted NFTs will appear here.</p>
    </div>
  );
}