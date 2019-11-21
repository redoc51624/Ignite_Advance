function fetchData(clicked_id) {
  var xhttp = new XMLHttpRequest();
  var search_url = "http://skunkworks.ignitesol.com:8000/books/?search=dickens%20great";
  var books_url = "http://skunkworks.ignitesol.com:8000/books"
  var data;
  var cat_book_ids = [];
  sessionStorage.setItem("clicked_item", clicked_id);
  xhttp.onreadystatechange=function() {
    if (this.readyState == 4 && this.status == 200) {
      //document.getElementById("demo").innerHTML = this.responseText;
      data = JSON.parse(this.responseText);
      cat_book_ids.push(search(data, clicked_id));
      // console.log(clicked_id)
      // console.log("matches:" + cat_book_ids);
	  sessionStorage.setItem("cat_book_ids", cat_book_ids);
      location.href = "./page2.html";
    }
  };
  xhttp.open("GET", books_url, true);
  xhttp.send();
}


//Search function
function search(data, clicked_id){
	var book_data = data.results;
    var matches = [], i, key;
    
    for (i=0;i<book_data.length; i++){
    	var sub_len = book_data[i].subjects.length;
    	var sub_data = book_data[i].subjects;
    	var j;
    	for ( j=0 ; j<sub_len; j++){
    		var string = sub_data[j].toString().toLowerCase();
  			var str2 = clicked_id.toString().toLowerCase();
			var match_str = new RegExp( str2 );
    		var result = string.match(match_str);
    		if( result != null) {
    			matches.push(book_data[i].id);
    		}
    	}
    }
    let unique_matches = matches.filter((item, i, ar) => ar.indexOf(item) === i);
    return unique_matches;
};