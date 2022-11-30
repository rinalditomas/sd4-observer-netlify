import { createContext, useReducer } from "react";
import StoreReducer, { initialState } from "./storeReducer";
// @ts-ignore
const StoreContext = createContext();

const StoreProvider = ({ children }: any) => {
  const [store, dispatchh] = useReducer(StoreReducer, initialState);

  return <StoreContext.Provider value={[store, dispatchh]}>{children}</StoreContext.Provider>;
};

export { StoreContext };
export default StoreProvider;
