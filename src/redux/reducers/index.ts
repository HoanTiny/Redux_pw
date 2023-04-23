import { combineReducers } from "redux";
import photoReducer from "./photo.reducer";

export type State = ReturnType<typeof rootReducer>; // Thêm khai báo kiểu dữ liệu ở đây

const rootReducer = combineReducers({
    photoReducer,
});

export default rootReducer;
