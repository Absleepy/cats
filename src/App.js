import { BrowserRouter, Switch, Route } from "react-router-dom";
import Breeds from "../src/components/breeds/Breeds";
import firebase from './firebase/firebase-config';
import Cat from "./components/cat/Cat";
import Index from "./home/index";
import Header from "./components/header/Header";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import React from "react";
import { useDispatch, useSelector} from "react-redux";
import { UserSuccessAction, logOutUserAction } from "./redux/actions/actions";
function App() {

  const state = useSelector(state => state);
  console.log(state)
  
  const dispatch = useDispatch(); 
  React.useEffect(() => {  
 

    firebase.auth().onAuthStateChanged(async (auth) => { 
      if (auth) {
        const user = await firebase.firestore().collection("users").doc(auth?.uid).get(); 
        if(user?.exists)
        dispatch(UserSuccessAction(user.data()))
       } else {
         dispatch(logOutUserAction())
      }
    })
  },[])
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/breeds" component={Breeds} />
          <Route exact path="/images/:id" component={Cat} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
