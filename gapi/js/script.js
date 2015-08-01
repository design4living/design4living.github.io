$(document).ready(function(){
    
    //Unbind Image Dragging in html. Avoids drag problems on CoverFlow
    $('img').bind('dragstart', function(event) { event.preventDefault(); });
    
    var coverFlowElement = $('#coverFlow1');
    var coverFlow = new CoverFlow(coverFlowElement);
        
}); 