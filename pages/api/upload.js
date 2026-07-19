import formidable from 'formidable';
import { createClient } from '@supabase/supabase-js'; // or use nft.storage / pinata

export const config = {
  api: { bodyParser: false },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const form = formidable({});

  const [fields, files] = await form.parse(req);
  const file = files.file[0];

  // TODO: Upload to IPFS (nft.storage, Pinata, or Arweave)
  // For now, returning mock response
  res.status(200).json({
    success: true,
    cid: "QmMockCID123456789",
    url: "https://ipfs.io/ipfs/QmMockCID123456789",
    message: "Metadata uploaded successfully"
  });
}
