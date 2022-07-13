#!/bin/bash

echo "---------- Running ESLint ----------"
npx eslint --fix .
echo "------------------------------------
"

echo "--------- Running Prettier ---------"
npx prettier --write .
echo "------------------------------------
"

echo "---------- Running Rubocop ---------"
rubocop -A
echo "------------------------------------"
