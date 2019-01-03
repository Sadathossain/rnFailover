# Purpose

This repository demonstrates a simple mechanism for client-side fail-over technique.

## Idea

1. We will start two back-end server built as a standalone app by expressjs
2. Then we will try to hit our servers from our react-native frontend app

## Outcome

By default, our app will fail on first server due to timeout and will fetch data from our second server. Hence, Fail-over is complete.

*Second fetch does not have timeout and fail-over.*

## Requirement

* node LTS
* yarn
* react-native cli
* dev environment for android or ios specific

## Setup

```sh
$ git clone https://github.com/Sadathossain/rnFailover.git
$ cd rnFailover/backend
$ yarn install
$ yarn run server2
# open another terminal with same directory
$ cd ../frontend
$ yarn install
$ react-native run-android
```

## Other command available

### backend

```sh
$ yarn start #bring up both server
$ yarn run server1 #bring up server1
```
