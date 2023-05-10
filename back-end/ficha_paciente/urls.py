from django.urls import path

from . import views

urlpatterns = [
    path('', views.AnamneseViewSet.as_view(), name='get_all_fichas'),
]
