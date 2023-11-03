describe('Homepage Netflix', () => {

beforeEach(()=>{
  cy.visit('https://www.netflix.com/ar/')
  cy.wait (500)
})
context("Seccion inicial",()=>{
  it('Verificar titulo de pagina', () => {
    cy.get("[data-uia='nmhp-card-hero-text-title']").contains("Películas y series ilimitadas y mucho más")
  })

  it('verify list of benefits', () => {
    cy.get("h2").eq(0).contains("Disfruta en tu TV")
    cy.get("h2").eq(1).contains("Descarga tus series para verlas offline")
    cy.get("h2").eq(2).contains("Disfruta donde quieras")
    cy.get("h2").eq(3).contains("Crea perfiles para niños")

  })
})
context("Preguntas frecuentes",()=>{

  it("Ir a preguntas frecuentes", ()=>{
    cy.get("[data-layout='container']").find("a").contains("Preguntas frecuentes").click()
    cy.location("pathname").should("equal", "/es-es/node/412")
  })

  it("Centro de ayuda", ()=>{
    cy.get("[data-layout='container']").find("a").contains("Centro de ayuda").click()
    cy.location("pathname").should("equal", "/es-es/")

})

}) 
})
