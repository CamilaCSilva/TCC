function logar() {
  cy.visit('http://localhost:4200/login')
  cy.get('#cpf').click()
  cy.get('#cpf').type('77777777771')
  cy.get('#senha').click()
  cy.get('#senha').type('nogueirA@23')
  cy.get('.btn').click()
  cy.wait(500)
}

function preencher(nome, cpf, celular, idade, tipoSangue, sexo, alergias, medicacoes, doencas, sintomas, nivelDor, prioridade, observacoes, pressao, oxigenacao, temperatura, frequenciaRitmica, localizacao) {
  cy.get('#btnAdicionarFicha').click()
  cy.get('#nome').click()
  cy.get('#nome').type(nome)

  cy.get('#cpf').click()
  cy.get('#cpf').type(cpf)

  cy.get('#celular').click()
  cy.get('#celular').type(celular)

  cy.get('.btnProximo').click()

  cy.get('#idade').click()
  cy.get('#idade').type(idade)

  cy.get('#tipoSangue').click()
  cy.get('#tipoSangue').type(tipoSangue)

  cy.get('[type="radio"]').check(sexo)

  cy.get('#alergias').click()
  cy.get('#alergias').type(alergias)

  cy.get('#medicacoesUsadas').click()
  cy.get('#medicacoesUsadas').type(medicacoes)

  cy.get('#historicoDoencas').click()
  cy.get('#historicoDoencas').type(doencas)

  cy.get('.btnProximo').click()

  cy.get('#sintomas').click()
  cy.get('#sintomas').type(sintomas)

  cy.get('#nivelDor').click()
  cy.get('#nivelDor').type(nivelDor)

  cy.get('#prioridade').select(prioridade)

  cy.get('#observacoes').click()
  cy.get('#observacoes').type(observacoes)

  cy.get('.btnProximo').click()

  cy.get('#pressao').click()
  cy.get('#pressao').type(pressao)

  cy.get('#oxigenacao').click()
  cy.get('#oxigenacao').type(oxigenacao)

  cy.get('#temperatura').click()
  cy.get('#temperatura').type(temperatura)

  cy.get('#frequenciaRitmica').click()
  cy.get('#frequenciaRitmica').type(frequenciaRitmica)

  cy.get('.btnProximo').click()

  if(localizacao != '') {
    cy.get('#localizacao').click()
    cy.get('#localizacao').type(localizacao)
  }
}

describe('Cenario de Teste:  Testar o formulário de dados gerais da aplicacao MedVida', () => {
  // Cenários Positivo página formulario de idados de atendimento
  beforeEach(() => {
    cy.intercept('POST', '**/login').as('postLogin')
    cy.intercept('GET', '**/user').as('getUser')
    logar()
    cy.wait('@postLogin')
    cy.wait('@getUser')
  })
  it('Cenario de Teste: Preencher o formulário de dados gerais com dados válidos e mostrar o modal ao clicar em Confirmar', () => {
    preencher(
      'Marcela Dias', 
      '123.456.789-10', 
      '35 93456-2456', 
      '21', 
      'o-', 
      'F', 
      'Pólen', 
      'Loratadina', 
      'Alergia', 
      'Garganta fechada', 
      '5', 
      'urgente', 
      'nenhuma',
      '13/2', 
      '10', 
      '37.8', 
      '12',
      'Rua Paralelepipedo'
    )
    cy.get('.btnAssinar').click()
    cy.get('.modal').should('be.visible')
  })

  it('Cenario de Teste: Preencher o formulário de dados gerais com dados válidos ir para a home ao clicar em Confirmar no modal', () => {
    preencher(
      'Marcela Dias', 
      '123.456.789-10', 
      '35 93456-2456', 
      '21', 
      'o-', 
      'F', 
      'Pólen', 
      'Loratadina', 
      'Alergia', 
      'Garganta fechada', 
      '5', 
      'urgente', 
      'nenhuma',
      '13/2', 
      '10', 
      '37.8', 
      '12',
      'Rua Paralelepipedo'
    )
    cy.get('.btnAssinar').click()
    cy.get('.btnEnviar').click()
    cy.wait(500)
    cy.url().should('contain','/home')
  })

  it('Cenario de Teste: Clicar no botão de voltar e voltar para o formulário de dados vitais', () => {
    preencher(
      'Marcela Dias', 
      '123.456.789-10', 
      '35 93456-2456', 
      '21', 
      'o-', 
      'F', 
      'Pólen', 
      'Loratadina', 
      'Alergia', 
      'Garganta fechada', 
      '5', 
      'urgente', 
      'nenhuma',
      '13/2', 
      '10', 
      '37.8', 
      '12',
      'Rua Paralelepipedo'
    )
    cy.get('.btnAnterior').click()
    cy.url().should('contain','/home/formularios/identificacao-paciente-form/dados-atendimento-form/dados-atendimento-parte2-form/dados-vitais-paciente-form')
  })

  // Cenários Negativos página formulario de identificacao do paciente
  it('Cenario de Teste: Preencher o formulário de dados gerais com dados válidos, mostrar o modal  e ao clicar em Cancelar fechar o modal', () => {
    preencher(
      'Marcela Dias', 
      '123.456.789-10', 
      '35 93456-2456', 
      '21', 
      'o-', 
      'F', 
      'Pólen', 
      'Loratadina', 
      'Alergia', 
      'Garganta fechada', 
      '5', 
      'urgente', 
      'nenhuma',
      '13/2', 
      '10', 
      '37.8', 
      '12',
      'Rua Paralelepipedo'
    )
    cy.get('.btnAssinar').click()
    cy.get('.modal').should('be.visible')
    cy.get('.btnCancelar').click()
    cy.get('.modal').should('not.be.visible')
  })

  it('Cenario de Teste: Na página de dados gerais conferir o nome do paramedico que está atendendo o usuário', () => {
    
    preencher(
      'Marcela Dias', 
      '123.456.789-10', 
      '35 93456-2456', 
      '21', 
      'o-', 
      'F', 
      'Pólen', 
      'Loratadina', 
      'Alergia', 
      'Garganta fechada', 
      '5', 
      'urgente', 
      'nenhuma',
      '13/2', 
      '10', 
      '37.8', 
      '12',
      ''
    )
    cy.get('.nomeParamedico > p').should('contain.text', 'Yasmin Nogueira Silva')
  })

  it('Cenario de Teste: Na página de dados gerais conferir o documento de trabalho do paramedico que está atendendo o usuário', () => {
    preencher(
      'Marcela Dias', 
      '123.456.789-10', 
      '35 93456-2456', 
      '21', 
      'o-', 
      'F', 
      'Pólen', 
      'Loratadina', 
      'Alergia', 
      'Garganta fechada', 
      '5', 
      'urgente', 
      'nenhuma',
      '13/2', 
      '10', 
      '37.8', 
      '12',
      ''
    )
    cy.get('.docTrabalho > p').should('contain.text', '66611')
  })

  it('Cenario de Teste: Preencher o formulário de dados gerais sem a localizacao', () => {
    preencher(
      'Marcela Dias', 
      '123.456.789-10', 
      '35 93456-2456', 
      '21', 
      'o-', 
      'F', 
      'Pólen', 
      'Loratadina', 
      'Alergia', 
      'Garganta fechada', 
      '5', 
      'urgente', 
      'nenhuma',
      '13/2', 
      '10', 
      '37.8', 
      '12',
      ''
    )
    cy.get('.btnAssinar').click()
    cy.get('#notificacao').invoke('text').then((str) => {
      expect(str).to.equal('Insira a localização do paciente')
    })
    cy.get('.modal').should('not.be.visible')
  })

})