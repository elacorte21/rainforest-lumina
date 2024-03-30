
$(document).ready(function(){
    var thankselements = document.getElementsByClassName("thanksmessage");
    for (i = 0; i < thankselements.length; i++) {
        thankselements[i].style.display = "none";
    }
    var emailerrormsgelements = document.getElementsByClassName("emailerrormsg");
    for (i = 0; i < emailerrormsgelements.length; i++) {
        emailerrormsgelements[i].style.display = "none";
    }
    var emailexceedlimitlements = document.getElementsByClassName("emailexceedlimitmessage");
    for (i = 0; i < emailexceedlimitlements.length; i++) {
        emailexceedlimitlements[i].style.display = "none";
    }
    var invalidutmcodemessagelements = document.getElementsByClassName("invalidutmcodemessage");
    for (i = 0; i < invalidutmcodemessagelements.length; i++) {
        invalidutmcodemessagelements[i].style.display = "none";
    }

    var commonerrormessagelements = document.getElementsByClassName("commonerrormessage");
    for (i = 0; i < commonerrormessagelements.length; i++) {
        commonerrormessagelements[i].style.display = "none";
    }

   
    var AbsoluteUrl = getAbsolutePath();
    var bcode = getUrlVars()["utm_content"];
    if (bcode != undefined) {
        document.getElementById('bandcode').value = bcode;

        $(".thumb-char-ameng").attr("href", AbsoluteUrl + 'maya?utm_content=' + bcode);
        $(".thumb-char-pangolin").attr("href", AbsoluteUrl + 'waja?utm_content=' + bcode);
        $(".thumb-char-fox").attr("href", AbsoluteUrl + 'poncho?utm_content=' + bcode);
        $(".thumb-char-tiger").attr("href", AbsoluteUrl + 'tairee?utm_content=' + bcode);
        $(".thumb-char-hornbill").attr("href", AbsoluteUrl + 'casquette?utm_content=' + bcode);
        $(".thumb-char-otter").attr("href", AbsoluteUrl + 'bob?utm_content=' + bcode);
        $(".thumb-char-chameleon").attr("href", AbsoluteUrl + 'bisou?utm_content=' + bcode);
        $(".thumb-char-sloth").attr("href", AbsoluteUrl + 'slip?utm_content=' + bcode);
    }
    else
    {
        $(".thumb-char-ameng").attr("href", AbsoluteUrl + 'maya');
        $(".thumb-char-pangolin").attr("href", AbsoluteUrl + 'waja');
        $(".thumb-char-fox").attr("href", AbsoluteUrl + 'poncho');
        $(".thumb-char-tiger").attr("href", AbsoluteUrl + 'tairee');
        $(".thumb-char-hornbill").attr("href", AbsoluteUrl + 'casquette');
        $(".thumb-char-otter").attr("href", AbsoluteUrl + 'bob');
        $(".thumb-char-chameleon").attr("href", AbsoluteUrl + 'bisou');
        $(".thumb-char-sloth").attr("href", AbsoluteUrl + 'slip');
    }


   

    //$('.thumb-char-ameng').click(function (e) {
    //    var redirecturl = AbsoluteUrl + 'maya?utm_content=' + bcode;
    //    window.location = redirecturl;
    //});
    //$('.thumb-char-pangolin').click(function (e) {
    //    var redirecturl = AbsoluteUrl + 'waja?utm_content=' + bcode;
    //    window.location = redirecturl;
    //});
    //$('.thumb-char-fox').click(function (e) {
    //    var redirecturl = AbsoluteUrl + 'poncho?utm_content=' + bcode;
    //    window.location = redirecturl;
    //});
    //$('.thumb-char-tiger').click(function (e) {
    //    var redirecturl = AbsoluteUrl + 'tairee?utm_content=' + bcode;
    //    window.location = redirecturl;
    //});
    //$('.thumb-char-hornbill').click(function (e) {
    //    var redirecturl = AbsoluteUrl + 'casquette?utm_content=' + bcode;
    //    window.location = redirecturl; UpdateDownloadTime(imgid);
    //});
    //$('.thumb-char-otter').click(function (e) {
    //    var redirecturl = AbsoluteUrl + 'bob?utm_content=' + bcode;
    //    window.location = redirecturl;
    //});

    //$('.thumb-char-chameleon').click(function (e) {
    //    var redirecturl = AbsoluteUrl + 'bisou?utm_content=' + bcode;
    //    window.location = redirecturl;
    //});
    //$('.thumb-char-sloth').click(function (e) {
    //    var redirecturl = AbsoluteUrl + 'slip?utm_content=' + bcode;
    //    window.location = redirecturl;
    //});
    
    
});

function getAbsolutePath() {
    var loc = window.location;
    var pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') + 1);
    return loc.href.substring(0, loc.href.length - ((loc.pathname + loc.search + loc.hash).length - pathName.length));
}


