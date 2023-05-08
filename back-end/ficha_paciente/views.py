from rest_framework import viewsets
from ficha_paciente.models import Anamnese
from ficha_paciente.serializer import AnamneseSerializer
from rest_framework.authentication import BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

# Create your views here.
@csrf_exempt
def anamneseAPI(request, cpf=0):
    if request.method == 'GET':
        anamnese = Anamnese.objects.all()
        anamnese_serializer = AnamneseSerializer(anamnese, many=True)
        return JsonResponse(anamnese_serializer.data, safe=False)
    
    elif request.method == 'POST':
        anamnese_data = JSONParser().parse(request)
        anamnese_serializer = AnamneseSerializer(data=anamnese_data)
        if anamnese_serializer.is_valid():
            anamnese_serializer.save()
            return JsonResponse("Adicionado com sucesso!!", safe=False)
        return JsonResponse("Falha para adicionar", safe=False)
    
    elif request.method == 'PUT':
        anamnese_data = JSONParser().parse(request)
        anamnese = Anamnese.objects.get(cpf=anamnese_data['cpf'])
        anamnese_serializer = AnamneseSerializer(anamnese, data=anamnese_data)
        if anamnese_serializer.is_valid():
            anamnese_serializer.save()
            return JsonResponse("Atualizado com Sucesso!!", safe=False)
        return JsonResponse("Falha para atualizar.", safe=False)
    
    elif request.method == 'DELETE':
        anamnese = Anamnese.objects.get(cpf = cpf)
        anamnese.delete()
        return JsonResponse("Deletado com Sucesso!!", safe=False)

# class AnamneseViewSet(viewsets.ModelViewSet):
#     queryset = Anamnese.objects.all()
#     serializer_class = AnamneseSerializer
#     authentication_classes = [BasicAuthentication]
#     permission_classes = [IsAuthenticated]


