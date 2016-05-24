//$.fx.speeds._default = 300;

function makeTemplates() {
    var templateName = '';

    $('script[type="text/x-jquery-tmpl"]').each(function (index, item) {
        //
        templateName     = $(item).attr("id");
        $.template(templateName.replace("Template", ""), $(item).html());


        //console.log("TEMPLATE: " + templateName.replace("Template", ""));
    });
}


// function render(element,data,data){
//             $(element).html('');
//             $.tmpl(template,data).appendTo(element);
// }


function bind(element, func) {
    $(element).unbind().bind(eventToUse, func);
}

function slideIn(element, func) {
    $(element).show().transition({ x: w * -1 }, func);
}

function slideOut(element, func) {
    $(element).show().transition({ x: w * 1 }, func);
}

function swapIn(elementFrom, elementTo, func) {
    $(elementTo).show().transition({ x: w * -1 }, function () {
        $(elementFrom).transition({ x: w * 1 },10, function () {
            $(this).hide();
        });

        func();
    });
}

function swapOut(elementFrom, elementTo, func) {
    $(elementTo).show().transition({ x: w *-1 },10, function () {

        $(elementFrom).transition({ x: w * 1 }, function () {
            $(this).hide();
        });

        func();
    });
}

function hideKeyboard() {
    document.activeElement.blur();
    $("input").blur();

    //if (isiOS) {
    //    document.activeElement.blur();
    //    $("input").blur();
    //} else {
        try {
            Android.HideKeyboard();
        } catch (e) {

        }
    //}
}