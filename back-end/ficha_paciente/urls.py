from django.urls import re_path
from ficha_paciente import views

urlpatterns = [
    re_path(r'^anamnese/$',views.anamneseAPI),
    re_path(r'^anamnese/([0-9]+)$', views.anamneseAPI)
]
