import Link from 'next/link'
import React from 'react'

import characterWrap from '../scripts/characterWrap'
import { INTRO_COPY } from '../lib/constants'
import DogeHead from './doge-head'




const DogeSidebar = () => {
  
  /* FIX THIS */
 
  
  return (
   

    <div className="doge-sidebar_wrapper">
      
      <div className="doge-sidebar_inner">
        <DogeHead />
        <div className="doge-sidebar_title">
        <Link href={'/featureauction'}>
            <a className="lozenge-button doge-sidebar_history-button">auction</a>
          </Link>
        <Link href={'/charities'}>
            <a className="lozenge-button doge-sidebar_history-button">archive</a>
          </Link>
          {/* <Link href={'/doge-history'}> */}
            {/* <a className="lozenge-button doge-sidebar_history-button">collection</a> */}
          {/* </Link> */}
         </div>
        
      </div>
    </div>
  )
}


export default DogeSidebar;
