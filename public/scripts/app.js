$(document).ready(function() {
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
  
// //--- SINGLE NEW TWEET (hardcoded data) ---//
// //Fake data taken from tweets.json
//   const tweetData = {
//     "user": {
//       "name": "Newton",
//       "avatars": {
//         "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
//         "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
//         "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
//       },
//       "handle": "@SirIsaac"
//     },
//     "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//     "created_at": 1461116232227
//   }

//--- MULTIPLE NEW TWEETS (hardcoded data) ---//
//Fake data taken from tweets.json
const data = [
    {
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
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": {
          "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
          "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
          "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
        },
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Johann von Goethe",
        "avatars": {
          "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      "created_at": 1461113796368
    }
  ];

//--------------------------------------------------------------------------------------
//CREATE NEW TWEET
//--------------------------------------------------------------------------------------
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
 

//--------------------------------------------------------------------------------------
//RENDER TWEETS
//--------------------------------------------------------------------------------------
  function renderTweets(tweets) {
    //   $("#tweets-container").empty();
      for (let tweet of tweets) {
        $("#tweets-container").prepend(createTweetElement(tweet));
    }
  }
  
  
  renderTweets(data);


//   var $tweet = createTweetElement(tweetData);
//   // Test / driver code (temporary)
//   console.log($tweet); // to see what it looks like
//   $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
});
