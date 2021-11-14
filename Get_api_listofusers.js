/// <reference types="cypress" />
describe('get API list of users',()=>{
    it('get list of users',()=>{

        cy.request({
            method:'GET',url:'https://reqres.in/api/users'
        }).then((res)=>{
            expect(res.status).to.eq(200)
           cy.log(JSON.stringify(res))
        })
    })
})
