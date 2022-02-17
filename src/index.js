import ReactDOM from "react-dom";
import useFetch from "./useFetch";
import { useState } from "react";


const Home = () => {
  const subfix = "todos";
  // const [url, setUrl] = useState(`https://jsonplaceholder.typicode.com/${subfix}`);
  const [url, setUrl] = useState("https://raw.githubusercontent.com/nvdaes/nvdastore/master/src/2021.2.0.json");
  const [channel, setChannel] = useState("all");
  const handleChange = (event) => {
    setChannel(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setUrl(`https://www.nvaccess.org/addonStore/en/${channel}/2021.2.0.json`);
  }  

  const [data] = useFetch([url]);
  return (
    <>
      <form role="form" onSubmit={handleSubmit}>
        <label>Select channel release
          <select
          value={channel}
          onChange={handleChange}>
            <option value="all">All</option>
            <option value="stable">Stable</option>
            <option value="beta">Beta</option>
          </select>
        </label>
          <input type="submit" />
      </form>
        <h1>Available add-ons</h1>
        {data &&
        data.map((item, index) => {
          return <h2 key={index}>{item.displayName}</h2>;
        })}
    </>
  );
};

ReactDOM.render(<Home />, document.getElementById("root"));