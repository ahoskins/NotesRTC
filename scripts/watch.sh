#!/usr/bin/env bash
watchify -v -o build/background-bundle.js src/background/background.js &
watchify -v -t reactify -o build/client-bundle.js src/client/controller.jsx &