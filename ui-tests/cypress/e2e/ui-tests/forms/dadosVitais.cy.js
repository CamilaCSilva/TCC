function logar() {
  cy.visit('http://localhost:4200/login')
  cy.get('#cpf').click()
  cy.get('#cpf').type('77777777771')
  cy.get('#senha').click()
  cy.get('#senha').type('nogueirA@23')
  cy.get('.btn').click()
  cy.wait(500)
}

function preencher(nome, cpf, celular, idade, tipoSangue, sexo, alergias, medicacoes, doencas, sintomas, nivelDor, prioridade, observacoes, pressao, oxigenacao, temperatura, frequenciaRitmica) {
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

  cy.get('#sintomas').click()
  cy.get('#sintomas').type(sintomas)

  cy.get('#nivelDor').click()
  cy.get('#nivelDor').type(nivelDor)

  cy.get('#prioridade').select(prioridade)

  cy.get('#observacoes').click()
  cy.get('#observacoes').type(observacoes)

  cy.get('.btnProximo').click()

  if(pressao != '') {
    cy.get('#pressao').click()
    cy.get('#pressao').type(pressao)
  }

  if(oxigenacao != '') {
    cy.get('#oxigenacao').click()
    cy.get('#oxigenacao').type(oxigenacao)
  }

  if(temperatura != '') {
    cy.get('#temperatura').click()
    cy.get('#temperatura').type(temperatura)
  }

  if(frequenciaRitmica != '') {
    cy.get('#frequenciaRitmica').click()
    cy.get('#frequenciaRitmica').type(frequenciaRitmica)
  }
}

describe('Cenario de Teste:  Testar o formulário de dados vitais da aplicacao MedVida', () => {
  // Cenários Positivo página formulario de idados de atendimento
  it('Cenario de Teste: Preencher o formulário de dados de atendimento com dados válidos', () => {
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
      '12'
    )
    cy.get('.btnProximo').click()
    cy.url().should('contain','/home/formularios/identificacao-paciente-form/dados-atendimento-form/dados-atendimento-parte2-form/dados-vitais-paciente-form/dados-gerais-form')
  })

  it('Cenario de Teste: Apertar no botao de voltar e voltar para o formulario de dados de atendimento parte 2', () => {
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
      '12'
    )
    cy.get('.btnAnterior').click()
    cy.url().should('contain','/home/formularios/identificacao-paciente-form/dados-atendimento-form/dados-atendimento-parte2-form')
  })

  // Cenários Negativos página formulario de identificacao do paciente
  it('Cenario de Teste: Preencher o formulário de dados de atendimento sem a pressao', () => {
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
      '', 
      '10', 
      '37.8', 
      '12'
    )
    cy.get('.btnProximo').click()
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Insira a pressão do paciente')
    })
  })

  it('Cenario de Teste: Preencher o formulário de dados de atendimento sem a oxigenacao', () => {
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
      '', 
      '37.8', 
      '12'
    )
    cy.get('.btnProximo').click()
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Insira a oxigenação do paciente')
    })
  })

  it('Cenario de Teste: Preencher o formulário de dados de atendimento sem a temperatura', () => {
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
      '', 
      '12'
    )
    cy.get('.btnProximo').click()
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Insira a temperatura do paciente')
    })
  })

  it('Cenario de Teste: Preencher o formulário de dados de atendimento sem a temperatura', () => {
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
      ''
    )
    cy.get('.btnProximo').click()
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Insira a frequência ritmica do paciente')
    })
  })
})