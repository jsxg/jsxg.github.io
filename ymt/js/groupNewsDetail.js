function getUrlQuery(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)"),n=window.location.search.substr(1).match(e);return null!=n?unescape(n[2]):null}$(function(){var t=getUrlQuery("id"),e="http://eaesthetic.meedoo.cc/posts/"+t;$.get(e).done(function(t){console.log(t);var e=t.data,n="";n+='<h2 class="detail-title">'+e.title+"</h2>",n+='<span class="detail-data">'+e.created_at+"</span>",n+='<p class="detail">'+e.content+"</p>",$(".content").append(n)}).fail(function(){console.log("请求失败!")})}),$(".news-bottom-btn").on("click",function(){location.href="groupNews.html"});