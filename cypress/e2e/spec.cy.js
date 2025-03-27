import {HomePage} from "../PageObjects/HomePage";
import {AppointmentPage} from "../PageObjects/AppointmentPage";
import {AppointmentSummaryPage} from "../PageObjects/AppointmentSummaryPage";


describe('Md2', () => {
  context("Appointment", () => {
    beforeEach(() => {
      HomePage.visit();
    });

    it("Make an Appointment", () =>{
      HomePage.makeAppointmentButton.click();
      HomePage.usernameField.click().type("John Doe");
      HomePage.passwordFields.click().type("ThisIsNotAPassword");
      HomePage.loginButton.click();

      AppointmentPage.selectFacility.select("Seoul CURA Healthcare Center");
      AppointmentPage.checkBox.click();
      AppointmentPage.medicaicButton.click();
      AppointmentPage.calendar.click();
      AppointmentPage.selectDate.contains("30").click();
      AppointmentPage.comentWrite.click({ force: true }).type("CURA Healthcare Service");
      AppointmentPage.BookAppointment.click();

      AppointmentSummaryPage.validate.should("contain.text","Seoul CURA Healthcare Center");
      AppointmentSummaryPage.validate.should("contain.text","Yes");
      AppointmentSummaryPage.validate.should("contain.text","30");
      AppointmentSummaryPage.validate.should("contain.text","CURA Healthcare Center");
    });

    it.only("Appointment history empty", () =>{
      HomePage.makeAppointmentButton.click();
      HomePage.usernameField.click().type("John Doe");
      HomePage.passwordFields.click().type("ThisIsNotAPassword");
      HomePage.loginButton.click();
      HomePage.menuButton.click();
      HomePage.sidebar.should("have.class","active");
      HomePage.historyButton.click();
      HomePage.validateHistory.should("contain.text","No appointment");
    });
  });
});