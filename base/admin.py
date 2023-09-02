from django.contrib import admin
from .models import *


class StudentAdmin(admin.ModelAdmin):
    list_display = ('namesurname', 'studentid', 'userDepart', 'userClass')
    search_fields = ('namesurname', 'studentid', 'userDepart', 'userClass')
    list_filter = ('namesurname', 'studentid', 'userDepart', 'userClass')
    ordering = ('namesurname', 'studentid', 'userDepart', 'userClass')


admin.site.register(Student)


class OthersAdmin(admin.ModelAdmin):
    list_display = ('namesurname', 'email', 'compDep', 'purpose')
    search_fields = ('namesurname', 'email', 'compDep', 'purpose')
    list_filter = ('namesurname', 'email', 'compDep', 'purpose')
    ordering = ('namesurname', 'email', 'compDep', 'purpose')


admin.site.register(Others)


admin.site.register(Checkin)

# Register your models here.
