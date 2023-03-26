module.exports = async ({github, core}) => {
	const url = https://www.nvaccess.org/addonStore/en/all/latest.json;
	const response = await github.request(url);
	const [data] = await JSON.parse(response);
	
}
