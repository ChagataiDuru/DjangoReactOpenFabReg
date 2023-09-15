from django.contrib import admin
from .models import *


class StudentAdmin(admin.ModelAdmin):
    list_display = ('namesurname', 'studentid', 'userDepart', 'userClass')
    search_fields = ('namesurname', 'studentid', 'userDepart', 'userClass')
    list_filter = ('namesurname', 'studentid', 'userDepart', 'userClass')
    ordering = ('namesurname', 'studentid', 'userDepart', 'userClass')


admin.site.register(Student, StudentAdmin)


class OthersAdmin(admin.ModelAdmin):
    list_display = ('namesurname', 'email', 'compDep')
    search_fields = ('namesurname', 'email', 'compDep')
    list_filter = ('namesurname', 'email', 'compDep')
    ordering = ('namesurname', 'email', 'compDep')

admin.site.register(Others, OthersAdmin)


class CheckinAdmin(admin.ModelAdmin):
    list_display = ('checkin', 'purpose','student','other',)
    search_fields = ('checkin', 'purpose','student','other',)
    list_filter = ('checkin', 'purpose','student','other',)
    ordering = ('checkin', 'purpose','student','other',)

admin.site.register(Checkin, CheckinAdmin)

# Register your models here.
