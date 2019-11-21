document.getElementById("header").innerHTML = sessionStorage.getItem("clicked_item"); 

function back(back_id) {
	location.href = "./index.html";
}

  var cat_book_ids = sessionStorage.getItem("cat_book_ids");
  var search_url = "http://skunkworks.ignitesol.com:8000/books/?search=dickens%20great";
  var books_url = "http://skunkworks.ignitesol.com:8000/books"
  console.log(cat_book_ids);
  var id_url = books_url+ "?ids="+ cat_book_ids;

//Fetching matched book id data
  var cat_book_data;
  function myFunction(){
  	debugger;
  var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange=function() {
    if (this.readyState == 4 && this.status == 200) {
      //document.getElementById("demo").innerHTML = this.responseText;
     cat_book_data = JSON.parse(this.responseText);
     bookContainer(cat_book_data); 
    }
  };
  xhttp.open("GET", id_url, true);
  xhttp.send();
}

// Creating book container div
function bookContainer(cat_book_data){
	var i;
	for ( i=0 ; i< cat_book_data.length; i++) {
			var result = cat_book_data.results[i];
			if (result.formats["image/jpeg"] != null)(
				var img_src = result.formats["image/jpeg"]
			)
			else {
				var img_src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAANlBMVEXz9Pa5vsq2u8jN0dnV2N/o6u7FydPi5Onw8fS+ws3f4ee6v8v29/jY2+Hu7/Ly9PbJztbQ1dxJagBAAAAC60lEQVR4nO3b2ZaCMBREUQbDJOP//2wbEGVIFCHKTa+zH7uVRVmBBJQgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMCpdOzvQQqaq2KmuSrOzQ02lSeRem8rpsQq/ozg72Kj4UkAxEev8awnzs7P1yiIadsfpQXjfZCHhUCzbfmeurdNz6bDRsBWRsB+k0cXxdHjpa0wkTBn3hKnjzRZyEgYk3IeEv2RKWCt1cN9EJ0zjfm7Mq/rAVgUnbLpwnK/zA2tnuQmzJHquuqJq91blJuwmAW8rHbV3q2ITFrOAt7Xz3l2UmrBMlpcHe9fOUhOqRYVhFO/cqtSEy0H6bh/tJ1uhCctqlTB/NSnG9pOt1ISXjxLq825laVFowo9GaRPrF9talJqw3n6macaZ09yi1ISG2cLyriwePwxzi1ITru4s2naxma59TC2KTRjE83FqmQ6yeDaUDS3KTRhMV96h5TTSLD4HQ4uCE9bxePUU5pYL/3mD5o9CcMKgTONc39NNLrV5iK4aNLUoOWHQ38RQtW3nsm6db92i8ISvGBtct+hvwqyzBFxE9DehrcHlQPU1YWNvcNGirwlfNThv0ZOE9eJG1OsGZy36kVBdczU9e7RvAz5b9CFhqfIwSp4XwG+OwUWLPiRUV/33Z4tbGtTvGK635CfUDfb/SO5rt20N9t8m65fLT9g3GD5abDY2qC+lvEg4NjhEvLW4tUFvEj4a7OXq3TzoW8Jpg0PEzfk8SThv8EMeJFw1+O8SHmrQg4QHG/Qg4cEGxSc83KD4hIcblJ6w3L508TXh+vtDEpLw3GwDEpKQhOdznVD2fRr9tdpRw/1HqQndIeEvkXCXUlDC+1NBndsnge/fwyVnp9PGH3p95dm1WMKza4/fI37j+UPXR/c+2X9/hjQI0uO3LsyuMioM9A8Sjy/W1iIhY7Sn2tzpUahdWyXiNDNSxcWtSlCBAAAAAAAAAAAAAAAAAAAAAAAAAAAAwCn+AEXGNosxDBhFAAAAAElFTkSuQmCC";
			}
		   var x = document.createElement("IMG");
  			x.setAttribute("src", img_src);
  			x.setAttribute("width", "25%");
  			x.setAttribute("height", "170px");
			x.setAttribute("class", "book-img");
  			document.getElementById("book-img").appendChild(x);

  			var book_name = result.title;
  			var book_author = result.authors[o].name;

  			var y= document.createTextNode(book_name);
  			document.getElementById("book-name").appendChild(y);

  			var z = document.createTextNode(book_author);
  			document.getElementById("book-writer").appendChild(z);
	}
}