$( document ).ready(function() {

$('#search').keyup(function(){
  var searchField = $('#search').val();
  var myExp = new RegExp(searchField, 'i');
  $.getJSON('data.json', function(data){
    console.log(data);
    var output = '<ul class="searchresult">';
    $.each(data, function(key, val) {
      console.log(val);
      if((val.address.search(myExp) != -1) || (val.poscode.search(myExp) != -1)) {
        output +='<li>';
        output +='<p>' + val.address + '</p>';
        output +='<p>' + val.postcode + '</p>';
        output +='</li>';
      }
    });
    output += '</ul>';
    $('#update').append(output);
  });
});
})



