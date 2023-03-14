import React from 'react'
import playMarket from "../../assets/playMarket.svg"
import appStore from "../../assets/appStore.svg"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import "./Footer.css"
const Footer = () => {
  return (
  <>
    <div className='footer'>
        {/* <img src={footer} alt="footer qism"  className='footer__img'/> */}
        <div className="footer">
       <div className="foter__logo">
        LOGO
       </div>
       <div className="footer__text">
       Bu sog'liq va hayot sifatini yaxshilash uchun mahsulotlar
       </div>
       <div className="footer_h5">Ish vaqti: Har kuni 8:00 dan 18:00 gacha</div>
        </div>
        <ul className='icon_list'>
          <li className="footer-icon">
            <a href="https://ru-ru.facebook.com/"  target={"_blank"} className='footericoncss'> <FaFacebookF/></a>
       
          </li>
          <li className="footer-icon">
         <a className='footericoncss' href="https://www.instagram.com/sakinat_dunyosi/" target={"_blank"}> <FaInstagram/></a>

          </li>
          <li className="footer-icon">
            <a href="https://t.me/Pirmamatov_o" target={"_blank"} className='footericoncss'>  <FaTelegram/></a>
        

          </li>
          <li className="footer-icon">
          <a href="https://www.youtube.com/channel/UCQi0m6gja5ka7QFvllF24Yw" target={"_blank"} className='footericoncss'>  <FaYoutube/></a>

        

          </li>
        </ul>




        <div className="footer__text3">
          Huquqiy
        </div>
        <div className="footer__text4">
        Ilovani yuklab olish
        </div>
        <div className="playMarket">
          <a href="https://play.google.com/store/apps?hl=ru&gl=US" target={"_blank"}><img src={playMarket} alt="" /></a>
        </div>
        <div className="appStore">
          <a href="https://www.apple.com/ru/app-store/" target={"_blank"}><img src={appStore} alt="appStore" /></a>
        </div>
        
        <div className="footer__green">
          <div className="footerEmail">
          E-mail
          </div>
          <div className="footerEmailT">
          info@mehrigiyo.uz
          </div>
          <div className="QONGIROQ">
          Bizga qo'ng'iroq qiling
          </div>
          <div className="footerNomer">
          +99898 125 31 03
          </div>
        </div>
        
    </div>
    <div className="footer__bottom">
    <div className="textTTT">
    © 1996-2021. Mehrigiyo. Barcha huquqlar himoyalangan. 
Saytdan olingan barcha maʼlumotlar chop etilganda veb-saytga havola qilish majburiy.
    </div>
    <div className="boshSahifaFooter">
   <a href="#" className='colorWhite'> Bosh sahifa</a>
    </div>
    <div className="bizHaqimizdaFooter">
    <a href="https://www.instagram.com/sakinat_dunyosi/" target={"_blank"} className='colorWhite'>Biz haqimizda</a>
    </div>
    <div className="yangiliklarFooter">
    <a href="https://www.instagram.com/sakinat_dunyosi/" target={"_blank"} className='colorWhite'> Yangiliklar</a>
    </div>
  </div>
  </>
  )
}

export  default Footer
