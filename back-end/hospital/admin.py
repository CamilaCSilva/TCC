from django.contrib import admin
from hospital.models import ProfissionaldeSaude

# Register your models here.


class ProfissionaisdeSaude(admin.ModelAdmin):
    list_display = ( 'cpf', 'nome_completo', 'campo_escolha' ,'documento_trabalho')
    list_display_links = ('cpf',)
    search_fields = ( 'cpf', 'nome_completo' )

admin.site.register(ProfissionaldeSaude, ProfissionaisdeSaude)
