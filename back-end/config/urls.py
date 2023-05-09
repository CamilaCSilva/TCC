from django.contrib import admin
from django.urls import path, include
from hospital.views import ProfissionaldeSaudeViewSet, FichaPacienteViewSet, ListaFichaPorParamedico
# from ficha_paciente.views import AnamneseViewSet
# from rest_framework import routers

# router = routers.DefaultRouter()
# router.register('profissionaisdesaude', ProfissionaldeSaudeViewSet)
# router.register('fichaspacientes', FichaPacienteViewSet)
# router.register('anamnese', AnamneseViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('anamnese/', include('ficha_paciente.urls'), name='anamnese.urls'),
    # path('paramedico/<int:pk>/fichas/', ListaFichaPorParamedico.as_view()),
]
