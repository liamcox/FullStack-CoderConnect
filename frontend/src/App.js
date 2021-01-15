import "./App.css";
import React, { useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Alert from "./components/layout/Alert";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Redux
import { Provider } from "react-redux";
import store from "./store";

import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
import { LOGOUT } from "./actions/types";

function App() {
    useEffect(() => {
        // check for token in LS
        if (localStorage.token) {
            setAuthToken(localStorage.token);
        }
        store.dispatch(loadUser());

        // log user out from all tabs if they log out in one tab
        window.addEventListener("storage", () => {
            if (!localStorage.token) store.dispatch({ type: LOGOUT });
        });
    }, []);

    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Navbar />
                    <Route exact path='/' component={Landing} />
                    <div className='section'>
                        <section className='container'>
                            <Alert />
                            <Switch>
                                <Route
                                    exact
                                    path='/register'
                                    component={Register}
                                />
                                <Route exact path='/login' component={Login} />
                            </Switch>
                        </section>
                    </div>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
