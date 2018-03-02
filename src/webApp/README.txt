Summer Job Exercise Reaktor 2018
Author: Helena Meissner

#### INTRO #### 
I am perfectly confident with doing back-end programming in Java and have a basic understanding of html/css and sql. Since the exercise is a simple, yet full-stack exercise, I took this opportunity to start learning the powerful front-end framework React, which was completely new to me before. 

#### FRONT-END #### 
The front-end displays a list of wheather measurements, which are currently saved in the front-end. It can receive new temperature measurements. It is yet to be implemented how the input is parsed (city + temperature) and whether the input is valid (one of the 5 valid cities or a valid temperature value (float with max 1 decimal number)).

#### BUSINESS LOGIC #### 
The business logic currently holds all weather measurements in an arraylist and is able to calculate the min and max temperature of an obersevation point. It is yet to be connected to the front-end reaching communicating the temperatures measurements back and forth. It will require retrieving all temperature measurement from an observation point with a stamp mark within the last 24hrs from the current point of time. 

#### BACKEND #### 
The backend use use a database like mysql or postgresql.

The data base should be similar to:

City (as a key)   Temperature measurement   Time stamp
New York          2.2°                      Nov 29, 2017 15:04
Amsterdam         -1.6°                     Nov 28, 2017 07:04
Dubai             25.7°                     Nov 28, 2017 19:35
Helsinki          -6.9°                     Nov 27, 2017 22:36

#### HOW TO RUN #### 
change directory to /webApp, make sure npm, react and necessary dependencies (check package.json file) are installed and type "npm start" into your console.
