import React from 'react'
import "./AddResurs.css"
import { BsTelephoneFill } from "react-icons/bs";
import { TbMessageCircle2Filled } from "react-icons/tb";
import saqlangan from "../../assets/saqlangan.svg";
import barg from "../../assets/barg.svg";

const AddResurs = () => {
  return (
    <div className='AddResurs'>
        <div className="saqlanganWrapper">
        <img className='saqlanganImg' src={saqlangan} alt="cart" />
        <img className='saqlanganbarg' src={barg} alt="saqlanganbarg" />
        <div className='phone_s'><BsTelephoneFill className='tel'/></div>
        <div className="message_s"> <TbMessageCircle2Filled className='mes'/></div>
        </div>
    </div>
  )
}
export default AddResurs
