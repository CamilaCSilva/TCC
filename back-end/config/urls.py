from django.contrib import admin
from django.urls import path, include
from hospital.views import ProfissionaldeSaudeViewSet
from ficha_paciente.views import AnamneseViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('profissionaisdesaude', ProfissionaldeSaudeViewSet)
router.register('anamnese', AnamneseViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
]
