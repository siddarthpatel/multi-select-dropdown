import React, { useState } from 'react';
import expand from './expand.png'
import collapse from './collapse.png'
import { TYPES } from './Constansts';
import PropTypes from 'prop-types';
import './dropdown.css';

const DropdownMenu = ({ options, type, onSelected }) => {

  const [selectedOptions, setSelected] = useState(type === TYPES.MULTI ? options : [])
  let [selectAll, setSelectAll] = useState(false)
  const [showDropDownList, setShowDropDown] = useState(false)

  const toggleSelected = (e, option=null) => {
    if (type === TYPES.MULTI) {
        let label = e.target.name;
        let selected = e.target.checked;
        setSelected(prevSelected => {
            let selectedItems = [...prevSelected]
            if (label === "selectAll") {
            selectAll = selected;
            setSelectAll(selectAll)
            selectedItems = selectedItems.map(item => ({ ...item, isSelected: selected }))
            } else {
            selectedItems = selectedItems.map(item => item.label === label ? { ...item, isSelected: selected } : item)
            selectAll = selectedItems.every(item => item.isSelected);
            }
            setSelectAll(selectAll)
            onSelected && onSelected(selectedItems)
            return selectedItems
        })
    } else {
        setSelected(prevSelected => {
            const selectedItems = [...prevSelected]
            if (selectedItems.includes(option.label)) {
                let filteredItems = selectedItems.filter(item => item !== option.label)
                onSelected && onSelected(filteredItems)
                return filteredItems
            } else {
                selectedItems[0] = option.label
                onSelected && onSelected(selectedItems)
                return selectedItems;
            }
        })
    }
  }

  const toggleDropDown = () => {
      setShowDropDown(!showDropDownList)
  }

  const renderList = (option, index) => {
      return type === TYPES.MULTI ?
        <li className={option.isSelected ?  `${type}-select-dropdown_item_selected` : `${type}-select-dropdown_item`} key={index}>
            <input type='checkbox' className={`${type}-select-dropdown_checkbox`} name={option.label} value={option.label} checked={option.isSelected || false} onChange={(e) => toggleSelected(e)}></input>
            <label>{option.label}</label>
        </li> : 
        <li className={selectedOptions && selectedOptions[0] === option.label ? `${type}-select-dropdown_item_selected` : `${type}-select-dropdown_item`} name={option.label} value={option.label} key={index} onClick={(e) => toggleSelected(e, option)}>
            <label>{option.label}</label>
        </li>
  }


  return (
      <div className={`${type}-select-dropdown`}>
          <div className={showDropDownList ? `${type}-select-dropdown_selected` : `${type}-select-dropdown_select`}>
              <div className={`${type}-select-list`}>{selectedOptions && selectedOptions.map((option, key) => {
                if (!option.isSelected && type === TYPES.MULTI)
                    return <span></span>
                if (type === TYPES.SINGLE)
                    return <span key={key}>{option}</span>
                return selectedOptions.length > 1 ? <span key={key}>{option.label}, </span> : <span key={key}>{option.label}</span>
               })}
              </div>
              <div className={`${type}-select-show`}>
                  <button className={`${type}-select-show-btn`} onClick={() => toggleDropDown()}>
                    { showDropDownList ? <img src={collapse} alt="Collapse dropdown" /> : <img src={expand} alt="Expand dropdown" /> }
                  </button>
              </div>
          </div>
          {(showDropDownList) && <ul className={`${type}-select-dropdown_items`}>
              {type === TYPES.MULTI && 
                <li className={ selectAll ? `${type}-select-dropdown_item_selected` : `${type}-select-dropdown_item`}>
                    <input type='checkbox' name='selectAll' key='selectAll' className='multi-select-dropdown_checkbox' checked={selectAll}  onChange={(e) => toggleSelected(e)}></input>
                    <label>Select all</label>
                </li>}
              { type === TYPES.MULTI ? selectedOptions.map((option, index)=> {
                  return (
                    renderList(option, index)
                  )
                }) : options.map((option, index)=> {
                return (
                  renderList(option, index)
                )
              })}
          </ul>}
      </div>
  )
}

DropdownMenu.propTypes = {
    onSelected: PropTypes.func,
}

export default DropdownMenu;
