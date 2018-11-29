#!/bin/bash

if [ -n "$1" ]; then
    curl -o index.js $1
fi

node index.js