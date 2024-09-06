import * as DOM from "./dom.js";
import * as IND from "./index.js";
import * as RST from "./reset.js";
import * as LSR from "./localStorage.js";
import { displayContact } from "./displayListContact.js";

// Create new libelle
export function addLib(lib) {
  const tabLib = LSR.takeLib();
  if (tabLib.length < 1) {
    tabLib.push([lib, 0]);
    LSR.stockageLib(tabLib);
  } else {
    for (let e of tabLib) {
      if (e.includes(lib)) {
        return alert("Le libellé sasie existe déjà");
      }
      if (e === tabLib[tabLib.length - 1]) {
        tabLib.push([lib, 0]);
        LSR.stockageLib(tabLib);
        break;
      }
    }
  }
  if (DOM.popupLib.classList.contains("flex")) {
    DOM.btnOpenListLib.innerHTML = `
      <i class="fa-solid fa-plus clr-add"></i>
      <span>${tabLib[tabLib.length - 1][0]}</span>`;
    RST.maskListLib();
    // pValid.textContent = "Créer un libellé";
  }
  addLibElHtml();
  DOM.entryLib.value = "";
  IND.handleRemoveStyle(DOM.masKlib, "flex");
  IND.handleAddStyle(DOM.masKlib, "display-none");
  IND.handleRemoveStyle(DOM.popupLib, "flex");
  IND.handleAddStyle(DOM.popupLib, "display-none");
}

export function addLibElHtml() {
  addLibElHtmlSideBar();
  addLibElHtmlSelectLib();
  const btnLibSelected = document.querySelectorAll("#page-lib>div>div");
  btnLibSelected.forEach((one) => {
    one.addEventListener("click", () => {
      const pValid = DOM.btnLibCreateSelected.querySelector("p");
      const valid = DOM.btnLibCreateSelected.querySelector("span");
      IND.handleAddStyle(valid, "display-none");
      pValid.textContent = "Retour";
      DOM.btnOpenListLib.innerHTML = `
          <i class="fa-solid fa-caret-right"></i>
          <p class="title-level-3">${one.querySelector("p").textContent}</p>`;
      RST.maskListLib();
    });
  });
}

// Adding objet on the sideBar page with HTML
export function addLibElHtmlSideBar() {
  while (DOM.listLib.lastChild) {
    DOM.listLib.removeChild(DOM.listLib.lastChild);
  }
  const tabLib = LSR.takeLib();
  tabLib.forEach((e) => {
    const divLiv = document.createElement("div");
    IND.handleAddStyle(divLiv, "flex");
    IND.handleAddStyle(divLiv, "w-100");
    IND.handleAddStyle(divLiv, "justify-s-between");
    IND.handleAddStyle(divLiv, "items-center");
    IND.handleAddStyle(divLiv, "button-radius-10");
    IND.handleAddStyle(divLiv, "button-hover-bg-color");
    IND.handleAddStyle(divLiv, "button");
    divLiv.innerHTML = `
      <div class="flex col-gap-1em">
        <i class="fa-solid fa-caret-right"></i>
        <p class="title-level-4">${e[0]}</p>
      </div>
      <p class="title-level-4 text">${e[1]}</p>`;
    DOM.listLib.appendChild(divLiv);
  });
  ////////////////////////////////////////////////////////////////////////////////////
  const btnLibSelectedListContSideBar = DOM.listLib.querySelectorAll(".button");
  btnLibSelectedListContSideBar.forEach((one) => {
    one.addEventListener("click", () => {
      const pValid = one.querySelector("p");
      const pValidNbr = one.querySelector(".text");
      const listPersonContact = LSR.takeContact();
      IND.handleAddStyle(DOM.sectionNContact, "display-none");
      IND.handleRemoveStyle(DOM.mainSection, "display-none");
      DOM.btnNCont3.style.zIndex = "5";
      if (DOM.btnSaveNCont.textContent == "  Modifier  ")
        RST.resetAfterNContact();
      while (DOM.listContact.childElementCount > 2) {
        DOM.listContact.removeChild(DOM.listContact.lastChild);
      }
      RST.nbrLibelle()
      for (let i = 0; i < listPersonContact.length; i++) {
        if (listPersonContact[i]["pLibelle"] == pValid.textContent) {
          displayContact(listPersonContact[i]);
          DOM.labelLibelleContact.innerHTML = `
        ${pValid.textContent}
        <span> (${pValidNbr.textContent})</span>`;
        }
      }
    });
  });
}

// Adding libellé on the New Contact page with HTML
function addLibElHtmlSelectLib() {
  while (DOM.listLib.lastChild) {
    DOM.listLib.removeChild(DOM.listLib.lastChild);
  }
  const tabLib = LSR.takeLib();
  tabLib.forEach((e) => {
    const divLiv2 = document.createElement("div");
    IND.handleAddStyle(divLiv2, "flex");
    IND.handleAddStyle(divLiv2, "w-100");
    IND.handleAddStyle(divLiv2, "justify-s-between");
    IND.handleAddStyle(divLiv2, "items-center");
    IND.handleAddStyle(divLiv2, "items-center");
    IND.handleAddStyle(divLiv2, "btn-lib2");
    divLiv2.innerHTML = `
      <div class="flex col-gap-1em">
        <i class="fa-solid fa-caret-right"></i>
        <p class="title-level-4">${e[0]}</p>
      </div>`;
    DOM.listLibPage.appendChild(divLiv2);
  });
}
