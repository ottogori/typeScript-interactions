import fetch, { Headers } from 'node-fetch';
import * as FormData from 'form-data';
import * as base64 from 'base-64';
import { DOMParser } from 'xmldom';
import { readFileSync } from 'fs';

//Utilitários
function getTodayFullDate():string{
       const date = new Date();
       const today:string = date.getFullYear().toString() + '-' + (date.getMonth()+1).toString() + '-' + date.getDate().toString();
       return today;
}

//PegaArquivo
const file = readFileSync('../../data-teste2.txt', 'utf-8');

const form: any = new FormData();
form.append('arquivo',file);
form.append('nome', getTodayFullDate());
form.append('robozinho', 'roboTs');

form.setEncoding;

//Passíveis de serem recebidos na requisição
const headers = new Headers();
headers.append('Authorization', 'Basic ' + base64.encode('usuário:senha'));

const fetchOptions: any = {
       headers,
       method: 'POST',
       body: form
}

let sendRequest = async (url: string, callback: any) => {
       return await fetch(url, fetchOptions) 
                     .then(res => res.text()) 
                     .then(returnStatus => (new DOMParser().parseFromString(returnStatus, "text/xml").getElementsByTagName('id_de_tag')).item(0)?.textContent) 
                     .then((data) => {
                            callback(data);
                     })
                     .catch(err => console.log(err));
}


sendRequest('<URL>', async function (suaVariavel: any){ //Executa essa função no Callback
       //CoisaLegal
       console.log(suaVariavel);
});















