# Project

This project runs a react application that will communicate with a microservice rest api using Docker, nginx, and Flask. Nginx will act as a reverse proxy for the flask services. Authentication will be handled with JWT tokens so the authenication service will only need to be accessed to get a fresh token. Download the project and get it up and running using the instructions below.

## Requirements

This project has been developed using:
 - Docker `version 17.06.0-ce, build 02c1d87`
 - Docker-compose `version 1.14.0, build c7bdf9e`

## Installation

1. Open up your terminal under the directory you want to put this project in and clone this repo

    `git clone https://github.com/RoryShively/maidbot-application-react-microservices.git`

2. cd into the project

    `cd maidbot-application-react-microservices`

3. Build the containers with docker-compose and run them

    `docker-compose up --build`'

6. Open up your browser and go to the website at `localhost:9000/#/login/`


#### From here you should:
 - Log in using one of the two preset users
  - user: `kobebacon` password: `password`
  - user: `testuser` password: `secret`
 - Once logged in you will be able to post messages to the message service much like a chatroom

## Future Improvements

Due to the fact this has started out as an interview project I want to push this out in a timely manner but I also want to
use this project to explore developing a microservice architecture in greater detail.

##### Application
  - Route user to login page if not signed in
  - Create websocket connection for messages so data can be pushed from server
  - Use scss instead of inline css (node-sass needs to be rebuilt from Dockerfile)

##### Reverse proxy
  - Change path when passing request through proxy. example: microservice receives `/` for `api/auth`  or `/:id` for `api/messages/:id`

##### Authentication Service
  - Find out how to blacklist users and tokens

##### Message Service
  - Create JWT auth decorator for rest endpoints

##### Other
  - Host project on aws with production settings
  - SSL
  - Find something more interesting for app to do, upload and store video maybe
