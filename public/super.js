   
  
  function cleanlist() {
    var myNode = document.getElementById("container");
    while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
    }
  }


  function create_li(listElement, album) {
        // create a <li> for each one.
      var listItem = document.createElement("li");
      var starItem = document.createElement("li");
      starItem.innerHTML= "<span index=1> &#9733;</span>"+
                          "<span index=2> &#9733;</span>"+
                          "<span index=3> &#9733;</span>"

      // add the item text
      var options = {year: "numeric", month: "long", day: "numeric"}

      // var dateF = album.relDate.toLocaleDateString(); 
      listItem.innerHTML = album.album_name + "-->  " +  album.artist + "  -->  " + album.rating + "  -->  " + album.relDate;
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


function makelist(albums) {

    displaylist(albums);

    var h = document.getElementById('menu2');
    h.addEventListener('click', sortlist_alfa, false);

    var j = document.getElementById('menu3');
    j.addEventListener('click', sortlist_date, false);

    var k = document.getElementById('menu4');
    k.addEventListener('click', sortlist_rating, false);

    var l =document.getElementById('search');
    l.addEventListener('keyup', searchfunc, false);

}

