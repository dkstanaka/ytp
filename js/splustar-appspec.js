/*
 * AppSpec(Application Specific Class) Library
 * Splustar.com
 */
function AppSpec() {
	this.origin = "set_origin_of_your_app";
	this.duration = 0;
	this.playlist = new Array("12_LpNeAxyw", "NYUwUUbfJOM", "_393OZGncrc");
	this.prevVideoId = "";
};

AppSpec.prototype.getOrigin = function() {
	return this.origin;
}

AppSpec.prototype.getDuration = function() {
	return this.duration;
}

AppSpec.prototype.setDuration = function(duration) {
	this.duration = duration;
}

AppSpec.prototype.getPlayList = function() {
	return this.playlist;
}

AppSpec.prototype.getPrevVideoId = function() {
	return this.prevVideoId;
}

AppSpec.prototype.setPrevVideoId = function(vid) {
	this.prevVideoId = vid;
}
