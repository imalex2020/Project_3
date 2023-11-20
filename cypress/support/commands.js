// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })

Cypress.Commands.add('nextDay', { prevSubject: true }, (subject, value) => {
    const today = new Date();
    const nextDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + value);
    const formattedDate = nextDate.toLocaleDateString('en-US');
    cy.wrap(subject).type(formattedDate);
});

Cypress.Commands.add('nextMonth', { prevSubject: true }, (subject, value) => {
    const today = new Date();
    const nextDate = new Date(today.getFullYear(), today.getMonth() + value, today.getDate());
    const formattedDate = nextDate.toLocaleDateString('en-US');
    cy.wrap(subject).type(formattedDate);
});



       






//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })




