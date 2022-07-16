import React, { useState } from 'react';
import expand from './expand.png'
import collapse from './collapse.png'
import './dropdown.css';

const DropdownMenu = ({ options, type }) => {

  const [selected, setSelected] = useState([])
//   const [selectAll, setSelectAll] = useState(false)
  const [showDropDownList, setOpen] = useState(false)

  const toggleSelected = (e, { option }) => {
      type === 'multi' ? setSelected(prevSelected => {
          const newArray = [...prevSelected]
          if (newArray.includes(option.label)) {
              return newArray.filter(item => item !== option.label)
          } else {
              newArray.push(option.label)
              return newArray;
          }
      }) :
      setSelected(prevSelected => {
        const newArray = [...prevSelected]
        if (newArray.includes(option.label)) {
            return newArray.filter(item => item !== option.label)
        } else {
            newArray[0] = option.label
            return newArray;
        }
    })
  }

//   const toggleSelectAll = (e) => {
//       setSelectAll(!selectAll)
//       setSelected(prevSelected => {
//         let newArray = [...prevSelected]
//         selectAll ? newArray = [] : options.map(option => newArray.push(option.label))
//         return newArray
//     })
//   }

  const toggleDropDown = () => {
      setOpen(!showDropDownList)
  }

  const renderList = (option, index, isSelected) => {
      return type === 'multi' ?
        <li className={`${type}-select-dropdown_item`} key={index}>
            <input type='checkbox' defaultChecked={isSelected /*|| selectAll*/} onClick={(e) => toggleSelected(e, {option})} className='multi-select-dropdown_checkbox'></input>
            <span>{option.label}</span>
        </li> : 
        <li className={`${type}-select-dropdown_item`} onClick={(e) => toggleSelected(e, {option})} key={index}>
            <div>{option.label}</div>
        </li>
  }

  return (
      <div className={`${type}-select-dropdown}`}>
          <div className={showDropDownList ? `${type}-select-dropdown_selected` : `${type}-select-dropdown_select`}>
              {/* {type === 'multi' && <input type='checkbox' defaultChecked={selectAll} onClick={() => toggleSelectAll()} className='multi-select-dropdown-option_checkbox'></input>} */}
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
          {(showDropDownList /*|| selectAll*/) && <ul className={`${type}-select-dropdown_items`}>
              {options.map((option, index)=> {
                  const isSelected = selected.includes(option.label) /*|| selectAll*/;
                  return (
                    renderList(option, index, isSelected)
                  )
              })}
          </ul>}
      </div>
  )
}

export default DropdownMenu;
