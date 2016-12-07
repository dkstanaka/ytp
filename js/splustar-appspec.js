/*
 * AppSpec(Application Specific Class) Library
 * Splustar.com
 */
function AppSpec() {
	this.origin = "http://my.splustar.com";
	this.duration = 0;
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
