function logar() {
  cy.visit('http://localhost:4200/login')
  cy.get('#cpf').click()
  cy.get('#cpf').type('77777777771')
  cy.get('#senha').click()
  cy.get('#senha').type('nogueirA@23')
  cy.get('.btn').click()
  cy.wait(500)
}

function preencher(nome, cpf, celular) {
  logar()
  cy.get('#btnAdicionarFicha').click()

  if(nome != '') {
    cy.get('#nome').click()
    cy.get('#nome').type(nome)
  }

  if(cpf != '') {
    cy.get('#cpf').click()
    cy.get('#cpf').type(cpf)
  }

  if(celular != '') {
    cy.get('#celular').click()
    cy.get('#celular').type(celular)
  }
}

describe('Cenario de Teste:  Testar o formulário de identificacao do paciente da aplicacao MedVida', () => {
  // Cenários Positivo página formulario de identificacao do paciente
  it('Cenario de Teste: Preencher o formulário de identificacao do paciente com dados válidos', () => {
    preencher('Marcela Dias', '123.456.789-10', '35 93456-2456')
    cy.get('.btnProximo').click()
    cy.url().should('contain','/' || '/home/formularios/identificacao-paciente-form/dados-atendimento-form')
  })

  it('Cenario de Teste: Preencher o formulário de identificacao do paciente com cpf em outro formato', () => {
    preencher('Marcela Dias', '12345678910', '35 93456-2456')
    cy.get('.btnProximo').click()
    cy.url().should('contain','/' || '/home/formularios/identificacao-paciente-form/dados-atendimento-form')
  })

  it('Cenario de Teste: Preencher o formulário de identificacao do paciente com celular formato diferente', () => {
    preencher('Marcela Dias', '123.456.789-10', '93456-2456')
    cy.get('.btnProximo').click()
    cy.url().should('contain','/' || '/home/formularios/identificacao-paciente-form/dados-atendimento-form')
  })

  it('Cenario de Teste: Preencher o formulário de identificacao do paciente com celular formato errado', () => {
    preencher('Marcela Dias', '123.456.789-10', '55 35 934562456')
    cy.get('.btnProximo').click()
    cy.url().should('contain','/' || '/home/formularios/identificacao-paciente-form/dados-atendimento-form')
  })

  it('Cenario de Teste: Voltar a tela de home', () => {
    cy.visit('http://localhost:4200/home/formularios/identificacao-paciente-form')
    cy.get('.btnVoltar').click()
    cy.url().should('contain','/' || '/home')
  })

  // Cenários Negativos página formulario de identificacao do paciente
  it('Cenario de Teste: Preencher o formulário de identificacao do paciente com nome menor que 6 caracteres', () => {
    preencher('Marco', '123.456.789-10', '35 93456-2456')
    cy.get('.btnProximo').click()
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Nome incompleto')
    })
  })

  it('Cenario de Teste: Preencher o formulário de identificacao do paciente com cpf menor que 11 caracteres', () => {
    preencher('Marcela Dias', '123.456.789-1', '35 93456-2456')
    cy.get('.btnProximo').click()
    cy.on('window:alert', (str) => {
      expect(str).to.equal('CPF no formato errado ou com menos caracteres do que esperado')
    })
  })

  it('Cenario de Teste: Preencher o formulário de identificacao do paciente com cpf formato errado', () => {
    preencher('Marcela Dias', '123.456.789.10', '35 93456-2456')
    cy.get('.btnProximo').click()
    cy.on('window:alert', (str) => {
      expect(str).to.equal('CPF no formato errado ou com menos caracteres do que esperado')
    })
  })

  it('Cenario de Teste: Preencher o formulário de identificacao do paciente com celular formato errado', () => {
    preencher('Marcela Dias', '123.456.789-10', '123456')
    cy.get('.btnProximo').click()
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Celular no formato inesperado')
    })
  })

  it('Cenario de Teste: Preencher o formulário de identificacao do paciente sem o nome', () => {
    preencher('', '123.456.789-10', '123456')
    cy.get('.btnProximo').click()
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Nome incompleto')
    })
  })

  it('Cenario de Teste: Preencher o formulário de identificacao do paciente sem o cpf', () => {
    preencher('Marcela Dias', '', '123456')
    cy.get('.btnProximo').click()
    cy.on('window:alert', (str) => {
      expect(str).to.equal('CPF no formato errado ou com menos caracteres do que esperado')
    })
  })

  it('Cenario de Teste: Preencher o formulário de identificacao do paciente sem o celular', () => {
    preencher('Marcela Dias', '123.456.789-10', '')
    cy.get('.btnProximo').click()
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Celular no formato inesperado')
    })
  })
})