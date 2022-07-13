#!/bin/bash

echo "---------- Running ESLint ----------"
npx eslint --fix frontend/.
echo "------------------------------------
"

echo "--------- Running Prettier ---------"
npx prettier --write frontend/.
echo "------------------------------------
"

echo "---------- Running Rubocop ---------"
rubocop -A 
echo "------------------------------------"
