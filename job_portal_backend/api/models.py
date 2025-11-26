from django.db import models

class Company(models.Model):
    name = models.CharField(max_length=100,null=True)
    website = models.URLField(blank=True,null=True)
    description = models.TextField(blank=True,null=True)

    def __str__(self):
        return self.name

class JobPosting(models.Model):
    title = models.CharField(max_length=255,null=True)
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name='jobs',null=True)
    location = models.CharField(max_length=100,null=True)
    job_type = models.CharField(max_length=50,null=True)
    salary_range = models.CharField(max_length=100, blank=True,null=True)
    description = models.TextField()
    requirements = models.TextField()
    posted_at = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.title
