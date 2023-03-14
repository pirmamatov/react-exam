import React from 'react'
import "./Header3.css"
import { GrDeliver } from "react-icons/gr";
import { SlWallet } from "react-icons/sl"
import { BiMath } from "react-icons/bi"
import { AiOutlinePlus } from "react-icons/ai"
import { AiFillCustomerService } from "react-icons/ai"
import { AiOutlineHeart } from "react-icons/ai"
import dori from "../../assets/dori.svg"
import dori2 from "../../assets/dori2.svg"
import dori3 from "../../assets/dori3.svg"
import dori4 from "../../assets/dori4.svg"
import dori5 from "../../assets/dori5.svg"
import Footer from '../Products/Footer';
import Filter from '../Products/Filter';
import { useNavigate } from "react-router-dom";


 


const Header3 = () => {
  const navigate = useNavigate();
  return (
    <div className='Header3'>
        <div className="chpa"><a href="" className='chiziq-tepa'></a></div>
        <ul className='list'>
            <li className='list__item'>
              <div className="devil">
              <GrDeliver className='ver'/>
              </div>
              <div className="containerHeader3">
                <h3>Yetkazib berish bepul</h3>
                <p>100 000 so'mdan ortiq buyurtma berganingizda</p>
              </div>
            </li>
            <li className='list__item'>
              <div className="devil">
              <SlWallet className='ver'/>
              </div>
              <div className="containerHeader3">
                <h3>Yetkazib berish bepul</h3>
                <p>100 000 so'mdan ortiq buyurtma berganingizda</p>
              </div>
            </li>
            <li className='list__item'>
              <div className="devil">
              <BiMath className='ver'/>
              </div>
              <div className="containerHeader3">
                <h3>Yetkazib berish bepul</h3>
                <p>100 000 so'mdan ortiq buyurtma berganingizda</p>
              </div>
            </li>
            <li className='list__item'>
              <div className="devil">
              <AiFillCustomerService className='ver'/>
              </div>
              <div className="containerHeader3">
                <h3>Yetkazib berish bepul</h3>
                <p>100 000 so'mdan ortiq buyurtma berganingizda</p>
              </div>
            </li>
            
        </ul>
        <div className="chpap"><a href="" className='chiziq-past'></a></div>



        <h2 className='mahsulot'>
        Mahsulotlarimiz ro'yxati
        </h2>

        <ul className='mahsulotAll'>
            <li className="mahsulot__list">
                <img src={dori} alt="" width={175} height={175}/>
                <AiOutlineHeart className='heart-mahsulot'/>
                <h3 className='rohat'>
                ROHAT Yog`i №2
                </h3>
                <p className='mavjud'>
                Mavjud
                </p>
                <del className='skidka'>
                17,190, uzs
                </del>
                <h2 className='uzs'>16 000 uzs</h2>
                <div className="plus">
                <AiOutlinePlus className='plyus'/>
                </div>
                <p className='tafsilot'>Tafsilotlar  </p>

            </li>
            <li className="mahsulot__list">
                <img src={dori2} alt="" width={175} height={175}/>
                <AiOutlineHeart className='heart-mahsulot'/>
                <h3 className='rohat'>
                Rohat Sirop
                </h3>
                <p className='mavjud'>
                Erkaklar kuchi
                </p>
                <del className='skidka'>
                200,190, uzs
                </del>
                <h2 className='uzs'>150 000 uzs </h2>
                <div className="plus">
                <AiOutlinePlus className='plyus'/>
                </div>
                <p className='tafsilot'>Tafsilotlar  </p>

            </li>
            <li className="mahsulot__list">
                <img src={dori3} alt="" width={175} height={175}/>
                <AiOutlineHeart className='heart-mahsulot'/>
                <h3 className='rohat'>
                Organic Bananas
                </h3>
                <p className='mavjud'>
                7pcs, Price
                </p>
                <del className='skidka'>
                17,190, uzs
                </del>
                <h2 className='uzs'>16 000 uzs </h2>
                <div className="plus">
                <AiOutlinePlus className='plyus'/>
                </div>
                <p className='tafsilot'>Tafsilotlar  </p>

            </li>
            <li className="mahsulot__list">
                <img src={dori4} alt="" width={175} height={175}/>
                <AiOutlineHeart className='heart-mahsulot'/>
                <h3 className='rohat'>
                ROHAT Yog`i №2
                </h3>
                <p className='mavjud'>
                Mavjud
                </p>
                <del className='skidka'>
                17,190, uzs
                </del>
                <h2 className='uzs'>16 000 uzs</h2>
                <div className="plus">
                <AiOutlinePlus className='plyus'/>
                </div>
                <p className='tafsilot'>Tafsilotlar  </p>

            </li>
            <li className="mahsulot__list">
                <img src={dori5} alt="" width={175} height={175}/>
                <AiOutlineHeart className='heart-mahsulot'/>
                <h3 className='rohat'>
                Rohat Sirop
                </h3>
                <p className='mavjud'>
                Erkaklar kuchi
                </p>
                <del className='skidka'>
                200,190, uzs
                </del>
                <h2 className='uzs'>150 000 uzs </h2>
                <div className="plus">
                <AiOutlinePlus className='plyus'/>
                </div>
                <p className='tafsilot'>Tafsilotlar  </p>

            </li>
        </ul>
        <button className='mahsulot-btn' onClick={()=>navigate("/filter")}>
        Barcha mahsulotlarni ko’rish     
        </button>
        <span></span>
        
    </div>
  )
}


export  default Header3
