import './trade.css'

const TabMenu = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="tab-area">
      {tabs.map((tab) => {
        const labelWithCount = `${tab.label}(${tab.count})`;
        const isActive = activeTab === tab.label;

        return (
          <button
            key={tab.label}
            className={`tab ${isActive ? "active" : ""}`}
            onClick={() => onTabChange(tab.label)}
          >
            {labelWithCount}
          </button>
        );
      })}
    </div>
  );
};

export default TabMenu