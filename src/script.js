// Random Int number [0; max[
function getRand(max) {
  return Math.floor(Math.random() * max);
}

function chooseResto(){
  $('td.danger').removeClass('danger');
  $('td').eq(getRand(restoList.length)).addClass('danger');
}

$(document).ready(function(){

  /*Table Creation*/

  var table = $('<table></table>').addClass("table table-bordered");
  var columnNumber = 3;
  var row = $('<tr></tr>');

  if(restoList.length % 4 === 0){
    columnNumber = 4;
  }
  restoList.forEach(function(el, index){
    if(index % columnNumber === 0 && index !== 0){
      table.append(row);
      row = $('<tr></tr>');
    }

    row.append($('<td></td>').text(el));
  });

  while(row.children().length < columnNumber) {
    row.append($('<td></td>'));
  }

  table.append(row);
  $('#tableSpace').append(table);

  $('.btn#launchRand').click(function(e){
    var i = 0;

    e.preventDefault();

    var id = setInterval(function(){
      chooseResto();
      ++i;
      if(i===20){
        clearInterval(id);
      }
    }, 100);
  });
});
