import { BrowserRouter, Switch, Route } from "react-router-dom";
import Breeds from "./components/cat-container/Breeds";
import firebase from './firebase/firebase-config';
import Cat from "./components/cat/Cat";
import Index from "./home/index";
import Header from "./components/header/Header";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import React from "react";
import { useDispatch} from "react-redux";
import { createUserAction } from "./redux/actions/actions";
function App() {
  
  const dispatch = useDispatch(); 
  React.useEffect(() => {  
 

    firebase.auth().onAuthStateChanged(async (auth) => { 
      if (auth) {
        const user = await firebase.firestore().collection("users").doc(auth?.uid).get(); 
        if(user?.exists)
        dispatch(createUserAction(user.data()))
       } else {

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
          <Route exact path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
