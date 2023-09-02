from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .serializers import *
from base.models import *


@api_view(('GET', 'POST'))
def StudentView(request):
    if request.method == 'GET':
        students = Student.objects.all()
        serializer = StudentSerializer(students, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = StudentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            print(serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(('GET', 'POST'))
def StudentIdCheck(request):
    if request.method == 'POST':
        studentid = request.data['studentid']
        studentid = studentid[0:7]
        try:
            studentChecked = Student.objects.get(studentid=studentid)
        except Student.DoesNotExist:
            studentChecked = None

        if studentChecked is not None:
            serializer = StudentSerializer(studentChecked)
            Checkin.objects.create(student=studentChecked)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({'message': 'No student found with the given ID'}, status=status.HTTP_404_NOT_FOUND)


def UpdateCheckin(request):
    if request.method == 'POST':
        studentid = request.data['studentid']
        studentid = studentid[0:7]
        purpose = request.data['purpose']
        print(purpose)
        print(studentid)
        print("AAAAAAAAAAA")
        try:
            studentChecked = Student.objects.get(studentid=studentid)
        except Student.DoesNotExist:
            studentChecked = None

        if studentChecked is not None:
            serializer = StudentSerializer(studentChecked)
            print(serializer.data)
            check = Checkin.objects.get(student=studentChecked)
            check.purpose = int(purpose)
            check.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)