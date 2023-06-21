function maisinfos(){
  cy.visit('http://localhost:4200/')
  cy.get('#mais-infos').click()

}

describe('Cenario de Teste:  Testar a página de mais infos da aplicação MedVida', () => {
  // Cenários Positivos de Cadastro
  it('Cenario de Teste: Ir para a tela de mais infos', () => {
    maisinfos()
    cy.url().should('contain','/mais-infos')
  })

  it('Cenario de Teste: Ir para a tela cadastro a partir da tela de mais infos', () => {
    maisinfos()
    cy.get('#cadastro').click()
    cy.url().should('contain','/cadastro')
  })

  it('Cenario de Teste: Ir para a tela login a partir da tela de mais infos', () => {
    maisinfos()
    cy.get('#login').click()
    cy.url().should('contain','/login')
  })

  it('Cenario de Teste: Verificando o nome do usuario na aba perfil da aplicação MedVida', () => {
    maisinfos()
    cy.get('#site').should('contain.text', 'www.maisInfos.com')
  })

  it('Cenario de Teste: Verificando a área de atuação do usuario na aba perfil da aplicação MedVida', () => {
    maisinfos()
    cy.get('#contato').should('contain.text', '(22)91234-5678')
  })
})