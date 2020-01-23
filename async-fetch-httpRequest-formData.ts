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

//Carrega Arquivo
const file = readFileSync('../../data-teste2.txt', 'utf-8');

//Quantos Precisar
const form: any = new FormData();
form.append('arquivo',file);
form.append('nome', getTodayFullDate());
form.append('robozinho', 'roboTsQuinto');
form.setEncoding;

const headers = new Headers();
headers.append('Authorization', 'Basic ' + base64.encode('<SEU-USUARIO>:<SUA-SENHA>'));

const fetchOptions: any = {
       headers,
       method: 'POST',
       body: form
}

const sendRequest = async (url: string) => {
       return await fetch(url, fetchOptions) 
                     .then(res => res.text()) //Converte pra texto
                     .then(str => new DOMParser().parseFromString(str, "text/xml")) //Converte pra XML
                     .catch(err => console.log(err));
}

console.log(sendRequest('<URL>'));














