# Generated by Django 4.1.7 on 2023-04-27 05:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("base", "0004_checkin"),
    ]

    operations = [
        migrations.CreateModel(
            name="Others",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("namesurname", models.CharField(max_length=100)),
                ("email", models.CharField(max_length=100)),
                ("compDep", models.CharField(max_length=100)),
            ],
        ),
    ]