$(function() {
      $( ".column" ).sortable({
				  connectWith: ".column"
			      });
      var portlet = $(".portlet");
      portlet.addClass( "ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" )
	  .find( ".portlet-header" )
	  .addClass( "ui-widget-header ui-corner-all" )
	  .prepend( "<span class='ui-icon ui-icon-minusthick'></span>")




      $( ".column" ).disableSelection();

      $( ".portlet-header .ui-icon" ).click(function() {

						$( this ).toggleClass( "ui-icon-minusthick" ).toggleClass( "ui-icon-plusthick" );
						$( this ).parents( ".portlet:first" ).find( ".portlet-content" ).toggle();
					    });
      $("#newitem").click(function() {
			      $("#column1").append('<div class="portlet"> <div id="portlet-header-1" class="portlet-header">Feeds</div> <div class="portlet-content">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</div>  </div>')
				  .find('.portlet')
				  .addClass( "ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" )
				  .find( "#portlet-header-1" )
				  .addClass( "ui-widget-header ui-corner-all" )
				  .prepend( "<span class='ui-icon ui-icon-minusthick'></span>");
			  });

  }) ;
