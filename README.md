## Who's That Pokemon?
by: Joshua Soave

![https://i.imgur.com/CGWxRju.png](pokemon lugia and the input bar to guess it's name)

## Intro
Pokemon is a video game created by Game Freak, Nintendo, and The Pokemon Company.

This app was created to help Pokemon players learn and remember
Pokemon names since there are now almost 900 Pokemon in the games!

**Note: This game is for entertainment and educational purposes only. Using this game for profit is a violation of copyright law.** 

### 1. File List
- index.html
- main.css
- app.js

Make sure the jquery link in the index.html file is working correctly if you plan to edit the app.js file

### 2. Tools Used
- PokeAPI
- https://pokeapi.co/

This is a great free API for information on Pokemon. The call limit is 300 calls per day for each individual pokemon. ex. You can call Bulbasaur 300 times and it wont impact the amount of calls you can make on Pikachu's data

### 3. Game Logic
The quiz game works by using Math.random to generate a random pokemon number and getting that sprite image from the pokeAPI. It then checks to see if the user's input is the correct pokemon name or not.

Note: must use toLowerCase method to make sure it accepted things that were capitalized becuase the names in the api are all lowecase.

### 4. Challenges
The app was designed mobile first, but still has some issues on larger mobile devices such as iphone x. Responsive design is an area that could be improved

### 5. Future Plans
The math.random function will need to be updated with a new number as new pokemon are added to the games and subsequently to the API.

If I had more time would have loved to add a search function. The logic is there in the api to store a user's input as a variable and call the api with that input.
