from rest_framework import viewsets
from hospital.models import ProfissionaldeSaude
from hospital.serializer import ProfissionaldeSaudeSerializer
from rest_framework.authentication import BasicAuthentication
from rest_framework.permissions import IsAuthenticated

# Create your views here.

class ProfissionaldeSaudeViewSet(viewsets.ModelViewSet):
    queryset = ProfissionaldeSaude.objects.all()
    serializer_class = ProfissionaldeSaudeSerializer
    authentication_classes = [BasicAuthentication]
    permission_classes = [IsAuthenticated]


