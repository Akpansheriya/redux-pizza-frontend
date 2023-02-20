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
    if (count >= 0) {
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
  }, []);

  // .cartItems.item.product

  const carts = useSelector((state) =>
    state.cartItems.item.map((v) => v.product)
  );
  console.log("carts", carts);

  return (
    <div>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-12 max-auto">
            <div className="row px-5">
              {carts
                ? carts[0].map((cart) => (
                    <div
                      className="card"
                      style={{ width: "18rem", marginRight: "2rem" }}
                    >
                      <img
                        src={cart.profile}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">{cart.title}</h5>
                        <p className="card-text">{cart.price}</p>
                        <p className="card-text">{cart.category}</p>
                        <div className="increment-decrement-btn">
                          <button
                            onClick={() => {
                              addQuantity(
                                cart._id,
                                cart.quantity - 1
                              );removeCart(cart._id,cart.quantity)
                            }}
                            className="inc-dec-btn"
                          >
                            -
                          </button>
                          <div className="justify-content-center">
                            <h4>{cart.quantity}</h4>
                          </div>

                          <button
                            onClick={() => {
                              addQuantity(cart._id, cart.quantity + 1);
                            }}
                            className="inc-dec-btn"
                          >
                            +
                          </button>
                        </div>
                        <h6>quantity :{cart.quantity}</h6>
                        <h6>total {cart.price * cart.quantity}</h6>
                      </div>
                    </div>
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
