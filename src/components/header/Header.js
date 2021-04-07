import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../custom/Button";
import axios from "axios";
 import { API_URL, API_KEY } from "../../config/config";
import { useSelector } from "react-redux";
const Header = () => {

  const user = useSelector(state => state.userReducer.user);
  
  const [userImage, setUserImage] = useState("./user.png"); 
  const fetchImg = async (img) => {
    let bodyFormData = new FormData();
    bodyFormData.append('file', img);
    bodyFormData.append('sub_id', '32dsldkfj');
    const res = await axios({
      method: "post",
      url: `${API_URL}/images/upload`,
      headers: {
        "x-api-key": API_KEY,
        'Content-Type': 'multipart/form-data'
      },
      data:bodyFormData 
    })
    setUserImage(res?.data?.url)
      return res;
  }; 
  const changeUserImage = (e) => {
    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setUserImage(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }

    fetchImg(e.target.files[0]);
  };

  return (
    <header className="header">
      <h4>Welcome {user?.email}</h4>
      <div className="d-grid header-grid">
        <strong className="d-block logoContainer">
          <Link to="/">
            <img id="logo" src="./logo.png" width="100%" alt="Cats" />
          </Link>
        </strong>
        <nav className="nav w-100">
          <div className="d-grid h-100 nav-grid">
            <ul className="h-100 d-grid nav-links-grid">
              <li className="nav-li">
                <Link className="font-bold nav-link c-white" to="/breeds">
                  Breeds
                </Link>
              </li>
              <li className="nav-li">
                <Link className="font-bold nav-link c-white" to="/breeds">
                  Adoptable
                </Link>
              </li>

              <li className="nav-li">
                <Link className="font-bold nav-link c-white" to="/breeds">
                  Favourites
                </Link>
              </li>
            </ul>
            <div className="header-login">
              <div className="user-image d-block">
                <img src={userImage} width="100%" />
                <input
                  title="Profile Image"
                  onChange={changeUserImage}
                  type="file"
                  name="userImage"
                  id="userImageInput"
                />
              </div>
              <div className="login-popup">
                {user?.name &&<h4>Welcome {user?.name}</h4>}
                <div className="grid-2-col d-grid align-center justify-center">
                  <Button>
                    
                    <Link to="/login"><span>Login</span></Link>
                  </Button>
                  <Button>
                    <Link to="/register"><span>Register</span></Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
