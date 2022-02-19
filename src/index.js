import ReactDOM from "react-dom";
import useFetch from "./useFetch";
import { useState } from "react";


const Home = () => {
  // const [url, setUrl] = useState(`https://jsonplaceholder.typicode.com/${subfix}`);
  const [url, setUrl] = useState("https://raw.githubusercontent.com/nvdaes/nvdastore/master/src/all2021.2.0.json");
  const [channel, setChannel] = useState("all");
  const [headerSubfix, setHeaderSubfix]= useState("all");
  const handleChannelChange = (event) => {
    setChannel(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setUrl(`https://raw.githubusercontent.com/nvdaes/nvdastore/master/src/${channel}2021.2.0.json`);
  if (channel === "stable") {
	  setHeaderSubfix("stable");
    } else {
		if (channel === "beta") {
			setHeaderSubfix("beta");
			} else {
				setHeaderSubfix("all");
			}
	};
  }

  const [data] = useFetch([url]);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Select release channel
          <select
          value={channel}
          onChange={handleChannelChange}>
            <option value="all">All</option>
            <option value="stable">Stable</option>
            <option value="beta">Beta</option>
          </select>
        </label>
          <input type="submit" />
      </form>
        <h1 aria-live="polite" aria-atomic="true">Available add-ons: {headerSubfix}</h1>
        {data &&
        data.map((item, index) => {
          return <h2 key={index}>{item.displayName} {item.versionName}</h2>;
        })}
    </>
  );
};

ReactDOM.render(<Home />, document.getElementById("root"));