import React from 'react'
import Header from '../Header/Header'
import Logo from '../Products/Logo'
import Footer from '../Products/Footer';
import "./Savatcha.css"
import AddResurs from '../AddResurs/AddResurs';
import { useSelector } from 'react-redux';
import dori3 from "../../assets/dori3.svg";

const Savat = () => {
  const market = useSelector(state=>state.market);

  return (
   <>
   <Header/>
   <Logo/>  
    <div className='sevimliWrapper'>
        <h1 className='sevimliDorilarH1'>
            Savatcha
        </h1>
      <AddResurs/>
      
     <div className='d-flex align-center justify-content-start gap-2'>
     {market.map((product) => {
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
                          class="btn btn-success btn-outline-dark"
                          onClick={()=>dispatch(addMarket(product))}
                        >
                          +
                        </button>
                      </div>
                      <div className="card-footer">
                        <a href="#" class="link-secondary">
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

    </div>
    <Footer/> 
    </>
  )
}

export default Savat