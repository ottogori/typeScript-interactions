import { XMLHttpRequest } from 'xmlhttprequest-ts';

const urlToAsk : string = '<URL>';

var myBodyEncoded = new URLSearchParams();
myBodyEncoded.append("dado0", "6879");
myBodyEncoded.append("dado1", "lupulo");

var xhr = new XMLHttpRequest();
xhr.open("POST", urlToAsk , true,'usuário','senha');
xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200){
        //coisaLegal
    }
    
    console.log(xhr.responseText);
 
}
xhr.send(myBodyEncoded.toString());

