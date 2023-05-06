from rest_framework import serializers
from hospital.models import ProfissionaldeSaude, FichaPaciente
from hospital.validators import *


class ProfissionaldeSaudeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProfissionaldeSaude
        fields = '__all__'
    
    def validate(self, data):
        if not cpf_valido(data['cpf']):
            raise serializers.ValidationError({'cpf':"O CPF deve ter 11 dígitos"})
        if not nome_valido(data['nome_completo']):
            raise serializers.ValidationError({'nome_completo':"Não inclua números neste campo"})
        if not celular_valido(data['celular']):
            raise serializers.ValidationError({'celular':"O número de telefone deve conter o DDD e o 9 padrão"})
        return 

class FichasPacientesSerializer(serializers.ModelSerializer):
    class Meta:
        model = FichaPaciente
        fields = '__all__'
    