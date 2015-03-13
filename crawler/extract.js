var exec = require("child_process").exec;

var Extract = function(phantom, config) {
	if(!config) throw new Error("the crawler can't be empty");
	this.config = config;
	
};

Extract.prototype.crawlData = function() {
	
};

module.exports = Extract;