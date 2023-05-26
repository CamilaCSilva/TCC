function cadastrar(nome, area, doc, cpf, unidade, celular, senha){
  cy.visit('http://localhost:4200/cadastro')
  cy.get('#nome').click()
  cy.get('#nome').type(nome)

  cy.get('#areaAtuacao').select(area)

  cy.get('#doc').click()
  cy.get('#doc').type(doc)

  cy.get('#cpf').click()
  cy.get('#cpf').type(cpf)

  cy.get('#unidadeAtendimento').click()
  cy.get('#unidadeAtendimento').type(unidade)

  cy.get('#celular').click()
  cy.get('#celular').type(celular)

  cy.get('#senha').click()
  cy.get('#senha').type(senha)

  cy.get('#confirmaSenha').click()
  cy.get('#confirmaSenha').type(senha)

  cy.get('.botao').click()
}

describe('Cenario de Teste:  Testar a página de cadastro da aplicação MedVida', () => {
  // Cenários Positivos de Cadastro
  it('Cenario de Teste: Fazer o cadastro com dados válidos e ir para a página de login', () => {
    cadastrar('Marcela Dias', 'COREN', '123456', '123.456.789-10', 'HMAC', '35 98485-3455', 'Testando@1')
    cy.url().should('contain','/')
  })

  it('Cenario de Teste: Fazer o cadastro cpf em um formato diferente', () => {
    cadastrar('Marcela Dias', 'COREN', '123456', '12345678910', 'HMAC', '35 98485-3455', 'Testando@1')
    cy.url().should('contain','/')
  })

  // Cenários Negativos de Cadastro
  it('Cenario de Teste: Fazer o cadastro com o nome menor que 6 digitos', () => {
    cadastrar('Marco', 'COREN', '123456', '123.456.789-10', 'HMAC', '35 98485-3455', 'Testando@1')
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Nome incompleto')
    })
  })

  it('Cenario de Teste: Fazer o cadastro com o cpf menor que 11 digitos', () => {
    cadastrar('Marcela Dias', 'COREN', '123456', '123.456.789-1', 'HMAC', '35 98485-3455', 'Testando@1')
    cy.on('window:alert', (str) => {
      expect(str).to.equal('CPF incompleto')
    })
  })

  it('Cenario de Teste: Fazer o cadastro com o celular em formato inválido', () => {
    cadastrar('Marcela Dias', 'COREN', '123456', '123.456.789-10', 'HMAC', '35-98485-3455', 'Testando@1')
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Celular incorreto')
    })
  })

  it('Cenario de Teste: Fazer o cadastro com a senha menor que 8 digitos', () => {
    cadastrar('Marcela Dias', 'COREN', '123456', '123.456.789-10', 'HMAC', '35 98485-3455', 'Test@1')
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Senha incompleta')
    })
  })

  // Cenários de mudança de página
  it('Cenario de Teste: Clicar no botão de cadastro e ir para a tela de cadastro', () => {
    cy.visit('http://localhost:4200/cadastro')
    cy.get('#login').click()
    cy.url().should('contain','/')
  })

  it('Cenario de Teste: Clicar no botão de mais informações e ir para a tela de mais informações', () => {
    cy.visit('http://localhost:4200/cadastro')
    cy.get('#mais-infos').click()
    cy.url().should('contain','/mais-infos')
  })
})