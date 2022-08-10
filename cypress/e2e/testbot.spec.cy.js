/// <reference types="cypress" /> 

//antes de cada teste vai fazer essa função
beforeEach(() => {
  
  cy.visit('https://www.twitch.tv/signup')
     
 
 })
 
 it.only('test register in the twitch with verification in email', () => {
     
     cy.get('#signup-username')
     .type('teste500')
 
     cy.get('#password-input')
     .type('P123105@a@454r')
 
     cy.get('#password-input-confirmation')
     .type('P123105@a@454r')
 
     cy.get('.jREsSm > :nth-child(1) > .Layout-sc-nxg1ff-0 > .ScInputBase-sc-1wz0osy-0').as('day')
     .type('1')
 
     cy.get('.fQeqDH > .ScInputBase-sc-1wz0osy-0').as('month')
     .select('Dezembro')
 
     cy.get('.InjectLayout-sc-588ddc-0.birthday-picker__input > .Layout-sc-nxg1ff-0 > .ScInputBase-sc-1wz0osy-0').as('year')
     .type('2001')
 
     cy.get('.ggozbG > .ScCoreButton-sc-1qn4ixc-0').as('changeVerify')
     .click()
 
     cy.get('#email-input')
     .type('brunotestevieira+1@gmail.com')
 
     cy.get(':nth-child(5) > .ScCoreButton-sc-1qn4ixc-0').as('buttonRegister')
     .click()
 
     cy.wait(3000)
 
     cy.get('.bXhxYI > .ScCoreButton-sc-1qn4ixc-0 > .ScCoreButtonLabel-sc-lh1yxp-0 > .Layout-sc-nxg1ff-0').as('buttonRecuseVerify')
     .click()
 
     cy.get('.bXhxYI > .ScCoreButton-sc-1qn4ixc-0')
     .click()
 
     cy.wait(3000)
 
     cy.get('.jBDZEH > .ScCoreButton-sc-1qn4ixc-0').as('buttonSkip')
     .click()
 
         cy.wait(2000)
 
         cy.get('.modal__close-button > .ScCoreButton-sc-1qn4ixc-0 > .ButtonIconFigure-sc-1ttmz5m-0 > .ScIconLayout-sc-1bgeryd-0 > .ScAspectRatio-sc-1sw3lwy-1 > .ScIconSVG-sc-1bgeryd-1').as('exit')
         .click()
     
 });