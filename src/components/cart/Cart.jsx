import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setCartItem, setQuantity } from "../../actions/action";

function Cart() {
  const userId = localStorage.getItem("userId");
  //   const [count,setCount] = useState(1)
  // console.log(count)

  // const incrementCounter = () => setCount(count + 1);
  // let decrementCounter = () => setCount(count - 1);
  // if(count<=0) {
  //   decrementCounter = () => setCount(0);
  // }

  // const removeCart = (_id) => {
  //   axios
  //       .delete(`http://localhost:4000/api/increase/${userId}`, {
  //         _id:_id,
  //         quantity:count,
  //       })
  //       .then((res) => {
  //        console.log(res.data)
  //       })
  //       .catch((err) => console.log(err));
  //   };
  // }

  const removeCart = (_id,count) => {
    console.log("_id",_id)
    console.log("count",count);
    if (count <= 1) {
      axios
        .put(`http://localhost:4000/api/removeCart/${userId}`,{
          _id:_id
        })
        .then((res) => {
          fetchData();
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    }
  };

  const addQuantity = (_id, count) => {
    console.log("_id",_id)
    console.log("count", count);
    axios
      .put(`http://localhost:4000/api/increase/${userId}`, {
        _id: _id,
        quantity:count,
      })
      .then((res) => {
        fetchData();

        dispatch(setQuantity(res.data));
      })
      .catch((err) => console.log(err));
  };

  const dispatch = useDispatch();
  const fetchData = async () => {
    const response = await axios
      .get(`http://localhost:4000/api/getCart/${userId}`)

      .catch((err) => {
        console.log("Err: ", err);
      });

    dispatch(setCartItem(response.data));
  };

  useEffect(() => {
    addQuantity();
    removeCart()
    fetchData()
  }, []);

  // .cartItems.item.product

  const carts = useSelector((state) =>
    state.cartItems.item)
  
  console.log("carts", carts);

  return (
    
    <div>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-12 max-auto">
            <div className="row px-5">
              {carts
                ? carts.map((cart) => (
                  cart.product.map(item => (
                   
                   
<div
                      className="card"
                      style={{ width: "18rem", marginRight: "2rem" }}
                    >
                       
                      <img
                        src={item.profile}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.price}</p>
                        <p className="card-text">{item.category}</p>
                        <div className="increment-decrement-btn">
                          <button
                            onClick={() => {
                              addQuantity(
                                item._id,
                                item.quantity - 1
                              );removeCart(item._id,item.quantity)
                            }}
                            className="inc-dec-btn"
                          >
                            -
                          </button>
                          <div className="justify-content-center">
                            <h4>{item.quantity}</h4>
                          </div>

                          <button
                            onClick={() => {
                              addQuantity(item._id, item.quantity + 1);
                            }}
                            className="inc-dec-btn"
                          >
                            +
                          </button>
                        </div>
                        <h6>quantity :{item.quantity}</h6>
                        <h6>total {item.price * item.quantity}</h6>
                      </div>
                    </div>
                
                 ))
                    
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
