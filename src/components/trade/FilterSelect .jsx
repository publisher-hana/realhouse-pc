
import './trade.css'

const FilterSelect = ({ filters, selectedValues, onChange }) => {
  return (
    <div className="filter-select-area">
      {filters.map((filter, index) => (
        <select
          key={filter.label}
          value={selectedValues[filter.label] || ""}
          onChange={(e) => onChange(filter.label, e.target.value)}
        >
          <option value="">{filter.label}</option>
          {filter.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ))}
    </div>
  );
};

export default FilterSelect;