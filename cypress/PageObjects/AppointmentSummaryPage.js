import {BasePage} from "./basePage";
export class AppointmentSummaryPage extends BasePage {
    static get url() {
        return "/appointment.php#summary";
    }

    static get validate(){
        return cy.get("[class=\"col-xs-8\"]");
    }
}