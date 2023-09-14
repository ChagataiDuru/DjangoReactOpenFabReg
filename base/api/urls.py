from django.urls import path
from .views import *


urlpatterns = [
    path('student/', StudentView, name='student'),
    path('others/', OthersView, name='others'),
    path('id/', IdCheck, name='studentidcheck'),
    path('updatecheckin/', UpdateCheckin, name='updatecheckin')
]
