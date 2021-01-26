$(function() {
    $( ".column" ).sortable({
      connectWith: ".column",
      handle: ".option-header",
      cancel: ".option-toggle",
      placeholder: "option-placeholder ui-corner-all"
    });
 
    $( ".option" )
      .addClass( "ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" )
      .find( ".option-header" )
        .addClass( "ui-widget-header ui-corner-all" )
       ;
  });