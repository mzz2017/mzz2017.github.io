var Allsite=(function(){var c=function(){if(window._Forbid_TopYellow_Bar_){return}var f=true;var e=['<div class="wrapper-box">','<span class="x-tips">百度空间提醒您：</span>','微软倡议<a href="http://hi.baidu.com/space/item/62571e152bb4bcf486ad4ee5" target="_blank" ','class="x-ie6bye qing-stat-nsclick" data-nsclick="m_20121023_browser_iebye">对IE6说再见</a>，',"告别速度慢、高风险的IE6，免费升级快速又安全的浏览器！",'<a href="http://dl.client.baidu.com/union/getbdbrowser.php?tn=bdkj.exe" ','class="x-bdbrowser qing-stat-nsclick" data-nsclick="m_20121023_browser_bddownload" target="_blank" rel="noopener">百度浏览器</a>','<a href="http://dl.client.baidu.com/union/getbdbrowser.php?tn=IE8_hi.exe" ','class="x-ie8browser qing-stat-nsclick" data-nsclick="m_20121023_browser_ie8download" target="_blank" rel="noopener">IE8中文浏览器</a>','<a href="http://download.ie.sogou.com/se/region/sogou_explorer_4.0.2.6066_3354.exe" ','class="x-sgbrowser qing-stat-nsclick" data-nsclick="m_20121023_browser_sgdownload" target="_blank" rel="noopener">搜狗浏览器</a>',"</div>"].join("");var g={".mod-browsertips":{position:"fixed",_position:"absolute",top:"0",left:"0",right:" 0","background-color":"#FFFCA0","font-size":"14px",height:"0","z-index":"1023","line-height":"30px","text-align":"center"},".mod-browsertips .wrapper-box a":{"text-decoration":"underline"},".mod-browsertips .wrapper-box":{"padding-top":"6px",width:"980px",position:"relative",margin:"0 auto"},".mod-browsertips .x-tips,.mod-browsertips .x-bdbrowser,.mod-browsertips .x-ie8browser,.mod-browsertips .x-sgbrowser":{background:"url(http://img.baidu.com/hi/qing/browser/browsertips.gif) 0 0 no-repeat","padding-left":"20px",margin:"0 5px"},".mod-browsertips .x-tips":{"background-position":"0 -2px"},".mod-browsertips .x-bdbrowser":{"background-position":"0 -71px"},".mod-browsertips .x-ie8browser":{"background-position":"0 -107px"},".mod-browsertips .x-sgbrowser":{"background-position":"0 -144px",display:"none"}};if(f&&qing.browser.ie==6){var d=qing.g("modTopbar");if(!d){return}if(qing.dom.query(".mod-top-tip .upgrading-tip").length){return}qext.stylesheet(g,document);var h=qing.dom.create("div",{className:"mod-browsertips"});h.innerHTML=e;qing.dom.insertBefore(h,d,"_allsite");qani.animate(qing.dom.q("mod-page-main")[0],{"padding-top":"90px"},300);qani.animate(d,{top:"40px"},300);qani.animate(h,{height:"40px"},300);qext.stat.ns("m_20121023_browser_all")}};var a=function(){var d=location.pathname||"";if(d.indexOf("/com/error")>-1||d.indexOf("/com/forbid/self")>-1||d.indexOf("/com/forbid/user")>-1){window.setTimeout(function(){window.location.href=qDomain.qing},300000000)}};var b=function(){qing.dom.ready(function(){c();a()})};return{init:b}})();Allsite.init();window.CmsYyInfo=window.CmsYyInfo||{};window.CmsYyInfo.bubble={switchOn:0,content:'<div style="padding-left:47px;">破冰之旅，精彩由你！</div>',linkTitle:"点击查看",icon:"http://hi.baidu.com/cm/static/%E5%94%AF%E5%93%81%E4%BC%9A-%E5%BC%B9%E7%AA%97%E5%9B%BE%E7%89%87.jpg",linkUrl:"http://www.vipshop.com/g_url.php?g_id=78361 ",id:"bubble_20120111_xiangce",expires:12};window.CmsYyInfo.bubble.elem=(function(){if(window.CmsYyInfo.bubble.switchOn==1){var a=setInterval(function(){var c=qing.g("qing_cms_bubble_close_id");if(c){clearInterval(a);var d=qing.dom.getParent(c);d.style.width="260px";var e=qing.dom.children(d);e[2].style.marginTop="-60px";e[2].style.left="77px";var b=e[1];b.style.padding="10px 10px 7px 0px"}},200)}return qing.dom.query("#modTopbar .q-menubox .q-menuitem")[2]})();