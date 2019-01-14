
setTimeout(_ => {

	let browser = window.browser || null;
	if (browser !== null) {
		console.info('Browser ready :)');

		let tab1 = browser.create('https://cookie.engineer');
		let tab2 = browser.create('https://old.reddit.com/r/programming');
		let tab3 = browser.create('stealth:settings');
		let tab4 = browser.create('stealth:welcome');

		tab1.onload = _ => console.log('tab1.onload', tab1);
		tab2.onload = _ => console.log('tab2.onload', tab2);
		tab3.onload = _ => console.log('tab3.onload', tab3);
		tab4.onload = _ => console.log('tab4.onload', tab4);

		browser.show(tab3);

		// TODO: is the tab.load() API really necessary?
		// It could be synchronized via browser.show()
		// and browser.refresh() as browser has peer
		// access and can do it in a cleaner manner
		tab1.load();
		tab2.load();
		tab3.load();
		tab4.load();

	} else {
		console.error('Browser not ready :(');
	}

}, 1000);

