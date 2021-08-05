document.getElementById('keyword').innerHTML = " ";

// Dom elements::::::::::::::::::::::::
var search = document.querySelector('#search')

  // search input


// User Choices::::::::::::::::::::::::::::::::::
// var keyword = ''

// Choose category



search.onclick = function(){
var keyword = document.querySelector('#keyword').value
var category = document.querySelector('#category').value
var sortBy = document.querySelector('#sort').value
$.ajax({
  url : 'https://newsapi.org/v2/everything?q=' + keyword + '&from=2021-07-28&to=2021-07-28&sortBy=' + sortBy + '&apiKey=0ff9b09f976343aba1d3ae53a7a2cf09',
  type: 'GET',
  data: 'json',
  success: function(data){
    console.log(data);
    var i;

    document.getElementById('objects').innerHTML = ""
    for (i=0;i< data.articles.length;i++){

       document.getElementById('objects').innerHTML +=
       '<div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"> ' +
          '<div class="card mt-3 ml-5"' +
            '<div class="card-body ">'+

              '<img class="mb-2" style="width:100%" src ='+ data.articles[i].urlToImage +'>' +
                '<h5 class="card-title my-3 p-2 h3">'+ data.articles[i].title +'</h5>'+
             '<p class="card-text p-2"> '
             // + data.articles[i].color+ '<br>'
              + data.articles[i].description + '<br> ' +'Author: ' + data.articles[i].author +'</p>'+

           '</div>'+
          '</div>'+
       '</div>';
    } //for loop
  },  //success
  error : function(){
    console.log('error');
  } //error
}); //ajax
}
