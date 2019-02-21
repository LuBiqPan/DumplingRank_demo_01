"""DumplingRank_demo_01 URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path
from django.views.generic import TemplateView
from front import views


urlpatterns = [
    path('', views.index, name='index'),
    path('growth/', views.growth, name='growth'),
    # path(r'^index_upgrade/$', views.index_upgrade, name='index_upgrade'),
    # path('list/', views.MainTableListView.as_view(), name='index'),
    # path('growth/', views.growth_index, name='growth'),
    # path('rank/', views.MainTableView.as_view(), name='rank'),
    # path('about_us/', TemplateView.as_view(template_name='about_us.html'))
]
