// 地址三级联动  province city country
function area(province,city,country){
    //执行jquery的load方法，将Area.xml文件中的所有信息加载至本页面。加载完成后，触发相应的方法
    $("#province").load("Area.xml", function (msg) {
        areaMessge = $(msg);
        //首先获取所有的省,将获得的信息添加至省级的下拉列表中。
        areaMessge.find("province").each(function (index, element) {
            $("#province").append($("<option></option>").wrapInner($(this).attr("name")));
        });
        //修改省份默认值
        var options = $("#province").find("option");
        for (var i = 0; i < options.length; i++) {
            if ($(options[i]).text() == province) {
                $(options[i]).attr("selected", "selected");
            }
        }
        //触发当前省级下拉列表的change方法
        $("#province").trigger("change");
    });
    //给当前的省级下拉列表绑定change方法，当选择其他省级时，会触发方法。当前方法会根据选择的省份确定下一级的市级的下拉列表中的元素
    $("#province").change(function () {
        $("#city").empty();
        var province = $(this).val();
        areaMessge.find("province[name='" + province + "'] city").each(function (index, element) {
            $("#city").append($("<option></option>").append($(this).attr("name")));
        });
        $("#city").trigger("change");
        //修改市默认值
        var options = $("#city").find("option");
        for (var i = 0; i < options.length; i++) {
            if ($(options[i]).text() == city) {
                $(options[i]).attr("selected", "selected");
            }
        }
    });
    $("#city").change(function () {
        $("#country").empty();
        var province = $("#province").val();
        var city = $(this).val();
        areaMessge.find("province[name='" + province + "'] city[name='" + city + "'] country").each(function (index, element) {
            $("#country").append($("<option></option>").append($(this).attr("name")));
        });
        //修改县默认值
        var options = $("#country").find("option");
        for (var i = 0; i < options.length; i++) {
            if ($(options[i]).text() == country) {
                $(options[i]).attr("selected", "selected");
            }
        }
    });
}
