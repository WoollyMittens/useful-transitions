# useful.transitions.js: CSS3 Transitions Library

A library of useful functions to ease working with CSS3 transitions.

Try the <a href="http://www.woollymittens.nl/useful/default.php?url=useful-transitions">tests</a>.

## How to include the script

This include can be added to the header or placed inline before the script is invoked.

```html
<script src="./js/useful-viewer.js"></script>
```

To enable the use of HTML5 tags in Internet Explorer 8 and lower, include *html5.js*.

```html
<!--[if lte IE 9]>
	<script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
```

## How to control the script

### select

```javascript
elements = useful.transitions.select(rule, parent);
```

```javascript
elements = useful.transitions.select({
	rule : '#id.classname',
	parent : document
});
```
Select DOM elements based on a CSS rule.

**rule : {string}** - A CSS rule that applies to the required elements.

**parent : {DOM object}** - The parent node from which to select the elements. Default is *document*.

```javascript
useful.transitions.select({
	rule : '.example',
	parent : document,
	data : {'foo':'bar'},
	handler : useful.example.init
});
```

Apply scripts to DOM elements based on a CSS rule.

**data : {object}** - An object of name-value pairs that will be passed to the handler together with the selected elements.

**handler : {function}** - A function to send each of the selected elements to in turn as a separate instance. *e.g. myfunction(element, data);*

By sending each element separately to the handler, more than one instance of the script can run on the same page without interfering with each other.

### byClass

```javascript
useful.transitions.byClass({
	element,
	replaceThis,
	withThis,
	onComplete,
	duration
});
```

(re)places a string in the class name to trigger either a CSS transition or a jQuery animation if available.

**element : {DOM object}** - The DOM element to affect.

**replaceThis : {string}** - The string to replace in the class name.

**withThis : {string}** - The replacement string for the class name.

**onComplete : {function}** - Function to run after the transition or animation completes. If no animation is possible, the function completes immediately.

**duration : {integer}** - The duration for the animation, in case this number cannot be recovered from the stylesheet.

### byRules

```javascript
useful.transitions.byRules({
	element,
	css,
	onComplete = function () {}
});
```

Applies inline properties to a DOM element to trigger either a CSS transition or a jQuery animation if available.

**element : {DOM object}** - The DOM element to affect.

**onComplete : {function}** - Function to run after the transition or animation completes. If no animation is possible, the function completes immediately.

**css : {object}** - An object full of CSS properties and values.

### Format of the css object

```Javascript
css = {
	'transitionProperty' : 'left,top',
	'transitionDuration' : '2s,2s',
	'transitionTimingFunction' : 'ease,ease',
	'left' : '100px',
	'top' : '100px'
}
```

### setNameValue

```javascript
useful.transitions.setNameValue(element, name, value);
```

(re)places a string in the class name that represents a name-value pair. *e.g. name_value*

**element : {DOM object}** - The DOM element to affect.

**name : {string}** - The name part of the class name to add.

**value : {string}** - The value part of the class name to add.

### getNameValue

```javascript
value = useful.transitions.getNameValue(element, name, fallback);
```

Returns a name-value pair that was stored in a class name. *e.g. name_value*

**element : {DOM object}** - The DOM element to affect.

**name : {string}** - The name part of the class name to add.

**fallback : {string}** - The value part that gets returned if the name wasn't found in the element.

## How to build the script

This project uses node.js from http://nodejs.org/

This project uses gulp.js from http://gulpjs.com/

The following commands are available for development:
+ `npm install` - Installs the prerequisites.
+ `gulp import` - Re-imports libraries from supporting projects to `./src/libs/` if available under the same folder tree.
+ `gulp dev` - Builds the project for development purposes.
+ `gulp prod` - Builds the project for deployment purposes.
+ `gulp watch` - Continuously recompiles updated files during development sessions.
+ `gulp serve` - Serves the project on a temporary web server at http://localhost:8000/ .

## How to test the script

These test uses Selenium from http://docs.seleniumhq.org/

+ `npm install webdriverjs` - Installs the webdriver prerequisite.
+ `npm install mocha -g` - Installs the prerequisite test framework.
+ `java -jar /Applications/Selenium/selenium-server-standalone-2.42.2.jar` - Starts Selenium.
+ `mocha` - Runs the automated tests.

## License

This work is licensed under a Creative Commons Attribution 3.0 Unported License. The latest version of this and other scripts by the same author can be found at http://www.woollymittens.nl/
