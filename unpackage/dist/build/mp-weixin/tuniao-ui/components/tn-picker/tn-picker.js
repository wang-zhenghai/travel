(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["tuniao-ui/components/tn-picker/tn-picker"],{"003d":function(t,e,i){"use strict";var r=i("1038"),s=i.n(r);s.a},1038:function(t,e,i){},"2fcf":function(t,e,i){"use strict";i.r(e);var r=i("52a4"),s=i("ba55");for(var a in s)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return s[t]}))}(a);i("003d");var n=i("f0c5"),h=Object(n["a"])(s["default"],r["b"],r["c"],!1,null,"55361736",null,!1,r["a"],void 0);e["default"]=h.exports},"52a4":function(t,e,i){"use strict";i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return r}));var r={tnPopup:function(){return Promise.all([i.e("common/vendor"),i.e("tuniao-ui/components/tn-popup/tn-popup")]).then(i.bind(null,"3a3d"))}},s=function(){var t=this,e=t.$createElement,i=(t._self._c,t.value&&"region"!==t.mode&&"time"===t.mode&&!t.reset&&t.params.month?t.__map(t.months,(function(e,i){var r=t.__get_orig(e),s=t.formatNumber(e);return{$orig:r,m0:s}})):null),r=t.value&&"region"!==t.mode&&"time"===t.mode&&!t.reset&&t.params.day?t.__map(t.days,(function(e,i){var r=t.__get_orig(e),s=t.formatNumber(e);return{$orig:r,m1:s}})):null,s=t.value&&"region"!==t.mode&&"time"===t.mode&&!t.reset&&t.params.hour?t.__map(t.hours,(function(e,i){var r=t.__get_orig(e),s=t.formatNumber(e);return{$orig:r,m2:s}})):null,a=t.value&&"region"!==t.mode&&"time"===t.mode&&!t.reset&&t.params.minute?t.__map(t.minutes,(function(e,i){var r=t.__get_orig(e),s=t.formatNumber(e);return{$orig:r,m3:s}})):null,n=t.value&&"region"!==t.mode&&"time"===t.mode&&!t.reset&&t.params.second?t.__map(t.seconds,(function(e,i){var r=t.__get_orig(e),s=t.formatNumber(e);return{$orig:r,m4:s}})):null,h=t.value&&"region"!==t.mode&&"time"!==t.mode&&"selector"===t.mode&&!t.reset?t.__map(t.range,(function(e,i){var r=t.__get_orig(e),s=t.getItemValue(e,"selector");return{$orig:r,m5:s}})):null,u=t.value&&"region"!==t.mode&&"time"!==t.mode&&"selector"!==t.mode&&"multiSelector"===t.mode?t.__map(t.range,(function(e,i){var r=t.__get_orig(e),s=t.reset?null:t.__map(e,(function(e,i){var r=t.__get_orig(e),s=t.getItemValue(e,"multiSelector");return{$orig:r,m6:s}}));return{$orig:r,l6:s}})):null;t.$mp.data=Object.assign({},{$root:{l0:i,l1:r,l2:s,l3:a,l4:n,l5:h,l7:u}})},a=[]},"52bb":function(t,e,i){"use strict";var r=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=r(i("448a")),a=r(i("7037")),n=r(i("90cd")),h=r(i("bfad")),u=r(i("8097")),o={name:"tn-picker",props:{value:{type:Boolean,default:!1},title:{type:String,default:""},params:{type:Object,default:function(){return{year:!0,month:!0,day:!0,hour:!1,minute:!1,second:!1,province:!0,city:!0,area:!0,timestamp:!0}}},mode:{type:String,default:"time"},range:{type:Array,default:function(){return[]}},defaultSelector:{type:Array,default:function(){return[0]}},rangeKey:{type:String,default:""},showTimeTag:{type:Boolean,default:!0},startYear:{type:[String,Number],default:1950},endYear:{type:[String,Number],default:2050},defaultTime:{type:String,default:""},defaultRegin:{type:Array,default:function(){return[]}},areaCode:{type:Array,default:function(){return[]}},cancelText:{type:String,default:"取消"},cancelColor:{type:String,default:""},confirmText:{type:String,default:"确认"},confirmColor:{type:String,default:""},safeAreaInsetBottom:{type:Boolean,default:!1},maskCloseable:{type:Boolean,default:!0},zIndex:{type:Number,default:0}},computed:{propsChange:function(){return[this.mode,this.defaultTime,this.startYear,this.endYear,this.defaultRegin,this.areaCode]},regionChange:function(){return[this.province,this.city]},yearAndMonth:function(){return[this.year,this.month]},elZIndex:function(){return this.zIndex?this.zIndex:this.$t.zIndex.popup}},data:function(){return{years:[],months:[],days:[],hours:[],minutes:[],seconds:[],year:0,month:0,day:0,hour:0,minute:0,second:0,reset:!1,startDate:"",endDate:"",valueArr:[],provinces:n.default,citys:h.default[0],areas:u.default[0][0],province:0,city:0,area:0,moving:!1}},watch:{propsChange:function(){var t=this;this.reset=!0,setTimeout((function(){return t.init()}),10)},regionChange:function(){this.citys=h.default[this.province],this.areas=u.default[this.province][this.city]},yearAndMonth:function(){this.params.year&&this.setDays()},value:function(t){var e=this;t&&(this.reset=!0,setTimeout((function(){return e.init()}),10))}},mounted:function(){this.init()},methods:{pickStart:function(){this.moving=!0},pickEnd:function(){this.moving=!1},getItemValue:function(t,e){if(this.mode===e)return"object"===(0,a.default)(t)?t[this.rangeKey]:t},formatNumber:function(t){return this.$t.number.formatNumberAddZero(t)},generateArray:function(t,e){return t=Number(t),e=Number(e),e=e>t?e:t,(0,s.default)(Array(e+1).keys()).slice(t)},getIndex:function(t,e){var i=t.indexOf(e);return~i?i:0},initTimeValue:function(){var t=this.defaultTime.replace(/\-/g,"/");t=t&&-1==t.indexOf("/")?"2021/01/01 ".concat(t):t;var e=null;e=t?new Date(t):new Date,this.year=e.getFullYear(),this.month=e.getMonth()+1,this.day=e.getDate(),this.hour=e.getHours(),this.minute=e.getMinutes(),this.second=e.getSeconds()},init:function(){this.valueArr=[],this.reset=!1,"time"===this.mode?(this.initTimeValue(),this.params.year&&(this.valueArr.push(0),this.setYears()),this.params.month&&(this.valueArr.push(0),this.setMonths()),this.params.day&&(this.valueArr.push(0),this.setDays()),this.params.hour&&(this.valueArr.push(0),this.setHours()),this.params.minute&&(this.valueArr.push(0),this.setMinutes()),this.params.second&&(this.valueArr.push(0),this.setSeconds())):"region"===this.mode?(this.params.province&&(this.valueArr.push(0),this.setProvinces()),this.params.city&&(this.valueArr.push(0),this.setCitys()),this.params.area&&(this.valueArr.push(0),this.setAreas())):"selector"===this.mode?this.valueArr=this.defaultSelector:"multiSelector"===this.mode&&(this.valueArr=this.defaultSelector,this.multiSelectorValue=this.defaultSelector),this.$forceUpdate()},setYears:function(){this.years=this.generateArray(this.startYear,this.endYear),this.valueArr.splice(this.valueArr.length-1,1,this.getIndex(this.years,this.year))},setMonths:function(){this.months=this.generateArray(1,12),this.valueArr.splice(this.valueArr.length-1,1,this.getIndex(this.months,this.month))},setDays:function(){var t=new Date(this.year,this.month,0).getDate();this.days=this.generateArray(1,t);var e=0;e=this.params.year&&this.params.month?2:this.params.month||this.params.year?1:0,this.day>this.days.length&&(this.day=this.days.length),this.valueArr.splice(e,1,this.getIndex(this.days,this.day))},setHours:function(){this.hours=this.generateArray(0,23),this.valueArr.splice(this.valueArr.length-1,1,this.getIndex(this.hours,this.hour))},setMinutes:function(){this.minutes=this.generateArray(0,59),this.valueArr.splice(this.valueArr.length-1,1,this.getIndex(this.minutes,this.minute))},setSeconds:function(){this.seconds=this.generateArray(0,59),this.valueArr.splice(this.valueArr.length-1,1,this.getIndex(this.seconds,this.second))},setProvinces:function(){var t=this;if(this.params.province){var e="",i=!1;this.areaCode.length?(e=this.areaCode[0],i=!0):e=this.defaultRegin.length?this.defaultRegin[0]:0,n.default.map((function(r,s){(i?r.value!=e:r.label!=e)||(t.province=s)})),this.provinces=n.default,this.valueArr.splice(0,1,this.province)}},setCitys:function(){var t=this;if(this.params.city){var e="",i=!1;this.areaCode.length?(e=this.areaCode[1],i=!0):e=this.defaultRegin.length?this.defaultRegin[1]:0,h.default[this.province].map((function(r,s){(i?r.value!=e:r.label!=e)||(t.city=s)})),this.citys=h.default[this.province],this.valueArr.splice(1,1,this.city)}},setAreas:function(){var t=this;if(this.params.area){var e="",i=!1;this.areaCode.length?(e=this.areaCode[2],i=!0):e=this.defaultRegin.length?this.defaultRegin[2]:0,u.default[this.province][this.city].map((function(r,s){(i?r.value!=e:r.label!=e)||(t.area=s)})),this.areas=u.default[this.province][this.city],this.valueArr.splice(2,1,this.area)}},close:function(){this.$emit("input",!1)},change:function(t){this.valueArr=t.detail.value;var e=0;if("time"===this.mode)this.params.year&&(this.year=this.years[this.valueArr[e++]]),this.params.month&&(this.month=this.months[this.valueArr[e++]]),this.params.day&&(this.day=this.days[this.valueArr[e++]]),this.params.hour&&(this.hour=this.hours[this.valueArr[e++]]),this.params.minute&&(this.minute=this.minutes[this.valueArr[e++]]),this.params.second&&(this.second=this.seconds[this.valueArr[e++]]);else if("region"===this.mode){var i=!1,r=!1;if(this.params.province){var s=this.valueArr[e++];this.province!=s&&(this.city=0,this.area=0,i=!0),this.province=s}if(this.params.city&&!i){var a=this.valueArr[e++];this.city!=a&&(this.area=0,r=!0),this.city=a}!this.params.area||i||r||(this.area=this.valueArr[e++]),(i||r)&&(this.valueArr=[this.province,this.city,this.area])}else if("multiSelector"===this.mode){var n=null;this.defaultSelector.map((function(e,i){e!=t.detail.value[i]&&(n=i)})),null!=n&&this.$emit("columnchange",{column:n,index:t.detail.value[n]})}},getResult:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(!this.moving){var e={};"time"===this.mode?(this.params.year&&(e.year=this.formatNumber(this.year||0)),this.params.month&&(e.month=this.formatNumber(this.month||0)),this.params.day&&(e.day=this.formatNumber(this.day||0)),this.params.hour&&(e.hour=this.formatNumber(this.hour||0)),this.params.minute&&(e.minute=this.formatNumber(this.minute||0)),this.params.second&&(e.second=this.formatNumber(this.second||0)),this.params.timestamp&&(e.timestamp=this.getTimestamp())):"region"===this.mode?(this.params.province&&(e.province=n.default[this.province]),this.params.city&&(e.city=h.default[this.province][this.city]),this.params.area&&(e.area=u.default[this.province][this.city][this.area])):("multiSelector"===this.mode||"selector"===this.mode)&&(e=this.valueArr),t&&this.$emit(t,e),this.close()}},getTimestamp:function(){var t=this.year+"/"+this.month+"/"+this.day+" "+this.hour+":"+this.minute+":"+this.second;return new Date(t).getTime()/1e3}}};e.default=o},ba55:function(t,e,i){"use strict";i.r(e);var r=i("52bb"),s=i.n(r);for(var a in r)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(a);e["default"]=s.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'tuniao-ui/components/tn-picker/tn-picker-create-component',
    {
        'tuniao-ui/components/tn-picker/tn-picker-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("2fcf"))
        })
    },
    [['tuniao-ui/components/tn-picker/tn-picker-create-component']]
]);
