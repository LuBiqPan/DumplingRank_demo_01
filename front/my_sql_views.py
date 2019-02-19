
from .models import *


class V103RealTimeAmount(models.Model):
    member = models.CharField(max_length=100, primary_key=True)
    real_amount = models.FloatField()
    support_no = models.IntegerField()

    class Meta:
        db_table = 'v103_real_time_amount'
        ordering = ['-real_amount']


# # Growth.
# Growth (total)
class G101GrowthTotal(models.Model):
    sample_time = models.DateTimeField(primary_key=True)
    amount_total = models.FloatField()

    class Meta:
        db_table = 'g101_growth_total'


# Growth (theater)
class G102GrowthTheater(models.Model):
    # id = models.IntegerField(primary_key=True)
    sample_time = models.DateTimeField(primary_key=True)
    theater = models.CharField(max_length=50)
    amount_theater = models.FloatField()

    class Meta:
        # managed = False
        db_table = 'g102_growth_theater'


# Growth (team)
class G103GrowthTeam(models.Model):
    sample_time = models.DateTimeField(primary_key=True)
    team = models.CharField(max_length=50)
    amount_team = models.FloatField()

    class Meta:
        managed = False
        db_table = 'g103_growth_team'


# Growth (member)
class G104GrowthMember(models.Model):
    sample_time = models.DateTimeField(primary_key=True)
    member = models.CharField(max_length=50)
    amount_member = models.FloatField()

    class Meta:
        managed = False
        db_table = 'g104_growth_member'
