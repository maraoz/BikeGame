if(typeof unityObject=="undefined"){var unityObject=function(){var H="Unity Player",T="application/vnd.unity",af=window,aA=document,r=navigator,g=false,aG=[],N=[],O=[],S=null,o=null,V=true,at=true,ai="http://webplayer.unity3d.com/download_webplayer-3.x/",aC=false,Y=false,D=true,aJ=false,p="_unity_triedjava",A=h(p),aE=[],x=true,ac=false,ab=true,av=true,k=false,M=null,y=null,ar=[],E=[],K=[],ah=null,b=null,aw="undefined",Z="installed",aa="missing",s="broken",q="unsupported",a="ready",aH="start",d="error",w="first",ao="standard",t="java",c="clickonce",W=function(){var aM=r.userAgent,aO=r.platform;var aP={w3:typeof aA.getElementById!=aw&&typeof aA.getElementsByTagName!=aw&&typeof aA.createElement!=aw,win:aO?/win/i.test(aO):/win/i.test(aM),mac:aO?/mac/i.test(aO):/mac/i.test(aM),ie:/msie/i.test(aM)?parseFloat(aM.replace(/^.*msie ([0-9]+(\.[0-9]+)?).*$/i,"$1")):false,ff:/firefox/i.test(aM),ch:/chrome/i.test(aM),sf:/safari/i.test(aM),wk:/webkit/i.test(aM)?parseFloat(aM.replace(/^.*webkit\/(\d+(\.\d+)?).*$/i,"$1")):false,x64:/win64/i.test(aM)&&/x64/i.test(aM),moz:/mozilla/i.test(aM)?parseFloat(aM.replace(/^.*mozilla\/([0-9]+(\.[0-9]+)?).*$/i,"$1")):0};var aK=aA.getElementsByTagName("script");for(var aN=0;aN<aK.length;++aN){var an=aK[aN].src.match(/^(.*)3\.0\/uo\/UnityObject\.js$/i);if(an){ai=an[1];break}}function aL(aS,aR){for(var aT=0;aT<Math.max(aS.length,aR.length);++aT){var aQ=(aT<aS.length)&&aS[aT]?new Number(aS[aT]):0;var aU=(aT<aR.length)&&aR[aT]?new Number(aR[aT]):0;if(aQ<aU){return -1}if(aQ>aU){return 1}}return 0}aP.java=function(){if(r.javaEnabled()){var aT=(aP.win&&aP.ff);var aW=false;if(aT||aW){if(typeof r.mimeTypes!=aw){var aV=aT?[1,6,0,12]:[1,4,2,0];for(var aS=0;aS<r.mimeTypes.length;++aS){if(r.mimeTypes[aS].enabledPlugin){var aQ=r.mimeTypes[aS].type.match(/^application\/x-java-applet;(?:jpi-)?version=(\d+)(?:\.(\d+)(?:\.(\d+)(?:_(\d+))?)?)?$/);if(aQ!=null){if(aL(aV,aQ.slice(1))<=0){return true}}}}}}else{if(aP.win&&aP.ie){if(typeof ActiveXObject!=aw){function aR(aX){try{return new ActiveXObject("JavaWebStart.isInstalled."+aX+".0")!=null}catch(aY){return false}}function aU(aX){try{return new ActiveXObject("JavaPlugin.160_"+aX)!=null}catch(aY){return false}}if(aR("1.7.0")){return true}if(aP.ie>=8){if(aR("1.6.0")){for(var aS=12;aS<=50;++aS){if(aU(aS)){if(aP.ie==9&&aP.moz==5&&aS<24){continue}else{return true}}}return false}}else{return aR("1.6.0")||aR("1.5.0")||aR("1.4.2")}}}}}return false}();aP.co=function(){if(aP.win&&aP.ie){var aQ=aM.match(/\.NET CLR [0-9.]+/g);if(aQ!=null){function aT(aU){return aU.match(/([0-9]+)\.([0-9]+)\.([0-9]+)/i).slice(1)}var aS=[3,5,0];for(var aR=0;aR<aQ.length;++aR){if(aL(aS,aT(aQ[aR]))<=0){return true}}}}return false}();return aP}(),aI=function(){var an=function(){var aP=new Date();var aO=Date.UTC(aP.getUTCFullYear(),aP.getUTCMonth(),aP.getUTCDay(),aP.getUTCHours(),aP.getUTCMinutes(),aP.getUTCSeconds(),aP.getUTCMilliseconds());return aO.toString(16)+aN().toString(16)}(),aL=0;function aN(){return Math.floor(Math.random()*2147483647)}function aK(aS,aQ,aT,aP){if(!ab){if(aP){aP()}return}var aO="http://unityanalyticscapture.appspot.com/event?u="+encodeURIComponent(an)+"&s="+encodeURIComponent(aL)+"&e="+encodeURIComponent(aS);aO+="&v="+encodeURIComponent("2b1179929fbe");if(ah){aO+="?r="+ah}if(aQ){aO+="&t="+encodeURIComponent(aQ)}if(aT){aO+="&d="+encodeURIComponent(aT)}var aR=new Image();if(aP){aR.onload=aR.onerror=aP}aR.src=aO}function aM(aS,aQ,aT,aZ){if(!av){if(aZ){aZ()}return}var aW=window._ugaq=window._ugaq||[];if(!k){aW.push(["unity._setAccount","UA-16068464-16"]);aW.push(["unity._setCustomVar",1,"Revision","2b1179929fbe",2])}var aV="/webplayer/install/"+aS;var aX="?";if(aQ){aV+=aX+"t="+encodeURIComponent(aQ);aX="&"}if(aT){aV+=aX+"d="+encodeURIComponent(aT);aX="&"}if(aZ){aW.push(function(){unityObject.googleAnalyticsCallback=aZ})}aW.push(["unity._trackPageview",aV]);if(!k){var aY=ai+"3.0/uo/ga.js";var aP=aA.getElementsByTagName("script");for(var aO=0;aO<aP.length;++aO){if(aP[aO].src&&aP[aO].src.toLowerCase()==aY.toLowerCase()){k=true;break}}if(!k){k=true;var aU=aA.createElement("script");aU.type="text/javascript";aU.async=true;aU.src=aY;var aR=document.getElementsByTagName("script")[0];aR.parentNode.insertBefore(aU,aR)}}}return{send:function(aR,aQ,aT,aO){++aL;var aS=2;function aP(){if(0==--aS){M=null;location.href=aO}}aK(aR,aQ,aT,aO?aP:null);aM(aR,aQ,aT,aO?aP:null)}}}(),au=function(){if(!W.w3){return}if((typeof aA.readyState!=aw&&aA.readyState=="complete")||(typeof aA.readyState==aw&&(aA.getElementsByTagName("body")[0]||aA.body))){am()}if(g){return}if(typeof aA.addEventListener!=aw){aA.addEventListener("DOMContentLoaded",am,false)}if(W.win&&W.ie){aA.attachEvent("onreadystatechange",function(){if(aA.readyState=="complete"){aA.detachEvent("onreadystatechange",arguments.callee);am()}});if(af==top){(function(){if(g){return}try{aA.documentElement.doScroll("left")}catch(an){setTimeout(arguments.callee,10);return}am()})()}}if(W.wk){(function(){if(g){return}if(!/loaded|complete/.test(aA.readyState)){setTimeout(arguments.callee,10);return}am()})()}ae(am)}();function R(aK,an,aL){if(aK==Z){if(b==null||b==Z){return}}else{if(b!=null){return}}b=aK;aI.send(aK,an,aL)}function aj(aL,aK,aM,an){b=aL;aI.send(aL,aK,aM,an)}function ap(aK,an,aL){if(aK==w){if(b==null){return}}b=aK;aI.send(aK,an,aL)}function h(an){var aK=new RegExp(escape(an)+"=([^;]+)");if(aK.test(aA.cookie+";")){aK.exec(aA.cookie+";");return RegExp.$1}return false}function j(an,aK){document.cookie=escape(an)+"="+escape(aK)+"; path=/"}function X(an){if(g){an()}else{aG[aG.length]=an}}function am(){if(g){return}try{var an=aA.getElementsByTagName("body")[0];var aK=an.appendChild(aA.createElement("span"));an.removeChild(aK)}catch(aM){return}g=true;for(var aL=0;aL<aG.length;++aL){aG[aL]()}}function ae(aK){if(typeof af.addEventListener!=aw){af.addEventListener("load",aK,false)}else{if(typeof aA.addEventListener!=aw){aA.addEventListener("load",aK,false)}else{if(typeof af.attachEvent!=aw){L(af,"onload",aK)}else{if(typeof window.onload=="function"){var an=window.onload;af.onload=function(){an();aK()}}else{af.onload=aK}}}}}function L(aK,an,aL){aK.attachEvent(an,aL);O[O.length]={target:aK,type:an,event:aL}}function u(aN){var aQ=0;if(aN){var aM=aN.toLowerCase().match(/^(\d+)(?:\.(\d+)(?:\.(\d+)([dabfr])?(\d+)?)?)?$/);if(aM&&aM[1]){var aL=aM[1];var aO=aM[2]?aM[2]:0;var aP=aM[3]?aM[3]:0;var an=aM[4]?aM[4]:"r";var aK=aM[5]?aM[5]:0;aQ|=((aL/10)%10)<<28;aQ|=(aL%10)<<24;aQ|=(aO%10)<<20;aQ|=(aP%10)<<16;aQ|={d:2<<12,a:4<<12,b:6<<12,f:8<<12,r:8<<12}[an];aQ|=((aK/100)%10)<<8;aQ|=((aK/10)%10)<<4;aQ|=(aK%10)}}return aQ}function J(aN,an){var aL=aA.getElementsByTagName("body")[0];var aK=aA.createElement("object");if(aL&&aK){aK.setAttribute("type",T);aK.style.visibility="hidden";aL.appendChild(aK);var aM=0;(function(){if(typeof aK.GetPluginVersion==aw){if(aM++<10){setTimeout(arguments.callee,10)}else{aL.removeChild(aK);aN(null)}}else{var aO={};if(an){for(var aP=0;aP<an.length;++aP){aO[an[aP]]=aK.GetUnityVersion(an[aP])}}aO.plugin=aK.GetPluginVersion();aL.removeChild(aK);aN(aO)}})()}else{aN(null)}}function al(aT,aK){var aM=aa;var aN;r.plugins.refresh();if(typeof r.plugins!=aw&&r.plugins[H]&&typeof r.mimeTypes!=aw&&r.mimeTypes[T]&&r.mimeTypes[T].enabledPlugin){aM=Z;if(W.sf&&/Mac OS X 10_6/.test(r.appVersion)){J(function(aU){if(!aU||!aU.plugin){aM=s;aN="OSX10.6-SFx64"}R(aM,y,aN);aT(aM,aU)},aK);return}else{if(W.mac&&W.ch){J(function(aU){if(aU&&(u(aU.plugin)<=u("2.6.1f3"))){aM=s;aN="OSX-CH-U<=2.6.1f3"}R(aM,y,aN);aT(aM,aU)},aK);return}else{if(aK){J(function(aU){R(aM,y,aN);aT(aM,aU)},aK);return}}}}else{if(typeof af.ActiveXObject!=aw){try{var aS=new ActiveXObject("UnityWebPlayer.UnityWebPlayer.1");var aL=aS.GetPluginVersion();if(aK){var aR={};for(var an=0;an<aK.length;++an){aR[aK[an]]=aS.GetUnityVersion(aK[an])}aR.plugin=aL}aM=Z;if(aL=="2.5.0f5"){var aQ=/Windows NT \d+\.\d+/.exec(r.userAgent);if(aQ&&aQ.length>0){var aO=parseFloat(aQ[0].split(" ")[2]);if(aO>=6){aM=s;aN="WIN-U2.5.0f5"}}}}catch(aP){if(W.win&&W.ie&&W.x64){aM=q;aN="WIN-IEx64"}}}}R(aM,y,aN);aT(aM,aR)}function l(an){if(/^[-+]?[0-9]+$/.test(an)){an+="px"}return an}function U(aK,aL,aM,aS){var aQ=aA.getElementById(aK);if(!aQ){if(aS){aS({success:false,id:aK,type:y,error:"UnityElementNotFound"})}return}if(W.win&&W.ie){var aR="";for(var an in aL){if(aL[an]!=Object.prototype[an]){if(an.toLowerCase()=="styleclass"){aR+=' class="'+aL[an]+'"'}else{if(an.toLowerCase()!="classid"){aR+=" "+an+'="'+aL[an]+'"'}}}}var aP="";for(var an in aM){if(aM[an]!=Object.prototype[an]){if(an.toLowerCase()!="classid"){aP+='<param name="'+an+'" value="'+aM[an]+'" />'}}}aQ.outerHTML='<div id="'+aK+'" style="width: '+l(aL.width)+"; height: "+l(aL.height)+'; visibility: hidden;"><object classid="clsid:444785F1-DE89-4295-863A-D46C3A781394" style="display: block; width: 100%; height: 100%;"'+aR+">"+aP+"</object></div>";N[N.length]=aK}else{var aN=aA.createElement("div");aN.setAttribute("id",aK);aN.style.width=l(aL.width);aN.style.height=l(aL.height);aN.style.visibility="hidden";var aO=aA.createElement("embed");aO.setAttribute("type",T);aO.style.display="block";aO.style.width="100%";aO.style.height="100%";for(var an in aL){if(aL[an]!=Object.prototype[an]){if(an.toLowerCase()=="styleclass"){aO.setAttribute("class",aL[an])}else{if(an.toLowerCase()!="classid"){aO.setAttribute(an,aL[an])}}}}for(var an in aM){if(aM[an]!=Object.prototype[an]){if(an.toLowerCase()!="classid"){aO.setAttribute(an,aM[an])}}}aN.appendChild(aO);aQ.parentNode.replaceChild(aN,aQ)}n(aK,function(aU){if(aU){aU.parentNode.style.visibility="visible";aU.focus()}else{az(aK)}if(aS){var aT;if(!aU){aT="UnityElementNotFound"}aS({success:Boolean(aU),id:aK,ref:aU,type:y,error:aT})}})}function z(an,aK){for(var aL in an){if(aL.toLowerCase()==aK){var aM=an[aL];if(/^((?:[\da-f]){2}){3,4}$/i.test(aM)){return aM.substr(0,6)}break}}return null}function ay(aK,aM,aN,aV,aO){var aQ=aA.getElementById(aK);if(aQ){var aL=l(aM.width);var aR=l(aM.height);var aT=z(aN,"backgroundcolor");var aS=z(aN,"textcolor");var aP=z(aN,"bordercolor");if(W.win&&W.ie){var an="font-family: Verdana; font-size: 12px; text-align: center;";if(aT){an+=" background-color: #"+aT+";"}if(aS){an+=" color: #"+aS+";"}if(aP){an+=" border: 1px solid #"+aP+";"}var aU="";if(at){an+=" width: "+aL+"; height: "+aR+";";aU="width: "+aL+"; line-height: "+aR+";"}aQ.outerHTML='<div id="'+aK+'" style="'+an+'"><span style="'+aU+'">'+aO+"</span></div>"}}if(aV){aV({success:false,id:aK,error:aO})}}function P(aN,aP,a3,aW,a7,aR,a0){preInstallCallback=E[aN];var ba=aA.getElementById(aN);if(ba){var aL=ao;if(D&&W.java&&!A&&!h(p)){aE[aN]={attributes:aP,params:a3,callback:aW,broken:a7};var a5="javascript:unityObject.doJavaInstall('"+aN+"');";aL=t}else{if(x&&W.co){var a5=ai+"3.0/co/UnityWebPlayer.application?installer="+encodeURIComponent(ai+C());aL=c}else{if(W.win){var a5=ai+C()}else{if(r.platform=="MacIntel"){var a5=ai+(aC?"webplayer-i386.dmg":"webplayer-mini.dmg");if(ah){a5+="?referrer="+ah}}else{if(r.platform=="MacPPC"){var a5=ai+(aC?"webplayer-ppc.dmg":"webplayer-mini.dmg");if(ah){a5+="?referrer="+ah}}else{var a5='javascript:window.open("http://unity3d.com/webplayer/");';aL=q}}}}}aj(a,aL);if(a7){var a6="Unity Web Player. Install now! Restart your browser after install.";var aX="http://webplayer.unity3d.com/installation/getunityrestart.png";var a4=190;var aO=75}else{var a6="Unity Web Player. Install now!";var aX="http://webplayer.unity3d.com/installation/getunity.png";var a4=193;var aO=63}var aZ=aP.width||a4;var aQ=aP.height||aO;var aS=l(-parseInt(aO/2));var aK="unityObject.notifyBeginInstall('"+aN+"','"+aL+"');unityObject.setInstallStatus('"+aH+"','"+aL+"',null";if(aL!=c){aK+=",'"+a5.replace(/'/g,"\\'")+"');"}else{aK+=");doc.location='"+a5+"';"}aK+="return false;";var bd=z(a3,"backgroundcolor");var aM=z(a3,"textcolor");var aY=z(a3,"bordercolor");var aU=aN+"_img";if(W.win&&W.ie){var a1='<img id="'+aU+'" alt="'+a6+'" src="'+aX+'" width="'+a4+'" height="'+aO+'" style="border-width: 0px;" />';var a9='<a href="'+a5+'" title="'+a6+'" onclick="'+aK+'"';if(at){a9+=' style="display: block; height: '+l(aO)+"; position: relative; top: "+aS+';"'}a9+=">"+a1+"</a>";var a2="";if(bd){a2+=" background-color: #"+bd+";"}if(aM){a2+=" color: #"+aM+";"}if(aY){a2+=" border: 1px solid #"+aY+";"}if(at){var a8='<div style="width: '+l(a4)+'; margin: auto; position: relative; top: 50%;">'+a9+"</div>";ba.outerHTML='<div id="'+aN+'" style="width: '+l(aZ)+"; height: "+l(aQ)+"; text-align: center;"+a2+'">'+a8+"</div>"}else{ba.outerHTML='<div id="'+aN+'" style="'+a2+'">'+a9+"</div>"}}else{var bb=aA.createElement("div");bb.setAttribute("id",aN);if(bd){bb.style.backgroundColor="#"+bd}if(aM){bb.style.color="#"+aM}if(aY){bb.style.border="1px solid #"+aY}if(at){bb.style.width=l(aZ);bb.style.height=l(aQ);var aV=aA.createElement("div");aV.style.width=l(a4);aV.style.margin="auto";aV.style.position="relative";aV.style.top="50%"}var aT=aA.createElement("a");aT.setAttribute("href",a5);aT.setAttribute("title",a6);aT.setAttribute("onclick",aK);if(at){aT.style.display="block";aT.style.height=l(aO);aT.style.position="relative";aT.style.top=aS}var an=aA.createElement("img");an.setAttribute("id",aU);an.setAttribute("alt",a6);an.setAttribute("src",aX);an.setAttribute("width",a4);an.setAttribute("height",aO);an.style.borderWidth="0px";aT.appendChild(an);if(at){aV.appendChild(aT);bb.appendChild(aV)}else{bb.appendChild(aT)}ba.parentNode.replaceChild(bb,ba)}Q(aN,true)}if(aW){aW({success:false,id:aN,type:aR,error:a0})}if(preInstallCallback){preInstallCallback({id:aN,type:aL})}y=aL;if(Y){if(aL==t){aj(aH,aL);m(aN)}else{if(aL==c){if(!ac){ac=true;ae(function(){aj(aH,aL);aA.location=ai+"3.0/co/UnityWebPlayer.application?installer="+encodeURIComponent(ai+C())})}}}}else{if(aL==t&&aJ){K.push(aU);F(aN+"_java")}}}function C(){var an=aC?"UnityWebPlayerFull.exe":"UnityWebPlayer.exe";if(ah){an+="?referrer="+ah}return an}function aB(){var an="UnityPlayer.plugin.zip";if(ah){an+="?referrer="+ah}return an}function I(){return ai+(W.win?C():aB())}function G(aL,aM,aN){if(W.win&&W.ie){var aQ="";for(var an in aL){aQ+=" "+an+'="'+aL[an]+'"'}var aO="";for(var an in aM){aO+='<param name="'+an+'" value="'+aM[an]+'" />'}aN.outerHTML="<object"+aQ+">"+aO+"</object>"}else{var aP=aA.createElement("object");for(var an in aL){aP.setAttribute(an,aL[an])}for(var an in aM){var aK=aA.createElement("param");aK.name=an;aK.value=aM[an];aP.appendChild(aK)}aN.parentNode.replaceChild(aP,aN)}}function B(an){if(typeof an==aw){return false}if(!an.complete){return false}if(typeof an.naturalWidth!=aw&&an.naturalWidth==0){return false}return true}function F(aL){var aK=false;for(i=0;i<K.length;i++){if(!K[i]){continue}var an=aA.images[K[i]];if(!B(an)){aK=true}else{K[i]=null}}if(aK){setTimeout(arguments.callee,100)}else{setTimeout(function(){f(aL)},100)}}function f(aM){var aO=aA.getElementById(aM);if(!aO){aO=aA.createElement("div");var an=aA.body.lastChild;aA.body.insertBefore(aO,an.nextSibling)}var aN=ai+"3.0/jws/";var aK={id:aM,type:"application/x-java-applet",code:"JVMPreloader",width:1,height:1,name:"JVM Preloader"};var aL={context:aM,codebase:aN,classloader_cache:false,scriptable:true,mayscript:true,codebase:aN};G(aK,aL,aO);Q(aM,true)}function m(aM){A=true;j(p,A);var aO=aA.getElementById(aM);var aN=aE[aM];var an={id:aM,type:"application/x-java-applet",archive:ai+"3.0/jws/UnityWebPlayer.jar",code:"UnityWebPlayer",width:aN.attributes.width||600,height:aN.attributes.height||450,name:"Unity Web Player"};if(W.win&&W.ff){an.style="visibility: hidden;"}var aK={context:aM,jnlp_href:ai+"3.0/jws/UnityWebPlayer.jnlp",classloader_cache:false,installer:I(),image:"http://webplayer.unity3d.com/installation/unitylogo.png",centerimage:true,boxborder:false,scriptable:true,mayscript:true};for(var aL in aN.params){if(aL=="src"){continue}if(aN.params[aL]!=Object.prototype[aL]){aK[aL]=aN.params[aL];if(aL.toLowerCase()=="logoimage"){aK.image=aN.params[aL]}else{if(aL.toLowerCase()=="backgroundcolor"){aK.boxbgcolor="#"+aN.params[aL]}else{if(aL.toLowerCase()=="bordercolor"){aK.boxborder=true}else{if(aL.toLowerCase()=="textcolor"){aK.boxfgcolor="#"+aN.params[aL]}}}}}}G(an,aK,aO);Q(aM,true)}function ak(an){setTimeout(function(){var aK=aA.getElementById(an);if(aK){aK.parentNode.removeChild(aK)}},0)}function ag(an){}function ax(aK,an,aM){if(!an){var aL=aE[aK];aj(d,t,aM);P(aK,aL.attributes,aL.params,aL.callback,aL.broken,t,aM)}}function aD(aK,an){callback=ar[aK];if(callback){callback({id:aK,type:an})}}function az(aL){var aK=aA.getElementById(aL);if(aK){if(W.win&&W.ie){var an=aK.firstChild;if(an&&an.nodeName=="OBJECT"){aK.style.display="none";(function(){if(an.readyState==4){for(var aM in an){if(typeof an[aM]=="function"){an[aM]=null}}aK.parentNode.removeChild(aK)}else{setTimeout(arguments.callee,10)}})();return}}aK.parentNode.removeChild(aK)}}function n(aN,aO){var aK=aA.getElementById(aN);if(!aK){if(aO){aO(null)}return null}var an;if(W.win&&W.ie){var aL=aK.getElementsByTagName("object")[0];if(aL&&aL.nodeName=="OBJECT"){an=aL}}else{var aM=aK.getElementsByTagName("embed")[0];if(aM&&aM.nodeName=="EMBED"){an=aM}}return(function(){if(an&&typeof an.GetPluginVersion==aw){if(aO){setTimeout(arguments.callee,10)}return null}if(aO){aO(an)}return an})()}function Q(aL,an){if(!V){return}var aK=an?"visible":"hidden";if(g&&aA.getElementById(aL)){aA.getElementById(aL).style.visibility=aK}else{aq("#"+aL,"visibility: "+aK+";")}}function aq(aO,aK,aN,aP){if(W.mac&&W.ie){return}var aL=aA.getElementsByTagName("head")[0];if(!aL){return}var an=(aN&&typeof aN=="string")?aN:"screen";if(aP){S=null;o=null}if(!S||o!=an){var aM=aA.createElement("style");aM.setAttribute("type","text/css");aM.setAttribute("media",an);S=aL.appendChild(aM);if(W.win&&W.ie&&typeof aA.styleSheets!=aw&&aA.styleSheets.length>0){S=aA.styleSheets[aA.styleSheets.length-1]}o=an}if(W.win&&W.ie&&typeof S.addRule=="object"){S.addRule(aO,aK)}else{if(S&&typeof aA.createTextNode!=aw){S.appendChild(aA.createTextNode(aO+" { "+aK+" }"))}}}var v=function(){if(W.win&&W.ie){if(typeof af.attachEvent!=aw){L(af,"onunload",e)}else{if(typeof af.onunload=="function"){var an=af.onunload;af.onunload=function(){an();e()}}else{af.onunload=e}}}}();function e(){for(var aK in O){var an=O[aK];an.target.detachEvent(an.type,an.event)}for(var aK in N){az(N[aK])}for(var aK in W){W[aK]=null}W=null;for(var aK in unityObject){unityObject[aK]=null}unityObject=null}function aF(aN,aK,an){var aL={};var aM=-1;if(aN&&typeof aN=="object"){for(var aO in aN){aL[aO]=aN[aO];if(aO.toLowerCase()=="tabindex"){aM=aL[aO]}}}aL.width=aK;aL.height=an;if(aM==-1){aL.tabIndex=0}return aL}function ad(an,aN){var aM="unityObject.firstFrameCallback();";var aL={};if(an&&typeof an=="object"){for(var aK in an){aL[aK]=an[aK];if(aK.toLowerCase()=="firstframecallback"){aL[aK]=aM+aL[aK];aM=null}}}if(aM){aL.firstFrameCallback=aM}aL.src=aN;return aL}return{embedUnity:function(aN,aP,aL,aK,an,aO,aM){if(W.w3&&!(W.wk&&W.wk<312)&&aN&&aP&&aL&&aK){X(function(){var aR=aF(aO,aL,aK);var aQ=ad(an,aP);al(function(aS){if(aS==Z){U(aN,aR,aQ,aM)}else{if(aS==q){ay(aN,aR,aQ,aM,"Unsupported browser.")}else{P(aN,aR,aQ,aM,aS==s,null,"NotInstalled");(function(){var aT=arguments.callee;al(function(aU){if(aU==Z){Q(aN,false);U(aN,aR,aQ,aM)}else{setTimeout(aT,500)}})})()}}})})}else{if(aM){aM({success:false,id:aN})}}},addPreInstallCallback:function(an,aK){E[an]=aK},addBeginInstallCallback:function(an,aK){ar[an]=aK},getObjectById:function(an,aK){if(W.w3&&an){return n(an,aK)}else{if(aK){aK(null)}}return null},setAutoHideShow:function(an){V=an},setFullSizeMissing:function(an){at=an},enableFullInstall:function(an){aC=an},enableAutoInstall:function(an){Y=an},enableJavaInstall:function(an){D=an},enableJavaPreloading:function(an,aK){aJ=an;if(typeof aK!=aw){K=aK}},enableClickOnceInstall:function(an){x=an},enableAnalytics:function(an){ab(an);av(an)},enableUnityAnalytics:function(an){ab=an},enableGoogleAnalytics:function(an){av=an},setBaseDownloadUrl:function(an){ai=an},setReferrer:function(an){ah=an?encodeURIComponent(an):an},addLoadEvent:ae,addDomLoadEvent:X,ua:W,detectUnity:function(aK,an){if(W.w3&&!(W.wk&&W.wk<312)&&aK){X(function(){al(aK,an)})}else{if(aK){aK(aa)}}},createUnity:function(aK,an,aL,aM){if(W.w3&&!(W.wk&&W.wk<312)&&aK&&an&&aL&&aM){U(aK,aL,an,aM)}else{if(aM){aM({success:false,id:aK})}}},removeUnity:function(an){if(W.w3){az(an)}},notifyBeginInstall:function(aK,an){aD(aK,an)},setInstallStatus:function(aL,aK,aM,an){aj(aL,aK,aM,an)},doJavaInstall:function(an){m(an)},jvmPreloaded:function(an){ak(an)},appletStarted:function(an){ag(an)},javaInstallDone:function(aL,an,aK){setTimeout('unityObject.javaInstallDoneDirect("'+aL+'", '+an+', "'+aK+'");',0)},javaInstallDoneDirect:function(aL,an,aK){ax(aL,an,aK)},firstFrameCallback:function(){ap(w,y)}}}()};