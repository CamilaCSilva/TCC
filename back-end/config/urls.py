from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import (TokenObtainPairView,TokenRefreshView,)
from drf_spectacular.views import SpectacularAPIView, SpectacularRedocView, SpectacularSwaggerView
"""
from hospital.views import ProfissionaldeSaudeViewSet, FichaPacienteViewSet, ListaFichaPorParamedico
from ficha_paciente.views import AnamneseViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('profissionaisdesaude', ProfissionaldeSaudeViewSet)
router.register('fichaspacientes', FichaPacienteViewSet)
router.register('anamnese', AnamneseViewSet)
"""

urlpatterns = [
    path('admin/', admin.site.urls),
    path('anamnese/', include('ficha_paciente.urls'), name='anamnese.urls'),
    path('profissionaldesaude/', include('hospital.urls'), name='profissionaldesaude.urls'),
    # path('paramedico/<int:pk>/fichas/', ListaFichaPorParamedico.as_view()),
    path('api/docs/schema/', SpectacularAPIView.as_view(), name='schema'),
    path('api/docs/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
    path('api/docs/redoc/', SpectacularRedocView.as_view(url_name='schema'), name='redoc'),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
