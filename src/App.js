import FetchComponent from "./components/fetchComponent";
import Search from "./components/search";
import { AutoProvaider } from "./context/autoContext";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Autocomplete</h1>
      <AutoProvaider>
        <Search />
        <FetchComponent />
      </AutoProvaider>
    </div>
  );
}
