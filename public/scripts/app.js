$(document).ready(function() {
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//--------------------------------------------------------------------------------------
//TIME STAMP FOR TWEET
//--------------------------------------------------------------------------------------
function timeDiff(time1, time2) {

  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;

  let diff = time1 - time2;

  if (diff < msPerMinute) {
    return Math.round(diff/1000) + ' seconds ago';
  } else if (diff < msPerHour) {
    return Math.round(diff/msPerMinute) + ' minutes ago';
  } else if (diff < msPerDay ) {
    return Math.round(diff/msPerHour ) + ' hours ago';
  } else if (diff < msPerMonth) {
    return Math.round(diff/msPerDay) + ' days ago';
  } else if (diff < msPerYear) {
    return Math.round(diff/msPerMonth) + ' months ago';
  } else {
    return Math.round(diff/msPerYear ) + ' years ago';
  }
}



//--------------------------------------------------------------------------------------
//CREATE NEW TWEET
//--------------------------------------------------------------------------------------
  function createTweetElement(data) {
    //define variable to new data
    const tweetDate = timeDiff(Date.now(),data.created_at);
    let name = data.user.name;
    let image = data.user.avatars.regular;
    let handle = data.user.handle;
    let tweet = data.content.text;
    let date = tweetDate;
    
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

    //it's better to use FORM and SUBMIT as action (try it this way as well)
    $button.on('click', function (event) {
        event.preventDefault();
        let newTweet = $tweet.serialize(); //get the value of text-area and seralize form data into query string before sending to server
        let tweetContent = $tweet.val();
        //error handling
        if (tweetContent.length === 0) {
            $(".error").slideDown(80).text("Error: There is no text, please write something. :)");
        } else if (tweetContent.length > 140) {
            $(".error").slideDown(80).text("Error: Your tweet is too long. Max length is 140 characters. :D");
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

    loadTweets();
});
