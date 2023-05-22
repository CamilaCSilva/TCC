from django.contrib import admin
from hospital.models import User, ProfissionaldeSaude, FichaPaciente

# Register your models here.

class Users(admin.ModelAdmin):
    list_display = ( 'cpf',)
    list_display_links = ('cpf',)
    search_fields = ( 'cpf',)

admin.site.register(User, Users)

class ProfissionaisdeSaude(admin.ModelAdmin):
    list_display = ( 'cpf', 'nome_completo', 'campo_escolha' ,'documento_trabalho')
    list_display_links = ('cpf',)
    search_fields = ( 'cpf', 'nome_completo' )

admin.site.register(ProfissionaldeSaude, ProfissionaisdeSaude)

class ResponsavelAnamnese(admin.ModelAdmin):
    list_display = ( 'id','anamnese', 'paramedico')
    list_display_links = ('id',)

admin.site.register(FichaPaciente, ResponsavelAnamnese)