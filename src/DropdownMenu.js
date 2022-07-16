import React, { useState } from 'react';
import expand from './expand.png'
import collapse from './collapse.png'
import './dropdown.css';

const DropdownMenu = ({ options, type }) => {

  const [selected, setSelected] = useState([])
  const [selectAll, setSelectAll] = useState(false)
  const [showDropDownList, setShowDropDown] = useState(false)

  const toggleSelected = (e, { option }) => {
      type === 'multi' ? setSelected(prevSelected => {
          const selectedOptions = [...prevSelected]
          if (selectedOptions.includes(option.label)) {
              selectedOptions.length === 0 && toggleSelectAll()
              return selectedOptions.filter(item => item !== option.label)
          } else {
              selectedOptions.push(option.label)
              selectedOptions.length === options.length && toggleSelectAll()
              return selectedOptions;
          }
      }) :
      setSelected(prevSelected => {
        const selectedOptions = [...prevSelected]
        if (selectedOptions.includes(option.label)) {
            return selectedOptions.filter(item => item !== option.label)
        } else {
            selectedOptions[0] = option.label
            return selectedOptions;
        }
    })
  }

  const toggleSelectAll = (e) => {
      setSelectAll(!selectAll)
      setSelected(prevSelected => {
        let selectedOptions = [...prevSelected]
        selectAll ? selectedOptions = [] : options.map(option => !selectedOptions.includes(option.label) && selectedOptions.push(option.label))
        return selectedOptions
    })
  }

  const toggleDropDown = () => {
      setShowDropDown(!showDropDownList)
  }

  const renderList = (option, index, isSelected) => {
      return type === 'multi' ?
        <li className={`${type}-select-dropdown_item`} key={index}>
            <input type='checkbox' defaultChecked={isSelected} onClick={(e) => toggleSelected(e, {option})} className='multi-select-dropdown_checkbox'></input>
            <span>{option.label}</span>
        </li> : 
        <li className={`${type}-select-dropdown_item`} onClick={(e) => toggleSelected(e, {option})} key={index}>
            <div>{option.label}</div>
        </li>
  }

  return (
      <div className={`${type}-select-dropdown}`}>
          <div className={showDropDownList ? `${type}-select-dropdown_selected` : `${type}-select-dropdown_select`}>
              <div className={`${type}-select-list`}>{selected && selected.map((label, key) => {
                return selected.length > 1 ? <span key={key}>{label}, </span> : <span key={key}>{label}</span>
               })}
              </div>
              <div className={`${type}-select-show`}>
                  <button className={`${type}-select-show-btn`} onClick={() => toggleDropDown()}>
                    { showDropDownList ? <img src={collapse} alt="Collapse dropdown" /> : <img src={expand} alt="Expand dropdown" /> }
                  </button>
              </div>
          </div>
          {(showDropDownList) && <ul className={`${type}-select-dropdown_items`}>
              {type === 'multi' && 
                <li className={`${type}-select-dropdown_item`}>
                    <input type='checkbox' defaultChecked={selectAll} onClick={() => toggleSelectAll()} className='multi-select-dropdown_checkbox'></input>
                    <span>Select all</span>
                </li>}
              {selectAll && options.map((option, index)=> {
                  const isSelected = selectAll;
                  return (
                    renderList(option, index, isSelected)
                  )
              })}
              {!selectAll && options.map((option, index)=> {
                  const isSelected = selected.includes(option.label);
                  return (
                    renderList(option, index, isSelected)
                  )
              })}
          </ul>}
      </div>
  )
}

export default DropdownMenu;
