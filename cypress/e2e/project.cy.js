/// <reference types="cypress" />
import Booking from "../pages/Project3.js";

describe('Project - Booking Function', () => {
    beforeEach(() => {
        cy.visit('https://techglobal-training.com/frontend/project-3')

        cy.fixture('example').then(function (data) {
            this.labels = data.labels
            this.passengers = data.passengers
            this.DepartMsg = data.DepartMsg
        })


    })
    const booking = new Booking()

    function validateBookingForm(labels, passengers, roundTripSelected) {
        booking.labels().each(($el, index) => {
            cy.wrap($el).should('have.text', labels[index]);
        });
        booking.getBookButton().should('be.enabled').and('have.text', 'BOOK');
        booking.getDepartDate().should('be.enabled').and('be.visible');
        booking.getAllDropdown().should('be.enabled');
        booking.getNumAndPass1().each(($el, index) => {
            cy.wrap($el).should('have.value', passengers[index]);
        });


        if (roundTripSelected === true) {
            booking.getReturnDate().should('be.enabled').and('be.visible');
            booking.getOneWayRadio().should('not.be.checked')
            booking.getRoundTripRadio().should('be.checked')


        } else if (roundTripSelected === false) {
            booking.getReturnDate().should('not.be.enabled').and('be.visible');
            booking.getOneWayRadio().should('be.checked')
            booking.getRoundTripRadio().should('not.be.checked')
        }

    }

    it('Test Case 01 - Validate the default Book your trip form', function () {
        validateBookingForm(this.labels, this.passengers, false);


    });

    it('Test Case 02 - Validate the Book your trip form when Round trip is selected', function () {
        booking.getRoundTripRadio().click();
        validateBookingForm(this.labels, this.passengers, true);
    });

    it('Test Case 03 - Validate the booking for 1 passenger and one way', function () {

        const departDateMsg = booking.getDateMsg(this.DepartMsg.TC3.day)

        booking.getOneWayRadio().check()
        booking.getDepartDate().clear().nextDay(this.DepartMsg.TC3.day)

        const departMsgValues = Object.values(this.DepartMsg.TC3);
        booking.getAllDropdown().each(($el, value) => {
            cy.wrap($el).select(`${departMsgValues[value]}`)
        })

        booking.getBookButton().click()
        booking.getHeaderDepart().contains('DEPART').should('have.text', `${this.DepartMsg.TC3.header}`)
        booking.getDepartCitiesMsg().should('have.text', `${this.DepartMsg.TC3.departCityFrom} to ${this.DepartMsg.TC3.departCityTo}`)
        booking.getDepartDateMsg().should('have.text', departDateMsg)
        booking.getNumberOfPsgMsg().should('have.text', `Number of Passengers: ${this.DepartMsg.TC3.numberOfPasseger}`)
        booking.getPsgMsgDepart().should('have.text', `Passenger 1: ${this.DepartMsg.TC3.passengerInfo}`)
        booking.getCabinClassDepart().should('have.text', `Cabin class: ${this.DepartMsg.TC3.cabinClass}`)



    });

    it('Test Case 04 - Validate the booking for 1 passenger and round trip', function () {


        booking.getRoundTripRadio().check()

        booking.getDepartDate().clear().nextDay(this.DepartMsg.TC4.day)
        booking.getReturnDate().clear().nextMonth(this.DepartMsg.TC4.month)


        const departDateMsg = booking.getDateMsg(this.DepartMsg.TC4.day)
        const returnDateMsg = booking.getMonthMsg(this.DepartMsg.TC4.month)

        const departMsgValues = Object.values(this.DepartMsg.TC4);
        booking.getAllDropdown().each(($el, value) => {
            cy.wrap($el).select(`${departMsgValues[value]}`)
        })

        booking.getBookButton().click()
        booking.getHeaderDepart().should('have.text', `${this.DepartMsg.TC4.headerDepart}`)
        booking.getDepartCitiesMsg().should('have.text', `${this.DepartMsg.TC4.city1} to ${this.DepartMsg.TC4.city2}`)
        booking.getDepartDateMsg().should('have.text', departDateMsg)
        booking.getReturnDateMsg().should('have.text', returnDateMsg)
        booking.getNumberOfPsgMsg().should('have.text', `Number of Passengers: ${this.DepartMsg.TC4.numberOfPasseger}`)
        booking.getPsgMsgDepart().should('have.text', `Passenger 1: ${this.DepartMsg.TC4.passengerInfo}`)
        booking.getCabinClassDepart().should('have.text', `Cabin class: ${this.DepartMsg.TC4.cabinClass}`)
        booking.getHeaderReturn().should('have.text', `${this.DepartMsg.TC4.headerReturn}`)
        booking.getReturnCitiesMsg().should('have.text', `${this.DepartMsg.TC4.city2} to ${this.DepartMsg.TC4.city1}`)




    })

    it('Test Case 05 - Validate the booking for 2 passengers and one way', function () {
        const departMsgValues = Object.values(this.DepartMsg.TC5);
        const departDateMsg = booking.getDateMsg(this.DepartMsg.TC5.day)

        booking.getOneWayRadio().check()
        booking.getDepartDate().clear().nextDay(this.DepartMsg.TC5.day)
        booking.getNumOfPsngrDropDown().select(this.DepartMsg.TC5.numberOfPasseger)



        booking.getAllDropdown().each(($el, value) => {
            cy.wrap($el).select(`${departMsgValues[value]}`)
        })

        booking.getBookButton().click()
        booking.getHeaderDepart().should('have.text', `${this.DepartMsg.TC5.headerDepart}`)
        booking.getDepartCitiesMsg().should('have.text', `${this.DepartMsg.TC5.city1} to ${this.DepartMsg.TC5.city2}`)
        booking.getDepartDateMsg().should('have.text', departDateMsg)
        booking.getNumberOfPsgMsg().should('have.text', `Number of Passengers: ${this.DepartMsg.TC5.numberOfPasseger}`)
        booking.getPsgMsgDepart().should('have.text', `Passenger 1: ${this.DepartMsg.TC5.passengerInfo1}`)
        booking.getPsgMsgDepart2().should('have.text', `Passenger 2: ${this.DepartMsg.TC5.passengerInfo2}`)
        booking.getCabinClassDepart().should('have.text', `Cabin class: ${this.DepartMsg.TC5.cabinClass}`)

    })

})