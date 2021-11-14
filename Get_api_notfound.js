/// <reference types="cypress" />
describe('get API Single user not found',()=>{
    it('user not found',()=>{

        cy.request({
            method:'GET',url:'https://reqres.in/api/users/23'
       
        
        }).then((res)=>{
            expect(res.status).to.eq(404)
            expect(rs.body).to.eq('{}')

        })
    })

   
})
