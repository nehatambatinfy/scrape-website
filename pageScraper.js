const scraperObject = {
	// url: 'http://books.toscrape.com',
	url: 'https://www.w3schools.com/',
	// url: 'https://in.bookmyshow.com/',

	async scraper(browser){

        // Create a page
		let page = await browser.newPage();
		console.log(`Navigating to ${this.url}...`);

        // Navigate to your site
		await page.goto(this.url, {waitUntil: 'load', timeout: 30000});

        /***************************************
         * Site: Books to scrape
         * Details: Site is Good to scrape
         ***************************************/

        // // Wait for the required DOM to be rendered
		// await page.waitForSelector('.page_inner');

		// // Get the link to all the required books
		// let urls = await page.$$eval('section ol > li', links => {
		// 	// Make sure the book to be scraped is in stock
		// 	links = links.filter(link => 
        //         link.querySelector('.instock.availability > i').textContent !== "In stock"
        //     )
		// 	// Extract the links from the data
		// 	links = links.map(el => el.querySelector('h3 > a').href)
		// 	return links;
		// });
		// console.log(urls);


        /***************************************
         * Site: Bookmyshow
         * Details: Site is Difficult to scrape as ids and classes are random in nature and difficult to identify
         ***************************************/

        //Wait for page to load
        // await page.waitForSelector(`//img[@alt="PUNE"]`)

        // page.click(`//img[@alt="PUNE"]`, {delay: 1000})
        


        /***************************************
         * Sire: W3School
         * Details: Site is Good to scrape
         ***************************************/

        //Wait for page to load
        await page.waitForSelector('div.tutbuttons');

        //List down all tutorials
        let listOfTutorials = await page.$$eval('div.tutbuttons > div > div', tutorials => {
            tutorials = tutorials.map(el => el.querySelector('div > a').title)
			return tutorials;
		});

        console.log(`W3school has total ${listOfTutorials.length} tutorials. Here is list of tutorials : `);
        console.log('List of tutorials: ', listOfTutorials);



        // Close browser.
        await browser.close();
		
	}
}

module.exports = scraperObject;