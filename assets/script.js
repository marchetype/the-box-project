let btnDiv = document.getElementById('btn-div')
let photoEl = document.getElementById('photo-result');


// How to open the modal
$(document).ready(function (){
  $('#jokebox').modal()
})

$(document).ready(function(){
  $('#dogebox').modal();
});


function getaJoke() {
      var jokeAPI = 'https://official-joke-api.appspot.com/random_joke'
      fetch(jokeAPI)
      .then(function (response){
          return response.json()
      })
      .then(function (data) {
          console.log(data)
          renderJoke(data);
      });
  }

getaJoke()

function renderJoke(data) {
  $('#setup').text(data.setup);
  $('#punchline').text(data.punchline);
}



// refresh button function
// var getRefreshBtn = $('#refresh-btn')
// getRefreshBtn.click(function() {
//     location.reload();
// });


function renderImage(data2) {
  photoEl.src = data2[0];
}

function getAnimal (event) {

  var shibeAPI
  let btn = event.target;

  if (btn.textContent === 'Doge') {
    shibeAPI = 'http://shibe.online/api/shibes?count=[1-100]&urls=true&httpsUrls=true'

  } else if (btn.textContent === 'Birds') {
    shibeAPI = 'http://shibe.online/api/birds?count=[1-100]&urls=true&httpsUrls=true';

  } else if (btn.textContent === 'Cats') {
    shibeAPI = 'http://shibe.online/api/cats?count=[1-100]&urls=true&httpsUrls=true';

  }
  fetch(shibeAPI)
  .then(function (response){
      return response.json()
  })
  .then(function (data2) {
      console.log(data2)
      renderImage(data2)
  });
}

btnDiv.addEventListener('click', getAnimal);





// Grabbing the inside value of the div (hopefully)
// var relatedArtistSpot = $('#artist-spot').val();
// var coldplay = '4gzpq5DPGxSnKTe4SA8HAU'






// Failed attempt at: Function to pull related artists API from Spoftify (hopefully again)
// function getRelatedArtists() {
//     var relatedArtists = `https://api.spotify.com/v1/artists/4gzpq5DPGxSnKTe4SA8HAU/related-artists`
//     fetch(relatedArtists)
//     .then(function (response){
//         return response.json()
//     })
//     .then(function (data) {
      
//     });
// }

// getRelatedArtists()
