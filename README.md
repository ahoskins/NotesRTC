a-chrome-plugin-with-no-name
===================================

A way to save notes specific to a webpage.  It's an extension (for Chrome) which loads in notes saved specifically for that URI.

Thought:
==================

When I'm reading a web page - whether it be a blog, Stack Overflow answer, article, essay, etc - often I have ideas or notes that I wish I could write down. Because then when I go back to this webpage, I can leverage my previous understanding/insight into whatever I'm reading.  

Design:
===================

Developed as a [chrome plugin](https://developer.chrome.com/extensions/getstarted).  It could work similarly to [poof](https://github.com/ahoskins/poof) which was designed by reading the source of [boom](https://github.com/holman/boom), a Ruby command line tool (hilarous similarly these are named).  Both of these work by storing a JSON file in the home directory of the filesystem - which is super easy to deal with, fast, lightweight.  It would store something like:

        notes = [{
            uri: "http://github.com/holman/boom",
            notes: "a simple string or serialized markdown"
          },
          {
            uri: "http://stackoverflow.com/259394",
            notes: "omg the third answer is so good wowowow"
          }
        ]
        
It would be a really small javascript to load this in and display it.

Ideas for displaying the notes in the browser:
============================

This is the more interesting part. [genious it](http://genius.it/ejohn.org/files/jquery-original.html) is a new cool project that wraps an existing URI and annotates it.  It would be a cool technical problem to wrap the page like they do and allow a variety of styles of annotations.  

An alternative is to just the notes right in the dropdown-box-thing that pops out of the Omnibar when you click an extension.

Any other ideas?


