function login(username, pass){
  cy.visit('http://localhost:4200/')
  cy.get('#cpf').click()
  cy.get('#cpf').type(username)
  cy.get('#senha').click()
  cy.get('#senha').type(pass)
  cy.get('.btn').click()
}

describe('Cenario de Teste:  Testar a página de login da aplicação MedVida', () => {
  // Cenários Positivos de Login
  it('Cenario de Teste: Fazer o login com dados certos e ir para a página de home', () => {
    login('123.456.789-10', 'Testando@1')
    cy.url().should('contain','/home')
  })

  it('Cenario de Teste: Fazer o login com o cpf em outro formato e ir para a página de home', () => {
    login('12345678910', 'Testando@1')
    cy.url().should('contain','/home')
  })

  // Cenários Negativos de Login
  it('Cenario de Teste: Fazer o login com cpf incompleto e dar um alert escrito Cpf Incompleto', () => {
    login('123.456.789-1', 'Testando@1')
    cy.on('window:alert', (str) =>{
      expect(str).to.equal('CPF incompleto')
    })
  })

  it('Cenario de Teste: Fazer o login com senha menor que 8 caracteres e dar um alert escrito Cpf Incompleto', () => {
    login('123.456.789-10', 'Test@1')
    cy.on('window:alert', (str) =>{
      expect(str).to.equal('Senha incompleta')
    })
  })

  it('Cenario de Teste: Fazer o login com senha sem letra maiuscula e dar um alert escrito Cpf Incompleto', () => {
    login('123.456.789-10', 'testando@1')
    cy.on('window:alert', (str) =>{
      expect(str).to.equal('Senha incompleta')
    })
  })

  it('Cenario de Teste: Fazer o login com senha sem numero e dar um alert escrito Cpf Incompleto', () => {
    login('123.456.789-10', 'Testando@')
    cy.on('window:alert', (str) =>{
      expect(str).to.equal('Senha incompleta')
    })
  })

  it('Cenario de Teste: Fazer o login com senha sem caracter especial e dar um alert escrito Cpf Incompleto', () => {
    login('123.456.789-10', 'Testando1')
    cy.on('window:alert', (str) =>{
      expect(str).to.equal('Senha incompleta')
    })
  })

  // Cenários de mudança de página
  it('Cenario de Teste: Clicar no botão de cadastro e ir para a tela de cadastro', () => {
    cy.visit('http://localhost:4200/')
    cy.get('#cadastro').click()
    cy.url().should('contain','/cadastro')
  })

  it('Cenario de Teste: Clicar no botão de mais informações e ir para a tela de mais informações', () => {
    cy.visit('http://localhost:4200/')
    cy.get('#mais-infos').click()
    cy.url().should('contain','/mais-infos')
  })
})