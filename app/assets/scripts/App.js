import "../styles/styles.css";
import "lazysizes";
import Person from "./modules/Person";
import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";
import ClientArea from "./modules/ClientArea";
if (module.hot) {
  module.hot.accpet;
}

/* example codes

class Adult extends Person {
  payTaxes() {
    console.log(this.name + " pay taxes");
  }
}

let john = new Person("John Smith", "Red");
john.greet();

let jane = new Adult("Jane t", "Blue");
jane.payTaxes();*/

/*begin build the website*/

let mobileMenu = new MobileMenu();
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60);
let stickyHeader = new StickyHeader();
let modal;
new ClientArea();

document.querySelectorAll(".open-modal").forEach(el =>
  el.addEventListener("click", e => {
    e.preventDefault();
    if (typeof modal == "undefined") {
      import(/* webpackChunkName:"modal" */ "./modules/Modal")
        .then(x => {
          modal = new x.default();
          setTimeout(() => modal.openTheModal(), 20);
        })
        .catch(() => console.log("There is a problem..."));
    } else {
      modal.openTheModal();
    }
  })
);
