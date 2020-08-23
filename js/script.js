var list = [ "clio", "aupera", "snowbots", "nwhacks", "snapcat", "busnapper", "airbnb" ];

var adjust = function() {
  var index;
  var width = $(window).width();
  var max_width=0;
  for( index=0; index<list.length; index++)
  {
    if( width > 768 )
    {
      $("#thumb-"+list[index]).css("height", $("#box-"+list[index]).height()+2);
      $("#thumb-"+list[index]).css("width", $("#box-"+list[index]).height()+2);
      if( $("#box-"+list[index]).height()+2 > max_width )
      {
        max_width = $("#box-"+list[index]).height()+2;
      }
    }
    else
    {
      $("#thumb-"+list[index]).css("width", $("#box-"+list[index]).width()+2);
      $("#thumb-"+list[index]).css("height", $("#box-"+list[index]).width()+2);
    }
  }

  if( width > 768 )
  {
    $(".box").css("height", max_width);
    for( index = 0; index < list.length; index++ )
    {
      $("#thumb-"+list[index]).css("height", max_width);
      $("#thumb-"+list[index]).css("width", max_width);
    }
  }

};

$(document).ready(adjust());
$(window).on('resize', adjust);
