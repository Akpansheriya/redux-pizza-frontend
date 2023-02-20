import React, { useEffect} from "react";
import Navbar from "../navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import "./Screen.css"
import axios from "axios";
import { setCart, setProducts } from "../../actions/action";
import { useNavigate } from "react-router-dom";
function Screen() {
  // const product = useSelector((state) => state.allproducts)
  // console.log(product)
 const navigate = useNavigate()
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("http://localhost:4000/api/getAllPizza")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products :", products);

  const addCart = ( _id, title, profile, price, category) => {
    console.log("id", _id);
    const userId = localStorage.getItem("userId");
    console.log("userId", userId);
   

    axios
      .put(`http://localhost:4000/api/addcart/${userId}`, {
        userId,
       _id:_id,
        title,
        profile,
        price,
        category,
        quantity:1
      })
      .then((res) =>{ 
navigate("/Cart")
        dispatch(setCart(res.data))})
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Navbar />
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-12 max-auto">
            <div className="row">
              {products
                ? products.map((product) => {
                    const { _id, title, profile, price,category } = product;
                    return (
                      <div
                        className="card"
                        style={{ width: "18rem", marginRight: "3rem" }}
                      >
                        <img src={profile} className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">{title}</h5>
                          <p className="card-text">price : {price}</p>
                          <p className="card-text">{category}</p>
                          
                          <button
                            onClick={() => {
                              addCart(_id, title, profile, price, category);
                            }}
                            className="btn btn-primary"
                          > 
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Screen;
