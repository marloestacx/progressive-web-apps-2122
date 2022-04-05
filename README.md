# Rijksmuseum
View art right from your phone

## Table of contents
* [Concept](https://github.com/marloestacx/pwa-rijksmuseum#concept)
* [Features](https://github.com/marloestacx/pwa-rijksmuseum#features)
* [Installation](https://github.com/marloestacx/pwa-rijksmuseum#installation)
* [Live Demo](https://github.com/marloestacx/pwa-rijksmuseum#live-demo)
* [Activity Diagram](https://github.com/marloestacx/pwa-rijksmuseum#activity-diagram)
* [Checklist](https://github.com/marloestacx/pwa-rijksmuseum#checklist)
* [Rubric](https://github.com/marloestacx/pwa-rijksmuseum#rubric)
* [Sources](https://github.com/marloestacx/pwa-rijksmuseum#sources)
* [License](https://github.com/marloestacx/pwa-rijksmuseum#license)

## Concept
This project is a single page web app where you can view art that is displayed in the Rijksmuseum. 

Entree

<img src="https://user-images.githubusercontent.com/24413936/161736897-1210c01a-77ab-4865-ab35-82dec4b125e4.png" width="30%"> 

Search

<img src="https://user-images.githubusercontent.com/24413936/161736921-43429379-6c7f-4ce4-8ef0-078bb82e2783.png" width="30%"> 

Detail

<img src="https://user-images.githubusercontent.com/24413936/161736974-ecf4e9c4-092d-4277-b247-b2501a5c63e6.png" width="30%"> 


## Features
In the web app you can view the art. At the top is a search bar which you can search art with, you can search the art by name or the person who made it. 

## Installation 
Clone this repository

`https://github.com/marloestacx/pwa-rijksmuseum.git`

Install the packaages
```
npm install
```

Start the app
```
npm start
```

 ## Live Demo
The website can be viewd live on [https://pwa-rijksmuseum.herokuapp.com](https://pwa-rijksmuseum.herokuapp.com)

## Activity Diagram

![ad2](https://user-images.githubusercontent.com/24413936/161734829-20f088bb-0342-4bfc-b5c3-fb29df16afbe.png)

## Client side vs Server side rendering


## Critical render path optimalisations
I've implemented some optimalisations to make the app even faster and better. 

- Minify HTML and CSS 
- Use compression 
- Don't use unnecessary code
- Use responsive images

I didn't use CSS font-display because I don't use an external font and don't use JavaScript on the client side since it's all server side now. 


## Checklist
- [x] Show art
- [x] Search art
- [x] Add search hash
- [x] Art detail page
- [ ] Sort alphabetical

## Sources
* [Rijksmsueum API](https://data.rijksmuseum.nl/object-metadata/api/)
* [ejs](https://www.npmjs.com/package/ejs)
* [compression](http://expressjs.com/en/resources/middleware/compression.html)

## License
Usage is provided under the [MIT License](https://github.com/marloestacx/rijksmuseum/blob/main/LICENSE). See LICENSE for the full details.

<!-- Add a link to your live demo in Github Pages 🌐-->

<!-- ☝️ replace this description with a description of your own work -->

<!-- replace the code in the /docs folder with your own, so you can showcase your work with GitHub Pages 🌍 -->

<!-- Add a nice poster image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- What external data source is featured in your project and what are its properties 🌠 -->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->
