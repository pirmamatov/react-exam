import React from 'react'
import "./Register.css"

 const Register = () => {
  return (
    <>
   <div className="kirishO my-5">
<form className="text-center border border-light p-5" action="#!">
  <p className="h4 mb-4">Ro’yxatdan o’tish</p>
  <div className="form-row mb-4">
    <div className="col">
      <input type="text" id="defaultRegisterFormFirstName" className="form-control" placeholder="Foydalanuvchi nomi" />
    </div>
    
  </div>
  <input type="email" id="defaultRegisterFormEmail" className="form-control mb-4" placeholder="E-pochta (optional)" />
  <input type="password" id="defaultRegisterFormPassword" className="form-control" placeholder="Parolni o'ylab toping" aria-describedby="defaultRegisterFormPasswordHelpBlock" />
  <small id="defaultRegisterFormPasswordHelpBlock" className="form-text text-muted mb-4">
    8 ta harf bitta belgi bo'lishi kerak
  </small>
  <input type="text" id="defaultRegisterPhonePassword" className="form-control" placeholder="Phone number" aria-describedby="defaultRegisterFormPhoneHelpBlock" />
 
  
  {/* <button className="btn btn-info my-4 btn-block" type="submit"></button> */}
  <button type="button" class="btn my-4 btn-outline-success">Ro’yxatdan o’tish</button>

  
 </form>

</div>
    </>
  )
}

export default Register
