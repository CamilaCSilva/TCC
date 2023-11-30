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
  cy.get('#visualizar').click()
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

  it('Cenario de Teste: Na página de dados para atendimento 1 conferir a idade do usuário', () => {
    navegar()
    cy.get('.idade > p').should('contain', '71')
  })

  it('Cenario de Teste: Na página de dados para atendimento 1 conferir o tipo sanguíneo do usuário', () => {
    navegar()
    cy.get('.tipoSangue > p').should('contain', 'AB-')
  })

  it('Cenario de Teste: Na página de dados para atendimento 1 conferir o sexo do usuário', () => {
    navegar()
    cy.get('.sexo > p').should('contain', 'F')
  })

  it('Cenario de Teste: Na página de dados para atendimento 1 conferir a alergia do usuário', () => {
    navegar()
    cy.get('.alergias > p').should('contain', 'Alergia a aspirina')
  })

  it('Cenario de Teste: Na página de dados para atendimento 1 conferir as medicações utilizadas do usuário', () => {
    navegar()
    cy.get('.medicacoesUsadas > p').should('contain', 'Sem Medicamentos')
  })

  it('Cenario de Teste: Na página de dados para atendimento 1 conferir o histórico de doenças do usuário', () => {
    navegar()
    cy.get('.historicoDoencas > p').should('contain', 'Sem doenças')
  })
})