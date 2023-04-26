from rest_framework import serializers
from hospital.models import ProfissionaldeSaude

class ProfissionaldeSaudeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProfissionaldeSaude
        fields = '__all__'

        """
        def validate(self, data):
            if not nome_valido(data['nome']):
                raise serializers.ValidationError({'nome':"Não inclua números neste campo"})
            if not cpf_valido(data['cpf']):
                raise serializers.ValidationError({'cpf':"O CPF deve ter 11 dígitos"})
            if not telefone_valido(data['telefone']):
                raise serializers.ValidationError({'telefone':"O telefone deve informar o DDD e o 9 padrão"})
            
            return data
        """