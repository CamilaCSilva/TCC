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
  cy.get('#filtroData').type('2023-05-23')
  cy.get('#visualizar').click()
  cy.get('.btnProximo').click()
  cy.get('.btnProximo').click()
  cy.get('.btnProximo').click()
}

describe('Cenario de Teste:  Testar a ficha de dados vitais da aplicacao MedVida', () => {
  // Cenários Positivo página ficha de identificacao do paciente
  it('Cenario de Teste: Pesquisar pela data 23/05/2023 e abrir a página de dados vitais', () => {
    navegar()
    cy.url().should('contain', '/home/fichas/identificacao-paciente/dados-atendimento/dados-atendimento-parte2/dados-vitais-paciente')
  })

  it('Cenario de Teste: Na página de dados vitais do paciente voltar para a ficha de dados de atendimento 2', () => {
    navegar()
    cy.get('.btnAnterior').click()
    cy.url().should('contain', '/home/fichas/identificacao-paciente/dados-atendimento/dados-atendimento-parte2')
  })

  it('Cenario de Teste: Na página de dados vitais do paciente passar para a ficha de dados gerais', () => {
    navegar()
    cy.get('.btnProximo').click()
    cy.url().should('contain', '/home/fichas/identificacao-paciente/dados-atendimento/dados-atendimento-parte2/dados-vitais-paciente/dados-gerais')
  })

  it('Cenario de Teste: Na página de dados vitais do paciente passar para a página de perfil', () => {
    navegar()
    cy.get('a > img').click()
    cy.url().should('contain', '/home/perfil')
  })

  it('Cenario de Teste: Na página de dados vitais do paciente conferir pressão sanguínea o usuário', () => {
    navegar()
    cy.get('.pressao > p').should('contain', '189 mmHg')
  })

  it('Cenario de Teste: Na página de dados vitais do paciente conferir oxigenação o usuário', () => {
    navegar()
    cy.get('.oxigenacao > p').should('contain', '151 %')
  })

  it('Cenario de Teste: Na página de dados vitais do paciente conferir temperatura o usuário', () => {
    navegar()
    cy.get('.temperatura > p').should('contain', '36.80 °C')
  })

  it('Cenario de Teste: Na página de dados vitais do paciente conferir frequência ritmíca o usuário', () => {
    navegar()
    cy.get('.frequenciaRitmica > p').should('contain', '89 ppm')
  })
})