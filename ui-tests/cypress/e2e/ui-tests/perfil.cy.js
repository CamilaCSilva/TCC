function visitperfil(){
  cy.visit('http://localhost:4200/')
  cy.get('#cpf').click()
  cy.get('#cpf').type("131.680.356-29")
  cy.get('#senha').click()
  cy.get('#senha').type("Matheus123@")
  cy.get('.btn').click()
  cy.get('.fotoPerfil > a > img').click()

}

describe('Cenario de Teste:  Testar a página de perfil da aplicação MedVida', () => {
  // Cenários Positivos de Cadastro
  it('Cenario de Teste: Fazer login, passar pela home e acessar o perfil na aplicação MedVida', () => {
    visitperfil()
    cy.url().should('contain','home/perfil')
  })

  it('Cenario de Teste: Verificando o nome do usuario na aba perfil da aplicação MedVida', () => {
    visitperfil()
    cy.get('#nome').should('contain.text', 'Matheus Chagas da Silva')
  })

  it('Cenario de Teste: Verificando a área de atuação do usuario na aba perfil da aplicação MedVida', () => {
    visitperfil()
    cy.get('#campo_escolha').should('contain.text', 'Médico(a)')
  })

  it('Cenario de Teste: Verificando o numero do documento do usuario na aba perfil da aplicação MedVida', () => {
    visitperfil()
    cy.get('#doc').should('contain.text', '759143')
  })

  it('Cenario de Teste: Verificando o numero do CPF do usuario na aba perfil da aplicação MedVida', () => {
    visitperfil()
    cy.get('#cpf').should('contain.text', '131.680.356-29')
  })

  it('Cenario de Teste: Verificando a unidade de atendimento do usuario na aba perfil da aplicação MedVida', () => {
    visitperfil()
    cy.get('#unidadeAtendimento').should('contain.text', 'HAMC')
  })

  it('Cenario de Teste: Verificando o numero de celular do usuario na aba perfil da aplicação MedVida', () => {
    visitperfil()
    cy.get('#celular').should('contain.text', '(35) 99262-1257')
  })

  // Cenários de mudança de página
  it('Cenario de Teste: Clicar no icone de home e ir para a página de home', () => {
    visitperfil()
    cy.get('.logo').click()
    cy.url().should('contain','/home')
  })
  
  it('Cenario de Teste: Clicar no icone de sair e ir para a página de login', () => {
    visitperfil()
    cy.get('.exit').click()
    cy.url().should('contain','/' || '/login')
  })
})