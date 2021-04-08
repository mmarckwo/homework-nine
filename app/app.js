import * as MODEL from "../model/model.js";

function init() {

    $("nav a").click(function(e) {
        let btnID = this.id;
        let contentID = btnID + "Content";
        console.log("click", btnID);

        //$("#app").html(eval(contentID));
        
        MODEL.getPageContent(contentID);
    });
}

// checks for all the elements to be read by the browser.
$(document).ready(function() {
    init();
    MODEL.getPageContent("homeContent");
});