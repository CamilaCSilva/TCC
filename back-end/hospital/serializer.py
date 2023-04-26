from rest_framework import serializers
from hospital.models import ProfissionaldeSaude
from hospital.validators import *


class ProfissionaldeSaudeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProfissionaldeSaude
        fields = '__all__'
    
    def validate(self, data):
        if not cpf_valido(data['cpf']):
            raise serializers.ValidationError({'cpf':"O CPF deve ter 11 dígitos"})
        if not nome_valido(data['nome']):
            raise serializers.ValidationError({'nome':"Não inclua números neste campo"})
        if not telefone_valido(data['telefone']):
            raise serializers.ValidationError({'telefone':"O número de telefone deve conter o DDD e o 9 padrão"})
        return 
    
        