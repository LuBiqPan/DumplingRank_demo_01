
function MemberColorControl() {
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
    this.theaterColor = {
        'SNH48': '#00b6de',
        'BEJ48': '#ff4083',
        'GNZ48': '#9FBF40'
    }
}

MemberColorControl.prototype.listenMember = function () {
    var self = this;
    var rankId = "#tr-rank-";
    for (var i=1; i<=66; i++) {
        var id = rankId + i.toString();
        var member = $(id).children("td.rank-member").text();
        var rankTag = $(id).children("td.rank-no").children("div.rank-div");
        var voteTag = $(id).children("td.rank-vote").children("div.vote-div");
        // console.log(leftBorder);

        if (member === "陈观慧" || member === "陈俊羽" || member === "陈思" || member === "戴萌" || member === "蒋芸" ||
        member === "孔肖吟" || member === "李宇琪" || member === "刘增艳" || member === "莫寒" || member === "钱蓓婷" ||
        member === "邱欣怡" || member === "孙芮" || member === "邵雪聪" || member === "温晶婕" || member === "吴哲晗" ||
        member === "徐晨辰" || member === "许佳琪" || member === "徐子轩" || member === "袁丹妮" || member === "杨令仪" ||
        member === "袁雨桢"|| member === "朱小丹"|| member === "张语格") {
            // $(id).children("td.rank-member").css("-webkit-text-stroke", "1.2px" + self.teamColor["Team SII"]);
            rankTag.css({
                "border-left": "4px solid" + self.teamColor["Team SII"],
                "border-radius": "4px"
            });
            voteTag.css({
                "border-right": "4px solid" + self.teamColor["Team SII"],
                "border-radius": "4px"
            });
        } else if (member === "陈佳莹" || member === "冯薪朵" || member === "黄婷婷" || member === "何晓玉" || member === "金莹玥" ||
        member === "江真仪" || member === "刘洁" || member === "栾嘉仪" || member === "李美琪" || member === "陆婷" ||
        member === "卢天惠" || member === "马凡" || member === "王诗蒙" || member === "谢妮" || member === "易嘉爱" ||
        member === "颜沁" || member === "赵佳蕊" || member === "周诗雨" || member === "张茜" || member === "赵粤" ||
        member === "张怡" ||member === "张雨鑫") {
            // $(id).children("td.rank-member").css("-webkit-text-stroke", "1px" + self.teamColor["Team NII"]);
            rankTag.css({
                "border-left": "4px solid" + self.teamColor["Team NII"],
                "border-radius": "4px"
            });
            voteTag.css({
                "border-right": "4px solid" + self.teamColor["Team NII"],
                "border-radius": "4px"
            });
        } else if (member === "陈盼" || member === "费沁源" || member === "郭爽" || member === "郝婧怡" || member === "洪珮雲" ||
        member === "姜杉" || member === "蒋舒婷" || member === "林楠" || member === "林舒晴" || member === "林思意" ||
        member === "李玉倩" || member === "李艺彤" || member === "戚予珠" || member === "沈梦瑶" || member === "宋雨珊" ||
        member === "孙珍妮" || member === "万丽娜" || member === "王欣颜甜甜" || member === "王奕" || member === "徐晗" ||
        member === "许杨玉琢" || member === "袁一琦" || member === "张昕") {
            // $(id).children("td.rank-member").css("-webkit-text-stroke", "1px" + self.teamColor["Team HII"]);
            rankTag.css({
                "border-left": "4px solid" + self.teamColor["Team HII"],
                "border-radius": "4px"
            });
            voteTag.css({
                "border-right": "4px solid" + self.teamColor["Team HII"],
                "border-radius": "4px"
            });
        } else if (member === "陈琳" || member === "冯晓菲" || member === "刘静晗" || member === "鲁静萍" || member === "李星羽" ||
        member === "吕一" || member === "李钊" || member === "潘瑛琪" || member === "祁静" || member === "冉蔚" ||
        member === "宋昕冉" || member === "孙歆文" || member === "王菲妍" || member === "汪佳翎" || member === "王晓佳" ||
        member === "谢天依" || member === "杨冰怡" || member === "张丹三" || member === "张嘉予") {
            // $(id).children("td.rank-member").css("-webkit-text-stroke", "1px" + self.teamColor["Team X"]);
            rankTag.css({
                "border-left": "4px solid" + self.teamColor["Team X"],
                "border-radius": "4px"
            });
            voteTag.css({
                "border-right": "4px solid" + self.teamColor["Team X"],
                "border-radius": "4px"
            });
        } else if (member === "程戈" || member === "陈美君" || member === "段艺璇" || member === "胡丽芝" || member === "胡晓慧" ||
        member === "刘姝贤" || member === "林溪荷" || member === "李瑜璇" || member === "曲美霖" || member === "青钰雯" ||
        member === "沈小爱" || member === "孙晓艳" || member === "田姝丽" || member === "熊素君" || member === "闫明筠" ||
        member === "杨鑫" || member === "张梦慧" || member === "赵天杨" || member === "张羽涵") {
            // $(id).children("td.rank-member").css("-webkit-text-stroke", "1px" + self.teamColor["Team B"]);
            rankTag.css({
                "border-left": "4px solid" + self.teamColor["Team B"],
                "border-radius": "4px"
            });
            voteTag.css({
                "border-right": "4px solid" + self.teamColor["Team B"],
                "border-radius": "4px"
            });
        } else if (member === "陈倩楠" || member === "程宇璐" || member === "冯思佳" || member === "高蔚然" || member === "李丽满" ||
        member === "李娜" || member === "刘胜男" || member === "李诗彦" || member === "李梓" || member === "马玉灵" ||
        member === "彭嘉敏" || member === "任蔓琳" || member === "苏杉杉" || member === "王嘉瑜" || member === "王雨兰" ||
        member === "顼凘炀" || member === "熊鑫" || member === "杨一帆" || member === "张爱静" || member === "臧聪" ||
        member === "张丹丹" || member === "张笑盈") {
            // $(id).children("td.rank-member").css("-webkit-text-stroke", "1px" + self.teamColor["Team E"]);
            rankTag.css({
                "border-left": "4px solid" + self.teamColor["Team E"],
                "border-radius": "4px"
            });
            voteTag.css({
                "border-right": "4px solid" + self.teamColor["Team E"],
                "border-radius": "4px"
            });
        } else if (member === "柏欣妤" || member === "陈雅钰" || member === "房蕾" || member === "葛司琪" || member === "黄恩茹" ||
        member === "韩家乐" || member === "何阳青青" || member === "金锣赛" || member === "楼澍" || member === "刘闲" ||
        member === "刘一菲" || member === "任心怡" || member === "孙语姗" || member === "唐霖" || member === "王雨煊" ||
        member === "叶苗苗" || member === "杨晔" || member === "张怀瑾" || member === "郑洁丽" || member === "周湘") {
            // $(id).children("td.rank-member").css("-webkit-text-stroke", "1px" + self.teamColor["Team J"]);
            rankTag.css({
                "border-left": "4px solid" + self.teamColor["Team J"],
                "border-radius": "4px"
            });
            voteTag.css({
                "border-right": "4px solid" + self.teamColor["Team J"],
                "border-radius": "4px"
            });
        } else if (member === "陈俊宏" || member === "GNZ48陈佳莹" || member === "陈珂" || member === "符冰冰" || member === "高源婧" ||
        member === "黄楚茵" || member === "罗寒月" || member === "梁娇" || member === "林嘉佩" || member === "罗可嘉" ||
        member === "李沁洁" || member === "李姗姗" || member === "林芝" || member === "徐楚雯" || member === "徐慧玲" ||
        member === "谢蕾蕾" || member === "阳青颖" || member === "叶舒淇" || member === "曾艾佳" || member === "张琼予" || member === "朱怡欣") {
            // $(id).children("td.rank-member").css("-webkit-text-stroke", "1px" + self.teamColor["Team G"]);
            rankTag.css({
                "border-left": "4px solid" + self.teamColor["Team G"],
                "border-radius": "4px"
            });
            voteTag.css({
                "border-right": "4px solid" + self.teamColor["Team G"],
                "border-radius": "4px"
            });
        } else if (member === "陈楠茜" || member === "陈欣妤" || member === "邓熳慧" || member === "高雪逸" || member === "洪静雯" ||
        member === "卢静" || member === "刘力菲" || member === "刘倩倩" || member === "孙馨" || member === "唐莉佳" ||
        member === "吴羽霏" || member === "谢艾琳" || member === "冼燊楠" || member === "肖文铃" || member === "熊心瑶" ||
        member === "郑丹妮" || member === "左嘉欣" || member === "左婧媛" || member === "张润") {
            // $(id).children("td.rank-member").css("-webkit-text-stroke", "1px" + self.teamColor["Team NIII"]);
            rankTag.css({
                "border-left": "4px solid" + self.teamColor["Team NIII"],
                "border-radius": "4px"
            });
            voteTag.css({
                "border-right": "4px solid" + self.teamColor["Team NIII"],
                "border-radius": "4px"
            });
        } else if (member === "毕瑞珊" || member === "陈桂君" || member === "邓惠恩" || member === "杜秋霖" || member === "方琪" ||
        member === "郭铱宁" || member === "何梦瑶" || member === "梁乔" || member === "梁婉琳" || member === "龙亦瑞" ||
        member === "赖梓惜" || member === "农燕萍" || member === "王翠菲" || member === "王炯义" || member === "王偲越" ||
        member === "谢菲菲" || member === "杨可璐" || member === "杨媛媛" || member === "余芷媛" || member === "张秋怡") {
            // $(id).children("td.rank-member").css("-webkit-text-stroke", "1px" + self.teamColor["Team Z"]);
            rankTag.css({
                "border-left": "4px solid" + self.teamColor["Team Z"],
                "border-radius": "4px"
            });
            voteTag.css({
                "border-right": "4px solid" + self.teamColor["Team Z"],
                "border-radius": "4px"
            });
        }
    }
};

MemberColorControl.prototype.listenTheater = function () {
    var self = this;
    var rankId = "#tr-rank-";
    for (var i=1; i<=66; i++) {
        var id = rankId + i.toString();
        var member = $(id).children("td.rank-member").text();
        var voteTag = $(id).children("td.rank-vote").children("div.vote-div");

        if (member === "陈观慧" || member === "陈俊羽" || member === "陈思" || member === "戴萌" || member === "蒋芸" ||
        member === "孔肖吟" || member === "李宇琪" || member === "刘增艳" || member === "莫寒" || member === "钱蓓婷" ||
        member === "邱欣怡" || member === "孙芮" || member === "邵雪聪" || member === "温晶婕" || member === "吴哲晗" ||
        member === "徐晨辰" || member === "许佳琪" || member === "徐子轩" || member === "袁丹妮" || member === "杨令仪" ||
        member === "袁雨桢"|| member === "朱小丹"|| member === "张语格" ||
        member === "陈佳莹" || member === "冯薪朵" || member === "黄婷婷" || member === "何晓玉" || member === "金莹玥" ||
        member === "江真仪" || member === "刘洁" || member === "栾嘉仪" || member === "李美琪" || member === "陆婷" ||
        member === "卢天惠" || member === "马凡" || member === "王诗蒙" || member === "谢妮" || member === "易嘉爱" ||
        member === "颜沁" || member === "赵佳蕊" || member === "周诗雨" || member === "张茜" || member === "赵粤" ||
        member === "张怡" ||member === "张雨鑫" ||
        member === "陈盼" || member === "费沁源" || member === "郭爽" || member === "郝婧怡" || member === "洪珮雲" ||
        member === "姜杉" || member === "蒋舒婷" || member === "林楠" || member === "林舒晴" || member === "林思意" ||
        member === "李玉倩" || member === "李艺彤" || member === "戚予珠" || member === "沈梦瑶" || member === "宋雨珊" ||
        member === "孙珍妮" || member === "万丽娜" || member === "王欣颜甜甜" || member === "王奕" || member === "徐晗" ||
        member === "许杨玉琢" || member === "袁一琦" || member === "张昕" ||
        member === "陈琳" || member === "冯晓菲" || member === "刘静晗" || member === "鲁静萍" || member === "李星羽" ||
        member === "吕一" || member === "李钊" || member === "潘瑛琪" || member === "祁静" || member === "冉蔚" ||
        member === "宋昕冉" || member === "孙歆文" || member === "王菲妍" || member === "汪佳翎" || member === "王晓佳" ||
        member === "谢天依" || member === "杨冰怡" || member === "张丹三" || member === "张嘉予") {
            voteTag.css({
                "border-right": "4px solid" + self.theaterColor["SNH48"],
                "border-radius": "4px"
            });
        } else if (member === "程戈" || member === "陈美君" || member === "段艺璇" || member === "胡丽芝" || member === "胡晓慧" ||
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
            voteTag.css({
                "border-right": "4px solid" + self.theaterColor["BEJ48"],
                "border-radius": "4px"
            });
        } else if (member === "陈俊宏" || member === "GNZ48陈佳莹" || member === "陈珂" || member === "符冰冰" || member === "高源婧" ||
        member === "黄楚茵" || member === "罗寒月" || member === "梁娇" || member === "林嘉佩" || member === "罗可嘉" ||
        member === "李沁洁" || member === "李姗姗" || member === "林芝" || member === "徐楚雯" || member === "徐慧玲" ||
        member === "谢蕾蕾" || member === "阳青颖" || member === "叶舒淇" || member === "曾艾佳" || member === "张琼予" || member === "朱怡欣" ||
        member === "陈楠茜" || member === "陈欣妤" || member === "邓熳慧" || member === "高雪逸" || member === "洪静雯" ||
        member === "卢静" || member === "刘力菲" || member === "刘倩倩" || member === "孙馨" || member === "唐莉佳" ||
        member === "吴羽霏" || member === "谢艾琳" || member === "冼燊楠" || member === "肖文铃" || member === "熊心瑶" ||
        member === "郑丹妮" || member === "左嘉欣" || member === "左婧媛" || member === "张润" ||
        member === "毕瑞珊" || member === "陈桂君" || member === "邓惠恩" || member === "杜秋霖" || member === "方琪" ||
        member === "郭铱宁" || member === "何梦瑶" || member === "梁乔" || member === "梁婉琳" || member === "龙亦瑞" ||
        member === "赖梓惜" || member === "农燕萍" || member === "王翠菲" || member === "王炯义" || member === "王偲越" ||
        member === "谢菲菲" || member === "杨可璐" || member === "杨媛媛" || member === "余芷媛" || member === "张秋怡") {
            voteTag.css({
                "border-right": "4px solid" + self.theaterColor["GNZ48"],
                "border-radius": "4px"
            });
        }
    }
};

MemberColorControl.prototype.run = function () {
    var self = this;
    setInterval(function () {
        self.listenMember();
        // self.listenTheater();
    }, 2000);
};

$(function () {
    var memberColorControl = new MemberColorControl();
    memberColorControl.run();
});