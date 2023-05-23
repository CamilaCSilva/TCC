from rest_framework import serializers
from hospital.models import ProfissionaldeSaude

class ProfissionaldeSaudeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProfissionaldeSaude
        fields = '__all__'

"""
class FichasPacientesSerializer(serializers.ModelSerializer):
    class Meta:
        model = FichaPaciente
        fields = '__all__'

class ListaFichasProfissionaisSerializer(serializers.ModelSerializer):
    anamnese = serializers.ReadOnlyField(source = 'anamnese.nome_completo')
    paramedico = serializers.ReadOnlyField(source = 'paramedico.nome_completo')
    class Meta:
        model = FichaPaciente
        fields = ['anamnese', 'paramedico']
"""
    