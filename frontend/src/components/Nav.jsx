import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/testlogo.png";
import { useNavigate } from "react-router-dom";
import "./Nav.css";
import Carousel from "./Carousel";
const Nav = ({setCategory}) => {
  const loggedIn = localStorage.getItem("user");
  const navigate = useNavigate();

  const logout = () => {
    let ans = prompt("Are you sure you want to log out? Y : N");
    if (ans === "Y" || ans === "y") {
      localStorage.removeItem("user");
      navigate("/");
    }
  };
  return (
    <div className="navbar">
      <div className="nav-left">
        <Link to="/">
          <img
            src={logo}
            style={{
              height: "50px",
              margin: "3px 0px 0px 20px",
              padding: "0px",
              borderRadius: "80px",
            }}
          ></img>
        </Link>
        <ul>
          <li>
            <Link to="/new-item">Add new items</Link>
          </li>
          <li>
            <Link to="/update-item">Update items</Link>
          </li>
          <li >
            <div className="dropdown"   >
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{color:"white",background:"none" ,border:"none",fontSize:"20px"}}
              >
                Category
              </button>
              <ul className="dropdown-menu"  style={{color:"white",background:"pink"}}>
                <li>
                  <div className="dropdown-item" onClick={()=>setCategory('t-shirt')}>
                    T-shirts
                  </div>
                </li>
                <li>
                  <div className="dropdown-item" onClick={()=>setCategory('pant')}>
                    Pants
                  </div>
                </li>
                <li>
                  <div className="dropdown-item" onClick={()=>setCategory('shirt')}>
                   Shirts
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      </div>
      {loggedIn ? (<>
      
        <ul>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li onClick={logout}>logout</li>
        </ul>
        </>
      ) : (
        <ul>
          <li>
            <Link to="/register">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>{" "}
        </ul>
      )}
    </div>
  );
};

export default Nav;
