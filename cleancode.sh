#!/bin/bash

echo "---------- Running ESLint ----------"
npx eslint --fix .
echo -e "------------------------------------\n\n"

echo "--------- Running Prettier ---------"
npx prettier --write .
echo -e "------------------------------------\n\n"

echo "---------- Running Rubocop ---------"
rubocop -A
echo "------------------------------------"
