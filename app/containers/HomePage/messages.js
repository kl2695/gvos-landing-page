/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  landingPageHeader: {
    id: 'app.homepage.header', 
    defaultMessage: 'GVOS', 
  },
  landingPageTagline: {
    id: 'app.homepage.description',
    defaultMessage: 'A Distributive Protocol for Asset Tokenization and Decentralized Exchange',
  },
  whatisGVOS: {
    id: 'app.homepage.gvos',
    defaultMessage: 'What is GVOS?',
  },
  gvosDescription: {
    id: 'app.homepage.gvosDescription',
    defaultMessage: "GVOS is an open protocol and blockchain platform that empowers businesses and individuals to tokenize and trade digital assets. At the center of GVOS is a core group of sidechains that provide asset tokenization, identity management, asset registration, decentralized storage, and cross chain asset transfer services to supplement the core decentralized exchange business. Any organization or individual can join the community as a sidechain and leverage the GVOS platform's core sidechains to securely and efficiently transfer assets in a decentralized manner."
  },
  problemHeader: {
    id: 'app.homepage.problem.header',
    defaultMessage: "What We're Trying to Solve",
  },
  problems1: {
    id: 'app.homepage.problems1',
    defaultMessage: "Low transaction throughput hinders usability and stands in the way of mainstream blockchain adoption. Decentralized exchange protocols, in particular, require extremely fast transaction speeds.",
  },
  problems2: {
    id: 'app.homepage.problems2',
    defaultMessage: "As cryptocurrencies and blockchains gain more traction, we need a solution that allows blockchains to effectively reach global scale and to support the vastly growing number of new cryptoassets.",
  },
  problems3: {
    id: 'app.homepage.problems3',
    defaultMessage: "Current decentralized exchange protocols are restricted to tokens built on specific networks. Exchanging assets that exist on totally different blockchains is still an inconvenient, expensive process that relies on centralized third party exchanges.",
  },
  decentralizedExchange: {
    id: 'app.homepage.decentralizedExchange',
    defaultMessage: "At the very core of our platform is a blockchain-agnostic decentralized exchange protocol. Users and organizations can easily register and tokenize digital assets, and they can trade them with any other asset created on our platform. Unlike other decentralized exchange protocols, GVOS is interoperable with other existing blockchain networks, meaning that users can also trade their assets for Bitcoin and Ethereum. These assets are exchanged on our platform through use of the latest sidechain and atomic swap technology, ensuring that our exchange processes are extremely efficient and scalable.",
  },
  technology1: {
    id: 'app.homepage.technology1',
    defaultMessage: "Our consensus algorithm stores a backup of the entire GVOS blockchain history on Ethereum, adding an additional level of security to our platform."
  },
  technology2: {
    id: 'app.homepage.technology2',
    defaultMessage: "Sidechains are an innovative, powerful technology that allow blockchains  to scale effectively while offering users the ability to deploy their own native tokens on independent customized, modular networks. "
  },
  technology3: {
    id: 'app.homepage.technology3',
    defaultMessage: "Our main blockchain uses Delegated Proof of Stake, the consensus mechanism with the highest proven transaction throughput, which has been further optimized for scalability and efficiency."
  },
  technology4: {
    id: 'app.homepage.technology4',
    defaultMessage: "Using the latest atomic swap technology, we are attempting to solve the problem of blockchain interoperability by creating a blockchain-agnostic decentralized exchange protocol that allows users to exchange assets, no matter what blockchains they're built on."
  },
  startProjectHeader: {
    id: 'boilerplate.containers.HomePage.start_project.header',
    defaultMessage: 'What is GVOS?',
  },
  startProjectMessage: {
    id: 'boilerplate.containers.HomePage.start_project.message',
    defaultMessage:
      "GVOS is an open protocol and blockchain platform that empowers businesses and individuals to tokenize and trade digital assets. At the center of GVOS is a core group of sidechains that provide asset tokenization, identity management, asset registration, decentralized storage, and cross chain asset transfer services to supplement the core decentralized exchange business. Any organization or individual can join the community as a sidechain and leverage the GVOS platform's core sidechains to securely and efficiently transfer assets in a decentralized manner.",
  },
  trymeHeader: {
    id: 'boilerplate.containers.HomePage.tryme.header',
    defaultMessage: 'Try me!',
  },
  trymeMessage: {
    id: 'boilerplate.containers.HomePage.tryme.message',
    defaultMessage: 'Show Github repositories by',
  },
  trymeAtPrefix: {
    id: 'boilerplate.containers.HomePage.tryme.atPrefix',
    defaultMessage: '@',
  },
});
