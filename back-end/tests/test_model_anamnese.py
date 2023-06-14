from django.test import TestCase
from ficha_paciente.models import Anamnese
from hospital.models import ProfissionaldeSaude

class AnamneseModelTestCase(TestCase):

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
        Anamnese.objects.create(
            cpf= '22222222298',
            nome_completo= 'Amanda Silva',
            celular= '35991234567',
            sexo= 'F',
            idade= '22',
            tipo_sanguineo= 'O-',
            alergias= 'Sem alergias',
            medicacao_drogas= 'Sem Medicamentos',
            historico_doencas= 'Sem doenças',
            queixa_principal= 'Perna quebrada',
            nivel_dor= '6',
            classificacao_risco= 'urgente',
            observacoes= 'Sem tala',
            pressao_sanguinea= '189',
            oxigenacao= '121',
            temperatura= '36.00',
            frequencia_cardiaca= '89',
            data= '2023-05-23',
            hora= '09:03:46',
            local= 'Rua Antonio XXX, 58',
            paramedico= '14876325914'
        )

    def test_cpf(self):
        anamnese = Anamnese.objects.get(cpf = '22222222298')
        print(anamnese)
        # self.assertEquals(anamnese.cpf, '12345678990')