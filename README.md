# Crypto Asset Selector

[![CI](https://github.com/palankid/crypto-asset-selector/actions/workflows/ci.yml/badge.svg)](https://github.com/palankid/crypto-asset-selector/actions/workflows/ci.yml)

The project is designed to showcase a cryptocurrency dropdown selector. The primary goal of the app is to allow users to view and select between various cryptocurrency assets and display the corresponding market data.

You can view the live production build [here](https://crypto-asset-selector.vercel.app).

---

## Features

### 1. **Dropdown Selector**

- A custom-designed dropdown replicates the provided UI.
- Dropdown displays three assets: **Bitcoin (BTC)**, **Ether (ETH)**, and **Arbitrum (ARB)**.
- Upon selection of an asset, the dropdown updates the displayed asset.
- Accessibility and keyboard navigation were not included, as I observed that similar components in your application also lack these features.

### 2. **Market Data Integration**

- Fetches real-time cryptocurrency data (price and 24-hour price change) using **CoinGecko's free API**.
- Price is displayed in white text, while the 24-hour price change is shown:
  - **Green for positive change**.
  - **Red for negative change**.
- Saved selection is persisted and reloaded when the application runs again.

### 3. **Technology Stack**

- **Next.js** (using the app router for modern file-based routing).
- **TypeScript** for type safety and better developer experience.
- **Tailwind CSS** for fast and efficient styling.
- **Redux Toolkit** storing, fetching and caching tool.
- **Storybook** for developing and testing UI components in isolation.
- **Vitest** for unit testing and component testing.
- **Cypress** for end-to-end testing.

---

## Prerequisites

- **Node.js** (version 22.x or higher)
- **Yarn** (version 1.22.22 or higher)

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

## Environment Variables

Create a `.env.local` file in the root of the project and add the following environment variables:

```
COINGECKO_API_KEY=Your Coingecko API key
```

## Running the Application

To start the development server, run:

```bash
yarn dev
```

## Build Instructions

To build the application for production, run:

```bash
yarn build
```

To run the production build locally, run:

```bash
yarn start
```

## Folder Structure

The project has the following folder structure:

```
crypto-asset-selector/
├── .github/             # GitHub Actions workflows
├── .storybook/          # Storybook configuration files
├── cypress/             # E2E test cases and related files
├── public/              # Public assets
├── src/                 # Source code
│   ├── app/             # Next.js app folder with some API logic
│   │   ├── api/         # API routes to handle server-side logic and secure sensitive keys
│   │   └── ...          # Other page related files and folders
│   ├── components/      # General purpose components
│   ├── definitions/     # Constants and related logic
│   ├── features/        # Page implementations, related tests, page-specific components, store slices, hooks
│   ├── hooks/           # General purpose React hooks
│   ├── store/           # Store setup and general purpose state slices
│   ├── theme/           # Tailwind CSS related helpers
│   └── utils/           # Utility functions
├── .env.local           # Environment variables
└── ...                  # Other project-specific configuration files
```

## Storybook

There are two ways to run your storybook:

- `yarn storybook` to run Storybook

- `yarn storybook:build` to build Storybook

The UI component tests use the already configured stories in Storybook.

## Testing

- `yarn test` to run the tests in watch mode

## End-to-End Testing with Cypress

Cypress is used for end-to-end testing. You can run Cypress tests using the following commands:

- `yarn cypress:open` to open the Cypress Test Runner in interactive mode.

- `yarn cypress:run` to run the Cypress tests in headless mode.

## Continuous Integration with GitHub Actions

This project uses GitHub Actions for continuous integration. The CI pipeline is configured to:

- Run tests to ensure code quality.
- Build the application to check for any build issues.
- Run end-to-end tests using Cypress.

The GitHub Actions workflow file is located in `.github/workflows/ci.yml`.
