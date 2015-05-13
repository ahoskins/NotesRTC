#!/usr/bin/env bash
browserify -o build/background-bundle.js src/background/background.js
browserify -t reactify -o build/client-bundle.js src/client/client.jsx