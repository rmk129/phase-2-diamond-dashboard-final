Welcome to my phase-2 Final Project. The Diamond Dashboard.

This project was created using react and react router dom.
The styling for this project was done using MUI (Material UI)

Please make sure all these packages are downloaded. 

To start the file, first fire up the DB.json server to ensure the Fetch requests are 
using the right port. It should be localhost:3000
To do this, run the command json.server --watch db.json.
make sure json server is installed globally.

Then run npm start to start the file in your browser. 

The Diamond Dashboard

This app incorporates useState, useEffect to fetch and add data, useHistory for redirecting, Routes and Navlinks via react router dom, as well as a host of other features. 

The point of this app is to replicate some of the behavior and features that are prevalent in real diamond inventory
management softwares used today. Only a handful of these features were replicated for this project. 
The prominent ones are the live feed of diamonds on hand, located on the Stock page, as well as the ability to filter them in multiple ways.

The second prominent one is to add new diamonds that are purchased. This can be seen in the add stock page where a form, once populated and submitted, will POST the data via fetch to the db.json server and reflect in your diamond dashboard page. 

Using react router dom, I am able to navigate to all the pages smoothly as well as getting the URL to update accordingly. 
