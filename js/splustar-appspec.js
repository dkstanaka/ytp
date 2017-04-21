/*
 * AppSpec(Application Specific Class) Library
 * Splustar.com
 */
function AppSpec() {
	this.origin = "https://my.splustar.com";
	this.duration = 0;
	this.playlist = new Array("12_LpNeAxyw", "NYUwUUbfJOM", "_393OZGncrc");
	this.prevVideoId = "";
	this.prevVideoData = {};
	this.currVideoData = {};
	this.dupVideoMeta = {};
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

AppSpec.prototype.setPrevVideoData = function(vdt, callback) {
	this.prevVideoData["data"] = vdt;
	if (typeof callback === 'function')
		callback;
}

AppSpec.prototype.getPrevVideoData = function() {
	return this.prevVideoData;
}

AppSpec.prototype.setCurrVideoData = function(vdt) {
	this.currVideoData["data"] = vdt;
}

AppSpec.prototype.getCurrVideoData = function() {
	return this.currVideoData;
}

AppSpec.prototype.setDupVideoMeta = function(po) {
	if (typeof po == "object") {
		var dt = new Date();
		this.dupVideoMeta = {
			title: po.getVideoData().title,
			id: po.getVideoData().video_id,
			currentTime: po.getCurrentTime(),
			duration: po.getDuration(),
			volume: po.getVolume(),
			isMuted: po.isMuted(),
			quality: po.getPlaybackQuality(),
			date: Math.floor(dt.getTime()/1000)
		}
	}
}

AppSpec.prototype.getDupVideoMeta = function(po) {
	return this.dupVideoMeta;
}

AppSpec.prototype.setVideoDataHistory = function(obj) {
	//console.log("obj.prevVideo: %O", obj.prevVideo);
	//console.log("obj.currVideo: %O", obj.currVideo);
	if (obj.prevVideo.video_id !== obj.currVideo.video_id) {
		this.prevVideoData["data"] = obj.prevVideo;
		this.currVideoData["data"] = obj.currVideo;
	}
	
	if (this.currVideoData.hasOwnProperty('data')) {
		if (this.currVideoData.data.video_id === obj.currVideo.video_id) {
			if (JSON.stringify(this.currVideoData.data).length < JSON.stringify(obj.currVideo).length) {
				this.currVideoData["data"] = obj.currVideo;
			}
		}
	}
	/*
	else if (JSON.stringify(obj.prevVideo) !== JSON.stringify(obj.currVideo)) {
		this.prevVideoData["data"] = obj.prevVideo;
		this.currVideoData["data"] = obj.currVideo;
	}
	*/
}
