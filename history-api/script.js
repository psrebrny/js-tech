/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function(){

  if(!window.history && history.pushState )return;

  var searchInput = document.querySelector("#searchInput"),
      rows = document.querySelectorAll("#table tbody tr"),
      timer;

  function filterRows(){
    [].forEach.call(rows, function(row){

      var cells = row.querySelectorAll("td"),
          containsText = false;

      [].forEach.call(cells, function(cell){
        var text = cell.textContent.toLowerCase(),
            search = searchInput.value.toLowerCase();

        if(text.indexOf(search) != -1)
          containsText = true;

      });

      if(containsText)
        row.style.display = "";
      else
        row.style.display = "none";

    });
  }
  searchInput.onkeyup = function(){

    clearTimeout(timer);

    timer = setTimeout(function(){
      if(searchInput.value != ""){
        window.history.pushState(searchInput.value, "", "#search=" + encodeURI(searchInput.value));
      }
    },500);

    filterRows();
  }

  window.onpopstate = function(e){
    if(e.state !== null){
      console.log(e.state);
      searchInput.value = e.state;

      filterRows();
    }else{
      var searchValue = window.location.hash.split("=").pop();
      console.log(searchValue)
      //if (searchValue == "")
      //  searchInput.value = "";
      //else
        searchInput.value = decodeURI(searchValue);

      filterRows();
    }
  }
})();