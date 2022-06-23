import MD5 from "crypto-js/md5";

export const getHeroesService = async ({ name }) => {
	var marvelApiStart =
		"https://gateway.marvel.com:443/v1/public/characters?apikey=";
	var marvelPublicKey = "a1968c866145ad6dc54be539166d9541";
	var marvelPrivateKey = "fef0512419e6b792eb8b5444f55080d3bb9f59ae";
	var ts = new Date().getTime();
	var hash = MD5(ts + marvelPrivateKey + marvelPublicKey);

	let requestUrl;

	if (name === "") {
		requestUrl =
			marvelApiStart +
			marvelPublicKey +
			"&ts=" +
			ts +
			"&hash=" +
			hash +
			"&limit=30";
	} else {
		requestUrl =
			marvelApiStart +
			marvelPublicKey +
			"&ts=" +
			ts +
			"&hash=" +
			hash +
			"&nameStartsWith=" +
			name;
	}

	try {
		let response = await fetch(requestUrl);
		let data = await response.json();
		return data.data.results;
	} catch (error) {
		console.log(error);
		return error;
	}
};
