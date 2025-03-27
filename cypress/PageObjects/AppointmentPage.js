import {BasePage} from "./basePage";
export class AppointmentPage extends BasePage {
    static get url() {
        return "/#appointment";
    }
    static get selectFacility(){
        return cy.get("#combo_facility");
    }
    static get checkBox(){
        return cy.get("#chk_hospotal_readmission");
    }

    static get medicaicButton(){
        return cy.get("#radio_program_medicaid");
    }
    static get calendar(){
        return cy.get("[class=\"input-group-addon\"]");
    }
    static get selectDate(){
        return cy.get("[class=\"day\"]");
    }
    static get comentWrite(){
        return cy.get("#txt_comment");
    }

    static get BookAppointment(){
        return cy.get("#btn-book-appointment")
    }
}