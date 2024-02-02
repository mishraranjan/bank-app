import './TitleTypeTwo.css'
import victor from "../../assets/victor.png";

export default function TitleTypeTwo({className,Title}) {
  return (
    <div className={`titleTypeTwo ${className}`}>
      <h2>{Title}</h2>
    <img src={victor} alt="" className="victor" />
  </div>
  )
}
