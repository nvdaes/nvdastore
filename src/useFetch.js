import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url, {
		method: 'GET',
		mode: 'cors',
		cache: 'no-cache',
		credentials: 'omit',
		headers: {      'Content-Type': 'application/json'
		},
		redirect: 'follow',
		referrerPolicy: 'no-referrer',
		})
      .then((res) => res.json())
      .then((data) => setData(data.filter((item => item.legacy === undefined))));
  }, [url]);

  return [data];
};

export default useFetch;