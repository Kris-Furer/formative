document.getElementById('keyword').innerHTML = " ";

// Dom elements::::::::::::::::::::::::
var search = document.querySelector('#search')

search.onclick= function(){
  // User Choices::::::::::::::::::::::::::::::::::
  var keyword = document.querySelector('#keyword').value
  $.ajax({
    url : 'https://newsapi.org/v2/everything?q=' + keyword + '&from=2021-07-28&to=2021-07-28&sortBy=popularity&apiKey=0ff9b09f976343aba1d3ae53a7a2cf09',
    type: 'GET',
    data: 'json',
    success: function(data){
      console.log(data);
      var i;
      for (i=0;i< data.articles.length;i++){
        console.log(data.articles[i].title);
         document.getElementById('objects').innerHTML +=
         '<div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4"> ' +
            '<div class="card mt-3 ml-5" style="width: 18rem;">' +
              '<div class="card-body">'+
                '<h5 class="card-title">'+ data.articles[i].title +'</h5>'+
                '<img style="width:100%" src ='+ data.articles[i].urlToImage +'>' +
               '<p class="card-text"> '
               + data.articles[i].color+ '<br>'
                + data.articles[i].content + '<br> ' +'width ' + data.articles[i].width+'</p>'+

             '</div>'+
            '</div>'+
         '</div>';
      } //for loop
    },  //success
    error : function(){
      console.log('error');
    } //error
  }); //ajax
  console.log("hi");

  console.log(keyword);
}


// Choose category
var category = document.querySelector('#category').value
