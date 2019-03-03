
/*************************** PK control ***************************/
var pk1Member = ["李艺彤","黄婷婷","冯薪朵","陆婷","莫寒"];
var pk1Amount = [1500, 1000, 400, 350, 350];
var pk1AmountRatio = [0, 100, 40, 350, 30];
var tag1 = "pk-1-wrapper";
var pk1Title = "Pk 1";

var pk2Member = ["段艺璇","苏杉杉","韩家乐","谢蕾蕾","郑丹妮", "刘力菲"];
var pk2Amount = [1500, 1000, 400, 350, 350, 500];
var pk2AmountRatio = [0, 100, 40, 350, 30, 100];
var tag2 = "pk-2-wrapper";
var pk2Title = "Pk 2";

var pk3Member = ["费沁源","姜杉"];
var pk3Amount = [1500, 1000];
var pk3AmountRatio = [100, 100];
var tag3 = "pk-3-wrapper";
var pk3Title = "Pk 3";


function PkControl() {
}

PkControl.prototype.chartControl = function (pkMember, pkAmount, pkAmountRatio, tag, pkTitle) {
    var dom = document.getElementById(tag);
    var myChart = echarts.init(dom);

    var option = {
        title: {
            text: pkTitle,
            textStyle: {
                color: '#C0DAFF',
                fontSize: 30,
            },
            x: "center"  // title align
        },
        tooltip: {
            formatter: function (params) {
                return params["name"] + "(" + params["seriesName"] + ")" + ": " + parseFloat(params["value"]).toFixed(2)
            }
        },
        xAxis: {
            data: pkMember,
            axisLine: {
                lineStyle: {
                    color: '#C0DAFF'
                }
            },
            axisLabel: {
                textStyle: {
                    fontSize: 20
                }
            },
        },
        yAxis: {
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
                    fontSize: 20
                }
            },
        },
        grid: {
            // x, y, x2, y2: axis distance from div
            x: 60,
            y: 50,
            x2: 10,
            y2: 30,
        },
        series: [
            {
                name: '实际集资',
                type: 'bar',
                data: pkAmount,
                stack: "总量",
                label: {
                    normal: {
                        show: false,
                        position: 'insideTop'
                    }
                },
                itemStyle: {
                    normal: {
                        color: function (params) {
                            var colorList = ['#C33531', '#EFE42A', '#64BD3D', '#EE9201', '#29AAE3', '#B74AE5', '#0AAF9F', '#E89589', '#16A085', '#4A235A', '#C39BD3 ', '#F9E79F', '#BA4A00', '#ECF0F1', '#616A6B', '#EAF2F8', '#4A235A', '#3498DB'];
                            return colorList[params.dataIndex]
                        }
                    }
                }
            },
            {
                name: '系数集资',
                type: 'bar',
                data: pkAmountRatio,
                stack: "总量",
                label: {
                    normal: {
                        show: false,
                        position: 'insideTop'
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#888'
                    }
                }
            }
        ]
    };

    myChart.setOption(option, true);
};

PkControl.prototype.init = function () {
    var self = this.chartControl;
    $("#pk-1-wrapper").show();
    $("#pk-2-wrapper").hide();
    $("#pk-3-wrapper").hide();
    self(pk1Member, pk1Amount, pk1AmountRatio, tag1, pk1Title);
};

PkControl.prototype.listenPk = function () {
    var self = this.chartControl;
    $(".pk-1-btn").click(function () {
        $("#pk-1-wrapper").show();
        $("#pk-2-wrapper").hide();
        $("#pk-3-wrapper").hide();
        self(pk1Member, pk1Amount, pk1AmountRatio, tag1, pk1Title);
    });

    $(".pk-2-btn").click(function () {
        $("#pk-1-wrapper").hide();
        $("#pk-2-wrapper").show();
        $("#pk-3-wrapper").hide();
        self(pk2Member, pk2Amount, pk2AmountRatio, tag2, pk2Title);
    });

    $(".pk-3-btn").click(function () {
        $("#pk-1-wrapper").hide();
        $("#pk-2-wrapper").hide();
        $("#pk-3-wrapper").show();
        self(pk3Member, pk3Amount, pk3AmountRatio,tag3, pk3Title);
    });
};

PkControl.prototype.run = function () {
    this.init();
    this.listenPk();
};

$(function () {
    var pkControl = new PkControl();
    pkControl.run();
});
