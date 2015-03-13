var exec = require("child_process").exec;
var phantom = require("phantom");
var winston = require("winston"); 

var transports = [];
transports.push(new winston.transports.DailyRotateFile({
  name: 'file',
  datePattern: '.yyyy-MM-ddTHH',
  filename: path.join(__dirname, "logs", "log_file.log")
}));
var logger = new winston.Logger({transports: transports});

var Extract = function(config) {
	if(!config) throw new Error("the crawler can't be empty");
	this.config = config;
	
};

Extract.prototype.crawlData = function() {
	var me = this;
	phantom.create(function(ph) {
		ph.createPage(function(page) {
			page.open(me.config.url, function(status) {
				logger.info("page open: " + status);
			});
		});

	});
};

//post hander of the crawling data
Extract.prototype.formatData = function(data) {

}

Extract.prototype.changeUA = function() {
	// changing the user agent and crawling again
}


module.exports = Extract;