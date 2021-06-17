import Head from '../components/head'
import GoHome from '../components/go-home'
import DogeCardsAuction from '../components/doge-cards-auction'
import CopyBlock from '../components/doge-copy'
import DogeFooter from '../components/doge-footer'


const auction = () => {
  return (
    <>
      <Head
        title="Auction"
      />
      <GoHome />
      
      <nav className="doge-home_nav-wrapper">
          

          <DogeCardsAuction /> 

        <div className="doge-home_border" />
        
        
      
       
          
        </nav>
      
    </>
  )
}

export default auction
