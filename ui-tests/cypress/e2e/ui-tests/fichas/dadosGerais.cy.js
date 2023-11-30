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

  it('Cenario de Teste: Na página de dados gerais conferir o nome do paramedico que atendeu o usuário', () => {
    navegar()
    cy.get('.nomeParamedico > p').should('contain', 'Isadora Nogueira')
  })

  it('Cenario de Teste: Na página de dados gerais conferir o documento de trabalho do paramedico que atendeu o usuário', () => {
    navegar()
    cy.get('.docTrabalho > p').should('contain', '78967')
  })

  it('Cenario de Teste: Na página de dados gerais conferir a data e hora que o usuário foi socorrido', () => {
    navegar()
    cy.get('.dataEnd > :nth-child(1)').should('contain', '23 de mai. de 2023 09:03:46')
  })

  it('Cenario de Teste: Na página de dados gerais conferir o local que o usuário foi socorrido', () => {
    navegar()
    cy.get('.dataEnd > :nth-child(2)').should('contain', 'Rua Antonio XXX, 58')
  })
})