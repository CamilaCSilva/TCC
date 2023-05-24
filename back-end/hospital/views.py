from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from hospital.models import ProfissionaldeSaude
from hospital.serializer import ProfissionaldeSaudeSerializer
from rest_framework.exceptions import AuthenticationFailed
import jwt, datetime

# Create your views here.

class ProfissionaldeSaudeViewSet(APIView):
    
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
                """Cadastro um novo profissional"""
                profissional_data = request.data
                
                profissional_serializer = ProfissionaldeSaudeSerializer(data=profissional_data)
                if profissional_serializer.is_valid(raise_exception=True):
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

class LoginProfissionalViewSet(APIView):
    def post(self, request):
        """Logando um profissional"""
        cpf = request.data['cpf']
        password = request.data['password']
                
        user = ProfissionaldeSaude.objects.filter(cpf=cpf).first()

        if user is None:
            raise AuthenticationFailed('Usuário não encontrado')
        
        if not user.check_password(password):
            raise AuthenticationFailed('Senha incorreta')
        
        payload = {
            'cpf' : user.cpf,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=180),
            'iat': datetime.datetime.utcnow()
        }

        token = jwt.encode(payload, 'secret', algorithm='HS256')

        response = Response()
        response.set_cookie(key='jwt', value=token, httponly=True)
        response.data = {
            'jwt': token
        }
        
        return response
    
class UserViewSet(APIView):
    def get(self, request):
        token = request.COOKIES.get('jwt')

        if not token:
            raise AuthenticationFailed('Não Autenticado')
        
        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Não Autenticado')
        
        user = ProfissionaldeSaude.objects.filter(cpf=payload['cpf']).first()
        serializer = ProfissionaldeSaudeSerializer(user)

        return Response(serializer.data)

class LogOutProfissionalViewSet(APIView):
    def post(self, request):
        """LogOut de um profissional"""
        response = Response()
        response.delete_cookie('jwt')
        response.data = {
            'message': 'Sucesso'
        }
        
        return response