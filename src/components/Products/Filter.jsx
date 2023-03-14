import React, { useState, useEffect } from "react";
import dori3 from "../../assets/dori3.svg";
import Skeleton from "@mui/material/Skeleton";
import "./Filter.css";
import { useDispatch, useSelector } from "react-redux";
import { addMarket, chooseLiked, fetched } from "../../redux/action/action";
import { useNavigate } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { height } from "@mui/system";

const Filter = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
 const products=useSelector(state=>state.products);
  let componentMounted = true;
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products/");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        dispatch(fetched(filter))
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton variant="text" sx={{ fontSize: "3rem" }} />
          <Skeleton variant="circular" width={80} height={80} />
          <Skeleton variant="rectangular" width={210} height={100} />
          <Skeleton variant="rounded" width={210} height={80} />
        </div>
        <div className="col-md-3">
        <Skeleton variant="text" sx={{ fontSize: "3rem" }} />
          <Skeleton variant="circular" width={80} height={80} />
          <Skeleton variant="rectangular" width={210} height={100} />
          <Skeleton variant="rounded" width={210} height={80} />
        </div>
        <div className="col-md-3">
        <Skeleton variant="text" sx={{ fontSize: "3rem" }} />
          <Skeleton variant="circular" width={80} height={80} />
          <Skeleton variant="rectangular" width={210} height={100} />
          <Skeleton variant="rounded" width={210} height={80} />
        </div>
        <div className="col-md-3">
        <Skeleton variant="text" sx={{ fontSize: "3rem" }} />
          <Skeleton variant="circular" width={80} height={80} />
          <Skeleton variant="rectangular" width={210} height={100} />
          <Skeleton variant="rounded" width={210} height={80} />
        </div>
      </>
    );
  };
  const filterProduct = (cat) => {
    const updatedList = data.filter((x)=>x.category === cat);
    setFilter(updatedList);
  }

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5 ">
          <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)}>Hammasi</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("men's clothing")}>Choy</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("women's clothing")}>Asal</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("jewelery")}>Yog'</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("electronics")}>Ziravorlar</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("women's clothing")}>Sharbatlar</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("women's clothing")}>Lolipoplar</button>
          <button className="btn btn-outline-dark me-2"  onClick={()=>setFilter(data)}>Tabletkalar</button>
        </div>

        {filter.map((product) => {
          return (
            <React.Fragment  key={product.id}>
              <div className="col-md-3 mb-4 ">
                <div
                  className="row row-cols h-100 text-center p-4 "
                 
                >
                  <div className="col  ">
                    <div className="card w-100 ">
                      <div className="buttons__icon d-flex ">
                      <img
                        src={dori3}
                        alt=""
                        width={175}
                        height={250}
                        className="m-auto"
                      />
                       <button 
                        type="button"
                        className="btn btn-success btn-outline-white btn btn-danger w-5 h-10 align-items-center justify-content-center"
                        onClick={()=>dispatch(chooseLiked(product))}>
                        <CiHeart  />
                        
                        </button>
                      </div>

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
                          +
                        </button>
                       
                        {/* <button
                          type="button"
                          className="btn btn-success btn-outline-dark"
                          onClick={()=>dispatch(chooseLiked(product))}
                        >
                                                  

                        </button> */}
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
      </>
    );
  };

  return (
    <div>
      <div className="container  my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center" onClick={()=>navigate("/products")}>Mahsulotlar</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Filter;
