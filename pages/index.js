import Head from '../components/head'
import DogeSidebar from '../components/doge-sidebar'
import FrontArt from '../components/frontart'




export default function Index({ data }) {
  return (
    <>
      <Head
        title="Hi."
      />
     
      <DogeSidebar/>
      <section className="doge-home_wrapper">
        <div className="doge-home_border" />
        
        <nav className="doge-home_nav-wrapper">

        <FrontArt />  

        </nav>
        <div className={`doge-footer_wrapper`}>
        <p><span className="blink">_ </span><a target="_blank" href="https://zora.co/jawn">Zora </a></p>
          <p><span className="blink">_ </span><a target="_blank" href="https://twitter.com/jawnciego">Twitter</a></p>
          <p><span className="blink">_ </span><a target="_blank" href="https://instagram.com/jawndiego">IG </a></p>
        </div>
      </section>
  
      
    </>
  )
};
