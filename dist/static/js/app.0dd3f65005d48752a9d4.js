webpackJsonp([1],{"+skl":function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=a("VU/8")({name:"App"},r,!1,function(t){a("m3dP")},null,null).exports,i=a("/ocq"),n={data:()=>({username:"admin",password:"admin"}),methods:{login(){const{username:t,password:e}=this;this.$api.login({username:t,password:e}).then(e=>{e&&(localStorage.setItem("userInfo",JSON.stringify({username:t,token:e.token})),this.$router.push("Main/User"))})}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login"},[a("div",{staticClass:"ivu-row-flex ivu-row-flex-middle ivu-row-flex-center"},[a("div",{staticClass:"ivu-col ivu-col-span-24"},[a("div",[a("div",{staticClass:"dev-sign-main ivu-card ivu-card-dis-hover ivu-card-shadow"},[t._m(0),t._v(" "),a("div",{staticClass:"ivu-card-body"},[a("form",{staticClass:"ivu-form ivu-form-label-top",attrs:{autocomplete:"off"}},[a("div",{staticClass:"ivu-form-item ivu-form-item-required"},[a("label",{staticClass:"ivu-form-item-label"},[t._v("账号")]),t._v(" "),a("div",{staticClass:"ivu-form-item-content"},[a("div",{staticClass:"ivu-input-wrapper ivu-input-wrapper-large ivu-input-type"},[a("i",{staticClass:"ivu-icon ivu-icon-ios-loading ivu-load-loop ivu-input-icon ivu-input-icon-validate"}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"ivu-input ivu-input-large ivu-input-with-prefix",attrs:{autocomplete:"off",spellcheck:"false",type:"text",placeholder:""},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),t._v(" "),t._m(1)])])]),t._v(" "),a("div",{staticClass:"ivu-form-item ivu-form-item-required"},[a("label",{staticClass:"ivu-form-item-label"},[t._v("密码")]),t._v(" "),a("div",{staticClass:"ivu-form-item-content"},[a("div",{staticClass:"ivu-input-wrapper ivu-input-wrapper-large ivu-input-type"},[a("i",{staticClass:"ivu-icon ivu-icon-ios-eye ivu-input-icon ivu-input-icon-normal"}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"ivu-input ivu-input-large ivu-input-with-prefix",attrs:{autocomplete:"off",spellcheck:"false",type:"password",placeholder:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),t._m(2)])])])]),t._v(" "),a("div",{staticClass:"dev-sign-main-aside"},[a("button",{staticClass:"ivu-btn ivu-btn-success ivu-btn-long ivu-btn-large",attrs:{type:"button"},on:{click:t.login}},[a("span",[t._v("登录")])])])])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ivu-card-head"},[e("p",[this._v("登录 导览图管理后台")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"ivu-input-prefix"},[e("i",{staticClass:"ivu-icon ivu-icon-ios-person-outline"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"ivu-input-prefix"},[e("i",{staticClass:"ivu-icon ivu-icon-ios-lock-outline"})])}]};var p=a("VU/8")(n,l,!1,function(t){a("RtY8")},null,null).exports,m={data:()=>({theme1:"light",userInfo:{}}),mounted(){let t=localStorage.getItem("userInfo");t&&(this.userInfo=JSON.parse(t))}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("Header",[a("Menu",{attrs:{mode:"horizontal",theme:t.theme1,"active-name":"1"}},[a("MenuItem",{attrs:{name:"1",to:"/Main/User"}},[a("Icon",{attrs:{type:"ios-people"}}),t._v("用户管理\n      ")],1),t._v(" "),a("MenuItem",{attrs:{name:"2",to:"/Main/School"}},[a("Icon",{attrs:{type:"ios-paper"}}),t._v("内容管理\n      ")],1),t._v(" "),a("Submenu",{attrs:{name:"3"}},[a("template",{slot:"title"},[a("Icon",{attrs:{type:"ios-navigate"}}),t._v("\n          "+t._s(t.userInfo.username)+"\n        ")],1),t._v(" "),a("MenuItem",{attrs:{name:"3-1",to:"/"}},[t._v("退出")])],2)],1)],1),t._v(" "),a("Content",{style:{margin:"0px 2px 0px",padding:"10px 10px",background:"#fff",minHeight:"500px"}},[a("router-view")],1),t._v(" "),a("Footer",[t._v("Footer")])],1)},staticRenderFns:[]};var d=a("VU/8")(m,c,!1,function(t){a("UERK")},null,null).exports,u={data(){return{ruleValidate:{username:[{required:!0,message:"请输入名称",trigger:"blur"}],password:[{required:!0,message:"请填写密码",trigger:"blur"}],phone:[{required:!0,message:"请填写手机号",trigger:"blur"}]},formData:{username:"",phone:"",password:"",_id:""},formState:!1,params:{orderBy:"",pageIndex:1,pageSize:10,keyword:""},tableInfo:{pageIndex:0,pageSize:0,totalCount:0,arrays:[]},tableColumns:[{title:"Id",key:"_id"},{title:"账号",key:"username"},{title:"密码",key:"password"},{title:"手机号",key:"phone"},{title:"更新时间",key:"updateTime"},{title:"操作",key:"action",width:150,align:"center",render:(t,e)=>t("div",[t("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:()=>{this.formData._id=e.row._id,this.formData.username=e.row.username,this.formData.password=e.row.password,this.formData.phone=e.row.phone,this.formState=!0}}},"修改"),t("Poptip",{props:{title:"确定删除吗?",confirm:!0,placement:"left"},on:{"on-ok":()=>{this.remove(e.row._id,e.index)}}},[t("Button",{props:{type:"error",size:"small"}},"删除")])])}]}},mounted(){this.getDataList()},methods:{getDataList(){this.$api.getUser(this.params).then(t=>{t&&(this.tableInfo=t)})},remove(t,e){this.$api.deleteUser({id:t}).then(t=>{t&&(this.tableInfo.arrays.splice(e,1),this.$Message.success("删除成功!"))})},submitForm(t){this.$refs[t].validate(t=>{t&&this.$api.modifyUser(this.formData).then(t=>{t&&(this.$Message.success("提交成功!"),this.formState=!1,this.getDataList())})})},addForm(){this.formState=!0,this.fileArray=[],this.formData={username:"",phone:"",password:"",_id:""}},changePage(t){this.params.pageIndex=t,this.getDataList()},search(t){this.params={orderBy:"",pageIndex:1,pageSize:10,keyword:t.trim()},this.getDataList()},tableSoreChange({column:t,key:e,order:a}){let o="id";"desc"==a&&(o="-id"),this.params.orderBy=o,this.params.pageIndex=1,this.params.pageSize=10,this.getDataList()}}},h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Drawer",{attrs:{title:"新增/修改",width:"720","mask-closable":!0},model:{value:t.formState,callback:function(e){t.formState=e},expression:"formState"}},[a("Form",{ref:"formValidate",attrs:{model:t.formData,rules:t.ruleValidate}},[a("Row",{attrs:{gutter:32}},[a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"账号名称","label-position":"top",prop:"username"}},[a("Input",{attrs:{placeholder:"请输入账号名称"},model:{value:t.formData.username,callback:function(e){t.$set(t.formData,"username",e)},expression:"formData.username"}})],1)],1),t._v(" "),a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"密码","label-position":"top",prop:"password"}},[a("Input",{attrs:{placeholder:"请输入密码"},model:{value:t.formData.password,callback:function(e){t.$set(t.formData,"password",e)},expression:"formData.password"}})],1)],1),t._v(" "),a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"手机号","label-position":"top",prop:"phone"}},[a("Input",{attrs:{placeholder:"请输入手机号"},model:{value:t.formData.phone,callback:function(e){t.$set(t.formData,"phone",e)},expression:"formData.phone"}})],1)],1)],1)],1),t._v(" "),a("div",{staticClass:"demo-drawer-footer"},[a("Button",{staticStyle:{"margin-right":"8px"},on:{click:function(e){t.formState=!1}}},[t._v("取消")]),t._v(" "),a("Button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm("formValidate")}}},[t._v("提交")])],1)],1),t._v(" "),a("Row",{attrs:{gutter:16}},[a("Col",{attrs:{span:"6"}},[a("Button",{attrs:{type:"success",long:""},on:{click:t.addForm}},[t._v("新增")])],1),t._v(" "),a("Col",{attrs:{span:"18"}},[a("Input",{attrs:{search:"","enter-button":"",placeholder:"搜索..."},on:{"on-search":t.search}})],1)],1),t._v(" "),a("br"),t._v(" "),a("Table",{attrs:{border:"",data:t.tableInfo.arrays,columns:t.tableColumns,stripe:""},on:{"on-sort-change":t.tableSoreChange}}),t._v(" "),a("div",{staticStyle:{margin:"10px",overflow:"hidden"}},[a("Page",{attrs:{total:t.tableInfo.totalCount,"page-size":t.params.pageSize},on:{"on-change":t.changePage}})],1)],1)},staticRenderFns:[]},g=a("VU/8")(u,h,!1,null,null,null).exports,f={props:{locationArray:{type:Array,default:()=>[]}},watch:{locationArray(t){this.locationArray=t,t.length&&this.setMarkerEvent(t)}},data:()=>({}),mounted(){this.initMap()},methods:{setMarkerEvent(t){this.mapObj.remove(this.markers);var e=new AMap.Marker({position:t,map:this.mapObj});this.markers.push(e),this.mapObj.setFitView()},initMap(){const t=this;function e(e){e.target.infoWindow.setContent(e.target.content),e.target.infoWindow.open(t.mapObj,e.target.getPosition());var a=e.target.address;!function(e,a,o,r){console.log(e+"-"+a+"-"+o+"-"+r),t.$emit("locationChange",[o,r])}(e.target.city,a,e.target.getPosition().lng,e.target.getPosition().lat)}function a(){t.mapObj.remove(t.markers),t.markers=[]}t.markers=[],t.mapObj=new AMap.Map("mapContainer",{resizeEnable:!0,center:[116.397428,39.90923],zoom:11,keyboardEnable:!1}),t.mapObj.on("click",function(o){var r;r=o.lnglat,new AMap.Geocoder({radius:1e3,extensions:"all"}).getAddress(r,function(o,s){"complete"===o&&"OK"===s.info&&function(o,r){a();var s=o.regeocode.formattedAddress,i=o.regeocode.addressComponent.city||o.regeocode.addressComponent.province,n=new AMap.InfoWindow({offset:new AMap.Pixel(0,-30)}),l=new AMap.Marker({position:r,map:t.mapObj});l.city=i,l.address=s,l.content="选中<<"+s+">>地址!",l.infoWindow=n,l.on("click",e),l.emit("click",{target:l}),t.markers.push(l),t.mapObj.setFitView()}(s,r)})}),AMap.plugin(["AMap.Autocomplete","AMap.PlaceSearch"],function(){var o=new AMap.Autocomplete({city:"北京",input:"keyword"}),r=new AMap.PlaceSearch({city:"北京",map:t.mapObj});AMap.event.addListener(o,"select",function(o){r.search(o.poi.name,function(o,r){var s;"complete"===o&&"OK"===r.info&&(s=r,a(),function(a){for(var o=a,r=new AMap.InfoWindow({offset:new AMap.Pixel(0,-30)}),s=0;s<o.length;s++){var i=new AMap.Marker({position:o[s].location,map:t.mapObj});i.city=o[s].cityname,i.address=o[s].address,i.content="选中<<"+o[s].name+o[s].address+">>为活动地址!",i.infoWindow=r,i.on("click",e),i.emit("click",{target:i}),t.markers.push(i);break}t.mapObj.setFitView()}(s.poiList.pois))})})})}}},v={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"cAmap"},[e("p",[this._v("小提示：地图上单击鼠标即可完成经纬度设置")]),this._v(" "),e("div",{staticStyle:{height:"300px",position:"relative"}},[e("div",{attrs:{id:"mapContainer"}}),this._v(" "),e("div",{attrs:{id:"tip"}},[e("input",{attrs:{type:"text",id:"keyword",name:"keyword",placeholder:"请输入关键字：(选定后搜索)",value:"",onfocus:"this.value=''"}})])]),this._v(" "),e("br")])}]};var y=a("VU/8")(f,v,!1,function(t){a("ijgC")},null,null).exports,D={components:{AMap:y},data(){return{ruleValidate:{name:[{required:!0,message:"请输入名称"}],gaoDeLon:[{required:!0,message:"请填写经度"}],gaoDeLat:[{required:!0,message:"请填写纬度"}]},locationArray:[],formData:{name:"",gaoDeLon:"",gaoDeLat:"",_id:""},formState:!1,params:{orderBy:"",pageIndex:1,pageSize:10,keyword:""},tableInfo:{pageIndex:0,pageSize:0,totalCount:0,arrays:[]},tableColumns:[{title:"Id",key:"_id"},{title:"名称",key:"name"},{title:"经度",key:"gaoDeLon"},{title:"纬度",key:"gaoDeLat"},{title:"更新时间",key:"updateTime"},{title:"操作",key:"action",width:300,align:"center",render:(t,e)=>t("div",[t("Button",{props:{type:"success",size:"small"},style:{marginRight:"5px"},on:{click:()=>{this.$router.push(`Spot/?pid=${e.row._id}`)}}},"管理标注点"),t("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:()=>{this.formData._id=e.row._id,this.formData.name=e.row.name,this.formData.gaoDeLon=e.row.gaoDeLon,this.formData.gaoDeLat=e.row.gaoDeLat,this.locationArray=[e.row.gaoDeLon,e.row.gaoDeLat],this.formState=!0}}},"修改"),t("Poptip",{props:{title:"确定删除吗?",confirm:!0,placement:"left"},on:{"on-ok":()=>{this.remove(e.row._id,e.index)}}},[t("Button",{props:{type:"error",size:"small"}},"删除")])])}]}},mounted(){this.getDataList()},methods:{locationChange(t){console.log("收到：",t),t.length?(this.formData.gaoDeLon=t[0],this.formData.gaoDeLat=t[1]):(this.formData.gaoDeLon="",this.formData.gaoDeLat="")},getDataList(){this.$api.getSchool(this.params).then(t=>{t&&(this.tableInfo=t)})},remove(t,e){this.$api.deleteSchool({id:t}).then(t=>{t&&(this.tableInfo.arrays.splice(e,1),this.$Message.success("删除成功!"))})},submitForm(t){this.$refs[t].validate(t=>{t&&this.$api.modifySchool(this.formData).then(t=>{t&&(this.$Message.success("提交成功!"),this.formState=!1,this.getDataList())})})},addForm(){this.formState=!0,this.locationArray=[],this.formData={gaoDeLon:"",gaoDeLat:"",name:"",_id:""}},changePage(t){this.params.pageIndex=t,this.getDataList()},search(t){this.params={orderBy:"",pageIndex:1,pageSize:10,keyword:t.trim()},this.getDataList()},tableSoreChange({column:t,key:e,order:a}){let o="id";"desc"==a&&(o="-id"),this.params.orderBy=o,this.params.pageIndex=1,this.params.pageSize=10,this.getDataList()}}},w={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Drawer",{attrs:{title:"新增/修改",width:"720","mask-closable":!0},model:{value:t.formState,callback:function(e){t.formState=e},expression:"formState"}},[a("Form",{ref:"formValidate",attrs:{model:t.formData,rules:t.ruleValidate}},[a("Row",{attrs:{gutter:32}},[a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"名称","label-position":"top",prop:"name"}},[a("Input",{attrs:{placeholder:"请输入名称"},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1)],1),t._v(" "),a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"经度","label-position":"top",prop:"gaoDeLon"}},[a("Input",{attrs:{readonly:"",placeholder:"请输入经度"},model:{value:t.formData.gaoDeLon,callback:function(e){t.$set(t.formData,"gaoDeLon",e)},expression:"formData.gaoDeLon"}})],1)],1),t._v(" "),a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"纬度","label-position":"top",prop:"gaoDeLat"}},[a("Input",{attrs:{readonly:"",placeholder:"请输入纬度"},model:{value:t.formData.gaoDeLat,callback:function(e){t.$set(t.formData,"gaoDeLat",e)},expression:"formData.gaoDeLat"}})],1)],1)],1),t._v(" "),a("Row",[a("AMap",{attrs:{"location-array":t.locationArray},on:{locationChange:t.locationChange}})],1)],1),t._v(" "),a("div",{staticClass:"demo-drawer-footer"},[a("Button",{staticStyle:{"margin-right":"8px"},on:{click:function(e){t.formState=!1}}},[t._v("取消")]),t._v(" "),a("Button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm("formValidate")}}},[t._v("提交")])],1)],1),t._v(" "),a("Row",{attrs:{gutter:16}},[a("Col",{attrs:{span:"6"}},[a("Button",{attrs:{type:"success",long:""},on:{click:t.addForm}},[t._v("新增")])],1),t._v(" "),a("Col",{attrs:{span:"18"}},[a("Input",{attrs:{search:"","enter-button":"",placeholder:"搜索..."},on:{"on-search":t.search}})],1)],1),t._v(" "),a("br"),t._v(" "),a("Table",{attrs:{border:"",data:t.tableInfo.arrays,columns:t.tableColumns,stripe:""},on:{"on-sort-change":t.tableSoreChange}}),t._v(" "),a("div",{staticStyle:{margin:"10px",overflow:"hidden"}},[a("Page",{attrs:{total:t.tableInfo.totalCount,"page-size":t.params.pageSize},on:{"on-change":t.changePage}})],1)],1)},staticRenderFns:[]},b=a("VU/8")(D,w,!1,null,null,null).exports,_={components:{AMap:y},data(){return{ruleValidate:{name:[{required:!0,message:"请输入名称"}],distance:[{required:!0,message:"请输入智能播放距离"}],gaoDeLon:[{required:!0,message:"请填写经度"}],gaoDeLat:[{required:!0,message:"请填写纬度"}]},defaultFileList:[],uploadUrl:this.$api.baseUrl+"/common/upload",locationArray:[],formData:{name:"",gaoDeLon:"",gaoDeLat:"",voiceUrl:"",distance:"",_id:""},formState:!1,params:{orderBy:"",pid:0,pageIndex:1,pageSize:10,keyword:""},tableInfo:{pageIndex:0,pageSize:0,totalCount:0,arrays:[]},tableColumns:[{title:"Id",key:"_id"},{title:"名称",key:"name"},{title:"经度",key:"gaoDeLon"},{title:"纬度",key:"gaoDeLat"},{title:"智能播放距离",key:"distance"},{title:"\b音频",key:"voiceUrl",align:"center",width:100,render:(t,e)=>t("div",[t("Button",{props:{type:"success",shape:"circle",icon:"ios-headset"},on:{click:()=>{const t=`<audio autoplay controls>\n                                        <source src="${e.row.voiceUrl}">\n                                          您的浏览器不支持 audio 元素。\n                                      </audio>`;this.$Modal.success({title:e.row.name,content:t})}}})])},{title:"更新时间",key:"updateTime"},{title:"操作",key:"action",width:150,align:"center",render:(t,e)=>t("div",[t("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:()=>{this.formData._id=e.row._id,this.formData.name=e.row.name,this.formData.gaoDeLon=e.row.gaoDeLon,this.formData.gaoDeLat=e.row.gaoDeLat,this.locationArray=[e.row.gaoDeLon,e.row.gaoDeLat],this.formData.distance=e.row.distance,this.formData.voiceUrl=e.row.voiceUrl,this.defaultFileList=[{name:e.row.name+".mp3",url:e.row.voiceUrl}],this.formState=!0}}},"修改"),t("Poptip",{props:{title:"确定删除吗?",confirm:!0,placement:"left"},on:{"on-ok":()=>{this.remove(e.row._id,e.index)}}},[t("Button",{props:{type:"error",size:"small"}},"删除")])])}]}},mounted(){let{pid:t}=this.$router.currentRoute.query;t?(this.params.pid=t,this.getDataList()):(this.$Message.error("请从内容管理点击进入,1s后跳转!"),setTimeout(()=>{this.$router.push("/Main/School")},2e3))},methods:{handleView(t){this.fileName=t},handleRemove(t){},handleSuccess(t,e){t.success&&(e.url=t.data,this.formData.voiceUrl=t.data,this.defaultFileList=[{name:e.name+".mp3",url:t.data}])},handleFormatError(t){this.$Notice.warning({title:"文件格式不正确",desc:t.name+"的文件格式不正确，请选择MP3"})},handleMaxSize(t){this.$Notice.warning({title:"文件大小超出限制",desc:"File  "+t.name+" is too large, no more than 5M."})},handleBeforeUpload:()=>!0,locationChange(t){t.length?(this.formData.gaoDeLon=t[0],this.formData.gaoDeLat=t[1]):(this.formData.gaoDeLon="",this.formData.gaoDeLat="")},getDataList(){this.$api.getSpot(this.params).then(t=>{t&&(this.tableInfo=t)})},remove(t,e){this.$api.deleteSpot({id:t}).then(t=>{t&&(this.tableInfo.arrays.splice(e,1),this.$Message.success("删除成功!"))})},submitForm(t){this.$refs[t].validate(t=>{t&&(this.formData.pid=this.params.pid,this.$api.modifySpot(this.formData).then(t=>{t&&(this.$Message.success("提交成功!"),this.formState=!1,this.getDataList())}))})},addForm(){this.formState=!0,this.locationArray=[],this.formData={name:"",gaoDeLon:"",gaoDeLat:"",voiceUrl:"",distance:"",_id:""}},changePage(t){this.params.pageIndex=t,this.getDataList()},search(t){this.params.orderBy="",this.params.pageIndex=1,this.params.pageSize=10,this.params.keyword=t.trim(),this.getDataList()},tableSoreChange({column:t,key:e,order:a}){let o="id";"desc"==a&&(o="-id"),this.params.orderBy=o,this.params.pageIndex=1,this.params.pageSize=10,this.getDataList()}}},k={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Drawer",{attrs:{title:"新增/修改",width:"720","mask-closable":!0},model:{value:t.formState,callback:function(e){t.formState=e},expression:"formState"}},[a("Form",{ref:"formValidate",attrs:{model:t.formData,rules:t.ruleValidate}},[a("Row",{attrs:{gutter:32}},[a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"名称","label-position":"top",prop:"name"}},[a("Input",{attrs:{placeholder:"请输入名称"},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1)],1),t._v(" "),a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"自动播放距离","label-position":"top",prop:"distance"}},[a("Input",{attrs:{placeholder:"请输入距离"},model:{value:t.formData.distance,callback:function(e){t.$set(t.formData,"distance",e)},expression:"formData.distance"}})],1)],1),t._v(" "),a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"经度","label-position":"top",prop:"gaoDeLon"}},[a("Input",{attrs:{readonly:"",placeholder:"请输入经度"},model:{value:t.formData.gaoDeLon,callback:function(e){t.$set(t.formData,"gaoDeLon",e)},expression:"formData.gaoDeLon"}})],1)],1),t._v(" "),a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"纬度","label-position":"top",prop:"gaoDeLat"}},[a("Input",{attrs:{readonly:"",placeholder:"请输入纬度"},model:{value:t.formData.gaoDeLat,callback:function(e){t.$set(t.formData,"gaoDeLat",e)},expression:"formData.gaoDeLat"}})],1)],1),t._v(" "),a("Col",{attrs:{span:"24"}},[a("Upload",{ref:"upload",attrs:{"default-file-list":t.defaultFileList,"on-success":t.handleSuccess,"on-format-error":t.handleFormatError,"on-exceeded-size":t.handleMaxSize,"before-upload":t.handleBeforeUpload,format:["MP3","mp3"],"max-size":5120,type:"drag",action:t.uploadUrl}},[a("div",{staticStyle:{padding:"20px 0"}},[a("Icon",{staticStyle:{color:"#3399ff"},attrs:{type:"ios-cloud-upload",size:"52"}}),t._v(" "),a("p",[t._v("点击或拖拽文件到这里进行上传")])],1)])],1)],1),t._v(" "),a("Row",[a("AMap",{attrs:{"location-array":t.locationArray},on:{locationChange:t.locationChange}})],1)],1),t._v(" "),a("div",{staticClass:"demo-drawer-footer"},[a("Button",{staticStyle:{"margin-right":"8px"},on:{click:function(e){t.formState=!1}}},[t._v("取消")]),t._v(" "),a("Button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm("formValidate")}}},[t._v("提交")])],1)],1),t._v(" "),a("Row",{attrs:{gutter:16}},[a("Col",{attrs:{span:"6"}},[a("Button",{attrs:{type:"success",long:""},on:{click:t.addForm}},[t._v("新增")])],1),t._v(" "),a("Col",{attrs:{span:"18"}},[a("Input",{attrs:{search:"","enter-button":"",placeholder:"搜索..."},on:{"on-search":t.search}})],1)],1),t._v(" "),a("br"),t._v(" "),a("Table",{attrs:{border:"",data:t.tableInfo.arrays,columns:t.tableColumns,stripe:""},on:{"on-sort-change":t.tableSoreChange}}),t._v(" "),a("div",{staticStyle:{margin:"10px",overflow:"hidden"}},[a("Page",{attrs:{total:t.tableInfo.totalCount,"page-size":t.params.pageSize},on:{"on-change":t.changePage}})],1)],1)},staticRenderFns:[]},S=a("VU/8")(_,k,!1,null,null,null).exports;o.default.use(i.a);var C=new i.a({mode:"hash",routes:[{path:"/",redirect:"/login"},{path:"/login",name:"login",component:p},{path:"/Main",name:"Main",component:d,children:[{path:"User",name:"User",component:g,meta:{title:"用户管理"}},{path:"School",name:"School",component:b,meta:{title:"学校管理"}},{path:"Spot",name:"Spot",component:S,meta:{title:"内容管理"}}]},{path:"*",redirect:"/"}]}),L=a("BTaQ"),I=a.n(L),x=(a("+skl"),a("mtWM")),$=a.n(x);var M=class{checkStatus(t){if(L.Spin.hide(),t&&(200===t.status||304===t.status||400===t.status))return t.data.success?t.data.data||!0:(201==t.data.status&&(localStorage.removeItem("userInfo"),setTimeout(()=>{location.href="/"},2e3)),L.Message.error(t.data.errorMsg),!1);L.Message.error("数据报错,请稍后再试！")}put(t,e){return this.request("put",t,e)}get(t,e){return this.request("get",t,e)}post(t,e){return this.request("post",t,e)}delete(t,e){return this.request("delete",t,e)}request(t,e,a){let o,r=localStorage.getItem("userInfo");return r&&(o=JSON.parse(r).token),L.Spin.show(),a.timestamp=(new Date).getTime(),$()({method:t,url:e,data:a,params:a,timeout:3e4,headers:{"Content-Type":"application/json; charset=UTF-8",token:o}}).then(t=>this.checkStatus(t)).catch(t=>(console.error(t),L.Spin.hide(),L.Message.error("服务器出错了，请稍后再试！"),null))}};const F="http://school.zhuzhida.vip",A={baseUrl:F,login:t=>(new M).post(`${F}/common/login`,t),getUser:t=>(new M).get(`${F}/user/query`,t),modifyUser:t=>(new M).post(`${F}/user/update`,t),deleteUser:t=>(new M).delete(`${F}/user/destroy/${t.id}`,t),getSchool:t=>(new M).get(`${F}/school/query`,t),modifySchool:t=>(new M).post(`${F}/school/update`,t),deleteSchool:t=>(new M).delete(`${F}/school/destroy/${t.id}`,t),getSpot:t=>(new M).get(`${F}/spot/query`,t),modifySpot:t=>(new M).post(`${F}/spot/update`,t),deleteSpot:t=>(new M).delete(`${F}/spot/destroy/${t.id}`,t)};var z={install:function(t){t.prototype.$api=A}};o.default.config.productionTip=!1,o.default.use(I.a),o.default.use(z),new o.default({el:"#app",router:C,components:{App:s},template:"<App/>"})},RtY8:function(t,e){},UERK:function(t,e){},ijgC:function(t,e){},m3dP:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.0dd3f65005d48752a9d4.js.map