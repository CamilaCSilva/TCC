from django.db import models

# Create your models here.
class ProfissionaldeSaude(models.Model):
    DOCUMENTOS = ( ('CRM', 'Médico(a)'), ('COREN', 'Enfermeiro(a)'), ('DRF', 'Paramédico(a)'))

    cpf = models.DecimalField(max_digits=11, decimal_places=0, primary_key=True)
    campo_escolha = models.CharField(max_length=5, choices=DOCUMENTOS, blank=False, null=False, default='CRM')
    nomeCompleto = models.CharField(max_length=150)
    telefone = models.DecimalField(max_digits=11, decimal_places=0)
    documentoTrabalho = models.CharField(max_length=10)
    unidadeDeAtendimento = models.CharField(max_length=250)
    senha = models.CharField(max_length=128)

    def __str__(self):
        return self.nomeCompleto
    
class BaixaFicha(models.Model):
    DOCUMENTOS = ( ('', ''), ('', ''), ('', ''))
