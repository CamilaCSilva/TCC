from django.test import TestCase
from hospital.models import ProfissionaldeSaude

class ProfissionalDeSaudeModelTestCase(TestCase):

    def setUp(self):
        ProfissionaldeSaude.objects.create(
            cpf = '12345678990',
            campo_escolha = 'CRM',
            nome_completo = 'Matheus Chagas',
            celular = '35992665789',
            documento_trabalho = '789654',
            unidade_de_atendimento = 'HMAC',
            password = 'test123'
        )

    def test_cpf(self):
        profissional = ProfissionaldeSaude.objects.get(cpf = '12345678990')
        self.assertEquals(profissional.cpf, '12345678990')

    def test_compo_escolha(self):
        profissional = ProfissionaldeSaude.objects.get(cpf = '12345678990')
        self.assertEquals(profissional.campo_escolha, 'CRM')

    def test_nome_completo(self):
        profissional = ProfissionaldeSaude.objects.get(cpf = '12345678990')
        self.assertEquals(profissional.nome_completo, 'Matheus Chagas')

    def test_celular(self):
        profissional = ProfissionaldeSaude.objects.get(cpf = '12345678990')
        self.assertEquals(profissional.celular, '35992665789')

    def test_documento_trabalho(self):
        profissional = ProfissionaldeSaude.objects.get(cpf = '12345678990')
        self.assertEquals(profissional.documento_trabalho, '789654')

    def test_unidade_de_atendimento(self):
        profissional = ProfissionaldeSaude.objects.get(cpf = '12345678990')
        self.assertEquals(profissional.unidade_de_atendimento, 'HMAC')

    def test_password(self):
        profissional = ProfissionaldeSaude.objects.get(cpf = '12345678990')
        self.assertEquals(profissional.password, 'test123')

    def test_cpf_fail(self):
        profissional = ProfissionaldeSaude.objects.get(cpf = '12345678990')
        self.assertNotEquals(profissional.cpf, '12345678991')

    def test_password_fail(self):
        profissional = ProfissionaldeSaude.objects.get(cpf = '12345678990')
        self.assertNotEquals(profissional.password, 'test123!')

    def test_return_str(self):
        profissional = ProfissionaldeSaude.objects.get(cpf = '12345678990')
        self.assertEquals(profissional.__str__(), '12345678990 - Matheus Chagas')
   