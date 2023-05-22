# Generated by Django 4.2.1 on 2023-05-22 18:29

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Anamnese',
            fields=[
                ('cpf', models.DecimalField(decimal_places=0, max_digits=11, primary_key=True, serialize=False)),
                ('nome_completo', models.CharField(max_length=150)),
                ('celular', models.DecimalField(decimal_places=0, max_digits=11)),
                ('sexo', models.CharField(max_length=1)),
                ('idade', models.DecimalField(decimal_places=0, max_digits=3)),
                ('tipo_sanguineo', models.CharField(max_length=3)),
                ('alergias', models.CharField(max_length=500)),
                ('medicacao_drogas', models.CharField(max_length=500)),
                ('historico_doencas', models.CharField(max_length=500)),
                ('queixa_principal', models.CharField(max_length=500)),
                ('nivel_dor', models.DecimalField(decimal_places=0, max_digits=2)),
                ('classificacao_risco', models.CharField(choices=[('nao-urgente', 'nao-urgente'), ('pouco-urgente', 'pouco-urgente'), ('urgente', 'urgente'), ('emergencia', 'emergencia')], default='pouco-urgente', max_length=20)),
                ('observacoes', models.CharField(max_length=500)),
                ('pressao_sanguinea', models.CharField(max_length=6)),
                ('oxigenacao', models.CharField(max_length=6)),
                ('temperatura', models.DecimalField(decimal_places=2, max_digits=4)),
                ('frequencia_ritmica', models.CharField(max_length=6)),
                ('data', models.CharField(max_length=10)),
                ('hora', models.TimeField()),
                ('local', models.CharField(max_length=250)),
                ('nome_paramedico_responsavel', models.CharField(max_length=150)),
                ('documento_trabalho_paramedico', models.CharField(max_length=10)),
            ],
        ),
    ]
