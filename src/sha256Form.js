import { useState } from "react";
import { sha256 } from "crypto-hash";

const Sha256Form = () => {
	const [sha, setSha] = useState("");
	const [expectedSha, setExpectedSha] = useState("");
	const [outputText, setOutputText] = useState("");

	const handleEditChange = (e) => {
		setExpectedSha(e.target.value);
	}

	const handleFileChange = (e) => {
		const fileReader = new FileReader();
		fileReader.onload = async () => {
			setSha(await sha256(fileReader.result));
		}
		fileReader.readAsArrayBuffer(e.target.files[0]);
	}

	const handleSubmit = (e) => {
			e.preventDefault();
		setOutputText(`${sha}` === `${expectedSha}` ? "Valid": "Not Valid");
	}

	return(
	<>
	<form onSubmit={handleSubmit}>
	<label>Expected SHA-256
	<input type="text" value={expectedSha} onChange={handleEditChange} required size="64" maxlength="64" />
	</label>
	<label>Select file
	<input type="file" onChange={handleFileChange} required accept=".nvda-addon"/>
	<input type="submit" value="Check SHA-256" />
	</label>
<output>{outputText}</output>
</form>
	</>
	)
}

export default Sha256Form;
