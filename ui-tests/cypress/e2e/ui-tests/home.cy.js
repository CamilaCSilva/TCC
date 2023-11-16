function logar() {
  cy.visit('http://localhost:4200/login')
  cy.get('#cpf').click()
  cy.get('#cpf').type('77777777771')
  cy.get('#senha').click()
  cy.get('#senha').type('nogueirA@23')
  cy.get('.btn').click()
  cy.wait(500)
}

describe('Cenario de Teste:  Testar a página de home da aplicação MedVida', () => {
  // Cenários Positivo página home
  it('Cenario de Teste: Pesquisar uma ficha pela data 23/05/2023', () => {
    logar()
    cy.get('#filtroData').click()
    cy.get('#filtroData').type('2023-05-23')
    cy.wait(500)
    cy.get('.nomeData > p').should('contain.text', '23/05/2023')
  })

  it('Cenario de Teste: Clicar na foto de perfil e ir para a página de perfil', () => {
    logar()
    cy.get('.fotoPerfil > a > img').click()
    cy.url().should('contain','/perfil')
  })

  it('Cenario de Teste: Clicar no icone de sair e ir para a página de login', () => {
    logar()
    cy.get('.exit').click()
    cy.url().should('contain','/' || '/login')
  })

  it('Cenario de Teste: Clicar no icone de mais e ir para a primeira página do formulário', () => {
    logar()
    cy.get('.btn').click()
    cy.url().should('contain','home/formularios/identificacao-paciente-form')
  })
})

