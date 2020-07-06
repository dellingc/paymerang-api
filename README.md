# Paymerang API

This API is used in conjuction with the [Payerang App](https://github.com/dellingc/paymerang-app) to simulate retrieving data from a server. The API only accepts GET requests to send all of the payee data or to send data for an indidual payee.

## Instructions
Clone the repository, install node packages, and start the server
On your local machine:
```
  git clone https://github.com/dellingc/Paymerang-API.git
  cd payerang-api
  npm install
  node server.js
```

Verify that the server is running:

> A message will be printed to the terminal that the server is listening on port 8000
Open your local browser and try accessing:
    http://localhost:8000/
    http://localhost:8000/0 (the 0 is the index of the payee in the JSON, change this number to get the other payee's data)
    
Return to [Paymerang App](https://github.com/dellingc/paymerang-app) and follow README instructions to install and run the app.


## Troubleshooting
The server is configured to run on port 8000, this may need to be changed in your local environment. The server also only accepts requests from http://localhost:3000 which is the port that the Paymerang App is configured to run on. Again, this may need to be changed in your local environment.
