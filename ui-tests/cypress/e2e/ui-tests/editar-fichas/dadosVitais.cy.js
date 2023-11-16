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
  cy.get('#filtroData').type('2023-05-23')
  cy.get('#editar').click()
  cy.get('.btnProximo').click()
  cy.get('.btnProximo').click()
  cy.get('.btnProximo').click()
}

describe('Cenario de Teste:  Testar a edição da ficha de dados vitais da aplicacao MedVida', () => {
  // Cenários Positivo página ficha de dados de atendiment
  it('Cenario de Teste: Pesquisar pela data 23/05/2023 e abrir a página de editar dados vitais', () => {
    navegar()
    cy.url().should('contain', '/home/formularios/identificacao-paciente-form/dados-atendimento-form/dados-atendimento-parte2-form/dados-vitais-paciente-form')
  })

  it.skip('Cenario de Teste: Pesquisar pela data 23/05/2023, abrir a página de editar dados vitais e conferir os dados', () => {
    navegar()
    cy.get('#pressao').should('contain.text', '189')
    cy.get('#oxigenacao').should('contain.text', '151')
    cy.get('#temperatura').should('contain.text', '36.80')
    cy.get('#frequenciaRitmica').should('contain.text', '89')
  })

  it('Cenario de Teste: Pesquisar pela data 23/05/2023, abrir a página de editar dados vitais e voltar para home', () => {
    navegar()
    cy.get('.btnAnterior').click()
    cy.url().should('contain', '/home/formularios/identificacao-paciente-form/dados-atendimento-form/dados-atendimento-parte2-form')
  })

  it('Cenario de Teste: Pesquisar pela data 23/05/2023, abrir a página de editar dados vitais e seguir para próxima página', () => {
    navegar()
    cy.get('.btnProximo').click()
    cy.url().should('contain', '/home/formularios/identificacao-paciente-form/dados-atendimento-form/dados-atendimento-parte2-form/dados-vitais-paciente-form/dados-gerais-form')
  })
});