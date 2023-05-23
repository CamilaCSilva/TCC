from django.urls import path
from . import views

urlpatterns = [
    path('', views.ProfissionaldeSaudeViewSet.as_view(), name='paramedicos'),
]
