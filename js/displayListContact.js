import * as IND from "./index.js";
import * as DOM from "./dom.js";

export function displayContact(e) {
  
  const divContact = document.createElement("div");
  IND.handleAddStyle(divContact, "flex");
  IND.handleAddStyle(divContact, "w-100");
  IND.handleAddStyle(divContact, "items-center");
  IND.handleAddStyle(divContact, "position-relative");
  const menuSupUpd = `
    <div class="display-flex justify-s-between" >
        <i
          class="fa-solid fa-pen ic-white"
        ></i>
        <i
          class="fa-solid fa-trash ic-white"
        ></i>
    </div>`;
  const pMenuSupUpd = document.createElement("div");
  IND.handleAddStyle(pMenuSupUpd, "display-none");
  pMenuSupUpd.style.textAlign = "center";
  IND.handleAddStyle(pMenuSupUpd, "items-center");
  IND.handleAddStyle(pMenuSupUpd, "menuSupUpd");
  pMenuSupUpd.innerHTML = menuSupUpd;
  const imgperson = document.createElement("span");
  imgperson.style.backgroundColor = e.clr;
  const pNames = document.createElement("p");
  const imgETnames = document.createElement("div");
  const pMail = document.createElement("p");
  const pTel = document.createElement("p");
  pTel.classList.add("numberPhone");
  pNames.classList.add("herNames");
  const pFoncEntr = document.createElement("p");
  const pBtnLib =
    e["pLibelle"] == ""
      ? ""
      : ` 
    <button class="btn-lib flex justify-s-between items-center padding-container">
      ${e["pLibelle"]}
    </button>`;
  const pLibelle = document.createElement("p");
  imgperson.textContent = (
    e["pFisrtName"].trim() != ""
      ? `${e["pFisrtName"].slice(0, 1)}`
      : `${e["pName"].slice(0, 1)}`
  ).toUpperCase();
  pNames.textContent = `${e["pPrefix"]} ` + `${e["pFisrtName"]} ${e["pName"]}`;
  pMail.textContent = e["pMail"];
  pTel.textContent = e["pTel"];
  if (e["pFoncEntr"] != "" && e["pEntreprise"] != "")
    pFoncEntr.textContent = `${e["pFoncEntr"]}, ${e["pEntreprise"]}`;
  else if (e["pFoncEntr"] != "") pFoncEntr.textContent = e["pFoncEntr"];
  else if (e["pEntreprise"] != "") pFoncEntr.textContent = e["pEntreprise"];
  pLibelle.innerHTML = pBtnLib;
  imgETnames.appendChild(imgperson);
  IND.handleAddStyle(imgETnames, "flex");
  IND.handleAddStyle(imgETnames, "col-gap-1em");
  IND.handleAddStyle(imgETnames, "items-center");
  imgETnames.appendChild(pNames);
  divContact.appendChild(imgETnames);
  divContact.appendChild(pMail);
  divContact.appendChild(pTel);
  divContact.appendChild(pFoncEntr);
  divContact.appendChild(pLibelle);
  divContact.appendChild(pMenuSupUpd);
  DOM.listContact.appendChild(divContact);
}
