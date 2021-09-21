// author: Blaron
// website : https://github.com/Blaron/TwitchPoints_Extension

console.log("ADDON: TwitchPoint ENABLED");

setInterval(function() {
    var el = document.getElementsByClassName('ScCoreButton-sc-1qn4ixc-0 ScCoreButtonSuccess-sc-1qn4ixc-5 fERWGf');
    for (var i=0;i<el.length; i++) {
      el[i].click();
        }
 }, 5000);