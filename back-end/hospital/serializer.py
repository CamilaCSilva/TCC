from rest_framework import serializers
from hospital.models import ProfissionaldeSaude

class ProfissionaldeSaudeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProfissionaldeSaude
        fields = '__all__'
        extra_kwargs = {
            'password':{'write_only': True}
        }
    
    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

    