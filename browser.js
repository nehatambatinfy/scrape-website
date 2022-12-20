const puppeteer = require('puppeteer');

async function startBrowser(){
	let browser;
	try {
	    console.log("Opening the browser......");

        /**
         * Puppeteer has a .launch() method that launches an instance of a browser.
		 * 1) headless - false means the browser will run with an Interface so you can watch 
		 * your script execute, while true means the browser will run in headless mode
		 * 2) ignoreHTTPSErrors - true allows you to visit websites 
		 * that aren’t hosted over a secure HTTPS protocol and ignore any HTTPS-related errors.
         */
	    browser = await puppeteer.launch({
	        headless: false,
	        args: ["--disable-setuid-sandbox"],
	        'ignoreHTTPSErrors': true,
			devtools: true
	    });
	} catch (err) {
	    console.log("Could not create a browser instance => : ", err);
	}
	return browser;
}

module.exports = {
	startBrowser
};