from rest_framework import viewsets
from hospital.models import ProfissionaldeSaude, FichaPaciente
from hospital.serializer import ProfissionaldeSaudeSerializer, FichasPacientesSerializer
from rest_framework.authentication import BasicAuthentication
from rest_framework.permissions import IsAuthenticated

# Create your views here.

class ProfissionaldeSaudeViewSet(viewsets.ModelViewSet):
    queryset = ProfissionaldeSaude.objects.all()
    serializer_class = ProfissionaldeSaudeSerializer
    authentication_classes = [BasicAuthentication]
    permission_classes = [IsAuthenticated]

class FichaPacienteViewSet(viewsets.ModelViewSet):
    queryset = FichaPaciente.objects.all()
    serializer_class = FichasPacientesSerializer
    authentication_classes = [BasicAuthentication]
    permission_classes = [IsAuthenticated]


