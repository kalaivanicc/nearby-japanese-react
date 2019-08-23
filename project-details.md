SEI - Project 2 – Proposal

A description of the project you'll be building with the objective described in non-technical language.

A web app that displays nearby Japanese restaurants in ascending order based on distance from the user’s coordinates.

1.	Grab the users location using Geolocation.getCurrentPosition()
2.	Grab the restaurant data needed from Zomato API with user location input (Lat & Lon)
3.	Display Japanese cuisine restaurants within 1 mile in ascending order based on distance

An explanation of the major problems you plan to face while implementing this app.

It will likely be tough to incorporate the three steps above into a working react app.
Then I’ll need to style the app to look presentable.
Last, I’ll need to add some cool additional features.

An explanation of how you foresee yourself solving the aforementioned problems.

1.	I’ve researched the geolocation method and made it work in the browser, I’ll need to test and make it work in my web app. But it’s going to be run in a browser so I’m hopeful that it will work.



2.	Research how to use the Zomato API to pull the specific list of restaurants I need depending on the Lat & Lon I pass it.
a.	I can pull a list of all Japanese restaurants near my location (hard coded) OR in NYC. I can also sort them in ascending order based on distance.
b.	I’m having trouble applying a radius to the location (Lat & Lon) as the documentation says its measured in ‘M” but it doesn’t quite seem to be working.
c.	Lastly, it’s limiting my results to 20 restaurants and i’m not sure how to adjust this

A visual of your component hierarchy.

App =>
	Header

Main =>
	Restaurants Section =>
		Restaurant =>
			Info =>
(could be several components depending on the data I show)

Footer

A link to the API you plan to use.

https://developers.zomato.com/documentation#/

I’m able to pull the data using axios, see my react app.

A section clearly defining MVP and POST MVP.

MVP
1.	Grab the users location using Geolocation.getCurrentPosition()
2.	Grab the restaurant data needed from Zomato API with user location input (Lat & Lon)
3.	Display Japanese cuisine restaurants within 1 mile in ascending order based on distance

POST MVP
1.	Display the locations on a map
2.	Input from the user to choose the cuisine type and radius from coordinates


If you plan on incorporating a component library, include a link in your proposal.
