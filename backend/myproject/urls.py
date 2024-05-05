from django.contrib import admin
from django.contrib.auth import views
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include
from myapp.views import (
                        home, 
                        profile, 
                        login, 
                        logout2, 
                        sendToLogin, 
                        UserProfileView
                        )
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView
)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home, name='home'),
    # Accounts
    path('accounts/', include('django.contrib.auth.urls')),
    path('accounts/login/', login, name='login'),
    path('accounts/logout2/', views.LogoutView.as_view(), name='logout2'),
    path('accounts/profile/', profile, name='profile'),
    path('accounts/', sendToLogin, name='accounts'),
    # API Connections
    path('api/users/profile/', UserProfileView.as_view(), name='user-profile'),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
]

if settings.DEBUG:
   urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
