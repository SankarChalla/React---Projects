import React,{useState} from 'react'
import '../Styles/Form.css'

const Form = () => {

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorUserName, setErrorUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfrimPassword, setErrorConfirmPassword] = useState("");

  const [userColor, setUserColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

  const validate = (e) => {
    e.preventDefault()

    if(username.length > 8){
      setErrorUserName('')
      setUserColor('Green')
    } else {
      setErrorUserName('Username must be 8 letters long.')
      setUserColor('Red')
    }

    if(email.includes("@gamil.com")){
      setErrorEmail("");
      setEmailColor("green");
    } else {
      setEmailColor("red");
      setErrorEmail("Email should have @gmail");
    }

    if (password.length > 8) {
      setErrorPassword("");
      setPasswordColor("green");
    } else {
      setErrorPassword("Password should be 8 letters long ");
      setPasswordColor("red");
    }

    if (password != "" && password == confirmPassword) {
      setErrorConfirmPassword("");
      setConfirmPasswordColor("green");
    } else {
      setErrorConfirmPassword("Passwords didn't matched.");
      setConfirmPasswordColor("red");
    }
  }

  return (
    <>
    <div className="card">
      <div className="card-image"></div>
        <form>
          <input 
          type="text" 
          placeholder='Name'
          style={{borderColor: userColor}}
          value={username}
          onChange={e => setUserName(e.target.value)} />
          <p className="error">{errorUserName}</p>

          <input 
          type="text"
          placeholder='Email'
          style={{borderColor : emailColor}}
          value={email}
          onChange={e => setEmail(e.target.value)} />
          <p className="error">{errorEmail}</p>

          <input 
          type="Password"
          placeholder='Password'
          style={{borderColor : passwordColor}}
          value={password}
          onChange={e => setPassword(e.target.value)} />
          <p className="error">{errorPassword}</p>

          <input 
          type="Password"
          placeholder='Confirm Passowrd'
          style={{borderColor : confirmPasswordColor}}
          onChange={e => setConfirmPassword(e.target.value)} />
          <p className="error">{errorConfrimPassword}</p>          

          <button className="submit-btn" onClick={validate}>Submit</button>

        </form>
    </div>
    </>
  )
}

export default Form