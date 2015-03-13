var Extract = require("./crawler/extract.js");

var config = {
	url: "http://s.taobao.com/search?q=%BC%FC%C5%CC&commend=all&ssid=s5-e&search_type=item&sourceId=tb.index&spm=1.7274553.1997520841.1&initiative_id=tbindexz_20150313"
};

var extract = new Extract();
extract.crawlData(config);