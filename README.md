chrome-notes :book:
===================================

The first part in the [two part](https://github.com/ahoskins/chrome-annotate) WebRTC annotation experiment.

chrome-notes is a way to tie notes/thoughts/ideas to a specific URL.  It's not annotations, it's notes complete with a medium-style editor (bold, italic, underline) -- real in-page annotations are part two.

It's still in development, but a demo is available by following the instructions below.

How to run it locally:
============================
1. clone it
2. install dependencies with $ npm install
2. build it (and subsequently watch it) with $ npm run watch
3. go into chrome extensions tab and click 'load unpacked extension'
4. choose the root directory of the cloned repo and click ok 
5. default to open the extension is cmd+shift+comma (you can set the hotkey on the bottom of the extension page)

Premise:
==================

When reading a web page - whether it be a blog, Stack Overflow answer, article, essay, etc - its natural to have ideas, notes, general thoughts about what it is you just read. If you choose to write these down you might reference the web page URL in yours notes.  Or maybe you won't reference the URL.  When you look back at the notes, you might be like "hmm, ya, I remember that, and I know I read that somewhere in detail, but I forget where...".  This same concept can be applied to taking notes from a textbook - its usually useful to write what section of the book the notes are from, so you can go back to the primary source and get some more context.  

Design:
===================

Developed as a chrome extension using WebRTC and chrome.storage.sych.  It's meant to be as low-touch as possible, and these technologies fit this mantra.  chrome.storage.sync automatically syncs across the logged in Google account -- it's like a dedicated partition of localstorage tied to an account instead of a single browser.  The view/data layer is React, with the lightweight skeleton.css for styling.

With Inspiration from:
=========================
[genious it](http://genius.it/ejohn.org/files/jquery-original.html)
