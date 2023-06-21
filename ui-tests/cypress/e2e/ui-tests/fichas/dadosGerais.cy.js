function navegar() {
  cy.visit('http://localhost:4200/home')
  cy.get('#filtroData').click()
  cy.get('#filtroData').type('2023-05-23')
  cy.get('#filtroData').type('2023-05-23')
  cy.get('#filtroData').type('2023-05-23')
  cy.get('#filtroData').type('2023-05-23')
  cy.get(':nth-child(1) > .nomeData > h3 > a').click()
  cy.get('.btnProximo').click()
  cy.get('.btnProximo').click()
  cy.get('.btnProximo').click()
  cy.get('.btnProximo').click()
}

describe('Cenario de Teste:  Testar a ficha de dados gerais da aplicacao MedVida', () => {
  // Cenários Positivo página ficha de identificacao do paciente
  it('Cenario de Teste: Pesquisar pela data 23/05/2023 e abrir a página de dados gerais', () => {
    navegar()
    cy.url().should('contain', '/home/fichas/identificacao-paciente/dados-atendimento/dados-atendimento-parte2/dados-vitais-paciente/dados-gerais')
  })

  it('Cenario de Teste: Na página de dados gerais voltar para a ficha de dados vitais do paciente', () => {
    navegar()
    cy.get('.btnAnterior').click()
    cy.url().should('contain', '/home/fichas/identificacao-paciente/dados-atendimento/dados-atendimento-parte2/dados-vitais')
  })

  it('Cenario de Teste: Na página de dados gerais voltar para home ao clicar no botão de fechar', () => {
    navegar()
    cy.get('.btnFechar').click()
    cy.url().should('contain', '/home')
  })

  it('Cenario de Teste: Na página de dados gerais passar para a página de perfil', () => {
    navegar()
    cy.get('a > img').click()
    cy.url().should('contain', '/home/perfil')
  })
})