import Link from 'next/link'
import { NFTPreview } from "@zoralabs/nft-components";

import { NFT_LIST_AUCTION } from '../lib/constants_auction'

const DogeCardAuction = (props) => {
  return (
    <Link passHref href={`/jawn/${props.doge.slug}`}>
      <a className="doge-card_wrapper shadow">
        <div className="doge-card_wrapper-inner">
          <NFTPreview id={props.doge.id} />
        </div>
      </a>
    </Link>
  )
}

const DogeCardsAuction = () => {
  return (
    <>
      {NFT_LIST_AUCTION.map(
        (item, i) => (
          <div className="doge-cards_list-item" key={`${item.id}-${i}`}>
            <DogeCardAuction doge={item} index={i}/>
          </div>
        )
      )}
    </>
  )
}

export default DogeCardsAuction
