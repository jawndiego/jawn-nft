import Head from '../components/head'
import GoHome from '../components/go-home'
import DogeCardsAuction from '../components/doge-cards-auction'
import CopyBlock from '../components/doge-copy'
import DogeFooter from '../components/doge-footer'

import copy from '../lib/charities-copy'

const primeauction = () => {
  return (
    <>
      <Head
        title="Auction"
        description="A portion of the proceeds from these auctions are being donated to charities across the world."
      />
      <GoHome />
      <section className="doge-home_wrapper">
        <div className="doge-home_border" />
        
        <nav className="doge-home_nav-wrapper">
          

     
        <DogeCardsAuction/>
          
        </nav>
      </section>
    </>
  )
}

export default primeauction
