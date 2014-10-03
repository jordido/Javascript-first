   
   	var albums = [
    {
      album_name: 'if everyone is doing it why so can we',
      artist: 'the cramberries',
      rating: 3,
      relDate: new Date('1995,10,3'),
      url: "http://www.technobuffalo.com/wp-content/uploads/2014/05/google-plus-stories-03-200x200.png"
    },
    {
      album_name: 'borriquito como tú',
      artist: 'Peret',
      rating: 4,
      relDate: new Date('2001,1,30'),
      url: "http://media-cache-ec0.pinimg.com/236x/30/d4/c9/30d4c9ed980dddf9b7ce624e6e0ab03b.jpg"
    },
    {
      album_name: 'zoquetito como tú',
      artist: 'Manolito',
      rating: 5,
      relDate: new Date('1998,3,13'),
      url: "https://lh3.googleusercontent.com/-mUtYVYBlmIw/Tkau7teGygI/AAAAAAAADFo/gMjGoTapZus/w200/17539%2B-%2Banimated%2Bbrushie%2Bbrushie_brushie%2Bbrushie_brushie_brushie%2Bderp%2Brainbow_dash%2Btoothbrush.gif"
    },
    {
      album_name: 'arre Arre',
      artist: 'Alicias',
      rating: 2,
      relDate: new Date('1965,3,10'),
      url: "https://lh6.googleusercontent.com/-CCydSjeFVg0/U4DOfHYRyXI/AAAAAAAANEI/dYvniJCBjXM/s200/DSC_0138-001.JPG" 
    }
  ];


  function cleanlist() {
    var myNode = document.getElementById("container");
    while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
    }
  }


  function create_li(listElement, album) {
        // create a <li> for each one.
      var listItem = document.createElement("li");
      // add the item text
      var options = {year: "numeric", month: "long", day: "numeric"}
      var dateF = album.relDate.toLocaleDateString(); 
      listItem.innerHTML = album.album_name + "-->  " +  album.artist + "  -->  " + album.rating + "  -->  " + dateF;
      // add listItem to the listElement
      var superimage = document.createElement("img");
      superimage.setAttribute("src",album.url)
      listItem.appendChild(superimage)
      listElement.appendChild(listItem);
  }
  

  function displaylist(albums) {
  
  var listContainer = document.createElement("div")
  listContainer.setAttribute("id","list");
    // add it to the page
  var container_element = document.getElementById("container");
  container_element.appendChild(listContainer);
 
  // Make the list itself which is a <ul>
  var listElement = document.createElement("ul");
  // add it to the page
  listContainer.appendChild(listElement);
  for (var i in albums) { 
  	create_li(listElement, albums[i]) 
  }
}

function findinlist(albums,text) {
  var albums_find = [];
  for (var i in albums) {
    if (albums[i].album_name.search(text) > -1) albums_find.push(albums[i]);
  }
  cleanlist();
  displaylist(albums_find);
}

function sortlist_alfa() {
	cleanlist();
  var albums_sorted = albums.sort(
		function (album1,album2) {
			if (album1.album_name > album2.album_name) return 1;
			if (album1.album_name < album2.album_name) return -1;
			if (album1.album_name == album2.album_name) return 0;
			})
	displaylist(albums_sorted);
}

function sortlist_date() {
  cleanlist();
	var albums_sorted = albums.sort(
		function (album1,album2) {
			if (album1.relDate > album2.relDate) return 1;
			if (album1.relDate < album2.relDate) return -1;
			if (album1.relDate == album2.relDate) return 0;
			})
	displaylist(albums_sorted);
}

function sortlist_rating() {
  cleanlist();
  var albums_sorted = albums.sort(
    function (album1,album2) {
      if (album1.rating > album2.rating) return 1;
      if (album1.rating < album2.rating) return -1;
      if (album1.rating == album2.rating) return 0;
      })
  displaylist(albums_sorted);
}

var l =document.getElementById('search');


var searchfunc=function() {
  // var l = document.getElementById('search');
  findinlist(albums, l.value);
};

var l =document.getElementById('search');

function makelist() {

displaylist(albums)

var h = document.getElementById('menu2');

h.addEventListener('click', sortlist_alfa, false);

var j = document.getElementById('menu3');

j.addEventListener('click', sortlist_date, false);

var k = document.getElementById('menu4');

k.addEventListener('click', sortlist_rating, false);

// var l =document.getElementById('search');

l.addEventListener('keyup', searchfunc, false);

}

