$(() => {

  const producePokemon = () => {
      //randomize for the amount of pokemon
    let number = Math.floor(Math.random() * 809 + 1)
      //make a ajax call based on that number
    $.ajax({
      //random number variable is used to make call
      url: "https://pokeapi.co/api/v2/pokemon/" + number,
      type: "GET",
    }).then((data) => {
        // console.log(data);
        //change src of sprite to the selected pokemon
        $('img').attr("src", data.sprites.front_default)
        //change the name of selected pokemon
        const pkmName = data.name
        // console.log(pkmName);
        $('#name').text(pkmName)
        //get the pokemon's type and attach as text to p tag
        const types = data.types
        //loop through its type array and append them
        for(type of types) {
          //the types are a nested object in an object
          const pkmnTypes = type.type.name
          //set text of each type as text of p tag
          const $newType = $('<p>').text(pkmnTypes)
          //append these to the type h3
          $('.typing').append($newType)
        }
        //do the samne for abilities
        const abilities = data.abilities
        //loop through the abilities array
        for(ability of abilities) {
          //get the name from double nested object
          const pkmnAbilities = ability.ability.name
          //create a new p tag with this text
          const $newAbility = $('<p>').text(pkmnAbilities)
          //append them to the ability h3
          $('.abilities').append($newAbility)
        }
        //end of then
      }).catch((error) => {
          console.log('Sorry, an error has occured!');
      })//end of err
  }
      //give the whos that pokemon button a listener to   produce the random pokemon
  $('#randomizer').on('click', producePokemon)

      //end of on doc load
})
