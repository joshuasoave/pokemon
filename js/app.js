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
        //reset the form
        $('form').trigger('reset')
        //hide the previous message
        $('#correct-answer').hide()
        $('#wrong-answer').hide()
        //remove the previous abilities and types
        $('#type-h3').siblings().remove()
        $('#ability-h3').siblings().remove()
        // console.log(data);
        $('.submit-form').show()
        $('.hint-div').show()
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
            const $correctAnswer = $('#correct-answer')
            const $wrongAnswer = $('#wrong-answer')

            //set their displays to none
            $correctAnswer.css('display', 'none')
            $wrongAnswer.css('display', 'none')

            //store the input as a variable
            const $userGuess = $('input').val()

            event.preventDefault()
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
            }  //reset the form
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
    //grab the hint modal
    const $hintModal = $('.hint-modal')
    //close the hint modal
    $hintModal.hide()

  }

  const rocketStyle = () => {
    //change the h1 text
    $('h1').text('Team Rocket Takeover')
    //remove the normal class from header and nav
    $('header').removeClass('normal-header')
    $('nav').removeClass('normal-nav')
    //add the rocket class
    $('header').addClass('rocket-header')
    $('nav').addClass('rocket-nav')
    //change container class to rocket
    $('body').removeClass('normal-body')
    $('body').addClass('rocket-body')
    //change modal class to rocket
    $('#modal-text').removeClass('modal-textbox')
    $('#modal-text').addClass('rocket-modal')
    //change about modal class to rocket
    $('#about-text').removeClass('modal-textbox')
    $('#about-text').addClass('rocket-modal')
    //change the about modal close class to rocket
    $('#close-abt').removeClass('close-btn')
    $('#close-abt').addClass('rocket-btn')
    //change the modal close class
    $('#close-btn').removeClass('close-btn')
    $('#close-btn').addClass('rocket-btn')
    //change the hint to rocket class
    $('#hint').addClass('rocket-hint')
    //change the submit button to rocket class
    $('#submit-btn').removeClass('normal-submit')
    $('#submit-btn').addClass('rocket-submit')
    //change the wtp button class
    $('#randomizer').removeClass('normal-randomizer')
    $('#randomizer').addClass('rocket-randomizer')
    //remove the normal answer classes
    $('#correct-answer').removeClass('correct-answer-normal')
    $('#wrong-answer').removeClass('wrong-answer-normal')
    //add  the rocket answer classes
    $('#correct-answer').addClass('correct-answer-rocket')
    $('#wrong-answer').addClass('wrong-answer-rocket')
    //hide rocket style button
    $('.team-rocket').hide()
    //show the normal style
    $('.normal-style').show()
  }

  const normalStyle = () => {
    //normal h1 text
    $('h1').text("Who's That Pokemon?")
    //remove the rocket class from header and nav
    $('header').removeClass('rocket-header')
    $('nav').removeClass('rocket-nav')
    //add the normal class
    $('header').addClass('normal-header')
    $('nav').addClass('normal-nav')
    //change container class to normal
    $('body').removeClass('rocket-body')
    $('body').addClass('normal-body')
    //change hint modal class to normal
    $('#modal-text').removeClass('rocket-modal')
    $('#modal-text').addClass('modal-textbox')
    //change about modal class to normal
    $('#about-text').removeClass('rocket-modal')
    $('#about-text').addClass('modal-textbox')
    //change the about modal close class
    $('#close-abt').removeClass('rocket-btn')
    $('#close-abt').addClass('close-btn')
    //change the modal close class
    $('#close-btn').removeClass('rocket-btn')
    $('#close-btn').addClass('close-btn')
    //remove the hint rocket class
    $('#hint').removeClass('rocket-hint')
    //change the submit button to normal class
    $('#submit-btn').removeClass('rocket-submit')
    $('#submit-btn').addClass('normal-submit')
    //change the wtp button class
    $('#randomizer').removeClass('rocket-randomizer')
    $('#randomizer').addClass('normal-randomizer')
    //remove the rocket answer classes
    $('#correct-answer').removeClass('correct-answer-rocket')
    $('#wrong-answer').removeClass('wrong-answer-rocket')
    //add  the normal answer classes
    $('#correct-answer').addClass('correct-answer-normal')
    $('#wrong-answer').addClass('wrong-answer-normal')
    //hide noamral style button
    $('.normal-style').hide()
    //show the rocket style button
    $('.team-rocket').show()
  }

  const displayAbout = () => {
    //reveal the about modal
    $('.about-modal').show()
  }

  const closeAbout = () => {
    //grab the about modal
    const $aboutModal = $('.about-modal')
    //close the about modal
    $aboutModal.hide()

  }

      //give the whos that pokemon button a listener to   produce the random pokemon
  $('#randomizer').on('click', producePokemon)
  //give the hint button a toggle for modal
  $('#hint').on('click', showHint)
  //give the close button a way to hide the modal
  $('#close-btn').on('click', closeHint)
  //team rocket mode
  $('#rocket-mode').on('click', rocketStyle)
  //normal mode
  $('#normal-mode').on('click', normalStyle)
  //about listener
  $('#about-link').on('click', displayAbout)
  //close about listener
  $('#close-abt').on('click', closeAbout)




      //end of on doc load
})
