// Selects all elements

// Sections
export const sideBarMenu = document.querySelector("#side-bar");
export const mainSection = document.querySelector("#main-section");
export const sectionNContact = document.querySelector("#main-section-NContact");
// Buttons
export const burgerMenu = document.querySelector("#burger-menu");
export const btnNCont = document.querySelector("#side-bar button:nth-child(1)");
export const btnNCont2 = document.querySelector("#main-section button");
export const btnNCont3 = document.querySelector("#btn-footer-Ncontact");
export const btnCont = document.querySelector("#side-bar > div:nth-child(2) button");
export const btnSaveNCont = document.querySelector(".btnEnr");
export const btnLib = sideBarMenu.querySelector("div:last-child span");
export const btnOpenListLib = sectionNContact.querySelector("#container-Lib>button");
export const btnSaveLib = document.querySelector(".w-h-100vh+div button:last-child");
export const btnReturnLib = document.querySelector(
  ".w-h-100vh+div button:first-child"
);
export const btnLibCreateSelected = document.querySelector("#page-lib button");
// Label
export const labelLibelleContact = mainSection.querySelector("h3");
export const nbrContactDOMh3 = mainSection.querySelector("h3>span");
export const nbrContactDOM = sideBarMenu.querySelector("div:nth-child(2) button>span");
// Navigation
export const arrowDown = document.querySelectorAll(".fa-chevron-down");
export const arrowUp = document.querySelectorAll(".fa-chevron-up");
export const left = document.querySelector(".fa-arrow-left");
// DOM group field
export const entryNames = document.querySelectorAll(".field-name");
export const entryEntr = document.querySelectorAll(".field-entreprise");
export const entryMail = document.querySelector(".field-email");
export const entryTel = document.querySelector(".field-tel");
export const entryTelPays = document.querySelector("#pays");
export const entryBirth = document.querySelectorAll(".field-birth");
export const entryLib = document.querySelector(".w-h-100vh+div input");
entryTel.value = "+243";
// Masque field
export const entryMaskName = document.querySelectorAll("#names .entry-mask");
export const masKlib = document.querySelector(".w-h-100vh");
export const entryMaskEntreprise = document.querySelectorAll(
  "#entreprise .entry-mask"
);
export const entrySearch = document.querySelector("#searchInput");
// DOM other page
export const listContactNull = mainSection.querySelector("div:nth-child(1)");
export const listContact = mainSection.querySelector("#listContact");
export const listLib = sideBarMenu.querySelector("#list-lib");
export const LibPage = document.querySelector("#page-lib");
export const listLibPage = document.querySelector("#page-lib>div");
export const popupLib = document.querySelector(".w-h-100vh+div");

// List of country, prefix and flag
export const pays = [
    { nom: "Congo-Kinshasa", prefixe: "+243", drapeau: "🇨🇩" },
    { nom: "France", prefixe: "+33", drapeau: "🇫🇷" },
    { nom: "Allemagne", prefixe: "+49", drapeau: "🇩🇪" },
    { nom: "Espagne", prefixe: "+34", drapeau: "🇪🇸" },
    { nom: "Italie", prefixe: "+39", drapeau: "🇮🇹" },
    { nom: "Royaume-Uni", prefixe: "+44", drapeau: "🇬🇧" },
    { nom: "États-Unis", prefixe: "+1", drapeau: "🇺🇸" },
    { nom: "Canada", prefixe: "+1", drapeau: "🇨🇦" },
    { nom: "Australie", prefixe: "+61", drapeau: "🇦🇺" },
    { nom: "Brésil", prefixe: "+55", drapeau: "🇧🇷" },
    { nom: "Japon", prefixe: "+81", drapeau: "🇯🇵" },
    { nom: "Chine", prefixe: "+86", drapeau: "🇨🇳" },
    { nom: "Inde", prefixe: "+91", drapeau: "🇮🇳" },
    { nom: "Mexique", prefixe: "+52", drapeau: "🇲🇽" },
    { nom: "Russie", prefixe: "+7", drapeau: "🇷🇺" },
    { nom: "Afrique du Sud", prefixe: "+27", drapeau: "🇿🇦" },
    { nom: "Argentine", prefixe: "+54", drapeau: "🇦🇷" },
    { nom: "Corée du Sud", prefixe: "+82", drapeau: "🇰🇷" },
  ];