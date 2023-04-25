from rest_framework import serializers
from hospital.models import ProfissionaldeSaude

class ProfissionaldeSaudeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProfissionaldeSaude
        fields = [
                'cpf',
                'areaAtuacao',
                'nomeCompleto', 
                'telefone', 
                'documentoTrabalho', 
                'unidadeDeAtendimento'
            ]