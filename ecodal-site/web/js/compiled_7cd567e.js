/*!
 * Bootstrap v3.0.0
 *
 * Copyright 2013 Twitter, Inc
 * Licensed under the Apache License v2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Designed and built with all the love in the world @twitter by @mdo and @fat.
 */

+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function f(){e.trigger("closed.bs.alert").remove()}var c=a(this),d=c.attr("data-target");d||(d=c.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,""));var e=a(d);b&&b.preventDefault(),e.length||(e=c.hasClass("alert")?c:c.parent()),e.trigger(b=a.Event("close.bs.alert"));if(b.isDefaultPrevented())return;e.removeClass("in"),a.support.transition&&e.hasClass("fade")?e.one(a.support.transition.end,f).emulateTransitionEnd(150):f()};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),typeof b=="string"&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(window.jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d)};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(a){var b="disabled",c=this.$element,d=c.is("input")?"val":"html",e=c.data();a+="Text",e.resetText||c.data("resetText",c[d]()),c[d](e[a]||this.options[a]),setTimeout(function(){a=="loadingText"?c.addClass(b).attr(b,b):c.removeClass(b).removeAttr(b)},0)},b.prototype.toggle=function(){var a=this.$element.closest('[data-toggle="buttons"]');if(a.length){var b=this.$element.find("input").prop("checked",!this.$element.hasClass("active")).trigger("change");b.prop("type")==="radio"&&a.find(".active").removeClass("active")}this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f=typeof c=="object"&&c;e||d.data("bs.button",e=new b(this,f)),c=="toggle"?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(window.jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,this.options.pause=="hover"&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();if(b>this.$items.length-1||b<0)return;return this.sliding?this.$element.one("slid",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition.end&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){if(this.sliding)return;return this.slide("next")},b.prototype.prev=function(){if(this.sliding)return;return this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g=b=="next"?"left":"right",h=b=="next"?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}this.sliding=!0,f&&this.pause();var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});if(e.hasClass("active"))return;this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")}));if(a.support.transition&&this.$element.hasClass("slide")){this.$element.trigger(j);if(j.isDefaultPrevented())return;e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid")},0)}).emulateTransitionEnd(600)}else{this.$element.trigger(j);if(j.isDefaultPrevented())return;d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return f&&this.cycle(),this};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),typeof c=="object"&&c),g=typeof c=="string"?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),typeof c=="number"?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c=a(this),d,e=a(c.attr("data-target")||(d=c.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),c.data()),g=c.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=c.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(window.jQuery),+function(a){function e(){a(b).remove(),a(c).each(function(b){var c=f(a(this));if(!c.hasClass("open"))return;c.trigger(b=a.Event("hide.bs.dropdown"));if(b.isDefaultPrevented())return;c.removeClass("open").trigger("hidden.bs.dropdown")})}function f(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}"use strict";var b=".dropdown-backdrop",c="[data-toggle=dropdown]",d=function(b){var c=a(b).on("click.bs.dropdown",this.toggle)};d.prototype.toggle=function(b){var c=a(this);if(c.is(".disabled, :disabled"))return;var d=f(c),g=d.hasClass("open");e();if(!g){"ontouchstart"in document.documentElement&&!d.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",e),d.trigger(b=a.Event("show.bs.dropdown"));if(b.isDefaultPrevented())return;d.toggleClass("open").trigger("shown.bs.dropdown"),c.focus()}return!1},d.prototype.keydown=function(b){if(!/(38|40|27)/.test(b.keyCode))return;var d=a(this);b.preventDefault(),b.stopPropagation();if(d.is(".disabled, :disabled"))return;var e=f(d),g=e.hasClass("open");if(!g||g&&b.keyCode==27)return b.which==27&&e.find(c).focus(),d.click();var h=a("[role=menu] li:not(.divider):visible a",e);if(!h.length)return;var i=h.index(h.filter(":focus"));b.keyCode==38&&i>0&&i--,b.keyCode==40&&i<h.length-1&&i++,~i||(i=0),h.eq(i).focus()};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),e=c.data("dropdown");e||c.data("dropdown",e=new d(this)),typeof b=="string"&&e[b].call(c)})},a.fn.dropdown.Constructor=d,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",e).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",c,d.prototype.toggle).on("keydown.bs.dropdown.data-api",c+", [role=menu]",d.prototype.keydown)}(window.jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.load(this.options.remote)};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d);if(this.isShown||d.isDefaultPrevented())return;this.isShown=!0,this.escape(),this.$element.on("click.dismiss.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show(),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)})},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b);if(!this.isShown||b.isDefaultPrevented())return;this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal()},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]!==a.target&&!this.$element.has(a.target).length&&this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){a.which==27&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this,d=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var e=a.support.transition&&d;this.$backdrop=a('<div class="modal-backdrop '+d+'" />').appendTo(document.body),this.$element.on("click.dismiss.modal",a.proxy(function(a){if(a.target!==a.currentTarget)return;this.options.backdrop=="static"?this.$element[0].focus.call(this.$element[0]):this.hide.call(this)},this)),e&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in");if(!b)return;e?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),typeof c=="object"&&c);f||e.data("bs.modal",f=new b(this,g)),typeof c=="string"?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(window.jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);var e=this.options.trigger.split(" ");for(var f=e.length;f--;){var g=e[f];if(g=="click")this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if(g!="manual"){var h=g=="hover"?"mouseenter":"focus",i=g=="hover"?"mouseleave":"blur";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&typeof b.delay=="number"&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);clearTimeout(c.timeout),c.hoverState="in";if(!c.options.delay||!c.options.delay.show)return c.show();c.timeout=setTimeout(function(){c.hoverState=="in"&&c.show()},c.options.delay.show)},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);clearTimeout(c.timeout),c.hoverState="out";if(!c.options.delay||!c.options.delay.hide)return c.hide();c.timeout=setTimeout(function(){c.hoverState=="out"&&c.hide()},c.options.delay.hide)},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);if(b.isDefaultPrevented())return;var c=this.tip();this.setContent(),this.options.animation&&c.addClass("fade");var d=typeof this.options.placement=="function"?this.options.placement.call(this,c[0],this.$element[0]):this.options.placement,e=/\s?auto?\s?/i,f=e.test(d);f&&(d=d.replace(e,"")||"top"),c.detach().css({top:0,left:0,display:"block"}).addClass(d),this.options.container?c.appendTo(this.options.container):c.insertAfter(this.$element);var g=this.getPosition(),h=c[0].offsetWidth,i=c[0].offsetHeight;if(f){var j=this.$element.parent(),k=d,l=document.documentElement.scrollTop||document.body.scrollTop,m=this.options.container=="body"?window.innerWidth:j.outerWidth(),n=this.options.container=="body"?window.innerHeight:j.outerHeight(),o=this.options.container=="body"?0:j.offset().left;d=d=="bottom"&&g.top+g.height+i-l>n?"top":d=="top"&&g.top-l-i<0?"bottom":d=="right"&&g.right+h>m?"left":d=="left"&&g.left-h<o?"right":d,c.removeClass(k).addClass(d)}var p=this.getCalculatedOffset(d,g,h,i);this.applyPlacement(p,d),this.$element.trigger("shown.bs."+this.type)}},b.prototype.applyPlacement=function(a,b){var c,d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),a.top=a.top+g,a.left=a.left+h,d.offset(a).addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;b=="top"&&j!=f&&(c=!0,a.top=a.top+f-j);if(/bottom|top/.test(b)){var k=0;a.left<0&&(k=a.left*-2,a.left=0,d.offset(a),i=d[0].offsetWidth,j=d[0].offsetHeight),this.replaceArrow(k-e+i,i,"left")}else this.replaceArrow(j-f,j,"top");c&&d.offset(a)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function e(){b.hoverState!="in"&&c.detach()}var b=this,c=this.tip(),d=a.Event("hide.bs."+this.type);this.$element.trigger(d);if(d.isDefaultPrevented())return;return c.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?c.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),this.$element.trigger("hidden.bs."+this.type),this},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||typeof a.attr("data-original-title")!="string")&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},typeof b.getBoundingClientRect=="function"?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return a=="bottom"?{top:b.top+b.height,left:b.left+b.width/2-c/2}:a=="top"?{top:b.top-d,left:b.left+b.width/2-c/2}:a=="left"?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||(typeof c.title=="function"?c.title.call(b[0]):c.title),a},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f=typeof c=="object"&&c;e||d.data("bs.tooltip",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(window.jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"html":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||(typeof b.content=="function"?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f=typeof c=="object"&&c;e||d.data("bs.popover",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(window.jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.attr("data-target");d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,""));if(b.parent("li").hasClass("active"))return;var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});b.trigger(f);if(f.isDefaultPrevented())return;var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})},b.prototype.activate=function(b,c,d){function g(){e.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),f?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var e=c.find("> .active"),f=d&&a.support.transition&&e.hasClass("fade");f?e.one(a.support.transition.end,g).emulateTransitionEnd(150):g(),e.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),typeof c=="string"&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(window.jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(!this.$element.is(":visible"))return;var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;typeof f!="object"&&(h=g=f),typeof g=="function"&&(g=f.top()),typeof h=="function"&&(h=f.bottom());var i=this.unpin!=null&&d+this.unpin<=e.top?!1:h!=null&&e.top+this.$element.height()>=c-h?"bottom":g!=null&&d<=g?"top":!1;if(this.affixed===i)return;this.unpin&&this.$element.css("top",""),this.affixed=i,this.unpin=i=="bottom"?e.top-d:null,this.$element.removeClass(b.RESET).addClass("affix"+(i?"-"+i:"")),i=="bottom"&&this.$element.offset({top:document.body.offsetHeight-h-this.$element.height()})};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f=typeof c=="object"&&c;e||d.data("bs.affix",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(window.jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(this.transitioning||this.$element.hasClass("in"))return;var b=a.Event("show.bs.collapse");this.$element.trigger(b);if(b.isDefaultPrevented())return;var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])},b.prototype.hide=function(){if(this.transitioning||!this.$element.hasClass("in"))return;var b=a.Event("hide.bs.collapse");this.$element.trigger(b);if(b.isDefaultPrevented())return;var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};if(!a.support.transition)return d.call(this);this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350)},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),typeof c=="object"&&c);e||d.data("bs.collapse",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c=a(this),d,e=c.attr("data-target")||b.preventDefault()||(d=c.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":c.data(),i=c.attr("data-parent"),j=i&&a(i);if(!g||!g.transitioning)j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(c).addClass("collapsed"),c[f.hasClass("in")?"addClass":"removeClass"]("collapsed");f.collapse(h)})}(window.jQuery),+function(a){function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(c).is("body")?a(window):a(c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}"use strict",b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);var c=this,d=this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#\w/.test(e)&&a(e);return f&&f.length&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})},b.prototype.process=function(){var a=this.$scrollElement.scrollTop()+this.options.offset,b=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,c=b-this.$scrollElement.height(),d=this.offsets,e=this.targets,f=this.activeTarget,g;if(a>=c)return f!=(g=e.last()[0])&&this.activate(g);for(g=d.length;g--;)f!=e[g]&&a>=d[g]&&(!d[g+1]||a<=d[g+1])&&this.activate(e[g])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parents(".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f=typeof c=="object"&&c;e||d.data("bs.scrollspy",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(window.jQuery),+function(a){function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(a.style[c]!==undefined)return{end:b[c]}}"use strict",a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(window.jQuery)
/*
 * Inline Form Validation Engine 2.6.2, jQuery plugin
 *
 * Copyright(c) 2010, Cedric Dugas
 * http://www.position-absolute.com
 *
 * 2.0 Rewrite by Olivier Refalo
 * http://www.crionics.com
 *
 * Form validation engine allowing custom regex rules to be added.
 * Licensed under the MIT License
 */
 (function($) {

	"use strict";

	var methods = {

		/**
		* Kind of the constructor, called before any action
		* @param {Map} user options
		*/
		init: function(options) {
			var form = this;
			if (!form.data('jqv') || form.data('jqv') == null ) {
				options = methods._saveOptions(form, options);
				// bind all formError elements to close on click
				$(document).on("click", ".formError", function() {
					$(this).fadeOut(150, function() {
						// remove prompt once invisible
						$(this).parent('.formErrorOuter').remove();
						$(this).remove();
					});
				});
			}
			return this;
		 },
		/**
		* Attachs jQuery.validationEngine to form.submit and field.blur events
		* Takes an optional params: a list of options
		* ie. jQuery("#formID1").validationEngine('attach', {promptPosition : "centerRight"});
		*/
		attach: function(userOptions) {

			var form = this;
			var options;

			if(userOptions)
				options = methods._saveOptions(form, userOptions);
			else
				options = form.data('jqv');

			options.validateAttribute = (form.find("[data-validation-engine*=validate]").length) ? "data-validation-engine" : "class";
			if (options.binded) {

				// delegate fields
				form.on(options.validationEventTrigger, "["+options.validateAttribute+"*=validate]:not([type=checkbox]):not([type=radio]):not(.datepicker)", methods._onFieldEvent);
				form.on("click", "["+options.validateAttribute+"*=validate][type=checkbox],["+options.validateAttribute+"*=validate][type=radio]", methods._onFieldEvent);
				form.on(options.validationEventTrigger,"["+options.validateAttribute+"*=validate][class*=datepicker]", {"delay": 300}, methods._onFieldEvent);
			}
			if (options.autoPositionUpdate) {
				$(window).bind("resize", {
					"noAnimation": true,
					"formElem": form
				}, methods.updatePromptsPosition);
			}
			form.on("click","a[data-validation-engine-skip], a[class*='validate-skip'], button[data-validation-engine-skip], button[class*='validate-skip'], input[data-validation-engine-skip], input[class*='validate-skip']", methods._submitButtonClick);
			form.removeData('jqv_submitButton');

			// bind form.submit
			form.on("submit", methods._onSubmitEvent);
			return this;
		},
		/**
		* Unregisters any bindings that may point to jQuery.validaitonEngine
		*/
		detach: function() {

			var form = this;
			var options = form.data('jqv');

			// unbind fields
			form.find("["+options.validateAttribute+"*=validate]").not("[type=checkbox]").off(options.validationEventTrigger, methods._onFieldEvent);
			form.find("["+options.validateAttribute+"*=validate][type=checkbox],[class*=validate][type=radio]").off("click", methods._onFieldEvent);

			// unbind form.submit
			form.off("submit", methods._onSubmitEvent);
			form.removeData('jqv');
            
			form.off("click", "a[data-validation-engine-skip], a[class*='validate-skip'], button[data-validation-engine-skip], button[class*='validate-skip'], input[data-validation-engine-skip], input[class*='validate-skip']", methods._submitButtonClick);
			form.removeData('jqv_submitButton');

			if (options.autoPositionUpdate)
				$(window).off("resize", methods.updatePromptsPosition);

			return this;
		},
		/**
		* Validates either a form or a list of fields, shows prompts accordingly.
		* Note: There is no ajax form validation with this method, only field ajax validation are evaluated
		*
		* @return true if the form validates, false if it fails
		*/
		validate: function() {
			var element = $(this);
			var valid = null;

			if (element.is("form") || element.hasClass("validationEngineContainer")) {
				if (element.hasClass('validating')) {
					// form is already validating.
					// Should abort old validation and start new one. I don't know how to implement it.
					return false;
				} else {				
					element.addClass('validating');
					var options = element.data('jqv');
					var valid = methods._validateFields(this);

					// If the form doesn't validate, clear the 'validating' class before the user has a chance to submit again
					setTimeout(function(){
						element.removeClass('validating');
					}, 100);
					if (valid && options.onSuccess) {
						options.onSuccess();
					} else if (!valid && options.onFailure) {
						options.onFailure();
					}
				}
			} else if (element.is('form') || element.hasClass('validationEngineContainer')) {
				element.removeClass('validating');
			} else {
				// field validation
				var form = element.closest('form, .validationEngineContainer'),
					options = (form.data('jqv')) ? form.data('jqv') : $.validationEngine.defaults,
					valid = methods._validateField(element, options);

				if (valid && options.onFieldSuccess)
					options.onFieldSuccess();
				else if (options.onFieldFailure && options.InvalidFields.length > 0) {
					options.onFieldFailure();
				}
			}
			if(options.onValidationComplete) {
				// !! ensures that an undefined return is interpreted as return false but allows a onValidationComplete() to possibly return true and have form continue processing
				return !!options.onValidationComplete(form, valid);
			}
			return valid;
		},
		/**
		*  Redraw prompts position, useful when you change the DOM state when validating
		*/
		updatePromptsPosition: function(event) {

			if (event && this == window) {
				var form = event.data.formElem;
				var noAnimation = event.data.noAnimation;
			}
			else
				var form = $(this.closest('form, .validationEngineContainer'));

			var options = form.data('jqv');
			// No option, take default one
			form.find('['+options.validateAttribute+'*=validate]').not(":disabled").each(function(){
				var field = $(this);
				if (options.prettySelect && field.is(":hidden"))
				  field = form.find("#" + options.usePrefix + field.attr('id') + options.useSuffix);
				var prompt = methods._getPrompt(field);
				var promptText = $(prompt).find(".formErrorContent").html();

				if(prompt)
					methods._updatePrompt(field, $(prompt), promptText, undefined, false, options, noAnimation);
			});
			return this;
		},
		/**
		* Displays a prompt on a element.
		* Note that the element needs an id!
		*
		* @param {String} promptText html text to display type
		* @param {String} type the type of bubble: 'pass' (green), 'load' (black) anything else (red)
		* @param {String} possible values topLeft, topRight, bottomLeft, centerRight, bottomRight
		*/
		showPrompt: function(promptText, type, promptPosition, showArrow) {
			var form = this.closest('form, .validationEngineContainer');
			var options = form.data('jqv');
			// No option, take default one
			if(!options)
				options = methods._saveOptions(this, options);
			if(promptPosition)
				options.promptPosition=promptPosition;
			options.showArrow = showArrow==true;

			methods._showPrompt(this, promptText, type, false, options);
			return this;
		},
		/**
		* Closes form error prompts, CAN be invidual
		*/
		hide: function() {
			 var form = $(this).closest('form, .validationEngineContainer');
			 var options = form.data('jqv');
			 var fadeDuration = (options && options.fadeDuration) ? options.fadeDuration : 0.3;
			 var closingtag;
			 
			 if($(this).is("form") || $(this).hasClass("validationEngineContainer")) {
				 closingtag = "parentForm"+methods._getClassName($(this).attr("id"));
			 } else {
				 closingtag = methods._getClassName($(this).attr("id")) +"formError";
			 }
			 $('.'+closingtag).fadeTo(fadeDuration, 0.3, function() {
				 $(this).parent('.formErrorOuter').remove();
				 $(this).remove();
			 });
			 return this;
		 },
		 /**
		 * Closes all error prompts on the page
		 */
		 hideAll: function() {

			 var form = this;
			 var options = form.data('jqv');
			 var duration = options ? options.fadeDuration:300;
			 $('.formError').fadeTo(duration, 300, function() {
				 $(this).parent('.formErrorOuter').remove();
				 $(this).remove();
			 });
			 return this;
		 },
		/**
		* Typically called when user exists a field using tab or a mouse click, triggers a field
		* validation
		*/
		_onFieldEvent: function(event) {
			var field = $(this);
			var form = field.closest('form, .validationEngineContainer');
			var options = form.data('jqv');
			options.eventTrigger = "field";
			// validate the current field
			window.setTimeout(function() {
				methods._validateField(field, options);
				if (options.InvalidFields.length == 0 && options.onFieldSuccess) {
					options.onFieldSuccess();
				} else if (options.InvalidFields.length > 0 && options.onFieldFailure) {
					options.onFieldFailure();
				}
			}, (event.data) ? event.data.delay : 0);

		},
		/**
		* Called when the form is submited, shows prompts accordingly
		*
		* @param {jqObject}
		*            form
		* @return false if form submission needs to be cancelled
		*/
		_onSubmitEvent: function() {
			var form = $(this);
			var options = form.data('jqv');
			
			//check if it is trigger from skipped button
			if (form.data("jqv_submitButton")){
				var submitButton = $("#" + form.data("jqv_submitButton"));
				if (submitButton){
					if (submitButton.length > 0){
						if (submitButton.hasClass("validate-skip") || submitButton.attr("data-validation-engine-skip") == "true")
							return true;
					}
				}
			}

			options.eventTrigger = "submit";

			// validate each field 
			// (- skip field ajax validation, not necessary IF we will perform an ajax form validation)
			var r=methods._validateFields(form);

			if (r && options.ajaxFormValidation) {
				methods._validateFormWithAjax(form, options);
				// cancel form auto-submission - process with async call onAjaxFormComplete
				return false;
			}

			if(options.onValidationComplete) {
				// !! ensures that an undefined return is interpreted as return false but allows a onValidationComplete() to possibly return true and have form continue processing
				return !!options.onValidationComplete(form, r);
			}
			return r;
		},
		/**
		* Return true if the ajax field validations passed so far
		* @param {Object} options
		* @return true, is all ajax validation passed so far (remember ajax is async)
		*/
		_checkAjaxStatus: function(options) {
			var status = true;
			$.each(options.ajaxValidCache, function(key, value) {
				if (!value) {
					status = false;
					// break the each
					return false;
				}
			});
			return status;
		},
		
		/**
		* Return true if the ajax field is validated
		* @param {String} fieldid
		* @param {Object} options
		* @return true, if validation passed, false if false or doesn't exist
		*/
		_checkAjaxFieldStatus: function(fieldid, options) {
			return options.ajaxValidCache[fieldid] == true;
		},
		/**
		* Validates form fields, shows prompts accordingly
		*
		* @param {jqObject}
		*            form
		* @param {skipAjaxFieldValidation}
		*            boolean - when set to true, ajax field validation is skipped, typically used when the submit button is clicked
		*
		* @return true if form is valid, false if not, undefined if ajax form validation is done
		*/
		_validateFields: function(form) {
			var options = form.data('jqv');

			// this variable is set to true if an error is found
			var errorFound = false;

			// Trigger hook, start validation
			form.trigger("jqv.form.validating");
			// first, evaluate status of non ajax fields
			var first_err=null;
			form.find('['+options.validateAttribute+'*=validate]').not(":disabled").each( function() {
				var field = $(this);
				var names = [];
				if ($.inArray(field.attr('name'), names) < 0) {
					errorFound |= methods._validateField(field, options);
					if (errorFound && first_err==null)
						if (field.is(":hidden") && options.prettySelect)
							first_err = field = form.find("#" + options.usePrefix + methods._jqSelector(field.attr('id')) + options.useSuffix);
						else {

							//Check if we need to adjust what element to show the prompt on
							//and and such scroll to instead
							if(field.data('jqv-prompt-at') instanceof jQuery ){
								field = field.data('jqv-prompt-at');
							} else if(field.data('jqv-prompt-at')) {
								field = $(field.data('jqv-prompt-at'));
							}
							first_err=field;
						}
					if (options.doNotShowAllErrosOnSubmit)
						return false;
					names.push(field.attr('name'));

					//if option set, stop checking validation rules after one error is found
					if(options.showOneMessage == true && errorFound){
						return false;
					}
				}
			});

			// second, check to see if all ajax calls completed ok
			// errorFound |= !methods._checkAjaxStatus(options);

			// third, check status and scroll the container accordingly
			form.trigger("jqv.form.result", [errorFound]);

			if (errorFound) {
				if (options.scroll) {
					var destination=first_err.offset().top;
					var fixleft = first_err.offset().left;

					//prompt positioning adjustment support. Usage: positionType:Xshift,Yshift (for ex.: bottomLeft:+20 or bottomLeft:-20,+10)
					var positionType=options.promptPosition;
					if (typeof(positionType)=='string' && positionType.indexOf(":")!=-1)
						positionType=positionType.substring(0,positionType.indexOf(":"));

					if (positionType!="bottomRight" && positionType!="bottomLeft") {
						var prompt_err= methods._getPrompt(first_err);
						if (prompt_err) {
							destination=prompt_err.offset().top;
						}
					}
					
					// Offset the amount the page scrolls by an amount in px to accomodate fixed elements at top of page
					if (options.scrollOffset) {
						destination -= options.scrollOffset;
					}

					// get the position of the first error, there should be at least one, no need to check this
					//var destination = form.find(".formError:not('.greenPopup'):first").offset().top;
					if (options.isOverflown) {
						var overflowDIV = $(options.overflownDIV);
						if(!overflowDIV.length) return false;
						var scrollContainerScroll = overflowDIV.scrollTop();
						var scrollContainerPos = -parseInt(overflowDIV.offset().top);

						destination += scrollContainerScroll + scrollContainerPos - 5;
						var scrollContainer = $(options.overflownDIV + ":not(:animated)");

						scrollContainer.animate({ scrollTop: destination }, 1100, function(){
							if(options.focusFirstField) first_err.focus();
						});

					} else {
						$("html, body").animate({
							scrollTop: destination
						}, 1100, function(){
							if(options.focusFirstField) first_err.focus();
						});
						$("html, body").animate({scrollLeft: fixleft},1100)
					}

				} else if(options.focusFirstField)
					first_err.focus();
				return false;
			}
			return true;
		},
		/**
		* This method is called to perform an ajax form validation.
		* During this process all the (field, value) pairs are sent to the server which returns a list of invalid fields or true
		*
		* @param {jqObject} form
		* @param {Map} options
		*/
		_validateFormWithAjax: function(form, options) {

			var data = form.serialize();
									var type = (options.ajaxFormValidationMethod) ? options.ajaxFormValidationMethod : "GET";
			var url = (options.ajaxFormValidationURL) ? options.ajaxFormValidationURL : form.attr("action");
									var dataType = (options.dataType) ? options.dataType : "json";
			$.ajax({
				type: type,
				url: url,
				cache: false,
				dataType: dataType,
				data: data,
				form: form,
				methods: methods,
				options: options,
				beforeSend: function() {
					return options.onBeforeAjaxFormValidation(form, options);
				},
				error: function(data, transport) {
					methods._ajaxError(data, transport);
				},
				success: function(json) {
					if ((dataType == "json") && (json !== true)) {
						// getting to this case doesn't necessary means that the form is invalid
						// the server may return green or closing prompt actions
						// this flag helps figuring it out
						var errorInForm=false;
						for (var i = 0; i < json.length; i++) {
							var value = json[i];

							var errorFieldId = value[0];
							var errorField = $($("#" + errorFieldId)[0]);

							// make sure we found the element
							if (errorField.length == 1) {

								// promptText or selector
								var msg = value[2];
								// if the field is valid
								if (value[1] == true) {

									if (msg == ""  || !msg){
										// if for some reason, status==true and error="", just close the prompt
										methods._closePrompt(errorField);
									} else {
										// the field is valid, but we are displaying a green prompt
										if (options.allrules[msg]) {
											var txt = options.allrules[msg].alertTextOk;
											if (txt)
												msg = txt;
										}
										if (options.showPrompts) methods._showPrompt(errorField, msg, "pass", false, options, true);
									}
								} else {
									// the field is invalid, show the red error prompt
									errorInForm|=true;
									if (options.allrules[msg]) {
										var txt = options.allrules[msg].alertText;
										if (txt)
											msg = txt;
									}
									if(options.showPrompts) methods._showPrompt(errorField, msg, "", false, options, true);
								}
							}
						}
						options.onAjaxFormComplete(!errorInForm, form, json, options);
					} else
						options.onAjaxFormComplete(true, form, json, options);

				}
			});

		},
		/**
		* Validates field, shows prompts accordingly
		*
		* @param {jqObject}
		*            field
		* @param {Array[String]}
		*            field's validation rules
		* @param {Map}
		*            user options
		* @return false if field is valid (It is inversed for *fields*, it return false on validate and true on errors.)
		*/
		_validateField: function(field, options, skipAjaxValidation) {
			if (!field.attr("id")) {
				field.attr("id", "form-validation-field-" + $.validationEngine.fieldIdCounter);
				++$.validationEngine.fieldIdCounter;
			}

           if (!options.validateNonVisibleFields && (field.is(":hidden") && !options.prettySelect || field.parent().is(":hidden")))
				return false;

			var rulesParsing = field.attr(options.validateAttribute);
			var getRules = /validate\[(.*)\]/.exec(rulesParsing);

			if (!getRules)
				return false;
			var str = getRules[1];
			var rules = str.split(/\[|,|\]/);

			// true if we ran the ajax validation, tells the logic to stop messing with prompts
			var isAjaxValidator = false;
			var fieldName = field.attr("name");
			var promptText = "";
			var promptType = "";
			var required = false;
			var limitErrors = false;
			options.isError = false;
			options.showArrow = true;
			
			// If the programmer wants to limit the amount of error messages per field,
			if (options.maxErrorsPerField > 0) {
				limitErrors = true;
			}

			var form = $(field.closest("form, .validationEngineContainer"));
			// Fix for adding spaces in the rules
			for (var i = 0; i < rules.length; i++) {
				rules[i] = rules[i].replace(" ", "");
				// Remove any parsing errors
				if (rules[i] === '') {
					delete rules[i];
				}
			}

			for (var i = 0, field_errors = 0; i < rules.length; i++) {
				
				// If we are limiting errors, and have hit the max, break
				if (limitErrors && field_errors >= options.maxErrorsPerField) {
					// If we haven't hit a required yet, check to see if there is one in the validation rules for this
					// field and that it's index is greater or equal to our current index
					if (!required) {
						var have_required = $.inArray('required', rules);
						required = (have_required != -1 &&  have_required >= i);
					}
					break;
				}
				
				
				var errorMsg = undefined;
				switch (rules[i]) {

					case "required":
						required = true;
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._required);
						break;
					case "custom":
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._custom);
						break;
					case "groupRequired":
						// Check is its the first of group, if not, reload validation with first field
						// AND continue normal validation on present field
						var classGroup = "["+options.validateAttribute+"*=" +rules[i + 1] +"]";
						var firstOfGroup = form.find(classGroup).eq(0);
						if(firstOfGroup[0] != field[0]){

							methods._validateField(firstOfGroup, options, skipAjaxValidation); 
							options.showArrow = true;

						}
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._groupRequired);
						if(errorMsg)  required = true;
						options.showArrow = false;
						break;
					case "ajax":
						// AJAX defaults to returning it's loading message
						errorMsg = methods._ajax(field, rules, i, options);
						if (errorMsg) {
							promptType = "load";
						}
						break;
					case "minSize":
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._minSize);
						break;
					case "maxSize":
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._maxSize);
						break;
					case "min":
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._min);
						break;
					case "max":
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._max);
						break;
					case "past":
						errorMsg = methods._getErrorMessage(form, field,rules[i], rules, i, options, methods._past);
						break;
					case "future":
						errorMsg = methods._getErrorMessage(form, field,rules[i], rules, i, options, methods._future);
						break;
					case "dateRange":
						var classGroup = "["+options.validateAttribute+"*=" + rules[i + 1] + "]";
						options.firstOfGroup = form.find(classGroup).eq(0);
						options.secondOfGroup = form.find(classGroup).eq(1);

						//if one entry out of the pair has value then proceed to run through validation
						if (options.firstOfGroup[0].value || options.secondOfGroup[0].value) {
							errorMsg = methods._getErrorMessage(form, field,rules[i], rules, i, options, methods._dateRange);
						}
						if (errorMsg) required = true;
						options.showArrow = false;
						break;

					case "dateTimeRange":
						var classGroup = "["+options.validateAttribute+"*=" + rules[i + 1] + "]";
						options.firstOfGroup = form.find(classGroup).eq(0);
						options.secondOfGroup = form.find(classGroup).eq(1);

						//if one entry out of the pair has value then proceed to run through validation
						if (options.firstOfGroup[0].value || options.secondOfGroup[0].value) {
							errorMsg = methods._getErrorMessage(form, field,rules[i], rules, i, options, methods._dateTimeRange);
						}
						if (errorMsg) required = true;
						options.showArrow = false;
						break;
					case "maxCheckbox":
						field = $(form.find("input[name='" + fieldName + "']"));
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._maxCheckbox);
						break;
					case "minCheckbox":
						field = $(form.find("input[name='" + fieldName + "']"));
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._minCheckbox);
						break;
					case "equals":
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._equals);
						break;
					case "funcCall":
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._funcCall);
						break;
					case "creditCard":
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._creditCard);
						break;
					case "condRequired":
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._condRequired);
						if (errorMsg !== undefined) {
							required = true;
						}
						break;

					default:
				}
				
				var end_validation = false;
				
				// If we were passed back an message object, check what the status was to determine what to do
				if (typeof errorMsg == "object") {
					switch (errorMsg.status) {
						case "_break":
							end_validation = true;
							break;
						// If we have an error message, set errorMsg to the error message
						case "_error":
							errorMsg = errorMsg.message;
							break;
						// If we want to throw an error, but not show a prompt, return early with true
						case "_error_no_prompt":
							return true;
							break;
						// Anything else we continue on
						default:
							break;
					}
				}
				
				// If it has been specified that validation should end now, break
				if (end_validation) {
					break;
				}
				
				// If we have a string, that means that we have an error, so add it to the error message.
				if (typeof errorMsg == 'string') {
					promptText += errorMsg + "<br/>";
					options.isError = true;
					field_errors++;
				}	
			}
			// If the rules required is not added, an empty field is not validated
			if(!required && !(field.val()) && field.val().length < 1) options.isError = false;

			// Hack for radio/checkbox group button, the validation go into the
			// first radio/checkbox of the group
			var fieldType = field.prop("type");
			var positionType=field.data("promptPosition") || options.promptPosition;

			if ((fieldType == "radio" || fieldType == "checkbox") && form.find("input[name='" + fieldName + "']").size() > 1) {
				if(positionType === 'inline') {
					field = $(form.find("input[name='" + fieldName + "'][type!=hidden]:last"));
				} else {
				field = $(form.find("input[name='" + fieldName + "'][type!=hidden]:first"));
				}
				options.showArrow = false;
			}

			if(field.is(":hidden") && options.prettySelect) {
				field = form.find("#" + options.usePrefix + methods._jqSelector(field.attr('id')) + options.useSuffix);
			}

			if (options.isError && options.showPrompts){
				methods._showPrompt(field, promptText, promptType, false, options);
			}else{
				if (!isAjaxValidator) methods._closePrompt(field);
			}

			if (!isAjaxValidator) {
				field.trigger("jqv.field.result", [field, options.isError, promptText]);
			}

			/* Record error */
			var errindex = $.inArray(field[0], options.InvalidFields);
			if (errindex == -1) {
				if (options.isError)
				options.InvalidFields.push(field[0]);
			} else if (!options.isError) {
				options.InvalidFields.splice(errindex, 1);
			}
				
			methods._handleStatusCssClasses(field, options);
	
			/* run callback function for each field */
			if (options.isError && options.onFieldFailure)
				options.onFieldFailure(field);

			if (!options.isError && options.onFieldSuccess)
				options.onFieldSuccess(field);

			return options.isError;
		},
		/**
		* Handling css classes of fields indicating result of validation 
		*
		* @param {jqObject}
		*            field
		* @param {Array[String]}
		*            field's validation rules            
		* @private
		*/
		_handleStatusCssClasses: function(field, options) {
			/* remove all classes */
			if(options.addSuccessCssClassToField)
				field.removeClass(options.addSuccessCssClassToField);
			
			if(options.addFailureCssClassToField)
				field.removeClass(options.addFailureCssClassToField);
			
			/* Add classes */
			if (options.addSuccessCssClassToField && !options.isError)
				field.addClass(options.addSuccessCssClassToField);
			
			if (options.addFailureCssClassToField && options.isError)
				field.addClass(options.addFailureCssClassToField);		
		},
		
		 /********************
		  * _getErrorMessage
		  *
		  * @param form
		  * @param field
		  * @param rule
		  * @param rules
		  * @param i
		  * @param options
		  * @param originalValidationMethod
		  * @return {*}
		  * @private
		  */
		 _getErrorMessage:function (form, field, rule, rules, i, options, originalValidationMethod) {
			 // If we are using the custon validation type, build the index for the rule.
			 // Otherwise if we are doing a function call, make the call and return the object
			 // that is passed back.
	 		 var rule_index = jQuery.inArray(rule, rules);
			 if (rule === "custom" || rule === "funcCall") {
				 var custom_validation_type = rules[rule_index + 1];
				 rule = rule + "[" + custom_validation_type + "]";
				 // Delete the rule from the rules array so that it doesn't try to call the
			    // same rule over again
			    delete(rules[rule_index]);
			 }
			 // Change the rule to the composite rule, if it was different from the original
			 var alteredRule = rule;


			 var element_classes = (field.attr("data-validation-engine")) ? field.attr("data-validation-engine") : field.attr("class");
			 var element_classes_array = element_classes.split(" ");

			 // Call the original validation method. If we are dealing with dates or checkboxes, also pass the form
			 var errorMsg;
			 if (rule == "future" || rule == "past"  || rule == "maxCheckbox" || rule == "minCheckbox") {
				 errorMsg = originalValidationMethod(form, field, rules, i, options);
			 } else {
				 errorMsg = originalValidationMethod(field, rules, i, options);
			 }

			 // If the original validation method returned an error and we have a custom error message,
			 // return the custom message instead. Otherwise return the original error message.
			 if (errorMsg != undefined) {
				 var custom_message = methods._getCustomErrorMessage($(field), element_classes_array, alteredRule, options);
				 if (custom_message) errorMsg = custom_message;
			 }
			 return errorMsg;

		 },
		 _getCustomErrorMessage:function (field, classes, rule, options) {
			var custom_message = false;
			var validityProp = /^custom\[.*\]$/.test(rule) ? methods._validityProp["custom"] : methods._validityProp[rule];
			 // If there is a validityProp for this rule, check to see if the field has an attribute for it
			if (validityProp != undefined) {
				custom_message = field.attr("data-errormessage-"+validityProp);
				// If there was an error message for it, return the message
				if (custom_message != undefined) 
					return custom_message;
			}
			custom_message = field.attr("data-errormessage");
			 // If there is an inline custom error message, return it
			if (custom_message != undefined) 
				return custom_message;
			var id = '#' + field.attr("id");
			// If we have custom messages for the element's id, get the message for the rule from the id.
			// Otherwise, if we have custom messages for the element's classes, use the first class message we find instead.
			if (typeof options.custom_error_messages[id] != "undefined" &&
				typeof options.custom_error_messages[id][rule] != "undefined" ) {
						  custom_message = options.custom_error_messages[id][rule]['message'];
			} else if (classes.length > 0) {
				for (var i = 0; i < classes.length && classes.length > 0; i++) {
					 var element_class = "." + classes[i];
					if (typeof options.custom_error_messages[element_class] != "undefined" &&
						typeof options.custom_error_messages[element_class][rule] != "undefined") {
							custom_message = options.custom_error_messages[element_class][rule]['message'];
							break;
					}
				}
			}
			if (!custom_message &&
				typeof options.custom_error_messages[rule] != "undefined" &&
				typeof options.custom_error_messages[rule]['message'] != "undefined"){
					 custom_message = options.custom_error_messages[rule]['message'];
			 }
			 return custom_message;
		 },
		 _validityProp: {
			 "required": "value-missing",
			 "custom": "custom-error",
			 "groupRequired": "value-missing",
			 "ajax": "custom-error",
			 "minSize": "range-underflow",
			 "maxSize": "range-overflow",
			 "min": "range-underflow",
			 "max": "range-overflow",
			 "past": "type-mismatch",
			 "future": "type-mismatch",
			 "dateRange": "type-mismatch",
			 "dateTimeRange": "type-mismatch",
			 "maxCheckbox": "range-overflow",
			 "minCheckbox": "range-underflow",
			 "equals": "pattern-mismatch",
			 "funcCall": "custom-error",
			 "creditCard": "pattern-mismatch",
			 "condRequired": "value-missing"
		 },
		/**
		* Required validation
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @param {bool} condRequired flag when method is used for internal purpose in condRequired check
		* @return an error string if validation failed
		*/
		_required: function(field, rules, i, options, condRequired) {
			switch (field.prop("type")) {
				case "text":
				case "password":
				case "textarea":
				case "file":
				case "select-one":
				case "select-multiple":
				default:
					var field_val      = $.trim( field.val()                               );
					var dv_placeholder = $.trim( field.attr("data-validation-placeholder") );
					var placeholder    = $.trim( field.attr("placeholder")                 );
					if (
						   ( !field_val                                    )
						|| ( dv_placeholder && field_val == dv_placeholder )
						|| ( placeholder    && field_val == placeholder    )
					) {
						return options.allrules[rules[i]].alertText;
					}
					break;
				case "radio":
				case "checkbox":
					// new validation style to only check dependent field
					if (condRequired) {
						if (!field.attr('checked')) {
							return options.allrules[rules[i]].alertTextCheckboxMultiple;
						}
						break;
					}
					// old validation style
					var form = field.closest("form, .validationEngineContainer");
					var name = field.attr("name");
					if (form.find("input[name='" + name + "']:checked").size() == 0) {
						if (form.find("input[name='" + name + "']:visible").size() == 1)
							return options.allrules[rules[i]].alertTextCheckboxe;
						else
							return options.allrules[rules[i]].alertTextCheckboxMultiple;
					}
					break;
			}
		},
		/**
		* Validate that 1 from the group field is required
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return an error string if validation failed
		*/
		_groupRequired: function(field, rules, i, options) {
			var classGroup = "["+options.validateAttribute+"*=" +rules[i + 1] +"]";
			var isValid = false;
			// Check all fields from the group
			field.closest("form, .validationEngineContainer").find(classGroup).each(function(){
				if(!methods._required($(this), rules, i, options)){
					isValid = true;
					return false;
				}
			}); 

			if(!isValid) {
		  return options.allrules[rules[i]].alertText;
		}
		},
		/**
		* Validate rules
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return an error string if validation failed
		*/
		_custom: function(field, rules, i, options) {
			var customRule = rules[i + 1];
			var rule = options.allrules[customRule];
			var fn;
			if(!rule) {
				alert("jqv:custom rule not found - "+customRule);
				return;
			}
			
			if(rule["regex"]) {
				 var ex=rule.regex;
					if(!ex) {
						alert("jqv:custom regex not found - "+customRule);
						return;
					}
					var pattern = new RegExp(ex);

					if (!pattern.test(field.val())) return options.allrules[customRule].alertText;
					
			} else if(rule["func"]) {
				fn = rule["func"]; 
				 
				if (typeof(fn) !== "function") {
					alert("jqv:custom parameter 'function' is no function - "+customRule);
						return;
				}
				 
				if (!fn(field, rules, i, options))
					return options.allrules[customRule].alertText;
			} else {
				alert("jqv:custom type not allowed "+customRule);
					return;
			}
		},
		/**
		* Validate custom function outside of the engine scope
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return an error string if validation failed
		*/
		_funcCall: function(field, rules, i, options) {
			var functionName = rules[i + 1];
			var fn;
			if(functionName.indexOf('.') >-1)
			{
				var namespaces = functionName.split('.');
				var scope = window;
				while(namespaces.length)
				{
					scope = scope[namespaces.shift()];
				}
				fn = scope;
			}
			else
				fn = window[functionName] || options.customFunctions[functionName];
			if (typeof(fn) == 'function')
				return fn(field, rules, i, options);

		},
		/**
		* Field match
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return an error string if validation failed
		*/
		_equals: function(field, rules, i, options) {
			var equalsField = rules[i + 1];

			if (field.val() != $("#" + equalsField).val())
				return options.allrules.equals.alertText;
		},
		/**
		* Check the maximum size (in characters)
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return an error string if validation failed
		*/
		_maxSize: function(field, rules, i, options) {
			var max = rules[i + 1];
			var len = field.val().length;

			if (len > max) {
				var rule = options.allrules.maxSize;
				return rule.alertText + max + rule.alertText2;
			}
		},
		/**
		* Check the minimum size (in characters)
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return an error string if validation failed
		*/
		_minSize: function(field, rules, i, options) {
			var min = rules[i + 1];
			var len = field.val().length;

			if (len < min) {
				var rule = options.allrules.minSize;
				return rule.alertText + min + rule.alertText2;
			}
		},
		/**
		* Check number minimum value
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return an error string if validation failed
		*/
		_min: function(field, rules, i, options) {
			var min = parseFloat(rules[i + 1]);
			var len = parseFloat(field.val());

			if (len < min) {
				var rule = options.allrules.min;
				if (rule.alertText2) return rule.alertText + min + rule.alertText2;
				return rule.alertText + min;
			}
		},
		/**
		* Check number maximum value
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return an error string if validation failed
		*/
		_max: function(field, rules, i, options) {
			var max = parseFloat(rules[i + 1]);
			var len = parseFloat(field.val());

			if (len >max ) {
				var rule = options.allrules.max;
				if (rule.alertText2) return rule.alertText + max + rule.alertText2;
				//orefalo: to review, also do the translations
				return rule.alertText + max;
			}
		},
		/**
		* Checks date is in the past
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return an error string if validation failed
		*/
		_past: function(form, field, rules, i, options) {

			var p=rules[i + 1];
			var fieldAlt = $(form.find("input[name='" + p.replace(/^#+/, '') + "']"));
			var pdate;

			if (p.toLowerCase() == "now") {
				pdate = new Date();
			} else if (undefined != fieldAlt.val()) {
				if (fieldAlt.is(":disabled"))
					return;
				pdate = methods._parseDate(fieldAlt.val());
			} else {
				pdate = methods._parseDate(p);
			}
			var vdate = methods._parseDate(field.val());

			if (vdate > pdate ) {
				var rule = options.allrules.past;
				if (rule.alertText2) return rule.alertText + methods._dateToString(pdate) + rule.alertText2;
				return rule.alertText + methods._dateToString(pdate);
			}
		},
		/**
		* Checks date is in the future
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return an error string if validation failed
		*/
		_future: function(form, field, rules, i, options) {

			var p=rules[i + 1];
			var fieldAlt = $(form.find("input[name='" + p.replace(/^#+/, '') + "']"));
			var pdate;

			if (p.toLowerCase() == "now") {
				pdate = new Date();
			} else if (undefined != fieldAlt.val()) {
				if (fieldAlt.is(":disabled"))
					return;
				pdate = methods._parseDate(fieldAlt.val());
			} else {
				pdate = methods._parseDate(p);
			}
			var vdate = methods._parseDate(field.val());

			if (vdate < pdate ) {
				var rule = options.allrules.future;
				if (rule.alertText2)
					return rule.alertText + methods._dateToString(pdate) + rule.alertText2;
				return rule.alertText + methods._dateToString(pdate);
			}
		},
		/**
		* Checks if valid date
		*
		* @param {string} date string
		* @return a bool based on determination of valid date
		*/
		_isDate: function (value) {
			var dateRegEx = new RegExp(/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/);
			return dateRegEx.test(value);
		},
		/**
		* Checks if valid date time
		*
		* @param {string} date string
		* @return a bool based on determination of valid date time
		*/
		_isDateTime: function (value){
			var dateTimeRegEx = new RegExp(/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/);
			return dateTimeRegEx.test(value);
		},
		//Checks if the start date is before the end date
		//returns true if end is later than start
		_dateCompare: function (start, end) {
			return (new Date(start.toString()) < new Date(end.toString()));
		},
		/**
		* Checks date range
		*
		* @param {jqObject} first field name
		* @param {jqObject} second field name
		* @return an error string if validation failed
		*/
		_dateRange: function (field, rules, i, options) {
			//are not both populated
			if ((!options.firstOfGroup[0].value && options.secondOfGroup[0].value) || (options.firstOfGroup[0].value && !options.secondOfGroup[0].value)) {
				return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
			}

			//are not both dates
			if (!methods._isDate(options.firstOfGroup[0].value) || !methods._isDate(options.secondOfGroup[0].value)) {
				return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
			}

			//are both dates but range is off
			if (!methods._dateCompare(options.firstOfGroup[0].value, options.secondOfGroup[0].value)) {
				return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
			}
		},
		/**
		* Checks date time range
		*
		* @param {jqObject} first field name
		* @param {jqObject} second field name
		* @return an error string if validation failed
		*/
		_dateTimeRange: function (field, rules, i, options) {
			//are not both populated
			if ((!options.firstOfGroup[0].value && options.secondOfGroup[0].value) || (options.firstOfGroup[0].value && !options.secondOfGroup[0].value)) {
				return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
			}
			//are not both dates
			if (!methods._isDateTime(options.firstOfGroup[0].value) || !methods._isDateTime(options.secondOfGroup[0].value)) {
				return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
			}
			//are both dates but range is off
			if (!methods._dateCompare(options.firstOfGroup[0].value, options.secondOfGroup[0].value)) {
				return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
			}
		},
		/**
		* Max number of checkbox selected
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return an error string if validation failed
		*/
		_maxCheckbox: function(form, field, rules, i, options) {

			var nbCheck = rules[i + 1];
			var groupname = field.attr("name");
			var groupSize = form.find("input[name='" + groupname + "']:checked").size();
			if (groupSize > nbCheck) {
				options.showArrow = false;
				if (options.allrules.maxCheckbox.alertText2)
					 return options.allrules.maxCheckbox.alertText + " " + nbCheck + " " + options.allrules.maxCheckbox.alertText2;
				return options.allrules.maxCheckbox.alertText;
			}
		},
		/**
		* Min number of checkbox selected
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return an error string if validation failed
		*/
		_minCheckbox: function(form, field, rules, i, options) {

			var nbCheck = rules[i + 1];
			var groupname = field.attr("name");
			var groupSize = form.find("input[name='" + groupname + "']:checked").size();
			if (groupSize < nbCheck) {
				options.showArrow = false;
				return options.allrules.minCheckbox.alertText + " " + nbCheck + " " + options.allrules.minCheckbox.alertText2;
			}
		},
		/**
		* Checks that it is a valid credit card number according to the
		* Luhn checksum algorithm.
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return an error string if validation failed
		*/
		_creditCard: function(field, rules, i, options) {
			//spaces and dashes may be valid characters, but must be stripped to calculate the checksum.
			var valid = false, cardNumber = field.val().replace(/ +/g, '').replace(/-+/g, '');

			var numDigits = cardNumber.length;
			if (numDigits >= 14 && numDigits <= 16 && parseInt(cardNumber) > 0) {

				var sum = 0, i = numDigits - 1, pos = 1, digit, luhn = new String();
				do {
					digit = parseInt(cardNumber.charAt(i));
					luhn += (pos++ % 2 == 0) ? digit * 2 : digit;
				} while (--i >= 0)

				for (i = 0; i < luhn.length; i++) {
					sum += parseInt(luhn.charAt(i));
				}
				valid = sum % 10 == 0;
			}
			if (!valid) return options.allrules.creditCard.alertText;
		},
		/**
		* Ajax field validation
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return nothing! the ajax validator handles the prompts itself
		*/
		 _ajax: function(field, rules, i, options) {

			 var errorSelector = rules[i + 1];
			 var rule = options.allrules[errorSelector];
			 var extraData = rule.extraData;
			 var extraDataDynamic = rule.extraDataDynamic;
			 var data = {
				"fieldId" : field.attr("id"),
				"fieldValue" : field.val()
			 };

			 if (typeof extraData === "object") {
				$.extend(data, extraData);
			 } else if (typeof extraData === "string") {
				var tempData = extraData.split("&");
				for(var i = 0; i < tempData.length; i++) {
					var values = tempData[i].split("=");
					if (values[0] && values[0]) {
						data[values[0]] = values[1];
					}
				}
			 }

			 if (extraDataDynamic) {
				 var tmpData = [];
				 var domIds = String(extraDataDynamic).split(",");
				 for (var i = 0; i < domIds.length; i++) {
					 var id = domIds[i];
					 if ($(id).length) {
						 var inputValue = field.closest("form, .validationEngineContainer").find(id).val();
						 var keyValue = id.replace('#', '') + '=' + escape(inputValue);
						 data[id.replace('#', '')] = inputValue;
					 }
				 }
			 }
			 
			 // If a field change event triggered this we want to clear the cache for this ID
			 if (options.eventTrigger == "field") {
				delete(options.ajaxValidCache[field.attr("id")]);
			 }

			 // If there is an error or if the the field is already validated, do not re-execute AJAX
			 if (!options.isError && !methods._checkAjaxFieldStatus(field.attr("id"), options)) {
				 $.ajax({
					 type: options.ajaxFormValidationMethod,
					 url: rule.url,
					 cache: false,
					 dataType: "json",
					 data: data,
					 field: field,
					 rule: rule,
					 methods: methods,
					 options: options,
					 beforeSend: function() {},
					 error: function(data, transport) {
						 methods._ajaxError(data, transport);
					 },
					 success: function(json) {

						 // asynchronously called on success, data is the json answer from the server
						 var errorFieldId = json[0];
						 //var errorField = $($("#" + errorFieldId)[0]);
						 var errorField = $("#"+ errorFieldId).eq(0);

						 // make sure we found the element
						 if (errorField.length == 1) {
							 var status = json[1];
							 // read the optional msg from the server
							 var msg = json[2];
							 if (!status) {
								 // Houston we got a problem - display an red prompt
								 options.ajaxValidCache[errorFieldId] = false;
								 options.isError = true;

								 // resolve the msg prompt
								 if(msg) {
									 if (options.allrules[msg]) {
										 var txt = options.allrules[msg].alertText;
										 if (txt) {
											msg = txt;
							}
									 }
								 }
								 else
									msg = rule.alertText;

								 if (options.showPrompts) methods._showPrompt(errorField, msg, "", true, options);
							 } else {
								 options.ajaxValidCache[errorFieldId] = true;

								 // resolves the msg prompt
								 if(msg) {
									 if (options.allrules[msg]) {
										 var txt = options.allrules[msg].alertTextOk;
										 if (txt) {
											msg = txt;
							}
									 }
								 }
								 else
								 msg = rule.alertTextOk;

								 if (options.showPrompts) {
									 // see if we should display a green prompt
									 if (msg)
										methods._showPrompt(errorField, msg, "pass", true, options);
									 else
										methods._closePrompt(errorField);
								}
								
								 // If a submit form triggered this, we want to re-submit the form
								 if (options.eventTrigger == "submit")
									field.closest("form").submit();
							 }
						 }
						 errorField.trigger("jqv.field.result", [errorField, options.isError, msg]);
					 }
				 });
				 
				 return rule.alertTextLoad;
			 }
		 },
		/**
		* Common method to handle ajax errors
		*
		* @param {Object} data
		* @param {Object} transport
		*/
		_ajaxError: function(data, transport) {
			if(data.status == 0 && transport == null)
				alert("The page is not served from a server! ajax call failed");
			else if(typeof console != "undefined")
				console.log("Ajax error: " + data.status + " " + transport);
		},
		/**
		* date -> string
		*
		* @param {Object} date
		*/
		_dateToString: function(date) {
			return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
		},
		/**
		* Parses an ISO date
		* @param {String} d
		*/
		_parseDate: function(d) {

			var dateParts = d.split("-");
			if(dateParts==d)
				dateParts = d.split("/");
			if(dateParts==d) {
				dateParts = d.split(".");
				return new Date(dateParts[2], (dateParts[1] - 1), dateParts[0]);
			}
			return new Date(dateParts[0], (dateParts[1] - 1) ,dateParts[2]);
		},
		/**
		* Builds or updates a prompt with the given information
		*
		* @param {jqObject} field
		* @param {String} promptText html text to display type
		* @param {String} type the type of bubble: 'pass' (green), 'load' (black) anything else (red)
		* @param {boolean} ajaxed - use to mark fields than being validated with ajax
		* @param {Map} options user options
		*/
		 _showPrompt: function(field, promptText, type, ajaxed, options, ajaxform) {
		 	//Check if we need to adjust what element to show the prompt on
			if(field.data('jqv-prompt-at') instanceof jQuery ){
				field = field.data('jqv-prompt-at');
			} else if(field.data('jqv-prompt-at')) {
				field = $(field.data('jqv-prompt-at'));
			}

			 var prompt = methods._getPrompt(field);
			 // The ajax submit errors are not see has an error in the form,
			 // When the form errors are returned, the engine see 2 bubbles, but those are ebing closed by the engine at the same time
			 // Because no error was found befor submitting
			 if(ajaxform) prompt = false;
			 // Check that there is indded text
			 if($.trim(promptText)){ 
				 if (prompt)
					methods._updatePrompt(field, prompt, promptText, type, ajaxed, options);
				 else
					methods._buildPrompt(field, promptText, type, ajaxed, options);
			}
		 },
		/**
		* Builds and shades a prompt for the given field.
		*
		* @param {jqObject} field
		* @param {String} promptText html text to display type
		* @param {String} type the type of bubble: 'pass' (green), 'load' (black) anything else (red)
		* @param {boolean} ajaxed - use to mark fields than being validated with ajax
		* @param {Map} options user options
		*/
		_buildPrompt: function(field, promptText, type, ajaxed, options) {

			// create the prompt
			var prompt = $('<div>');
			prompt.addClass(methods._getClassName(field.attr("id")) + "formError");
			// add a class name to identify the parent form of the prompt
			prompt.addClass("parentForm"+methods._getClassName(field.closest('form, .validationEngineContainer').attr("id")));
			prompt.addClass("formError");

			switch (type) {
				case "pass":
					prompt.addClass("greenPopup");
					break;
				case "load":
					prompt.addClass("blackPopup");
					break;
				default:
					/* it has error  */
					//alert("unknown popup type:"+type);
			}
			if (ajaxed)
				prompt.addClass("ajaxed");

			// create the prompt content
			var promptContent = $('<div>').addClass("formErrorContent").html(promptText).appendTo(prompt);

			// determine position type
			var positionType=field.data("promptPosition") || options.promptPosition;

			// create the css arrow pointing at the field
			// note that there is no triangle on max-checkbox and radio
			if (options.showArrow) {
				var arrow = $('<div>').addClass("formErrorArrow");

				//prompt positioning adjustment support. Usage: positionType:Xshift,Yshift (for ex.: bottomLeft:+20 or bottomLeft:-20,+10)
				if (typeof(positionType)=='string') 
				{
					var pos=positionType.indexOf(":");
					if(pos!=-1)
						positionType=positionType.substring(0,pos);
				}

				switch (positionType) {
					case "bottomLeft":
					case "bottomRight":
						prompt.find(".formErrorContent").before(arrow);
						arrow.addClass("formErrorArrowBottom").html('<div class="line1"><!-- --></div><div class="line2"><!-- --></div><div class="line3"><!-- --></div><div class="line4"><!-- --></div><div class="line5"><!-- --></div><div class="line6"><!-- --></div><div class="line7"><!-- --></div><div class="line8"><!-- --></div><div class="line9"><!-- --></div><div class="line10"><!-- --></div>');
						break;
					case "topLeft":
					case "topRight":
						arrow.html('<div class="line10"><!-- --></div><div class="line9"><!-- --></div><div class="line8"><!-- --></div><div class="line7"><!-- --></div><div class="line6"><!-- --></div><div class="line5"><!-- --></div><div class="line4"><!-- --></div><div class="line3"><!-- --></div><div class="line2"><!-- --></div><div class="line1"><!-- --></div>');
						prompt.append(arrow);
						break;
				}
			}
			// Add custom prompt class
			if (options.addPromptClass)
				prompt.addClass(options.addPromptClass);

            // Add custom prompt class defined in element
            var requiredOverride = field.attr('data-required-class');
            if(requiredOverride !== undefined) {
                prompt.addClass(requiredOverride);
            } else {
                if(options.prettySelect) {
                    if($('#' + field.attr('id')).next().is('select')) {
                        var prettyOverrideClass = $('#' + field.attr('id').substr(options.usePrefix.length).substring(options.useSuffix.length)).attr('data-required-class');
                        if(prettyOverrideClass !== undefined) {
                            prompt.addClass(prettyOverrideClass);
                        }
                    }
                }
            }

			prompt.css({
				"opacity": 0
			});
			if(positionType === 'inline') {
				prompt.addClass("inline");
				if(typeof field.attr('data-prompt-target') !== 'undefined' && $('#'+field.attr('data-prompt-target')).length > 0) {
					prompt.appendTo($('#'+field.attr('data-prompt-target')));
				} else {
					field.after(prompt);
				}
			} else {
				field.before(prompt);				
			}
			
			var pos = methods._calculatePosition(field, prompt, options);
			prompt.css({
				'position': positionType === 'inline' ? 'relative' : 'absolute',
				"top": pos.callerTopPosition,
				"left": pos.callerleftPosition,
				"marginTop": pos.marginTopSize,
				"opacity": 0
			}).data("callerField", field);
			

			if (options.autoHidePrompt) {
				setTimeout(function(){
					prompt.animate({
						"opacity": 0
					},function(){
						prompt.closest('.formErrorOuter').remove();
						prompt.remove();
					});
				}, options.autoHideDelay);
			} 
			return prompt.animate({
				"opacity": 0.87
			});
		},
		/**
		* Updates the prompt text field - the field for which the prompt
		* @param {jqObject} field
		* @param {String} promptText html text to display type
		* @param {String} type the type of bubble: 'pass' (green), 'load' (black) anything else (red)
		* @param {boolean} ajaxed - use to mark fields than being validated with ajax
		* @param {Map} options user options
		*/
		_updatePrompt: function(field, prompt, promptText, type, ajaxed, options, noAnimation) {

			if (prompt) {
				if (typeof type !== "undefined") {
					if (type == "pass")
						prompt.addClass("greenPopup");
					else
						prompt.removeClass("greenPopup");

					if (type == "load")
						prompt.addClass("blackPopup");
					else
						prompt.removeClass("blackPopup");
				}
				if (ajaxed)
					prompt.addClass("ajaxed");
				else
					prompt.removeClass("ajaxed");

				prompt.find(".formErrorContent").html(promptText);

				var pos = methods._calculatePosition(field, prompt, options);
				var css = {"top": pos.callerTopPosition,
				"left": pos.callerleftPosition,
				"marginTop": pos.marginTopSize};

				if (noAnimation)
					prompt.css(css);
				else
					prompt.animate(css);
			}
		},
		/**
		* Closes the prompt associated with the given field
		*
		* @param {jqObject}
		*            field
		*/
		 _closePrompt: function(field) {
			 var prompt = methods._getPrompt(field);
			 if (prompt)
				 prompt.fadeTo("fast", 0, function() {
					 prompt.parent('.formErrorOuter').remove();
					 prompt.remove();
				 });
		 },
		 closePrompt: function(field) {
			 return methods._closePrompt(field);
		 },
		/**
		* Returns the error prompt matching the field if any
		*
		* @param {jqObject}
		*            field
		* @return undefined or the error prompt (jqObject)
		*/
		_getPrompt: function(field) {
				var formId = $(field).closest('form, .validationEngineContainer').attr('id');
			var className = methods._getClassName(field.attr("id")) + "formError";
				var match = $("." + methods._escapeExpression(className) + '.parentForm' + methods._getClassName(formId))[0];
			if (match)
			return $(match);
		},
		/**
		  * Returns the escapade classname
		  *
		  * @param {selector}
		  *            className
		  */
		  _escapeExpression: function (selector) {
			  return selector.replace(/([#;&,\.\+\*\~':"\!\^$\[\]\(\)=>\|])/g, "\\$1");
		  },
		/**
		 * returns true if we are in a RTLed document
		 *
		 * @param {jqObject} field
		 */
		isRTL: function(field)
		{
			var $document = $(document);
			var $body = $('body');
			var rtl =
				(field && field.hasClass('rtl')) ||
				(field && (field.attr('dir') || '').toLowerCase()==='rtl') ||
				$document.hasClass('rtl') ||
				($document.attr('dir') || '').toLowerCase()==='rtl' ||
				$body.hasClass('rtl') ||
				($body.attr('dir') || '').toLowerCase()==='rtl';
			return Boolean(rtl);
		},
		/**
		* Calculates prompt position
		*
		* @param {jqObject}
		*            field
		* @param {jqObject}
		*            the prompt
		* @param {Map}
		*            options
		* @return positions
		*/
		_calculatePosition: function (field, promptElmt, options) {

			var promptTopPosition, promptleftPosition, marginTopSize;
			var fieldWidth 	= field.width();
			var fieldLeft 	= field.position().left; 
			var fieldTop 	=  field.position().top;
			var fieldHeight 	=  field.height();	
			var promptHeight = promptElmt.height();


			// is the form contained in an overflown container?
			promptTopPosition = promptleftPosition = 0;
			// compensation for the arrow
			marginTopSize = -promptHeight;
		

			//prompt positioning adjustment support
			//now you can adjust prompt position
			//usage: positionType:Xshift,Yshift
			//for example:
			//   bottomLeft:+20 means bottomLeft position shifted by 20 pixels right horizontally
			//   topRight:20, -15 means topRight position shifted by 20 pixels to right and 15 pixels to top
			//You can use +pixels, - pixels. If no sign is provided than + is default.
			var positionType=field.data("promptPosition") || options.promptPosition;
			var shift1="";
			var shift2="";
			var shiftX=0;
			var shiftY=0;
			if (typeof(positionType)=='string') {
				//do we have any position adjustments ?
				if (positionType.indexOf(":")!=-1) {
					shift1=positionType.substring(positionType.indexOf(":")+1);
					positionType=positionType.substring(0,positionType.indexOf(":"));

					//if any advanced positioning will be needed (percents or something else) - parser should be added here
					//for now we use simple parseInt()

					//do we have second parameter?
					if (shift1.indexOf(",") !=-1) {
						shift2=shift1.substring(shift1.indexOf(",") +1);
						shift1=shift1.substring(0,shift1.indexOf(","));
						shiftY=parseInt(shift2);
						if (isNaN(shiftY)) shiftY=0;
					};

					shiftX=parseInt(shift1);
					if (isNaN(shift1)) shift1=0;

				};
			};

			
			switch (positionType) {
				default:
				case "topRight":
					promptleftPosition +=  fieldLeft + fieldWidth - 30;
					promptTopPosition +=  fieldTop;
					break;

				case "topLeft":
					promptTopPosition +=  fieldTop;
					promptleftPosition += fieldLeft; 
					break;

				case "centerRight":
					promptTopPosition = fieldTop+4;
					marginTopSize = 0;
					promptleftPosition= fieldLeft + field.outerWidth(true)+5;
					break;
				case "centerLeft":
					promptleftPosition = fieldLeft - (promptElmt.width() + 2);
					promptTopPosition = fieldTop+4;
					marginTopSize = 0;
					
					break;

				case "bottomLeft":
					promptTopPosition = fieldTop + field.height() + 5;
					marginTopSize = 0;
					promptleftPosition = fieldLeft;
					break;
				case "bottomRight":
					promptleftPosition = fieldLeft + fieldWidth - 30;
					promptTopPosition =  fieldTop +  field.height() + 5;
					marginTopSize = 0;
					break;
				case "inline":
					promptleftPosition = 0;
					promptTopPosition = 0;
					marginTopSize = 0;
			};

		

			//apply adjusments if any
			promptleftPosition += shiftX;
			promptTopPosition  += shiftY;

			return {
				"callerTopPosition": promptTopPosition + "px",
				"callerleftPosition": promptleftPosition + "px",
				"marginTopSize": marginTopSize + "px"
			};
		},
		/**
		* Saves the user options and variables in the form.data
		*
		* @param {jqObject}
		*            form - the form where the user option should be saved
		* @param {Map}
		*            options - the user options
		* @return the user options (extended from the defaults)
		*/
		 _saveOptions: function(form, options) {

			 // is there a language localisation ?
			 if ($.validationEngineLanguage)
			 var allRules = $.validationEngineLanguage.allRules;
			 else
			 $.error("jQuery.validationEngine rules are not loaded, plz add localization files to the page");
			 // --- Internals DO NOT TOUCH or OVERLOAD ---
			 // validation rules and i18
			 $.validationEngine.defaults.allrules = allRules;

			 var userOptions = $.extend(true,{},$.validationEngine.defaults,options);

			 form.data('jqv', userOptions);
			 return userOptions;
		 },

		 /**
		 * Removes forbidden characters from class name
		 * @param {String} className
		 */
		 _getClassName: function(className) {
			 if(className)
				 return className.replace(/:/g, "_").replace(/\./g, "_");
					  },
		/**
		 * Escape special character for jQuery selector
		 * http://totaldev.com/content/escaping-characters-get-valid-jquery-id
		 * @param {String} selector
		 */
		 _jqSelector: function(str){
			return str.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, '\\$1');
		},
		/**
		* Conditionally required field
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		* user options
		* @return an error string if validation failed
		*/
		_condRequired: function(field, rules, i, options) {
			var idx, dependingField;

			for(idx = (i + 1); idx < rules.length; idx++) {
				dependingField = jQuery("#" + rules[idx]).first();

				/* Use _required for determining wether dependingField has a value.
				 * There is logic there for handling all field types, and default value; so we won't replicate that here
				 * Indicate this special use by setting the last parameter to true so we only validate the dependingField on chackboxes and radio buttons (#462)
				 */
				if (dependingField.length && methods._required(dependingField, ["required"], 0, options, true) == undefined) {
					/* We now know any of the depending fields has a value,
					 * so we can validate this field as per normal required code
					 */
					return methods._required(field, ["required"], 0, options);
				}
			}
		},

	    _submitButtonClick: function(event) {
	        var button = $(this);
	        var form = button.closest('form, .validationEngineContainer');
	        form.data("jqv_submitButton", button.attr("id"));
	    }
		  };

	 /**
	 * Plugin entry point.
	 * You may pass an action as a parameter or a list of options.
	 * if none, the init and attach methods are being called.
	 * Remember: if you pass options, the attached method is NOT called automatically
	 *
	 * @param {String}
	 *            method (optional) action
	 */
	 $.fn.validationEngine = function(method) {

		 var form = $(this);
		 if(!form[0]) return form;  // stop here if the form does not exist

		 if (typeof(method) == 'string' && method.charAt(0) != '_' && methods[method]) {

			 // make sure init is called once
			 if(method != "showPrompt" && method != "hide" && method != "hideAll")
			 methods.init.apply(form);

			 return methods[method].apply(form, Array.prototype.slice.call(arguments, 1));
		 } else if (typeof method == 'object' || !method) {

			 // default constructor with or without arguments
			 methods.init.apply(form, arguments);
			 return methods.attach.apply(form);
		 } else {
			 $.error('Method ' + method + ' does not exist in jQuery.validationEngine');
		 }
	};



	// LEAK GLOBAL OPTIONS
	$.validationEngine= {fieldIdCounter: 0,defaults:{

		// Name of the event triggering field validation
		validationEventTrigger: "blur",
		// Automatically scroll viewport to the first error
		scroll: true,
		// Focus on the first input
		focusFirstField:true,
		// Show prompts, set to false to disable prompts
		showPrompts: true,
       // Should we attempt to validate non-visible input fields contained in the form? (Useful in cases of tabbed containers, e.g. jQuery-UI tabs)
       validateNonVisibleFields: false,
		// Opening box position, possible locations are: topLeft,
		// topRight, bottomLeft, centerRight, bottomRight, inline
		// inline gets inserted after the validated field or into an element specified in data-prompt-target
		promptPosition: "topRight",
		bindMethod:"bind",
		// internal, automatically set to true when it parse a _ajax rule
		inlineAjax: false,
		// if set to true, the form data is sent asynchronously via ajax to the form.action url (get)
		ajaxFormValidation: false,
		// The url to send the submit ajax validation (default to action)
		ajaxFormValidationURL: false,
		// HTTP method used for ajax validation
		ajaxFormValidationMethod: 'get',
		// Ajax form validation callback method: boolean onComplete(form, status, errors, options)
		// retuns false if the form.submit event needs to be canceled.
		onAjaxFormComplete: $.noop,
		// called right before the ajax call, may return false to cancel
		onBeforeAjaxFormValidation: $.noop,
		// Stops form from submitting and execute function assiciated with it
		onValidationComplete: false,

		// Used when you have a form fields too close and the errors messages are on top of other disturbing viewing messages
		doNotShowAllErrosOnSubmit: false,
		// Object where you store custom messages to override the default error messages
		custom_error_messages:{},
		// true if you want to vind the input fields
		binded: true,
		// set to true, when the prompt arrow needs to be displayed
		showArrow: true,
		// did one of the validation fail ? kept global to stop further ajax validations
		isError: false,
		// Limit how many displayed errors a field can have
		maxErrorsPerField: false,
		
		// Caches field validation status, typically only bad status are created.
		// the array is used during ajax form validation to detect issues early and prevent an expensive submit
		ajaxValidCache: {},
		// Auto update prompt position after window resize
		autoPositionUpdate: false,

		InvalidFields: [],
		onFieldSuccess: false,
		onFieldFailure: false,
		onSuccess: false,
		onFailure: false,
		validateAttribute: "class",
		addSuccessCssClassToField: "",
		addFailureCssClassToField: "",
		
		// Auto-hide prompt
		autoHidePrompt: false,
		// Delay before auto-hide
		autoHideDelay: 10000,
		// Fade out duration while hiding the validations
		fadeDuration: 0.3,
	 // Use Prettify select library
	 prettySelect: false,
	 // Add css class on prompt
	 addPromptClass : "",
	 // Custom ID uses prefix
	 usePrefix: "",
	 // Custom ID uses suffix
	 useSuffix: "",
	 // Only show one message per error prompt
	 showOneMessage: false
	}};
	$(function(){$.validationEngine.defaults.promptPosition = methods.isRTL()?'topLeft':"topRight"});
})(jQuery);



﻿
(function($){
    $.fn.validationEngineLanguage = function(){
    };
    $.validationEngineLanguage = {
        newLang: function(){
            $.validationEngineLanguage.allRules = {
                "required": { // Add your regex rules here, you can take telephone as an example
                    "regex": "none",
                    "alertText": "* Este campo es obligatorio",
                    "alertTextCheckboxMultiple": "* Por favor seleccione una opción",
                    "alertTextCheckboxe": "* Este checkbox es obligatorio"
                },
                "requiredInFunction": { 
                    "func": function(field, rules, i, options){
                        return (field.val() == "test") ? true : false;
                    },
                    "alertText": "* Field must equal test"
                },
                "minSize": {
                    "regex": "none",
                    "alertText": "* Mínimo de ",
                    "alertText2": " caracteres autorizados"
                },
				"groupRequired": {
                    "regex": "none",
                    "alertText": "* Debe de rellenar al menos uno de los siguientes campos"
                },
                "maxSize": {
                    "regex": "none",
                    "alertText": "* Máximo de ",
                    "alertText2": " caracteres autorizados"
                },
		        "min": {
                    "regex": "none",
                    "alertText": "* El valor mínimo es "
                },
                "max": {
                    "regex": "none",
                    "alertText": "* El valor máximo es "
                },
		        "past": {
                    "regex": "none",
                    "alertText": "* Fecha anterior a "
                },
                "future": {
                    "regex": "none",
                    "alertText": "* Fecha posterior a "
                },	
                "maxCheckbox": {
                    "regex": "none",
                    "alertText": "* Se ha excedido el número de opciones permitidas"
                },
                "minCheckbox": {
                    "regex": "none",
                    "alertText": "* Por favor seleccione ",
                    "alertText2": " opciones"
                },
                "equals": {
                    "regex": "none",
                    "alertText": "* Los campos no coinciden"
                },
                "creditCard": {
                    "regex": "none",
                    "alertText": "* La tarjeta de crédito no es válida"
                },
                "phone": {
                    // credit: jquery.h5validate.js / orefalo
                    "regex": /^([\+][0-9]{1,3}[ \.\-])?([\(]{1}[0-9]{2,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/,
                    "alertText": "* Número de teléfono inválido"
                },
                "email": {
                    // Shamelessly lifted from Scott Gonzalez via the Bassistance Validation plugin http://projects.scottsplayground.com/email_address_validation/
                    "regex": /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,
                    "alertText": "* Correo inválido"
                },
                "integer": {
                    "regex": /^[\-\+]?\d+$/,
                    "alertText": "* No es un valor entero válido"
                },
                "number": {
                    // Number, including positive, negative, and floating decimal. credit: orefalo
                    "regex": /^[\-\+]?((([0-9]{1,3})([,][0-9]{3})*)|([0-9]+))?([\.]([0-9]+))?$/,
                    "alertText": "* No es un valor decimal válido"
                },
                "date": {
                    "regex": /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/,
                    "alertText": "* Fecha inválida, por favor utilize el formato DD/MM/AAAA"
                },
                "ipv4": {
                	"regex": /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,
                    "alertText": "* Direccion IP inválida"
                },
                "url": {
                    "regex": /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
                    "alertText": "* URL Inválida"
                },
                "onlyNumberSp": {
                    "regex": /^[0-9\ ]+$/,
                    "alertText": "* Sólo números"
                },
                "onlyNumber": {
                    "regex": /^[0-9]+$/,
                    "alertText": "* Sólo números y sin espacios"
                },
                "onlyLetterSp": {
                    "regex": /^[a-zA-Z\ \']+$/,
                    "alertText": "* Sólo letras"
                },
                "onlyLetterNumber": {
                    "regex": /^[0-9a-zA-Z]+$/,
                    "alertText": "* No se permiten caracteres especiales"
                },
				// --- CUSTOM RULES -- Those are specific to the demos, they can be removed or changed to your likings
                "ajaxUserCall": {
                    "url": "ajaxValidateFieldUser",
					// you may want to pass extra data on the ajax call
                    "extraData": "name=eric",
                    "alertTextLoad": "* Cargando, espere por favor",
                    "alertText": "* Este nombre de usuario ya se encuentra usado"
                },
                "ajaxNameCall": {
					// remote json service location
                    "url": "ajaxValidateFieldName",
					// error
                    "alertText": "* Este nombre ya se encuentra usado",
					// if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "* Este nombre está disponible",
					// speaks by itself
                    "alertTextLoad": "* Cargando, espere por favor"
                },
                "validate2fields": {
                    "alertText": "* Por favor entrar HELLO"
                }
            };
            
        }
    };
    $.validationEngineLanguage.newLang();
})(jQuery);


/**
 * Common library
 * Description: 
 *               - Ajax utilities
 *               - Modal utilities
 *               
 * Author: Lucas Vazquez
 * Date create: 9 April 2013              
 */

;var Common = function(){
    
    /**
     * Selector que identifica donde se insertara la respuesta
     * @type String
     */
    this.selector = '';
    
    /**
     * Identifica el contenedor de la modal
     * @type String
     */
    this.modalId = 'modal-site';
    
    /**
     * Determina si se muestra la imagen de carga
     * @type bool
     */
    this.showLoadImg = true;
      
    /**
     * Setea los parametros por defecto
     * @returns {undefined}
     */  
    this.setDefault = function(){
        this.modalId = 'modal-site';
        this.showLoadImg = true;
    };
    
    /**
     * Realiza las peticiones ajax 
     * Extendiendo las funciones ajaxRequestDone, ajaxRequestFail y ajaxRequestAlways se puede definir la tareas 
     * que debe realizar el sistema luego de cada llamada
     * @param {type} url
     * @param {type} params
     * @param {type} selector
     * @param {type} dataType
     */
    this.ajaxRequest = function(url, params, selector, dataType, showLoadImg ){
       
       var me = this;
       if(showLoadImg){
            this.showLoad(selector);
       }
       $.post( url, $.param(params), function(data, textStatus, jqXHR){          
            
            me.selector = selector;
            
            jqXHR.done(function(data, textStatus, jqXHR){
                if(dataType === 'html'){ $(me.selector).html(data); }
                me.ajaxRequestDone(data, textStatus, jqXHR);     
                me.ajaxRequestDone = function(data, textStatus, jqXHR){ }
            });            
            jqXHR.fail(function(data, textStatus, jqXHR){
                me.ajaxRequestFail(data, textStatus, jqXHR);   
                me.ajaxRequestFail = function(data, textStatus, jqXHR){ };
            });
            jqXHR.always(function(data, textStatus, jqXHR){                
                me.ajaxRequestAlways(data, textStatus, jqXHR);    
                me.ajaxRequestAlways = function(data, textStatus, jqXHR){ }; 
            });
            
       },dataType);
    };

    /**
     * Submite el formulario y serializa la información
     * @param string form
     */
    this.submitForm = function(form, selector, dataType ){   
       
        var me = this;
       // this.showLoad(selector);
       
       $.post( form.attr('action'), form.serialize(), function(data, textStatus, jqXHR){          
            
            me.selector = selector;
            
            jqXHR.done(function(data, textStatus, jqXHR){
                if(dataType === 'html'){ $(me.selector).html(data); }
                me.ajaxRequestDone(data, textStatus, jqXHR);     
                me.ajaxRequestDone = function(data, textStatus, jqXHR){ }
            });            
            jqXHR.fail(function(data, textStatus, jqXHR){
                me.ajaxRequestFail(data, textStatus, jqXHR);   
                me.ajaxRequestFail = function(data, textStatus, jqXHR){ };
            });
            jqXHR.always(function(data, textStatus, jqXHR){                
                me.ajaxRequestAlways(data, textStatus, jqXHR);    
                me.ajaxRequestAlways = function(data, textStatus, jqXHR){ }; 
            });
            
       },dataType);       
    };
    
    /**
     * INTERFACE (Esta funciön puede extenderse para realizar tareas puntuales)
     * Implementa la funcionalidad de una peticion ajax exitosa
     * @param {type} data
     * @param {type} textStatus
     * @param {type} jqXHR
     */
    this.ajaxRequestDone = function(data, textStatus, jqXHR){ };
    
    /**
     * INTERFACE (Esta funciön puede extenderse para realizar tareas puntuales)
     * Implementa la funcionalidad luego de una peticion ajax con errores
     * @param {type} data
     * @param {type} textStatus
     * @param {type} jqXHR
     */
    this.ajaxRequestFail = function(data, textStatus, jqXHR){ };
    
    /**
     * INTERFACE (Esta funciön puede extenderse para realizar tareas puntuales)
     * Implementa la funcionalidad que se ejecutara siempre despues de una peticion
     * @param {type} data
     * @param {type} textStatus
     * @param {type} jqXHR
     */
    this.ajaxRequestAlways = function(data, textStatus, jqXHR){ };   
    
    /***************************************************************************************************/
    /************************************* MODAL *******************************************************/
    /***************************************************************************************************/
    
    /**
     * Set el id de la modal
     */
    this.setModalId = function(id){
        this.modalId = id;
    };
    
    /**
     * Retorna el id del contenedor de la modal
     * @returns string
     */
    this.getModalId = function(){
        return this.modalId;
    };
    
    /**
     * Inserta en el body el codigo de la modal
     */
    this.putModalContainer = function(){
        
        var html = '<div id="'+this.modalId+'" style="width:823px !important; margin-left: -413px" class="modal hide fade"></div>';        
        $('body').append(html); 
    };    
    
    /**
     * Define el contenido de la modal
     * @param string html   
     */
    this.setModalContent = function(content){
        $('#'+this.modalId).empty().append(content);
    };
    
    /**
     * Verifica si existe la modal
     * @returns {Boolean}
     */
    this.existModal = function(){
        var foundModal = $('body').find('#'+this.modalId);
        
        if(foundModal.length === 0){  
            return false;
        }
        
        return true;
    };
    
    /**
     * Muestra la modal
     * @param {obj} options
     */
    this.showModal = function(content,options){
        
        if(!this.existModal())
        {   
            this.putModalContainer();
        }
        
        if( content !== null)
        {
            this.setModalContent(content);
        }
        
        $('#'+this.modalId).modal(options);
    };
    
    /**
     * Muestra el icono de carga
     * @param string selector
     */
    this.showLoad = function(selector){        
        $(selector).append(this.getLoadContent(selector));
    };
    
    /**
     * Obtiene el contenedor de carga con la imagen
     * @returns {String}
     */
    this.getLoadContent = function(selector){
        
        var loadContent;
        
        if(selector!== null)
        {
            loadContent = '<div style="position:absolute;top:40%;left:50%;margin:auto"><img src="/img/loader.gif" /></div>'
        } else {
            loadContent = '<div style="background-color:#FFF; width:150px; height:150px; margin:auto; padding-top:80px; text-align:center;"><img src="/img/loader.gif" /></div>';
        }
        
        return loadContent;
    };
    
    /**
     * Oculta el icono de carga
     * @param string selector
     */
    this.hideLoad = function(selector){
        $(selector).html();
    };
    
    /**
     * Setea si se desea mostrar la imagen de carga en las consultas ajax
     * @param bool show
     */
    this.setShowLoadImg = function(show){
        this.showLoadImg = show;
    };
    
    /**
     * Obtiene el parametro showLoadImg
     * @returns bool
     */
    this.getShowLoadImg = function(){
        return this.showLoadImg;
    };

    /**
     * Coloca los errores en el formulario
     * @param {type} $form
     * @param {type} $err
     * @returns {undefined}
     */
    this.putError = function(err){

        $.each(err,function(index, value){            
            $('#'+index).validationEngine('showPrompt', value, 'red','topRight',true);   
        });       
    };
    
    this.block = function(container){
        container.block({ 
                    message: '<img src="/img/loader.gif" />',
                    overlayCSS: {opacity: 0.0 },
                    css: {border: '0px solid #000', width:'',backgroundColor: ''}
        }); 
    };
    
}; var common = new Common();