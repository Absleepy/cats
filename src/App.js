import { BrowserRouter, Switch, Route } from "react-router-dom";
import Breeds from "./components/cat-container/Breeds";
import Cat from "./components/cat/Cat";
import Index from "./home/index";
import Header from "../src/components/header/Header";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/breeds" component={Breeds} />
          <Route exact path="/images/:id" component={Cat} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
