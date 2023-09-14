from rest_framework import serializers
from base.models import *

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'
        
class OthersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Others
        fields = '__all__'