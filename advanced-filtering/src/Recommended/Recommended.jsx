import React from 'react'
import '../Recommended/Recommended.css'
import Buttons from '../components/Buttons'

const Recommended = ({handleClick}) => {
  return (
    <>
    <div>
      <h2 className='recommended-title'>Recommended</h2>
      <div className="recommended-flex">
        <Buttons onClickHandler={handleClick} value="" title="All Products"/>
        <Buttons onClickHandler={handleClick} value="Nike" title="Nike"/>
        <Buttons onClickHandler={handleClick} value="Adidas" title="Adidas"/>
        <Buttons onClickHandler={handleClick} value="Puma" title="Puma"/>
      </div>
    </div></>
  )
}

export default Recommended