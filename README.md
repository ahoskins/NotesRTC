a-chrome-plugin-with-no-name
===================================

A way to save notes specific to a webpage.  It's an extension (for Chrome) which loads in notes saved specifically for that URI.

Thought:
==================

When I'm reading a web page - whether it be a blog, Stack Overflow answer, article, essay, etc - often I have ideas or notes that I wish I could write down. Because then when I go back to this webpage, I can leverage my previous understanding/insight into whatever I'm reading.  

Design:
===================

Developed as a [chrome extension](https://developer.chrome.com/extensions/getstarted).

Simple:
--------
Use the [Storage API's](https://developer.chrome.com/apps/app_storage) provided by Chrome.  Available offline, low development overhead, no server to deal with.

Less Simple:
------------
There might not be any benefits to this.  This approach involves a Node server with something like MongoDB. [User Authentication](https://developer.chrome.com/apps/app_identity) can be handler by Chrome using Google accounts, and then a [XHR](http://stackoverflow.com/questions/13222778/chrome-extension-data-connection-to-server) (with these credentials) can be sent to the Node server.    

Ideas for displaying the notes in the browser:
============================

This is the more interesting part. [genious it](http://genius.it/ejohn.org/files/jquery-original.html) is a new cool project that wraps an existing URI and annotates it.  It would be a cool technical problem to wrap the page like they do and allow a variety of styles of annotations.  

An alternative is to just the notes right in the dropdown-box-thing that pops out of the Omnibar when you click an extension.

Any other ideas?


