from django.conf.urls import url, include
from django.views.decorators.csrf import csrf_exempt

accounts_urlpatterns = [
    url(r'^api/', include('djoser.urls')),
    url(r'^api/', include('djoser.urls.authtoken')),
]