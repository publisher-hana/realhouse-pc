import './trade.css'
import { Link } from 'react-router-dom';

const InquiryCard = ({ 
    agentName, 
    status, 
    statusClassName,
    dealType, 
    propertyType, 
    address, 
    stats, 
    contractDate, 
    type, 
  }) => {
    let statsContent;

    if (type === 'buy') {
      statsContent = (
        <p className="stats">
          고객관심 <em className={stats.customer ? 'red' : ''}>{stats.customer}</em> / 
          공인중개사 관심 <em className={stats.agent ? 'red' : ''}>{stats.agent}</em> / 
          방문요청 <em className={stats.request ? 'red' : ''}>{stats.request}</em> / 
          방문완료 <em className={stats.complete ? 'red' : ''}>{stats.complete}</em>
        </p>
      );
    } else if (type === 'sell') {
      statsContent = <p className="stats">계약등록일: {contractDate}</p>;
    }

    return (
      <li className="inquiry-card">
        <Link to="">
          <div className="title">
            <strong>{agentName}</strong>
            {status && 
              <span className={`badge ${statusClassName || ''}`}>
                {status}
              </span>
            }
          </div>
          <p className="info">{`${dealType} | ${propertyType} | ${address}`}</p>
          {statsContent}
        </Link>
      </li>
    );
};

export default InquiryCard