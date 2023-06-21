function navegar() {
  cy.visit('http://localhost:4200/home')
  cy.get('#filtroData').click()
  cy.get('#filtroData').type('2023-05-23')
  cy.get('#filtroData').type('2023-05-23')
  cy.get(':nth-child(1) > .nomeData > h3 > a').click()
  cy.get('.btnProximo').click()
}

describe('Cenario de Teste:  Testar a ficha de dados para atendimento 1 da aplicacao MedVida', () => {
  // Cenários Positivo página ficha de identificacao do paciente
  it('Cenario de Teste: Pesquisar pela data 23/05/2023 e abrir a página de dados para atendimento', () => {
    navegar()
    cy.url().should('contain', '/home/fichas/identificacao-paciente/dados-atendimento')
  })

  it('Cenario de Teste: Na página de dados para atendimento voltar para a ficha de identificação do paciente', () => {
    navegar()
    cy.get('.btnAnterior').click()
    cy.url().should('contain', '/home/fichas/identificacao-paciente')
  })

  it('Cenario de Teste: Na página de dados para atendimento passar para a ficha de dados de atendimento parte2', () => {
    navegar()
    cy.get('.btnProximo').click()
    cy.url().should('contain', '/home/fichas/identificacao-paciente/dados-atendimento/dados-atendimento-parte2')
  })

  it('Cenario de Teste: Na página de dados para atendimento passar para a página de perfil', () => {
    navegar()
    cy.get('a > img').click()
    cy.url().should('contain', '/home/perfil')
  })
})