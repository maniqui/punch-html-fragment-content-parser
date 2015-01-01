# Punch SVG Fragment Content Parser

A custom [Punch](http://laktek.github.com/punch) content parser to passthrough SVG fragments for page content.

## How to Use 

* Install the package:

	`npm install punch-svg-fragment-content-parser`

* Open your Punch project's configurations (`config.json`) and add the following:

		"plugins": {
        	"parsers": {
            	".svg": "punch-svg-fragment-content-parser"
        	}
        }


* Much like you would create [extended content](https://github.com/laktek/punch/wiki/Contents#extended-contents)
fragments in markdown, create them in SVG with the extension .svg. The contents of the .svg file will be included
unparsed.
