   
   	var albums = [
    {
      album_name: 'if everyone is doing it why so can we',
      artist: 'the cramberries',
      rating: 3,
      relDate: new Date('1995,10,3')
    },
    {
      album_name: 'borriquito como tú',
      artist: 'Peret',
      rating: 4,
      relDate: new Date('2001,1,30')
    },
    {
      album_name: 'zoquetito como tú',
      artist: 'Manolito',
      rating: 5,
      relDate: new Date('1998,3,13')
    },
    {
      album_name: 'arre Arre',
      artist: 'Alicias',
      rating: 2,
      relDate: new Date('1965,3,10') 
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

function makelist() {

displaylist(albums)

var h = document.getElementById('menu2');

h.addEventListener('click', sortlist_alfa, false);

var j = document.getElementById('menu3');

j.addEventListener('click', sortlist_date, false);

var k = document.getElementById('menu4');

k.addEventListener('click', sortlist_rating, false);

}

