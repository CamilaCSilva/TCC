describe('Cenario de Teste:  Testar a página de home da aplicação MedVida', () => {
  // Cenários Positivo página home
  it('Cenario de Teste: Pesquisar uma ficha pela data 23/05/2023', () => {
    cy.visit('http://localhost:4200/home')
    cy.get('#filtroData').click()
    cy.get('#filtroData').type('2023-05-23')
    cy.get('.nomeData > p').should('contain.text', '23/05/2023')
  })

  it('Cenario de Teste: Clicar na foto de perfil e ir para a página de perfil', () => {
    cy.visit('http://localhost:4200/home')
    cy.get('.fotoPerfil > a > img').click()
    cy.url().should('contain','/perfil')
  })

  it('Cenario de Teste: Clicar no icone de sair e ir para a página de login', () => {
    cy.visit('http://localhost:4200/home')
    cy.get('.exit').click()
    cy.url().should('contain','/' || '/login')
  })

  it('Cenario de Teste: Clicar no icone de mais e ir para a primeira página do formulário', () => {
    cy.visit('http://localhost:4200/home')
    cy.get('.btn').click()
    cy.url().should('contain','home/formularios/identificacao-paciente-form')
  })
})

