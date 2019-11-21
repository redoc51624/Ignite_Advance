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
      console.log(cat_book_data);
    }
  };
  xhttp.open("GET", id_url, true);
  xhttp.send();
}