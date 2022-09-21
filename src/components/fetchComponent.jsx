import { useContext, useEffect } from "react";
import { AutoContext } from "../context/autoContext";

export default function FetchComponent() {
  const { setCountries, filteredArr, initPage, setInitPage } = useContext(
    AutoContext
  );

  const fetchF = () => {
    const url = "https://countriesnow.space/api/v0.1/countries/capital";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCountries(data.data));
  };
  const handlePrev = () => {
    initPage && setInitPage(initPage - 1);
  };

  const handleNext = () => {
    setInitPage(initPage + 1);
  };

  useEffect(() => {
    fetchF();
  }, []);

  return (
    <div className="container">
      {filteredArr.length > 0 &&
        filteredArr.slice(initPage * 10, initPage * 10 + 10).map((v) => (
          <div className="d-flex">
            <h5>{v.name}</h5>
            <div> -{v.capital}</div>
          </div>
        ))}
      <hr />
      <button
        onClick={handlePrev}
        className="btn"
        disabled={initPage ? false : true}
      >
        Prev
      </button>

      <button
        onClick={handleNext}
        className="btn"
        disabled={
          initPage + 1 < Math.ceil(filteredArr.length / 10) ? false : true
        }
      >
        Next
      </button>
    </div>
  );
}
