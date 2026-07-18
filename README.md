# Solana-NFT-Creator-Dapp
A decentralized NFT Creator DApp built on the Solana blockchain that enables users to mint, manage, and showcase NFTs with low transaction fees and high-speed processing. Features secure wallet integration, metadata storage, and a user-friendly interface.




# 🎨 Solana NFT Creator DApp

[![Next.js](https://img.shields.io/badge/Next.js-13.4.13-black.svg)](https://nextjs.org)
[![Solana](https://img.shields.io/badge/Solana-Devnet-purple.svg)](https://solana.com)
[![Metaplex](https://img.shields.io/badge/Metaplex-v4-orange.svg)](https://metaplex.com)
[![Phantom Wallet](https://img.shields.io/badge/Wallet-Phantom-blue.svg)](https://phantom.app)

A modern, full-featured **Solana NFT Creator DApp** built with **Next.js 13**, **Phantom Wallet**, **Metaplex**, and **SHYFT** that allows users to easily create, upload, and mint NFTs on the Solana blockchain.

---

## ✨ Features

- **Connect Phantom Wallet** – Seamless wallet integration
- **Drag & Drop NFT Upload** – Powered by `react-dropzone`
- **Metadata Upload to IPFS** – Using Pinata
- **NFT Minting** – Using Metaplex & SHYFT SDK
- **Real-time Transaction Status** – Toast notifications
- **Devnet + Mainnet Support** – Easy network switching
- **Responsive Design** – Mobile-friendly UI
- **Formspree Integration** – Contact & feedback form
- **Fast & Secure** – Built with latest Solana web3.js

---

## 🛠 Tech Stack

| Technology              | Version      | Purpose                     |
|------------------------|--------------|-----------------------------|
| Next.js                | 13.4.13      | React Framework             |
| React                  | 18.2.0       | UI Library                  |
| @solana/web3.js        | ^1.95.4      | Solana Interaction          |
| @metaplex/js           | ^4.12.0      | NFT Minting                 |
| @shyft-to/js           | ^0.2.40      | Simplified NFT operations   |
| Phantom Wallet Adapter | Latest       | Wallet Connection           |
| react-dropzone         | ^14.2.3      | File Upload                 |
| Pinata                 | -            | IPFS Storage                |
| react-hot-toast        | ^2.4.1       | Notifications               |

---

## 📋 Prerequisites

Before running the project, make sure you have:

- **Node.js** (v18 or higher)
- **Phantom Wallet** browser extension
- **Solana Devnet SOL** (for testing)
- Accounts on:
  - [Pinata](https://www.pinata.cloud) (IPFS)
  - [SHYFT](https://shyft.to) (API Key)
  - [Formspree](https://formspree.io) (Optional)

---

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Ashfaque965/Solana-NFT-Creator-Dapp.git
cd Solana-NFT-Creator-Dapp
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env.local` file in the root directory:

```env
# Pinata (IPFS)
NEXT_PUBLIC_PINATA_API_KEY = YOUR_PINATA_API_KEY
NEXT_PUBLIC_PINATA_SECRET_KEY = YOUR_PINATA_SECRET_KEY

# SHYFT
NEXT_PUBLIC_SHYFT_API_KEY = YOUR_SHYFT_API_KEY

# Network
NEXT_PUBLIC_NETWORK = devnet
# NEXT_PUBLIC_NETWORK = mainnet-beta

# Formspree (Contact Form)
NEXT_PUBLIC_FORMSPREE_API = YOUR_FORMSPREE_ENDPOINT
```

---

## 🎯 How to Run

```bash
# Development Mode
npm run dev

# Build for Production
npm run build

# Start Production Server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 📱 Usage Guide

1. **Connect Wallet** – Click the "Connect Phantom" button
2. **Upload Image** – Drag & drop your NFT artwork (PNG, JPG, GIF supported)
3. **Fill Metadata**:
   - NFT Name
   - Description
   - Attributes (optional)
4. **Mint NFT** – Click "Create & Mint NFT"
5. **Confirm Transaction** in Phantom Wallet
6. **View your NFT** on Solana Explorer

---

## 🧪 Test Faucets

- Get free devnet SOL from: [Solana Faucet](https://faucet.solana.com)
- Alternative: Use **Alchemy** or **QuickNode** devnet faucets

---

## 📂 Project Structure

```
Solana-NFT-Creator-Dapp/
├── app/                    # Next.js 13 App Router
├── components/             # Reusable UI Components
├── public/                 # Static Assets
├── utils/                  # Helper functions (solana, metaplex, ipfs)
├── hooks/                  # Custom React hooks
├── .env.local              # Environment variables
├── next.config.js
└── package.json
```

📁 Solana NFT Creator DApp - Project Folder Structure


Solana-NFT-Creator-Dapp/
│
├── public/
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   ├── logos/
│   │   └── nft-placeholder.png
│   │
│   ├── favicon.ico
│   ├── manifest.json
│   └── robots.txt
│
├── pages/
│   ├── _app.js
│   ├── _document.js
│   ├── index.js
│   ├── create-nft.js
│   ├── my-nfts.js
│   ├── collection.js
│   ├── dashboard.js
│   ├── about.js
│   ├── contact.js
│   └── api/
│       └── upload.js
│
├── components/
│   ├── Navbar/
│   │   ├── Navbar.jsx
│   │   └── Navbar.module.css
│   │
│   ├── Footer/
│   │   ├── Footer.jsx
│   │   └── Footer.module.css
│   │
│   ├── Hero/
│   │   ├── Hero.jsx
│   │   └── Hero.module.css
│   │
│   ├── Wallet/
│   │   ├── ConnectWallet.jsx
│   │   ├── WalletButton.jsx
│   │   └── WalletProvider.jsx
│   │
│   ├── NFT/
│   │   ├── CreateNFT.jsx
│   │   ├── NFTCard.jsx
│   │   ├── NFTDetails.jsx
│   │   ├── NFTPreview.jsx
│   │   ├── NFTCollection.jsx
│   │   └── NFTMetadata.jsx
│   │
│   ├── Upload/
│   │   ├── ImageUploader.jsx
│   │   ├── DragDrop.jsx
│   │   └── ProgressBar.jsx
│   │
│   ├── Loader/
│   │   └── Loader.jsx
│   │
│   └── UI/
│       ├── Button.jsx
│       ├── Input.jsx
│       ├── Card.jsx
│       ├── Modal.jsx
│       └── Toast.jsx
│
├── context/
│   ├── WalletContext.js
│   └── NFTContext.js
│
├── hooks/
│   ├── useWallet.js
│   ├── useNFT.js
│   └── useUpload.js
│
├── services/
│   ├── solana.js
│   ├── metaplex.js
│   ├── pinata.js
│   ├── shyft.js
│   └── wallet.js
│
├── lib/
│   ├── connection.js
│   ├── constants.js
│   ├── helpers.js
│   ├── upload.js
│   └── validators.js
│
├── utils/
│   ├── uploadToIPFS.js
│   ├── generateMetadata.js
│   ├── formatAddress.js
│   ├── explorerLink.js
│   └── network.js
│
├── styles/
│   ├── globals.css
│   ├── Home.module.css
│   ├── Dashboard.module.css
│   ├── NFT.module.css
│   └── Wallet.module.css
│
├── config/
│   ├── wallet.js
│   ├── network.js
│   └── metaplex.js
│
├── constants/
│   ├── index.js
│   ├── api.js
│   └── network.js
│
├── data/
│   ├── sampleNFT.json
│   └── collections.json
│
├── scripts/
│   ├── deploy.js
│   ├── mintNFT.js
│   └── uploadMetadata.js
│
├── docs/
│   ├── architecture.md
│   ├── deployment.md
│   ├── api.md
│   └── screenshots/
│
├── .env.local
├── .gitignore
├── jsconfig.json
├── next.config.js
├── package.json
├── package-lock.json
├── README.md
└── LICENSE



📂 Folder Description
Folder	Description
public/	Static assets like images, icons, logos, and favicon
pages/	Next.js routing pages and API routes
components/	Reusable React components
context/	React Context API for wallet and NFT state
hooks/	Custom React hooks
services/	Solana, Metaplex, Pinata, and Shyft service integrations
lib/	Shared libraries, helper functions, and blockchain configuration
utils/	Utility functions such as IPFS upload, metadata generation, and address formatting
styles/	Global and modular CSS files
config/	Network and wallet configuration
constants/	Application-wide constants
data/	Sample NFT metadata and mock data
scripts/	Deployment and NFT automation scripts
docs/	Documentation, architecture diagrams, screenshots, and API references
📦 Root Configuration Files
.env.local          # Environment variables
.gitignore          # Git ignored files
package.json        # Dependencies & scripts
next.config.js      # Next.js configuration
jsconfig.json       # JavaScript path aliases
README.md           # Project documentation
LICENSE             # Project license

This structure is scalable and well-suited for a production-ready Solana NFT DApp using Next.js, Phantom Wallet, Metaplex, Pinata, and Shyft.


---

## 🔑 Key Integrations

- **Metaplex JS** – For creating NFTs with proper metadata standards
- **SHYFT SDK** – Simplified NFT creation & management
- **Pinata** – Reliable IPFS pinning service
- **Wallet Adapter** – Supports Phantom and other Solana wallets

---



![Home Page](https://via.placeholder.com/800x500?text=Solana+NFT+Creator+Dashboard)
![Minting Interface](https://via.placeholder.com/800x500?text=Minting+Interface)
![Success Screen](https://via.placeholder.com/800x500?text=NFT+Mint+Success)

---

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm run build
# Deploy via Vercel CLI or connect GitHub repo
```

### Other Platforms
- Netlify
- Railway
- Render

**Note**: Make sure to add all `NEXT_PUBLIC_` environment variables in your hosting platform.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgements

- [Metaplex Foundation](https://metaplex.com)
- [Solana Foundation](https://solana.org)
- [SHYFT.to](https://shyft.to)
- [Pinata Cloud](https://pinata.cloud)
- Phantom Wallet Team

---

## 📞 Support & Contact

Have questions? Feel free to:
- Open an [Issue](https://github.com/Ashfaque965/Solana-NFT-Creator-Dapp/issues)
- Star the repo ⭐
- Share your minted NFTs!

---

**Made with ❤️ for the Solana Community**

---

*Built as part of the Solana NFT Development Journey*
```
