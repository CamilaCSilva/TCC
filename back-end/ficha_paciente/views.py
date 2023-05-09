from rest_framework import viewsets, status
from rest_framework.authentication import BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view
from rest_framework.response import Response

from ficha_paciente.models import Anamnese
from ficha_paciente.serializer import AnamneseSerializer

from django.shortcuts import render
from django.http import HttpResponse ,JsonResponse

import json

# Create your views here.
@api_view(['GET'])
def get_fichas(request):

    if request.method == 'GET':
        anamnese = Anamnese.objects.all()
        anamnese_serializer = AnamneseSerializer(anamnese, many=True)
        return Response(anamnese_serializer.data)
    return Response(status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_by_cpf(request, cpf):

    try:
        anamnese = Anamnese.objects.get(pk=cpf)
    except:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        anamnese_serializer = AnamneseSerializer(anamnese)
        return Response(anamnese_serializer.data)
    return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'POST', 'PUT', 'DELETE'])
def anamnese_manager(request):

    if request.method == 'GET':

        try:
            if request.GET['cpf'] and request.GET['data']:
                anamnese_cpf = request.GET['cpf']
                anamnese_data = request.GET['data']

                try:
                    anamnese = Anamnese.objects.get(pk=anamnese_cpf, data = anamnese_data)
                except:
                    return Response(status=status.HTTP_404_NOT_FOUND)
                
                anamnese_serializer = AnamneseSerializer(anamnese)
                return Response(anamnese_serializer.data)
            
            else:
                return Response(status=status.HTTP_400_BAD_REQUEST)
        
        except:
            return Response(status=status.HTTP_400_BAD_REQUEST)

        
        
        
            
        
# class AnamneseViewSet(viewsets.ModelViewSet):
#     """Listando as fichas dos pacientes"""
#     queryset = Anamnese.objects.all()
#     serializer_class = AnamneseSerializer
#     authentication_classes = [BasicAuthentication]
#     permission_classes = [IsAuthenticated]
    

    # def anamneseAPI(request, cpf=0):
        
    #     if request.method == 'GET':
    #         anamnese = Anamnese.objects.all()
    #         anamnese_serializer = AnamneseSerializer(anamnese, many=True)
    #         return JsonResponse(anamnese_serializer.data, safe=False)
        
    #     elif request.method == 'POST':
    #         anamnese_data = JSONParser().parse(request)
    #         anamnese_serializer = AnamneseSerializer(data=anamnese_data)
    #         if anamnese_serializer.is_valid():
    #             anamnese_serializer.save()
    #             return JsonResponse("Adicionado com sucesso!!", safe=False)
    #         return JsonResponse("Falha para adicionar", safe=False)
        
    #     elif request.method == 'PUT':
    #         anamnese_data = JSONParser().parse(request)
    #         anamnese = Anamnese.objects.get(cpf=anamnese_data['cpf'])
    #         anamnese_serializer = AnamneseSerializer(anamnese, data=anamnese_data)
    #         if anamnese_serializer.is_valid():
    #             anamnese_serializer.save()
    #             return JsonResponse("Atualizado com Sucesso!!", safe=False)
    #         return JsonResponse("Falha para atualizar.", safe=False)
        
    #     elif request.method == 'DELETE':
    #         anamnese = Anamnese.objects.get(cpf = cpf)
    #         anamnese.delete()
    #         return JsonResponse("Deletado com Sucesso!!", safe=False)
