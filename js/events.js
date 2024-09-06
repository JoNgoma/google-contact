import * as IND from "./index.js";
import * as DOM from "./dom.js";
import * as RST from "./reset.js";
import * as CRE from "./creatingContact.js";
import * as LIB from "./creatingLibelle.js";
import * as LIS from "./displayListContact.js";
import * as LSR from "./localStorage.js";

// The events

// Mask or unmask sideBar
DOM.burgerMenu.addEventListener("click", () => {
  if (DOM.sideBarMenu.classList.contains("display-none")) {
    IND.handleRemoveStyle(DOM.sideBarMenu, "display-none");
    IND.handleRemoveStyle(DOM.mainSection, "w-100");
  } else {
    IND.handleAddStyle(DOM.sideBarMenu, "display-none");
    IND.handleAddStyle(DOM.mainSection, "w-100");
  }
});

// Open and close option create Libelle
DOM.btnOpenListLib.addEventListener("click", () => {
  if (DOM.LibPage.classList.contains("mask")) {
    RST.demaskListLib();
    const lib = DOM.btnOpenListLib.querySelector("p");
  } else {
    RST.maskListLib();
  }
});
DOM.btnLib.addEventListener("click", () => {
  IND.handleRemoveStyle(DOM.masKlib, "display-none");
  IND.handleAddStyle(DOM.masKlib, "flex");
  IND.handleRemoveStyle(DOM.popupLib, "display-none");
  IND.handleAddStyle(DOM.popupLib, "flex");
  DOM.entryLib.focus();
});
DOM.btnLibCreateSelected.addEventListener("click", () => {
  const pValid = DOM.btnLibCreateSelected.querySelector("p");
  const valid = DOM.btnLibCreateSelected.querySelector("span");
  if (pValid.textContent == "Créer un libellé") {
    IND.handleRemoveStyle(DOM.masKlib, "display-none");
    IND.handleAddStyle(DOM.masKlib, "flex");
    IND.handleRemoveStyle(DOM.popupLib, "display-none");
    IND.handleAddStyle(DOM.popupLib, "flex");
    DOM.entryLib.focus();
  } else if (pValid.textContent == "Retour") {
    // alert("Change");
    IND.handleRemoveStyle(valid, "display-none");
    DOM.btnOpenListLib.innerHTML = `
    <i class="fa-solid fa-plus clr-add"></i>
    <span>Libellé</span>`;
    pValid.textContent = "Créer un libellé";
  }
});

// Create New Libelle
DOM.btnSaveLib.addEventListener("click", () => {
  if (DOM.entryLib.value) LIB.addLib(DOM.entryLib.value);
  else IND.handleAddStyle(DOM.entryLib, "error-field");
});
DOM.btnReturnLib.addEventListener("click", () => {
  IND.handleRemoveStyle(DOM.masKlib, "flex");
  IND.handleAddStyle(DOM.masKlib, "display-none");
  IND.handleRemoveStyle(DOM.popupLib, "flex");
  IND.handleAddStyle(DOM.popupLib, "display-none");
});

DOM.masKlib.addEventListener("click", () => {
  IND.handleAddStyle(DOM.masKlib, "display-none");
  IND.handleRemoveStyle(DOM.masKlib, "flex");
  IND.handleAddStyle(DOM.popupLib, "display-none");
  IND.handleRemoveStyle(DOM.popupLib, "flex");
});

// See contact list
DOM.left.addEventListener("click", () => {
  IND.handleAddStyle(DOM.sectionNContact, "display-none");
  IND.handleRemoveStyle(DOM.mainSection, "display-none");
  DOM.btnNCont3.style.zIndex = "5";
  if (DOM.btnSaveNCont.textContent == "  Modifier  ") RST.resetAfterNContact();
});
DOM.btnCont.addEventListener("click", () => {
  IND.handleAddStyle(DOM.sectionNContact, "display-none");
  IND.handleRemoveStyle(DOM.mainSection, "display-none");
  DOM.btnNCont3.style.zIndex = "5";
  if (DOM.btnSaveNCont.textContent == "  Modifier  ") RST.resetAfterNContact();
  while (DOM.listContact.childElementCount > 2) {
    DOM.listContact.removeChild(DOM.listContact.lastChild);
  }
  const listOfContact = LSR.takeContact();
  for (const e of listOfContact) {
    IND.handleRemoveStyle(DOM.listContact, "display-none");
    IND.handleAddStyle(DOM.listContactNull, "display-none");
    LIS.displayContact(e);
    LSR.takeContact();
    DOM.labelLibelleContact.innerHTML=`
    Contacts
    <span> (${listOfContact.length})</span>`
    DOM.nbrContactDOM.textContent = listOfContact.length;
    IND.mouseOver(listOfContact)
}
});

// Create New contact
DOM.btnNCont.addEventListener("click", () => {
  DOM.mainSection.classList.add("display-none");
  DOM.sectionNContact.classList.remove("display-none");
  DOM.btnNCont3.classList.add("display-none");
  DOM.btnNCont3.style.zIndex = "-1";
});
DOM.btnNCont2.addEventListener("click", () => {
  DOM.mainSection.classList.add("display-none");
  DOM.sectionNContact.classList.remove("display-none");
  DOM.btnNCont3.style.zIndex = "-1";
});
DOM.btnNCont3.addEventListener("click", () => {
  DOM.mainSection.classList.add("display-none");
  DOM.sectionNContact.classList.remove("display-none");
  DOM.btnNCont3.style.zIndex = "-1";
});

// Mask/Unmask names field
DOM.arrowUp[0].addEventListener("click", () => {
  IND.handleAddStyle(DOM.arrowUp[0].closest("div"), "display-none");
  IND.handleRemoveStyle(DOM.arrowDown[0].closest("div"), "display-none");
  DOM.entryMaskName.forEach((e) => {
    e.classList.add("display-none");
  });
});
DOM.arrowDown[0].addEventListener("click", () => {
  IND.handleAddStyle(DOM.arrowDown[0].closest("div"), "display-none");
  IND.handleRemoveStyle(DOM.arrowUp[0].closest("div"), "display-none");
  DOM.entryMaskName.forEach((e) => {
    e.classList.remove("display-none");
  });
});

// Mask/Unmask Entreprise field
DOM.arrowUp[1].addEventListener("click", () => {
  IND.handleAddStyle(DOM.arrowUp[1].closest("div"), "display-none");
  IND.handleRemoveStyle(DOM.arrowDown[1].closest("div"), "display-none");
  DOM.entryMaskEntreprise.forEach((e) => {
    e.classList.add("display-none");
  });
});
DOM.arrowDown[1].addEventListener("click", () => {
  IND.handleAddStyle(DOM.arrowDown[1].closest("div"), "display-none");
  IND.handleRemoveStyle(DOM.arrowUp[1].closest("div"), "display-none");
  DOM.entryMaskEntreprise.forEach((e) => {
    e.classList.remove("display-none");
  });
});

// Check if the fields aren't null
DOM.entryNames.forEach((entryName) => {
  entryName.addEventListener("input", CRE.checkFieldNull);
});

// Loading
CRE.checkFieldNull();
document.addEventListener("load", () => {
  CRE.classer();
});

// copy prefix to phone field
DOM.entryTelPays.addEventListener("input", (e) => {
  DOM.entryTel.value = DOM.entryTelPays.value;
});

// Research
DOM.entrySearch.addEventListener("input", (e) => {
  const listOfContact = LSR.takeContact();
  DOM.labelLibelleContact.innerHTML=`
  Contacts
  <span> (${listOfContact.length})</span>`
const searcprogress = e.target.value;
IND.tabListContact(searcprogress);
});

RST.initialPays();
