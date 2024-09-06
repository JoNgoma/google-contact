import * as IND from "./index.js";
import * as DOM from "./dom.js";
import * as RST from "./reset.js";
import * as LSR from "./localStorage.js";

// Checking of field, if the names fields are different of null
export function checkFieldNull() {
  const checkField = Array.from(DOM.entryNames).some(
    (entryName) => entryName.value.trim() != ""
  );
  if (checkField) {
    IND.handleRemoveStyle(DOM.btnSaveNCont, "btnEnr");
    IND.handleAddStyle(DOM.btnSaveNCont, "button-valid");
    DOM.btnSaveNCont.addEventListener("click", classer);
  } else {
    IND.handleAddStyle(DOM.btnSaveNCont, "btnEnr");
    IND.handleRemoveStyle(DOM.btnSaveNCont, "button-valid");
  }
}

// Push on Tab Contact
export function classer() {
  IND.handleRemoveStyle(DOM.listContact, "display-none");
  IND.handleAddStyle(DOM.listContactNull, "display-none");
  const lib = DOM.btnOpenListLib.querySelector("p");
  const couleur = [
    "blue",
    "cornflowerblue",
    "aquamarine",
    "blueviolet",
    "coral",
    "darkgreen",
    "crimson",
    "forestgreen",
    "magenta",
    "lime",
  ];
  function randomColor(tabColor) {
    const randomInsdex = Math.floor(Math.random() * tabColor.length);
    return tabColor[randomInsdex];
  }
  const clr = randomColor(couleur);
  const personContact = {
    pPrefix: `${DOM.entryNames[0].value.trim()}`,
    pFisrtName: `${DOM.entryNames[1].value.trim()}`,
    pFisrtName2: `${DOM.entryNames[2].value.trim()}`,
    pName: `${DOM.entryNames[3].value.trim()}`,
    pSuffixe: `${DOM.entryNames[4].value.trim()}`,
    pFisrtNamePh: `${DOM.entryNames[5].value.trim()}`,
    pFisrtNamePh2: `${DOM.entryNames[6].value.trim()}`,
    pNamePh: `${DOM.entryNames[7].value.trim()}`,
    pPseudo: `${DOM.entryNames[8].value.trim()}`,
    pClasserEnTantQue: `${DOM.entryNames[9].value.trim()}`,
    pEntreprise: `${DOM.entryEntr[0].value.trim()}`,
    pFoncEntr: `${DOM.entryEntr[1].value.trim()}`,
    pServEntr: `${DOM.entryEntr[2].value.trim()}`,
    pMail: `${DOM.entryMail.value.trim()}`,
    pTel: `${DOM.entryTel.value.trim()}`,
    pNaisDay: `${DOM.entryBirth[0].value.trim()}`,
    pNaisMon: `${DOM.entryBirth[1].value.trim()}`,
    pNaisyea: `${DOM.entryBirth[2].value.trim()}`,

    pLibelle: lib ? lib.textContent : "",
    clr: clr,
  };
  const listPersonContact = LSR.takeContact();
  if (DOM.btnSaveNCont.textContent == "  Modifier  ") {
    listPersonContact.splice(IND.ind, 1, personContact);
    alert("Modification effectuée avec succès");
  } else {
    listPersonContact.unshift(personContact);
    alert("Enregitrement effectué avec succès");
  }  
  
  LSR.stockageContact(listPersonContact);
  RST.nbrLibelle();

  //Réinitialisation des champs
  RST.resetAfterNContact();

  // Remplissage
  IND.tabListContact("null");
}

// Show data on fields
export function updateContact(phoneCont) {
  DOM.mainSection.classList.add("display-none");
  DOM.sectionNContact.classList.remove("display-none");
  DOM.btnNCont3.style.zIndex = "-1";
  DOM.btnSaveNCont.textContent = "  Modifier  ";
  DOM.entryNames[0].value = phoneCont["pPrefix"];
  DOM.entryNames[1].value = phoneCont["pFisrtName"];
  DOM.entryNames[2].value = phoneCont["pFisrtName2"];
  DOM.entryNames[3].value = phoneCont["pName"];
  DOM.entryNames[4].value = phoneCont["pSuffixe"];
  DOM.entryNames[5].value = phoneCont["pFisrtNamePh"];
  DOM.entryNames[6].value = phoneCont["pFisrtName2"];
  DOM.entryNames[7].value = phoneCont["pNamePh"];
  DOM.entryNames[8].value = phoneCont["pPseudo"];
  DOM.entryNames[9].value = phoneCont["pClasserEnTantQue"];
  DOM.entryEntr[0].value = phoneCont["pEntreprise"];
  DOM.entryEntr[1].value = phoneCont["pFoncEntr"];
  DOM.entryEntr[2].value = phoneCont["pServEntr"];
  DOM.entryMail.value = phoneCont["pMail"];
  DOM.entryTel.value = phoneCont["pTel"];
  DOM.entryBirth[0].value = phoneCont["pNaisDay"];
  DOM.entryBirth[1].value = phoneCont["pNaisMon"];
  DOM.entryBirth[2].value = phoneCont["pNaisyea"];
  DOM.btnOpenListLib.innerHTML = phoneCont["pLibelle"]
    ? `
        <i class="fa-solid fa-caret-right"></i>
        <p class="title-level-3">${phoneCont["pLibelle"]}</p>`
    : `
        <i class="fa-solid fa-plus clr-add"></i>
        <span>Libellé</span>`;
}
