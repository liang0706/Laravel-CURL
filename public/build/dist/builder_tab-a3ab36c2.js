function searchForSelect(t,e){var i=getSearchData(t,e.url);if(i){var r="";for(attr in i)r+='<option value="'+i[attr].id+'" >'+i[attr].name+"</option>";$(t).next("select").append(r)}}function getSearchData(t,e){var i=$(t),r=i.parents(".form-group").find("input[name=search_name_xxxxx]").val(),a={};return""==r?void alert("请选择搜索的名称"):($.ajax({url:e,async:!1,dataType:"json",data:{name:r},success:function(t){t.code==HTTP_CODE.SUCCESS_CODE?a=t.data:toastr.warning(t.msg)}}),a)}function selectSearch(t){var e=$(t),i=e.val();i&&e.next("input:hidden").val(i)}function addSelect(t){var e=$(t),i=e.parents(".form-group").clone(!0);i.find(".addSelect").replaceWith(createRemoveBtnDom()),e.parents(".form-group").after(i)}function createRemoveBtnDom(){return'<button class="btn btn-default col-sm-2 removeSelect" onclick="removeSelect(this)" type="button">-</button>'}function removeSelect(t){$(t).parents(".form-group").remove()}!function(t,e,i){function r(e,i){var r=(t(window).width()-e.outerWidth())/2,a=(t(window).height()-e.outerHeight())/2,a=(document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop)+(a>0?a:0);e.css({left:r}).animate({top:a},{duration:i,queue:!1})}function a(){return 0!==t("#Validform_msg").length?!1:(s=t('<div id="Validform_msg"><div class="Validform_title">'+l.tit+'<a class="Validform_close" href="javascript:void(0);">&chi;</a></div><div class="Validform_info"></div><div class="iframe"><iframe frameborder="0" scrolling="no" height="100%" width="100%"></iframe></div></div>').appendTo("body"),s.find("a.Validform_close").click(function(){return s.hide(),o=!0,n&&n.focus().addClass("Validform_error"),!1}).focus(function(){this.blur()}),void t(window).bind("scroll resize",function(){!o&&r(s,400)}))}var n=null,s=null,o=!0,l={tit:"提示信息",w:{"*":"不能为空！","*6-16":"请填写6到16位任意字符！",n:"请填写数字！","n6-16":"请填写6到16位数字！",s:"不能输入特殊字符！","s6-18":"请填写6到18位字符！",p:"请填写邮政编码！",m:"请填写手机号码！",e:"邮箱地址格式不对！",url:"请填写网址！"},def:"请填写正确信息！",undef:"datatype未定义！",reck:"两次输入的内容不一致！",r:"通过信息验证！",c:"正在检测信息…",s:"请{填写|选择}{0|信息}！",v:"所填信息没有经过验证，请稍后…",p:"正在提交数据…"};t.Tipmsg=l;var c=function(e,r,n){var r=t.extend({},c.defaults,r);r.datatype&&t.extend(c.util.dataType,r.datatype);var s=this;return s.tipmsg={w:{}},s.forms=e,s.objects=[],n===!0?!1:(e.each(function(){if("inited"==this.validform_inited)return!0;this.validform_inited="inited";var e=this;e.settings=t.extend({},r);var a=t(e);e.validform_status="normal",a.data("tipmsg",s.tipmsg),a.delegate("[datatype]","blur",function(){var t=arguments[1];c.util.check.call(this,a,t)}),a.delegate(":text","keypress",function(t){13==t.keyCode&&0==a.find(":submit").length&&a.submit()}),c.util.enhance.call(a,e.settings.tiptype,e.settings.usePlugin,e.settings.tipSweep),e.settings.btnSubmit&&a.find(e.settings.btnSubmit).bind("click",function(){return a.trigger("submit"),!1}),a.submit(function(){var t=c.util.submitForm.call(a,e.settings);return t===i&&(t=!0),t}),a.find("[type='reset']").add(a.find(e.settings.btnReset)).bind("click",function(){c.util.resetForm.call(a)})}),void((1==r.tiptype||(2==r.tiptype||3==r.tiptype)&&r.ajaxPost)&&a()))};c.defaults={tiptype:1,tipSweep:!1,showAllError:!1,postonce:!1,ajaxPost:!1},c.util={dataType:{"*":/[\w\W]+/,"*6-16":/^[\w\W]{6,16}$/,n:/^\d+$/,"n6-16":/^\d{6,16}$/,s:/^[\u4E00-\u9FA5\uf900-\ufa2d\w\.\s]+$/,"s6-18":/^[\u4E00-\u9FA5\uf900-\ufa2d\w\.\s]{6,18}$/,p:/^[0-9]{6}$/,m:/^13[0-9]{9}$|14[0-9]{9}|15[0-9]{9}$|18[0-9]{9}$/,e:/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,url:/^(\w+:\/\/)?\w+(\.\w+)+.*$/},toString:Object.prototype.toString,isEmpty:function(e){return""===e||e===t.trim(this.attr("tip"))},getValue:function(e){var r,a=this;return e.is(":radio")?(r=a.find(":radio[name='"+e.attr("name")+"']:checked").val(),r=r===i?"":r):e.is(":checkbox")?(r="",a.find(":checkbox[name='"+e.attr("name")+"']:checked").each(function(){r+=t(this).val()+","}),r=r===i?"":r):r=e.val(),r=t.trim(r),c.util.isEmpty.call(e,r)?"":r},enhance:function(e,i,r,a){var n=this;n.find("[datatype]").each(function(){2==e?0==t(this).parent().next().find(".Validform_checktip").length&&(t(this).parent().next().append("<span class='Validform_checktip' />"),t(this).siblings(".Validform_checktip").remove()):(3==e||4==e)&&0==t(this).siblings(".Validform_checktip").length&&(t(this).parent().append("<span class='Validform_checktip' />"),t(this).parent().next().find(".Validform_checktip").remove())}),n.find("input[recheck]").each(function(){if("inited"==this.validform_inited)return!0;this.validform_inited="inited";var e=t(this),i=n.find("input[name='"+t(this).attr("recheck")+"']");i.bind("keyup",function(){if(i.val()==e.val()&&""!=i.val()){if(i.attr("tip")&&i.attr("tip")==i.val())return!1;e.trigger("blur")}}).bind("blur",function(){if(i.val()!=e.val()&&""!=e.val()){if(e.attr("tip")&&e.attr("tip")==e.val())return!1;e.trigger("blur")}})}),n.find("[tip]").each(function(){if("inited"==this.validform_inited)return!0;this.validform_inited="inited";var e=t(this).attr("tip"),i=t(this).attr("altercss");t(this).focus(function(){t(this).val()==e&&(t(this).val(""),i&&t(this).removeClass(i))}).blur(function(){""===t.trim(t(this).val())&&(t(this).val(e),i&&t(this).addClass(i))})}),n.find(":checkbox[datatype],:radio[datatype]").each(function(){if("inited"==this.validform_inited)return!0;this.validform_inited="inited";var e=t(this),i=e.attr("name");n.find("[name='"+i+"']").filter(":checkbox,:radio").bind("click",function(){setTimeout(function(){e.trigger("blur")},0)})}),n.find("select[datatype][multiple]").bind("click",function(){var e=t(this);setTimeout(function(){e.trigger("blur")},0)}),c.util.usePlugin.call(n,i,e,r,a)},usePlugin:function(e,i,r,a){var n=this,e=e||{};if(n.find("input[plugin='swfupload']").length&&"undefined"!=typeof swfuploadhandler){var s={custom_settings:{form:n,showmsg:function(t,e,a){c.util.showmsg.call(n,t,i,{obj:n.find("input[plugin='swfupload']"),type:e,sweep:r})}}};s=t.extend(!0,{},e.swfupload,s),n.find("input[plugin='swfupload']").each(function(e){return"inited"==this.validform_inited?!0:(this.validform_inited="inited",t(this).val(""),void swfuploadhandler.init(s,e))})}if(n.find("input[plugin='datepicker']").length&&t.fn.datePicker&&(e.datepicker=e.datepicker||{},e.datepicker.format&&(Date.format=e.datepicker.format,delete e.datepicker.format),e.datepicker.firstDayOfWeek&&(Date.firstDayOfWeek=e.datepicker.firstDayOfWeek,delete e.datepicker.firstDayOfWeek),n.find("input[plugin='datepicker']").each(function(i){return"inited"==this.validform_inited?!0:(this.validform_inited="inited",e.datepicker.callback&&t(this).bind("dateSelected",function(){var i=new Date(t.event._dpCache[this._dpId].getSelected()[0]).asString(Date.format);e.datepicker.callback(i,this)}),void t(this).datePicker(e.datepicker))})),n.find("input[plugin*='passwordStrength']").length&&t.fn.passwordStrength&&(e.passwordstrength=e.passwordstrength||{},e.passwordstrength.showmsg=function(t,e,a){c.util.showmsg.call(n,e,i,{obj:t,type:a,sweep:r})},n.find("input[plugin='passwordStrength']").each(function(i){return"inited"==this.validform_inited?!0:(this.validform_inited="inited",void t(this).passwordStrength(e.passwordstrength))})),"addRule"!=a&&e.jqtransform&&t.fn.jqTransSelect){if("true"==n[0].jqTransSelected)return;n[0].jqTransSelected="true";var o=function(e){var i=t(".jqTransformSelectWrapper ul:visible");i.each(function(){var i=t(this).parents(".jqTransformSelectWrapper:first").find("select").get(0);e&&i.oLabel&&i.oLabel.get(0)==e.get(0)||t(this).hide()})},l=function(e){0===t(e.target).parents(".jqTransformSelectWrapper").length&&o(t(e.target))},d=function(){t(document).mousedown(l)};e.jqtransform.selector?(n.find(e.jqtransform.selector).filter('input:submit, input:reset, input[type="button"]').jqTransInputButton(),n.find(e.jqtransform.selector).filter("input:text, input:password").jqTransInputText(),n.find(e.jqtransform.selector).filter("input:checkbox").jqTransCheckBox(),n.find(e.jqtransform.selector).filter("input:radio").jqTransRadio(),n.find(e.jqtransform.selector).filter("textarea").jqTransTextarea(),n.find(e.jqtransform.selector).filter("select").length>0&&(n.find(e.jqtransform.selector).filter("select").jqTransSelect(),d())):n.jqTransform(),n.find(".jqTransformSelectWrapper").find("li a").click(function(){t(this).parents(".jqTransformSelectWrapper").find("select").trigger("blur")})}},getNullmsg:function(t){var e,i=this,r=/[\u4E00-\u9FA5\uf900-\ufa2da-zA-Z\s]+/g,a=t[0].settings.label||".Validform_label";if(a=i.siblings(a).eq(0).text()||i.siblings().find(a).eq(0).text()||i.parent().siblings(a).eq(0).text()||i.parent().siblings().find(a).eq(0).text(),a=a.replace(/\s(?![a-zA-Z])/g,"").match(r),a=a?a.join(""):[""],r=/\{(.+)\|(.+)\}/,e=t.data("tipmsg").s||l.s,""!=a){if(e=e.replace(/\{0\|(.+)\}/,a),i.attr("recheck"))return e=e.replace(/\{(.+)\}/,""),i.attr("nullmsg",e),e}else e=i.is(":checkbox,:radio,select")?e.replace(/\{0\|(.+)\}/,""):e.replace(/\{0\|(.+)\}/,"$1");return e=i.is(":checkbox,:radio,select")?e.replace(r,"$2"):e.replace(r,"$1"),i.attr("nullmsg",e),e},getErrormsg:function(e,i,r){var a,n=/^(.+?)((\d+)-(\d+))?$/,s=/^(.+?)(\d+)-(\d+)$/,o=/(.*?)\d+(.+?)\d+(.*)/,c=i.match(n);if("recheck"==r)return a=e.data("tipmsg").reck||l.reck;var d=t.extend({},l.w,e.data("tipmsg").w);if(c[0]in d)return e.data("tipmsg").w[c[0]]||l.w[c[0]];for(var u in d)if(-1!=u.indexOf(c[1])&&s.test(u))return a=(e.data("tipmsg").w[u]||l.w[u]).replace(o,"$1"+c[3]+"$2"+c[4]+"$3"),e.data("tipmsg").w[c[0]]=a,a;return e.data("tipmsg").def||l.def},_regcheck:function(t,e,r,a){var a=a,n=null,s=!1,o=/\/.+\//g,d=/^(.+?)(\d+)-(\d+)$/,u=3;if(o.test(t)){var f=t.match(o)[0].slice(1,-1),p=t.replace(o,""),h=RegExp(f,p);s=h.test(e)}else if("[object Function]"==c.util.toString.call(c.util.dataType[t]))s=c.util.dataType[t](e,r,a,c.util.dataType),s===!0||s===i?s=!0:(n=s,s=!1);else{if(!(t in c.util.dataType)){var m,g=t.match(d);if(g){for(var v in c.util.dataType)if(m=v.match(d),m&&g[1]===m[1]){var y=c.util.dataType[v].toString(),p=y.match(/\/[mgi]*/g)[1].replace("/",""),b=new RegExp("\\{"+m[2]+","+m[3]+"\\}","g");y=y.replace(/\/[mgi]*/g,"/").replace(b,"{"+g[2]+","+g[3]+"}").replace(/^\//,"").replace(/\/$/,""),c.util.dataType[t]=new RegExp(y,p);break}}else s=!1,n=a.data("tipmsg").undef||l.undef}"[object RegExp]"==c.util.toString.call(c.util.dataType[t])&&(s=c.util.dataType[t].test(e))}if(s){if(u=2,n=r.attr("sucmsg")||a.data("tipmsg").r||l.r,r.attr("recheck")){var w=a.find("input[name='"+r.attr("recheck")+"']:first");e!=w.val()&&(s=!1,u=3,n=r.attr("errormsg")||c.util.getErrormsg.call(r,a,t,"recheck"))}}else n=n||r.attr("errormsg")||c.util.getErrormsg.call(r,a,t),c.util.isEmpty.call(r,e)&&(n=r.attr("nullmsg")||c.util.getNullmsg.call(r,a));return{passed:s,type:u,info:n}},regcheck:function(t,e,i){var r=this,a=null;if("ignore"===i.attr("ignore")&&c.util.isEmpty.call(i,e))return i.data("cked")&&(a=""),{passed:!0,type:4,info:a};i.data("cked","cked");for(var n,s=c.util.parseDatatype(t),o=0;o<s.length;o++){for(var l=0;l<s[o].length&&(n=c.util._regcheck(s[o][l],e,i,r),n.passed);l++);if(n.passed)break}return n},parseDatatype:function(t){var e=/\/.+?\/[mgi]*(?=(,|$|\||\s))|[\w\*-]+/g,i=t.match(e),r=t.replace(e,"").replace(/\s*/g,"").split(""),a=[],n=0;a[0]=[],a[0].push(i[0]);for(var s=0;s<r.length;s++)"|"==r[s]&&(n++,a[n]=[]),a[n].push(i[s+1]);return a},showmsg:function(e,a,n,l){if(e!=i&&("bycheck"!=l||!n.sweep||(!n.obj||n.obj.is(".Validform_error"))&&"function"!=typeof a)){if(t.extend(n,{curform:this}),"function"==typeof a)return void a(e,n,c.util.cssctl);(1==a||"byajax"==l&&4!=a)&&s.find(".Validform_info").html(e),(1==a&&"bycheck"!=l&&2!=n.type||"byajax"==l&&4!=a)&&(o=!1,s.find(".iframe").css("height",s.outerHeight()),s.show(),r(s,100)),2==a&&n.obj&&(n.obj.parent().next().find(".Validform_checktip").html(e),c.util.cssctl(n.obj.parent().next().find(".Validform_checktip"),n.type)),3!=a&&4!=a||!n.obj||(n.obj.siblings(".Validform_checktip").html(e),c.util.cssctl(n.obj.siblings(".Validform_checktip"),n.type))}},cssctl:function(t,e){switch(e){case 1:t.removeClass("Validform_right Validform_wrong").addClass("Validform_checktip Validform_loading");break;case 2:t.removeClass("Validform_wrong Validform_loading").addClass("Validform_checktip Validform_right");break;case 4:t.removeClass("Validform_right Validform_wrong Validform_loading").addClass("Validform_checktip");break;default:t.removeClass("Validform_right Validform_loading").addClass("Validform_checktip Validform_wrong")}},check:function(e,i,r){var a=e[0].settings,i=i||"",s=c.util.getValue.call(e,t(this));if(a.ignoreHidden&&t(this).is(":hidden")||"dataIgnore"===t(this).data("dataIgnore"))return!0;if(a.dragonfly&&!t(this).data("cked")&&c.util.isEmpty.call(t(this),s)&&"ignore"!=t(this).attr("ignore"))return!1;var o=c.util.regcheck.call(e,t(this).attr("datatype"),s,t(this));if(s==this.validform_lastval&&!t(this).attr("recheck")&&""==i)return o.passed?!0:!1;this.validform_lastval=s;var d;if(n=d=t(this),!o.passed)return c.util.abort.call(d[0]),r||(c.util.showmsg.call(e,o.info,a.tiptype,{obj:t(this),type:o.type,sweep:a.tipSweep},"bycheck"),!a.tipSweep&&d.addClass("Validform_error")),!1;var u=t(this).attr("ajaxurl");if(u&&!c.util.isEmpty.call(t(this),s)&&!r){var f=t(this);if("postform"==i?f[0].validform_subpost="postform":f[0].validform_subpost="","posting"===f[0].validform_valid&&s==f[0].validform_ckvalue)return"ajax";f[0].validform_valid="posting",f[0].validform_ckvalue=s,c.util.showmsg.call(e,e.data("tipmsg").c||l.c,a.tiptype,{obj:f,type:1,sweep:a.tipSweep},"bycheck"),c.util.abort.call(d[0]);var p=t.extend(!0,{},a.ajaxurl||{}),h={type:"POST",cache:!1,url:u,data:"param="+encodeURIComponent(s)+"&name="+encodeURIComponent(t(this).attr("name")),success:function(i){"y"===t.trim(i.status)?(f[0].validform_valid="true",i.info&&f.attr("sucmsg",i.info),c.util.showmsg.call(e,f.attr("sucmsg")||e.data("tipmsg").r||l.r,a.tiptype,{obj:f,type:2,sweep:a.tipSweep},"bycheck"),d.removeClass("Validform_error"),n=null,"postform"==f[0].validform_subpost&&e.trigger("submit")):(f[0].validform_valid=i.info,c.util.showmsg.call(e,i.info,a.tiptype,{obj:f,type:3,sweep:a.tipSweep}),d.addClass("Validform_error")),d[0].validform_ajax=null},error:function(t){if("200"==t.status)return"y"==t.responseText?p.success({status:"y"}):p.success({status:"n",info:t.responseText}),!1;if("abort"!==t.statusText){var i="status: "+t.status+"; statusText: "+t.statusText;c.util.showmsg.call(e,i,a.tiptype,{obj:f,type:3,sweep:a.tipSweep}),d.addClass("Validform_error")}return f[0].validform_valid=t.statusText,d[0].validform_ajax=null,!0}};if(p.success){var m=p.success;p.success=function(t){h.success(t),m(t,f)}}if(p.error){var g=p.error;p.error=function(t){h.error(t)&&g(t,f)}}return p=t.extend({},h,p,{dataType:"json"}),d[0].validform_ajax=t.ajax(p),"ajax"}return u&&c.util.isEmpty.call(t(this),s)&&(c.util.abort.call(d[0]),d[0].validform_valid="true"),r||(c.util.showmsg.call(e,o.info,a.tiptype,{obj:t(this),type:o.type,sweep:a.tipSweep},"bycheck"),d.removeClass("Validform_error")),n=null,!0},submitForm:function(e,i,r,a,s){var o=this;if("posting"===o[0].validform_status)return!1;if(e.postonce&&"posted"===o[0].validform_status)return!1;var d=e.beforeCheck&&e.beforeCheck(o);if(d===!1)return!1;var u,f=!0;if(o.find("[datatype]").each(function(){if(i)return!1;if(e.ignoreHidden&&t(this).is(":hidden")||"dataIgnore"===t(this).data("dataIgnore"))return!0;var r,a=c.util.getValue.call(o,t(this));if(n=r=t(this),u=c.util.regcheck.call(o,t(this).attr("datatype"),a,t(this)),!u.passed)return c.util.showmsg.call(o,u.info,e.tiptype,{obj:t(this),type:u.type,sweep:e.tipSweep}),r.addClass("Validform_error"),e.showAllError?(f&&(f=!1),!0):(r.focus(),f=!1,!1);if(t(this).attr("ajaxurl")&&!c.util.isEmpty.call(t(this),a)){if("true"!==this.validform_valid){var s=t(this);return c.util.showmsg.call(o,o.data("tipmsg").v||l.v,e.tiptype,{obj:s,type:3,sweep:e.tipSweep}),r.addClass("Validform_error"),s.trigger("blur",["postform"]),e.showAllError?(f&&(f=!1),!0):(f=!1,!1)}}else t(this).attr("ajaxurl")&&c.util.isEmpty.call(t(this),a)&&(c.util.abort.call(this),this.validform_valid="true");c.util.showmsg.call(o,u.info,e.tiptype,{obj:t(this),type:u.type,sweep:e.tipSweep}),r.removeClass("Validform_error"),n=null}),e.showAllError&&o.find(".Validform_error:first").focus(),f){var p=e.beforeSubmit&&e.beforeSubmit(o);if(p===!1)return!1;if(o[0].validform_status="posting",!e.ajaxPost&&"ajaxPost"!==a){e.postonce||(o[0].validform_status="normal");var r=r||e.url;return r&&o.attr("action",r),e.callback&&e.callback(o)}var h=t.extend(!0,{},e.ajaxpost||{});if(h.url=r||h.url||e.url||o.attr("action"),c.util.showmsg.call(o,o.data("tipmsg").p||l.p,e.tiptype,{obj:o,type:1,sweep:e.tipSweep},"byajax"),s?h.async=!1:s===!1&&(h.async=!0),h.success){var m=h.success;h.success=function(i){e.callback&&e.callback(i),o[0].validform_ajax=null,"y"===t.trim(i.status)?o[0].validform_status="posted":o[0].validform_status="normal",m(i,o)}}if(h.error){var g=h.error;h.error=function(t){e.callback&&e.callback(t),o[0].validform_status="normal",o[0].validform_ajax=null,g(t,o)}}var v={type:"POST",async:!0,data:o.serializeArray(),success:function(i){"y"===t.trim(i.status)?(o[0].validform_status="posted",c.util.showmsg.call(o,i.info,e.tiptype,{obj:o,type:2,sweep:e.tipSweep},"byajax")):(o[0].validform_status="normal",c.util.showmsg.call(o,i.info,e.tiptype,{obj:o,type:3,sweep:e.tipSweep},"byajax")),e.callback&&e.callback(i),o[0].validform_ajax=null},error:function(t){var i="status: "+t.status+"; statusText: "+t.statusText;c.util.showmsg.call(o,i,e.tiptype,{obj:o,type:3,sweep:e.tipSweep},"byajax"),e.callback&&e.callback(t),o[0].validform_status="normal",o[0].validform_ajax=null}};h=t.extend({},v,h,{dataType:"json"}),o[0].validform_ajax=t.ajax(h)}return!1},resetForm:function(){var t=this;t.each(function(){this.reset&&this.reset(),this.validform_status="normal"}),t.find(".Validform_right").text(""),t.find(".passwordStrength").children().removeClass("bgStrength"),t.find(".Validform_checktip").removeClass("Validform_wrong Validform_right Validform_loading"),t.find(".Validform_error").removeClass("Validform_error"),t.find("[datatype]").removeData("cked").removeData("dataIgnore").each(function(){this.validform_lastval=null}),t.eq(0).find("input:first").focus()},abort:function(){this.validform_ajax&&this.validform_ajax.abort()}},t.Datatype=c.util.dataType,c.prototype={dataType:c.util.dataType,eq:function(e){var i=this;return e>=i.forms.length?null:(e in i.objects||(i.objects[e]=new c(t(i.forms[e]).get(),{},!0)),i.objects[e])},resetStatus:function(){var e=this;return t(e.forms).each(function(){this.validform_status="normal"}),this},setStatus:function(e){var i=this;return t(i.forms).each(function(){this.validform_status=e||"posting"}),this},getStatus:function(){var e=this,i=t(e.forms)[0].validform_status;return i},ignore:function(e){var i=this,e=e||"[datatype]";return t(i.forms).find(e).each(function(){t(this).data("dataIgnore","dataIgnore").removeClass("Validform_error")}),this},unignore:function(e){var i=this,e=e||"[datatype]";return t(i.forms).find(e).each(function(){t(this).removeData("dataIgnore")}),this},addRule:function(e){for(var i=this,e=e||[],r=0;r<e.length;r++){var a=t(i.forms).find(e[r].ele);for(var n in e[r])"ele"!==n&&a.attr(n,e[r][n])}return t(i.forms).each(function(){var e=t(this);c.util.enhance.call(e,this.settings.tiptype,this.settings.usePlugin,this.settings.tipSweep,"addRule")}),this},ajaxPost:function(e,i,r){var n=this;return t(n.forms).each(function(){(1==this.settings.tiptype||2==this.settings.tiptype||3==this.settings.tiptype)&&a(),c.util.submitForm.call(t(n.forms[0]),this.settings,e,r,"ajaxPost",i)}),this},submitForm:function(e,r){var a=this;return t(a.forms).each(function(){var a=c.util.submitForm.call(t(this),this.settings,e,r);a===i&&(a=!0),a===!0&&this.submit()}),this},resetForm:function(){var e=this;return c.util.resetForm.call(t(e.forms)),this},abort:function(){var e=this;return t(e.forms).each(function(){c.util.abort.call(this)}),this},check:function(e,i){var i=i||"[datatype]",r=this,a=t(r.forms),n=!0;return a.find(i).each(function(){c.util.check.call(this,a,"",e)||(n=!1)}),n},config:function(e){var i=this;return e=e||{},t(i.forms).each(function(){var i=t(this);this.settings=t.extend(!0,this.settings,e),c.util.enhance.call(i,this.settings.tiptype,this.settings.usePlugin,this.settings.tipSweep)}),this}},t.fn.Validform=function(t){return new c(this,t)},t.Showmsg=function(t){a(),c.util.showmsg.call(e,t,1,{})},t.Hidemsg=function(){s.hide(),o=!0}}(jQuery,window),$(function(){}),function(t,e){"object"==typeof exports?module.exports=e():"function"==typeof define&&define.amd?define(e):t.Spinner=e()}(this,function(){"use strict";function t(t,e){var i,r=document.createElement(t||"div");for(i in e)r[i]=e[i];return r}function e(t){for(var e=1,i=arguments.length;i>e;e++)t.appendChild(arguments[e]);return t}function i(t,e,i,r){var a=["opacity",e,~~(100*t),i,r].join("-"),n=.01+100*(i/r),s=Math.max(1-(1-t)/e*(100-n),t),o=c.substring(0,c.indexOf("Animation")).toLowerCase(),l=o&&"-"+o+"-"||"";return u[a]||(f.insertRule("@"+l+"keyframes "+a+"{0%{opacity:"+s+"}"+n+"%{opacity:"+t+"}"+(n+.01)+"%{opacity:1}"+(n+e)%100+"%{opacity:"+t+"}100%{opacity:"+s+"}}",f.cssRules.length),u[a]=1),a}function r(t,e){var i,r,a=t.style;for(e=e.charAt(0).toUpperCase()+e.slice(1),r=0;d.length>r;r++)if(i=d[r]+e,void 0!==a[i])return i;return void 0!==a[e]?e:void 0}function a(t,e){for(var i in e)t.style[r(t,i)||i]=e[i];return t}function n(t){for(var e=1;arguments.length>e;e++){var i=arguments[e];for(var r in i)void 0===t[r]&&(t[r]=i[r])}return t}function s(t,e){return"string"==typeof t?t:t[e%t.length]}function o(t){this.opts=n(t||{},o.defaults,p)}function l(){function i(e,i){return t("<"+e+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',i)}f.addRule(".spin-vml","behavior:url(#default#VML)"),o.prototype.lines=function(t,r){function n(){return a(i("group",{coordsize:d+" "+d,coordorigin:-c+" "+-c}),{width:d,height:d})}function o(t,o,l){e(f,e(a(n(),{rotation:360/r.lines*t+"deg",left:~~o}),e(a(i("roundrect",{arcsize:r.corners}),{width:c,height:r.width,left:r.radius,top:-r.width>>1,filter:l}),i("fill",{color:s(r.color,t),opacity:r.opacity}),i("stroke",{opacity:0}))))}var l,c=r.length+r.width,d=2*c,u=2*-(r.width+r.length)+"px",f=a(n(),{position:"absolute",top:u,left:u});if(r.shadow)for(l=1;r.lines>=l;l++)o(l,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(l=1;r.lines>=l;l++)o(l);return e(t,f)},o.prototype.opacity=function(t,e,i,r){var a=t.firstChild;r=r.shadow&&r.lines||0,a&&a.childNodes.length>e+r&&(a=a.childNodes[e+r],a=a&&a.firstChild,a=a&&a.firstChild,a&&(a.opacity=i))}}var c,d=["webkit","Moz","ms","O"],u={},f=function(){var i=t("style",{type:"text/css"});return e(document.getElementsByTagName("head")[0],i),i.sheet||i.styleSheet}(),p={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"50%",left:"50%",position:"absolute"};o.defaults={},n(o.prototype,{spin:function(e){this.stop();var i=this,r=i.opts,n=i.el=a(t(0,{className:r.className}),{position:r.position,width:0,zIndex:r.zIndex});if(r.radius+r.length+r.width,a(n,{left:r.left,top:r.top}),e&&e.insertBefore(n,e.firstChild||null),n.setAttribute("role","progressbar"),i.lines(n,i.opts),!c){var s,o=0,l=(r.lines-1)*(1-r.direction)/2,d=r.fps,u=d/r.speed,f=(1-r.opacity)/(u*r.trail/100),p=u/r.lines;!function h(){o++;for(var t=0;r.lines>t;t++)s=Math.max(1-(o+(r.lines-t)*p)%u*f,r.opacity),i.opacity(n,t*r.direction+l,s,r);i.timeout=i.el&&setTimeout(h,~~(1e3/d))}()}return i},stop:function(){var t=this.el;return t&&(clearTimeout(this.timeout),t.parentNode&&t.parentNode.removeChild(t),this.el=void 0),this},lines:function(r,n){function o(e,i){return a(t(),{position:"absolute",width:n.length+n.width+"px",height:n.width+"px",background:e,boxShadow:i,transformOrigin:"left",transform:"rotate("+~~(360/n.lines*d+n.rotate)+"deg) translate("+n.radius+"px,0)",borderRadius:(n.corners*n.width>>1)+"px"})}for(var l,d=0,u=(n.lines-1)*(1-n.direction)/2;n.lines>d;d++)l=a(t(),{position:"absolute",top:1+~(n.width/2)+"px",transform:n.hwaccel?"translate3d(0,0,0)":"",opacity:n.opacity,animation:c&&i(n.opacity,n.trail,u+d*n.direction,n.lines)+" "+1/n.speed+"s linear infinite"}),n.shadow&&e(l,a(o("#000","0 0 4px #000"),{top:"2px"})),e(r,e(l,o(s(n.color,d),"0 0 1px rgba(0,0,0,.1)")));return r},opacity:function(t,e,i){t.childNodes.length>e&&(t.childNodes[e].style.opacity=i)}});var h=a(t("group"),{behavior:"url(#default#VML)"});return!r(h,"transform")&&h.adj?l():c=r(h,"animation"),o}),function(t,e){"object"==typeof exports?module.exports=e(require("spin.js")):"function"==typeof define&&define.amd?define(["spin"],e):t.Ladda=e(t.Spinner)}(this,function(t){"use strict";function e(t){if(void 0===t)return void console.warn("Ladda button target must be defined.");t.querySelector(".ladda-label")||(t.innerHTML='<span class="ladda-label">'+t.innerHTML+"</span>");var e,i=t.querySelector(".ladda-spinner");i||(i=document.createElement("span"),i.className="ladda-spinner"),t.appendChild(i);var r,a={start:function(){return e||(e=s(t)),t.setAttribute("disabled",""),t.setAttribute("data-loading",""),clearTimeout(r),e.spin(i),this.setProgress(0),this},startAfter:function(t){return clearTimeout(r),r=setTimeout(function(){a.start()},t),this},stop:function(){return t.removeAttribute("disabled"),t.removeAttribute("data-loading"),clearTimeout(r),e&&(r=setTimeout(function(){e.stop()},1e3)),this},toggle:function(){return this.isLoading()?this.stop():this.start(),this},setProgress:function(e){e=Math.max(Math.min(e,1),0);var i=t.querySelector(".ladda-progress");0===e&&i&&i.parentNode?i.parentNode.removeChild(i):(i||(i=document.createElement("div"),i.className="ladda-progress",t.appendChild(i)),i.style.width=(e||0)*t.offsetWidth+"px")},enable:function(){return this.stop(),this},disable:function(){return this.stop(),t.setAttribute("disabled",""),this},isLoading:function(){return t.hasAttribute("data-loading")},remove:function(){clearTimeout(r),t.removeAttribute("disabled",""),t.removeAttribute("data-loading",""),e&&(e.stop(),e=null);for(var i=0,n=l.length;n>i;i++)if(a===l[i]){l.splice(i,1);break}}};return l.push(a),a}function i(t,e){for(;t.parentNode&&t.tagName!==e;)t=t.parentNode;return e===t.tagName?t:void 0}function r(t){for(var e=["input","textarea","select"],i=[],r=0;e.length>r;r++)for(var a=t.getElementsByTagName(e[r]),n=0;a.length>n;n++)a[n].hasAttribute("required")&&i.push(a[n]);return i}function a(t,a){a=a||{};var n=[];"string"==typeof t?n=o(document.querySelectorAll(t)):"object"==typeof t&&"string"==typeof t.nodeName&&(n=[t]);for(var s=0,l=n.length;l>s;s++)(function(){var t=n[s];if("function"==typeof t.addEventListener){var o=e(t),l=-1;t.addEventListener("click",function(){var e=!0,n=i(t,"FORM");if(void 0!==n)for(var s=r(n),c=0;s.length>c;c++)""===s[c].value.replace(/^\s+|\s+$/g,"")&&(e=!1),"checkbox"!==s[c].type&&"radio"!==s[c].type||s[c].checked||(e=!1),"email"===s[c].type&&(e=/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(s[c].value));e&&(o.startAfter(1),"number"==typeof a.timeout&&(clearTimeout(l),l=setTimeout(o.stop,a.timeout)),"function"==typeof a.callback&&a.callback.apply(null,[o]))},!1)}})()}function n(){for(var t=0,e=l.length;e>t;t++)l[t].stop()}function s(e){var i,r=e.offsetHeight;0===r&&(r=parseFloat(window.getComputedStyle(e).height)),r>32&&(r*=.8),e.hasAttribute("data-spinner-size")&&(r=parseInt(e.getAttribute("data-spinner-size"),10)),e.hasAttribute("data-spinner-color")&&(i=e.getAttribute("data-spinner-color"));var a=12,n=.2*r,s=.6*n,o=7>n?2:3;return new t({color:i||"#fff",lines:a,radius:n,length:s,width:o,zIndex:"auto",top:"auto",left:"auto",className:""})}function o(t){for(var e=[],i=0;t.length>i;i++)e.push(t[i]);return e}var l=[];return{bind:a,create:e,stopAll:n}}),function(t,e){if(void 0===e)return console.error("jQuery required for Ladda.jQuery");var i=[];e=e.extend(e,{ladda:function(e){"stopAll"===e&&t.stopAll()}}),e.fn=e.extend(e.fn,{ladda:function(r){var a=i.slice.call(arguments,1);return"bind"===r?(a.unshift(e(this).selector),t.bind.apply(t,a)):e(this).each(function(){var i,n=e(this);void 0===r?n.data("ladda",t.create(this)):(i=n.data("ladda"),i[r].apply(i,a))}),this}})}(this.Ladda,this.jQuery);