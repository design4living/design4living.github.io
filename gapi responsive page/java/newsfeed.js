function load() {
var feed ="https://twitter.com/statuses/user_timeline/61775133.rss";
new GFdynamicFeedControl(feed, "feedControl");

}
google.load("feeds", "1");
google.setOnLoadCallback(load);