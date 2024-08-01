import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './CustomSelect.css';

const CustomSelect = ({
  isClearable = false,
  isSearchable = false,
  isDisabled = false,
  options,
  value,
  placeholder = 'Select...',
  isGrouped = false,
  isMulti = false,
  onChangeHandler,
  onMenuOpen,
  onSearchHandler,
  title
}) => {
  const [selectedValue, setSelectedValue] = useState(value || (isMulti ? [] : ''));
  const [searchText, setSearchText] = useState('');
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setFilteredOptions(
      options.filter(option =>
        option.label.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }, [searchText, options]);

  useEffect(() => {
    setSelectedValue(value || (isMulti ? [] : ''));
  }, [value, isMulti]);

  const handleSelect = (selected) => {
    if (isMulti) {
      const newValue = [...selectedValue];
      if (newValue.includes(selected)) {
        newValue.splice(newValue.indexOf(selected), 1);
      } else {
        newValue.push(selected);
      }
      setSelectedValue(newValue);
      onChangeHandler(newValue);
    } else {
      setSelectedValue(selected);
      onChangeHandler(selected);
    }
  };

  const handleClear = () => {
    const newValue = isMulti ? [] : '';
    setSelectedValue(newValue);
    onChangeHandler(newValue);
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    if (onSearchHandler) {
      onSearchHandler(e.target.value);
    }
  };

  return (
    <div className={`kzui-select ${isDisabled ? 'kzui-select--disabled' : ''}`}>
      {title && <label className="kzui-select__title">{title}</label>}
      <div className="kzui-select__control" onClick={() => {
        if (!isDisabled) {
          setIsOpen(!isOpen);
          if (onMenuOpen) {
            onMenuOpen();
          }
        }
      }}>
        <div className="kzui-select__value">
          {isMulti ? 
            (selectedValue.join(', ')) : 
            selectedValue || placeholder
          }
        </div>
        {isClearable && !isDisabled && selectedValue && (
          <button className="kzui-select__clear" onClick={handleClear}>×</button>
        )}
      </div>
      {isOpen && (
        <div className="kzui-select__menu">
          {isSearchable && (
            <input 
              type="text" 
              value={searchText} 
              onChange={handleSearch} 
              className="kzui-select__search" 
              placeholder="Search..." 
            />
          )}
          <div className="kzui-select__options">
            {isGrouped ? (
              Array.from(new Set(filteredOptions.map(option => option.group))).map(group => (
                <div key={group} className="kzui-select__group">
                  <div className="kzui-select__group-label">{group}</div>
                  {filteredOptions.filter(option => option.group === group).map(option => (
                    <div
                      key={option.value}
                      className={`kzui-select__option ${selectedValue.includes(option.value) ? 'kzui-select__option--selected' : ''}`}
                      onClick={() => !isDisabled && handleSelect(option.value)}
                    >
                      {option.label}
                    </div>
                  ))}
                </div>
              ))
            ) : (
              filteredOptions.map(option => (
                <div
                  key={option.value}
                  className={`kzui-select__option ${selectedValue.includes(option.value) ? 'kzui-select__option--selected' : ''}`}
                  onClick={() => !isDisabled && handleSelect(option.value)}
                >
                  {option.label}
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};




CustomSelect.propTypes = {
  title: PropTypes.string, 
  isClearable: PropTypes.bool,
  isSearchable: PropTypes.bool,
  isDisabled: PropTypes.bool,
  options: PropTypes.array.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  placeholder: PropTypes.string,
  isGrouped: PropTypes.bool,
  isMulti: PropTypes.bool,
  onChangeHandler: PropTypes.func.isRequired,
  onMenuOpen: PropTypes.func,
  onSearchHandler: PropTypes.func
};

export default CustomSelect;
