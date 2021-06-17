import Head from '../components/head'
import GoHome from '../components/go-home'
import CopyBlock from '../components/doge-copy'
import DogeCards from '../components/doge-cards'

import copy from '../lib/charities-copy'

const DogeHistory = () => {
  return (
    <>
      <Head
        title="Archives"
        description="A portion of the proceeds from these auctions are being donated to charities across the world."
      />
      <GoHome />
      <DogeCards/>
    </>
  )
}

export default DogeHistory
