import * as DOM from "./dom.js";
import * as LIS from "./displayListContact.js";
import * as CRE from "./creatingContact.js";
import * as LSR from "./localStorage.js";
import * as RST from "./reset.js";
import { addLibElHtml, addLibElHtmlSideBar } from "./creatingLibelle.js";

//Declaration
export let ind = 0;

// Callback functions
export const handleAddStyle = (element, style) => {
  element.classList.add(style);
};
export const handleRemoveStyle = (element, style) => {
  element.classList.remove(style);
};

//
const listOfContact = LSR.takeContact();
for (const e of listOfContact) {
  handleRemoveStyle(DOM.listContact, "display-none");
  handleAddStyle(DOM.listContactNull, "display-none");
  LIS.displayContact(e);
  LSR.takeContact();
  DOM.nbrContactDOM.textContent = listOfContact.length;
  DOM.labelLibelleContact.innerHTML=`
  Contacts
  <span> (${listOfContact.length})</span>`
}

export function mouseOver(listOfContact) {
  ind = 0;
  let btnContSelected = document.querySelectorAll("#listContact>div");
  // Effet hover
  btnContSelected.forEach((one) => {
    one.addEventListener("mouseover", () => {
      const menuSupUpd = one.querySelector(".menuSupUpd");
      handleRemoveStyle(menuSupUpd, "display-none");
    });
  });
  btnContSelected.forEach((one) => {
    one.addEventListener("mouseleave", () => {
      const menuSupUpd = one.querySelector(".menuSupUpd");
      handleAddStyle(menuSupUpd, "display-none");
    });
  });
  btnContSelected.forEach((one) => {
    const btnDelet = one.querySelector("div>i:last-child");
    const btnUpdate = one.querySelector("div>i:first-child");

    // Option Delete contact
    btnDelet.addEventListener("click", () => {
      const resp = confirm("Supprimer ce contact ?");
      const tabLib = LSR.takeLib();
      if (resp) {
        const selectNum = one.querySelector(".numberPhone");
        const SelectNames = one.querySelector(".herNames");
        listOfContact.forEach((onecontact) => {
          if (
            selectNum.textContent == onecontact["pTel"] &&
            SelectNames.textContent ==
              `${onecontact["pPrefix"]} ` +
                `${onecontact["pFisrtName"]} ${onecontact["pName"]}`
          ) {
            listOfContact.splice(ind, 1);
            DOM.listContact.removeChild(one);
            DOM.nbrContactDOM.textContent = listOfContact.length;
            DOM.nbrContactDOMh3.textContent = `(${listOfContact.length})`;
            LSR.stockageContact(listOfContact);
            RST.nbrLibelle();
            alert("Conctact supprimé");
            ind = 0;
            if (listOfContact.length == 0) {
              handleRemoveStyle(DOM.listContactNull, "display-none");
              handleAddStyle(DOM.listContact, "display-none");
            }
          }
          ind++;
        });
      }
    });

    // Option Update contact
    btnUpdate.addEventListener("click", () => {
      const selectNum = one.querySelector(".numberPhone");
      const SelectNames = one.querySelector(".herNames");
      for (let i = 0; i < listOfContact.length; i++) {
        if (
          selectNum.textContent == listOfContact[i]["pTel"] &&
          SelectNames.textContent ==
            `${listOfContact[i]["pPrefix"]} ` +
              `${listOfContact[i]["pFisrtName"]} ${listOfContact[i]["pName"]}`
        ) {
          ind = i;
          handleRemoveStyle(DOM.btnSaveNCont, "btnEnr");
          handleAddStyle(DOM.btnSaveNCont, "button-valid");
          CRE.updateContact(listOfContact[i]);
        }
      }
      RST.nbrLibelle();
      RST.resetAfterNContact
    });
  });
}
addLibElHtml();
RST.nbrLibelle();
mouseOver(listOfContact);

export function tabListContact(res = "") {
  while (DOM.listContact.childElementCount > 2) {
    DOM.listContact.removeChild(DOM.listContact.lastChild);
  }
  const contactslist = LSR.takeContact();
  const tabLib = LSR.takeLib();
  let tabContact2 = [];
  let elm1 = "",
    elm2 = "";
  for (const e of contactslist) {
    tabLib.forEach((el) => {
      if (e["pLibelle"] == el[0]) {
        el[1] = 0;
      }
    });
  }
  for (const e of contactslist) {
    if (
      e["pFisrtName"].toUpperCase().includes(res.toUpperCase()) ||
      e["pName"].toUpperCase().includes(res.toUpperCase())
    ) {
      elm1 = e["pFisrtName"].toUpperCase();
      elm2 = e["pName"].toUpperCase();
      tabContact2.unshift(e);
    }
  }
  if (elm1.includes(res.toUpperCase() || elm2.includes(res.toUpperCase()))) {
    for (const e of tabContact2) {
      LIS.displayContact(e);
      LSR.takeContact();
    }
  } else {
    for (const e of contactslist) {
      LIS.displayContact(e);
      LSR.takeContact();
    }
  }

  mouseOver(contactslist);
  // Option Delete contact

  DOM.nbrContactDOM.textContent = contactslist.length;
  DOM.nbrContactDOMh3.textContent = `(${contactslist.length})`;
}
