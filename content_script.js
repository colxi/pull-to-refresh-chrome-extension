/*
* @Author: colxi
* @Date:   2018-01-25 04:28:49
* @Last Modified by:   colxi
* @Last Modified time: 2018-02-16 21:58:03
*/
//
// pull-to-refresh
//

//console.log('injected', document.readyState);

document.addEventListener("DOMContentLoaded", function(event) {
	//
	// inject '<div id="reload"><img src="img/re.png"></div>'
	// inject '<link type="text/css" rel="stylesheet" href="css/styles.css">'
	//
	var div=document.createElement("div");
	div.id='reload_chrome_ext';
	var img=document.createElement("img");
	img.src = 'data:image/png;base64,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CovlZP/QVMrMx26Neg8Exf5xE9Dcd9dJVuZhpxt5DwjF67GCfD27Sd5J+G92prBYhk0RksjMxA7H8R4gRY4foh/kUZsAPI7/QCla7AE+X0H/SARGALfjP2iKEtuA91XUMxKNJuBibFq19wDKczwGTKmwTyRCC9FT91CxhHSXIEiZw4h704LUYgdwVlU9INEbhC3Q0fOS+mIVcESVbS8JOQLb/9V7oKUWrwDn1NDekqhPY5sGeA+8FOJGbGWjFMwIbBp2ahseZBWrsRkKUnCTsAPtU9hHKotYB3y4rhaVXJqCzSNKYbO6ELEe21tLkwylX5OAayjOgqz7gA9iD1dFKnYQcAGwBv9B3OjowLYn1YE10hDvAK7DNnvzHty1xl5s87rPEG63Rym4Fmz6yvXEe9ZGeezGTo29CDi88c2RX5qzX78mbBvQecCp2HagMcxNehZY2R2rgK2uV5MoJUjjDQHeCpwIzACOxfYVbg1Y5mZs3+KHu/98CFs0JnVSgmSjGbsrNhHbjb0deyo9BhiNnVF+APbVrRX7VOrA5oyVxxbsJKZNZbER28pTRERERERERERERERERERERERERERERERERERERERERERERERERERERERERKRu/wOGvFvPKI1DkAAAAABJRU5ErkJggg==';
	div.appendChild(img);
	document.body.appendChild(div);

	//console.log('injected DOMContentLoaded');

	var DEBUG 			= true;
	var timeout 		= 2;
	let touchstartX 	= 0;
	let touchstartY 	= 0;
	let themeBaseColor  = '#f50057';

	//bgestures navigation
	var gestures = {
		DOMElement : document.querySelector('#reload_chrome_ext'),
		sensitivity : {
			'wheel' 	: 5.5,
			'touchmove' : 3.5
		},
		actionAmmountLimit: 120,
		actionAmmount : 0,
		timeoutCountdown : 100,
		timeoutWatcher : null,
		log : function(msg){
			if(DEBUG) console.log(msg);
			return true;
		},
		getDirection: function(e){
			// Detectmdirection in both e.type cases ( wheel  touchmove )
			let direction = '';
			if ( e.type ===  'wheel' ) direction = e.deltaY < 0 ? 'up' : 'down';
			else{
			 	let dif_x =  Math.abs( touchstartY - e.touches[0].screenY );
			 	let dif_y =  Math.abs( touchstartX - e.touches[0].screenX );
			 	let axis = dif_x >= dif_y ? 'vertical' : 'horizontal';
			 	if(axis === 'horizontal'){
			 		direction = touchstartX - e.touches[0].screenX < 0 ? 'left' : 'right';
				}else direction = touchstartY - e.touches[0].screenY < 0 ? 'up' : 'down';
			}
			//gestures.log(direction);
			return direction;
		},
		getDOMElementPosition : function(){
			return parseInt( gestures.DOMElement.style.top, 10 );
		},
		timeoutCheck: function(){
			if( gestures.timeoutWatcher === null){
				gestures.log('timeout countdown createed')
				gestures.timeoutWatcher	= setInterval( function(){

					if( gestures.getDOMElementPosition() < -50 ){
						gestures.log('timeout countdown destroyed')
					 	clearInterval(gestures.timeoutWatcher);
					 	gestures.timeoutWatcher = null;
						return;
					}
					if(gestures.timeoutCountdown > 0) gestures.timeoutCountdown -= 0.1;
					else{
						gestures.timeoutCountdown  = 0;
						gestures.actionAmmount--;
						gestures.render();
					}
				}, 10);
			}
		},
		render: function(){
			gestures.DOMElement.style.top = (-50 +  gestures.actionAmmount) + 'px';
			gestures.DOMElement.style.transform = 'rotate('+ (gestures.actionAmmount*2)  +'deg)';
			gestures.DOMElement.style.opacity = gestures.actionAmmount * 2 / 100;
		},
		isOverscroll(){ return window.pageYOffset === 0 ? true : false; },
		isReloading(){ return gestures.DOMElement.hasAttribute('reloading_chrome_ext'); },
		scrollEventHandler: function(e) {
			// if direction is down, cancel reload event progress
			if( gestures.getDirection(e) === 'down' || gestures.isReloading() ){
			 	gestures.timeoutCountdown = 0;
			 	return false;
			}
			if( gestures.isOverscroll() ){
				gestures.timeoutCheck();
				// increase actionAmmount
				gestures.actionAmmount += gestures.sensitivity[e.type];

				if( gestures.actionAmmount > gestures.actionAmmountLimit ){
					gestures.actionAmmount = 90;
					gestures.render();
					gestures.DOMElement.setAttribute('reloading_chrome_ext','true');
					setTimeout( function(){ location.reload(); }, 2000);
					clearInterval(gestures.timeoutWatcher);
					return 'RELOADIND_PAGE';
					// END OF EXECUTION, PAGE RELOADS
				};
				// set the positon of the loader element
				gestures.render();
				// reset the timeoy counter
				gestures.timeoutCountdown = timeout;
		  	}
	 	}
	};


	/* Add the event listeners for each event. */
	document.addEventListener('wheel', gestures.scrollEventHandler);
	document.addEventListener('touchmove', gestures.scrollEventHandler );
	document.addEventListener('touchstart', function(event) {
	    touchstartX = event.changedTouches[0].screenX;
	    touchstartY = event.changedTouches[0].screenY;
	}, false);

});
