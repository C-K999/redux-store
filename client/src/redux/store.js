import { configureStore } from "redux";
import reducer from "../utils/reducers";

const store = configureStore(reducer);
export default store;
