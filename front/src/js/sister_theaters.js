
function SisterTheaters() {
    this.domBEJ48 = document.getElementById("BEJ48-top16-wrapper");
    this.domGNZ48 = document.getElementById("GNZ48-top16-wrapper");
    this.chartBEJ48 = echarts.init(this.domBEJ48);
    this.chartGNZ48 = echarts.init(this.domGNZ48);

    this.colorBEJ48 = "#ff4083";
    this.colorGNZ48 = "#9FBF40";
    this.colorB = "#ff4083";
    this.colorE = "#0cc8c3";
    this.colorJ = "#006ab7";
    this.colorG = "#9FBF40";
    this.colorNIII = "#ffe249";
    this.colorZ = "#ea617b";
}

SisterTheaters.prototype.figureControl = function (title, barColor, dom, memberList, amountList) {
    var amountListTemp = [];
    for (var val in amountList) {
        amountListTemp.push(parseFloat(amountList[val]));
    }

    var option = {
        title: {
            text: title,
            textStyle: {
                color: '#C0DAFF',
                fontSize: 24,
            },
            x: "center",
            y: 10
        },
        tooltip: {
            formatter: function (params) {
                return params["name"] + " " + parseFloat(params["value"]).toFixed(2)
            }
        },
        xAxis: {
            type: "value",
            axisLine: {
                lineStyle: {
                    color: '#C0DAFF'
                }
            },
            splitLine:{
                show: false
            },
            axisLabel: {
                textStyle: {
                    fontSize: 15
                },
                formatter: function (value) {
                    return value / 10000;
                }
            },
        },
        yAxis: {
            //name: '单位：万元',
            nameGap: 35,
            type: "category",
            data: memberList,
            inverse: true,
            axisLine: {
                lineStyle: {
                    color: '#C0DAFF'
                }
            },
        },
        grid: {
            x: 60
        },
        series: [
            {
                name: "集资总额",
                type: "bar",
                data: amountListTemp,
                color: barColor
            }
        ]
    };

    dom.setOption(option, true);
};

SisterTheaters.prototype.tableControl = function (memberListVS, amountVS) {
    var amountVSTemp = [];
    for (var val in amountVS) {
        amountVSTemp.push(parseFloat(amountVS[val]));
    }

    for (var i=1; i<=16; i++) {
        // Construct member field selector.
        var memberSelector = "#tr-rank-" + i.toString() + " .rank-member";
        // Construct real_amount field selector.
        var totalAmountSelector = "#tr-rank-" + i.toString() + " .rank-account .account-div";

        $(memberSelector).text(memberListVS[i-1]);
        $(totalAmountSelector).text(amountVSTemp[i-1]);
    }
};

SisterTheaters.prototype.theaterColorControl = function () {
    var self = this;
    var rankId = "#tr-rank-";

    for (var i=1; i<=16; i++) {
        var id = rankId + i.toString();
        var member = $(id).children("td.rank-member").text();
        var rankTag = $(id).children("td.rank-no").children("div.rank-div");

        if (member === "程戈" || member === "陈美君" || member === "段艺璇" || member === "胡丽芝" || member === "胡晓慧" ||
        member === "刘姝贤" || member === "林溪荷" || member === "李瑜璇" || member === "曲美霖" || member === "青钰雯" ||
        member === "沈小爱" || member === "孙晓艳" || member === "田姝丽" || member === "熊素君" || member === "闫明筠" ||
        member === "杨鑫" || member === "张梦慧" || member === "赵天杨" || member === "张羽涵" ||
        member === "陈倩楠" || member === "程宇璐" || member === "冯思佳" || member === "高蔚然" || member === "李丽满" ||
        member === "李娜" || member === "刘胜男" || member === "李诗彦" || member === "李梓" || member === "马玉灵" ||
        member === "彭嘉敏" || member === "任蔓琳" || member === "苏杉杉" || member === "王嘉瑜" || member === "王雨兰" ||
        member === "顼凘炀" || member === "熊鑫" || member === "杨一帆" || member === "张爱静" || member === "臧聪" ||
        member === "张丹丹" || member === "张笑盈" ||
        member === "柏欣妤" || member === "陈雅钰" || member === "房蕾" || member === "葛司琪" || member === "黄恩茹" ||
        member === "韩家乐" || member === "何阳青青" || member === "金锣赛" || member === "楼澍" || member === "刘闲" ||
        member === "刘一菲" || member === "任心怡" || member === "孙语姗" || member === "唐霖" || member === "王雨煊" ||
        member === "叶苗苗" || member === "杨晔" || member === "张怀瑾" || member === "郑洁丽" || member === "周湘") {
            rankTag.css({
                "border-left": "4px solid" + self.colorBEJ48,
                "border-radius": "4px"
            });
        } else {
            rankTag.css({
                "border-left": "4px solid" + self.colorGNZ48,
                "border-radius": "4px"
            });
        }
    }
};

SisterTheaters.prototype.teamColorControl = function () {
    var self = this;
    var rankId = "#tr-rank-";

    for (var i = 1; i <= 16; i++) {
        var id = rankId + i.toString();
        var member = $(id).children("td.rank-member").text();
        var amountTag = $(id).children("td.rank-account").children("div.account-div");

        if (member === "程戈" || member === "陈美君" || member === "段艺璇" || member === "胡丽芝" || member === "胡晓慧" ||
        member === "刘姝贤" || member === "林溪荷" || member === "李瑜璇" || member === "曲美霖" || member === "青钰雯" ||
        member === "沈小爱" || member === "孙晓艳" || member === "田姝丽" || member === "熊素君" || member === "闫明筠" ||
        member === "杨鑫" || member === "张梦慧" || member === "赵天杨" || member === "张羽涵") {
            amountTag.css({
                "border-right": "4px solid" + self.colorB,
                "border-radius": "4px"
            });
        } else if (member === "陈倩楠" || member === "程宇璐" || member === "冯思佳" || member === "高蔚然" || member === "李丽满" ||
        member === "李娜" || member === "刘胜男" || member === "李诗彦" || member === "李梓" || member === "马玉灵" ||
        member === "彭嘉敏" || member === "任蔓琳" || member === "苏杉杉" || member === "王嘉瑜" || member === "王雨兰" ||
        member === "顼凘炀" || member === "熊鑫" || member === "杨一帆" || member === "张爱静" || member === "臧聪" ||
        member === "张丹丹" || member === "张笑盈") {
            amountTag.css({
                "border-right": "4px solid" + self.colorE,
                "border-radius": "4px"
            });
        } else if (member === "柏欣妤" || member === "陈雅钰" || member === "房蕾" || member === "葛司琪" || member === "黄恩茹" ||
        member === "韩家乐" || member === "何阳青青" || member === "金锣赛" || member === "楼澍" || member === "刘闲" ||
        member === "刘一菲" || member === "任心怡" || member === "孙语姗" || member === "唐霖" || member === "王雨煊" ||
        member === "叶苗苗" || member === "杨晔" || member === "张怀瑾" || member === "郑洁丽" || member === "周湘") {
            amountTag.css({
                "border-right": "4px solid" + self.colorJ,
                "border-radius": "4px"
            });
        } else if (member === "陈俊宏" || member === "GNZ48陈佳莹" || member === "陈珂" || member === "符冰冰" || member === "高源婧" ||
        member === "黄楚茵" || member === "罗寒月" || member === "梁娇" || member === "林嘉佩" || member === "罗可嘉" ||
        member === "李沁洁" || member === "李姗姗" || member === "林芝" || member === "徐楚雯" || member === "徐慧玲" ||
        member === "谢蕾蕾" || member === "阳青颖" || member === "叶舒淇" || member === "曾艾佳" || member === "张琼予" || member === "朱怡欣") {
            amountTag.css({
                "border-right": "4px solid" + self.colorG,
                "border-radius": "4px"
            });
        } else if (member === "陈楠茜" || member === "陈欣妤" || member === "邓熳慧" || member === "高雪逸" || member === "洪静雯" ||
        member === "卢静" || member === "刘力菲" || member === "刘倩倩" || member === "孙馨" || member === "唐莉佳" ||
        member === "吴羽霏" || member === "谢艾琳" || member === "冼燊楠" || member === "肖文铃" || member === "熊心瑶" ||
        member === "郑丹妮" || member === "左嘉欣" || member === "左婧媛" || member === "张润") {
            amountTag.css({
                "border-right": "4px solid" + self.colorNIII,
                "border-radius": "4px"
            });
        } else {
            amountTag.css({
                "border-right": "4px solid" + self.colorZ,
                "border-radius": "4px"
            });
        }
    }
};

SisterTheaters.prototype.ajax = function () {
    var self = this;
    $.ajax({
        // url: "/sister_theaters/",
        url: '/api/sister_theaters.php/',
        contentType: "application/json",
        dataType: "json",
        type: "GET",
        success: function (data) {
            var memberListBEJ48 = $.parseJSON(data["member_list_bej48"]);
            var memberListGNZ48 = $.parseJSON(data["member_list_gnz48"]);
            var memberListVS = $.parseJSON(data["member_list_vs"]);
            var amountBEJ48 = $.parseJSON(data["amount_bej48"]);
            var amountGNZ48 = $.parseJSON(data["amount_gnz48"]);
            var amountVS = $.parseJSON(data["amount_vs"]);

            self.figureControl("BEJ48 选拔", self.colorBEJ48, self.chartBEJ48, memberListBEJ48, amountBEJ48);
            self.figureControl("GNZ48 选拔", self.colorGNZ48, self.chartGNZ48, memberListGNZ48, amountGNZ48);
            self.tableControl(memberListVS, amountVS);
        }
    })
};


SisterTheaters.prototype.run = function () {
    var self = this;
    self.ajax();
    setTimeout(function () {
        self.theaterColorControl();
        self.teamColorControl();
    }, 500);
};

$(function () {
   var sisterTheaters = new SisterTheaters();
   sisterTheaters.run();
});

