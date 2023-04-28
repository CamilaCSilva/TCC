from django.contrib import admin
from ficha_paciente.models import Anamnese
# Register your models here.

class Anamneses(admin.ModelAdmin):
    list_display = ( 'cpf', 'nomeCompleto')
    list_display_links = ('cpf',)
    search_fields = ( 'cpf', 'nomeCompleto' )

admin.site.register(Anamnese, Anamneses)