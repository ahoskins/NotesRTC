A Chrome Extension for taking notes tied to web pages built with React
===================================

A way to save notes specific to a webpage.  It's an extension (for Chrome) which loads in notes saved specifically for that URL.

Thought:
==================

When reading a web page - whether it be a blog, Stack Overflow answer, article, essay, etc - its natural to have ideas, notes, general thoughts about what it is you just read. If you choose to write these down you might reference the web page URL in yours notes.  Or maybe you won't reference the URL.  When you look back at the notes, you might be like "hmm, ya, I remember that, and I know I read that somewhere in detail, but I forget where...".  This same concept can be applied to taking notes from a textbook - its usually useful to write what section of the book the notes are from, so you can go back to the primary source and get some more context.  

Another thought, kind of extension of this idea.  If I'm linking a page to someone, it would be useful to be able to annotate it, then send the person the annotated version. The annoations would be right on the webpage: could be on text, or an invisible div outlining a diagram or something.  The goal is to help reduce the post-link-send conversation that often goes like this: "Wait, where does it say that?"..."Button of the page, second last paragraph"..."Oh I see. Hmm. Why do you think that's important though"...etc, etc.

Design:
===================

Developed as a [chrome extension](https://developer.chrome.com/extensions/getstarted).

Storage Design:
--------
Use the [Storage API's](https://developer.chrome.com/apps/app_storage) provided by Chrome.  Available offline, low development overhead, no server to deal with.  Syncs across the user acount, which is actually pretty sick. So even if I'm at my work computer, if I'm logged into my same google account the contents of this storage will be the same.


UI Experiance:
============================

This is the interesting part. [genious it](http://genius.it/ejohn.org/files/jquery-original.html) is a new cool project that wraps an existing URI and annotates it.  It's an interesting technical problem to wrap the page like they do and allow a variety of styles of annotations.  But it seems that they have to host all the annoted pages, which seems horribly unscalable.  I wonder if there is a way to get around this using modern tools like webRTC.  

But for now, the UI for this project will be a pop-up window.  This is not necessarily worse than the 'genious it' concept.  It's different and I don't really think it's the 'same thing'. 

How to run it locally:
============================
1. clone it
2. build it (and subsequently watch it) with $ npm run watch
3. go into chrome extensions tab and click 'load unpacked extension'
4. choose the root directory of the cloned repo and click ok 
5. default to open the extension is cmd+shift+comma (you can set the hotkey on the bottom of the extension page)


