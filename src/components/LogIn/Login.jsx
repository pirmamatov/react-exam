// // import React, { useState } from 'react' 
import "./Login.css"



// const Login = () => {
    
    
//   return (
      
//       <>
//       {/* <form onSubmit={handleSubmit}>
//         <label htmlFor="name">Foydalanuvchi nomi</label>
//         <input value={name} name="name" id='name' placeholder='Foydalanuvchi nomi' />
//         <label htmlFor="email">email</label>
//         <input value={email} type="email" placeholder="youremail@gmail.com " id="email" name="email" />
//         <label htmlFor="password">password</label>
//         <input value={pass} type="password" placeholder="****** " id="password" name="password" />
//       <button type='submit'>Kirish</button>
//       </form>
//       <button >Ro'yxatdan o'tish</button> */}
//       <form onSubmit={formChangeHandler}  className="formValidation">

// <div className="col-md-2">
//   <div className="form-outline">
//     <input type="text" className="form-control is-valid" id="validationServer02" onChange={changeNameHandler} required />
//     <label htmlFor="validationServer02" className="form-label">Ism</label>
//     <div className="valid-feedback">Ajoyib!</div>
//   </div>
// </div>
// <div className="col-md-8">
//   <div className="input-group form-outline">
  
//     <input type="text"  onChange={changeNameHandler} className="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3" required />
//     <label htmlFor="validationServerUsername" className="form-label">Email</label>
//     <div className="iltimos invalid-feedback">Iltimos emailingizni kiriting.</div>
//   </div>
// </div>

// <div className="col-md-8">
//   <div className="form-outline">
//     <input type="text"  onChange={changeNameHandler} className="form-control is-valid" id="validationServer02" defaultValue="" required />
//     <label htmlFor="validationServer02" className="form-label">Nomer</label>
//     <div className="valid-feedback">+998 94 681 |</div>
//   </div>
// </div>


// <div className="col-12">
//   <div className="form-check">
//     <input className="form-check-input is-invalid"  onChange={changeNameHandler} type="checkbox" defaultValue id="invalidCheck3" required />
//     <label className="form-check-label" htmlFor="invalidCheck3">Hamma  shartlarga rozilik bildiraman</label>
//     <div className="invalid-feedback">Yuborishdan oldin rozi bo'lishingiz kerak.</div>
//   </div>
// </div>
// <div className="col-12">
//   <button className="btn btn-primary" type="submit">Xabar yuborish</button>
// </div>
// </form>
//       </>
    
//   )
// }


// export  default Login
import React from 'react'

const LogIn = () => {
  return (
    <>
   
<div className="kirishB my-5">
<form className="text-center border border-light p-5" action="#!">
  <p className="h4 mb-4">Kirish</p>
  <div className="form-row mb-4">
    <div className="col">
      {/* <input type="text" id="defaultRegisterFormFirstName" className="form-control" placeholder="Foydalanuvchi nomi" /> */}
    </div>
    
  </div>
  {/* <input type="email" id="defaultRegisterFormEmail" className="form-control mb-4" placeholder="E-pochta (optional)" /> */}
  <input type="password" id="defaultRegisterFormPassword" className="form-control" placeholder="Parolni o'ylab toping" aria-describedby="defaultRegisterFormPasswordHelpBlock" />
  <small id="defaultRegisterFormPasswordHelpBlock" className="form-text text-muted mb-4">
    8 ta harf bitta belgi bo'lishi kerak
  <input type="text" id="defaultRegisterPhonePassword" className="form-control" placeholder="Phone number" aria-describedby="defaultRegisterFormPhoneHelpBlock" />
  </small>
 
  
  {/* <button className="btn btn-info my-4 btn-block" type="submit"></button> */}
  <button type="button" class="btn my-4 btn-outline-success">Kirish</button>

  
 </form>

</div>

    
    </>
  )
}

export  default LogIn

