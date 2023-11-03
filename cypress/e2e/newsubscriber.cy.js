describe("New subcriber", () =>{
    
    beforeEach(()=>{
       cy.visit('https://www.netflix.com/ar/') 
       cy.wait(500)
    })

    it("Ingresar correo valido para registrase", ()=>{
        cy.get("[autocomplete='email']").eq(0).type("daalmjosea@gmail.com")
        cy.get("[role='button']").eq(1).click()
        cy.get("[data-uia='login-page-title']").contains("Inicia sesión")
        cy.get("[type='password']").type("daaljose1988")
        cy.get("[class='btn login-button btn-submit btn-small']").click()
        cy.get("[class='profile-gate-label']").should("exist")    
    })  

    it("Ingresar correo valido para registrase", ()=>{
        cy.get("[autocomplete='email']").eq(0).type("pepito123")
        cy.get("[role='button']").eq(1).click()
        cy.wait(2000)
        cy.get("[data-uia='field-email+message']").contains("Escribe una dirección de email válida.")

    })
})