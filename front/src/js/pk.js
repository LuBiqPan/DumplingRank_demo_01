
/*************************** PK control ***************************/
function PkControl() {
    this.ajaxTime = 3000;

    this.tag1 = "pk-1-wrapper";
    this.tag2 = "pk-2-wrapper";
    this.tag3 = "pk-3-wrapper";
    this.dom1 = document.getElementById(this.tag1);
    this.dom2 = document.getElementById(this.tag2);
    this.dom3 = document.getElementById(this.tag3);
    this.pk1Chart = echarts.init(this.dom1);
    this.pk2Chart = echarts.init(this.dom2);
    this.pk3Chart = echarts.init(this.dom3);

    this.pk1Member = [];
    this.pk1Amount = [];
    this.pk1AmountRatio = [];
    this.pk1Title = "";

    this.pk2Member = [];
    this.pk2Amount = [];
    this.pk2AmountRatio = [];
    this.pk2Title = "";

    this.pk3Member = [];
    this.pk3Amount = [];
    this.pk3AmountRatio = [];
    this.pk3Title = "";

}

PkControl.prototype.chartControl = function (pkMember, pkAmount, pkAmountRatio, pkTitle, pkChart) {

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
            x: 90,
            y: 50,
            x2: 50,
            y2: 90,
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

    pkChart.setOption(option, true);
};

PkControl.prototype.init = function () {
    $("#pk-1-wrapper").hide();
    $("#pk-2-wrapper").hide();
    $("#pk-3-wrapper").hide();
    $("#pk-0-wrapper").show();
    $("#pk-0-wrapper").text("请选择一个PK项目");
    $("#pk-0-wrapper").css({
        "font-size": "50px",
        "font-weight": "bold",
        "color": "rgba(34, 46, 77, 0.5)",
        "line-height": "500px",
        "text-align": "center"
    });
};

PkControl.prototype.listenPk = function () {
    var self = this;
    $(".pk-1-btn").click(function () {
        $("#pk-0-wrapper").hide();
        $("#pk-1-wrapper").show();
        $("#pk-2-wrapper").hide();
        $("#pk-3-wrapper").hide();
    });
    self.chartControl(self.pk1Member, self.pk1Amount, self.pk1AmountRatio, self.pk1Title, self.pk1Chart);

    $(".pk-2-btn").click(function () {
        $("#pk-0-wrapper").hide();
        $("#pk-1-wrapper").hide();
        $("#pk-2-wrapper").show();
        $("#pk-3-wrapper").hide();
    });
    self.chartControl(self.pk2Member, self.pk2Amount, self.pk2AmountRatio, self.pk2Title, self.pk2Chart);

    $(".pk-3-btn").click(function () {
        $("#pk-0-wrapper").hide();
        $("#pk-1-wrapper").hide();
        $("#pk-2-wrapper").hide();
        $("#pk-3-wrapper").show();
    });
    self.chartControl(self.pk3Member, self.pk3Amount, self.pk3AmountRatio, self.pk3Title, self.pk3Chart);
};

PkControl.prototype.ajax = function () {
    var self = this;
    $.ajax({
        url: '',
        contentType: 'application/json',
        dataType: 'json',
        type: "GET",
        success: function (data) {
            console.log(data);
            // PK 1
            self.pk1Member = $.parseJSON(data["pk1"])["pk_member"];
            self.pk1Amount = $.parseJSON(data["pk1"])["pk_amount"];
            self.pk1AmountRatio = $.parseJSON(data["pk1"])["pk_amount_ratio"];
            self.pk1Title = $.parseJSON(data["pk1"])["pk_title"];
            // PK 2
            self.pk2Member = $.parseJSON(data["pk2"])["pk_member"];
            self.pk2Amount = $.parseJSON(data["pk2"])["pk_amount"];
            self.pk2AmountRatio = $.parseJSON(data["pk2"])["pk_amount_ratio"];
            self.pk2Title = $.parseJSON(data["pk2"])["pk_title"];
            // PK 3
            self.pk3Member = $.parseJSON(data["pk3"])["pk_member"];
            self.pk3Amount = $.parseJSON(data["pk3"])["pk_amount"];
            self.pk3AmountRatio = $.parseJSON(data["pk3"])["pk_amount_ratio"];
            self.pk3Title = $.parseJSON(data["pk3"])["pk_title"];
        }
    })
};

PkControl.prototype.run = function () {
    var self = this;
    self.init();
    setInterval(function () {
        self.ajax();
        self.listenPk();
    }, self.ajaxTime);
};

$(function () {
    var pkControl = new PkControl();
    pkControl.run();
});
