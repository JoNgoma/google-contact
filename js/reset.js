import * as IND from "./index.js";
import * as DOM from "./dom.js";
import * as LSR from "./localStorage.js";
import * as LIB from "./creatingLibelle.js";

// Adding option to prefix field
export function initialPays() {
  DOM.pays.forEach((pay) => {
    const option = document.createElement("option");
    IND.handleAddStyle(option, "title-level-2");
    IND.handleAddStyle(option, "w-30em");
    option.value = pay["prefixe"]; // Valeur du préfixe
    option.textContent = `${pay["drapeau"]} ${pay["nom"]} (${pay["prefixe"]})`; // Texte affiché
    DOM.entryTelPays.appendChild(option);
  });
}

//Réinitialisation des champs
export function resetAfterNContact() {
  DOM.btnSaveNCont.textContent = "Enregistrer";
  document.querySelectorAll(".input").forEach((e) => {
    e.value = "";
  });
  DOM.entryTel.value = "+243";
  IND.handleAddStyle(DOM.btnSaveNCont, "btnEnr");
  IND.handleRemoveStyle(DOM.btnSaveNCont, "button-valid");
}

// Mask/Demask list
export function maskListLib() {
  IND.handleRemoveStyle(DOM.LibPage, "flex");
  IND.handleAddStyle(DOM.LibPage, "display-none");
  IND.handleRemoveStyle(DOM.LibPage, "demask");
  IND.handleAddStyle(DOM.LibPage, "mask");
}
export function demaskListLib() {
  IND.handleRemoveStyle(DOM.LibPage, "display-none");
  IND.handleAddStyle(DOM.LibPage, "flex");
  IND.handleRemoveStyle(DOM.LibPage, "mask");
  IND.handleAddStyle(DOM.LibPage, "demask");
}


export function nbrLibelle(){
  const tabLib = LSR.takeLib();
  const listPersonContact = LSR.takeContact();
  tabLib.forEach((el) => {
  
    let nbr = 1
    for (let i = 0; i < listPersonContact.length; i++) {
      if (listPersonContact[i]["pLibelle"] == el[0]) {
        el[1]=nbr++
      LSR.stockageLib(tabLib);
      LIB.addLibElHtmlSideBar();
    }
    }
  });
}