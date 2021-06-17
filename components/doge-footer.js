import Image from 'next/image'

const DogeFooter = (props) => {
  return (
    <div className={`doge-footer_wrapper ${props.location}`}>
      <p><span className="blink">_ </span><a target="_blank" href="https://zora.co/jawn">Zora </a></p>
          <p><span className="blink">_ </span><a target="_blank" href="https://twitter.com/jawnciego">Twitter</a></p>
          <p><span className="blink">_ </span><a target="_blank" href="https://instagram.com/jawndiego">IG </a></p>
     
    </div>
  )
}

export default DogeFooter;