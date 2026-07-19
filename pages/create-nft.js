import { useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export default function CreateNFT() {
  const { connected, publicKey } = useWallet();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!connected || !image) return alert("Please connect wallet and upload image");

    setUploading(true);

    const formData = new FormData();
    formData.append('file', image);
    formData.append('name', name);
    formData.append('description', description);
    formData.append('wallet', publicKey.toString());

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();
    alert(`NFT Metadata uploaded! CID: ${data.cid}`);
    setUploading(false);
  };

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Create New NFT</h1>
          <WalletMultiButton />
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-950 p-8 rounded-2xl border border-gray-800">
          <div>
            <label className="block text-sm mb-2">NFT Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 h-32"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3"
              required
            />
          </div>

          <button
            type="submit"
            disabled={uploading}
            className="w-full py-4 bg-gradient-to-r from-green-500 to-cyan-500 rounded-xl font-bold text-lg disabled:opacity-50"
          >
            {uploading ? 'Uploading to IPFS...' : 'Upload & Mint NFT'}
          </button>
        </form>
      </div>
    </div>
  );
}