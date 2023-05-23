"""
from rest_framework.authentication import BasicAuthentication
from rest_framework.permissions import IsAuthenticated
"""
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from hospital.models import ProfissionaldeSaude
from hospital.serializer import ProfissionaldeSaudeSerializer

# Create your views here.

class ProfissionaldeSaudeViewSet(APIView):
    """
    # Listando os profissionais de saúde
    queryset = ProfissionaldeSaude.objects.all()
    serializer_class = ProfissionaldeSaudeSerializer
    authentication_classes = [BasicAuthentication]
    permission_classes = (IsAuthenticated,)
    """

    def get(self, request):
    
        if request.method == 'GET':            
            try:
                """Listando os profissionais por cpf"""
                if request.GET['cpf'] != '' and request.GET['cpf'] != 'undefined':
                    profissional_cpf = request.GET['cpf']
                    profissional = ProfissionaldeSaude.objects.get(pk = profissional_cpf)

                    profissional_serializer = ProfissionaldeSaudeSerializer(profissional)
                    return Response(profissional_serializer.data) 
                else:
                    return Response(status=status.HTTP_400_BAD_REQUEST)   
            except:
                """Listando todas os profissionais"""
                profissional = ProfissionaldeSaude.objects.all()
                profissional_serializer = ProfissionaldeSaudeSerializer(profissional, many=True)
                return Response(profissional_serializer.data)
    
        return Response(status=status.HTTP_400_BAD_REQUEST)
    
    def post(self, request):
        if request.method == 'POST':
                """inserindo um novo profissional"""
                profissional_data = request.data
                
                profissional_serializer = ProfissionaldeSaudeSerializer(data=profissional_data)
                if profissional_serializer.is_valid():
                    profissional_serializer.save()
                    return Response("Adicionado com sucesso!!", status=status.HTTP_201_CREATED)
                
                return Response("Falha para adicionar", status=status.HTTP_400_BAD_REQUEST)
        
    def put(self, request):
        """Editando um profissional"""
        if request.method == 'PUT':
                
                profissional_data = request.data['cpf']

                try:
                    profissional = ProfissionaldeSaude.objects.get(cpf=profissional_data)
                except:
                    return Response(status=status.HTTP_404_NOT_FOUND)
                profissional_serializer = ProfissionaldeSaudeSerializer(profissional, data=request.data)
                if profissional_serializer.is_valid():
                    profissional_serializer.save()
                    return Response("Atualizado com Sucesso!!", status=status.HTTP_202_ACCEPTED)
                return Response("Falha para atualizar.", status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request):
        """Deletendo um profissional"""
        if request.method == 'DELETE':
            try:
                profissional = ProfissionaldeSaude.objects.get(cpf = request.data['cpf'])
                profissional.delete()
                return Response("Deletado com Sucesso!!", status=status.HTTP_202_ACCEPTED)
            except:
                return Response("Falha para deletar.", status=status.HTTP_400_BAD_REQUEST)

"""
class FichaPacienteViewSet(viewsets.ModelViewSet):
    # Listando as fichas dos pacientes de cada profissional
    queryset = FichaPaciente.objects.all()
    serializer_class = FichasPacientesSerializer
    authentication_classes = [BasicAuthentication]
    permission_classes = [IsAuthenticated]

class ListaFichaPorParamedico(generics.ListAPIView):
    # Listando as fichas de um(a) Paramédico(a)
    def get_queryset(self):
        queryset = FichaPaciente.objects.filter(paramedico_id=self.kwargs['pk'])
        return queryset
    serializer_class = ListaFichasProfissionaisSerializer
    authentication_classes = [BasicAuthentication]
    permission_classes = [IsAuthenticated]
"""


