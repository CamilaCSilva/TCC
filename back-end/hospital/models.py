from django.contrib.auth.models import AbstractUser
from config import settings
from django.db import models
from ficha_paciente.models import Anamnese


class User(AbstractUser):
    cpf = models.CharField(max_length=11, primary_key=True, unique=True)

    USERNAME_FIELD = "cpf"
    REQUIRED_FIELDS = ["username"]

class ProfissionaldeSaude(models.Model):

    class Meta:
        verbose_name_plural = "Profissionais de Saúde"

    DOCUMENTOS = ( ('CRM', 'Médico(a)'), ('COREN', 'Enfermeiro(a)'), ('DRF', 'Paramédico(a)'))

    cpf = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, primary_key=True, related_name='id')
    campo_escolha = models.CharField(max_length=5, choices=DOCUMENTOS, blank=False, null=False, default='CRM')
    nome_completo = models.CharField(max_length=150)
    celular = models.DecimalField(max_digits=11, decimal_places=0)
    documento_trabalho = models.CharField(max_length=10)
    unidade_de_atendimento = models.CharField(max_length=250)
    senha = models.CharField(User, max_length=128)

    def __str__(self):
        return self.nome_completo
    

class FichaPaciente(models.Model):

    class Meta:
        verbose_name_plural = "Fichas Pacientes"

    anamnese = models.ForeignKey(Anamnese, on_delete=models.PROTECT, related_name="paciente")
    paramedico = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.PROTECT, related_name="paciente")

