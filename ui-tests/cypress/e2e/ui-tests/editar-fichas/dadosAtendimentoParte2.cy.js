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
}

describe('Cenario de Teste:  Testar a edição da ficha de dados de atendimento parte 2 parte 2 da aplicacao MedVida', () => {
  // Cenários Positivo página ficha de dados de atendiment
  it('Cenario de Teste: Pesquisar pela data 23/05/2023 e abrir a página de editar dados de atendimento parte 2', () => {
    navegar()
    cy.url().should('contain', '/home/formularios/identificacao-paciente-form/dados-atendimento-form/dados-atendimento-parte2-form')
  })

  it.skip('Cenario de Teste: Pesquisar pela data 23/05/2023, abrir a página de editar dados de atendimento parte 2 e conferir os dados', () => {
    navegar()
    cy.get('#sintomas').should('contain.text', 'Braço quebrada')
    cy.get('#nivelDor').should('contain.text', '5')
    cy.get('#prioridade').should('contain.text', 'Não Urgente')
    cy.get('#observacoes').should('contain.text', 'Sem tala')
  })

  it('Cenario de Teste: Pesquisar pela data 23/05/2023, abrir a página de editar dados de atendimento parte 2 e voltar para home', () => {
    navegar()
    cy.get('.btnAnterior').click()
    cy.url().should('contain', '/home/formularios/identificacao-paciente-form/dados-atendimento-form')
  })

  it('Cenario de Teste: Pesquisar pela data 23/05/2023, abrir a página de editar dados de atendimento parte 2 e seguir para próxima página', () => {
    navegar()
    cy.get('.btnProximo').click()
    cy.url().should('contain', '/home/formularios/identificacao-paciente-form/dados-atendimento-form/dados-atendimento-parte2-form/dados-vitais-paciente-form')
  })
});