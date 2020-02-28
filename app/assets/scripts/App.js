import "../styles/styles.css";
import Person from "./modules/Person";
import MobileMenu from "./modules/MobileMenu";

if (module.hot) {
  module.hot.accpet;
}

/* example codes*/

class Adult extends Person {
  payTaxes() {
    console.log(this.name + " pay taxes");
  }
}

let john = new Person("John Smith", "Red");
john.greet();

let jane = new Adult("Jane t", "Blue");
jane.payTaxes();

/*begin build the website*/

let mobileMenu = new MobileMenu();
