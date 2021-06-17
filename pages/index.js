import Head from '../components/head'
import DogeCards from '../components/doge-cards'
import DogeSidebar from '../components/doge-sidebar'
import ZoraKymCard from '../components/zora-kym-card'

export default function Index({ data }) {
  return (
    
    <>
   
      <Head
        title="Hi."
      />
  
      <DogeSidebar />

    
      <FrontArt />
     
     
        <div>

  
        </div>
      
        <div className={`doge-footer_wrapper`}>
          
        <p><span className="blink">_ </span><a target="_blank" href="https://zora.co/jawn">Zora </a></p>
          <p><span className="blink">_ </span><a target="_blank" href="https://twitter.com/jawnciego">Twitter</a></p>
          <p><span className="blink">_ </span><a target="_blank" href="https://instagram.com/jawndiego">IG </a></p>
        </div>
   
  
      
    </>
  )
};
