from django.urls import path
from . import views

urlpatterns = [
    path('', views.ProfissionaldeSaudeViewSet.as_view(), name='paramedicos'),
    path('login', views.LoginProfissionalViewSet.as_view()),
    path('user', views.UserViewSet.as_view()),
    path('logout', views.LogOutProfissionalViewSet.as_view()),
]
