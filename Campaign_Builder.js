// JavaScript Document

window.writeValues = function(form) {
  var URL = form.URL.value;
  var Source = form.Source.value;
  var Medium = form.Medium.value;
  var Campaign = form.Campaign.value;
  var Department = form.Department.value;
  var Content = form.Content.value;
  document.getElementById('fullname').innerHTML = URL + '?utm_source=' + Source + '&utm_medium=' + Medium + '&utm_campaign=' + Campaign + '&utm_term=' + Department + '&utm_content=' + Content;
}
	//Scroll down menus
  $( function() {
    $( "#source" ).selectmenu();
 
    $( "#medium" ).selectmenu();
	$( "#department" ).selectmenu();
  } );