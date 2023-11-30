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
  cy.get('#editar').click()
  cy.get('.btnProximo').click()
  cy.get('.btnProximo').click()
  cy.get('.btnProximo').click()
  cy.get('.btnProximo').click()
}

describe('Cenario de Teste:  Testar a edição da ficha de dados gerais da aplicacao MedVida', () => {
  // Cenários Positivo página ficha de dados de atendiment
  it('Cenario de Teste: Pesquisar pela data 23/05/2023 e abrir a página de editar dados gerais', () => {
    navegar()
    cy.url().should('contain', '/home/formularios/identificacao-paciente-form/dados-atendimento-form/dados-atendimento-parte2-form/dados-vitais-paciente-form/dados-gerais-form')
  })

  it.skip('Cenario de Teste: Pesquisar pela data 23/05/2023, abrir a página de editar dados gerais e conferir os dados', () => {
    navegar()
    cy.get('.nomeParamedico > p').should('contain.text', 'Yasmin Nogueira Silva')
    cy.get('.docTrabalho > p').should('contain.text', '66611')
    cy.get('.dataEnd > :nth-child(2)').should('contain.text', '23 de mai. de 2023 09:03:46')
    cy.get('#localizacao').should('contain.text', 'Rua Antonio XXX, 58')
  })

  it('Cenario de Teste: Pesquisar pela data 23/05/2023, abrir a página de editar dados gerais e voltar para home', () => {
    navegar()
    cy.get('.btnAnterior').click()
    cy.url().should('contain', '/home/formularios/identificacao-paciente-form/dados-atendimento-form/dados-atendimento-parte2-form/dados-vitais-paciente-form')
  })

  it('Cenario de Teste: Pesquisar pela data 23/05/2023, abrir a página de editar dados gerais, apertar em salvar edições e abrir o modal', () => {
    navegar()
    cy.get('.btnSalvarEdicao').click()
    cy.get('.modal').should('be.visible')
  })

  it('Cenario de Teste: Pesquisar pela data 23/05/2023, abrir a página de editar dados gerais, apertar em salvar edições, abrir o modal e fechá-lo', () => {
    navegar()
    cy.get('.btnSalvarEdicao').click()
    cy.get('.modal').should('be.visible')
    cy.get('.btnCancelar').click()
    cy.get('.modal').should('not.be.visible')
  })
});