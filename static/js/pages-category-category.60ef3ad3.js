(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-category-category"],{"051e":function(t,i,e){"use strict";var n,a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"content"},[e("v-uni-scroll-view",{staticClass:"left-aside",attrs:{"scroll-y":!0}},t._l(t.flist,(function(i){return e("v-uni-view",{key:i.id,staticClass:"f-item b-b",class:{active:i.id===t.currentId},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabtap(i)}}},[t._v(t._s(i.name))])})),1),e("v-uni-scroll-view",{staticClass:"right-aside",attrs:{"scroll-with-animation":!0,"scroll-y":!0,"scroll-top":t.tabScrollTop},on:{scroll:function(i){arguments[0]=i=t.$handleEvent(i),t.asideScroll.apply(void 0,arguments)}}},t._l(t.slist,(function(i){return e("v-uni-view",{key:i.id,staticClass:"s-list",attrs:{id:"main-"+i.id}},[e("v-uni-text",{staticClass:"s-item"},[t._v(t._s(i.name))]),e("v-uni-view",{staticClass:"t-list"},t._l(t.tlist,(function(n){return n.pid===i.id?e("v-uni-view",{key:n.id,staticClass:"t-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToList(i.id,n.id)}}},[e("v-uni-image",{attrs:{src:n.picture}}),e("v-uni-text",[t._v(t._s(n.name))])],1):t._e()})),1)],1)})),1)],1)},s=[];e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return n}))},4510:function(t,i,e){"use strict";var n=e("f6fd"),a=e.n(n);a.a},"461a":function(t,i,e){"use strict";e.r(i);var n=e("051e"),a=e("475c");for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);e("4510");var r,c=e("f0c5"),o=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"fbd71f98",null,!1,n["a"],r);i["default"]=o.exports},"475c":function(t,i,e){"use strict";e.r(i);var n=e("c7fd"),a=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);i["default"]=a.a},"47ce":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.content[data-v-fbd71f98],uni-page-body[data-v-fbd71f98]{height:100%;background-color:#f8f8f8}.content[data-v-fbd71f98]{display:-webkit-box;display:-webkit-flex;display:flex}.left-aside[data-v-fbd71f98]{-webkit-flex-shrink:0;flex-shrink:0;width:%?200?%;height:100%;background-color:#fff}.f-item[data-v-fbd71f98]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:100%;height:%?100?%;font-size:%?28?%;color:#606266;position:relative}.f-item.active[data-v-fbd71f98]{color:#fa436a;background:#f8f8f8}.f-item.active[data-v-fbd71f98]:before{content:"";position:absolute;left:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);height:%?36?%;width:%?8?%;background-color:#fa436a;border-radius:0 4px 4px 0;opacity:.8}.right-aside[data-v-fbd71f98]{-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:hidden;padding-left:%?20?%}.s-item[data-v-fbd71f98]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?70?%;padding-top:%?8?%;font-size:%?28?%;color:#303133}.t-list[data-v-fbd71f98]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;width:100%;background:#fff;padding-top:%?12?%}.t-list[data-v-fbd71f98]:after{content:"";-webkit-box-flex:99;-webkit-flex:99;flex:99;height:0}.t-item[data-v-fbd71f98]{-webkit-flex-shrink:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;width:%?176?%;font-size:%?26?%;color:#666;padding-bottom:%?20?%}.t-item uni-image[data-v-fbd71f98]{width:%?140?%;height:%?140?%}body.?%PAGE?%[data-v-fbd71f98]{background-color:#f8f8f8}',""]),t.exports=i},c7fd:function(t,i,e){"use strict";var n=e("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("20d6"),e("ac6a"),e("96cf");var a=n(e("3b8d")),s={data:function(){return{sizeCalcState:!1,tabScrollTop:0,currentId:1,flist:[],slist:[],tlist:[]}},onLoad:function(){this.loadData()},methods:{loadData:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(){var i,e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.json("cateList");case 2:i=t.sent,i.forEach((function(t){t.pid?t.picture?e.tlist.push(t):e.slist.push(t):e.flist.push(t)}));case 4:case"end":return t.stop()}}),t,this)})));function i(){return t.apply(this,arguments)}return i}(),tabtap:function(t){this.sizeCalcState||this.calcSize(),this.currentId=t.id;var i=this.slist.findIndex((function(i){return i.pid===t.id}));this.tabScrollTop=this.slist[i].top},asideScroll:function(t){this.sizeCalcState||this.calcSize();var i=t.detail.scrollTop,e=this.slist.filter((function(t){return t.top<=i})).reverse();e.length>0&&(this.currentId=e[0].pid)},calcSize:function(){var t=0;this.slist.forEach((function(i){var e=uni.createSelectorQuery().select("#main-"+i.id);e.fields({size:!0},(function(e){i.top=t,t+=e.height,i.bottom=t})).exec()})),this.sizeCalcState=!0},navToList:function(t,i){uni.navigateTo({url:"/pages/product/list?fid=".concat(this.currentId,"&sid=").concat(t,"&tid=").concat(i)})}}};i.default=s},f6fd:function(t,i,e){var n=e("47ce");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("b918f368",n,!0,{sourceMap:!1,shadowMode:!1})}}]);