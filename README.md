﻿# Seed Tracking System using smart contract

This project helps farmers/consumers to get tracking about how the seed was processed and other details such Certification, Lab results,
Date and other information. The following stakeholders are involved
- Seed Producing Agency(SPA)
- Seed Grower
- Seed Processor
- Lab for testing
- Seed Certification Agency
- Distributor

## Technology used
- React.js for UI
- Material UI
- Web3.js
- Truffle
- Metamask wallet
- Solidity
- Ganache

## Installation

# Deploying smart contract
Clone smart contract repository for this porject
```git clone https://github.com/codenikhil1/seedCertification_backend.git```

Then run the below command
```truffle migrate --reset```

# After above steps
- In src/contract.js add contract address to connect as given below
  ```javascript
     import web3 from './web3';
     const address =" paste contract address here ";
  ```
- Paste the ABI from truffle project build/seed.json and paste as given below
  ```javascript
     const abi = " paste abi here "
  ```
- Then
  ```npm start```
  
## Following are process in the application

