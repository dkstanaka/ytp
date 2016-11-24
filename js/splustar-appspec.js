/*
 * AppSpec(Application Specific Class) Library
 * Splustar.com
 */
function AppSpec() {
	this.origin = "origin_for_your_client";
};

AppSpec.prototype.getOrigin = function() {
	return this.origin;
}
