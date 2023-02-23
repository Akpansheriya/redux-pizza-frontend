import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useSelector } from 'react-redux';
function Navbar() {
 
   const iconData = useSelector((state) =>  state.cartItems.item.map(data => data.product.length))
   console.log("iconData",iconData)




const navigate = useNavigate();

const onClickHandler = () =>{
navigate("/Cart")

}


  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-light mb-5">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Navbar
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/About">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Services">
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Cart">
              cart
              </NavLink>
            </li>
          </ul>
          
        </div>
      </div>
    
<Badge color="secondary" badgeContent={iconData}  style={{marginRight:"20px"}}><ShoppingCartIcon onClick={onClickHandler} /></Badge>
   
    </nav>
   
    </div>
  )
}

export default Navbar