import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import PhotoList from "./components/PhotoList";

const App = () => {
    return (
        <Provider store={store}>
            <PhotoList />
        </Provider>
    );
};

export default App;
