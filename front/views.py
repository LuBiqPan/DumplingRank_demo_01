from django.shortcuts import render
from django.views.generic import View, ListView
from django.core import serializers
from django.http import HttpResponse
from django.views.decorators.http import require_POST
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
    # print(context)

    # Amount growth (team)
    team_list = ["Team SII", "Team NII", "Team HII", "Team X",
                 "Team B", "Team E", "Team J", "Team G", "Team NIII", "Team Z"]
    # team_list = ["Team B", "Team E", "Team G", "Team HII",
    #              "Team J", "Team NII", "Team NIII", "Team SII", "Team X", "Team Z"]
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

    # PK
    # context = {}
    inner_dict = {
        "pk_member": ['李艺彤', '黄婷婷', '冯薪朵', '陆婷', '莫寒', '张语格'],
        "pk_amount": [1500, 1000, 400, 350, 450, 1700],
        "pk_amount_ratio": [0, 100, 40, 350, 31, 0],
        "pk_title": "PK 1",
    }
    d = {"pk1": json.dumps(inner_dict)}
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


# def growth(request):
#     # # Growth.
#     growth_total = G101GrowthTotal.objects.all()
#     growth_theater = G102GrowthTheater.objects.all()
#     growth_team = G103GrowthTeam.objects.all()
#     growth_member = G104GrowthMember.objects.all()
#
#     # Record total amount growth.
#     # for field in growth_total:
#     #     new_raw = AmountGrowthTotal.objects.create(sample_time=field.sample_time, amount_total=field.amount_total)
#     #     new_raw.save()
#
#     # Record theater amount growth.
#     # No need to use new_raw.save(), strange.
#     # for field in growth_theater:
#     #     new_raw = AmountGrowthTheater.objects.create(sample_time=field.sample_time,
#     #                                                  theater=field.theater,
#     #                                                  amount_theater=field.amount_theater)
#     # print(new_raw.sample_time, new_raw.theater, new_raw.amount_theater)
#
#     # Record team amount growth.
#     # No need to use new_raw.save(), strange.
#     # for field in growth_team:
#     #     new_raw = AmountGrowthTeam.objects.create(sample_time=field.sample_time,
#     #                                               team=field.team,
#     #                                               amount_team=field.amount_team)
#     #     print(new_raw.sample_time, new_raw.team, new_raw.amount_team)
#
#     # Record member amount growth.
#     # No need to use new_raw.save(), strange.
#     # for field in growth_member:
#     #     new_raw = AmountGrowthMember.objects.create(sample_time=field.sample_time,
#     #                                                 member=field.member,
#     #                                                 amount_member=field.amount_member)
#     # print(new_raw.sample_time, new_raw.member, new_raw.amount_member)
#
#     # # Main table.
#     context = {}
#     # main_table = V103RealTimeAmount.objects.all()
#     # i = 1  # rank
#     # for field in main_table:
#     #     inner_dict = {
#     #         "rank": str(i),
#     #         "member": str(field.member),
#     #         # '%.2f': reserve 2 decimals.
#     #         "real_amount": str('%.2f' % field.real_amount),
#     #         "support_no": str(field.support_no)
#     #     }
#     #     rank = "rank" + str(i)
#     #     i += 1
#     #     d = {rank: json.dumps(inner_dict)}
#     #     context.update(d)
#
#     # Amount growth (total).
#     for field in growth_total:
#         inner_dict = {
#             "sample_time": str(field.sample_time),
#             "amount_total": str(field.amount_total)
#         }
#         d = {"growth_total": json.dumps(inner_dict)}
#         context.update(d)
#
#     # Amount growth (theater).
#     theater_list = ['SNH48', 'BEJ48', 'GNZ48']
#     data_theater = []
#     for theater in theater_list:
#         results = G102GrowthTheater.objects.filter(theater=theater)
#         for result in results:
#             inner_dict = {
#                 "sample_time": str(result.sample_time),
#                 "theater": str(result.theater),
#                 "amount_theater": str(result.amount_theater)
#             }
#             data_theater.append(inner_dict)
#     d = {"growth_theater": json.dumps(data_theater)}
#     context.update(d)
#     # print(context)
#
#     # Amount growth (team)
#     team_list = ["Team SII", "Team NII", "Team HII", "Team X",
#                  "Team B", "Team E", "Team J", "Team G", "Team NIII", "Team Z"]
#     data_team = []
#     for team in team_list:
#         results = G103GrowthTeam.objects.filter(team=team)
#         for result in results:
#             inner_dict = {
#                 "sample_time": str(result.sample_time),
#                 "team": str(result.team),
#                 "amount_team": str(result.amount_team)
#             }
#             data_team.append(inner_dict)
#     d = {"growth_team": json.dumps(data_team)}
#     context.update(d)
#
#     # Amount growth (member)
#     member_list = member_sii + member_nii + member_hii + member_x + member_b + member_e + \
#                   member_j + member_g + member_niii + member_z
#     data_member = []
#     for member in member_list:
#         results = G104GrowthMember.objects.filter(member=member)
#         if results:
#             for result in results:
#                 inner_dict = {
#                     "sample_time": str(result.sample_time),
#                     "member": str(result.member),
#                     "amount_member": str(result.amount_member)
#                 }
#                 data_member.append(inner_dict)
#         else:
#             inner_dict = {
#                 "sample_time": str(datetime.now()),
#                 "member": str(member),
#                 "amount_member": str(0)
#             }
#             data_member.append(inner_dict)
#     d = {"growth_member": json.dumps(data_member)}
#     context.update(d)
#     print(context)
#
#     if request.is_ajax():
#         return JsonResponse(context)
#     else:
#         return render(request, 'growth.html', context=context)


@csrf_exempt
def growth_test(request):
    # response = request.POST.get('selected_items')
    # print(response)
    context = {}
    growth_dict = {
        "sample_time": ["01-01", "01-02", "01-03", "01-04", "01-05", "01-06",
                        "01-07", "01-08", "01-09", "01-10", "01-11", "01-12",
                        "01-13", "01-14", "01-15", "01-16", "01-17", "01-18",
                        ],
        "growth_theater": {
            "48G": [10000, 20000, 30000, 40000, 50001, 40000,
                     10000, 20000, 30000, 40000, 50000, 40000,
                     10000, 20000, 30000, 40000, 50000, 40000
                     ],
            "SNH48": [3000, 2000, 3000, 4000, 10000,
                      20000.24, 30000, 35000, 36000, 37000.02],
            "BEJ48": [0, 0, 0, 0, 0, 0, 0, 0,
                      0, 0, 2000, 2000, 5000, 4000, 8000],
            'GNZ48': [1000, 2000, 3000, 4000, 5000],
        },
        "growth_team": {
            "Team SII": [1000, 2000, 3000, 4000, 5000],
            "Team NII": [1500, 2400, 3800, 4900, 9000],
            "Team HII": [1000, 2100, 3000, 4000, 5000],
            "Team X": [0, 2000, 3000, 4200, 5600],
            "Team B": [1700, 2000, 3800, 4700, 7000],
            "Team E": [1000, 2000, 3000, 4600, 8000],
            "Team J": [10, 1000, 3002, 4200, 6000],
            "Team G": [1000, 2700, 3000, 4000, 5000],
            "Team NIII": [10, 2000, 3000, 4800, 5000],
            "Team Z": [10, 2100, 3400, 4000, 5005],
        },
        "growth_member": {
            "张语格": [1100, 2000, 3000, 4000, 8600],
            "易嘉爱": [1000, 2000, 3000, 4000, 5700],
            "费沁源": [1000, 2900, 3000, 3800, 5000],
            "宋昕冉": [1000, 2000, 3800, 4000, 7000],
            "段艺璇": [1200, 2001, 3500, 4000, 4000],
            "苏杉杉": [1000, 2000, 3000, 4400, 5000],
            "韩家乐": [1, 2000, 3000, 4000, 6000],
            "谢蕾蕾": [10, 2000, 3700, 4000, 5000],
            "刘力菲": [1000, 2400, 3000, 3000, 5008],
            "杨媛媛": [0, 2000, 3200, 4000, 5000],
        }

    }
    d = {'growth': json.dumps(growth_dict)}
    context.update(d)
    # print(context)

    if request.is_ajax():
        return JsonResponse(context)
    else:
        return render(request, 'growth.html', context=context)


# def percentage(request):
#     context = {}
#     temp_dict = {}
#
#     # Member amount.
#     growth_member = G104GrowthMember.objects.all()
#     for result in growth_member:
#         member_dict = {
#             str(result.member): str('%.2f' % result.amount_member)
#         }
#         temp_dict.update(member_dict)
#     d = {"member_amount": json.dumps(temp_dict)}
#     context.update(d)
#
#     # Rest members amount.
#     rest_dict = {
#         "rest_SII": str('%.2f' % 10000),
#         "rest_NII": str('%.2f' % 10000),
#         "rest_HII": str('%.2f' % 10000),
#         "rest_X": str('%.2f' % 10000),
#         "rest_B": str('%.2f' % 10000),
#         "rest_E": str('%.2f' % 10000),
#         "rest_J": str('%.2f' % 10000),
#         "rest_G": str('%.2f' % 10000),
#         "rest_NIII": str('%.2f' % 10000),
#         "rest_Z": str('%.2f' % 10086),
#     }
#     d = {"rest_amount": json.dumps(rest_dict)}
#     context.update(d)
#
#     # Join time amount
#     join_time_member = ["SNH48一期生", "SNH48二期生", "SNH48三期生", "SNH48四期生", "SNH48五期生", "SNH48六期生"]
#     # join_time_member = ["1001", "1002", "1003", "1004", "1005", "1006"]
#     temp_dict2 = {}
#     # "SNH48一期生", "SNH48二期生", "SNH48三期生", "SNH48四期生", "SNH48五期生", "SNH48六期生"
#     for join_time in join_time_member:
#         result = P110RealTimeAmountJoinTime.objects.filter(join_time=join_time).first()
#         inner_dict = {
#             str(join_time): str('%.2f' % result.real_amount)
#         }
#         temp_dict2.update(inner_dict)
#     # Other members
#     result_other = P111RealTimeAmountJoinTimeOthers.objects.first()
#     inner_dict = {
#         "其他": str('%.f' % result_other.real_amount_other)
#     }
#     temp_dict2.update(inner_dict)
#     d = {"join_time_amount": json.dumps(temp_dict2)}
#     context.update(d)
#     # print(context)
#
#     if request.is_ajax():
#         return JsonResponse(context)
#     else:
#         return render(request, 'percentage.html', context=context)


def percentage_test(request):
    member_amount = {
        # Team SII
        "莫寒": str('%.2f' % 10000),
        "许佳琪": str('%.2f' % 10000),
        "戴萌": str('%.2f' % 10000),
        "钱蓓婷": str('%.2f' % 10000),
        "吴哲晗": str('%.2f' % 10000),
        "孔肖吟": str('%.2f' % 10000),
        "张语格": str('%.2f' % 10000),
        "徐子轩": str('%.2f' % 10000),
        # Team NII
        "黄婷婷": str('%.2f' % 10000),
        "冯薪朵": str('%.2f' % 10000),
        "陆婷": str('%.2f' % 10000),
        "赵粤": str('%.2f' % 10000),
        "张雨鑫": str('%.2f' % 10000),
        "易嘉爱": str('%.2f' % 10000),
        # Team HII
        "李艺彤": str('%.2f' % 10000),
        "林思意": str('%.2f' % 10000),
        "姜杉": str('%.2f' % 10000),
        "费沁源": str('%.2f' % 10000),
        "沈梦瑶": str('%.2f' % 10000),
        "许杨玉琢": str('%.2f' % 10000),
        "袁一琦": str('%.2f' % 10000),
        "张昕": str('%.2f' % 10000),
        # Team X
        "宋昕冉": str('%.2f' % 10000),
        "杨冰怡": str('%.2f' % 10000),
        "李钊": str('%.2f' % 10000),
        "冯晓菲": str('%.2f' % 10000),
        # Team B
        "段艺璇": str('%.2f' % 10000),
        "胡晓慧": str('%.2f' % 10000),
        "刘姝贤": str('%.2f' % 10000),
        # Team E
        "苏杉杉": str('%.2f' % 10000),
        "马玉灵": str('%.2f' % 10000),
        "陈倩楠": str('%.2f' % 10000),
        "李梓": str('%.2f' % 10000),
        # Team J
        "韩家乐": str('%.2f' % 10000),
        "张怀瑾": str('%.2f' % 10000),
        "黄恩茹": str('%.2f' % 10000),
        "柏欣妤": str('%.2f' % 10000),
        # Team G
        "谢蕾蕾": str('%.2f' % 10000),
        "陈珂": str('%.2f' % 10000),
        "高源婧": str('%.2f' % 10000),
        "张琼予": str('%.2f' % 10000),
        "李姗姗": str('%.2f' % 10000),
        # Team NIII
        "郑丹妮": str('%.2f' % 10000),
        "刘力菲": str('%.2f' % 10000),
        "唐莉佳": str('%.2f' % 10000),
        "左婧媛": str('%.2f' % 10000),
        "卢静": str('%.2f' % 10000),
        # Team Z
        "杨媛媛": str('%.2f' % 10000),
        "梁婉琳": str('%.2f' % 10000),
        "龙亦瑞": str('%.2f' % 10000),

    }
    context = {}
    d = {"member_amount": json.dumps(member_amount)}
    context.update(d)

    rest_amount = {
        # Rest
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
    d = {"rest_amount": json.dumps(rest_amount)}
    context.update(d)

    join_time_amount = {
        "1001": str('%.2f' % 20000),
        "1002": str('%.2f' % 10000),
        "1003": str('%.2f' % 3000),
        "1004": str('%.2f' % 5000),
        "1005": str('%.2f' % 12000),
        "1006": str('%.2f' % 11000),
        "其他": str('%.2f' % 13000),
    }
    d = {"join_time_amount": json.dumps(join_time_amount)}
    context.update(d)
    # print(context)

    if request.is_ajax():
        return JsonResponse(context)
    else:
        return render(request, 'percentage.html', context=context)


def hot_pk(request):
    # # PK
    context = {}
    # pk1
    inner_dict = {
        "pk_member": ['李艺彤', '黄婷婷', '冯薪朵', '陆婷', '莫寒', '张语格'],
        "pk_amount": [1503.02, 1200, 400, 350, 450, 1700],
        "pk_amount_ratio": [0, 100, 40, 350, 31, 0],
        "pk_title": "PK 1",
    }
    d = {"pk1": json.dumps(inner_dict)}
    context.update(d)
    # pk2
    inner_dict = {
        "pk_member": ['段艺璇', '苏杉杉', '冯思佳', '谢蕾蕾', '郑丹妮', '刘力菲'],
        "pk_amount": [1892.23, 1000, 400, 350, 450, 1700],
        "pk_amount_ratio": [0, 100, 40, 350, 310.22, 0],
        "pk_title": "PK 2",
    }
    d = {"pk2": json.dumps(inner_dict)}
    context.update(d)
    # pk3
    inner_dict = {
        "pk_member": ['费沁源', '姜杉'],
        "pk_amount": [1500, 1000],
        "pk_amount_ratio": [0, 100],
        "pk_title": "PK 3",
    }
    d = {"pk3": json.dumps(inner_dict)}
    context.update(d)
    # print(context)

    if request.is_ajax():
        return JsonResponse(context)
    else:
        return render(request, 'pk.html', context=context)


def member(request):
    return render(request, 'member.html')


def daily_growth(request):
    return render(request, 'daily_growth.html')


def daily_growth2(request):
    return render(request, 'daily_growth2.html')


def live_growth(request):
    return render(request, 'live_growth.html')


def room_growth(request):
    return render(request, 'room_growth.html')


def pocket_growth(request):
    return render(request, 'pocket_growth.html')


def login(request):
    return render(request, 'login.html')


def register(request):
    return render(request, 'register.html')


@csrf_exempt
def detail(request):
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
                "remark": "給你足夠的備註說騷話123",
            }
            project_list.append(inner_dict)
        d = {"project_info": json.dumps(project_list)}
        context.update(d)
        # print(context)

    if request.is_ajax():
        return JsonResponse(context)
    else:
        return render(request, 'detail.html', context=context)


def descendant_test(request):
    # Descendant members (excluding old members).
    context = {}
    descendant_list = ["段艺璇", "刘淑贤", "费沁源", "许杨玉琢", "张怀瑾", "郑丹妮", "谢蕾蕾", "宋昕冉",
                       "苏杉杉", "冯晓菲", "袁一琦", "沈梦瑶", "黄恩茹", "孙珍妮", "张昕", "胡晓慧"]
    descendant_amount = [str('%.2f' % 360000.33), str('%.2f' % 250000), str('%.2f' % 200000), str('%.2f' % 130000),
                         str('%.2f' % 120000), str('%.2f' % 110000), str('%.2f' % 100000), str('%.2f' % 90000),
                         str('%.2f' % 80000), str('%.2f' % 70000), str('%.2f' % 60000), str('%.2f' % 50000),
                         str('%.2f' % 40000), str('%.2f' % 30000), str('%.2f' % 20000), str('%.2f' % 200000)]
    d1 = {"descendant_list": json.dumps(descendant_list)}
    d2 = {"descendant_amount": json.dumps(descendant_amount)}
    context.update(d1)
    context.update(d2)
    # print(context)

    if request.is_ajax():
        return JsonResponse(context)
    else:
        return render(request, 'descendant.html', context=context)


def sister_theaters(request):
    """
    {
      member_list_bej48: ["苏杉杉", "段艺璇", "冯思佳", "张怀瑾", "马玉灵", "陈倩楠", "黄恩茹", "胡晓慧",
                          "陈美君", "青钰雯", "王雨煊", "李梓",   "刘姝贤", "葛司琪", "闫明筠", "胡丽芝"],
      member_list_gnz48: ["谢蕾蕾", "郑丹妮", "刘力菲", "陈珂",   "唐莉佳", "左婧媛", "肖文铃", "卢静",
                          "刘倩倩", "高源婧", "张琼予", "杨媛媛", "杜秋霖", "梁婉琳", "龙亦瑞", "朱怡欣"],
      member_list_vs: ["谢蕾蕾", "苏杉杉",]
      amount_bej48: ["160000.00", "150000.00", ...],
      amount_gnz48: ["170000.00", "140000.00", ...],
      amount_vs: ["170000.00", "160000.00"]
    }
    """
    context = {}
    member_list_bej48 = ["苏杉杉", "段艺璇", "冯思佳", "张怀瑾", "马玉灵", "陈倩楠", "黄恩茹", "胡晓慧",
                         "陈美君", "青钰雯", "王雨煊", "李梓", "刘姝贤", "葛司琪", "闫明筠", "胡丽芝"]
    member_list_gnz48 = ["谢蕾蕾", "郑丹妮", "刘力菲", "陈珂",   "唐莉佳", "左婧媛", "肖文铃", "卢静",
                         "刘倩倩", "高源婧", "张琼予", "杨媛媛", "杜秋霖", "梁婉琳", "龙亦瑞", "朱怡欣"]
    member_list_vs = ["谢蕾蕾", "苏杉杉", "段艺璇", "郑丹妮", "刘力菲", "韩家乐", "冯思佳", "张怀瑾",
                      "陈珂",   "马玉灵", "唐莉佳", "陈倩楠", "黄恩茹", "胡晓慧", "左婧媛", "陈美君"]
    amount_bej48 = [str('%.2f' % 36.33), str('%.2f' % 34.33), str('%.2f' % 34.33), str('%.2f' % 30.33),
                    str('%.2f' % 29.33), str('%.2f' % 28.00), str('%.2f' % 25.03), str('%.2f' % 25.03),
                    str('%.2f' % 20.11), str('%.2f' % 20.00), str('%.2f' % 19.14), str('%.2f' % 18.77),
                    str('%.2f' % 15.49), str('%.2f' % 14.67), str('%.2f' % 13.58), str('%.2f' % 12.04)]
    amount_gnz48 = [str('%.2f' % 36.33), str('%.2f' % 35.33), str('%.2f' % 34.33), str('%.2f' % 30.33),
                    str('%.2f' % 29.33), str('%.2f' % 28.00), str('%.2f' % 25.03), str('%.2f' % 25.03),
                    str('%.2f' % 20.11), str('%.2f' % 20.00), str('%.2f' % 19.14), str('%.2f' % 18.77),
                    str('%.2f' % 15.49), str('%.2f' % 14.67), str('%.2f' % 13.58), str('%.2f' % 12.04)]
    amount_vs = [str('%.2f' % 36.34), str('%.2f' % 35.33), str('%.2f' % 34.33), str('%.2f' % 30.33),
                 str('%.2f' % 29.33), str('%.2f' % 28.00), str('%.2f' % 25.03), str('%.2f' % 25.03),
                 str('%.2f' % 20.11), str('%.2f' % 20.00), str('%.2f' % 19.14), str('%.2f' % 18.77),
                 str('%.2f' % 15.49), str('%.2f' % 14.67), str('%.2f' % 13.58), str('%.2f' % 12.04)]

    d1 = {"member_list_bej48": json.dumps(member_list_bej48)}
    d2 = {"member_list_gnz48": json.dumps(member_list_gnz48)}
    d3 = {"member_list_vs": json.dumps(member_list_vs)}
    d4 = {"amount_bej48": json.dumps(amount_bej48)}
    d5 = {"amount_gnz48": json.dumps(amount_gnz48)}
    d6 = {"amount_vs": json.dumps(amount_vs)}

    context.update(d1)
    context.update(d2)
    context.update(d3)
    context.update(d4)
    context.update(d5)
    context.update(d6)
    print(context)

    if request.is_ajax():
        return JsonResponse(context)
    else:
        return render(request, 'sister_theaters.html', context=context)


def b50_index(request):
    song_list = [
        {"id": "1",
         "song": "人间规则",
         "type": "Unit",
         "amount": "123.45",
         "actress": ["柏欣妤", "周湘", "张怀瑾"]
         },
        {"id": "2",
         "song": "亚特兰蒂斯纪念",
         "type": "队歌",
         "amount": "123.45",
         "actress": ["BEJ48 Team E"]
         },
        {"id": "3",
         "song": "化作樱花树",
         "type": "Solo",
         "amount": "12344.45",
         "actress": ["费沁源"]
         },
        {"id": "4",
         "song": "伴我同行",
         "type": "队歌",
         "amount": "122344.45",
         "actress": ["SNH48 Team HII"]
         },
    ]

    context = {
        "total_amount": "123456.79",
        "total_song": "48",
        "data": json.dumps(song_list)
    }

    context1 = {
        "total_amount": "123456.79",
        "total_song": "48",
        "data": song_list
    }
    # print(context1)

    if request.is_ajax():
        return JsonResponse(context)
    else:
        return render(request, 'b50_index.html', context=context)


@csrf_exempt
def b50_detail(request):
    # project_list = []
    # context = {}
    # Selected song or member.
    select = request.POST

    # if select_member_detail:
    project_list = [
        {
            "song": "FionaN",
            "project_name": "FionaN集资2.0",
            "project_url": "http://www.snh48.com",
            "platform": "摩点",
            "amount": "1235.11",
            "fan_club": "SNH48 Team HII",
            "remark": "队歌集资"
        },
        {
            "song": "伴我同行",
            "project_name": "《伴我同行伴我同行伴我同行》集资1.0",
            "project_url": "http://www.snh48.com",
            "platform": "摩点",
            "amount": "12345.11",
            "fan_club": "SNH48 Team HII",
            "remark": ""
        },
        {
            "song": "伴我同行",
            "project_name": "《伴我同行》集资1.0",
            "project_url": "http://www.snh48.com",
            "platform": "摩点",
            "amount": "12345.11",
            "fan_club": "SNH48 Team HII",
            "remark": ""
        },
    ]

    song_list = [
        {"id": "1", "song": "伴我同行", "type": "队歌"},
        {"id": "2", "song": "Bingo!", "type": "队歌"},
        # {"id": "3", "song": "新航路", "type": "队歌"},
        # {"id": "4", "song": "给未来的我们", "type": "队歌"},

        {"id": "5", "song": "化作樱花树", "type": "Solo"},
        {"id": "6", "song": "初夏秋冬", "type": "Solo"},
        # {"id": "7", "song": "就差一点点", "type": "Solo"},

        {"id": "8", "song": "夜碟", "type": "Unit"},
        {"id": "9", "song": "就差一点点", "type": "Unit"},
        {"id": "10", "song": "Nine to nine", "type": "Unit"},
        # {"id": "11", "song": "Don't Touch", "type": "Unit"},
        # {"id": "12", "song": "Don't Touch", "type": "Unit"},

    ]

    member_list = [
        "张语格",
        "易嘉爱",
        "费沁源",
        # "宋昕冉",
        # "谢蕾蕾",
        # "苏杉杉",
        # "谢蕾蕾",
    ]

    background_url = "url(/static/images/liulifei01.jpg)"

    context = {
        "total_amount": "123456.80",
        "total_song": "50",
        "song_data": json.dumps(project_list),
        "song_list": json.dumps(song_list),
        "member_list": json.dumps(member_list),
        "background_url": json.dumps(background_url),
    }

    context1 = {
        "total_amount": "123456.80",
        "total_song": "50",
        # "song_data": project_list,
        "song_list": song_list,
        "member_list": member_list
    }
    # print(context1)

    if request.is_ajax():
        return JsonResponse(context)
    else:
        return render(request, 'b50_detail.html', context=context)


def b50_declaration(request):
    return render(request, 'b50_declaration.html')
