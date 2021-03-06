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
    path('mobile/', views.index_mobile, name='mobile'),
    path('growth/', views.growth_test, name='growth'),
    # path('percentage/', views.percentage, name='percentage'),
    path('percentage/', views.percentage_test, name='percentage'),
    path('pk/', views.hot_pk, name='pk'),
    path('member/', views.member, name='member'),
    path('daily_growth/', views.daily_growth, name='daily_growth'),
    path('daily_growth2/', views.daily_growth2, name='daily_growth2'),
    path('live_growth/', views.live_growth, name='live_growth'),
    path('room_growth/', views.room_growth, name='room_growth'),
    path('pocket_growth/', views.pocket_growth, name='pocket_growth'),
    path('detail/', views.detail, name='detail'),
    # path('descendant/', views.descendant, name='descendant'),
    path('descendant/', views.descendant_test, name='descendant'),
    path('sister_theaters/', views.sister_theaters, name='sister_theaters'),
    path('login/', views.login, name='login'),
    path('register/', views.register, name='register'),
    path('about_us/', TemplateView.as_view(template_name='about_us.html'), name='about_us'),

    # Best 50
    path('b50_index/', views.b50_index, name='b50_index'),
    path('b50_detail/', views.b50_detail, name='b50_detail'),
    path('b50_declaration/', views.b50_declaration, name='b50_declaration'),
]
