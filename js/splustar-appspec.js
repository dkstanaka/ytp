/*
 * AppSpec(Application Specific Class) Library
 * Splustar.com
 */
function AppSpec() {
	this.origin = "set_origin_of_your_app";
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
