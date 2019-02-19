from django.db import models


# theater table
class Theater(models.Model):
    theater = models.CharField(max_length=50, primary_key=True)

    class Meta:
        db_table = 'theater'


# team table
class Team(models.Model):
    team = models.CharField(max_length=50, primary_key=True)
    theater = models.ForeignKey('Theater', on_delete=models.CASCADE)

    class Meta:
        db_table = 'team'


# member table
class Member(models.Model):
    member = models.CharField(max_length=100, primary_key=True)
    theater = models.ForeignKey('Theater', on_delete=models.CASCADE)
    team = models.ForeignKey('Team', on_delete=models.CASCADE)
    join_time = models.CharField(max_length=50)

    class Meta:
        db_table = 'member'


# fans club table
class FansClub(models.Model):
    fans_club = models.CharField(max_length=100, primary_key=True)
    member = models.ForeignKey('Member', on_delete=models.CASCADE, null=True)
    is_cp_club = models.BooleanField(default=False)

    class Meta:
        db_table = 'fans_club'


# project information table
class ProjectInfo(models.Model):
    project_id = models.IntegerField(primary_key=True)
    project_name = models.CharField(max_length=200)
    fans_club = models.ForeignKey('FansClub', on_delete=models.CASCADE)
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    goal_amount = models.FloatField()
    is_hidden = models.BooleanField(default=False)
    # platform = models.CharField(max_length=50, default='摩点')
    # project_url = models.CharField(max_length=200)
    # final_amount = models.FloatField()
    # is_finished = models.BooleanField(default=False)

    class Meta:
        db_table = 'project_info'


# project sampling table
class ProjectSample(models.Model):
    project_id = models.ForeignKey('ProjectInfo', on_delete=models.CASCADE)
    sample_time = models.DateTimeField(auto_now=True)
    real_amount = models.FloatField()
    support_no = models.IntegerField(null=True)

    class Meta:
        db_table = 'project_sample'


# other platforms
# class OtherAmount(models.Model):
#     project_name = models.CharField(max_length=100)
#     platform = models.CharField(max_length=50)
#     real_amount = models.FloatField()


# fans information table
class Fans(models.Model):
    fans_id = models.IntegerField()
    fans_name = models.CharField(max_length=100)
    project = models.ForeignKey('ProjectInfo', on_delete=models.CASCADE)
    account = models.FloatField()

    class Meta:
        db_table = 'fans'


# # Growth.
# Amount growth (total)
class AmountGrowthTotal(models.Model):
    sample_time = models.DateTimeField(primary_key=True)
    amount_total = models.FloatField()

    class Meta:
        db_table = 'amount_growth_total'


# Amount growth (theater)
class AmountGrowthTheater(models.Model):
    # id = models.AutoField(primary_key=True)
    sample_time = models.DateTimeField()
    theater = models.CharField(max_length=50)
    amount_theater = models.FloatField()

    class Meta:
        db_table = 'amount_growth_theater'


# Amount growth (team)
class AmountGrowthTeam(models.Model):
    sample_time = models.DateTimeField()
    team = models.CharField(max_length=50)
    amount_team = models.FloatField()

    class Meta:
        db_table = 'amount_growth_team'


# Amount growth (member)
class AmountGrowthMember(models.Model):
    sample_time = models.DateTimeField()
    member = models.CharField(max_length=50)
    amount_member = models.FloatField()

    class Meta:
        db_table = 'amount_growth_member'
