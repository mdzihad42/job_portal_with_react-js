from rest_framework import serializers
from .models import Company, JobPosting

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = '__all__'

class JobPostingSerializer(serializers.ModelSerializer):
    company_name = serializers.ReadOnlyField(source='company.name')
    company_id = serializers.ReadOnlyField(source='company.id')

    class Meta:
        model = JobPosting
        fields = [
            'id', 'title', 'company', 'company_name', 'company_id', 'location',
            'job_type', 'salary_range', 'description', 'requirements',
            'posted_at', 'is_active'
        ]
        extra_kwargs = {
            'company': {'write_only': True}
        }
