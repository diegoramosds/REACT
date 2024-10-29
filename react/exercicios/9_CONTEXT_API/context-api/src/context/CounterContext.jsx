//1- criar context
import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const CounterContext = createContext();

//2- criar provider
export const CounterContextProvider = ({ children }) => {
    const [counter, setCounter] = useState(5);

   return (
    <CounterContext.Provider value={{counter, setCounter}}>
        {children}
    </CounterContext.Provider>
   )
}

CounterContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
}