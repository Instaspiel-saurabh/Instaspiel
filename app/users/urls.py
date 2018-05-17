from django.conf.urls import url
from . import views


app_name='users'

urlpatterns = [
	url(r'^user$', views.index, name='index'),
	
]