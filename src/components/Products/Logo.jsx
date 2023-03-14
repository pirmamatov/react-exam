import React from 'react'
import "./Logo.css"
import { useNavigate } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";



const Logo = () => {
    const navigate = useNavigate();
  return (
   <div className="products__wrapper">
     <div className='logo__wrapper'>
       <div className="logo__head">
       <h1 className='logo__h1' onClick={ ()=> navigate ("/")}>LOGO</h1>
       <div className="logo__pages">
       <a href="#" className=' hover ' onClick={ ()=> navigate ("/")}>Bosh sahifa</a>
       <a href="#" className='hover' onClick={()=>navigate("/products")}>Mahsulotlar</a>
       </div>
       </div>
       <div className="logo__icons">
       <div className="heart" onClick={()=>navigate("/likes")}><CiHeart /></div>
        <div className="heart"><BsCart2 className='cart' onClick={()=>navigate("/savatcha")}/></div>
       </div>
       

    </div>
    <div className='products__bottom'>
            <span className='bosh__savatcha'>Bosh sahifa</span> / <span className='yashil__savatcha'>  Mahsulotlar</span> 
        </div>
      
   </div>
    
  )
}

export  default Logo
