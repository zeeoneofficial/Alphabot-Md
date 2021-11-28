"use strict";
const axios = require("axios");
const fs = require("fs");
const FormData = require('form-data')
const { default: Axios } = require('axios');

exports.upload = async(path) => {
	return new Promise((resolve,reject) => {
		const bodyForm = new FormData();
		bodyForm.append('file', fs.createReadStream(path))
		axios(`https://chika-uploader.herokuapp.com/upload`,{
			method: 'POST',
			data: bodyForm,
			headers: {
				"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
				"accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
				"content-type": `multipart/form-data; boundary=${bodyForm._boundary}`
			}
		})
        .then(({ data }) => {
			resolve(data)
		})
	})
}