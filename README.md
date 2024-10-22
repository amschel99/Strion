# 🪙 Cross-Chain Staking & Lending Platform

## Overview
 a **cross-chain decentralized finance (DeFi)** platform that enables users to stake USDT on Ethereum  or any other chain and receive wrapped tokens (**Token C**) on  Union . Users can use **Token C** as collateral to borrow assets provided by **Automated Market Makers (AMMs)** from multiple chains. AMMs are incentivized to lend assets by setting their interest rates, while collateral liquidation ensures both platform revenue and lender security.

---

## Problem
Cross-chain liquidity and collateral efficiency in decentralized finance are still limited. Users lack the ability to:
- Seamlessly stake assets on one chain and utilize their collateral  to access assets across multiple chains.

---

## Solution: Our Cross-Chain Platform

1. **Staking & Collateralization**
   - **Stake USDT on one chain**: Users deposit USDT and receive a 1:1 representation of it in **Token C** on our platform.
   - **Cross-Chain Collateral**: **Token C** can be used as collateral  to borrow other assets on multiple chains.eg. they can be used to borrow stable coins, shit coins, etc
     

2. **Decentralized Lending**:
   - **AMMs Lend Assets**: AMMs can lend stablecoins, volatile tokens, and other cross-chain assets.They use an LTV of example 70% percent so that borrowers can only borrow upto 70% of the locked value
   - **Customizable Lending Rates**: AMMs set their own lending rates, fostering a competitive, decentralized lending environment.

3. **Collateral Forfeiture & Revenue**:
   - **Borrowing Threshold**: Users must repay their loans before hitting a time based threshold
   - **Failure to Repay**: If borrowers default, the locked collateral is liquidated:
     - **70% + 3/4** of the collateral goes to the AMMs as compensation.
     - **1/4** goes to the platform, generating consistent revenue.
   - **Repayment with Interest**: If borrowers repay on time, they must pay with interest, shared between the AMMs and the platform.

---

## Key Features

### 🛠 Cross-Chain Compatibility
- **Union Chain** serves as the backbone, providing a decentralized light-client solution to track the state of multiple chains

### ⚖️ Collateralized Borrowing
- Borrowers can lock **Token C** as collateral and borrow assets from various chains, with a **Loan-to-Value (LTV)** ratio of **up to 70%**.

### 💸 Automated Market Makers (AMMs)
- **AMMs** provide liquidity in multiple assets, including stablecoins and volatile tokens. They determine how much they are willing to lend based on the borrower’s collateral and LTV

### 🔐 Penalty & Liquidation
- A clear liquidation mechanism where, upon default:
  - **70% + 3/4** of the collateral is given to AMMs.
  - **1/4** of the collateral is retained by the platform as revenue.

### 📈 Interest-Based Incentives
- Borrowers who repay on time pay **interest**. A portion of the interest goes to the AMM, and a portion goes to the platform.

---

## Why Invest in This Platform?

1. **Cross-Chain Liquidity**: Tapping into the multi-chain ecosystem provides a wide range of liquidity options for borrowers.
2. **Incentivized Lending**: By securing over-collateralized positions and offering interest, AMMs are strongly incentivized to participate.
3. **Revenue for the Platform**: The platform earns from liquidation penalties and a portion of interest payments, making it self-sustaining.
4. **Risk Management**: Our clear LTV limit (70%) and penalty system ensure that AMMs are protected from bad loans.


---


---
```mermaid
graph TD;
    A[User] -->|Stake USDT| B[Wrapper Token C]
    B -->|Use as Collateral| C[AMMs (Lenders)]
    C -->|Provide Liquidity| D[Multi-Chain Liquidity Pools]
    D -->|Offer Assets| E[Borrowers]
    E -->|Request to Borrow| F[Different Assets]
    F -->|Borrow| G[Receive Assets]
    E -->|Pay Interest| C
    E -->|Liquidation Penalties| H[Penalty System]
    H -->|Distribute| I[Platform Revenue]
    I -->|Part of Interest| C
    I -->|Liquidation Fees| J[Platform Earnings]
    
    %% Adding additional flow arrows to show relationships
    B -->|Repay| C
    C -->|Earnings| K[Incentive Rewards]
    
    %% Subgraphs for better organization
    subgraph Users
        A
        E
    end
    
    subgraph Lenders
        C
    end
    
    subgraph Platform
        B
        D
        H
        I
        K
        J
    end

    %% Flow labels for clarity
    classDef flow fill:#f9f,stroke:#333,stroke-width:2px;
    class A,B,C,D,E,F,G,H,I,K flow;

```
