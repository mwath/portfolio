#!/usr/bin/sh
set -e

yarn build
cd dist

git init
git add -A
git commit -m "deploy"
git push -f git@github.com:mwath/portfolio.git main:gh-pages

cd -
