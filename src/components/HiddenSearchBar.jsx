import {useState} from 'react'
import '../Styles/HiddenSearchBar.css'  
import { FaSearch } from 'react-icons/fa'

const HiddenSearchBar = () => {

  const [showinput,setShowInput] = useState(false)
  const [bgcolor, setBgColor] = useState('white')

  const handleClick = (e) => {
    setBgColor('#1a1a1a')
    if(e.target.className === 'container') {
      setShowInput(false)
      setBgColor('#fff')
    }
  }

  return (
    <section 
    className="container" 
    style={{background : bgcolor}}
    onClick={(e) => handleClick(e)} >
      { showinput ? (
        <input type="text" placeholder='Search...'/>
      ) : (
        <FaSearch onClick={() => setShowInput(true)} />
      )}
    </section>
  )
}

export default HiddenSearchBar