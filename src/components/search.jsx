import { Input } from "@mui/material";
import { useContext } from "react";
import { AutoContext } from "../context/autoContext";

export default function Search() {
  const { countries, setFilteredArr } = useContext(AutoContext);
  const handleInput = (e) => {
    const filtered = countries.filter((country) => {
      const myRegExp = new RegExp(`^${e}`, "gi");
      return country.name.match(myRegExp) || country.capital.match(myRegExp);
    });
    setFilteredArr(filtered);
  };
  return (
    <div>
      <Input
        type="text"
        placeholder="Search country/city"
        onChange={(e) => handleInput(e.target.value)}
      />
    </div>
  );
}
