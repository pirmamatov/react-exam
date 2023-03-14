import React from 'react'
import "./SevimliDorilar.css"
import saqlangan from "../../assets/saqlangan.svg"
import barg from "../../assets/barg.svg"
import Footer from '../Products/Footer'
import { BsTelephoneFill } from "react-icons/bs";
import { TbMessageCircle2Filled } from "react-icons/tb";
import AddResurs from '../AddResurs/AddResurs'
import { useSelector } from 'react-redux'
import dori3 from "../../assets/dori3.svg";

 const SevimliDorilar = () => {
  const liked = useSelector(state=>state.liked);
  return (
   <>
    <div className='sevimliWrapper'>
        <h1 className='sevimliDorilarH1'>
            Sevimli Dorilar
        </h1>
        <div className="d-flex align-center justify-content-start gap-2">
        {liked.map((product) => {
          return (
            <React.Fragment  key={product.id}>
              <div className="col-md-3 mb-4 ">
                <div
                  className="row row-cols h-100 text-center p-4 "
                 
                >
                  <div className="col  ">
                    <div className="card w-100 ">
                      <img
                        src={dori3}
                        alt=""
                        width={175}
                        height={250}
                        className="m-auto"
                      />

                      <div className="card-body">
                        <h5 className="card-title mb-0">
                          {" "}
                          {product.title.substring(0, 12)}
                        </h5>
                        <p className="card-text link-secondary mt-2"> Mavjud</p>

                        <del className="card-text lead font-weight-normal font-italic link-secondary">
                          {product.price + 50} ming so'm
                        </del>

                        <p className="card-text lead fw-bold text-success">
                          {product.price} ming so'm
                        </p>
                        <button
                          type="button"
                          className="btn btn-success btn-outline-dark"
                          onClick={()=>dispatch(addMarket(product))}
                        >
                          -
                        </button>
                        <button
                          type="button"
                          className="btn btn-success btn-outline-dark"
                          onClick={()=>dispatch(chooseLiked(product))}
                        >
                          unLike
                        </button>
                      </div>
                      <div className="card-footer">
                        <a href="#" className="link-secondary">
                          Tafsilotlar{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
        </div>
       
       <AddResurs/>

    </div>
    <Footer/> 
    
    </>
  )
}

export default SevimliDorilar
