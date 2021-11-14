
/// <reference types="cypress" />
describe('POST API Unsuccessful registration',()=>{
    it('Unsuccessful registration',()=>{
        let token='QpwL5tke4Pnpja7X4'
        cy.request({
            method:'POST',url:'https://reqres.in/api/resgister',body: {
        
                
                    "email": "peter@klaven"
                
            }
        }).then((res)=>{
            expect(res.status).to.eq(400)
            expect(res.body.data).has.property('email','peter@klaven')
            expect(res.body).to.eq('Missing password')
           

        })
    })

   
})
