import * as React from "react";
import * as ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./app";
import { createStore } from "redux";
import { reducers } from "./redux/reducers";
import { Provider } from "react-redux"

const store = createStore(reducers);

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
)