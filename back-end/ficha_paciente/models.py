from django.db import models

# Create your models here.
class Anamnese(models.Model):
    risco = (('nao-urgente', 'nao-urgente'), ('pouco-urgente','pouco-urgente'), ('urgente', 'urgente'), ('emergencia', 'emergencia'))

    cpf = models.DecimalField(max_digits=11, decimal_places=0, primary_key=True)
    nomeCompleto = models.CharField(max_length=150)
    telefone = models.DecimalField(max_digits=11, decimal_places=0)
    sexo = models.CharField(max_length=1)
    idade = models.DecimalField(max_digits=3, decimal_places=0)
    tipoSanguineo = models.CharField(max_length=3)
    alergias = models.CharField(max_length=500)
    medicacaoDrogas = models.CharField(max_length=500)
    historicoDoencas = models.CharField(max_length=500)
    queixaPrincipal = models.CharField(max_length=500)
    nivelDor = models.DecimalField(max_digits=2, decimal_places=0)
    classificacaoRisco = models.CharField(max_length=20, choices=risco, blank=False, null=False, default='pouco-urgente')
    observacoes = models.CharField(max_length=500)
    pressaoSanguinea = models.CharField(max_length=6)
    oxigenacao =  models.CharField(max_length=6)
    temperatura = models.DecimalField(max_digits=4, decimal_places=2)
    frequebciaRitmca =   models.CharField(max_length=6)
    data = models.CharField(max_length=10)
    hora = models.TimeField()
    local = models.CharField(max_length=250)
    nomeParamedicoResponsavel = models.CharField(max_length=150)
    documentoTrabalhoParamedico  = models.CharField(max_length=10)

    def __str__(self):
        return self.nomeCompleto