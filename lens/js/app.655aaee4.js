webpackJsonp([3],{0:function(e,t,n){e.exports=n("NHnr")},"34jS":function(e,t,n){"use strict";var a={data:function(){return{baseUrl:"/",language:this.$store.getters.getLanguage,lansDrop:this.$t("languageDrop")}},computed:{list:function(){return this.$t("home.list")},chooseLanguage:function(){var e=this,t=0;return this.lansDrop.forEach(function(n,a){n.key===e.language&&(t=a)}),this.lansDrop[t].name},path:function(){return this.$store.getters.getPath}},methods:{switchLang:function(e){this.language!==e&&(localStorage.setItem("MUSICLENS_LANGUAGE",e),localStorage.setItem("MUSICLENS_SCROLL",window.scrollY),""===this.path?this.$router.push("/".concat(e).concat(this.$route.path)):this.$router.push(this.$route.path.replace(this.language,e)),this.$store.dispatch({type:"setPath",path:"/".concat(e)}))}},mounted:function(){}},o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",[a("section",{staticClass:"logo"},[a("router-link",{attrs:{to:{path:e.path+"/"}}},[a("img",{attrs:{src:""+e.baseUrl+e.language+"/logo.png",alt:"logo"}})])],1),a("ul",{staticClass:"menu"},e._l(e.list,function(t){return a("li",{key:t.name},[a("router-link",{attrs:{to:{path:e.path+t.path},exact:""}},[e._v(e._s(t.name))])],1)})),a("div",{staticClass:"select-language"},[a("p",{directives:[{name:"popover",rawName:"v-popover:popover",arg:"popover"}],staticClass:"drop"},[a("img",{attrs:{src:n("sqhW"),alt:""}}),a("span",[e._v(e._s(e.chooseLanguage))]),a("i",{staticClass:"el-icon-caret-bottom"})]),a("el-popover",{ref:"popover",attrs:{placement:"bottom",width:"100",trigger:"hover"}},[a("section",{staticClass:"language-list"},e._l(e.lansDrop,function(t){return a("a",{key:t.key,class:[t.key===e.language?"active":""],on:{click:function(n){e.switchLang(t.key)}}},[e._v("\n          "+e._s(t.name)+"\n        ")])}))])],1)])},i=[],s=n("XyMi");function c(e){n("3k+o"),n("ZdvU")}var r=!1,l=c,p="data-v-7d8da9b2",u=null,m=Object(s["a"])(a,o,i,r,l,p,u);t["a"]=m.exports},"3k+o":function(e,t){},G3BA:function(e,t){},G8R2:function(e,t){e.exports={zh:[{name:"首页",path:"/",component:"Home"},{name:"产品",path:"/product",component:"Product"},{name:"产品2",path:"/product",component:"Product",children:[{name:"产品总览",path:"/product/overview"},{name:"材质造型",path:"/product/style"},{name:"创新科技",path:"/product/innovation"},{name:"安全性能",path:"/product/safe"},{name:"服务礼遇",path:"/product/service"},{name:"使用场景",path:"/product/usage"},{name:"常见问题",path:"/product/faq"}]},{name:"购买",path:"/Purchase",component:"Buy"},{name:"新闻",path:"/news",component:"News"},{name:"关于",path:"/about",component:"About"},{name:"常见问题",path:"/faq",component:"Problem"}],en:[{name:"Home",path:"/",component:"Home"},{name:"Product",path:"/product",component:"Product"},{name:"Product2",path:"/product",component:"Product",children:[{name:"overview",path:"/product/overview"},{name:"Material & Style",path:"/product/style"},{name:"Innovation",path:"/product/innovation"},{name:"Safety Performance",path:"/product/safe"},{name:"Service & Gift",path:"/product/service"},{name:"Usage Scene",path:"/product/usage"},{name:"FAQ",path:"/product/faq"}]},{name:"Buy",path:"/Purchase",component:"Buy"},{name:"News",path:"/news",component:"News"},{name:"About",path:"/about",component:"About"},{name:"FAQ",path:"/faq",component:"Problem"}],ja:[{name:"ホーム",path:"/",component:"Home"},{name:"商品",path:"/product",component:"Product"},{name:"商品2",path:"/product",component:"Product",children:[{name:"概要",path:"/product/overview"},{name:"材料形状",path:"/product/style"},{name:"イノベーションとテクノロジー",path:"/product/innovation"},{name:"安全性能ja",path:"/product/safe"},{name:"サービスの礼儀",path:"/product/service"},{name:"シーンを使用する",path:"/product/usage"},{name:"よくある質問",path:"/product/faq"}]},{name:"購入",path:"/Purchase",component:"Buy"},{name:"ニュース",path:"/news",component:"News"},{name:"お問い合わせ",path:"/about",component:"About"},{name:"よくある質問",path:"/faq",component:"Problem"}]}},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("/5sW"),o=n("/ocq"),i=(n("34jS"),{mounted:function(){var e=this;setTimeout(function(){var t=e.$store.getters.getLanList,n=localStorage.getItem("MUSICLENS_LANGUAGE"),a=e.$route.path.split("/")[1];a=-1===t.indexOf(a)?"":"/".concat(n),e.$store.dispatch({type:"setPath",path:a})},300),document.querySelector(".body-loading").style.display="none"}}),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},c=[],r=n("XyMi");function l(e){n("G3BA")}var p=!1,u=l,m=null,g=null,h=Object(r["a"])(i,s,c,p,u,m,g),d=h.exports,_=n("gMJO"),f=n.n(_),b=n("G8R2"),v=n.n(b);function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){k(e,t,n[t])})}return e}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w={zh:function(e){return function(t){return n.e(0).then(function(){return t(n("PwA5")("./".concat(e,".vue")))}.bind(null,n)).catch(n.oe)}},en:function(e){return function(t){return n.e(0).then(function(){return t(n("7fGs")("./".concat(e,".vue")))}.bind(null,n)).catch(n.oe)}},ja:function(e){return function(t){return n.e(1).then(function(){return t(n("P84+")("./".concat(e,".vue")))}.bind(null,n)).catch(n.oe)}}},M=function(e,t){return w[e](t)},L=function(e){var t=[];function n(e,n,a){var o={path:e.path.slice(1),meta:{title:e.title||e.name,description:e.description,lang:n},name:e.name,component:M(n,e.component)};t[a].children.push(o)}return Object.keys(e).forEach(function(a,o){var i=e[a];t.push({path:"/".concat(a),redirect:"/",component:M(a,"Index"),children:[]}),i.forEach(function(e){n(e,a,o)})}),t},A=L(v.a),S=localStorage.getItem("MUSICLENS_LANGUAGE")||"zh",P=0;f.a.forEach(function(e,t){e.lang===S&&(P=t)}),S=f.a[P].lang;var I=y({},A[P]);I.path="";var C=I.children.map(function(e,t){var n=Object.assign({},e);return n.name=n.name+"default",n});localStorage.setItem("MUSICLENS_LANGUAGE",S),I.children=C,A.unshift(I);var E=A,N=n("NYxO");a["default"].use(N["a"]);var U=new N["a"].Store({state:{language:"",lanList:["zh","en","ja"],path:"/"},getters:{getLanguage:function(e){return e.language},getLanList:function(e){return e.lanList},getPath:function(e){return e.path}},mutations:{LANGUAGE_CHANGE:function(e,t){e.language=t.language},PATH_CHANGE:function(e,t){e.path=t.path}},actions:{setLanguage:function(e,t){var n=e.commit;n("LANGUAGE_CHANGE",t)},setPath:function(e,t){var n=e.commit;n("PATH_CHANGE",t)}}}),q=n("zL8q"),x=n.n(q),O=n("TXmL"),G={home:{list:[{name:"首页",path:"/"},{name:"产品",path:"/product"},{name:"购买",path:"/purchase"},{name:"常见问题",path:"/faq"},{name:"新闻",path:"/news"},{name:"关于",path:"/about"}],options:{glassList:[{name:"VOGUE 时尚款",des:"时尚款将根据季节与潮流需要，快速更替造型。98%屏蔽紫外线与红外辐射，让您在享受科技的同时保持时尚与健康。",colorIndex:0,colorList:[{name:"index_p1.png",color:"rgb(51, 51, 51)"},{name:"index_p2.png",color:"rgb(67, 202, 153)"},{name:"index_p3.png",color:"rgb(255, 142, 179)"},{name:"index_p4.png",color:"rgb(255, 212, 41)"}]},{name:"GEEK 极客款",des:"极简造型结合超轻框架，重量仅有25g，与普通近视镜造型无异。日常工作生活中也能让你享受音乐、耳听四方。",colorIndex:0,colorList:[{tips:"固定为黑色",name:"index_p6.png",color:"rgb(51, 51, 51)"}]}],productSpecial:{title:"产品特色",list:[{img:"s1.png",name:"骨传导听声",des:"鉴赏级音质，享受音乐不伤耳膜"},{img:"s2.png",name:"智能触控",des:"智能感应镜架，一指灵活触控"},{img:"s3.png",name:"收听电台",des:"独立于手机，可直接使用眼镜收听电台"},{img:"s4.png",name:"拨打电话",des:"高级通话质量接打电话"}]},moreDetail:{title:"更多细节",list:[{name:"蓝牙连接",des:"连接蓝牙播放音乐、接听电话、回拨电话、打开APP等",img:"m1.png"},{name:"智能佩戴识别",des:"智能感应人脸佩戴，若摘下眼镜则自动暂停音乐或电台，戴上则恢复播放",img:"m2.png"},{name:"专利消减漏音",des:"远超同类骨传导听声体验。如同耳机一般，其他人听不到你播放的音乐或声音",img:"m3.png"},{name:"电池续航与充电时间",des:"可连续使用7～9小时充满电时间为半小时～1小时",img:"m4.png"},{name:"防水防尘",des:"IP54：防止有害灰尘进入、防止从各方向滴落的水花对机体产生影响",img:"m5.png"},{name:"佩戴安全、供应链环保",des:"严选无害材料，并保证供应链无污染。符合美、欧、日、中地区的质检标准",img:"m6.png"},{name:"送免费音乐会员",des:"购买乐透®音乐眼镜即可获赠echo回声音乐APP会员，免费享受潮流音乐",img:"m7.png"},{name:"提供近视配镜服务",des:"我们提供覆盖全球的近视配镜服务网络超低价即可在线配制近视镜片",img:"m8.png",className:"glass"}]}},exhibition:[{title:"视频",list:[{name:"Official Introduction Video (shot by Prototype)",date:"March 17-2018",img:"video1.png",imgPic:"video1-m.png",video:"https://qn-qn-kibey-static-cdn.app-echo.com/musiclens/video/musiclens_video4.mp4"},{name:"Onsite Interview: 2018 Sónar Music Festival @Hong Kong, China",date:"March 17-2018",img:"video2.png",imgPic:"video2-m.png",video:"https://qn-qn-kibey-static-cdn.app-echo.com/musiclens/video/musiclens_video1.mp4"},{name:"Onsite Interview: 2018 Consumer Electronics Show @Las Vegas, United States",date:"March 14-2018",img:"video3.png",imgPic:"video3-m.png",video:"https://qn-qn-kibey-static-cdn.app-echo.com/musiclens/video/musiclens_video2.mp4"},{name:"Introduction to MusicLens: First Glance of Innovative Shades",date:"March 9-2018",img:"video4.png",imgPic:"video4-m.png",video:"https://qn-qn-kibey-static-cdn.app-echo.com/musiclens/video/musiclens_video1.mp4"}]},{title:"图片",lens:21}]},languageDrop:[{name:"中文",key:"zh"},{name:"English",key:"en"},{name:"日本語",key:"ja"}],about:{title:"关于乐透®音乐眼镜",des:["MusicLens™乐透®音乐眼镜是智能听觉与潮流视觉的结合，通过高品质骨传导听声技术，戴上眼镜即可收听音乐、电台、接打电话。","如同耳机一般，其他人听不到你播放的音乐或声音。无需在耳内放置任何扬声器，长期佩戴也不会伤害耳膜或引起耳部疼痛。既保护耳膜，又能享受高品质的听觉体验。","潮流前卫的墨镜造型，让你同时享受科技与时尚。无论你身处何地，都能享受音乐带来的全部乐趣，在不动声色间成为众人关注的焦点。"],more:"进一步了解产品"},footer:{contact:"联系我们",contactList:["如有合作请发送邮件，我们将于24小时之内回复。","商务合作: business@kibey.com","销售咨询: sales@kibey.com  "],iconList:[{icon:"icon-ins.png",href:"https://www.instagram.com/musiclens_official"},{icon:"icon-facebook.png",href:"https://www.facebook.com/Musiclens-360031024460561/?modal=admin_todo_tour"},{icon:"icon-tw.png",href:"https://twitter.com/music_lens"},{icon:"icon-weibo.png",href:"https://weibo.com/u/6396554976?topnav=1&wvr=6&topsug=1"}],phone:"+86 400-820-1791",phoneTips:"24小时客服（中英文）",copyright:"© 2018 MusicLens Inc. (美国, 加州) 保留一切权利"},product:{nav:[{name:"产品总览",className:"introduce",type:"no-list"},{name:"材质造型",className:"modeling",type:"list",list:[{front:"1_material_1_front.png",back:"1_material_1_back.png"},{front:"1_material_2_front.png",back:"1_material_2_back.png"},{front:"1_material_3_front.png",back:"1_material_3_back.png"},{front:"1_material_4_front.png",back:"1_material_4_back.png"},{front:"1_material_5_front.png",back:"1_material_5_back.png"}]},{name:"创新科技",className:"create",type:"list",list:[{front:"2_tech_1_front.png",back:"2_tech_1_back.png"},{front:"2_tech_2_front.png",back:"2_tech_2_back.png"},{front:"2_tech_3_front.png",back:"2_tech_3_back.png"},{front:"2_tech_4_front.png",back:"2_tech_4_back.png"},{front:"2_tech_5_front.png",back:"2_tech_5_back.png"},{front:"2_tech_6_front.png",back:"2_tech_6_back.png"},{front:"2_tech_7_front.png",back:"2_tech_7_back.png"}]},{name:"安全性能",className:"safe",type:"list",list:[{front:"3_perform_1_front.png",back:"3_perform_1_back.png"},{front:"3_perform_2_front.png",back:"3_perform_2_back.png"},{front:"3_perform_3_front.png",back:"3_perform_3_back.png"},{front:"3_perform_4_front.png",back:"3_perform_4_back.png"}]},{name:"服务礼遇",className:"service",type:"list",list:[{front:"4_gift_1_front.png",back:"4_gift_1_back.png"},{front:"4_gift_2_front.png",back:"4_gift_2_back.png"},{front:"4_gift_3_front.png",back:"4_gift_3_back.png"}]},{name:"使用场景",className:"use",type:"list",list:[{front:"5_scene_1_front.png",back:"5_scene_1_back.png"},{front:"5_scene_2_front.png",back:"5_scene_2_back.png"},{front:"5_scene_3_front.png",back:"5_scene_3_back.png"},{front:"5_scene_4_front.png",back:"5_scene_4_back.png"},{front:"5_scene_5_front.png",back:"5_scene_5_back.png"}]}]},problem:{title:"常见问题",list:[{title:"乐透音乐眼镜有哪些款式和颜色？",value:"乐透共有2种款式，一种为墨镜(时尚款)，一种为光学镜(极客款)。时尚款墨镜分为男款与女款，男款有黑色、绿色；女款有红色、黄色。每种款式的镜片都各具特色，方便适用于日常生活的各类场景。"},{title:"乐透音乐眼镜会有更多款式吗？",value:"乐透致力于推出设计感十足、外形个性化、时尚且美观的音乐眼镜。我们会尽快推出更多符合多种脸型的设计款式，并保持定期更新。"},{title:"乐透音乐眼镜的镜片有哪些护眼功能？",value:"乐透的墨镜镜片能阻挡98%的紫外线、红外辐射，并且支持选配蓝光、夜视变色多功能镜片。所有的镜片均可抗冲击、抗反射、防划伤，并经过美国FDA落球测试，保证强烈撞击不会碎裂。"},{title:"购买乐透时，我能直接订制矫正视力的光学镜片吗？",value:"是的！您可以在线购买近视、远视、老花等光学镜片。我们提供在线配镜服务，仅需600元即可配镜，并支持全球配送。"},{title:"乐透音乐眼镜安全吗？",value:"乐透通过美国、欧盟、日本和中国四个地区的安全认证，可在全球范围内放心使用。我们选用符合环保标准的生产供应商，包括包装盒在内的所有产品均采用抗敏、安全、环保的材料制造。"},{title:"乐透音乐眼镜的电池能续航多久？",value:"乐透在持续使用状态下可续航7-9小时，在待机状态下续航约48小时。我们将在完成认证后公布准确的电池续航时间，敬请关注官网最新动态。"},{title:"什么是骨传导技术？",value:"骨传导是一种通过皮肤和骨骼传输声音的技术。不同于通过耳膜传导声音的气传导方式，骨传导技术安全无害，不会伤害鼓膜，尤其适合喜爱听音乐和长时间佩戴声音设备的人群。"},{title:"什么是专利消减漏音?",value:"乐透采用独家专利技术，有效解决了大多数骨传导声音设备都存在漏音问题，让乐透在听声时如耳机一般，他人无法听到您听的声音。"},{title:"乐透音乐眼镜的音质如何？",value:"乐透为您提供鉴赏级的音乐品质。它能完美胜任听音乐、听电台和语音通话等多种使用场景。不同于普通耳机，乐透在保证音质的同时不会伤害和刺激您的鼓膜。"},{title:"如何用乐透听音乐？",value:"您只需用蓝牙连接可以播放音乐的智能设备，如手机、电脑等，即可收听设备上的音乐。同时，购买乐透即可获赠echo回声音乐APP一年会员，免费收听、离线该APP上的音乐。echo回声是一款专为年轻人打造的潮流音乐APP，提供新颖的音乐收听与媒体服务，在全球拥有3000万用户。手机访问 www.app-echo.com 或在应用市场搜索“echo回声”下载APP。"},{title:"如何收听FM广播电台？",value:"无需连接手机，在乐透音乐眼镜上按“模式切换键”，即可开启FM广播电台收听功能。点按右侧镜架可切换广播频道。"},{title:"如何接听电话？",value:"通过蓝牙连接手机后，乐透支持手动或自动接听来电，您可以在echo回声App设置接听来电模式。响铃后，点按右侧镜架即可手动接听电话。若设置为自动接听模式，乐透会在5秒内自动接听来电。您也可以通过手机手动接听或拒绝来电。"},{title:"我可以用乐透听导航吗？",value:"可以。通过蓝牙连接手机后，即可收听手机中导航软件的语音指示。任何手机软件播放的声音，都可以通过乐透收听。"},{title:"如何从乐透获得区块链奖励MitCoin？",value:"乐透®音乐眼镜与日本区块链项目MusicLife合作，用户仅需佩戴听歌即可自动获取MitCoin，并可在echo回声App中查看获取的数量。了解更多信息请访问MusicLife官方网站：www.musiclife.io。"},{title:"我可以选择不同的镜片颜色吗？",value:"很遗憾我们暂时还未能提供这一服务。您可以前往眼镜店选配自己喜爱的镜片颜色"},{title:"我所在的国家在配送范围内吗？",value:"是的！我们的配送服务遍及全球。"},{title:"配送费用的金额是？",value:"乐透可免费配送至中国内地、中国香港特区、中国澳门特区和美国。寄往台湾地区、日本、韩国和加拿大的配送费为人民币¥18元。寄往英国、欧洲地区、澳大利亚和新西兰的配送费为人民币¥60元。寄往其他国家和地区的配送费为人民币¥95元。您也可以在乐透的购买页面中查看配送费用。"},{title:"乐透使用什么样的配送服务商？",value:"中国地区将采用顺丰快递，美国地区采用USPS First Class配送，并将跟踪和确认物流信息。全球其他地区配送均将采用国际一流的配送服务商。"},{title:"多久能收到乐透音乐眼镜？",value:"乐透音乐眼镜在2018年8月前皆为预售，将在2018年8月底开始向全球配送首批产品。我们会第一时间告知所有项目支持者准确的装运日期。2018年8月后，您购买的乐透音乐眼镜将在24小时内发货，并在全球于1～7个工作日内收到货品。"},{title:"保修期有多久?",value:"我们将提供最低半年的保修服务。具体保修时间请参考您所在国家的保修服务条款。"},{title:"如果感觉不适合我该怎么办？",value:"乐透的镜框款式大部分是男女通用的。所有款式都经过精心设计，能够很好地适应不同大小的各种脸型。我们使用的独特材料可确保镜架安全贴合人脸。如果您觉得佩戴效果不佳或不合适，可在7天内无理由换货或退货。"},{title:"我可以修改或取消订单吗？",value:"预售阶段仅支持修改订单，不支持取消订单，预售订单可通过到货后退货取消。2018年8月底正式销售开始后，您可以修改或取消您的订单，若不清楚流程，您可以拨打24小时客服电话+86 400-820-1791。"},{title:"如果我不喜欢购买的款式或颜色，可以更换其他款式或颜色吗？",value:"当然可以！您可以在收到产品后的7天内寄回给我们，我们会为您免费更换。若更换的款式存在差价，您可以在线上退补差价。"},{title:"我可以提前免费试戴吗？",value:"很遗憾我们不提供这类服务。您可以在收到产品后的7天内将不想要的款式退还，并将获得对应产品的全额退款。"},{title:"退货政策是怎样的？",value:"你在购买乐透后的7日内（含7日，自客户收到商品之日起计算），在保证乐透眼镜和包装完好的前提下，可无理由退货并获得相应的全额退款。您可以前往购买乐透的店面退货，也可以邮寄退货。若邮寄退货，退货邮费需由您自行承担。若产品被人为破坏损伤，我们将不接受退货。"}]},About:{}},T=G,H={home:{list:[{name:"Home",path:"/"},{name:"Product",path:"/product"},{name:"Purchase",path:"/purchase"},{name:"FAQ",path:"/faq"},{name:"News",path:"/news"},{name:"About",path:"/about"}],options:{glassList:[{name:"VOGUE",des:"VOGUE style changes according to different seasons and fashion trends.98% anti UV and IR, stay fashionable and healthy while enjoy smart technology.",colorIndex:0,colorList:[{name:"index_p1.png",color:"rgb(51, 51, 51)"},{name:"index_p2.png",color:"rgb(67, 202, 153)"},{name:"index_p3.png",color:"rgb(255, 142, 179)"},{name:"index_p4.png",color:"rgb(255, 212, 41)"}]},{name:"GEEK",des:"25g ultralight frame with minimalistic style, it looks the same as normal prescription lenses. You can enjoy music and still being able to hear the world around you.",colorIndex:0,colorList:[{tips:"Black Only",name:"index_p6.png",color:"rgb(51, 51, 51)"}]}],productSpecial:{title:"Product Feature",list:[{img:"s1.png",name:"Listen via Bone Conduction",des:"High quality sound that protects your eardrums"},{img:"s2.png",name:"Smart Touch Control",des:"Equipped with smart sensor, easily controlled by finger touch"},{img:"s3.png",name:"FM Radio",des:"Listen to the radio directly without your phone"},{img:"s4.png",name:"Answer Calls Automatically",des:"Answer calls and transmit high-quality sound"}]},moreDetail:{title:"More Details",list:[{name:"Bluetooth Connection",des:"Connect bluetooth to play music, answer and make phone calls, etc",img:"m1.png"},{name:"Smart Facial Recognition",des:"Identifies wearing status and will pause music when you take it off",img:"m2.png"},{name:"Sound Leak Reduction",des:"just like your earphones, so others can’t hear what you’re listening to",img:"m3.png"},{name:"Water & Dust Resistant",des:"7 ~ 9 hours battery life, 0.5 ~ 1 hour to fully charged",img:"m4.png"},{name:"Battery life & Charging",des:"IP54：Resist water spray and dust from any direction",img:"m5.png"},{name:"Safe & Eco Friendly",des:"100% recyclable packaging from the courier box to the case",img:"m6.png"},{name:"Free Music",des:"Every MusicLens™ buyer gets free membership of echo Music App",img:"m7.png"},{name:"Prescription Lens Service",des:"We can customize your prescription lens worldwide in cost-efficient fare",img:"m8.png",className:"glass"}]}},exhibition:[{title:"Video",list:[{name:"Official Introduction Video (shot by Prototype)",date:"March 17-2018",img:"video1.png",imgPic:"video1-m.png",video:"https://qn-qn-kibey-static-cdn.app-echo.com/musiclens/video/musiclens_video4.mp4"},{name:"Onsite Interview: 2018 Sónar Music Festival @Hong Kong, China",date:"March 17-2018",img:"video2.png",imgPic:"video2-m.png",video:"https://qn-qn-kibey-static-cdn.app-echo.com/musiclens/video/musiclens_video1.mp4"},{name:"Onsite Interview: 2018 Consumer Electronics Show @Las Vegas, United States",date:"March 14-2018",img:"video3.png",imgPic:"video3-m.png",video:"https://qn-qn-kibey-static-cdn.app-echo.com/musiclens/video/musiclens_video2.mp4"},{name:"Introduction to MusicLens: First Glance of Innovative Shades",date:"March 9-2018",img:"video4.png",imgPic:"video4-m.png",video:"https://qn-qn-kibey-static-cdn.app-echo.com/musiclens/video/musiclens_video1.mp4"}]},{title:"Image",lens:21}]},languageDrop:[{name:"中文",key:"zh"},{name:"English",key:"en"},{name:"日本語",key:"ja"}],about:{title:"What is Musiclens™ Audio Glasses?",des:["MusicLens™ Audio Sunglasses is a combination of intelligent hearing and trendy vision.","Combined with bone-conduction listening tech, you can listen to music, radio and answer phone call through glasses. Just like earphone,\n        others can’t hear what you’re listening. No need to put any loudspeaker in ear. Even wearing all day long, it won’t hurt the eardrums or \n        let your ear ache. This structure can protect your eardrums whilst output high-quality audio. \n        With the ultra high-quality bone conduction technology, \n        you can finally set your ears free from constraining earphones. \n        With Musiclens™, you can enjoy technology and be fashionable. \n        No matter where you are, \n        you can enjoy all the fun that music can bring without making any noise and becoming the focus of public attention. "],more:"Learn more details "},footer:{contact:"Contact Us",contactList:["All the messages will be replied to within 24 hours","Cooperation: business@kibey.com","Sales: sales@kibey.com"],iconList:[{icon:"icon-ins.png",href:"https://www.instagram.com/musiclens_official"},{icon:"icon-facebook.png",href:"https://www.facebook.com/Musiclens-360031024460561/?modal=admin_todo_tour"},{icon:"icon-tw.png",href:"https://twitter.com/music_lens"},{icon:"icon-weibo.png",href:"https://weibo.com/u/6396554976?topnav=1&wvr=6&topsug=1"}],phone:"+86 400-820-1791",phoneTips:"24h Customer Service (CN/EN)",copyright:"© 2018 MusicLens Inc. (CA, US) All Rights Reserved"},product:{nav:[{name:"Overview",className:"introduce",type:"no-list"},{name:"Material & Style",className:"modeling",type:"list",list:[{front:"1_material_1_front.png",back:"1_material_1_back.png"},{front:"1_material_2_front.png",back:"1_material_2_back.png"},{front:"1_material_3_front.png",back:"1_material_3_back.png"},{front:"1_material_4_front.png",back:"1_material_4_back.png"},{front:"1_material_5_front.png",back:"1_material_5_back.png"}]},{name:"Innovation",className:"create",type:"list",list:[{front:"2_tech_1_front.png",back:"2_tech_1_back.png"},{front:"2_tech_2_front.png",back:"2_tech_2_back.png"},{front:"2_tech_3_front.png",back:"2_tech_3_back.png"},{front:"2_tech_4_front.png",back:"2_tech_4_back.png"},{front:"2_tech_5_front.png",back:"2_tech_5_back.png"},{front:"2_tech_6_front.png",back:"2_tech_6_back.png"},{front:"2_tech_7_front.png",back:"2_tech_7_back.png"}]},{name:"Safety Performance",className:"safe",type:"list",list:[{front:"3_perform_1_front.png",back:"3_perform_1_back.png"},{front:"3_perform_2_front.png",back:"3_perform_2_back.png"},{front:"3_perform_3_front.png",back:"3_perform_3_back.png"},{front:"3_perform_4_front.png",back:"3_perform_4_back.png"}]},{name:"Service & Gift",className:"service",type:"list",list:[{front:"4_gift_1_front.png",back:"4_gift_1_back.png"},{front:"4_gift_2_front.png",back:"4_gift_2_back.png"},{front:"4_gift_3_front.png",back:"4_gift_3_back.png"}]},{name:"Usage Scene",className:"use",type:"list",list:[{front:"5_scene_1_front.png",back:"5_scene_1_back.png"},{front:"5_scene_2_front.png",back:"5_scene_2_back.png"},{front:"5_scene_3_front.png",back:"5_scene_3_back.png"},{front:"5_scene_4_front.png",back:"5_scene_4_back.png"},{front:"5_scene_5_front.png",back:"5_scene_5_back.png"}]}]},problem:{title:"FAQ",list:[{title:"What color and style options are available? ",value:"MusicLens™ has five models each with a different design. Each model also has a different lens for usage in various situations.You could visit the official website & introduction page for details."},{title:"Are the lenses protective and polarized?",value:"Our lenses block 100% of UV, IR and Blue Ray light. All of the lenses are built with impact resistance, oleophobic, hydrophobic, anti-scratch, and anti-reflective coatings. "},{title:"Can I order my MusicLens™ glasses with Rx lenses??",value:"We do not offer prescription lenses with the glasses, but you can take MusicLens™ to an optical store and replace the lens with your own prescription lenses."},{title:"Is the MusicLens™ safe to wear?",value:"Our product will have international certifications from the US, EU, Japan and China. Our manufacturers meet all social compliance and environmental protection standards. Including the packaging which is 100% eco-friendly and recycled."},{title:"What is bone conduction technology?",value:"Bone-conduction is a technology that lets sound conduct via skin and bone by vibration. It's safe and healthy as bone-conduction doesn't hurt the eardrum. Perfect for people who need to wear earphones for a long time or love to listening music all day long. "},{title:"How is the sound quality?",value:"MusicLens has great sound quality, perfect for listening to music, the radio or answering a phone call. The sound quality can be affected by your surrounding environment, but unlike earphones which need to be plugged into your ears, MusicLens doesn't harm or irritate your eardrums. "},{title:"How long is the battery life?",value:"The battery life of MusicLens is 8~12 hours depending on the usage, and the standby time is approximately 48 hours. The accurate value will be updated on our website before shipping after the product passes all the authentications. "},{title:"How can I listen to music in MusicLens?",value:"Simply connect to bluetooth and play music on your phone or computer. We also offer a one year free music membership in ‘echo Music’ App for every MusicLens. ‘echo Music' is a trendy music app for young people, it provides a new style of music listening / sharing and media services, with 30 million users worldwide."},{title:"How to get MitCoin through MusicLens?",value:"MusicLens is partnered with blockchain music trading platform ‘MusicLife’. MusicLife allows hardware to collect data by playing music, and gain virtual cryptocurrency named ‘MitCoin’ as the reward to provide music information. The measurement of accessible hardware is that the ‘Device can ensure the music is being listened to by a real human’. This standard guarantees the music information being collected by MusicLife is reliable. As the first hardware using MusicLife, users can get free MitCoin simply by using MusicLens to listen music. To get more information about MusicLife please visit: www.musiclife.io "},{title:"How does the GPS navigation work?",value:"The next generation of MusicLens will have the navigation function. You can connect Bluetooth in your smartphone and use the GPS navigation App in your phone to listen to the navigation guide sound. "},{title:"How do I listen to the radio?",value:"Press the volume button to open radio function. Long press the button to switch the channel."},{title:"How do I answer a phone call?",value:"MusicLens will answer your phone call automatically in 5 seconds. You can also answer the phone call manually on your smartphone."},{title:"What is the sound leak reduction system?",value:"Most bone-conduction hardware have problems with leaking sound when the volume is loud. MusicLens has our own patent to reduce the sound leaking so that people can not hearing anything playing in MusicLens in a good sound volume."},{title:"Can I choose any lens color for the model I select?",value:"Unfortunately, we don’t offer a selectable option on mix or customize lenses."},{title:"Does MusicLens ship to China?",value:"Yes. We provide worldwide delivery."},{title:"How much will shipping cost?",value:"Shipping to the US, China (Including Hong Kong and Macao) is free. Shipping to Taiwan, Japan, Korea, & Canada is $3. Shipping to UK, EU, Australia, & New Zealand is $10. Shipping to the rest of the world is $15. You can find the shipping cost by clicking on the corresponding reward. "},{title:"How is shipping handled?",value:"In the US, we will be shipping via the United States Postal Service First Class mail with a delivery tracking confirmation. International shipments will be sent via International First Class. "},{title:"When will I receive the product?",value:"We will ship the product before the end of July 2018. Once the accurate shipping date is confirmed, we will let all of our backers know. We may create a second shipment date for backers who purchase later and adjust the delivery date accordingly on the campaign page.   "},{title:"What is the Warranty?",value:"MusicLens provides a 1 year limited warranty. We guarantee you'll receive your MusicLens free of manufacturing defects. "},{title:"What if they don’t fit?",value:"Most of our frame styles are unisex, and all the styles were carefully designed to look and fit great on a wide range of face shapes and sizes. Our unique materials ensure a secure fit. If for any reason you don’t like the look or fit of your glasses, you have 7 days to exchange or return for a full refund.  "},{title:"Can I revise my order?",value:"Yes. You can do so on the contributions tab of your Kickstarter profile."},{title:"Can I exchange my frame style if I don’t like?",value:"Yes! You will have 7 days from the date received to send your glasses back for a free exchange."},{title:"What if I want to try them on before deciding?",value:"Unfortunately, we don’t offer a home try on. In order to take advantage of the low Kickstarter price, we recommend ordering the options you wish to try on in person, then returning the styles you don't want within 7 days for a full refund. "},{title:"What is the return policy?",value:"We offer a 7 day return policy, which means that you have the ability to try your product(s) on at home, and can send them back to us within 7 days starting from the day that you received them to your address. You do not need to state a reason for return within this time period and you will be given a full refund of the frames as long as the glasses and packaging are in the same condition as when you received them.   "}]},About:{}},j=H,F={hello:"hello",home:{list:[{name:"ホーム",path:"/"},{name:"商品",path:"/product"},{name:'購入"',path:"/purchase"},{name:"よくある質問",path:"/faq"},{name:"ニュース",path:"/news"},{name:"について",path:"/about"}],options:{glassList:[{name:"VOGUEファッションモデル",des:"Vogueファッションモデルのサングラスは四季をテーマに４つの色から選べられ、UV、赤外線を98%カットし、ファッションと健康を同時に持つことができる。",colorIndex:0,colorList:[{name:"index_p1.png",color:"rgb(51, 51, 51)"},{name:"index_p2.png",color:"rgb(67, 202, 153)"},{name:"index_p3.png",color:"rgb(255, 142, 179)"},{name:"index_p4.png",color:"rgb(255, 212, 41)"}]},{name:"GEEK極客モデル",des:"シンプルな超軽いフレーム、重さはわずか25グラム。ブルーライトを100％カットし、視力を守る。",colorIndex:0,colorList:[{tips:"ブラック",name:"index_p6.png",color:"rgb(51, 51, 51)"}]}],productSpecial:{title:"商品について",list:[{img:"s1.png",name:"骨伝導技術",des:"従来とは違った聴覚体験、鼓膜を保護すると同時に高品質な聴覚体験をお届けする"},{img:"s2.png",name:"スマートタッチコントロール",des:"スマートセンサー搭載のフレーム、一指でコントロール"},{img:"s3.png",name:"ラジオ聴取",des:"スマートフォンがなくてもFMモードに切り替える"},{img:"s4.png",name:"自動に電話にでる",des:"5秒で自動に電話にでる"}]},moreDetail:{title:"もっと詳しく",list:[{name:"BLUETOOTH接続",des:"BLUETOOTH接続で音楽を聴く、電話に出る、電話を折り返す、APPを開くなどのことができる。",img:"m1.png"},{name:"スマートセンサー",des:"スマートセンサーを通じて、MusicLensを外すと自動に音楽とラジオを中止し、かけると再開する。",img:"m2.png"},{name:"音漏れ防止特許技術",des:"イヤホンを超え、流している音楽や音が隣に聴かされず、いつでもどこでも好きなように聴ける。",img:"m3.png"},{name:"バッテリー持ち時間と充電",des:"持ち時間7～9小时 充電30分〜1時間",img:"m4.png"},{name:"防水防塵レベル",des:"IP54:いかなる方向からの水、埃の侵入によっても有害な影響を受けない。",img:"m5.png"},{name:"安全と環境に優しい",des:"体や環境に良い素材を選び、サプライチェーンの質を保証する。米、欧、日、中の品質基準を満たす。",img:"m6.png"},{name:"無料で会員サービスを体験",des:"musiclensを購入した方にはecho会員サービスをプレゼントする。音楽を無料で楽しもう！",img:"m7.png"},{name:"近眼専用レンズのオーダーサービスを提供する",des:"世界範囲における近眼専用レンズのオンラインオーダーサービスを提供する",img:"m8.png",className:"glass"}]}},exhibition:[{title:"動画",list:[{name:"Official Introduction Video (shot by Prototype)",date:"March 17-2018",img:"video1.png",imgPic:"video1-m.png",video:"https://qn-qn-kibey-static-cdn.app-echo.com/musiclens/video/musiclens_video4.mp4"},{name:"Onsite Interview: 2018 Sónar Music Festival @Hong Kong, China",date:"March 17-2018",img:"video2.png",imgPic:"video2-m.png",video:"https://qn-qn-kibey-static-cdn.app-echo.com/musiclens/video/musiclens_video1.mp4"},{name:"Onsite Interview: 2018 Consumer Electronics Show @Las Vegas, United States",date:"March 14-2018",img:"video3.png",imgPic:"video3-m.png",video:"https://qn-qn-kibey-static-cdn.app-echo.com/musiclens/video/musiclens_video2.mp4"},{name:"Introduction to MusicLens: First Glance of Innovative Shades",date:"March 9-2018",img:"video4.png",imgPic:"video4-m.png",video:"https://qn-qn-kibey-static-cdn.app-echo.com/musiclens/video/musiclens_video1.mp4"}]},{title:"写真",lens:21}]},languageDrop:[{name:"中文",key:"zh"},{name:"English",key:"en"},{name:"日本語",key:"ja"}],about:{title:"Musiclensについて",des:["MUSICLENSはスマート聴覚と流行視覚の融合であり","高品質な骨伝導技術を用いた。メガネをかけることで音楽を聴き、レジオを聴収し、電話に出ることができる。音漏れがなく、他人に聴かされることもなく、長時間","かけても痛くない。鼓膜を保護すると同時に高品質な聴覚体験をお届けする。どこにいても音楽の魅力を感じられ、知らぬまに注目を集められる。"],more:"もっと詳しく"},footer:{contact:"お問い合わせ",contactList:["ビジネス関係のお問い合わせは以下のメールアドレスまでお","願いいたします。24時間以内に返信いたします。","ビジネスに関して: business@kibey.com","販売に関して: sales@kibey.com"],iconList:[{icon:"icon-ins.png",href:"https://www.instagram.com/musiclens_official"},{icon:"icon-facebook.png",href:"https://www.facebook.com/Musiclens-360031024460561/?modal=admin_todo_tour"},{icon:"icon-tw.png",href:"https://twitter.com/music_lens"},{icon:"icon-weibo.png",href:"https://weibo.com/u/6396554976?topnav=1&wvr=6&topsug=1"}],phone:"+86 400-820-1791",phoneTips:"24時間カスタマーサービス（中国語＆英語）",copyright:"© 2018 MusicLens Inc. (アメリカ・カリフォルニア州) すべての権利を保留する"},product:{nav:[{name:"商品概要",className:"introduce",type:"no-list"},{name:"材质造型",className:"modeling",type:"list",list:[{front:"1_material_1_front.png",back:"1_material_1_back.png"},{front:"1_material_2_front.png",back:"1_material_2_back.png"},{front:"1_material_3_front.png",back:"1_material_3_back.png"},{front:"1_material_4_front.png",back:"1_material_4_back.png"},{front:"1_material_5_front.png",back:"1_material_5_back.png"}]},{name:"最新技術",className:"create",type:"list",list:[{front:"2_tech_1_front.png",back:"2_tech_1_back.png"},{front:"2_tech_2_front.png",back:"2_tech_2_back.png"},{front:"2_tech_3_front.png",back:"2_tech_3_back.png"},{front:"2_tech_4_front.png",back:"2_tech_4_back.png"},{front:"2_tech_5_front.png",back:"2_tech_5_back.png"},{front:"2_tech_6_front.png",back:"2_tech_6_back.png"},{front:"2_tech_7_front.png",back:"2_tech_7_back.png"}]},{name:"安全性",className:"safe",type:"list",list:[{front:"3_perform_1_front.png",back:"3_perform_1_back.png"},{front:"3_perform_2_front.png",back:"3_perform_2_back.png"},{front:"3_perform_3_front.png",back:"3_perform_3_back.png"},{front:"3_perform_4_front.png",back:"3_perform_4_back.png"}]},{name:"服务礼遇",className:"service",type:"list",list:[{front:"4_gift_1_front.png",back:"4_gift_1_back.png"},{front:"4_gift_2_front.png",back:"4_gift_2_back.png"},{front:"4_gift_3_front.png",back:"4_gift_3_back.png"}]},{name:"使用概要",className:"use",type:"list",list:[{front:"5_scene_1_front.png",back:"5_scene_1_back.png"},{front:"5_scene_2_front.png",back:"5_scene_2_back.png"},{front:"5_scene_3_front.png",back:"5_scene_3_back.png"},{front:"5_scene_4_front.png",back:"5_scene_4_back.png"},{front:"5_scene_5_front.png",back:"5_scene_5_back.png"}]}]},problem:{title:"よくある質問",list:[{title:"MusicLensはどんなスタイルと色がありますか？",value:"４種類のサングラススタイルと１種類の近眼スタイルがあります。各自のレンズにはその特徴があり、日常生活における色々な場合に着用できます。詳しくはMusicLensホームペー\n              ジへご確認ください　。"},{title:"MusicLensのレンズは目を守れますか？",value:"MusicLensは99.9%の紫外線、赤外線、ブルーライトから目を守っています。全てのレンズは耐衝撃性、反射防止、傷つき防止の疎水疎油コーティングを採用しています。"},{title:"MusicLensのレンズは視力矯正機能がありますか？",value:"ありません。MusicLensはレンズの交換ができますので、視力矯正機能のレンズを求める方は専門機構で交換してください。"},{title:"MusicLensの安全性はどうですか？",value:"MusicLensは米国、欧州連合、日本、中国の品質基準を満たし、安全認証に合格しました。パッケージを含め、体や環境に良い素材を選び、サプライチェーンの質を保証します。"},{title:"骨伝導技術とは？",value:"皮膚と骨を通じた音声伝播技術です。骨伝導技術は安全で危険性がありません。鼓膜を傷つくことがなく、音楽が好きな方や長時間音声設備を付ける方にお勧めします。"},{title:"MusicLensの音質はどうですか？",value:"MusicLensは従来と違った聴覚体験をお届けします。音質を保証し、鼓膜を傷つきません。"},{title:"MusicLensのバッテリー持ち時間はどれくらいですか？",value:"使用モードでは8～12時間、スタンバイモードでは約48時間です。認証が完了次第正確なバッテリー持ち時間を公表します。"},{title:"MusicLensで音楽を聴く方法は？",value:"BLUETOOTH接続で音楽を聴くことができ、音楽をMusicLensのメモリーカードに保存することもできます。MusicLensのファッション音楽モデルを購入した方には1年間のecho会員サービス、ベーシックモデルを購入した方には半年間のecho会員サービスをプレゼントします。「echo」APPを通じて、音楽をMusicLensにダウンロードすることができます。echoは若者のために生まれた音楽アプリである。新しい形の音楽とメディアサービスを提供していて、総勢3000万のユーザーがいます。"},{title:"MitCoinを獲得するには？",value:"音楽ブロックチェン貨幣プラットフォーム「MusicLife」が開発した新しい概念です。音楽情報を提供する報酬としては「MitCoin」と名付けられている暗号通貨がもらえます。アクセス·ハードウェアを通じて収集した再生データは「この音楽は本当の人間に再生されている」ことを保証でき、MusicLifeが収集したデータの信頼性を保証できます。詳しくはMusicLifeのホームページ：www.musiclife.ioへご確認ください。"},{title:"ナビ機能の使い方",value:"BLUETOOTH接続でナビの音声案内を使用することができます。次代MusicLensはナビ機能を搭載します。"},{title:"ラジオを聴取する方法",value:"音量ボタンを押してラジオ聴取を開始します。ボリュームボタンでチャンネルをかえます。"},{title:"電話に出る方法",value:"着信音が鳴ったら、5秒で自動に電話にでます。手動で出たり拒否したりすることもできます。"},{title:"音漏れシステムは何ですか？",value:"MusicLensは特許技術を用いて、骨伝導技術による音漏れ問題を解決しました。この特許技術は音楽聴取の品質と通話のプライベート性を保証しました。"},{title:"レンズの色を指定できますか？",value:"残念ながら、現在はまだできません。"},{title:"中国は配送地域内ですか？",value:"もちろんです！MusicLensの配送は世界範囲で行います。"},{title:"配送料金について",value:"中国内地、中国香港、中国マカオとアメリカへの配送は無料です。台湾地区、日本、韓国、カナダへの配送料金は2.99ドルです。イギリス、ヨーロッパ地域、オーストラリア、ニュージーランドへの配送料金は9.99ドルです。他の地域と国への配送料金は15ドルです。kickstarterの購入ページにて配送料金を確認できます。"},{title:"MusicLensの配送サービスについて",value:"アメリカ地域はUSPS First Class、他の地域と国はUSPS国際First ClassでMusicLensを配送します。"},{title:"MusicLensのお届け日時はいつですか？",value:"2018年8月までに世界範囲でMusicLensを配送します。第1回目の準備が整え次第、支援者の皆様に詳しい日時をお知らせいたします。他のお客様には、第2回目の準備が整え次第、詳しい日時をお知らせいたします。"},{title:"アフターサービスについて",value:"1年間の保証サービスが付いています。"},{title:"自分に似合わなかったらどうすればいいですか？",value:"MusicLensは7日間交換、返品できます。"},{title:"注文修正できますか？",value:"できます。Kickstarterにて修正できます。"},{title:"フレームの交換できますか？",value:"もちろんできます。7日間以内に郵送していただいて、無料でフレームの交換ができます。"},{title:"試着できますか？",value:"残念ながら、できません。Kickstarterのクーポンを利用してMusicLensを購入することをお勧めします。気に入られなかったら、7日間交換、全額返品できます。"},{title:"返品について",value:"MusicLensを購入して7日間（7日目を含む、商品が届いた日から計算）、商品とパッケージに不備がなかれば、全額返品できます。"}]},About:{}},W=F;a["default"].use(O["a"]);var D={zh:T,en:j,ja:W},B=new O["a"]({locale:"zh",messages:D}),R=B,Y=n("cTzj"),z=n.n(Y);a["default"].config.productionTip=!1,a["default"].use(x.a),a["default"].use(z.a);var V=new o["a"]({mode:"history",routes:E,scrollBehavior:function(e,t,n){return n||{x:0,y:0}}});a["default"].use(o["a"]),new a["default"]({i18n:R,store:U,router:V,render:function(e){return e(d)}}).$mount("#app")},ZdvU:function(e,t){},gMJO:function(e,t){e.exports=[{lang:"zh"},{lang:"en"},{lang:"ja"}]},sqhW:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAMAAAANmfvwAAAAPFBMVEUAAAD////////////////////////////////////////////////////////////////////////////YSWgTAAAAFHRSTlMAWQQNVlJIN0wwEikfQAkUQxs7JcDcS9AAAAFISURBVDjLlZTdsoMgDIT7QfgTFbHv/66nQziMFm+aG0Ezm02y6+u3MGvwTsT5sJrHBBuEERLsjJCAI5fdmL3kA0jmC8KDkC+Q4G9AiyMu9fZ2ibjlguHYPrA14i+lN5wdF8+mB2G/YG/4fz6J2I67x30eQeTI9ZNrImcvA0vDiMTyer3RkOgBLRUINZ3b6RXsZDU1HQ4QT+gEdGaNXUtRYrYYi5iXAvu01lqVWybWwfho+Y44+u+UcKVfcqsE9WsXb4/r3RZ8Q9mnjW0kPextDMK8+QWyIiKPKdpDMJrSC82xSutCC3k6/UkeUjrdQH6W6cnWm145HlOKI/XRGcHOCXuAQxega5zINvG2T0MMU8ty2jYee5fUiEg2uq10F+YIixvCvMt7xMo25H03ybhl0mQStdrwaCLfrTYb9iSqYX+1/fzz+Cn+AF6eClXwyPTdAAAAAElFTkSuQmCC"}},[0]);
//# sourceMappingURL=app.655aaee4.js.map