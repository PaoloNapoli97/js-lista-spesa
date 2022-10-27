"use strict"

const shoplist = [
    'Monster', 
    'Cocacola',
    'Pizza',
    'TheRock',
    'Pollo',
 ];

 const lista = document.getElementById('lista');
 let i = 0;

 while ( i <= shoplist.length - 1){
    const item = document.createElement('li');
    item.innerHTML = shoplist[i];
    lista.append(item);
    i++;
 }

 console.log(shoplist);