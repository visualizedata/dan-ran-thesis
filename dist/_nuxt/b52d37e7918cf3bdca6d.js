(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{285:function(t,e,n){var content=n(289);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("012d3fcd",content,!0,{sourceMap:!1})},286:function(t,e,n){"use strict";n(294);var r=n(295),o=n.n(r),c={name:"Map",props:{currentStep:{type:Number,require:!1},chapterData:{type:Array,require:!1},currentYear:{type:String,requre:!1},mapStyle:{type:String,requre:!0}},data:function(){return{msg:"my map box",layer:"",showMap:"hidden",map:{},accessToken:"pk.eyJ1IjoicmFuZGFuZngiLCJhIjoiY2pwaXdqeHU1MDBtNTNxdGU5bmthMGw0YyJ9.XUsxpyY7bNWN0XUzrpAtxg"}},created:function(){},watch:{currentStep:function(t,e){0==this.currentStep?this.map.flyTo(this.chapterData[0].location):1==this.currentStep?(this.map.flyTo(this.chapterData[1].location),this.map.setPaintProperty("mapbox-satellite","raster-opacity",1),this.map.setPaintProperty("shenzhenDistrictsFills","fill-opacity",0),this.map.setPaintProperty("mapbox-satellite","raster-brightness-max",1)):2==this.currentStep?(this.map.flyTo(this.chapterData[2].location),this.map.setPaintProperty("mapbox-satellite","raster-opacity",0),this.map.setPaintProperty("mapbox-satellite","raster-saturation",0),this.map.setPaintProperty("shenzhen1979","raster-opacity",0),this.map.setPaintProperty("shenzhenDistrictsFills","fill-opacity",1)):3==this.currentStep?(this.map.setPaintProperty("mapbox-satellite","raster-opacity",1),this.map.setPaintProperty("mapbox-satellite","raster-saturation",-1),this.map.setPaintProperty("mapbox-satellite","raster-brightness-max",.5),this.map.flyTo(this.chapterData[3].location),this.map.setPaintProperty("shenzhen1979","raster-opacity",1),this.map.setPaintProperty("shenzhen1988","raster-opacity",0)):4==this.currentStep?(this.map.setPaintProperty("shenzhen1988","raster-opacity",1),this.map.setPaintProperty("shenzhen1999","raster-opacity",0)):5==this.currentStep?(this.map.setPaintProperty("shenzhen1999","raster-opacity",1),this.map.setPaintProperty("shenzhen2010","raster-opacity",0)):6==this.currentStep?(this.map.setPaintProperty("shenzhen2010","raster-opacity",1),this.map.setPaintProperty("shenzhen2019","raster-opacity",0)):7==this.currentStep&&this.map.setPaintProperty("shenzhen2019","raster-opacity",1)}},mounted:function(){o.a.accessToken=this.accessToken,this.map=new o.a.Map({container:"map",style:this.mapStyle,scrollZoom:!1,attributionControl:!1,fadeDuration:1e3});var map=this.map;map.on("load",(function(){map.getLayer("HospitalDots")}))},methods:{createMap:function(){o.a.accessToken=this.accessToken,this.map=new o.a.Map({container:"map",style:this.mapStyle})}}},h=(n(296),n(288),n(27)),component=Object(h.a)(c,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{attrs:{id:"map"}})])}],!1,null,"1a7d75dc",null);e.a=component.exports},288:function(t,e,n){"use strict";var r=n(285);n.n(r).a},289:function(t,e,n){(e=n(40)(!1)).push([t.i,".textCheck[data-v-1a7d75dc]{position:fixed;z-index:1;color:#fff}#map[data-v-1a7d75dc]{z-index:-1;position:fixed;top:0;width:100%;height:100vh}",""]),t.exports=e},293:function(t,e,n){var content=n(310);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("6759f5ab",content,!0,{sourceMap:!1})},309:function(t,e,n){"use strict";var r=n(293);n.n(r).a},310:function(t,e,n){(e=n(40)(!1)).push([t.i,'.container{margin:0 auto;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.titleContainer{margin-bottom:-20px;padding-bottom:0}.chtitle{font-family:"Noto Serif JP",Ma Shan Zheng,serif;font-weight:500;font-size:100px;letter-spacing:10px;word-spacing:10px}.chtitle,.title{display:inline-block;color:#fcfcfc}.title{font-weight:400;font-size:80px;letter-spacing:5px}.subtitle,.title{font-family:Noto Sans JP,sans-serif}.subtitle{font-weight:200;font-size:35px;color:#ececec;word-spacing:10px;padding-bottom:15px}.links{padding-top:15px}',""]),t.exports=e},312:function(t,e,n){"use strict";n.r(e);var r={components:{Map:n(286).a}},o=(n(309),n(27)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Map",{attrs:{mapStyle:"mapbox://styles/randanfx/ck99glwc30uwk1ipbue3ie1hb"}}),t._v(" "),n("div",{staticClass:"container"},[n("div",[t._m(0),t._v(" "),n("h2",{staticClass:"subtitle"},[t._v("\n        the growth and livability of a mega city.\n      ")]),t._v(" "),n("div",{staticClass:"links"},[n("nuxt-link",{staticClass:"button--grey",attrs:{to:"/shenzhenstory"}},[t._v("start")]),t._v(" "),n("a",{staticClass:"button--grey",attrs:{href:"https://github.com/shuvitRan/msdv-thesis",target:"_blank"}},[t._v("\n          documentation\n        ")])],1)])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"titleContainer"},[e("h1",{staticClass:"chtitle"},[this._v("\n          深圳\n        ")]),this._v(" "),e("h1",{staticClass:"title"},[this._v("SHENZHEN")])])}],!1,null,null,null);e.default=component.exports}}]);