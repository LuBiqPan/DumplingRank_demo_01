from django.shortcuts import render
from django.views.generic import View, ListView
from django.core import serializers
from django.http import HttpResponse
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from datetime import datetime
import json

# from .models import *
from .my_sql_views import *
from .member import *


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
            # '%.2f': reserve 2 decimals.
            "real_amount": str('%.2f' % field.real_amount),
            "vote": str('%.2f' % (field.real_amount / 32.0)),
            "support_no": str(field.support_no)
        }
        # print(inner_dict['real_amount'])
        rank = "rank" + str(i)
        i += 1
        d = {rank: json.dumps(inner_dict)}
        context.update(d)

    # Amount growth (total).
    for field in growth_total:
        inner_dict = {
            "sample_time": str(field.sample_time),
            "amount_total": str('%.2f' % field.amount_total)
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

    # Amount growth (team)
    team_list = ["Team SII", "Team NII", "Team HII", "Team X",
                 "Team B", "Team E", "Team J", "Team G", "Team NIII", "Team Z"]
    data_team = []
    for team in team_list:
        results = G103GrowthTeam.objects.filter(team=team)
        for result in results:
            inner_dict = {
                "sample_time": str(result.sample_time),
                "team": str(result.team),
                "amount_team": str(result.amount_team)
            }
            data_team.append(inner_dict)
    d = {"growth_team": json.dumps(data_team)}
    context.update(d)
    # print(context)

    if request.is_ajax():
        return JsonResponse(context)
    else:
        return render(request, 'index.html', context=context)
        # return render(request, 'index_mobile.html', context=context)


def index_mobile(request):

    # # Main table.
    main_table = V103RealTimeAmount.objects.all()
    context = {}
    i = 1   # rank
    for field in main_table:
        inner_dict = {
            "rank": str(i),
            "member": str(field.member),
            # '%.2f': reserve 2 decimals.
            "real_amount": str('%.2f' % field.real_amount),
            "vote": str('%.2f' % (field.real_amount / 32.0)),
            "support_no": str(field.support_no)
        }
        rank = "rank" + str(i)
        i += 1
        d = {rank: json.dumps(inner_dict)}
        context.update(d)

    # Amount growth (total).
    growth_total = G101GrowthTotal.objects.all()
    for field in growth_total:
        inner_dict = {
            "sample_time": str(field.sample_time),
            "amount_total": str('%.2f' % field.amount_total)
        }
        d = {"growth_total": json.dumps(inner_dict)}
        context.update(d)

    if request.is_ajax():
        return JsonResponse(context)
    else:
        return render(request, 'index_mobile.html', context=context)


def growth(request):
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
    i = 1  # rank
    for field in main_table:
        inner_dict = {
            "rank": str(i),
            "member": str(field.member),
            # '%.2f': reserve 2 decimals.
            "real_amount": str('%.2f' % field.real_amount),
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
    # print(context)

    # Amount growth (team)
    team_list = ["Team SII", "Team NII", "Team HII", "Team X",
                 "Team B", "Team E", "Team J", "Team G", "Team NIII", "Team Z"]
    data_team = []
    for team in team_list:
        results = G103GrowthTeam.objects.filter(team=team)
        for result in results:
            inner_dict = {
                "sample_time": str(result.sample_time),
                "team": str(result.team),
                "amount_team": str(result.amount_team)
            }
            data_team.append(inner_dict)
    d = {"growth_team": json.dumps(data_team)}
    context.update(d)

    # Amount growth (member)
    member_list = member_sii + member_nii + member_hii + member_x + member_b + member_e + \
                  member_j + member_g + member_niii + member_z
    data_member = []
    for member in member_list:
        results = G104GrowthMember.objects.filter(member=member)
        if results:
            for result in results:
                inner_dict = {
                    "sample_time": str(result.sample_time),
                    "member": str(result.member),
                    "amount_member": str(result.amount_member)
                }
                data_member.append(inner_dict)
        else:
            inner_dict = {
                "sample_time": str(datetime.now()),
                "member": str(member),
                "amount_member": str(0)
            }
            data_member.append(inner_dict)
    d = {"growth_member": json.dumps(data_member)}
    context.update(d)
    # print(context)

    if request.is_ajax():
        return JsonResponse(context)
    else:
        return render(request, 'growth.html', context=context)


def percentage(request):
    context = {}
    temp_dict = {}

    # Member amount.
    growth_member = G104GrowthMember.objects.all()
    for result in growth_member:
        member_dict = {
            str(result.member): str('%.2f' % result.amount_member)
        }
        temp_dict.update(member_dict)
    d = {"member_amount": json.dumps(temp_dict)}
    context.update(d)

    # Rest members amount.
    rest_dict = {
        "rest_SII": str('%.2f' % 10000),
        "rest_NII": str('%.2f' % 10000),
        "rest_HII": str('%.2f' % 10000),
        "rest_X": str('%.2f' % 10000),
        "rest_B": str('%.2f' % 10000),
        "rest_E": str('%.2f' % 10000),
        "rest_J": str('%.2f' % 10000),
        "rest_G": str('%.2f' % 10000),
        "rest_NIII": str('%.2f' % 10000),
        "rest_Z": str('%.2f' % 10000),
    }
    d = {"rest_amount": json.dumps(rest_dict)}
    context.update(d)

    # Join time amount
    join_time_member = ["SNH48一期生", "SNH48二期生", "SNH48三期生", "SNH48四期生", "SNH48五期生", "SNH48六期生"]
    temp_dict2 = {}
    # "SNH48一期生", "SNH48二期生", "SNH48三期生", "SNH48四期生", "SNH48五期生", "SNH48六期生"
    for join_time in join_time_member:
        result = P110RealTimeAmountJoinTime.objects.filter(join_time=join_time).first()
        inner_dict = {
            str(join_time): str('%.2f' % result.real_amount)
        }
        temp_dict2.update(inner_dict)
    # Other members
    result_other = P111RealTimeAmountJoinTimeOthers.objects.first()
    inner_dict = {
        "其他": str('%.f' % result_other.real_amount_other)
    }
    temp_dict2.update(inner_dict)
    d = {"join_time_amount": json.dumps(temp_dict2)}
    context.update(d)
    # print(context)

    if request.is_ajax():
        return JsonResponse(context)
    else:
        return render(request, 'percentage.html')


def hot_pk(request):
    # # PK

    return render(request, 'pk.html')


@csrf_exempt
def member_detail(request):
    project_list = []
    context = {}
    # Selected member from member page.
    select_member_detail = request.POST.get('select_member_detail')
    if select_member_detail:

        # Avatar.
        avatar_link = member_avatar.get(select_member_detail)
        if avatar_link:
            d = {"avatar_link": json.dumps(avatar_link)}
        else:
            d = {"avatar_link": json.dumps("https://tvax4.sinaimg.cn/crop.443.39.1137.1137.180/a8826e2fly8fp0ydn6yzoj21kw11x43d.jpg")}
        context.update(d)

        # Theater and team of selected member.
        theater_team_info = Member.objects.filter(member=select_member_detail).first()
        if theater_team_info:
            inner_dict = {
                "theater": str(theater_team_info.theater.theater),
                "team": str(theater_team_info.team.team),
            }
        else:
            inner_dict = {
                "theater": "",
                "team": "",
            }
        d = {"theater_team_info": json.dumps(inner_dict)}
        context.update(d)

        # Real time total amount of member.
        amount_info = G104GrowthMember.objects.filter(member=select_member_detail).first()
        # If there is data for selected member, return to client.
        if amount_info:
            d = {"amount_info": json.dumps("%.2f" % amount_info.amount_member)}
        # Otherwise, return 0.
        else:
            d = {"amount_info": json.dumps(str('%.2f' % 0))}
        context.update(d)

        # Rank.
        rank_member = V103RealTimeAmount.objects.filter(member=select_member_detail).first()
        rank_total = V103RealTimeAmount.objects.all()
        if rank_member:
            rank = 1
            for result in rank_total:
                if result.member != select_member_detail:
                    rank = rank + 1
                else:
                    break
        else:
            rank = str(0)
        d = {"rank_info": json.dumps(rank)}
        context.update(d)

        # Project quantity.
        project_no = V102RealTimeAmount.objects.filter(member_id=select_member_detail).count()
        d = {"project_no": json.dumps(project_no)}
        context.update(d)

        # Project information.
        project_info = V102RealTimeAmount.objects.filter(member_id=select_member_detail).all()
        for field in project_info:
            inner_dict = {
                "project_url": "#",
                "project_name": str(field.project_name),
                "fans_club": str(field.fans_club_id),
                "platform": "摩点",
                "amount": str('%.2f' % field.real_amount),
                "status": "正在进行",
                "remark": "Demo",
            }
            project_list.append(inner_dict)
        d = {"project_info": json.dumps(project_list)}
        context.update(d)
        # print(context)

    if request.is_ajax():
        return JsonResponse(context)
    else:
        return render(request, 'detail.html', context=context)


def descendant(request):
    # Descendant members (excluding old members).
    context = {}
    descendant_list = []
    descendant_amount = []
    descendant_members = P101TopMembers.objects.all()
    for member in descendant_members:
        descendant_list.append(str(member.member))
        descendant_amount.append(str('%.2f' % member.real_amount))
    d = {
        "descendant_list": json.dumps(descendant_list),
        "descendant_amount": json.dumps(descendant_amount),
    }
    context.update(d)
    # print(context)

    if request.is_ajax():
        return JsonResponse(context)
    else:
        return render(request, 'descendant.html', context=context)
