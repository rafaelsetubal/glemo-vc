# GlemO RWA Product DFD and Requirements V4.7

Updated: 15 September 2026

## Purpose

This document declares the current data flow diagrams and product requirements for the GlemO RWA platform prototype. It replaces legacy DFD interpretations and aligns the documentation with the current V4.7 platform status: public marketplace, role-based workspaces, buyer onboarding, seller asset publication, validator gate, admin clearance, private and public transaction records, Distribution SaaS, AI concierge, partner rails and the future builder ecosystem.

## Scope

The platform is positioned as a neutral liquidity and distribution rail for tokenized real-world assets, with real estate credit as the first proof market. GlemO coordinates discovery, eligibility, evidence, distribution, monitoring, reporting and operating controls. It does not need to become the issuer, bank, custodian, exchange or market maker.

## MVP1 Product Principles

- Public discovery must be clear enough for users to understand available tokenized assets before login.
- Any investment or allocation path must pass wallet, KYC, suitability, jurisdiction and offering-rule checks.
- Sellers and originators must have a controlled workspace to submit entities, assets, evidence, pricing and distribution channels.
- Assets should not be published without evidence review, validator opinion and admin release.
- Sensitive transactions can be placed in standby before execution or public declaration.
- The transaction layer must separate private actor records from sanitized public proof.
- Enterprise revenue should be visible through SaaS, AI concierge, setup, servicing and transaction-fee operations.
- Ethereum and Base are the initial EVM-aligned rails; partner rails remain necessary for custody, payments and reconciliation.
- dApps and plugins are an expansion layer after the first liquidity and distribution loop is proven.

## Product Requirements

| ID | Requirement | Scope | Platform screens |
| --- | --- | --- | --- |
| R1 | Public asset discovery | MVP1 core | market, assetFactSheet, distributionSaas |
| | Marketplace, official distribution channels, asset fact sheet and clear risk labels must be visible before account creation. | | |
| R2 | Buyer account and eligibility | MVP1 core | retailPortal, investorGate, institutionalPortal |
| | Retail and institutional buyers need private profile, wallets, KYC/KYB, suitability, jurisdiction and transaction history. | | |
| R3 | Seller onboarding | MVP1 core | sellerOrgAdmin, bankOps, assetFactory |
| | Banks, originators and approved sellers need entity profile, KYB, signers, plan, asset factory and distribution controls. | | |
| R4 | Validator gate | MVP1 core | validatorDesk, documentReview, complianceCases |
| | Assets cannot go live without evidence review, validator status and admin publication control. | | |
| R5 | Admin transaction clearance | MVP1 core | transactionClearance, adminDashboard |
| | Sensitive transactions can enter standby; seller pre-check helps prepare evidence, but central admin controls platform release in MVP1. | | |
| R6 | Transaction declaration layer | MVP1 core | transactionLayer, ledger, reports |
| | The platform needs private actor ledgers and a public sanitized explorer for activity, proof hashes and chain route status. | | |
| R7 | Revenue operations | MVP1 core | billingRevenue, sellerPlans |
| | SaaS, setup, servicing, transaction fees, invoices, card/crypto payment and collection status must be visible to prove business model. | | |
| R8 | Distribution SaaS | MVP1 beta | distributionSaas, distributionPartner |
| | Enterprise clients need channel map, conversion analytics, external transaction leakage, incentives and partner performance. | | |
| R9 | AI concierge governance | MVP1 beta | aiOps, conciergeDesk |
| | AI requests must capture prompt chain, allowed data scope, human QA, delivery log and customer request history. | | |
| R10 | Rails and chain architecture | MVP1 beta | railPartner, riskEngine, ledger |
| | Ethereum plus Base should be documented as the initial EVM-aligned architecture, with partner rails for custody, payment and reconciliation. | | |
| R11 | Asset technical sheet | MVP1 core | assetFactSheet |
| | Each tokenized asset needs responsible entities, tokenization history, collateral, documents, performance and liquidity behavior. | | |
| R12 | Builder ecosystem | Phase two | ecosystemBuilder |
| | dApps, plugins and extensions should exist as a future expansion layer after marketplace and distribution rail proof. | | |

## Data Flow Diagrams Included

- DFD 00 - Requirements Traceability Map: `dfd_v47_00_requirements_traceability.png` and `dfd_v47_00_requirements_traceability.svg`
- DFD 01 - Platform Context: `dfd_v47_01_platform_context.png` and `dfd_v47_01_platform_context.svg`
- DFD 02 - Buyer Onboarding and Eligibility: `dfd_v47_02_buyer_onboarding.png` and `dfd_v47_02_buyer_onboarding.svg`
- DFD 03 - Originator and Asset Factory: `dfd_v47_03_originator_asset_factory.png` and `dfd_v47_03_originator_asset_factory.svg`
- DFD 04 - Validator and Admin Control Gate: `dfd_v47_04_validator_admin_gate.png` and `dfd_v47_04_validator_admin_gate.svg`
- DFD 05 - Transaction Layer and Public Proof: `dfd_v47_05_transaction_layer.png` and `dfd_v47_05_transaction_layer.svg`
- DFD 06 - Distribution SaaS and Revenue: `dfd_v47_06_distribution_saas.png` and `dfd_v47_06_distribution_saas.svg`
- DFD 07 - AI Agents and Concierge: `dfd_v47_07_ai_concierge.png` and `dfd_v47_07_ai_concierge.svg`
- DFD 08 - Rails Settlement and Reconciliation: `dfd_v47_08_rails_reconciliation.png` and `dfd_v47_08_rails_reconciliation.svg`
- DFD 09 - Builder dApp and Plugin Ecosystem: `dfd_v47_09_builder_ecosystem.png` and `dfd_v47_09_builder_ecosystem.svg`

## Operating Interpretation

The current platform is intentionally broader than a simple token marketplace. The real product is the controlled operating system around the marketplace: buyer qualification, seller supply, evidence, validation, admin release, transaction declaration, reports, paid distribution intelligence and AI-driven enterprise service.

For MVP1, automation should be selective. Manual admin review, validator triage, concierge delivery and reconciliation are acceptable if the workflow has a clear owner, evidence trail, status and ledger event. This gives the platform a credible path to operate with banks and regulated partners before full automation.

## Non Goals For MVP1

- No open secondary market is assumed for the first release.
- The token is not the investment thesis. It supports developer, dApp, AI agent and community incentives.
- The platform should not claim to replace banks, custodians, tokenization providers, legal counsel or market makers.
- The first build should not attempt to automate every compliance, custody or settlement action from day one.
