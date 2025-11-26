from rest_framework import viewsets
from .models import Company, JobPosting
from .serializers import CompanySerializer, JobPostingSerializer

class CompanyViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class JobPostingViewSet(viewsets.ModelViewSet):
    queryset = JobPosting.objects.filter(is_active=True).order_by('-posted_at')
    serializer_class = JobPostingSerializer
