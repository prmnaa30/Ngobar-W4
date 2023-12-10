const sidebar = document.querySelector("#sidebar");
const buttonToggler = document.querySelector(".navigation__toggler");
const buttonCloser = document.querySelector(".navigation__closer");

const valueProjectComplete = document.getElementById("value-project-complete");
const valueYearExperience = document.getElementById("value-year-experience");

const navigationMenu = document.querySelector(".navigation__menus");

/**
 * Inject value pada valueProjectComplete dengan js
 */
const containerValue = {
  project: 420,
  yearExperience: "15+"
}

valueProjectComplete.append(containerValue.project);
valueYearExperience.append(containerValue.yearExperience);

/**
 * value menus
 */
const navigationMenus = [
  {
    title: "Work",
    link: "/#"
  },
  {
    title: "About",
    link: "/#"
  },
  {
    title: "Service",
    link: "/#"
  },
  {
    title: "Contact",
    link: "/#"
  }
];

/**
 * Untuk menampilkan sidebar ketika diklik
 * 
 * Cara baca: 
 * Button toggler ku berikan event ketika di klik, maka di element dengan id sidebar (Tag Aside nya)
 * tambahkan class tambahan yaitu "show" dan buang class "hide"
 *  */
buttonToggler.addEventListener("click", () => {
  sidebar.classList.toggle("show");
  sidebar.classList.remove("hide");
});

/**
 * Untuk menutup sidebar ketika diklik
 * 
 * Cara baca: 
 * Button closer ku berikan event ketika di klik, maka di element dengan id sidebar (Tag Aside nya)
 * hapus class tambahan yaitu "hide" dan tambah class "show"
 *  */
buttonCloser.addEventListener("click", () => {
  sidebar.classList.remove("show");
  sidebar.classList.toggle("hide");
});
