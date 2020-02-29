import "../styles/styles.css";
import Person from "./modules/Person";
import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";

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
