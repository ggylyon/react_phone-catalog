import React from 'react';
import { Accessory, Phone, Product, Tablet } from '../../entities/product';

type State = {
  phones: Phone[];
  accessories: Accessory[];
  products: Product[];
  tablets: Tablet[];
};

export const initialState: State = {
  phones: [],
  accessories: [],
  products: [],
  tablets: [],
};

type Action = { type: 'loadPhones'; payload: { phones: Phone[] } };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'loadPhones':
      return { ...state, phones: action.payload.phones };
  }
};

const StateContext = React.createContext<State>(initialState);
const DispatchContext = React.createContext<React.Dispatch<Action>>(() => {});

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export const useDispatch = () => React.useContext(DispatchContext);
export const useGlobalState = () => React.useContext(StateContext);
