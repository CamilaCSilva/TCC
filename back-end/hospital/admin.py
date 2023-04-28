from django.contrib import admin
from hospital.models import ProfissionaldeSaude

# Register your models here.

class ProfissionaisdeSaude(admin.ModelAdmin):
    list_display = ( 'cpf', 'nomeCompleto', 'campo_escolha' ,'documentoTrabalho')
    list_display_links = ('cpf',)
    search_fields = ( 'cpf', 'nomeCompleto' )

admin.site.register(ProfissionaldeSaude, ProfissionaisdeSaude)