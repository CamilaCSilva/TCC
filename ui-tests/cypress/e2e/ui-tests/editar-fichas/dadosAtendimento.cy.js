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
}

describe('Cenario de Teste:  Testar a edição da ficha de dados de atendimento da aplicacao MedVida', () => {
  // Cenários Positivo página ficha de dados de atendiment
  it('Cenario de Teste: Pesquisar pela data 23/05/2023 e abrir a página de editar dados de atendimento', () => {
    navegar()
    cy.url().should('contain', '/home/formularios/identificacao-paciente-form/dados-atendimento-form')
  })

  it.skip('Cenario de Teste: Pesquisar pela data 23/05/2023, abrir a página de editar dados de atendimento e conferir os dados', () => {
    navegar()
    cy.get('#idade').should('contain.text', '71')
    cy.get('#tipoSangue').should('contain.text', 'AB-')
    ccy.get('.opcoes > :nth-child(1) > label').should('contain.text', 'F')
    cy.get('#alergias').should('contain.text', 'Alergia a aspirina')
    cy.get('#medicacoesUsadas').should('contain.text', 'Sem Medicamentos')
    cy.get('#historicoDoencas').should('contain.text', 'Sem doenças')
  })

  it('Cenario de Teste: Pesquisar pela data 23/05/2023, abrir a página de editar dados de atendimento e voltar para home', () => {
    navegar()
    cy.get('.btnAnterior').click()
    cy.url().should('contain', '/home/formularios/identificacao-paciente-form')
  })

  it('Cenario de Teste: Pesquisar pela data 23/05/2023, abrir a página de editar dados de atendimento e seguir para próxima página', () => {
    navegar()
    cy.get('.btnProximo').click()
    cy.url().should('contain', '/home/formularios/identificacao-paciente-form/dados-atendimento-form/dados-atendimento-parte2-form')
  })
});