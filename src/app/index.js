import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import "./App.scss";
import store from "store";
import TransitionWrapper from "./TransitionWrapper";
import AppBar from "components/appbar";
import MainPage from "pages/main-page";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <AppBar />
          <TransitionWrapper>
            <Route exact path="/contact/:contactID">
              <MainPage />
            </Route>
            <Route exact path="/">
              <MainPage />
            </Route>
          </TransitionWrapper>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
