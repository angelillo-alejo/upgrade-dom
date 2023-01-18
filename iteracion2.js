'use strict';
// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
 const div = document.createElement('div');
 document.body.appendChild(div);

 //2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
 const divP = document.createElement('div');
 divP.innerText = 'p';
 document.body.appendChild(divP);

 //2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
 const div6p = document.createElement('div');
 for (let i = 0; i<6; i++) {
    let par = div6p.innerHTML ='p';
    document.body.append(par);
  }

//2.3 Asi seria si lo que pide el ejercicio es un parafo y no una p (consonante)
const divTerciary = document.createElement('div');
for (let i = 0; i<6; i++) {
    const parrafos = document.createElement('p');
    document.body.append(parrafos);
}

//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const p$$ = document.createElement('p');
p$$.innerText = 'Zoy dinámico la <p> es de parrafo o de consonante?';
document.body.appendChild(p$$);

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const h2$$ = document.querySelector ('.fn-insert-here ');
h2$$.innerText = 'Wubba Lubba dub dub que tun pan que tun!!';

//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const list = document.createElement('ul');
apps.forEach(app => {
  let itemList = document.createElement('li');
  itemList.innerText = app;
  document.body.appendChild(itemList);
});

//2.7Elimina todos los nodos que tengan la clase .fn-remove-me
 const node = document.querySelectorAll('.fn-remove-me');
 for (const item of node) {
  item.remove();
 }

/* 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
Recuerda que no solo puedes insertar elementos con .appendChild.*/
const otherP = document.createElement("p");
const myDivs = document.querySelectorAll("div");
otherP.innerText = "Voy en medio, crack mental!";
document.body.insertBefore(otherP, myDivs[1]);


/*2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 
.fn-insert-here*/
const goInside = document.querySelectorAll('.fn-insert-here')

for (const element of goInside) {
  const meSacoDeLaMangaUnaP = document.createElement('p');
  meSacoDeLaMangaUnaP.innerText = 'voy dentro';

  element.appendChild(meSacoDeLaMangaUnaP);
}