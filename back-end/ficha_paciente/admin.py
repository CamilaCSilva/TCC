from django.contrib import admin
from ficha_paciente.models import Anamnese
# Register your models here.

class Anamneses(admin.ModelAdmin):
    list_display = ( 'cpf', 'nome_completo')
    list_display_links = ('cpf',)
    search_fields = ( 'cpf', 'nome_completo' )

admin.site.register(Anamnese, Anamneses)