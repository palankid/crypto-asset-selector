# Test Application

The project is designed to showcase a cryptocurrency dropdown selector. The primary goal of the app is to allow users to view and select between various cryptocurrency assets and display the corresponding market data.

---

## Features

### 1. **Dropdown Selector**

- A custom-designed dropdown replicates the provided UI.
- Dropdown displays three assets: **Bitcoin (BTC)**, **Ether (ETH)**, and **Arbitrum (ARB)**.
- Upon selection of an asset, the dropdown updates the displayed asset and fetches relevant market data.

### 2. **Market Data Integration**

- Fetches real-time cryptocurrency data (price and 24-hour price change) using **CoinGecko's free API**.
- Price is displayed in white text, while the 24-hour price change is shown:
  - **Green for positive change**.
  - **Red for negative change**.

### 3. **Technology Stack**

- **Next.js** (using the app router for modern file-based routing).
- **TypeScript** for type safety and better developer experience.
- **Tailwind CSS** for fast and efficient styling.
- **Redux Toolkit** storing, fetching and caching tool

---

## Setup Instructions

Clone the repository from GitHub:

```bash
git clone https://github.com/palankid/crypto-asset-selector.git
```

Navigate to the project directory:

```bash
cd crypto-asset-selector
```

Install the dependencies:

```bash
yarn install
```

## Storybook

There are two ways to run your storybook:

- `yarn storybook` to run Storybook

- `yarn storybook:build` to build Storybook

## Testing

- `yarn test` to run the tests in watch mode
