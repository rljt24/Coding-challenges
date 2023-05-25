function detectWord(str) {
	let strArr = str.split("");
	let output = [];
	for(let i=0; i < strArr.length; i++){
		if(strArr[i] == strArr[i].toLowerCase()){
			output.push(strArr[i]);
		}
	}
	return output.join("");
}
