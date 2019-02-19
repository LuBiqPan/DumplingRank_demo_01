from django.shortcuts import render
from django.views.generic import View, ListView
from django.core import serializers
from django.http import HttpResponse
import json
from django.http.response import JsonResponse

# from .models import *
from .my_sql_views import *


def index(request):

    # # Growth.
    growth_total = G101GrowthTotal.objects.all()
    growth_theater = G102GrowthTheater.objects.all()
    growth_team = G103GrowthTeam.objects.all()
    growth_member = G104GrowthMember.objects.all()

    # Record total amount growth.
    # for field in growth_total:
    #     new_raw = AmountGrowthTotal.objects.create(sample_time=field.sample_time, amount_total=field.amount_total)
    #     new_raw.save()

    # Record theater amount growth.
    # No need to use new_raw.save(), strange.
    # for field in growth_theater:
    #     new_raw = AmountGrowthTheater.objects.create(sample_time=field.sample_time,
    #                                                  theater=field.theater,
    #                                                  amount_theater=field.amount_theater)
    # print(new_raw.sample_time, new_raw.theater, new_raw.amount_theater)

    # Record team amount growth.
    # No need to use new_raw.save(), strange.
    # for field in growth_team:
    #     new_raw = AmountGrowthTeam.objects.create(sample_time=field.sample_time,
    #                                               team=field.team,
    #                                               amount_team=field.amount_team)
    #     print(new_raw.sample_time, new_raw.team, new_raw.amount_team)

    # Record member amount growth.
    # No need to use new_raw.save(), strange.
    # for field in growth_member:
    #     new_raw = AmountGrowthMember.objects.create(sample_time=field.sample_time,
    #                                                 member=field.member,
    #                                                 amount_member=field.amount_member)
    # print(new_raw.sample_time, new_raw.member, new_raw.amount_member)

    # # Main table.
    main_table = V103RealTimeAmount.objects.all()
    context = {}
    i = 1   # rank
    for field in main_table:
        inner_dict = {
            "rank": str(i),
            "member": str(field.member),
            "real_amount": str(field.real_amount),
            "support_no": str(field.support_no)
        }
        rank = "rank" + str(i)
        i += 1
        d = {rank: json.dumps(inner_dict)}
        context.update(d)

    # Amount growth (total).
    for field in growth_total:
        inner_dict = {
            "sample_time": str(field.sample_time),
            "amount_total": str(field.amount_total)
        }
        d = {"growth_total": json.dumps(inner_dict)}
        context.update(d)

    # Amount growth (theater).
    theater_list = ['SNH48', 'BEJ48', 'GNZ48']
    data_theater = []
    for theater in theater_list:
        results = G102GrowthTheater.objects.filter(theater=theater)
        for result in results:
            inner_dict = {
                "sample_time": str(result.sample_time),
                "theater": str(result.theater),
                "amount_theater": str(result.amount_theater)
            }
            data_theater.append(inner_dict)
    d = {"growth_theater": json.dumps(data_theater)}
    context.update(d)
    print(context)

    if request.is_ajax():
        return JsonResponse(context)
    else:
        return render(request, 'index.html', context=context)



