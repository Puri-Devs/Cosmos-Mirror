window.onload = function() {
    $.ajax({
        url:"/404",
        type:'GET',
        success: function(data){
            $("body").html(data);
        }
     });
  };