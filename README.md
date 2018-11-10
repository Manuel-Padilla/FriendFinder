# FriendFinder
A full-stack site that takes in results from users' surveys, then compares their answers with those from other users.

## Description
*FriendFinder* implements friend matching based on the user's responses to a ten question survey. The user responds to questions with values from 1 (Strongly Disagree) to 5 (Strongly Agree). When the survey is submitted, an existing user record closest to the current user's responses is found and returned. The closest set of user responses is defined as the set with the lowest absolute difference for all ten questions combined.

### Run Locally
To run the application locally and access it in your browser, first set the ```PORT``` environment variable to the value of your choice. An example is shown below.
```
export PORT=3030
```
After the ```PORT``` environment variable has been set, run the Node.js application with the command below.
```
node server.js
```
The application will now be running locally on ```PORT```, in this case that is port 3030. You can then access it locally from your browser at the URL ```localhost:PORT```, in this case ```localhost:3030```.

### Installation
To install the application follow the instructions below:
```
* git clone git@github.com:Manuel-Padilla/FriendFinder.git
* cd FriendFinder
* npm install
```
### FriendFinder Demo
*FriendFinder* is deployed to Heroku. Please check it out [here](#). 
