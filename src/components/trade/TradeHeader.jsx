import { Link } from 'react-router-dom'
import './trade.css'
const TradeHeader = ({ type = 'buy', title, subtitle, buttonText,linkUrl = ''    }) => {
  return (
      <div className={`my-trade-section ${type}`}>
      <div className="text-box">
        <h2 className="title">{title}</h2>
        <p className="subtitle">{subtitle}</p>
      </div>
      <Link to={linkUrl} className="btn-green">{buttonText}</Link>
    </div>
  )
}

export default TradeHeader