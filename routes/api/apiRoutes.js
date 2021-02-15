const express = require('express'),
fetch = require('node-fetch'),
router = express.Router(),

awsAccessKey = process.env.AWS_ACCESS_KEY_ID;
awsSecretKey = process.env.AWS_SECRET_ACCESS_KEY;


// get infection Rates by Region since 01/01/2020
router.get('/coordinates/:city', async ({ params: { city } }, res) => {
    //this is temporary code used as placeholder for whenever we have an actual uri.
	try {
		const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${googleAPIKey}`,
         fetch_response = await fetch(url),
		 json = await fetch_response.json();

		res.json(json);
	} catch (err) {
		res.json({ message: err });
	}
});

// get rolling count of Most Used Twitter Hashtags
router.get('/coordinates/:city', async ({ params: { city } }, res) => {
    //this is temporary code used as placeholder for whenever we have an actual uri.
	try {
		const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${googleAPIKey}`,
         fetch_response = await fetch(url),
		 json = await fetch_response.json();

		res.json(json);
	} catch (err) {
		res.json({ message: err });
	}
});

// get depicting tone of tweets since 12/11/2020
router.get('/coordinates/:city', async ({ params: { city } }, res) => {
    //this is temporary code used as placeholder for whenever we have an actual uri.
	try {
		const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${googleAPIKey}`,
         fetch_response = await fetch(url),
		 json = await fetch_response.json();

		res.json(json);
	} catch (err) {
		res.json({ message: err });
	}
});

module.exports = router;