# Playwright Automation Framework

## Overview
This is a comprehensive Playwright automation framework built from the ground up, designed to provide a robust, scalable, and efficient testing solution. The framework incorporates best practices in test automation, including Page Object Model (POM), fixtures, API testing, and more.

## 🚀 Key Features
- **Page Object Model (POM)** implementation
- Custom fixtures for enhanced test setup
- API testing capabilities
- Session storage management
- Environment variable configuration
- Relative path handling
- Comprehensive demo tests
- [https://allurereport.org/](Allure Reporting)

## 📋 Prerequisites
- Node.js (v16 or later)
- npm (v8 or later)

## 🛠️ Setup and Installation

### 1. Clone the Repository
```bash
git https://github.com/dnuma/playwright-framework.git
cd playwright-framework
```

### 2. Install Dependencies
```bash
npm install
```

### 4. Install Playwright's browsers
```bash
npx playright install
```

### 5. Configure Environment
Create a `.env` file in the project root with the necessary environment variables:
```
PLAYWRIGHT_USERNAME=standard_user
PLAYWRIGHT_PASSWORD=secret_sauce
```

## 🧪 Running Tests

### Execute All Tests
```bash
npm test "@suite"
```

### Run Specific Test Suites
```bash
# Run authenticate test
npm run test:auth

```

## 📂 Project Structure
```
project-root/
│
├── src/
│   ├── constants/       # Constant values and enums
│   ├── fixtures/        # Custom test fixtures
│   ├── interfaces/      # TypeScript interfaces
│   ├── pages/           # Page Object Model classes
|   ├── tests/           # Test specifications
│   └── utils/           # Utility functions
|
│── playwright.config.ts # Configuration file
├── .env                 # Environment variables
└── package.json         # Project metadata and scripts
```

## 📜 License
This project is licensed under the GNU General Public License v3.0 (GPL-3.0). 

Project Link: [https://github.com/dnuma/playwright-framework.git](https://github.com/dnuma/playwright-framework.git)
