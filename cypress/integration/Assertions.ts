

it('asserions', function() {
cy.visit('https://example.cypress.io/')

cy.contains('get').click()

//implicit assertions
cy.get('#query-btn')
    .should('contain', 'Button')
    .should('have.class', 'query-btn')
    .should('be.visible')
    .should('be.enabled')
    
    cy.get('#query-btn').invoke('attr', 'id')
        .should('equal', 'query-btn')

        cy.get('#query-btn')
            .should('contain', 'Button')
            .and('have.class', 'query-btn')

//explicit assertions
//when the result is success, there won't be any logs; 
//however, when there is a failure, it will be displayed in the logs

//expect
expect(true).to.be.true

let payment = 'Cash'
expect(payment).to.be.equal('Cash')


//assert
assert.equal(10, 10, 'not matched')
assert.equal('Ahmed', 'Ahmed', 'first not last name')


   
            
})