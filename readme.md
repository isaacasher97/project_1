# **Rider Finder - Project 1**
By Isaac Asher

</br>

### **Project Description**

---

Ride Worldwide is made for Bike-Riders All over the world. It allows users to input their location & find the nearest public city bikes that they can use. Through the use of a form, Users can select between 2 choices of Country or City/State. Enter the name in a text box below that selection, and then search for the nearest public city bikes available for use by pulling the API Data from the Public CityBikes API Documentation and rendering it to the screen once the form is submitted.

</br>

### **Technologies Used**

---

- HTML
- CSS
- JavaScript
- jQuery
- ajax
- CityBikes API

</br>

### **API Description**

---
- Sports & Fitness API that provides a network of public city bikes around the globe with individual descriptions for each object inclduing: (name, id, loocation, company, etc..)

- CityBikes API Documentation: https://api.citybik.es/v2/

</br>

## **Testing the API Using ajax in Javascript**

---

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

</br>

### **Wireframe Mockup**

---

##### *Link To view:* https://wireframepro.mockflow.com/view/MkncvE3wlpb

</br>

![Mockup Image](./img/wireframemockup.png)

</br>

### **Details about Difficulties**

---
- Search is cap-sensitive to the exact name of the city or country when a user inputs it's name and will not render the information onto the screen unless name is an exact match 

**I Figured out how to make the search case insensitive and not worry about exact capitalization when the user searches ***by adding .toLowerCase() to the end of line 5 in the app.js file*****

</br>

- One of the biggest problems I had to solve was figuring out how to create a link within a button that opened up a google maps search with the SPECIFIC latitude + longitude values that were pulled from the City Bikes api data and rendered onto the screen, followed by using that longitude + latitude as parameters for its google maps search. 

</br>

- My primary issue was not wanting to go through the process of using a google api key. After hours of thorough research through google maps documentation, stack overflow, reddit, and google search, I was able to locate the exact answer that I needed [HERE!](https://developers.google.com/maps/documentation/urls/get-started)

</br>

- In the Maps URL's Documentation linked above, there is a section that mentions Launching Google Maps and performing a specific action (Like a search)using a url scheme. This did not require an api key.  

- Using the given url scheme ``` https://www.google.com/maps/search/?api=1&parameters ```
I added in the proper parameters in the app.js file line number 40

</br>

### **Daily Schedule**

---

| Day | Task |   
|-----|------|
| 1 | Setup Basic Project + Pick API & Test it | 
| 2 | Set up HTML and minimal css |
| 3 | Make API Calls |   
| 4 | Render Data to the page |     
| 5 | Final styling Touch ups | 

</br>

### **Where To Find It**

---

You Can Find The City Bike Search Engine [Here!](https://project-1-inky-gamma.vercel.app/)


