#! /usr/bin/bash

npm init -y && npm install express

mkdir .circleci
touch .gitignore .editorconfig .babelrc .prettierrc .circleci/config.yml


if [ ! -f config.js ]
	then
		touch config.js
fi

curl https://bitbucket.org/matthewjaestokeley/js-express-boilerplate/raw/010ff6d28072af683cc4925efb434c6e603195cc/src/config.js >> config.js

if [ ! -f server.js ]
	then
		touch server.js
fi

curl https://bitbucket.org/matthewjaestokeley/js-express-boilerplate/raw/010ff6d28072af683cc4925efb434c6e603195cc/src/server.js >> server.js