from django.conf.urls import url, include
from rest_framework import routers
from rest_framework.schemas import get_schema_view
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from veterinary import views

router = routers.DefaultRouter()
router.register(r'veterinary', views.VeterinaryViewSet)
router.register(r'animals', views.AnimalViewSet)
router.register(r'donations', views.DonationViewSet)

schema_view = get_schema_view(title='Ong API')

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls')),
    url(r'^api/token$', TokenObtainPairView.as_view(),
        name='token_obtain_pair'),
    url(r'^api/token/refresh$', TokenRefreshView.as_view(),
        name='toke_refresh'),
    url(r'^schema/$', schema_view),
]
