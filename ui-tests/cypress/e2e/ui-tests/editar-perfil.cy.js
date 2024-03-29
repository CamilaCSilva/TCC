function visitperfil(){
  cy.visit('http://localhost:4200/')
  cy.get('#cpf').click()
  cy.get('#cpf').type('131.680.356-29')
  cy.get('#senha').click()
  cy.get('#senha').type('Matheus123@')
  cy.get('.btn').click()
  cy.wait(500)
  cy.get('.fotoPerfil > a > img').click()
  cy.get('.btnEditar').click()
}

function limparCampo(campo, valor) {
  visitperfil()
  cy.get(campo).clear()
  cy.get(campo).click()
  cy.get(campo).type(valor)
  cy.get('#senha').click()
  cy.get('#senha').type('Matheus123@')
  cy.get('.btnSalvar').click()
}

function preencherCampo(campo, valor) {
  cy.get(campo).clear()
  cy.get(campo).click()
  cy.get(campo).type(valor)
  cy.get('#senha').click()
  cy.get('#senha').type('Matheus123@')
  cy.get('.btnSalvar').click()
}

describe('Cenario de Teste:  Testar a página de editar perfil da aplicação MedVida', () => {
  // Verificando a rota até o editar perfil
  it('Cenario de Teste: Fazer login, passar pela home, passar pelo perfil e acessar editar perfil na aplicação MedVida', () => {
    visitperfil()
    cy.url().should('contain','/home/perfil/editar-perfil')
  })

  //verificando todos os dados
  it('Cenario de Teste: Verificando o nome do usuario na aba editar perfil da aplicação MedVida', () => {
    visitperfil()
    cy.get('#nome').should('have.value', 'Matheus Chagas da Silva')
  })

  it('Cenario de Teste: Verificando a área de atuação do usuario na aba editar perfil da aplicação MedVida', () => {
    visitperfil()
    cy.get('#campo_escolha').should('have.value', 'CRM')
  })

  it('Cenario de Teste: Verificando o numero do documento do usuario na aba perfil da aplicação MedVida', () => {
    visitperfil()
    cy.get('#doc').should('have.value', '759143')
  })

  it('Cenario de Teste: Verificando o numero do CPF do usuario na aba perfil da aplicação MedVida', () => {
    visitperfil()
    cy.get('#cpf').should('have.value', '131.680.356-29')
  })

  it('Cenario de Teste: Verificando a unidade de atendimento do usuario na aba perfil da aplicação MedVida', () => {
    visitperfil()
    cy.get('#unidadeAtendimento').should('have.value', 'HAMC')
  })

  it('Cenario de Teste: Verificando o numero de celular do usuario na aba perfil da aplicação MedVida', () => {
    visitperfil()
    cy.get('#celular').should('have.value', '(35) 99262-1257')
  })

  //Ajustando o nome Caso positivo e negativo
  it('Cenario de Teste: Editando o nome do usuario na aba editar perfil da aplicação MedVida, Caso positivo', () => {
    visitperfil()
    preencherCampo('#nome', 'Matheus Chagas')
    cy.get('#nome').should('contain.text', 'Matheus Chagas')
    limparCampo('#nome', 'Matheus Chagas da Silva')
  })

  it('Cenario de Teste: Editando o nome do usuario na aba editar perfil da aplicação MedVida,  Caso negativo', () => {
    visitperfil()
    preencherCampo('#nome', 'Math')
    cy.get('#notificacao').invoke('text').then((str) => {      
      expect(str).to.equal('Nome incompleto')  
    }) 
  })

  //Ajustando o celular Caso positivo e negativo
  it('Cenario de Teste: Editando o celular do usuario na aba editar perfil da aplicação MedVida, Caso positivo', () => {
    visitperfil()
    preencherCampo('#celular', '(35) 99367-1897')
    cy.get('#celular').should('contain.text', '(35) 99367-1897')
    limparCampo('#celular', '(35) 99262-1257')
  })

  it('Cenario de Teste: Editando o celular do usuario na aba editar perfil da aplicação MedVida,  Caso negativo', () => {
    visitperfil()
    preencherCampo('#celular', '35-98485-3455')
    cy.get('#notificacao').invoke('text').then((str) => {      
      expect(str).to.equal('Celular no formato inesperado')  
    }) 
  })

  // Cenários de mudança de página
  it('Cenario de Teste: Clicar no botão de voltar e ir para a página de perfil', () => {
    visitperfil()
    cy.get('.btnAnterior').click()
    cy.url().should('contain','/home/perfil')
  })

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