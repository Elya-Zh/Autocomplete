import { createContext, useState } from "react";

export const AutoContext = new createContext();
export const AutoProvaider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [filteredArr, setFilteredArr] = useState([]);
  const [value, setValue] = useState("");
  const [initPage, setInitPage] = useState(0);

  return (
    <AutoContext.Provider
      value={{
        countries,
        setCountries,
        filteredArr,
        setFilteredArr,
        value,
        setValue,
        initPage,
        setInitPage
      }}
    >
      {children}
    </AutoContext.Provider>
  );
};
