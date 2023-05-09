# Generated by Django 4.2 on 2023-05-06 21:36

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('ficha_paciente', '0002_rename_telefone_anamnese_celular_and_more'),
        ('hospital', '0004_rename_telefone_profissionaldesaude_celular_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='fichapaciente',
            name='anamnese',
            field=models.ForeignKey(default='0', on_delete=django.db.models.deletion.CASCADE, to='ficha_paciente.anamnese'),
        ),
        migrations.AddField(
            model_name='fichapaciente',
            name='paramedico',
            field=models.ForeignKey(default='0', on_delete=django.db.models.deletion.CASCADE, to='hospital.profissionaldesaude'),
        ),
    ]