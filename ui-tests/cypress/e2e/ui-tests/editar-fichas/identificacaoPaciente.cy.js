function logar() {
  cy.visit('http://localhost:4200/login')
  cy.get('#cpf').click()
  cy.get('#cpf').type('77777777771')
  cy.get('#senha').click()
  cy.get('#senha').type('nogueirA@23')
  cy.get('.btn').click()
  cy.wait(500)
}

function navegar() {
  logar()
  cy.get('#filtroData').click()
  cy.get('#filtroData').type('2023-05-23')
  cy.get('#filtroData').type('2023-05-23')
  cy.get('#editar').click()
}

describe('Cenario de Teste:  Testar a edição da ficha de identificacao do paciente da aplicacao MedVida', () => {
  // Cenários Positivo página ficha de identificacao do paciente
  it('Cenario de Teste: Pesquisar pela data 23/05/2023 e abrir a página de editar identificação do paciente', () => {
    navegar()
    cy.url().should('contain', '/home/formularios/identificacao-paciente-form')
  })

  it.skip('Cenario de Teste: Pesquisar pela data 23/05/2023, abrir a página de editar identificação do paciente e conferir os dados', () => {
    navegar()
    cy.get('#nome').should('contain.text', 'Antonio Olavo Fernandes')
    cy.get('#cpf').should('contain.text', '33322222228')
    cy.get('#celular').should('contain.text', '35991234567')
  })

  it('Cenario de Teste: Pesquisar pela data 23/05/2023, abrir a página de editar identificação do paciente e voltar para home', () => {
    navegar()
    cy.get('.btnVoltar').click()
    cy.url().should('contain', '/home')
  })

  it('Cenario de Teste: Pesquisar pela data 23/05/2023, abrir a página de editar identificação do paciente e seguir para próxima página', () => {
    navegar()
    cy.get('.btnProximo').click()
    cy.url().should('contain', '/home/formularios/identificacao-paciente-form/dados-atendimento-form')
  })
});