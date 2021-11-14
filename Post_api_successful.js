
/// <reference types="cypress" />
describe('POST API Successful registration',()=>{
    it('Successful registration',()=>{
        let token='QpwL5tke4Pnpja7X4'
        cy.request({
            method:'POST',url:'https://reqres.in/api/resgister',body: {
        
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            }
        }
        
    ).then((res)=>{
            expect(res.status).to.eq(201)
            expect(res.body.data).has.property('email','eve.holt@reqres.in')
            expect(res.body.data).has.property('password','cityslicka')
        })
    })

   
})
