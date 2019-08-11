
from django.urls import reverse
from django.views.generic import TemplateView
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from rest_framework.generics import (
    ListCreateAPIView, GenericAPIView, RetrieveUpdateDestroyAPIView)
from . import serializers
from . import models

# Create your views here.
class Questions(TemplateView):
    template_name = 'qa/questions.html'


class QuestionListCreateAPIView(ListCreateAPIView):
    queryset = models.Question.objects.all()
    serializer_class = serializers.QuestionSerializer


class QuestionRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    queryset = models.Question.objects.all()
    serializer_class = serializers.QuestionSerializer
