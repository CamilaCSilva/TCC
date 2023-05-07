from rest_framework import viewsets
from ficha_paciente.models import Anamnese
from ficha_paciente.serializer import AnamneseSerializer
from rest_framework.authentication import BasicAuthentication
from rest_framework.permissions import IsAuthenticated

# Create your views here.

class AnamneseViewSet(viewsets.ModelViewSet):
    """Listando as fichas dos pacientes"""
    queryset = Anamnese.objects.all()
    serializer_class = AnamneseSerializer
    authentication_classes = [BasicAuthentication]
    permission_classes = [IsAuthenticated]


