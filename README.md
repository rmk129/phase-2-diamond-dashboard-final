#Welcome to my phase-2 Final Project. The Diamond Dashboard.

This project was created using react and react router dom.
The styling for this project was done using MUI (Material UI) and React Bootstrap

Please make sure all these packages are downloaded. 

To start the file, first fire up the DB.json server to ensure the Fetch requests are 
using the right port. It should be localhost:3000
To do this, run the command "json.server --watch db.json."
make sure json server is installed globally.

Then run npm start to start the file in your browser. 

The Diamond Dashboard

This app incorporates useState, useEffect to fetch and add data, useHistory for redirecting, Routes and Navlinks via react router dom, as well as a host of other features. 

The point of this app is to replicate some of the behavior and features that are prevalent in real diamond inventory
management softwares used today. Only a handful of these features were replicated for this project. 

The prominent ones are as follows: 

-The live feed of diamonds on hand, located on the Diamond Dashboard page/link, as well as the ability to filter them in multiple ways. Another interesting feature is the ability to add diamonds to the sales cart. Once the Sell button on each row of diamonds is clicked, it will automatically remove the row and move it to the Sell Diamonds page. You will receive an alert stating that it has been added to your sales car.

The second prominent one is the Sales portal, located at the Sell Diamonds link/page. This page is similar to the Diamond Dashboard where it shows which diamonds were selected for Sales. Similar to the sell button on the Diamond Dashboard, there is a Cancel button, which works similarly to remove the diamond from this page and move it back to the Diamond Dashboard.


The third prominent one is the ability to add new diamonds that are purchased. This can be seen in the add stock page where a form, once populated and submitted, will POST the data via fetch to the db.json server and reflect in your diamond dashboard page. You will also receive an alert that it has been added and you will be redirected to the diamond dashboard page to view your updated stock list. 

Using react router dom, I am able to navigate to all the pages smoothly as well as getting the URL to update accordingly. 
