from django.urls import path

from . import views

urlpatterns = [
    path('', views.AnamneseViewSet.as_view(), name='get_all_fichas'),
    path('add', views.AddAnamneseViewSet.as_view()),
    path('delete/', views.DeleteAnamneseViewSet.as_view()),
    path('edit/', views.EditPacienteAnamneseViewSet.as_view()),
]
