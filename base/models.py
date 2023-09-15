from django.db import models
from enum import Enum


class Purpose(Enum):
    ProductionSupport = 1
    Education = 2
    WorkshopUsage = 3
    Visit = 4
    Other = 5

class OtherType(Enum):
    Student = 1
    Academician = 2
    Entrepreneur = 3
    Other = 4

class Student(models.Model):
    namesurname = models.CharField(max_length=100)
    studentid = models.CharField(max_length=100)
    userDepart = models.CharField(max_length=100)
    userClass = models.CharField(max_length=100)

    def __str__(self):
        return self.namesurname


class Others(models.Model):
    namesurname = models.CharField(max_length=100)
    otherId = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    compDep = models.CharField(max_length=100)
    otherType = models.IntegerField(
        choices=[(tag.value, tag) for tag in OtherType], blank=True, null=True
    )

    def __str__(self):
        return self.namesurname


class Checkin(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE, null=True, blank=True)
    other = models.ForeignKey(Others, on_delete=models.CASCADE, null=True, blank=True)
    checkin = models.DateTimeField(auto_now_add=True)
    purpose = models.IntegerField(
        choices=[(tag.value, tag) for tag in Purpose], blank=True, null=True
    )

    def __str__(self):
        if self.student is None:
            return self.other.namesurname
        return self.student.namesurname
