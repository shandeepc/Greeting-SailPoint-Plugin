function observerForMutation(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

observerForMutation('h1.ng-binding').then((elm) => {
    	let hrs = new Date().getHours();
		let msg;
		if(hrs >= 0 && hrs < 12) 
			msg = 'Good Morning';
		else if(hrs >= 12 && hrs < 18) 
			msg = 'Good Afternoon';
		else if(hrs >= 18 && hrs < 20) 
			msg = 'Good Evening';
		else 
			msg = 'Good Night';
		
		jQuery("h1.ng-binding").text('')
		jQuery("h1.ng-binding").append('<i role="presentation" class="fa fa-home"></i>' + ' ' + msg + ' ' + PluginHelper.getCurrentUserDisplayableName() + ' !')
});