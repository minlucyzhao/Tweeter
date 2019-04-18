//.addClass(): Adds one or more classes to the selected elements
//.append(): Example:$( ".inner" ).append( "<p>Test</p>" );
//.attr()
//.text()
//.html(): grabs content inside the object

/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
  
  // Fake data taken from tweets.json
  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  }


  //don't duplicate id
  function createTweetElement(data) {
    //define variable to new data
    let name = data.user.name;
    let image = data.user.avatars.regular;
    let handle = data.user.handle;
    let tweet = data.content.text;
    let date = data.created_at;
    
    //create new tweet in html
    let newTweet = $("<article>").addClass("tweet");
    //set how data variable should be added in html
    let tweetTemplate = 
            `<header>
                <img src="${image}"/>
                <h1 class="title">${name}</h1>
                <p class="userId">${handle}</p>
            </header>
            <div class="tweet-body">
                <h4 class="userTweet">${tweet}</h4>
            </div>
            <footer>
                <p class="daysAgo">${date}</p>
            </footer>`
    //append the tweetTemplate onto html
    $(newTweet).append(tweetTemplate);
    return newTweet;
  }
  $(document).ready(function() {
  var $tweet = createTweetElement(tweetData);
  
  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
});
