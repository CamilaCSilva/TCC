from django.db import models
from config import settings

# Create your models here.
class Anamnese(models.Model):
    RISCO = (('nao-urgente', 'nao-urgente'), ('pouco-urgente','pouco-urgente'), ('urgente', 'urgente'), ('emergencia', 'emergencia'))

    cpf = models.CharField(max_length=11, primary_key=True, unique=True)
    nome_completo = models.CharField(max_length=150)
    celular = models.DecimalField(max_digits=11, decimal_places=0)
    sexo = models.CharField(max_length=1)
    idade = models.DecimalField(max_digits=3, decimal_places=0)
    tipo_sanguineo = models.CharField(max_length=3)
    alergias = models.CharField(max_length=500)
    medicacao_drogas = models.CharField(max_length=500)
    historico_doencas = models.CharField(max_length=500)
    queixa_principal = models.CharField(max_length=500)
    nivel_dor = models.DecimalField(max_digits=2, decimal_places=0)
    classificacao_risco = models.CharField(max_length=20, choices=RISCO, blank=False, null=False, default='pouco-urgente')
    observacoes = models.CharField(max_length=500)
    pressao_sanguinea = models.CharField(max_length=6)
    oxigenacao =  models.CharField(max_length=6)
    temperatura = models.DecimalField(max_digits=4, decimal_places=2)
    frequencia_cardiaca =   models.CharField(max_length=6)
    data = models.CharField(max_length=10)
    hora = models.TimeField()
    local = models.CharField(max_length=250)
    paramedico = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="fichas")

    def __str__(self):
        return self.nome_completo

"""
class FichaPaciente(models.Model):

    class Meta:
        verbose_name_plural = "Fichas Pacientes"

    anamnese = models.ForeignKey(Anamnese, on_delete=models.PROTECT, related_name="fichas")
    paramedico = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.PROTECT, related_name="paramedico")

"""