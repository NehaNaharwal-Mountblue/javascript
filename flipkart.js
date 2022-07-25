///  <reference types = "cypress"/>

context('Test Flipkart', () => {
    beforeEach(() => {
        cy.visit('https://www.flipkart.com/')
    })

    it('login test', function () {

        cy.get('._1_3w1N').click()
        cy.get('._14Me7y').click()
        cy.get('._2IX_2-').type("9717224363")
        cy.get('._3AWRsL').click()
        cy.get(':nth-child(2) > ._2IX_2-').type("abc")
        cy.get('._1D1L_j > ._2KpZ6l').click()


    })

    it('search product', function () {
        cy.get('._3704LK').type("mobile")
        cy.get('.L0Z3Pu > svg').click()
    })

    it.only('mouse event', function () {
        cy.get('.LfkXVL').scrollIntoView({duration:2000})
        cy.get('._37M3Pb').scrollIntoView({duration:1000})
    })
    
    it('add to cart page', function(){
        cy.get('._3704LK').type("kurti")
        cy.get('.L0Z3Pu').click()
        cy.get('[data-id="KTAGAPSMFGXJWXNB"] > ._1xHGtK > ._2B099V').click()

    })

/*     it('end to end functionality of buy product', function(){

    }) */
})