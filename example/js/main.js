// You can get your username and user key from your Developer Portal
// You must have already created and compiled a bot before you can talk to it
var pb = new Pandorabot("aiaas.pandorabots.com", YOUR_USERNAME, YOUR_BOTNAME, YOUR_USER_KEY);
function doTalk() {
  var input = document.getElementById("yousay").value;
  document.getElementById("yousay").value = "";
  pb.talk(input, function(data) {
    var response = data["responses"];
    document.getElementById("response").innerHTML = response;
    console.log(response);
  });
}
