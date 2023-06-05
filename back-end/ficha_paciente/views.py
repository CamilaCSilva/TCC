"""
from rest_framework.authentication import BasicAuthentication
from rest_framework.permissions import IsAuthenticated
"""
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from ficha_paciente.models import Anamnese
from ficha_paciente.serializer import AnamneseSerializer

# Create your views here.
class AnamneseViewSet(APIView):
    
    def get(self, request):
        
        if request.method == 'GET':            
            try:
                """Listando as fichas dos pacientes por data"""
                anamnese_data = request.GET['data']
                anamnese = Anamnese.objects.all()
                anamnese = Anamnese.objects.filter(data = anamnese_data)

                anamnese_serializer = AnamneseSerializer(anamnese, many=True)
                return Response(anamnese_serializer.data)        
            except:
                try:
                    """Listando as fichas dos pacientes por cpf"""
                    anamnese_cpf = request.GET['cpf']
                    anamnese = Anamnese.objects.get(pk = anamnese_cpf)

                    anamnese_serializer = AnamneseSerializer(anamnese)
                    return Response(anamnese_serializer.data)        
                except:
                    """Listando todas as fichas dos pacientes"""
                    anamnese = Anamnese.objects.all()
                    anamnese_serializer = AnamneseSerializer(anamnese, many=True)
                    return Response(anamnese_serializer.data)
        
        return Response(status=status.HTTP_400_BAD_REQUEST)
            

class AddAnamneseViewSet(APIView):

    def post(self, request):
        """inserindo uma nova ficha"""
        anamnese_data = request.data
        anamnese_serializer = AnamneseSerializer(data=anamnese_data)
                
        if anamnese_serializer.is_valid():
            anamnese_serializer.save()
            return Response("Adicionado com sucesso!!", status=status.HTTP_201_CREATED)
                
        return Response(anamnese_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class DeleteAnamneseViewSet(APIView):
    def delete(self, request):
        """Deletendo uma ficha"""
        try:
            anamnese = Anamnese.objects.get(cpf = request.data['cpf'])
            anamnese.delete()
            return Response("Deletado com Sucesso!!", status=status.HTTP_202_ACCEPTED)
        except:
            return Response("Falha para deletar.", status=status.HTTP_400_BAD_REQUEST)

class EditPacienteAnamneseViewSet(APIView):
    def put(self, request):
        """Editando uma ficha"""
        anamnese_data = request.data['cpf']
        try:
            anamnese = Anamnese.objects.get(cpf=anamnese_data)
        except:
            return Response(status=status.HTTP_404_NOT_FOUND)
        anamnese_serializer = AnamneseSerializer(anamnese, data=request.data)
        if anamnese_serializer.is_valid():
            anamnese_serializer.save()
            return Response("Atualizado com Sucesso!!", status=status.HTTP_202_ACCEPTED)
        return Response("Falha para atualizar.", status=status.HTTP_400_BAD_REQUEST)