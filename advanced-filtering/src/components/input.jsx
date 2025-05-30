import React from 'react'
import { TbBackground } from 'react-icons/tb'

const Input = ({handleChange,value,title,name,color}) => {
  return (
    <div>
      <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value={value} name={name}/>
          <span className="checkmark" style={{background:color}}></span>{title}
        </label>
    </div>
  )
}

export default Input