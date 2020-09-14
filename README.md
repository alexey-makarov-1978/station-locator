# Station Locator

The application used to locate the most suitable station link for predefined list of stations and points.
Implemented using React/Javascript on NodeJs. Production URL: http://13.53.176.152/

# Features

- Locates the most suitable station link for predefined list of stations and points (x, y) by calculating the power towards the station.
- Station’s power calculation: power = (reach - device distance from station) ^ 2. if distance > reach, power = 0
- Front-end implemented using React on NodeJs. create-react-app is used as boilerplate. Artifacts are minified for production use. Packed as docker image and deployed as container to AWS EC2 Linux AMI 2 server
- Jest used to unit and integration testing, for UI testing (/test folder)

# Requirements

- NPM v6.x.x
- VS code
- Docker (if running it as docker container)

# How To Run

- Clone the repo `git clone https://github.com/alexey-makarov-1978/station-locator` or download zip file
- Navigate project root directory
- Run `npm install` to install dependencies
- To start the application run `npm start`
- To execute tests separately (watch mode) run `npm test`

##### Alternatively (to run as docker container - DOCKER has to be on the machine)

- Clone the repo `git clone https://github.com/alexey-makarov-1978/station-locator` or download zip file
- Navigate project root directory
- Build docker image by running `docker build -f Dockerfile.prod -t tt:prod .`
- Run docker container by executing `docker run -it --rm -p 80:80 tt:prod`
- Navigate localhost to see the result

# Deployed Version

The application is deployed to AWS EC2 Linux AMI 2 server as docker container and available from URL: http://13.53.176.152/
