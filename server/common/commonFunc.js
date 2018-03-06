
exports.formatJSON = (data,status,message,code) => {
	let json = {
		code,
		data,
		message,
		status
	};
	return JSON.stringify(json);
}