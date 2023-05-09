from django.contrib import admin
from django.urls import path, include

from . import views

urlpatterns = [
    path('', views.get_fichas, name='get_all_fichas'),
    path('paciente/<str:cpf>', views.get_by_cpf)
]
