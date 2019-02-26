
// document.write("<script language=javascript src='growth.js'></script>");
// var fromGrowth = document.createElement("script");
// fromGrowth.setAttribute("type", "text/javascript");
// fromGrowth.setAttribute("src", "/growth.js");
// document.body.appendChild(fromGrowth);
// console.log(testSignal);

var i;
var option = {};
var growthTheater, growthTeam, growthMember;

// member

var memberNII = ["陈佳莹", "冯薪朵", "黄婷婷", "何晓玉", "金莹玥", "江真仪", "刘洁", "栾嘉仪", "李美琪",
                  "陆婷", "卢天惠", "马凡", "王诗蒙", "谢妮", "易嘉爱", "颜沁", "赵佳蕊", "周诗雨", "张茜",
                  "赵粤", "张怡", "张雨鑫"];
var memberHII = ["陈盼", "费沁源", "郭爽", "郝婧怡", "洪珮雲", "姜杉", "蒋舒婷", "林楠", "林舒晴", "林思意",
                  "李玉倩", "李艺彤", "戚予珠", "沈梦瑶", "宋雨珊", "孙珍妮", "万丽娜", "王欣颜甜甜", "王奕",
                  "徐晗", "许杨玉琢", "袁一琦", "张昕"];
var memberX = ["陈琳", "冯晓菲", "刘静晗", "鲁静萍", "李星羽", "吕一", "李钊", "潘瑛琪", "祁静", "冉蔚",
                "宋昕冉", " 孙歆文", "王菲妍", "汪佳翎", "王晓佳", "谢天依", "杨冰怡", "张丹三", "张嘉予"];
var memberB = ["程戈", "陈美君", "段艺璇", "胡丽芝", "胡晓慧", "刘姝贤", "林溪荷", "李瑜璇", "曲美霖",
                "青钰雯", "沈小爱", "孙晓艳", "田姝丽", "熊素君", "闫明筠", "杨鑫", "张梦慧", "赵天杨", "张羽涵"];
var memberE = ["陈倩楠", "程宇璐", "冯思佳", "高蔚然", "李丽满", "李娜", "刘胜男", "李诗彦", "李梓", "马玉灵",
                "彭嘉敏", "任蔓琳", "苏杉杉", "王嘉瑜", "王雨兰", "顼凘炀", "熊鑫", "杨一帆", "张爱静", "臧聪",
                "张丹丹", "张笑盈"];
var memberJ = ["柏欣妤", "陈雅钰", "房蕾", "葛司琪", "黄恩茹", "韩家乐", "何阳青青", "金锣赛", "楼澍", "刘闲",
                "刘一菲", "任心怡", "孙语姗", "唐霖", "王雨煊", "叶苗苗", "杨晔", "张怀瑾", "郑洁丽", "周湘"];
var memberG = ["陈俊宏", "GNZ48陈佳莹", "陈珂", "符冰冰", "高源婧", "黄楚茵", "罗寒月", "梁娇", "林嘉佩",
                "罗可嘉", "李沁洁", "李姗姗", "林芝", "徐楚雯", "徐慧玲", "谢蕾蕾", "阳青颖", "叶舒淇",
                "曾艾佳", "张琼予", "朱怡欣"];
var memberNIII = ["陈楠茜", "陈欣妤", "邓熳慧", "高雪逸", "洪静雯", "卢静", "刘力菲", "刘倩倩", "孙馨",
                   "唐莉佳", "吴羽霏", "谢艾琳", "冼燊楠", "肖文铃", "熊心瑶", "郑丹妮", "左嘉欣", "左婧媛",
                   "张润"];
var memberZ = ["毕瑞珊", "陈桂君", "邓惠恩", "杜秋霖", "方琪", "郭铱宁", "何梦瑶", "梁乔", "梁婉琳", "龙亦瑞",
                "赖梓惜", "农燕萍", "王翠菲", "王炯义", "王偲越", "谢菲菲", "杨可璐", "杨媛媛", "余芷媛",
                "张秋怡"];
// var memberList = memberSII.concat(memberNII, memberHII, memberX, memberB, memberE, memberJ, memberG, memberNIII, memberZ);
var memberSII = ["", "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "", "", ""];
var memberInfo = [
    {"member": "陈观慧", "team": "Team "},
    {"member": "陈俊羽", "team": "Team "},
    {"member": "陈思", "team": "Team "},
    {"member": "戴萌", "team": "Team "},
    {"member": "蒋芸", "team": "Team "},
    {"member": "孔肖吟", "team": "Team "},
    {"member": "李宇琪", "team": "Team "},
    {"member": "刘增艳", "team": "Team "},
    {"member": "莫寒", "team": "Team "},
    {"member": "钱蓓婷", "team": "Team "},
    {"member": "邱欣怡", "team": "Team "},
    {"member": "孙芮", "team": "Team "},
    {"member": "邵雪聪", "team": "Team "},
    {"member": "温晶婕", "team": "Team "},
    {"member": "吴哲晗", "team": "Team "},
    {"member": "徐晨辰", "team": "Team "},
    {"member": "许佳琪", "team": "Team "},
    {"member": "徐子轩", "team": "Team "},
    {"member": "袁丹妮", "team": "Team "},
    {"member": "杨令仪", "team": "Team "},
    {"member": "袁雨桢", "team": "Team "},
    {"member": "朱小丹", "team": "Team "},
    {"member": "张语格", "team": "Team "},

    {"member": "", "team": "Team "},
    {"member": "", "team": "Team "},
    {"member": "", "team": "Team "},
];

var selectedMember = {};

// Parse data
function parseData(growthTheater, growthTeam, growthMember) {

    // append
    var totalAmount = {};
    // append theater
    totalAmount["valSNH48"] = growthTheater[0]["amount_theater"];
    totalAmount["valBEJ48"] = growthTheater[1]["amount_theater"];
    totalAmount["valGNZ48"] = growthTheater[2]["amount_theater"];
    // append team
    totalAmount["valSII"] = growthTeam[0]["amount_team"];
    totalAmount["valNII"] = growthTeam[1]["amount_team"];
    totalAmount["valHII"] = growthTeam[2]["amount_team"];
    totalAmount["valX"] = growthTeam[3]["amount_team"];
    totalAmount["valB"] = growthTeam[4]["amount_team"];
    totalAmount["valE"] = growthTeam[5]["amount_team"];
    totalAmount["valJ"] = growthTeam[6]["amount_team"];
    totalAmount["valG"] = growthTeam[7]["amount_team"];
    totalAmount["valNIII"] = growthTeam[8]["amount_team"];
    totalAmount["valZ"] = growthTeam[9]["amount_team"];

    // member
    var valMember = {};
    for (i=0; i<memberInfo.length; i++) {
        var valMemberSub = {};
        valMemberSub[memberInfo[i]["member"]] = growthMember[i]["amount_member"];
        $.extend(valMember, valMemberSub);
    }

}


// Percentage
function percentageControl() {
    var dom = document.getElementById("percentage-wrapper");
        var percentageChart = echarts.init(dom);

        var data = [{

            // SNH48
            name: 'SNH48',
            itemStyle: {
                color: '#00b6de'
            },
            children: [{ // Team SII
                name: 'Team SII',
                itemStyle: {
                    color: '#00b6de'
                },
                children: [{ // 莫寒
                    name: '莫寒',
                    value: 1.12,
                    itemStyle: {
                        // color: '#C0DAFF'
                    }
                }, { // 许佳琪
                    name: '许佳琪',
                    value: 1,
                    itemStyle: {
                        // color: '#C0DAFF'
                    }
                }, { // 戴萌
                    name: '戴萌',
                    value: 1,
                    itemStyle: {
                        // color: '#f7f1bd'
                    }
                }, { // 钱蓓婷
                    name: '钱蓓婷',
                    value: 1,
                    itemStyle: {
                        // color: '#f7f1bd'
                    }
                }, { // 吴哲晗
                    name: '吴哲晗',
                    value: 1,
                    itemStyle: {
                        // color: '#f7f1bd'
                    }
                }, { // 孔肖吟
                    name: '孔肖吟',
                    value: 1,
                    itemStyle: {
                        // color: '#f7f1bd'
                    }
                }, { // 张语格
                    name: '张语格',
                    value: 1,
                    itemStyle: {
                        // color: '#f7f1bd'
                    }
                }, { // 其他
                    name: '其他',
                    value: 2,
                    itemStyle: {
                        // color: '#f7f1bd'
                    }
                }]
            }, { // Team NII
                name: 'Team NII',
                itemStyle: {
                    color: '#9e57b4'
                },
                children: [{ // 黄婷婷
                    name: '黄婷婷',
                    value: 1,
                    itemStyle: {
                        // color: '#f99e1c'
                    }
                }, { // 冯薪朵
                    name: '冯薪朵',
                    value: 1,
                    itemStyle: {
                        // color: '#ef5a78'
                    }
                }, { // 陆婷
                    name: '陆婷',
                    value: 1,
                    itemStyle: {
                        // color: '#f7f1bd'
                    }
                }, { // 赵粤
                    name: '赵粤',
                    value: 1,
                    itemStyle: {
                        // color: '#f7f1bd'
                    }
                }, { // 易嘉爱
                    name: '易嘉爱',
                    value: 1,
                    itemStyle: {
                        // color: '#f7f1bd'
                    }
                }, { // 其他
                    name: '其他',
                    value: 1,
                    itemStyle: {
                        // color: '#f7f1bd'
                    }
                }]
            }, { // Team HII
                name: 'Team HII',
                itemStyle: {
                    color: '#f8941d'
                },
                children: [{ // 李艺彤
                    name: '李艺彤',
                    value: 1,
                    itemStyle: {
                        // color: '#f99e1c'
                    }
                }, { // 林思意
                    name: '林思意',
                    value: 1,
                    itemStyle: {
                        // color: '#ef5a78'
                    }
                }, { // 万丽娜
                    name: '万丽娜',
                    value: 1,
                    itemStyle: {
                        // color: '#f7f1bd'
                    }
                }, { // 费沁源
                    name: '费沁源',
                    value: 1,
                    itemStyle: {
                        // color: '#f7f1bd'
                    }
                }, { // 姜杉
                    name: '姜杉',
                    value: 1,
                    itemStyle: {
                        // color: '#f7f1bd'
                    }
                }, { // 其他
                    name: '其他',
                    value: 1,
                    itemStyle: {
                        // color: '#f7f1bd'
                    }
                }]
            }, { // Team X
                name: 'Team X',
                itemStyle: {
                    color: '#b1d61b'
                },
                children: [{ // 宋昕冉
                    name: '宋昕冉',
                    value: 1,
                    itemStyle: {
                        // color: '#f99e1c'
                    }
                }, { // 杨冰怡
                    name: '杨冰怡',
                    value: 1,
                    itemStyle: {
                        // color: '#ef5a78'
                    }
                }, { // 张丹三
                    name: '张丹三',
                    value: 1,
                    itemStyle: {
                        // color: '#f7f1bd'
                    }
                }, { // 其他
                    name: '其他',
                    value: 1,
                    itemStyle: {
                        // color: '#f7f1bd'
                    }
                }]
            }]
        }, {

            // BEJ48
            name: 'BEJ48',
            itemStyle: {
                color: '#ff4083'
            },
            children: [{ // Team B
                name: 'Team B',
                itemStyle: {
                    color: '#ff4083'
                },
                children: [{ // 段艺璇
                    name: '段艺璇',
                    value: 1,
                    itemStyle: {
                        // color: '#3e0317'
                    }
                }, { // 胡晓慧
                    name: '胡晓慧',
                    value: 1,
                    itemStyle: {
                        // color: '#e62969'
                    }
                }, { // 其他
                    name: '其他',
                    value: 1,
                    itemStyle: {
                        // color: '#6569b0'
                    }
                }]
            }, { // Team E
                name: 'Team E',
                itemStyle: {
                    color: '#0cc8c3'
                },
                children: [{ // 苏杉杉
                    name: '苏杉杉',
                    value: 1,
                    itemStyle: {
                        // color: '#b53b54'
                    }
                }, { // 冯思佳
                    name: '冯思佳',
                    value: 1,
                    itemStyle: {
                        // color: '#a5446f'
                    }
                }, { // 其他
                    name: '其他',
                    value: 1,
                    itemStyle: {
                        // color: '#a5446f'
                    }
                }]
            }, {
                // Team J
                name: 'Team J',
                itemStyle: {
                    color: '#006ab7'
                },
                children: [{ // 韩家乐
                    name: '韩家乐',
                    value: 1,
                    itemStyle: {
                        // color: '#f2684b'
                    }
                }, { // 张怀瑾
                    name: '张怀瑾',
                    value: 1,
                    itemStyle: {
                        // color: '#e73451'
                    }
                }, { // 黄恩茹
                    name: '黄恩茹',
                    value: 1,
                    itemStyle: {
                        // color: '#e65656'
                    }
                }, { // 其他
                    name: '其他',
                    value: 1,
                    itemStyle: {
                        // color: '#f89a1c'
                    }
                }]
            }]
        }, {

            //GNZ48
            name: 'GNZ48',
            itemStyle: {
                color: '#9FBF40'
            },
            children: [{ // Team G
                name: 'Team G',
                itemStyle: {
                    color: '#9FBF40'
                },
                children: [{ // 谢蕾蕾
                    name: '谢蕾蕾',
                    value: 1,
                    itemStyle: {
                        // color: '#9ea718'
                    }
                }, { // 陈珂
                    name: '陈珂',
                    value: 1,
                    itemStyle: {
                        // color: '#94a76f'
                    }
                }, { // 张琼予
                    name: '张琼予',
                    value: 1,
                    itemStyle: {
                        // color: '#d0b24f'
                    }
                }, { // 其他
                    name: '其他',
                    value: 1,
                    itemStyle: {
                        // color: '#8eb646'
                    }
                }]
            }, { // Team NIII
                name: 'Team NIII',
                itemStyle: {
                    color: '#ffe249'
                },
                children: [{ // 郑丹妮
                    name: '郑丹妮',
                    value: 1,
                    itemStyle: {
                        // color: '#8f1c53'
                    }
                }, { // 刘力菲
                    name: '刘力菲',
                    value: 1,
                    itemStyle: {
                        // color: '#b34039'
                    }
                }, { // 卢静
                    name: '卢静',
                    value: 1,
                    itemStyle: {
                        // color: '#ba9232'
                    }
                }, { // 其他
                    name: '其他',
                    value: 1,
                    itemStyle: {
                        // color: '#8b6439'
                    }
                }]
            }, { // Team Z
                name: 'Team Z',
                itemStyle: {
                    color: '#ea617b'
                },
                children: [{ // 杨媛媛
                    name: '杨媛媛',
                    value: 5,
                    itemStyle: {
                        // color: '#8f1c53'
                    }
                }, { // 杜秋霖
                    name: '杜秋霖',
                    value: 1,
                    itemStyle: {
                        // color: '#b34039'
                    }
                }, { // 梁婉琳
                    name: '梁婉琳',
                    value: 1,
                    itemStyle: {
                        // color: '#ba9232'
                    }
                }, { // 余芷媛
                    name: '余芷媛',
                    value: 1,
                    itemStyle: {
                        // color: '#8b6439'
                    }
                }, { // 其他
                    name: '其他',
                    value: 1,
                    itemStyle: {
                        // color: '#8b6439'
                    }
                }]
            }]
        }];

        option = {
            title: {
                text: '集资分布',
                subtext: '点击圆环查看各分团/队伍的集资分布详情\n点击圆心返回上一级',
                textStyle: {
                    fontSize: 14,
                    align: 'center'
                },
                subtextStyle: {
                    align: 'center'
                },
            },
            tooltip: {
                trigger: 'item',
                // formatter: "{b}: {c} ({d}%)",
                formatter: function (params) {
                    // console.log(params);
                    return params.name + "<br/>" + "集资总额: " + params.value.toFixed(2);  // Reserve 2 decimals.
                }
            },
            series: {
                type: 'sunburst',
                highlightPolicy: 'ancestor',
                data: data,
                itemStyle: {
                    color: '#999999',
                    borderWidth: 0,
                },
                radius: [0, '95%'],
                sort: null,
                levels: [{}, {
                    r0: '15%',
                    r: '35%',
                    itemStyle: {
                        borderWidth: 3
                    },
                    label: {
                        rotate: 'tangential'
                    }
                }, {
                    r0: '40%',
                    r: '65%',
                    itemStyle: {
                        borderWidth: 2
                    },
                    label: {
                        align: 'right'
                    }
                }, {
                    r0: '70%',
                    r: '75%',
                    label: {
                        position: 'outside',
                        padding: 3,
                        silent: false
                    },
                    itemStyle: {
                        borderWidth: 1
                    }
                }]
            }
        };

        percentageChart.setOption(option, true);
}


/* Ajax upgrade */
var ajaxTime = 2000;    // ajax cycle in millisecond
setInterval(function () {
    $.ajax({
        url: '',
        contentType: 'application/json',
        dataType: 'json',
        type: "GET",
        success: function (data) {
            // percentage
            growthTheater = $.parseJSON(data["growth_theater"]);
            growthTeam = $.parseJSON(data["growth_team"]);
            growthMember = $.parseJSON(data["growth_member"]);
        }
    });

    // percentage
    percentageControl(growthTheater, growthTeam, growthMember)

}, ajaxTime);   // ajax every ajaxTime millisecond

