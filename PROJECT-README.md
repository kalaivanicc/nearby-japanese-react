# SEI - Project 2 – Proposal

## Description

A web app that displays nearby Japanese restaurants based on a radius input and the distance from the user’s current coordinates.

- [Github repo](https://github.com/jadizzedin/sei-project2)
- [Deployment]()

## Wireframes & Components:
![Wireframe](https://res.cloudinary.com/jadscloudinary/image/upload/v1566577886/sei-project2-wireframe_mxbo2f.jpg)

## API

https://api.yelp.com/v3/businesses/search

Sample API Data:
![Sample API Data](https://res.cloudinary.com/jadscloudinary/image/upload/v1566578218/sei-project2-apisnippet_jdhbyv.png)

## MVP / PostMVP

##### MVP
1.	Grab the users location using Geolocation.getCurrentPosition() and collect radius input from user (doing pre-set radius options specific for NYC use)
2. Search Yelp API for 6 restaurants that match the criteria. Default will be sorted by distance (low to high), but will have the option to look by rating or number of reviews
3.	Display an image, restaurant name, rating, number of reviews and directions to the restaurant

##### PostMVP
1. Show directions from current location to each result destination
2. Add functionality that allows each result to show more information on click + animation
2. Display the locations on a map


## React Component Hierarchy

##### Drawn in wireframes image.

App => {Header, Main => {Inputs, Sort, Results => {Result}}, Footer}

## Components

| Component | Description |
| --- | :---: |  
| App | Includes initial data pull and include React Router|
| Header | Includes a logo/icon, title(h1), and mini blurb |
| Main | Includes inputs, sort, and results |
| Inputs | Coordinates and radius |
| Sort | 3 ways to sort the data: distance, rating, number of reviews |
| Results | All of the results that render |
| Result | One result and its info |
| Footer | Includes credits and other secondary links |
| Post MVP | Potential: map view and category input components |


## Time Frames (time in hrs)

| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| Base Layout and Component Structure | H | 2|  |  |
| Working with API | H | 4  |
| Main: Input & Sort Functionality | H | 6  |
| Main: Results & Result Functionality | H | 8 |
| Styling | M | 6  |
| Route Functionality | H | 4 |
| Total |  |  30 | |
| Post MVP | L | 8+  |


## Additional Libraries (LATER)
 Axios

## Code Snippet (LATER)

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code.

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Issues and Resolutions (LATER)
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
