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
                <img src="${escape(image)}"/>
                <h1 class="title">${escape(name)}</h1>
                <p class="userId">${escape(handle)}</p>
            </header>
            <div class="tweet-body">
                <h4 class="userTweet">${escape(tweet)}</h4>
            </div>
            <footer>
                <p class="daysAgo">${escape(date)}</p>
            </footer>`

    //append the tweetTemplate onto html
    $(newTweet).append(tweetTemplate);

    return newTweet;
  }

//--------------------------------------------------------------------------------------
//RENDER TWEETS
//--------------------------------------------------------------------------------------
  function renderTweets(tweets) {
      $("#tweets-container").empty();
      for (let tweet of tweets) {
        $("#tweets-container").prepend(createTweetElement(tweet));
    }
  }

//--------------------------------------------------------------------------------------
//TAKE NEW TWEET INPUT AND ADD IT TO SERVER (http://localhost:8080/tweets)
//After this runs, the server-side (tweets.js) takes it in and sets random username, 
//photo etc.. and saves it into the database with the new tweet input you typed.
//REFERENCE: tweetsRoutes.post(...)
//--------------------------------------------------------------------------------------
$(function() {
  let $button = $("#tweet-button");
  let $tweet = $(".tweet-input");

<<<<<<< HEAD
    // console.log('Runs here first');
    // $button.preventDefault(); 

=======
>>>>>>> feature/mongodb
    //it's better to use FORM and SUBMIT as action (try it this way as well)
    $button.on('click', function (event) {
        event.preventDefault();
        let newTweet = $tweet.serialize(); //get the value of text-area and seralize form data into query string before sending to server
        let tweetContent = $tweet.val();
<<<<<<< HEAD
        //error handling...
=======
        //error handling
>>>>>>> feature/mongodb
        if (tweetContent.length === 0) {
            $(".error").slideDown(80).text("Error: There is no text, please write something. :)");
        } else if (tweetContent.length > 140) {
            $(".error").slideDown(80).text("Error: Your tweet is too long. Max length is 140 characters. :D");
<<<<<<< HEAD
            // alert("Your tweet content is too long. Let's try not to exceed 140 characters. :)");
        } else {
            $.ajax({
                type: 'POST',
                url: '/tweets',
                data: newTweet,
                success: function() {
                    // alert("posted to server successfully!");
                    // console.log(newTweet);
                    $tweet.val(null);
                    loadTweets();
                    $(".error").slideUp();
                    //add renderTweet() here to add new tweet
                }
            });
        }

        // $button.preventDefault(); 
        // console.log('Button clicked, performing ajax call...');
        
        // $.ajax('more-posts.html', { 
        //     method: 'GET' 
        // })
        // .then(function (renderTweets(tweets)) {
        // console.log('Success: ', morePostsHtml);
        // // $button.replaceWith(morePostsHtml);
        // console.log("AJAX COMPLETE");
        // });
=======
            // alert("Your tweet content is too long. Let's try not to exceed 140 characters. :)";
        } else {  
          $.ajax({
            type: 'POST',
            url: '/tweets',
            data: newTweet,
            success: function() {
                // alert("posted to server successfully!");
                // console.log(newTweet);
                $tweet.val(null);
                loadTweets();
                $(".error").slideUp();
                $('.counter').text("140");
            }
        });
      }
>>>>>>> feature/mongodb
    });
});


//--------------------------------------------------------------------------------------
//FETCH TWEETS FROM SERVER AND RENDER TO DOM/PASS IT TO WEBPAGE (WITH AJAX)
//REFERENCE: tweetsRoutes.get(...) in tweets.js
//--------------------------------------------------------------------------------------
const loadTweets = function() {
    $.ajax({
        type:'GET',
        url: '/tweets',
        datatype: 'json', //what does this do? convert the file into json directly?
        success: renderTweets //this is a callback
        
    })
}

//--------------------------------------------------------------------------------------
//TOGGLE COMPOSE BUTTON
//--------------------------------------------------------------------------------------
$(".compose").click(function(event) {
    $(".new-tweet").slideToggle(200);
    $(".textarea").focus();
  });


//--------------------------------------------------------------------------------------
//ESCAPE FUNCTION
//--------------------------------------------------------------------------------------
function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}
<<<<<<< HEAD

=======
>>>>>>> feature/mongodb

//   var $tweet = createTweetElement(tweetData);
//   // Test / driver code (temporary)
//   console.log($tweet); // to see what it looks like
//   $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

    loadTweets();
});
