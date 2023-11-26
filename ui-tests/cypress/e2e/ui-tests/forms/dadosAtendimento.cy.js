function logar() {
  cy.visit('http://localhost:4200/login')
  cy.get('#cpf').click()
  cy.get('#cpf').type('77777777771')
  cy.get('#senha').click()
  cy.get('#senha').type('nogueirA@23')
  cy.get('.btn').click()
  cy.wait(500)
}

function preencher(nome, cpf, celular, idade, tipoSangue, sexo, alergias, medicacoes, doencas) {
  logar()
  cy.get('#btnAdicionarFicha').click()

  cy.get('#nome').click()
  cy.get('#nome').type(nome)

  cy.get('#cpf').click()
  cy.get('#cpf').type(cpf)

  cy.get('#celular').click()
  cy.get('#celular').type(celular)

  cy.get('.btnProximo').click()

  if (idade != '') {
    cy.get('#idade').click()
    cy.get('#idade').type(idade)
  }

  if (tipoSangue != '') {
    cy.get('#tipoSangue').click()
    cy.get('#tipoSangue').type(tipoSangue)
  }

  if (sexo != '') {
    cy.get('[type="radio"]').check(sexo)
  }

  if (alergias != '') {
    cy.get('#alergias').click()
    cy.get('#alergias').type(alergias)
  }

  if (medicacoes != '') {
    cy.get('#medicacoesUsadas').click()
    cy.get('#medicacoesUsadas').type(medicacoes)
  }

  if (doencas != '') {
    cy.get('#historicoDoencas').click()
    cy.get('#historicoDoencas').type(doencas)
  }
}

describe('Cenario de Teste:  Testar o formulário de dados de atendimento da aplicacao MedVida', () => {
  // Cenários Positivo página formulario de idados de atendimento
  it('Cenario de Teste: Preencher o formulário de dados de atendimento com dados válidos', () => {
    preencher('Marcela Dias', '123.456.789-10', '35 93456-2456', '21', 'o-', 'F', 'Pólen', 'Loratadina', 'Alergia')
    cy.get('.btnProximo').click()
    cy.url().should('contain', '/home/formularios/identificacao-paciente-form/dados-atendimento-form/dados-atendimento-parte2-form')
  })

  it('Cenario de Teste: Preencher o formulário de dados de atendimento com cpf em um formato diferente', () => {
    preencher('Marcela Dias', '12345678910', '35 93456-2456', '21', 'o-', 'F', 'Pólen', 'Loratadina', 'Alergia')
    cy.get('.btnProximo').click()
    cy.url().should('contain', '/home/formularios/identificacao-paciente-form/dados-atendimento-form/dados-atendimento-parte2-form')
  })

  it('Cenario de Teste: Preencher o formulário de dados de atendimento com celular em um formato diferente', () => {
    preencher('Marcela Dias', '123.456.789-10', '55 934562456', '21', 'o-', 'F', 'Pólen', 'Loratadina', 'Alergia')
    cy.get('.btnProximo').click()
    cy.url().should('contain', '/home/formularios/identificacao-paciente-form/dados-atendimento-form/dados-atendimento-parte2-form')
  })

  it('Cenario de Teste: Apertar no botão de voltar e voltar para o formulário de identificação do paciente', () => {
    preencher('Marcela Dias', '123.456.789-10', '55 934562456', '21', 'o-', 'F', 'Pólen', 'Loratadina', 'Alergia')
    cy.get('.btnProximo').click()

    cy.get('.btnAnterior').click()
    cy.url().should('contain', '/home/formularios/identificacao-paciente-form')
  })

  // Cenários Negativos página formulario de identificacao do paciente
  it('Cenario de Teste: Preencher o formulário de dados de atendimento sem a idade', () => {
    preencher('Marcela Dias', '123.456.789-10', '35 93456-2456', '', 'o-', 'F', 'Pólen', 'Loratadina', 'Alergia')
    cy.get('.btnProximo').click()
    cy.get('#notificacao').invoke('text').then((str) => {
      expect(str).to.equal('Insira a idade')
    })
  })

  it('Cenario de Teste: Preencher o formulário de dados de atendimento sem o tipo sanguineo', () => {
    preencher('Marcela Dias', '123.456.789-10', '35 93456-2456', '21', '', 'F', 'Pólen', 'Loratadina', 'Alergia')
    cy.get('.btnProximo').click()
    cy.get('#notificacao').invoke('text').then((str) => {
      expect(str).to.equal('Tipo sanguíneo inválido')
    })
  })

  it('Cenario de Teste: Preencher o formulário de dados de atendimento sem o sexo', () => {
    preencher('Marcela Dias', '123.456.789-10', '35 93456-2456', '21', 'o-', '', 'Pólen', 'Loratadina', 'Alergia')
    cy.get('.btnProximo').click()
    cy.get('#notificacao').invoke('text').then((str) => {
      expect(str).to.equal('Escolha o sexo')
    })
  })

  it('Cenario de Teste: Preencher o formulário de dados de atendimento sem alergias', () => {
    preencher('Augusto Dias', '123.456.789-15', '35 93466-2456', '24', 'AB+', 'M', '', 'Losartana', 'Cardíaco')
    cy.get('.btnProximo').click()
    cy.get('#notificacao').invoke('text').then((str) => {
      expect(str).to.equal('Escreva sobre as alergias')
    })
  })

  it('Cenario de Teste: Preencher o formulário de dados de atendimento com tipo sanguineo em um formato errado', () => {
    preencher('Marcela Dias', '123.456.789-10', '35 93456-2456', '21', 'P-', 'F', 'Pólen', 'Loratadina', 'Alergia')
    cy.get('.btnProximo').click()
    cy.get('#notificacao').invoke('text').then((str) => {
      expect(str).to.equal('Tipo sanguíneo inválido')
    })
  })

  it('Cenario de Teste: Preencher o formulário de dados de atendimento com tipo sanguineo sem o medicamento utilizado', () => {
    preencher('Marcela Dias', '123.456.789-10', '35 93456-2456', '21', 'o-', 'F', 'Pólen', '', 'Alergia')
    cy.get('.btnProximo').click()
    cy.get('#notificacao').invoke('text').then((str) => {
      expect(str).to.equal('Escreva sobre os medicamentos')
    })
  })

  it('Cenario de Teste: Preencher o formulário de dados de atendimento sem doenças', () => {
    preencher('Luan Marques', '143.456.789-15', '35 95468-2456', '34', 'B-', 'O', 'Lactose', 'Lacday', '')
    cy.get('.btnProximo').click()
    cy.get('#notificacao').invoke('text').then((str) => {
      expect(str).to.equal('Escreva sobre o histórico médico')
    })
  })
})