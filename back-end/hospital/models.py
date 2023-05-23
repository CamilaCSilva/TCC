from django.contrib.auth.models import AbstractUser
from django.db import models


class ProfissionaldeSaude(AbstractUser):

    class Meta:
        verbose_name_plural = "Profissionais de Saúde"

    DOCUMENTOS = ( ('CRM', 'Médico(a)'), ('COREN', 'Enfermeiro(a)'), ('DRF', 'Paramédico(a)'))

    cpf = models.CharField(max_length=11, primary_key=True, unique=True)
    campo_escolha = models.CharField(max_length=5, choices=DOCUMENTOS, blank=False, default='CRM')
    nome_completo = models.CharField(max_length=150)
    celular = models.CharField(max_length=13)
    documento_trabalho = models.CharField(max_length=10)
    unidade_de_atendimento = models.CharField(max_length=250)

    USERNAME_FIELD = "cpf"
    REQUIRED_FIELDS = ["username"]

    def __str__(self):
        return self.nome_completo


