import {BasePage} from "./basePage";
export class HomePage extends BasePage {
    static get url() {
        return "/#/";
    }

    static get makeAppointmentButton(){
        return cy.get("#btn-make-appointment");
    }

    static get usernameField(){
        return cy.get("#txt-username");
    }

    static get passwordFields(){
        return cy.get("#txt-password");
    }
    static  get loginButton(){
        return cy.get("#btn-login");
    }
    static get menuButton(){
        return cy.get("#menu-toggle");
    }

    static get sidebar(){
        return cy.get("#sidebar-wrapper");
    }

    static get historyButton(){
        return cy.get("#sidebar-wrapper").contains("History");
    }

    static get validateHistory(){
        return cy.get("[class=\"col-sm-12 text-center\"]");
    }
}