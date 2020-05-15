$(() => {
  let number = Math.floor(Math.random() * 809 + 1)

  $.ajax({
    url: "https://pokeapi.co/api/v2/pokemon/" + number,
    type: "GET",
  }).then((data) => {
    console.log(data);
    //end of then
  }).catch((error) => {
    console.log('Sorry, an error has occured!');
  })//end of err 

  //end of on doc load
})
