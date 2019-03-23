
function Growth() {
    this.dom = document.getElementById("growth-wrapper");
    this.growthChart = echarts.init(this.dom);
    this.ajaxTime = 1000;

    this.growthData = {};
    this.theaterColor = {
        "全团总额": "#ff0000",
        "SNH48": "#00b6de",
        "BEJ48": "#ff4083",
        "GNZ48": "#9FBF40"
    };
    this.teamColor = {
        "Team SII": '#00b6de',
        "Team NII": '#9e57b4',
        "Team HII": '#f8941d',
        "Team X": '#b1d61b',
        "Team B": '#ff4083',
        "Team E": '#0cc8c3',
        "Team J": '#006ab7',
        "Team G": '#9FBF40',
        "Team NIII": '#ffe249',
        "Team Z": '#ea617b',
    };
    this.memberColor = {
        // Team SII
        "陈观慧": '#eeeeee',
        "陈俊羽": '#eeeeee',
        "陈思":   '#eeeeee',
        "戴萌":   '#F6BDC1',
        "蒋芸": '#303987',
        "孔肖吟": '#FF613C',
        "李宇琪": '#8249A3',
        "刘增艳": '#BC8CB9',
        "莫寒": '#297CD7',
        "钱蓓婷": '#3A5BA5',
        "邱欣怡": '#eeeeee',
        "孙芮": '#000000',
        "邵雪聪": '#eeeeee',
        "温晶婕": '#eeeeee',
        "吴哲晗": '#F6C5C6',
        "徐晨辰": '#eeeeee',
        "许佳琪": '#FF093D',
        "徐子轩": '#FFA899',
        "袁丹妮": '#eeeeee',
        "杨令仪": '#eeeeee',
        "袁雨桢": '#FE9E1C',
        "朱小丹": '#eeeeee',
        "张语格": '#FF0030',
        // Team NII
        "陈佳莹": '#eeeeee',
        "冯薪朵": '#31B26B',
        "黄婷婷": '#FDF200',
        "何晓玉": '#eeeeee',
        "金莹玥": '#eeeeee',
        "江真仪": '#EF8FB8',
        "刘洁": '#eeeeee',
        "栾嘉仪": '#eeeeee',
        "李美琪": '#eeeeee',
        "陆婷": '#D9205E',
        "卢天惠": '#6EC7EC',
        "马凡": '#eeeeee',
        "王诗蒙": '#972D2C',
        "谢妮": '#FE0100',
        "易嘉爱": '#D06479',
        "颜沁": '#eeeeee',
        "赵佳蕊": '#01BBF3',
        "周诗雨": '#eeeeee',
        "张茜": '#FEEEF4',
        "赵粤": '#0C7CE5',
        "张怡": '#CAF6EF',
        "张雨鑫": '#FFC4D3',
        // Team HII
        "陈盼": '#eeeeee',
        "费沁源": '#E7B3D2',
        "郭爽": '#eeeeee',
        "郝婧怡": '#eeeeee',
        "洪珮雲": '#A71B17',
        "姜杉": '#870000',
        "蒋舒婷": '#eeeeee',
        "林楠": '#eeeeee',
        "林舒晴": '#eeeeee',
        "林思意": '#009441',
        "李玉倩": '#eeeeee',
        "李艺彤": '#E60111',
        "戚予珠": '#eeeeee',
        "沈梦瑶": '#CE50A7',
        "宋雨珊": '#eeeeee',
        "孙珍妮": '#F7EE10',
        "万丽娜": '#493A90',
        "王欣颜甜甜": '#eeeeee',
        "王奕": '#eeeeee',
        "徐晗": '#eeeeee',
        "许杨玉琢": '#009113',
        "袁一琦": '#2E2928',
        "张昕": '#AE014E',
        // Team X
        "陈琳": '#FF043B',
        "冯晓菲": '#E75398',
        "刘静晗": '#eeeeee',
        "鲁静萍": '#eeeeee',
        "李星羽": '#eeeeee',
        "吕一": '#EE332A',
        "李钊": '#EB7477',
        "潘瑛琪": '#eeeeee',
        "祁静": '#04B7ED',
        "冉蔚": '#701619',
        "宋昕冉": '#FCC525',
        "孙歆文": '#eeeeee',
        "王菲妍": '#eeeeee',
        "汪佳翎": '#b1d61b',
        "王晓佳": '#eeeeee',
        "谢天依": '#eeeeee',
        "杨冰怡": '#AA302E',
        "张丹三": '#F8DFDA',
        "张嘉予": '#eeeeee',
        // Team B
        "程戈": '#eeeeee',
        "陈美君": '#B83540',
        "段艺璇": '#FF9700',
        "胡丽芝": '#eeeeee',
        "胡晓慧": '#F7A5A4',
        "刘姝贤": '#EFCED0',
        "林溪荷": '#eeeeee',
        "李瑜璇": '#eeeeee',
        "曲美霖": '#eeeeee',
        "青钰雯": '#D6181F',
        "沈小爱": '#eeeeee',
        "孙晓艳": '#eeeeee',
        "田姝丽": '#eeeeee',
        "熊素君": '#eeeeee',
        "闫明筠": '#eeeeee',
        "杨鑫": '#eeeeee',
        "张梦慧": '#eeeeee',
        "赵天杨": '#eeeeee',
        "张羽涵": '#eeeeee',
        // Team E
        "陈倩楠": '#8B99CD',
        "程宇璐": '#eeeeee',
        "冯思佳": '#60BBC1',
        "高蔚然": '#eeeeee',
        "李丽满": '#eeeeee',
        "李娜": '#eeeeee',
        "刘胜男": '#eeeeee',
        "李诗彦": '#eeeeee',
        "李梓": '#931211',
        "马玉灵": '#FED737',
        "彭嘉敏": '#eeeeee',
        "任蔓琳": '#eeeeee',
        "苏杉杉": '#F29A03',
        "王嘉瑜": '#eeeeee',
        "王雨兰": '#eeeeee',
        "顼凘炀": '#eeeeee',
        "熊鑫": '#eeeeee',
        "杨一帆": '#eeeeee',
        "张爱静": '#eeeeee',
        "臧聪": '#eeeeee',
        "张丹丹": '#eeeeee',
        "张笑盈": '#eeeeee',
        // Team J
        "柏欣妤": '#232F3A',
        "陈雅钰": '#eeeeee',
        "房蕾": '#749E6B',
        "葛司琪": '#A3D8FF',
        "黄恩茹": '#FEE0F9',
        "韩家乐": '#F5B5B1',
        "何阳青青": '#eeeeee',
        "金锣赛": '#eeeeee',
        "楼澍": '#eeeeee',
        "刘闲": '#eeeeee',
        "刘一菲": '#eeeeee',
        "任心怡": '#0FA3B8',
        "孙语姗": '#FDD143',
        "唐霖": '#eeeeee',
        "王雨煊": '#eeeeee',
        "叶苗苗": '#eeeeee',
        "杨晔": '#eeeeee',
        "张怀瑾": '#E9D19C',
        "郑洁丽": '#eeeeee',
        "周湘": '#eeeeee',
        // Team G
        "陈俊宏": '#eeeeee',
        "GNZ48陈佳莹": '#eeeeee',
        "陈珂": '#FADB2E',
        "符冰冰": '#eeeeee',
        "高源婧": '#61C4C0',
        "黄楚茵": '#eeeeee',
        "罗寒月": '#eeeeee',
        "梁娇": '#eeeeee',
        "林嘉佩": '#eeeeee',
        "罗可嘉": '#eeeeee',
        "李沁洁": '#eeeeee',
        "李姗姗": '#eeeeee',
        "林芝": '#eeeeee',
        "徐楚雯": '#eeeeee',
        "徐慧玲": '#eeeeee',
        "谢蕾蕾": '#FFC2C4',
        "阳青颖": '#eeeeee',
        "叶舒淇": '#eeeeee',
        "曾艾佳": '#eeeeee',
        "张琼予": '#005caf',
        "朱怡欣": '#eeeeee',
        // Team NIII
        "陈楠茜": '#eeeeee',
        "陈欣妤": '#eeeeee',
        "邓熳慧": '#eeeeee',
        "高雪逸": '#eeeeee',
        "洪静雯": '#eeeeee',
        "卢静": '#C0DDEE',
        "刘力菲": '#8DC41E',
        "刘倩倩": '#FD61A5',
        "孙馨": '#eeeeee',
        "唐莉佳": '#5F4A8A',
        "吴羽霏": '#eeeeee',
        "谢艾琳": '#eeeeee',
        "冼燊楠": '#eeeeee',
        "肖文铃": '#FFCDC7',
        "熊心瑶": '#eeeeee',
        "郑丹妮": '#F6EABD',
        "左嘉欣": '#eeeeee',
        "左婧媛": '#653B8C',
        "张润": '#eeeeee',
        // Team Z
        "毕瑞珊": '#eeeeee',
        "陈桂君": '#eeeeee',
        "邓惠恩": '#eeeeee',
        "杜秋霖": '#eeeeee',
        "方琪": '#eeeeee',
        "郭铱宁": '#eeeeee',
        "何梦瑶": '#eeeeee',
        "梁乔": '#eeeeee',
        "梁婉琳": '#A93539',
        "龙亦瑞": '#B484B7',
        "赖梓惜": '#eeeeee',
        "农燕萍": '#eeeeee',
        "王翠菲": '#eeeeee',
        "王炯义": '#E73161',
        "王偲越": '#eeeeee',
        "谢菲菲": '#eeeeee',
        "杨可璐": '#eeeeee',
        "杨媛媛": '#BF0204',
        "余芷媛": '#E2586D',
        "张秋怡": '#eeeeee',
    };

    this.theaterList = ["全团总额", "SNH48", "BEJ48", "GNZ48"];
    this.teamList = ["Team SII", "Team NII", "Team HII", "Team X", "Team B", "Team E",
    "Team J", "Team G", "Team NIII", "Team Z"];

    var memberSII = ["陈观慧", "陈俊羽", "陈思", "戴萌", "蒋芸", "孔肖吟", "李宇琪", "刘增艳", "莫寒", "钱蓓婷", "邱欣怡",
                     "孙芮", "邵雪聪", "温晶婕", "吴哲晗", "徐晨辰", "许佳琪", "徐子轩", "袁丹妮", "杨令仪", "袁雨桢",
                     "朱小丹", "张语格"];
    var memberNII = ["陈佳莹", "冯薪朵", "黄婷婷", "何晓玉", "金莹玥", "江真仪", "刘洁", "栾嘉仪", "李美琪",
                      "陆婷", "卢天惠", "马凡", "王诗蒙", "谢妮", "易嘉爱", "颜沁", "赵佳蕊", "周诗雨", "张茜", "赵粤", "张怡", "张雨鑫"];
    var memberHII = ["陈盼", "费沁源", "郭爽", "郝婧怡", "洪珮雲", "姜杉", "蒋舒婷", "林楠", "林舒晴", "林思意",
                      "李玉倩", "李艺彤", "戚予珠", "沈梦瑶", "宋雨珊", "孙珍妮", "万丽娜", "王欣颜甜甜", "王奕", "徐晗",
                      "许杨玉琢", "袁一琦", "张昕"];
    var memberX = ["陈琳", "冯晓菲", "刘静晗", "鲁静萍", "李星羽", "吕一", "李钊", "潘瑛琪", "祁静", "冉蔚",
                    "宋昕冉", "孙歆文", "王菲妍", "汪佳翎", "王晓佳", "谢天依", "杨冰怡", "张丹三", "张嘉予"];
    var memberB = ["程戈", "陈美君", "段艺璇", "胡丽芝", "胡晓慧", "刘姝贤", "林溪荷", "李瑜璇", "曲美霖",
                    "青钰雯", "沈小爱", "孙晓艳", "田姝丽", "熊素君", "闫明筠", "杨鑫", "张梦慧", "赵天杨", "张羽涵"];
    var memberE = ["陈倩楠", "程宇璐", "冯思佳", "高蔚然", "李丽满", "李娜", "刘胜男", "李诗彦", "李梓", "马玉灵",
                    "彭嘉敏", "任蔓琳", "苏杉杉", "王嘉瑜", "王雨兰", "顼凘炀", "熊鑫", "杨一帆", "张爱静", "臧聪", "张丹丹", "张笑盈"];
    var memberJ = ["柏欣妤", "陈雅钰", "房蕾", "葛司琪", "黄恩茹", "韩家乐", "何阳青青", "金锣赛", "楼澍", "刘闲",
                    "刘一菲", "任心怡", "孙语姗", "唐霖", "王雨煊", "叶苗苗", "杨晔", "张怀瑾", "郑洁丽", "周湘"];
    var memberG = ["陈俊宏", "GNZ48陈佳莹", "陈珂", "符冰冰", "高源婧", "黄楚茵", "罗寒月", "梁娇", "林嘉佩",
                    "罗可嘉", "李沁洁", "李姗姗", "林芝", "徐楚雯", "徐慧玲", "谢蕾蕾", "阳青颖", "叶舒淇", "曾艾佳", "张琼予", "朱怡欣"];
    var memberNIII = ["陈楠茜", "陈欣妤", "邓熳慧", "高雪逸", "洪静雯", "卢静", "刘力菲", "刘倩倩", "孙馨",
                       "唐莉佳", "吴羽霏", "谢艾琳", "冼燊楠", "肖文铃", "熊心瑶", "郑丹妮", "左嘉欣", "左婧媛", "张润"];
    var memberZ = ["毕瑞珊", "陈桂君", "邓惠恩", "杜秋霖", "方琪", "郭铱宁", "何梦瑶", "梁乔", "梁婉琳", "龙亦瑞",
                    "赖梓惜", "农燕萍", "王翠菲", "王炯义", "王偲越", "谢菲菲", "杨可璐", "杨媛媛", "余芷媛", "张秋怡"];
    this.memberList = memberSII.concat(memberNII, memberHII, memberX, memberB, memberE, memberJ, memberG, memberNIII, memberZ);
}

Growth.prototype.sub = function (a, b) {
    var m = {};
    var d = [];
    a.forEach(function(al){m[al]=al;});
    b.forEach(function(bl){delete m[bl];});
    for (var key in m) {
        d.push(key);
    }
    return d;
};

Growth.prototype.dropDownCk = function (selectId, hiddenId, item) {
    var boxId = "#" + boxId,
    selectId = "#" + selectId,
    hiddenId = "#" + hiddenId;

    $(hiddenId).mouseleave(function(){ // 鼠标离开隐藏复选区域
        $(this).hide();
    });

    $(selectId).click(function() { // 切换显示与隐藏
        $(hiddenId).toggle();
    });

    var tagArr = []; // 接收复选字段数组
    $(selectId).html("<option checked='true' style='display:none;'>" + item + "</option>");
    $(hiddenId + ' label').find('input').click(function() { // 点击向数组添加元素
        if ($(this).is(':checked')) {
             tagArr.push($(this).parent().text());
             // $(selectId).html("<option checked='true' style='display:none;'>" + tagArr.join(",") + "</option>");
        } else {
             tagArr.splice(tagArr.indexOf($(this).parent().text()), 1); // 删除对应元素
             if (tagArr.length == 0) {
                 $(selectId).html("<option checked='true' style='display:none;'>" + item + "</option>");
             }
        }
    });

    return tagArr;
};

Growth.prototype.addOption = function (selectedTheater, selectedTeam, selectedMember) {
    var self = this;
    var i = 0;
    var option = {
        tooltip: {
            trigger: 'axis',
            showContent: true,     // Do not show content.
            hideDelay: 5000,
            axisPointer: {
                type: 'cross',
                lineStyle: {
                    type: 'dashed'
                }
            },
            backgroundColor: 'rgba(192, 218, 255, 0.5)',
            textStyle: {
                color: '#000'
            },
            extraCssText: 'width: 170px',
            formatter: function (params) {
                // use toFixed() to reserve 2 decimals of amount.
                var seriesParams = params[0]["seriesName"] + ": " + params[0].value.toFixed(2) + '<br>';
                for (var i=1; i<params.length; i++) {
                    /*
                       params[i].value might sometimes be string format, therefor,
                       translate it into float number first before use toFixed() function.
                    */
                    if (typeof params[i].value === 'string') {
                        seriesParams += params[i]["seriesName"] + ": "  + parseFloat(params[i].value).toFixed(2) + '<br>';
                    } else {
                        seriesParams += params[i]["seriesName"] + ": "  + params[i].value.toFixed(2) + '<br>';
                    }
                }
                return seriesParams;
            }
        },

        title:{
            text: '集 资 增 长',
            textStyle: {
                color: '#C0DAFF',
                fontSize: 30,
                fontFamily: "楷体"
            },
            x: "center",
            y: 10,
        },

        legend:{
            type: 'plain',
            x: 'left',
            left: 100,
            top: 50,
            inactiveColor: '#121A20',
            textStyle:{
                color: '#aaaaaa',
                fontSize: 15,
            }
        },

        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: self.growthData["sample_time"],
            axisLine: {
                lineStyle: {
                    // X axis color
                    color: '#C0DAFF'
                }
            },
        },

        yAxis: {
            name: '单位：万元',
            nameGap: 20,
            type: 'value',
            boundaryGap: false,
            splitLine:{
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#C0DAFF'
                }
            },
            axisLabel: {
                textStyle: {
                    fontSize: 15
                },
                formatter: function (value, index) {
                    return value / 10000;
                }
            },

        },

        // dataZoom: [
        //     {
        //         type: 'slider',
        //         show: true,
        //         xAxisIndex: [0],
        //         start: 0,
        //         end: 100
        //     },
        //     {
        //         type: 'inside',
        //         xAxisIndex: [0],
        //         start: 1,
        //         end: 35
        //     },
        // ],

        grid: {
            // x, y, x2, y2: axis distance from div
            x: 70,
            y: 70,
            x2: 40,
            y2: 40,
        },

        series: []
    };

    // Theater
    for (i=0; i<selectedTheater.length; i++) {
        var seriesSubTheater = {
            name: selectedTheater[i],
            type:'line',
            smooth:false,
            symbol: 'circle',
            areaStyle: {normal: {}},
            data: self.growthData["growth_theater"][selectedTheater[i]],
            itemStyle: {
                normal: {
                    color: self.theaterColor[selectedTheater[i]],
                    borderColor: self.theaterColor[selectedTheater[i]],
                    areaStyle: {
                        type: 'default',
                        opacity: 0.0    //Color under lines.
                    }
                }
            },
        };
        option["series"] = option["series"].concat(seriesSubTheater);
    }

    var selectedSubTheater = {};
    var theaterRest = self.sub(self.theaterList, selectedTheater);     // Theaters which are not selected.
    for (i=0; i<theaterRest.length; i++) {
        selectedTheater[theaterRest[i]] = false;       // Theaters not selected will not display.
    }
    for (i=0; i<selectedTeam.length; i++) {
        selectedSubTheater[selectedTeam[i]] = true;    // Theaters selected will display.
    }
    // Add selected theaters to 'selected' dictionary.
    $.extend(option["legend"]["selected"], selectedSubTheater);

    // Team
    for (i=0; i<selectedTeam.length; i++) {
        var seriesSubTeam = {
            name: selectedTeam[i],
            type:'line',
            smooth:false,
            symbol: 'circle',
            areaStyle: {normal: {}},
            data: self.growthData["growth_team"][selectedTeam[i]],
            itemStyle: {
                normal: {
                    color: self.teamColor[selectedTeam[i]],
                    borderColor: self.teamColor[selectedTeam[i]],
                    areaStyle: {
                        type: 'default',
                        opacity: 0.0    //Color under lines.
                    }
                }
            },
        };
        option["series"] = option["series"].concat(seriesSubTeam);
    }

    var selectedSubTeam = {};
    var teamRest = self.sub(self.teamList, selectedTeam);     // Teams which are not selected.
    for (i=0; i<teamRest.length; i++) {
        selectedSubTeam[teamRest[i]] = false;       // Teams not selected will not display.
    }
    for (i=0; i<selectedTeam.length; i++) {
        selectedSubTeam[selectedTeam[i]] = true;    // Teams selected will display.
    }
    // Add selected teams to 'selected' dictionary.
    $.extend(option["legend"]["selected"], selectedSubTeam);

    // Member
    for (i=0; i<selectedMember.length; i++) {
        var seriesSub = {
            name: selectedMember[i],
            type:'line',
            smooth:false,
            symbol: 'circle',
            areaStyle: {normal: {}},
            data: self.growthData["growth_member"][selectedMember[i]],
            itemStyle: {
                normal: {
                    color: self.memberColor[selectedMember[i]],
                    borderColor: self.memberColor[selectedMember[i]],
                    areaStyle: {
                        type: 'default',
                        opacity: 0.0    //Color under lines.
                    }
                }
            },
        };
        option["series"] = option["series"].concat(seriesSub);
    }

    var selectedSub = {};
    var memberRest = self.sub(self.memberList, selectedMember);
    for (i=0; i<memberRest.length; i++) {
        selectedSub[memberRest[i]] = false;
    }
    for (i=0; i<selectedMember.length; i++) {
        selectedSub[selectedMember[i]] = true;
    }
    $.extend(option["legend"]["selected"], selectedSub);

    return option;
};

Growth.prototype.init = function () {
    var self = this;

    var option = {
        tooltip: {
            trigger: 'axis',
            showContent: true,     // Do not show content.
            axisPointer: {
                type: 'cross',
                lineStyle: {
                    type: 'dashed'
                }
            },
            backgroundColor: 'rgba(192, 218, 255, 0.5)',
            textStyle: {
                color: '#000'
            },
            extraCssText: 'width: 170px',
            formatter: function (params) {
                // use toFixed() to reserve 2 decimals of amount.
                var seriesParams = params[0]["seriesName"] + ": " + params[0].value.toFixed(2) + '<br>';
                for (var i=1; i<params.length; i++) {
                    /*
                       params[i].value might sometimes be string format, therefor,
                       translate it into float number first before use toFixed() function.
                    */
                    if (typeof params[i].value === 'string') {
                        seriesParams += params[i]["seriesName"] + ": "  + parseFloat(params[i].value).toFixed(2) + '<br>';
                    } else {
                        seriesParams += params[i]["seriesName"] + ": "  + params[i].value.toFixed(2) + '<br>';
                    }
                }
                return seriesParams;
            }
        },

        title:{
            text: '集 资 增 长',
            textStyle: {
                color: '#C0DAFF',
                fontSize: 30,
                fontFamily: "楷体"
            },
            x: "center",
            y: 10,
        },

        legend:{
            type: 'plain',
            x: 'left',
            left: 100,
            top: 50,
            inactiveColor: '#121A20',
            textStyle:{
                color: '#aaaaaa',
                fontSize: 15,
            }
        },

        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: self.growthData["sample_time"],
            axisLine: {
                lineStyle: {
                    // X axis color
                    color: '#C0DAFF'
                }
            },
        },

        yAxis: {
            name: '单位：万元',
            nameGap: 15,
            type: 'value',
            boundaryGap: false,
            splitLine:{
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#C0DAFF'
                }
            },
            axisLabel: {
                textStyle: {
                    fontSize: 15
                },
                formatter: function (value, index) {
                    return value / 10000;
                }
            },

        },

        dataZoom: [
            {
                type: 'slider',
                show: true,
                xAxisIndex: [0],
                start: 0,
                end: 100
            },
            {
                type: 'inside',
                xAxisIndex: [0],
                start: 1,
                end: 35
            },
        ],

        grid: {
            // x, y, x2, y2: axis distance from div
            x: 90,
            y: 70,
            x2: 40,
            y2: 70,
        },

        series: [
            // Total
            {
                name:'集资总额',
                type:'line',
                smooth:false,
                symbol: 'circle',
                areaStyle: {
                    normal: {}
                },
                data: self.growthData["集资总额"],
                lineStyle: {
                    width: 3
                },
                itemStyle: {
                    normal: {
                        color: '#00b6de',
                        borderColor: '#00b6de',
                        areaStyle: {
                            type: 'default',
                            opacity: 0.0    //Color under lines.
                        }
                    }
                },
            },
            // SNH48
            {
                name:'SNH48',
                type:'line',
                smooth:false,
                symbol: 'circle',
                areaStyle: {
                    normal: {}
                },
                data: self.growthData["growth_theater"]["SNH48"],
                itemStyle: {
                    normal: {
                        color: '#00b6de',
                        borderColor: '#00b6de',
                        areaStyle: {
                            type: 'default',
                            opacity: 0.3    //Color under lines.
                        }
                    }
                },
            },
            // BEJ48
            {
                name:'BEJ48',
                type:'line',
                smooth:false,
                symbol: 'circle',
                areaStyle: {
                    normal: {}
                },
                data: self.growthData["growth_theater"]["BEJ48"],
                itemStyle: {
                    normal: {
                        color: '#ff4083',
                        borderColor: '#ff4083',
                        areaStyle: {
                            type: 'default',
                            opacity: 0.3    //Color under lines.
                        }
                    }
                },
            },
            // GNZ48
            {
                name:'GNZ48',
                type:'line',
                smooth:false,
                symbol: 'circle',
                areaStyle: {
                    normal: {}
                },
                data: self.growthData["growth_theater"]["GNZ48"],
                itemStyle: {
                    normal: {
                        color: '#9FBF40',
                        borderColor: '#9FBF40',
                        areaStyle: {
                            type: 'default',
                            opacity: 0.3    //Color under lines.
                        }
                    }
                },
            },
        ]
    };

    return option;
};

Growth.prototype.ajax = function () {
    var self = this;
    $.ajax({
        url: "/growth/",
        contentType: "application/json",
        dataType: "json",
        type: "GET",
        success: function (result) {
            self.growthData = $.parseJSON(result["growth"]);
        }
    })
};

Growth.prototype.run = function () {
    var self = this;
    var selectedTheater = self.dropDownCk("select-theater", "ul-theater", "选择分团");
    var selectedTeam = self.dropDownCk("select-team", "ul-team", "选择队伍");
    var selectedMember = self.dropDownCk("select-member","ul-member", "选择成员");
    self.ajax();
    self.growthChart.showLoading({
      text: '正在加载，请稍后...',
      color: '#C0DAFF',
      textColor: '#C0DAFF',
      maskColor: 'rgba(255, 255, 255, 0.0)',
      zlevel: 0
    });

    setInterval(function () {
        self.growthChart.hideLoading();
        var options = self.addOption(selectedTheater, selectedTeam, selectedMember);
        console.log(options);
        if (options && typeof options === "object") {
            self.growthChart.setOption(options, true);
        }
    }, self.ajaxTime);

};

$(function () {
    var growth = new Growth();
    growth.run();
});