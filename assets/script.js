let btnDiv = document.getElementById('btn-div')
let photoEl = document.getElementById('photo-result');
let favBtn = document.getElementById('fav-btn');
let favPhotosList = document.getElementById('fav-photos')

console.log(photoEl.src);

// Opening joke modal
$(document).ready(function (){
  $('#jokebox').modal()
})

// API grabbing random joke
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

// Render jokes
function renderJoke(data) {
   
  var grabSetup = document.querySelector('#setup');
  var setupLocation = data.setup;
 grabSetup.innerHTML = setupLocation;
  
  var grabPunchline = document.querySelector('#punchline');
  var punclineLocation = data.punchline;
  grabPunchline.innerHTML = punclineLocation;
  
  console.log()
  
}

// Grabbing the joke button
var jokeBtn = document.getElementById('joke-btn')

// Adding a click event listener to the button
jokeBtn.addEventListener('click', getaJoke)



// Mark's stuff comment

function favBtnDisplay(){
  if (photoEl.src === '') {
    favBtn.style.visibility = "hidden";
  } else {
    favBtn.style.visibility = "visible";
  }
}

function renderImage(data2) {
  photoEl.src = data2[0];
  favBtnDisplay();
}

function getAnimal (event) {

  var shibeAPI
  let btn = event.target;

  if (btn.textContent === 'Doge') {
    shibeAPI = 'https://shibe.online/api/shibes?count=[1-100]&urls=true&httpsUrls=true'

  } else if (btn.textContent === 'Birds') {
    shibeAPI = 'https://shibe.online/api/birds?count=[1-100]&urls=true&httpsUrls=true';

  } else if (btn.textContent === 'Cats') {
    shibeAPI = 'https://shibe.online/api/cats?count=[1-100]&urls=true&httpsUrls=true';

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

function setStorage() {
  let imgArr = localStorage.getItem('saved-images');
  let img = photoEl.src;

  console.log(img);
  if (imgArr === null || imgArr === undefined) {
    imgArr = [];
    imgArr.push(photoEl.src);
    localStorage.setItem('saved-images', JSON.stringify(imgArr));
    console.log(imgArr);
  } else {
    imgArr = JSON.parse(imgArr);
    if (imgArr.length > 5) {
      console.log(imgArr + " I can't save it");
    } else {
      imgArr.push(img);
      localStorage.setItem('saved-images', JSON.stringify(imgArr));
    }
  }
  // let historyArr = localStorage.getItem('history');
  //   if(historyArr === null) {
  //       historyArr = [];
  //       historyArr.push(cityName);
  //       localStorage.setItem('history', JSON.stringify(historyArr));
  //   } else {
  //       historyArr = JSON.parse(historyArr);
  //       historyArr.push(cityName);
  //       localStorage.setItem('history', JSON.stringify(historyArr));
  //   }


}

function displayFavorites() {
  let favImages = localStorage.getItem('saved-images');
  favImages = JSON.parse(favImages);

  while (favPhotosList.firstChild) {
      favPhotosList.removeChild(favPhotosList.firstChild);
  }
  

  for (let i = 0; i < favImages.length; i++) {
    let image = document.createElement('img');
    image.className = 'fav-photo';
    image.src = favImages[i];
    favPhotosList.appendChild(image);
  }
  console.log(favImages);
}

function favoritePhoto () {
  setStorage();
  displayFavorites();
}

displayFavorites();
favBtnDisplay();

favBtn.addEventListener('click', favoritePhoto);
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
