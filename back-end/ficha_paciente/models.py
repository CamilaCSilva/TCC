from django.db import models

# Create your models here.
class anamnese(models.Model):
    DOCUMENTOS = ( ('CRM', 'Médico(a)'), ('COREN', 'Enfermeiro(a)'), ('DRF', 'Paramédico(a)'))

    cpf = models.DecimalField(max_digits=11, decimal_places=0, primary_key=True)
    nomeCompleto = models.CharField(max_length=150)
    telefone = models.DecimalField(max_digits=11, decimal_places=0)
    sexo = models.CharField(max_length=1)
    idade = models.DecimalField(max_digits=3, decimal_places=0)
    tipoSanguineo = models.CharField(max_length=2)
    alergias = models.CharField(max_length=1000)
    medicacaodrogas = models.CharField(max_length=1000)
    historicodoencas = models.CharField(max_length=1000)
    queixaprincipal = models.CharField(max_length=1000)
    niveldor = models.DecimalField(max_digits=2, decimal_places=0)
    classificacaorisco = models.CharField(max_length=30)
    observacoes = models.CharField(max_length=1000)
    pressaosanguinea = models.CharField(max_length=5)
    oxigenacao =  models.CharField(max_length=5)
    temperatura = models.DecimalField(max_digits=2, decimal_places=2)
    frequebciaritmca =   models.CharField(max_length=5)

    def __str__(self):
        return self.nomeCompleto