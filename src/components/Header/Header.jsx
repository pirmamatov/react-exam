import React from 'react'
import "./Header.css"
import { MdLocationOn } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import HeaderLanguage from '../HeaderLocalization/lang';
import { useTranslation } from 'react-i18next';




const Header = () => {
  const navigate = useNavigate();
  const { t } = useTranslation()
  return (
    <div className='Header navbar navbar-expand-lg navbar-light bg-white'>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" onClick={()=>navigate("/HeaderPages")} href="#">{t("key2")}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>navigate("/HeaderPages")} href="#">{t("key3")}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>navigate("/HeaderPages")} href="#">{t("key4")}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>navigate("/HeaderPages")} href="#">{t("key5")}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>navigate("/HeaderPages")} href="#">{t("key6")}</a>
        </li>
        
      </ul>

        {/* <ul classNameName='headerLeft'>
        <li onClick={()=>navigate("/HeaderPages")} classNameName=''>Mahsulotlar katalogi</li>
            <li onClick={()=>navigate("/HeaderPages")} classNameName=''>Foto-lavhalar</li>
            <li onClick={()=>navigate("/HeaderPages")} classNameName=''>Yetkazib berish va to'lash</li>
            <li onClick={()=>navigate("/HeaderPages")} classNameName=''  >Aksiya</li>
            <li onClick={()=>navigate("/HeaderPages")} classNameName='' >Yangi</li>
        </ul> */}
        {/* <nav className="navbar navbar-expand-lg navbar-light bg-light navbar navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#" onClick={()=>navigate("/HeaderPages")} >Navbar</a>
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" onClick={()=>navigate("/HeaderPages")} >Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"onClick={()=>navigate("/HeaderPages")} >Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={()=>navigate("/HeaderPages")} >Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav> */}
        <ul className="headerRight">
          <li className='headerRightChild'>
            {/* <select classNameName='nav-link nav nav-pills nav-fill'>
              <option value="o'z" classNameName='nav-link'>O'zbekcha</option>
              <option value="en" classNameName='nav-link'>English</option>
              <option value="ru" classNameName='nav-link'>Русский</option>
            </select> */}
            <HeaderLanguage/>
          </li>
            <li className='headerRightChild'>
            <span > <a href="https://www.google.com/maps/place/%D0%9C%D0%B0%D0%BD%D0%B3%D0%B8%D1%82,+%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD/@38.8923567,66.3724594,12.92z/data=!4m6!3m5!1s0x3f4c773582873769:0x5f7f48f6ddbd0c4e!8m2!3d38.8934246!4d66.4003664!16s%2Fg%2F1q62fbmc7" className='nav-link active' target={"_blank"}>{t("key7")}</a></span>
            <MdLocationOn className='mdLocation'/>
            </li>
            <li className='headerRightChild'>
            <span onClick={()=> navigate("/login")}>{t("key8")}</span>
            <span onClick={()=> navigate("/registration")}>{t("key14")}</span>
            <BsFillPersonFill className='enter' onClick={()=> navigate("/login")}/>
            </li>     

        </ul>
    </div>
  )
}


export  default Header
