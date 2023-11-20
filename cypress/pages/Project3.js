class Booking {

    labels() {
        return cy.get('.label')
    }

    getOneWayRadio() {
        return cy.get('.mr-1[value="One way"]')
    }

    getRoundTripRadio() {
        return cy.get('.mr-1[value="Round trip"]')
    }

    getCabinClassDropDown() {
        return cy.get('.label').contains('Cabin Class').next().find('select')
    }

    getFromDropDown() {
        return cy.get('.label').contains('From').next().find('select')
    }
    getToDropDown() {
        return cy.get('.label').contains('To').next().find('select')
    }
    getDepartDate() {
        return cy.get('.label').contains('Depart').next().find('input')
    }
    getReturnDate() {
        return cy.get('.label').contains('Return').next().find('input')
    }

    getNumOfPsngrDropDown() {
        return cy.get('.label').contains('Number of passengers').next().find('select')
    }

    getPsngr1DropDown() {
        return cy.get('.label').contains('Passenger 1').next().find('select')
    }
   

    getBookButton() {
        return cy.get('.Button_c_button__TmkRS')
    }

    getAllDropdown() {

        return cy.get('.label').nextAll().find('select')

    }

    getNumAndPass1() {
        return cy.get('.Projects_container__04CSc>:nth-child(7), .Projects_container__04CSc>:nth-child(8)').find('select')
    }

    getHeaderDepart() {
        return cy.get('.is-underlined').contains('DEPART')
    }

    getDepartCitiesMsg() {
        return cy.get('.is-underlined').contains('DEPART').next()
    }

    getDepartDateMsg() {
        return cy.get('.is-italic').next()
    }

    getNumberOfPsgMsg() {
        return cy.get('.has-text-black :first-child')
    }

    getPsgMsgDepart(){
        return cy.get('.has-text-black :nth-child(2)')
    }
    getPsgMsgDepart2(){
        return cy.get('.has-text-black :nth-child(3)')
    }
    getCabinClassDepart(){
        return  cy.get('.has-text-black :last-child')
    }

    getHeaderReturn() {
        return cy.get('.is-underlined').contains('RETURN')
    }

    getReturnCitiesMsg() {
        return cy.get('.is-underlined').contains('RETURN').next()
    }

    getDepartDateMsg() {
        return cy.get('.is-underlined').contains('DEPART').siblings('p')
    }
    getReturnDateMsg() {
        return cy.get('.ml > p')
    }

    getDateMsg(value){
        const today = new Date();
        const nextweekMessage = new Date(today.getFullYear(), today.getMonth(), today.getDate() + value).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })
        return nextweekMessage.toString().replaceAll(",", "")
       
    }

    getMonthMsg(value){
        const today = new Date();
        const nextweekMessage = new Date(today.getFullYear(), today.getMonth() + value, today.getDate()).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })
        return nextweekMessage.toString().replaceAll(",", "")
       
    }


     







}
export default Booking