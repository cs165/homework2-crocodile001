// TODO(you): Add your own positive messages if you'd like!
const POSITIVE_MESSAGES = [
  'You are worthy.',
  'You are enough.',
  'Be kind and forgiving to yourself.',
  'You are amazing.',
  'It\'s okay not to be okay.',
  'It\'s enough to just breathe.',
  'You are loved.',
  'I believe in you.',
  'You can do it!',
  'You are not a failure.',
  'You matter.',
  'Your life matters.'
];

chrome.runtime.onConnect.addListener(function(port) {
  port.onMessage.addListener(onMessage);
});

function change(event){
  event.stopPropagation();
  console.log("click");

  let tweet = event.currentTarget;
  let ps = tweet.querySelectorAll('.tweet-text');

  for( p of ps ){
    let txt = POSITIVE_MESSAGES[Math.floor(Math.random() * POSITIVE_MESSAGES.length)];
    p.textContent = txt;
    console.log(txt);
  }
}

var timer;

function onMessage(gardeningInProgress) {
  // TODO(you): Implement this function for extra credit! Add helper functions
  // as needed.

  // NOTE: This extension is EXTRA CREDIT and is not required for HW2.

  // If `gardeningInProgress` is true, that means "Start Gardening" was clicked.
  // If `gardeningInProgress` is false, that means "Stop Gardening" was clicked.
  console.log(gardeningInProgress);

  const tweets = document.body.querySelectorAll('.tweet');
  console.log(tweets);
  var style = document.createElement('style');
  var style2 = document.createElement('style');


  if(gardeningInProgress){

    timer = setInterval(function(){
      console.log("listening");
      const tweetss = document.body.querySelectorAll('.tweet');
      for( tweet of tweetss ){
        tweet.addEventListener('click', change);
      }
    },300);

  	const cur = chrome.runtime.getURL('images/rose-cursor.gif');
  	const url = chrome.runtime.getURL('images/sparkle.gif');
    var css = '.tweet:hover{ background-image: url(' + url + '); opacity:0.8;}';
    var css2 = '.tweet{ border-bottom: 1px solid #e6ecf0; cursor: url(' + cur + ') 4 12, auto;}';
  	if (style.styleSheet) {
  	  style.styleSheet.cssText = css;
    } 
    else {
  	  style.appendChild(document.createTextNode(css));
    }
    tweets[0].appendChild(style);
    
    if (style2.styleSheet) {
  	  style2.styleSheet.cssText = css2;
    }
    else {
  	  style2.appendChild(document.createTextNode(css2));
    }
    tweets[0].appendChild(style2);

    for( tweet of tweets ){
      tweet.addEventListener('click', change);
    }
  }

  else{

    clearInterval(timer);

    var css = '.tweet:hover{ background-image:none; background-color: #f5f8fa; opacity:1;}';
	  var css2 = '.tweet{ border-bottom: 1px solid #e6ecf0; cursor: pointer;}';

  	if (style.styleSheet) {
  	  style.styleSheet.cssText = css;
    } 
    else {
  	  style.appendChild(document.createTextNode(css));
    }
    tweets[0].appendChild(style);
    
    if (style2.styleSheet) {
  	  style2.styleSheet.cssText = css2;
    } 
    else {
  	  style2.appendChild(document.createTextNode(css2));
    }
    tweets[0].appendChild(style2);
  	
    for( tweet of tweets ){
      tweet.removeEventListener('click', change);
    }
  }

}
