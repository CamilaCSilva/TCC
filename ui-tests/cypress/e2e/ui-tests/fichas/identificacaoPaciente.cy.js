function navegar() {
  cy.visit('http://localhost:4200/home')
  cy.get('#filtroData').click()
  cy.get('#filtroData').type('2023-05-23')
  cy.get('#filtroData').type('2023-05-23')
  cy.get(':nth-child(1) > .nomeData > h3 > a').click()
}

describe('Cenario de Teste:  Testar a ficha de identificacao do paciente da aplicacao MedVida', () => {
  // Cenários Positivo página ficha de identificacao do paciente
  it('Cenario de Teste: Pesquisar pela data 23/05/2023 e abrir a página de identificação do paciente', () => {
    navegar()
    cy.url().should('contain', '/home/fichas/identificacao-paciente')
  })

  it('Cenario de Teste: Na página de identificação do paciente voltar para a home', () => {
    navegar()
    cy.get('.btnVoltar').click()
    cy.url().should('contain', '/home')
  })

  it('Cenario de Teste: Na página de identificação do paciente passar para a ficha de dados de atendimento 1', () => {
    navegar()
    cy.get('.btnProximo').click()
    cy.url().should('contain', '/home/fichas/identificacao-paciente/dados-atendimento')
  })

  it('Cenario de Teste: Na página de identificação do paciente passar para a página de perfil', () => {
    navegar()
    cy.get('a > img').click()
    cy.url().should('contain', '/home/perfil')
  })

  it('Cenario de Teste: Na página de identificação do paciente conferir se o nome do usuário', () => {
    navegar()
    cy.get('.nomeCompleto > p').should('contain', 'Amanda Silva')
  })
})