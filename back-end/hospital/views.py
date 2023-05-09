from rest_framework import viewsets, generics
from hospital.models import ProfissionaldeSaude, FichaPaciente
from hospital.serializer import ProfissionaldeSaudeSerializer, FichasPacientesSerializer, ListaFichasProfissionaisSerializer
from rest_framework.authentication import BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.parsers import JSONParser

# Create your views here.

class ProfissionaldeSaudeViewSet(viewsets.ModelViewSet):
    """Listando os profissionais de saúde"""
    queryset = ProfissionaldeSaude.objects.all()
    serializer_class = ProfissionaldeSaudeSerializer
    # authentication_classes = [BasicAuthentication]
    # permission_classes = [IsAuthenticated]

class FichaPacienteViewSet(viewsets.ModelViewSet):
    """Listando as fichas dos pacientes de cada profissional"""
    queryset = FichaPaciente.objects.all()
    serializer_class = FichasPacientesSerializer
    authentication_classes = [BasicAuthentication]
    permission_classes = [IsAuthenticated]

class ListaFichaPorParamedico(generics.ListAPIView):
    """Listando as fichas de um(a) Paramédico(a)"""
    def get_queryset(self):
        queryset = FichaPaciente.objects.filter(paramedico_id=self.kwargs['pk'])
        return queryset
    serializer_class = ListaFichasProfissionaisSerializer
    authentication_classes = [BasicAuthentication]
    permission_classes = [IsAuthenticated]


