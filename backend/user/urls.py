from django.urls import path

from user.views import ListCreateUsersView, RetrieveUpdateDeleteUsersView, SearchUsersView

from user.views import MeView

urlpatterns = [
    path('list/', ListCreateUsersView.as_view()),
    path('<int:pk>/', RetrieveUpdateDeleteUsersView.as_view()),
    path('me/', MeView.as_view()),
    path('', SearchUsersView.as_view(), name='user-search'),
]
