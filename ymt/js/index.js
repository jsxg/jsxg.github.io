function getNews(){var a={page:1,pagesize:5,category:"集團資訊"};$.get("http://eaesthetic.meedoo.cc/posts-list",a).done(function(a){for(var t="",e=0;e<a.data.data.length;e++)t+='<div class="news-item" data-detailId="'+a.data.data[e].id+'"><img src="'+a.data.data[e].cover_img+'"><p>'+a.data.data[e].title+"</p></div>";$(".news-list").append(t)}).fail(function(){console.log("请求失败")})}function getShare(){var a={page:1,pagesize:4,category:"見證分享"};$.get("http://eaesthetic.meedoo.cc/posts-list",a).done(function(a){for(var t="",e=0;e<a.data.data.length;e++)t+='<li class="share-item"><div class="share-head clearfix"><img src="'+a.data.data[e].cover_img+'"><span class="share-name">'+a.data.data[e].title+'</span></div><div class="share-content">'+a.data.data[e].content+"</div></li>";$("#shareUl").append(t)}).fail(function(){console.log("请求失败")})}function getPromotions(){var a={page:1,pagesize:6,category:"最新優惠"};$.ajax({url:"http://eaesthetic.meedoo.cc/posts-list",type:"GET",dataType:"json",data:a,async:!1,success:function(a){var t="";bigImgs=[],prom_totalPage=a.data.last_page;for(var e=0;e<a.data.data.length;e++){var i=a.data.data[e].content,n=getPlace(i,"src=",0),o=getPlace(i,"_src",0),r=i.substr(n+5,o-15);bigImgs.push(r),t+='<div class="product-img" data-bigimg="'+r+'"><img src="'+a.data.data[e].cover_img+'"></div>'}var s='<li class="productlist-item"><div class="productlist-box clearfix"></div>'+t+"</li></div>";$(".product-ul").append(s)},error:function(){console.log("请求失败")}})}function getBanner(){s_width=$(".index-banner").width();var a=bannerFrame.find("li").length;bannerFrame.find("li").css("width",s_width),bannerFrame.css("width",s_width*a),bannerScroll()}function bannerScroll(){var a=$(".point-frame").find(".active").index();bannerFrame.animate({left:-s_width*a},1)}function getPlace(a,t,e){for(var i=a.indexOf(t),n=0;n<e;n++)i=a.indexOf(t,i+1);return i}var imgUl=$(".product-ul"),imglis=$(".productlist-item"),shareUl=$("#shareUl"),sharelis=$(".share-item"),popupsUl=$("#popups-list"),popupslis=$(".popups-item"),bannerFrame=$(".banner-frame"),pd_width=$(".productlist-box").width(),share_item_wd=$(".share-item").outerWidth(!0),timer=null,key=0,key1=0,popupsKey=0,s_width=0,prom_page=1,prom_totalPage=0,bigImgs=[],bigImg_cur_page=0;$(function(){getPromotions(),getShare(),getNews();var a="";$.get("http://eaesthetic.meedoo.cc/carousels").done(function(t){for(var e=0;e<t.data.length;e++)a+='<li class="banner-item" style="background-image: url('+t.data[e]+');"></li>';$(".banner-frame").append(a),getBanner()}).fail(function(){console.log("请求失败!")})}),$(document).on("click",".news-item",function(){var a=parseInt($(this).attr("data-detailId"));window.open("groupNewsDetail.html?id="+a)}),$(".point-frame").on("click","span",function(){var a=$(this).index();$(this).addClass("active").siblings().removeClass("active"),bannerFrame.animate({left:-s_width*a},500)}),$(window).resize(function(){getBanner()}),$("#toRight").on("click",function(){prom_page>1&&(prom_page--,key>0&&(key--,imgUl.animate({left:-pd_width*key},500)))}),$("#toLeft").on("click",function(){if(prom_page<prom_totalPage){prom_page++;var a=$(".productlist-item");a.length<prom_totalPage&&getPromotions(),a=$(".productlist-item"),key<a.length-1&&(key++,imgUl.animate({left:-pd_width*key},500))}}),$(document).on("click",".product-img",function(){var a=$(this).attr("data-bigimg");$("#promotions-detail").find("img").attr("src",a),$(".popups").removeClass("dn")}),$(".icon-close").on("click",function(){$(".popups").addClass("dn")}),$(".popups-box .icon-arrow-left").on("click",function(){popupsKey>0&&(popupsKey--,popupsUl.animate({left:-700*popupsKey},500))}),$(".popups-box .icon-arrow-right").on("click",function(){popupsKey<bigImgs.length&&(popupsKey++,popupsUl.animate({left:-700*popupsKey},500))}),$(".contact-send").on("click",function(){var a=/^1[3|4|5|8|7][0-9]\d{4,8}$/,t=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;if(""==$("#name").val())return void alert("稱呼不能为空");if(""==$("#phone").val())return void alert("请输入电话");if(""==$("#email").val())return void alert("请输入电邮");if(""==$("#content").val())return void alert("请输入正文");if(!a.test($("#phone").val()))return void alert("请输入正确的电话号码");if(!t.test($("#email").val()))return void alert("请输入正确的电邮");var e="称呼:"+$("#name").val()+";";e+="电话:"+$("#phone").val()+";",e+="电邮:"+$("#email").val()+";",e+="正文:"+$("#content").val(),window.location="mailto:657284133@qq.com?body="+e}),$(window).scroll(function(){$(document).scrollTop()>0?$(".nav-bg").addClass("nav-bg-scroll"):$(".nav-bg").removeClass("nav-bg-scroll")});