function logar() {
  cy.visit('http://localhost:4200/login')
  cy.get('#cpf').click()
  cy.get('#cpf').type('77777777771')
  cy.get('#senha').click()
  cy.get('#senha').type('nogueirA@23')
  cy.get('.btn').click()
  cy.wait(500)
}

function preencher(nome, cpf, celular, idade, tipoSangue, sexo, alergias, medicacoes, doencas, sintomas, nivelDor, prioridade, observacoes) {
  logar()
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

  if(sintomas != '') {
    cy.get('#sintomas').click()
    cy.get('#sintomas').type(sintomas)
  }

  if(nivelDor != '') {
    cy.get('#nivelDor').click()
    cy.get('#nivelDor').type(nivelDor)
  }

  if(prioridade != ''){
    cy.get('#prioridade').select(prioridade)
  }

  if(observacoes != '') {
    cy.get('#observacoes').click()
    cy.get('#observacoes').type(observacoes)
  }
}

describe('Cenario de Teste:  Testar o formulário de dados de atendimento parte 2 da aplicacao MedVida', () => {
  // Cenários Positivo página formulario de dados de atendimento parte 2
  it('Cenario de Teste: Preencher o formulário de dados de atendimento parte 2 com dados válidos', () => {
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
      'nenhuma'
    )
    cy.get('.btnProximo').click()
    cy.url().should('contain','/home/formularios/identificacao-paciente-form/dados-atendimento-form/dados-atendimento-parte2-form/dados-vitais-paciente-form')
  })

  it('Cenario de Teste: Apertar no botão de voltar e voltar para o formulário de identificação do paciente', () => {
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
      ''
    )
    cy.get('.btnProximo').click()

    cy.get('.btnAnterior').click()
    cy.url().should('contain','/home/formularios/identificacao-paciente-form/dados-atendimento-form')
  })

  // // Cenários Negativos página formulario de identificacao do paciente
  it('Cenario de Teste: Preencher o formulário de dados de atendimento parte 2 sem sintomas', () => {
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
      '', 
      '5', 
      'urgente',
      'nenhuma'
    )
    cy.get('.btnProximo').click()
    cy.get('#notificacao').invoke('text').then((str) => {
      expect(str).to.equal('Insira os sintomas')
    })
  })

  it('Cenario de Teste: Preencher o formulário de dados de atendimento parte 2 sem nível de dor', () => {
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
      '', 
      'urgente',
      'nenhuma'
    )
    cy.get('.btnProximo').click()
    cy.get('#notificacao').invoke('text').then((str) => {
      expect(str).to.equal('Insira o nivel de dor do paciente')
    })
  })

  it('Cenario de Teste: Preencher o formulário de dados de atendimento parte 2 sem prioridade', () => {
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
      '',
      'nenhuma'
    )
    cy.get('#prioridade').should('contain', 'Não Urgente')
    cy.get('.btnProximo').click()
    cy.url().should('contain','/home/formularios/identificacao-paciente-form/dados-atendimento-form/dados-atendimento-parte2-form/dados-vitais-paciente-form')
  })

  it('Cenario de Teste: Preencher o formulário de dados de atendimento parte 2 sem observações', () => {
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
      ''
    )
    cy.get('.btnProximo').click()
    cy.get('#notificacao').invoke('text').then((str) => {
      expect(str).to.equal('Insira uma observação sobre o paciente')
    })
  })
})