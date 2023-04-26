from rest_framework import serializers
from hospital.models import ProfissionaldeSaude
from hospital.validators import *


class ProfissionaldeSaudeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProfissionaldeSaude
        fields = '__all__'
    
    def validate(self, data):
        if not nome_valido(data['nomeCompleto']):
            raise serializers.ValidationError({'nomeCompleto':"Não inclua números neste campo"})
        return data
    
        