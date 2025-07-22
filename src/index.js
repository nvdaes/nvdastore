import ReactDOM from "react-dom";
import useFetch from "./useFetch";
import { useState } from "react";
import Sha256Form from "./sha256Form";
import Footer from "./footer";

const Home = () => {
  // const [url, setUrl] = useState(`https://jsonplaceholder.typicode.com/${subfix}`);
  const [lang, setLang] = useState("en");
    const [channel, setChannel] = useState("all");
	  const [apiVer, setApiVer] = useState("latest");
  const [url, setUrl] = useState(`https://addonstore.nvaccess.org/${lang}/${channel}/${apiVer}.json`);
  const handleLangChange = (event) => {
    setLang(event.target.value);
  }
  const handleChannelChange = (event) => {
    setChannel(event.target.value);
  }
    const handleApiVerChange = (event) => {
    setApiVer(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
		    setUrl(`https://www.nvaccess.org/addonStore/${lang}/${channel}/${apiVer}.json`);
  }

  const [data] = useFetch([url]);
  return (
    <>
	<header>
	<p>Addons available on the <a href="https://github.com/nvaccess/addon-datastore"target="_blank" rel="noopener noreferrer">NV Access add-on datastore repository</a> (external)</p>
      <form onSubmit={handleSubmit}>
	  <label>Language
	  <input type="text" defaultValue={lang} onChange={handleLangChange} />
	  </label>
	  	  <label>API version
	  <input type="text" defaultValue={apiVer} onChange={handleApiVerChange} />
	  </label>
        <label>Select release channel
          <select
          value={channel}
          onChange={handleChannelChange}>
            <option value="all">All</option>
            <option value="stable">Stable</option>
            <option value="beta">Beta</option>
            <option value="dev">Dev</option>
          </select>
        </label>
          <input type="submit" value="Set options" />
      </form>
	  </header>
	  <main>
        <h1 aria-live="polite" aria-atomic="true">Available add-ons: {url}</h1>
        {data &&
        data.map((item, index) => {
          return (
		  <>
		  <h2 key={index}><a href={item.URL}>{item.displayName} {item.addonVersionName}</a></h2>
		  <p>{item.description}</p>
		  		  <ul>
		  <li>ID: {item.addonId}</li>
		  <li>version: {item.addonVersionName}</li>
		<li>channel: {item.channel}</li>
		<li>publisher: @{item.publisher}</li>
		<li>SHA-256: {item.sha256}</li>
		<li><a href={item.homepage} target="_blank" rel="noopener noreferrer">{item.addonId} homepage</a> (external)</li>
		<li><a href={item.sourceURL} target="_blank" rel="noopener noreferrer">{item.addonId} source code</a> (external)</li>
		</ul>
						</>
					)
			
        })}
		</main>
		<aside>
				<Sha256Form />
				</aside>
		<Footer />
    </>
  );
};

ReactDOM.render(<Home />, document.getElementById("root"));
