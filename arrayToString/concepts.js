/*
 * Write a loop that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 * Note: you may not use the built-in Array join function.
 */

var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];

 // a custom function written by you (you must define it too!)
var concepts = joinList(conceptList);

function joinList (conceptList) {
    var list = "";
    if (conceptList.length === 0) {
        return list;
    }
    for (var i = 0; i < conceptList.length; i++) {
       list += conceptList[i] + ", ";
    }
    list = list.slice(0, -2);
    return list;
}

console.log("Today I learned about " + concepts + ".");
