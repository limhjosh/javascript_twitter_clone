function renderTweet(tweet) {
  return "<li class='tweet'><img class='avatar' src='" + tweet.avatar_url + "' alt=''><div class='tweet-content'><p><span class='full-name'>" + tweet.username + "</span><span class='username'>" + tweet.handle + "</span><span class='timestamp'>- " + tweet.created_at + "</span></p><p>" + tweet.content + "</p></div></li>"
}

function fetchRecentTweets() {
  var recentTweets;
  $.get("/tweets/recent", function(data) {
  recentTweets = data;
  recentTweets.forEach(function(tweet){
    $("#tweets-container").find("ul").append(renderTweet(tweet));
    })
  })
}

$(document).ready(function() {
  fetchRecentTweets();
})


