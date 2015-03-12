# node-crawler

##1. nodejs + phantomjs 

###1.1 Basically the crawler allows user to crawl static pure text, links, images...

U can config like this

```javascript
var config = {
	type: 'static',
	element: 'jquery selector',
	attr: 'content|src|href...'
}
```

###1.2 The crawler allows user to set simple javascript code which can execute on the crawling page and get the content.

Supported events such as: 'click', 'input'...

U can config like this

```javascript
var config = {
	type: 'event',
	element: 'jquery selector',
	action: 'click',
	attr: 'content|src|href...'
}
```

##2. Actions to cheat the target server like change ips, limit the crawler speed...

The requirement is being explored.