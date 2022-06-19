document.getElementById('button').onclick = function() {
  alert("pakyu bitch");
 };
 document.getElementById('button1').onclick = function() {
  alert("inom sa tubig yawa ka");
 };

 function myFunction() {
    let password = prompt("Ibutang imong password pls", "");
    if (password != null) {
      document.getElementById("hehe").innerHTML =
      `ang password nmo kay (${password}) HAHAHAH bugo ngano gibutang ang password!`;
    }
  }

document.getElementById('button4').onclick = function(){
    let pword = prompt('ibutang gale balik imo password', '');
    console.log(`Bugo imong pass kay ${pword}`);
    alert('adto dyun settings dyun developer tools');
    alert('kita imo password noh bugo! AHAAJAHHA');
};