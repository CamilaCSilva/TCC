from django.urls import path
from . import views

urlpatterns = [
    path('', views.ProfissionaldeSaudeViewSet.as_view(), name='paramedicos'),
    path('signup', views.SignUpProfissionalViewSet.as_view(), name='signup'),
    path('login', views.LoginProfissionalViewSet.as_view()),
    path('user', views.UserViewSet.as_view()),
    path('edit/', views.EditProfissionalViewSet.as_view()),
    path('logout', views.LogOutProfissionalViewSet.as_view()),
    path('delete/', views.DeleteProfissionalViewSet.as_view()),
]
