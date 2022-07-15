import React, { useState } from 'react';
import './App.css';

const MultiSelectDropdown = ({ options, type }) => {

  const [selected, setSelected] = useState([])
//   const [selectAll, setSelectAll] = useState(false)
  const [showDropDownList, setOpen] = useState(false)

  const toggleSelected = (e, { option }) => {
      type === 'multi' ? setSelected(prevSelected => {
          const newArray = [...prevSelected]
          if (newArray.includes(option.title)) {
              return newArray.filter(item => item !== option.title)
          } else {
              newArray.push(option.title)
              return newArray;
          }
      }) :
      setSelected(prevSelected => {
        const newArray = [...prevSelected]
        if (newArray.includes(option.title)) {
            return newArray.filter(item => item !== option.title)
        } else {
            newArray[0] = option.title
            return newArray;
        }
    })
  }

//   const toggleSelectAll = (e) => {
//       setSelectAll(!selectAll)
//       setSelected(prevSelected => {
//         let newArray = [...prevSelected]
//         selectAll ? newArray = [] : options.map(option => newArray.push(option.title))
//         return newArray
//     })
//   }

  console.log(selected)

  const toggleDropDown = () => {
      setOpen(!showDropDownList)
  }

  const renderList = (option, index, isSelected) => {
      return type === 'multi' ?
        <li className={`${type}-select-dropdown-option`} key={index}>
            <input type='checkbox' defaultChecked={isSelected /*|| selectAll*/} onClick={(e) => toggleSelected(e, {option})} className='multi-select-dropdown-option_checkbox'></input>
            <span>{option.title}</span>
        </li> : 
        <li className={`${type}-select-dropdown-option`} onClick={(e) => toggleSelected(e, {option})} key={index}>
            <div>{option.title}</div>
        </li>
  }

  return (
      <div className={`${type}-select-dropdown}`}>
          <div className={`${type}-select-dropdown-selected`}>
              {/* {type === 'multi' && <input type='checkbox' defaultChecked={selectAll} onClick={() => toggleSelectAll()} className='multi-select-dropdown-option_checkbox'></input>} */}
              {selected && selected.map((title, key) => <span key={key}>{title}</span>)}
              <div className={`${type}-select-show`}><button className={`${type}-select-show-btn`} onClick={() => toggleDropDown()}></button></div>
          </div>
          {(showDropDownList /*|| selectAll*/) && <ul className={`${type}-select-dropdown-options`}>
              {options.map((option, index)=> {
                  const isSelected = selected.includes(option.title) /*|| selectAll*/;
                  return (
                    renderList(option, index, isSelected)
                  )
              })}
          </ul>}
      </div>
  )
}

export default MultiSelectDropdown;
