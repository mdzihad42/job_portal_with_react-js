from rest_framework.routers import DefaultRouter
from .views import CompanyViewSet, JobPostingViewSet

router = DefaultRouter()
router.register(r'companies', CompanyViewSet)
router.register(r'jobs', JobPostingViewSet)

urlpatterns = router.urls
