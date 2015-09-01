function load() {
var feed ="http://cultura.cordoba.es/es/agenda/hoy/feed.xml";
new GFdynamicFeedControl(feed, "feedControl");

}
google.load("feeds", "1");
google.setOnLoadCallback(load);