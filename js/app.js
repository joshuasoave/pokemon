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
        //remove the previous abilities and types
        $('#type-h3').siblings().remove()
        $('#ability-h3').siblings().remove()
        // console.log(data);
        $('.submit-form').show()
        //change src of sprite to the selected pokemon
        $('img').attr("src", data.sprites.front_default)
        //change the name of selected pokemon
        let pkmName = data.name
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
          //
        }
        //check if users input matches the pokemon name
        const checkMatch = (event) => {
            //hide the correct and wrong answer messages
            const $correctAnswer = $('.correct-answer')
            const $wrongAnswer = $('.wrong-answer')

            //set their displays to none
            $correctAnswer.css('display', 'none')
            $wrongAnswer.css('display', 'none')

            event.preventDefault()
            //store the input as a variable
            const $userGuess = $('input').val()
            // console.log($userGuess);
            // console.log(pkmName);;
            //lowercase the guess since data is
            $userGuess.toLowerCase()
            //check to see if the guesses match
            if($userGuess === pkmName) {
              //change the text of results name to current pokemon's name
              $('.name').text(`${pkmName}!`);
              //hide the submit answer area
              $('.submit-form').hide()
              // console.log('correct!');
              //show the win results
              $correctAnswer.show()
            } else {
              //change the text of results name to current pokemon's name
              $('.name').text(`${pkmName}.`);
              //hide the submit answer area
              $('.submit-form').hide()
              //toggle the lose message
              $wrongAnswer.show()
            }
          }
        //give the submit area a listener that checks for match
        $('form').on('submit', checkMatch)
        //end of then
      }).catch((error) => {
          console.log('Sorry, an error has occured!');
      })//end of err
  }

  //show hint modal function
  const showHint = () => {
    //grab hint modal
    const $hintModal = $('.hint-modal')
    //togge the display of hint modal
    $hintModal.toggle()
    //hide the name
    $('.pkmn-name').css('display', 'none')
  }

  const closeHint = () => {
    //grab the close btn
    const $hintModal = $('.hint-modal')
    //close the hint modal
    $hintModal.hide()

  }


      //give the whos that pokemon button a listener to   produce the random pokemon
  $('#randomizer').on('click', producePokemon)
  //give the hint button a toggle for modal
  $('#hint').on('click', showHint)
  //give the close button a way to hide the modal
  $('#close-btn').on('click', closeHint)



      //end of on doc load
})
