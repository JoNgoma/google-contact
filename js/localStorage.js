import * as DOM from "./dom.js";

export function takeContact() {
  const contacts = localStorage.getItem("contacts");
  // orderAlpha(JSON.parse(contacts))
  return contacts ? JSON.parse(contacts) : [];
}

// Stock on localStorage Contact
export function stockageContact(contacts) {
  localStorage.setItem("contacts", JSON.stringify(contacts));
}


export function takeLib() {
  const libelles = localStorage.getItem("libelles");
  return libelles ? JSON.parse(libelles) : [];
}

// Stock on localStorage Libellé
export function stockageLib(libelles) {
  localStorage.setItem("libelles", JSON.stringify(libelles));
}




function orderAlpha(cntct) {
  cntct.sort((a, b) => {
    const contact1 = a.pPrefix || a.pFisrtName || a.pName;
    const contact2 = b.pPrefix || b.pFisrtName || b.pName;
    if (contact1 < contact2) return -1;
    if (contact1 > contact2) return 1;
    return 0;
  });
}
