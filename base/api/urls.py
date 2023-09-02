from django.urls import path
from .views import *


urlpatterns = [
    path('student/', StudentView, name='student'),
    path('studentidcheck/', StudentIdCheck, name='studentidcheck'),
    path('updatecheckin/', UpdateCheckin, name='updatecheckin')
]
