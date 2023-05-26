# Project 1
By Isaac Asher

### Project Description

Ride Worldwide is made for Bike-Riders All over the world. It allows users to input their location & find the nearest public city bikes that they can use. Through the use of a form, Users can select between 3 choices of Country, City, or State. Enter the name in a text box below, and then search for the nearest available public city bikes available for use by pulling the API Data from the Public CityBikes API Documentation and rendering it to the screen once the form is submitted.

### API Description

- CityBikes API Documentation

```js

$.ajax("http://api.citybik.es/v2/networks")
.then((data) => {
    console.log(data)
    console.log(data.networks)
    console.log(data.networks[106])
    console.log(data.networks[106].name)
    console.log(data.networks[106].location.city)

})

```

### Mockup (Wireframe img)

![Mockup Image](https://i.imgur.com/Rf48txF.jpg)

### Details about Difficulties

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

### Daily Schedule

| Day | Task |   
|-----|------|
| 1 | Setup Basic Project + Pick API & Test it | 
| 2 | Set up HTML and minimal css |
| 3 | Make API Calls |   
| 4 | Render Data to the page |     
| 5 | Final styling Touch ups | 



