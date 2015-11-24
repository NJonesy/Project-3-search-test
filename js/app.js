$( document ).ready(function() {

  $('#search').keyup(function(){
    var searchField = $('#search').val();
    console.log(searchField);
    var myExp = new RegExp(searchField, 'i');
    $.getJSON('http://localhost:3000/api/homes', function(data){
      var output = '<ul class="searchresult">';
      $.each(data.homes, function(i, home){
        if((home.address.search(myExp) != -1) || (home.postcode.search(myExp) != -1)) {
          output +='<li>';
          output +='<p>' + home.address + '</p>';
          // output +='<img src="images/' + val.shortname + '_tn.jpg" alt="'+ val.name +'" />';
          output +='<p>' + home.postcode + '</p>';
          output +='</li>';
        }
      });
      output += '</ul>';
      $('#update').append(output);
    });
  });


});