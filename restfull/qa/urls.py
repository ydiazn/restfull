from django.urls.conf import path
from . import views


app_name = 'qa'
urlpatterns = [
    path(
        '',
        views.Questions.as_view(),
        name='questions'
    ),
    path(
        'questions/',
        views.QuestionListCreateAPIView.as_view(),
        name='question-list-create-api'
    ),
    path(
        'questions/<int:pk>',
        views.QuestionRetrieveUpdateDestroyAPIView.as_view(),
        name='question-retrieve-update-destroy-api'
    ),
]

