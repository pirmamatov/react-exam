import React from 'react'
import "./Header2.css"
import { CiHeart } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import { TbMessageCircle2Filled } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

import picture from   "../../assets/header.svg"
import picture2 from "../../assets/rasm2.svg"
import picture3 from "../../assets/rasm3.svg"
import { useTranslation } from 'react-i18next';
 const Header2 = () => {
  const navigate = useNavigate();
  const { t } = useTranslation()
  return (
  <>
    <div className='Header2'>
      <div className="Header2-first">
      <ul className="logo">
        <li>
        <a href="#"><h1 className='logo-h1'>{t("logo")}</h1></a>
        </li>
        <li className='hover'>
        <a href="#" className='page'>{t("key9")}</a>
        <a href="#" className='page' onClick={()=>navigate("/products")}>{t("key10")}</a>
        </li>
       </ul>
       <div className="icons">
        <div className="heart"><CiHeart  onClick={()=>navigate("/likes")}/></div>
        <div className="heart"><BsCart2 className='cart'onClick={()=>navigate("/savatcha")}/></div>
       </div>
      </div>

      <div className="Header2-second">
        <h1 className='bepul'>
        {t("key11")}
        </h1>
        <p className='boyi'>
       {t("key12")}
   <span className='mobil'>{t("key13")}</span>
        </p>
      </div>

      <div className="Header2-three">
        <img className='rasm' src={picture} alt="rasm" />
        <img className='rasm2' src={picture2} alt="rasm" />
        <img className='rasm3' src={picture3} alt="rasm" />
        <div className='phone'><BsTelephoneFill className='tel'/></div>
       <div className="message"> <TbMessageCircle2Filled /></div>
      </div>

    </div>
  </>
  )
}

export default Header2