import ReactDOM from "react-dom";
import useFetch from "./useFetch";

function Home(props) {
	const data = useFetch(`${props.url}`)	;
	// const [data] = useFetch("https://www.nvaccess.org/addonStore/en/all/2021.2.0.json");
	// const data = useFetch ("https://jsonplaceholder.typicode.com/todos/1");

	return (
		<>
			{data &&
			data.map((item, index) => {
				return <p key={index}>{item.displayName}</p>;
			})}
		</>
	);
};

ReactDOM.render(<Home url="https://www.nvaccess.org/addonStore/en/all/2021.2.0.json" />, document.getElementById("root"));
