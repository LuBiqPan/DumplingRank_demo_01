from django.shortcuts import render
from django.views.generic import View, ListView
from django.core import serializers
from django.http import HttpResponse
from django.http.response import JsonResponse
import json
from datetime import datetime

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
            # '%.2f': reserve 2 decimals.
            "real_amount": str('%.2f' % field.real_amount),
            "support_no": str(field.support_no)
        }
        print(inner_dict['real_amount'])
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
    print(context)

    if request.is_ajax():
        return JsonResponse(context)
    else:
        return render(request, 'index.html', context=context)


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
    member_sii = ["陈观慧", "陈俊羽", "陈思", "戴萌", "蒋芸", "孔肖吟", "李宇琪", "刘增艳", "莫寒", "钱蓓婷",
                  "邱欣怡", "孙芮", "邵雪聪", "温晶婕", "吴哲晗", "徐晨辰", "许佳琪", "徐子轩", "袁丹妮",
                  "杨令仪", "袁雨桢", "朱小丹", "张语格"]
    member_nii = ["陈佳莹", "冯薪朵", "黄婷婷", "何晓玉", "金莹玥", "江真仪", "刘洁", "栾嘉仪", "李美琪",
                  "陆婷", "卢天惠", "马凡", "王诗蒙", "谢妮", "易嘉爱", "颜沁", "赵佳蕊", "周诗雨", "张茜",
                  "赵粤", "张怡", "张雨鑫"]
    member_hii = ["陈盼", "费沁源", "郭爽", "郝婧怡", "洪珮雲", "姜杉", "蒋舒婷", "林楠", "林舒晴", "林思意",
                  "李玉倩", "李艺彤", "戚予珠", "沈梦瑶", "宋雨珊", "孙珍妮", "万丽娜", "王欣颜甜甜", "王奕",
                  "徐晗", "许杨玉琢", "袁一琦", "张昕"]
    member_x = ["陈琳", "冯晓菲", "刘静晗", "鲁静萍", "李星羽", "吕一", "李钊", "潘瑛琪", "祁静", "冉蔚",
                "宋昕冉", " 孙歆文", "王菲妍", "汪佳翎", "王晓佳", "谢天依", "杨冰怡", "张丹三", "张嘉予"]
    member_b = ["程戈", "陈美君", "段艺璇", "胡丽芝", "胡晓慧", "刘姝贤", "林溪荷", "李瑜璇", "曲美霖",
                "青钰雯", "沈小爱", "孙晓艳", "田姝丽", "熊素君", "闫明筠", "杨鑫", "张梦慧", "赵天杨", "张羽涵"]
    member_e = ["陈倩楠", "程宇璐", "冯思佳", "高蔚然", "李丽满", "李娜", "刘胜男", "李诗彦", "李梓", "马玉灵",
                "彭嘉敏", "任蔓琳", "苏杉杉", "王嘉瑜", "王雨兰", "顼凘炀", "熊鑫", "杨一帆", "张爱静", "臧聪",
                "张丹丹", "张笑盈"]
    member_j = ["柏欣妤", "陈雅钰", "房蕾", "葛司琪", "黄恩茹", "韩家乐", "何阳青青", "金锣赛", "楼澍", "刘闲",
                "刘一菲", "任心怡", "孙语姗", "唐霖", "王雨煊", "叶苗苗", "杨晔", "张怀瑾", "郑洁丽", "周湘"]
    member_g = ["陈俊宏", "GNZ48陈佳莹", "陈珂", "符冰冰", "高源婧", "黄楚茵", "罗寒月", "梁娇", "林嘉佩",
                "罗可嘉", "李沁洁", "李姗姗", "林芝", "徐楚雯", "徐慧玲", "谢蕾蕾", "阳青颖", "叶舒淇",
                "曾艾佳", "张琼予", "朱怡欣"]
    member_niii = ["陈楠茜", "陈欣妤", "邓熳慧", "高雪逸", "洪静雯", "卢静", "刘力菲", "刘倩倩", "孙馨",
                   "唐莉佳", "吴羽霏", "谢艾琳", "冼燊楠", "肖文铃", "熊心瑶", "郑丹妮", "左嘉欣", "左婧媛",
                   "张润"]
    member_z = ["毕瑞珊", "陈桂君", "邓惠恩", "杜秋霖", "方琪", "郭铱宁", "何梦瑶", "梁乔", "梁婉琳", "龙亦瑞",
                "赖梓惜", "农燕萍", "王翠菲", "王炯义", "王偲越", "谢菲菲", "杨可璐", "杨媛媛", "余芷媛",
                "张秋怡"]

    # member_list = ["张语格", "宋昕冉", "杨媛媛", "苏杉杉", "易嘉爱", "费沁源",
    #                "段艺璇", "韩家乐", "谢蕾蕾", "刘力菲", "赵佳蕊"]
    # data_member = []
    # for member in member_list:
    #     results = G104GrowthMember.objects.filter(member=member)
    #     for result in results:
    #         inner_dict = {
    #             "sample_time": str(result.sample_time),
    #             "member": str(result.member),
    #             "amount_member": str(result.amount_member)
    #         }
    #         data_member.append(inner_dict)
    # d = {"growth_member": json.dumps(data_member)}
    # context.update(d)
    # print(context)

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
    print(context)

    if request.is_ajax():
        return JsonResponse(context)
    else:
        return render(request, 'growth.html', context=context)


def percentage(request):

    return render(request, 'percentage.html')
