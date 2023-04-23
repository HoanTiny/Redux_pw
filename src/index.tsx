import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import PhotoList from "./components/PhotoList";

ReactDOM.render(
    <Provider store={store}>
        <PhotoList />
    </Provider>,
    document.getElementById("root")
);
