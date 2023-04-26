from django.contrib import admin
from hospital.models import ProfissionaldeSaude

# Register your models here.

class ProfissionaisdeSaude(admin.ModelAdmin):
    list_display = ( 'cpf', 'nomeCompleto')
    list_display_links = ('cpf',)
    search_fields = ( 'cpf', )

admin.site.register(ProfissionaldeSaude, ProfissionaisdeSaude)