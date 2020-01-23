import fetch, { Headers} from 'node-fetch';
import { Base64 } from 'js-base64';
import * as fs from 'fs';

const myHeaders = new Headers();
const urlToAsk : string = '<URL>';

//Passiveis de serem recebidos também na chamada
myHeaders.append('Authorization', 'Basic ' + Base64.encode('usuario:senha'));
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

var myBodyEncoded = new URLSearchParams();
myBodyEncoded.append("dado1", 'id123');
myBodyEncoded.append("dado1", "RECEITA_DE_BOLO");

//console.log(myBody);
console.log(myBodyEncoded);
console.log(myHeaders)

//Opções da requisição
const fetchOptions: any = {
    method: 'POST', 
    body: myBodyEncoded,
    headers: myHeaders, 
}

console.log(fetchOptions)

//REQ
async function sendConsulta (url:string){
    return await fetch (url,fetchOptions)
                .then(res => res.buffer())
                .then((response:any) => {                   
                    fs.writeFileSync('file.zip',response) //Salva O Buffer Num arquivo
                })
               .catch(err => console.log(err));               
}

sendConsulta(urlToAsk)




















