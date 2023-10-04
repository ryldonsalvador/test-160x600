var isEndFrame = false;
var looping = 0;
var tl = new TimelineLite();
var dc1 = true;
var dc2 = false;
var dc3 = false;

function initThis(){

	TweenMax.set('#main_content, #frame1', {opacity:1, delay:0});
	addListeners();
	setElements();
}


function elemId(id) {
	return document.getElementById(id);
}

function setElements(){
	TweenMax.delayedCall(0.3, introFrame);
}

function addListeners(){

	// document.getElementById("cta_click").addEventListener("mouseover", overView);
	// document.getElementById("cta_click").addEventListener("mouseout", outView);
}

function introFrame() {
	TweenMax.set('#headline1', {opacity: 1, ease:Power3.easeInOut})
	TweenMax.set('#cta', {delay:.5, opacity: 1, ease:Power3.easeInOut})
	TweenMax.to('.bg', 5, {scale:1.2,y:50, ease:Quint.easeIn,onComplete:function(){
		TweenMax.to('.img2', 1, {opacity: 1, ease:Power3.easeInOut})	
		TweenMax.to('#headline2', .8, {opacity: 0, ease:Power3.easeInOut})
		TweenMax.to('#headline3', .8, {delay:1, opacity: 1, ease:Power3.easeInOut})
	}})
	
	
	TweenMax.to('#headline1', .8, {delay:3, opacity: 0, ease:Power3.easeInOut})
	TweenMax.to('#headline2', .8, {delay:3.5, opacity: 1, ease:Power3.easeInOut})
	// tl.to('#frame2', 0.5, {opacity: 1, ease:Quint.easeIn},2.5)
	// tl.to('#headline2', 0.5, {opacity: 1, ease:Quint.easeIn},3.5)
	// tl.to('#headline2', 0.5, {opacity: 0, ease:Quint.easeIn}, 7)
	// tl.to('#frame3', 0.5, {opacity: 1, ease:Quint.easeIn},7)
	// tl.to('#headline3', 0.5, {opacity: 1, ease:Quint.easeIn},8)

//	tl.to('#headline3', 0.5, {opacity: 0, ease:Quint.easeIn},12)
//	tl.to('#frame4', 0.5, {opacity: 1, ease:Quint.easeIn},12)
//	tl.to('#headline4', 0.5, {opacity: 1, ease:Quint.easeIn},13)
}

function overView(){
		TweenMax.to('#cta-over', .1, {opacity:1, delay:0, ease:Power1.easeInOut});

}

function outView(){
		TweenMax.killTweensOf('#cta-over');
		TweenMax.to('#cta-over', .5, {opacity:0, delay:0, ease:Power3.easeInOut});

}


function replayAnimation(){
	looping++

	console.log(looping);
	if(looping <= 1)
	{
		tl.restart();
	}

}


setTimeout(initThis,1500);
