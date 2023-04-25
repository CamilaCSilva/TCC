from rest_framework import viewsets
from hospital.models import ProfissionaldeSaude
from hospital.serializer import ProfissionaldeSaudeSerializer
# Create your views here.

class ProfissionaldeSaudeViewSet(viewsets.ModelViewSet):
    queryset = ProfissionaldeSaude.objects.all()
    serializer_class = ProfissionaldeSaudeSerializer


