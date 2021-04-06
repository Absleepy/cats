import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../custom/Button";
import axios from "axios";
import { API_URL, API_KEY } from "../../config/config";
const Header = () => {
  const [userImage, setUserImage] = useState("./user.png");
  const [uploadedImage, setUploadedImage] = useState("");
  const fetchImg = async (img) => {
    const res = await axios({
      method: "post",
      url: `${API_URL}/images/upload`,
      headers: {
        "x-api-key": API_KEY,
      },
      data: {
        file: img,
        sub_id: "32dsldkfj",
      },
    })
      .then((res) => res.json())
      .then((data) => setUploadedImage(data));
  };

  const changeUserImage = (e) => {
    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setUserImage(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }

    // fetchImg(userImage);
  };

  return (
    <header className="header">
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
                <div className="grid-2-col d-grid align-center justify-center">
                  <Button>
                    <span>Login</span>
                  </Button>
                  <Button>
                    <span>Register</span>
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
