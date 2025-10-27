import{o as ja,a as Pa,i as za,s as N,b as it,e as Me}from"./lifecycle.DVXYv02V.js";import{a3 as Ia,ab as $a,aU as Ra,aV as Wa,i as Na,u as Ya,aW as qa,aX as ze,aY as Oa,q as Ua,aZ as ht,c as nt,f as tt,a as Y,p as Xa,b as Ga,h as o,m as F,ax as U,g as t,d as vt,s as v,e as i,r,v as Ha,t as Pt,o as h}from"./utils.I031fIKC.js";import{a as Ka,s as V}from"./render.CXZIErzm.js";import{i as z}from"./if.UhLp8uqm.js";import{e as Va,i as Za}from"./each.BWRjh538.js";import{b as Se}from"./this.DSTH8Ssi.js";import{I as f}from"./Icon.D7jBQwJc.js";import{m as xt}from"./config.N4GTmMdA.js";import{I as Ja}from"./zh_TW.Jbo5k0IW.js";import{i as Qa}from"./translation.DqBsftdR.js";import"./props.Hvxcl91v.js";const tr=()=>performance.now(),Z={tick:c=>requestAnimationFrame(c),now:()=>tr(),tasks:new Set};function Ie(){const c=Z.now();Z.tasks.forEach(n=>{n.c(c)||(Z.tasks.delete(n),n.f())}),Z.tasks.size!==0&&Z.tick(Ie)}function er(c){let n;return Z.tasks.size===0&&Z.tick(Ie),{promise:new Promise(w=>{Z.tasks.add(n={c,f:w})}),abort(){Z.tasks.delete(n)}}}function zt(c,n){ze(()=>{c.dispatchEvent(new CustomEvent(n))})}function ar(c){if(c==="float")return"cssFloat";if(c==="offset")return"cssOffset";if(c.startsWith("--"))return c;const n=c.split("-");return n.length===1?n[0]:n[0]+n.slice(1).map(w=>w[0].toUpperCase()+w.slice(1)).join("")}function je(c){const n={},w=c.split(";");for(const k of w){const[T,A]=k.split(":");if(!T||A===void 0)break;const I=ar(T.trim());n[I]=A.trim()}return n}const rr=c=>c;function ir(c,n,w,k){var T=(c&qa)!==0,A="both",I,x=n.inert,L=n.style.overflow,d,b;function P(){return ze(()=>I??=w()(n,k?.()??{},{direction:A}))}var E={is_global:T,in(){n.inert=x,zt(n,"introstart"),d=ae(n,P(),b,1,()=>{zt(n,"introend"),d?.abort(),d=I=void 0,n.style.overflow=L})},out(S){n.inert=!0,zt(n,"outrostart"),b=ae(n,P(),d,0,()=>{zt(n,"outroend"),S?.()})},stop:()=>{d?.abort(),b?.abort()}},D=Ia;if((D.transitions??=[]).push(E),Ka){var M=T;if(!M){for(var u=D.parent;u&&(u.f&$a)!==0;)for(;(u=u.parent)&&(u.f&Ra)===0;);M=!u||(u.f&Wa)!==0}M&&Na(()=>{Ya(()=>E.in())})}}function ae(c,n,w,k,T){var A=k===1;if(Oa(n)){var I,x=!1;return Ua(()=>{if(!x){var S=n({direction:A?"in":"out"});I=ae(c,S,w,k,T)}}),{abort:()=>{x=!0,I?.abort()},deactivate:()=>I.deactivate(),reset:()=>I.reset(),t:()=>I.t()}}if(w?.deactivate(),!n?.duration)return T(),{abort:ht,deactivate:ht,reset:ht,t:()=>k};const{delay:L=0,css:d,tick:b,easing:P=rr}=n;var E=[];if(A&&w===void 0&&(b&&b(0,1),d)){var D=je(d(0,1));E.push(D,D)}var M=()=>1-k,u=c.animate(E,{duration:L,fill:"forwards"});return u.onfinish=()=>{u.cancel();var S=w?.t()??1-k;w?.abort();var g=k-S,et=n.duration*Math.abs(g),at=[];if(et>0){var $=!1;if(d)for(var p=Math.ceil(et/16.666666666666668),y=0;y<=p;y+=1){var a=S+g*P(y/p),J=je(d(a,1-a));at.push(J),$||=J.overflow==="hidden"}$&&(c.style.overflow="hidden"),M=()=>{var X=u.currentTime;return S+g*P(X/et)},b&&er(()=>{if(u.playState!=="running")return!1;var X=M();return b(X,1-X),!0})}u=c.animate(at,{duration:et,fill:"forwards"}),u.onfinish=()=>{M=()=>k,b?.(k,1-k),T()}},{abort:()=>{u&&(u.cancel(),u.effect=null,u.onfinish=ht)},deactivate:()=>{T=ht},reset:()=>{k===0&&b?.(1,0)},t:()=>M()}}function Pe(c){return function(...n){var w=n[0];return w.stopPropagation(),c?.apply(this,n)}}function nr(c){const n=c-1;return n*n*n+1}function sr(c,{delay:n=0,duration:w=400,easing:k=nr,axis:T="y"}={}){const A=getComputedStyle(c),I=+A.opacity,x=T==="y"?"height":"width",L=parseFloat(A[x]),d=T==="y"?["top","bottom"]:["left","right"],b=d.map(g=>`${g[0].toUpperCase()}${g.slice(1)}`),P=parseFloat(A[`padding${b[0]}`]),E=parseFloat(A[`padding${b[1]}`]),D=parseFloat(A[`margin${b[0]}`]),M=parseFloat(A[`margin${b[1]}`]),u=parseFloat(A[`border${b[0]}Width`]),S=parseFloat(A[`border${b[1]}Width`]);return{delay:n,duration:w,easing:k,css:g=>`overflow: hidden;opacity: ${Math.min(g*20,1)*I};${x}: ${g*L}px;padding-${d[0]}: ${g*P}px;padding-${d[1]}: ${g*E}px;margin-${d[0]}: ${g*D}px;margin-${d[1]}: ${g*M}px;border-${d[0]}-width: ${g*u}px;border-${d[1]}-width: ${g*S}px;min-${x}: 0`}}var lr=vt('<div class="fixed bottom-20 right-4 z-[60] max-w-sm"><div class="bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-slide-up"><!> <span class="text-sm flex-1"> </span> <button class="text-white/80 hover:text-white transition-colors"><!></button></div></div>'),or=vt('<div class="flex space-x-0.5"><div class="w-0.5 h-3 bg-white rounded-full animate-pulse"></div> <div class="w-0.5 h-4 bg-white rounded-full animate-pulse" style="animation-delay: 150ms;"></div> <div class="w-0.5 h-2 bg-white rounded-full animate-pulse" style="animation-delay: 300ms;"></div></div>'),ur=vt('<span class="text-sm text-[var(--content-meta)]"></span>'),cr=vt('<div role="button" tabindex="0"><div class="w-6 h-6 flex items-center justify-center"><!></div> <div class="w-10 h-10 rounded-lg overflow-hidden bg-[var(--btn-regular-bg)] flex-shrink-0"><img class="w-full h-full object-cover"/></div> <div class="flex-1 min-w-0"><div> </div> <div> </div></div></div>'),dr=vt('<div class="playlist-panel float-panel fixed bottom-20 right-4 w-80 max-h-96 overflow-hidden z-50"><div class="playlist-header flex items-center justify-between p-4 border-b border-[var(--line-divider)]"><h3 class="text-lg font-semibold text-90"> </h3> <button class="btn-plain w-8 h-8 rounded-lg"><!></button></div> <div class="playlist-content overflow-y-auto max-h-80"></div></div>'),vr=vt(`<!> <div><div role="button" tabindex="0" aria-label="显示音乐播放器"><!></div> <div role="button" tabindex="0" aria-label="展开音乐播放器"><div class="flex items-center gap-3 cursor-pointer"><div class="cover-container relative w-12 h-12 rounded-full overflow-hidden"><img alt="封面"/> <div class="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"><!></div></div> <div class="flex-1 min-w-0"><div class="text-sm font-medium text-90 truncate"> </div> <div class="text-xs text-50 truncate"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center" title="隐藏播放器"><!></button> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div></div></div> <div><div class="flex items-center gap-4 mb-4"><div class="cover-container relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0"><img alt="封面"/></div> <div class="flex-1 min-w-0"><div class="song-title text-lg font-bold text-90 truncate mb-1"> </div> <div class="song-artist text-sm text-50 truncate"> </div> <div class="text-xs text-30 mt-1"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center" title="隐藏播放器"><!></button> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div></div> <div class="progress-section mb-4"><div class="progress-bar flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-label="播放进度" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-[var(--primary)] rounded-full transition-all duration-100"></div></div></div> <div class="controls flex items-center justify-center gap-2 mb-4"><button><!></button> <button class="btn-plain w-10 h-10 rounded-lg"><!></button> <button><!></button> <button class="btn-plain w-10 h-10 rounded-lg"><!></button> <button><!></button></div> <div class="bottom-controls flex items-center gap-2"><button class="btn-plain w-8 h-8 rounded-lg"><!></button> <div class="flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-label="音量控制" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-[var(--primary)] rounded-full transition-all duration-100"></div></div> <button><!></button></div></div> <!></div> <style>.orb-player {
	position: relative;
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
}
.orb-player::before {
	content: '';
	position: absolute;
	inset: -2px;
	background: linear-gradient(45deg, var(--primary), transparent, var(--primary));
	border-radius: 50%;
	z-index: -1;
	opacity: 0;
	transition: opacity 0.3s ease;
}
.orb-player:hover::before {
	opacity: 0.3;
	animation: rotate 2s linear infinite;
}
.orb-player .animate-pulse {
	animation: musicWave 1.5s ease-in-out infinite;
}
@keyframes rotate {
	from { transform: rotate(0deg); }
	to { transform: rotate(360deg); }
}
@keyframes musicWave {
	0%, 100% { transform: scaleY(0.5); }
	50% { transform: scaleY(1); }
}
.music-player.hidden-mode {
	width: 48px;
	height: 48px;
}
.music-player {
    max-width: 320px;
    -webkit-user-select: none;
       -moz-user-select: none;
            user-select: none;
}
.mini-player {
    width: 280px;
    position: absolute;
    bottom: 0;
    right: 0;
    /*left: 0;*/
}
.expanded-player {
    width: 320px;
    position: absolute;
    bottom: 0;
    right: 0;
}
.animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes pulse {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
}
.progress-section div:hover,
.bottom-controls > div:hover {
    transform: scaleY(1.2);
    transition: transform 0.2s ease;
}
@media (max-width: 768px) {
    .music-player {
        max-width: 280px;
        /*left: 8px !important;*/
        bottom: 8px !important;
        right: 8px !important;
    }
    .music-player.expanded {
        width: calc(100vw - 16px);
        max-width: none;
        /*left: 8px !important;*/
        right: 8px !important;
    }
    .playlist-panel {
        width: calc(100vw - 16px) !important;
        /*left: 8px !important;*/
        right: 8px !important;
        max-width: none;
    }
    .controls {
        gap: 8px;
    }
    .controls button {
        width: 36px;
        height: 36px;
    }
    .controls button:nth-child(3) {
        width: 44px;
        height: 44px;
    }
}
@media (max-width: 480px) {
    .music-player {
        max-width: 260px;
    }
    .song-title {
        font-size: 14px;
    }
    .song-artist {
        font-size: 12px;
    }
    .controls {
        gap: 6px;
        margin-bottom: 12px;
    }
    .controls button {
        width: 32px;
        height: 32px;
    }
    .controls button:nth-child(3) {
        width: 40px;
        height: 40px;
    }
    .playlist-item {
        padding: 8px 12px;
    }
    .playlist-item .w-10 {
        width: 32px;
        height: 32px;
    }
}
@keyframes slide-up {
    from {
        transform: translateY(100%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}
.animate-slide-up {
    animation: slide-up 0.3s ease-out;
}
@media (hover: none) and (pointer: coarse) {
    .music-player button,
    .playlist-item {
        min-height: 44px;
    }
    .progress-section > div,
    .bottom-controls > div:nth-child(2) {
        height: 12px;
    }
}
/* 自定义旋转动画，停止时保持当前位置 */
@keyframes spin-continuous {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
.cover-container img {
    animation: spin-continuous 3s linear infinite;
    animation-play-state: paused;
}
.cover-container img.spinning {
    animation-play-state: running;
}
/* 让主题色按钮更有视觉反馈 */
button.bg-\\[var\\(--primary\\)\\] {
    box-shadow: 0 0 0 2px var(--primary);
    border: none;
}</style>`,1);function Er(c,n){Ga(n,!1);let w=xt.mode??"local",k=xt.meting_api??"https://www.bilibili.uno/api?server=:server&type=:type&id=:id&auth=:auth&r=:r",T=xt.id??"14164869977",A=xt.server??"netease",I=xt.type??"playlist",x=F(!1),L=F(!1),d=F(!1),b=F(!1),P=F(0),E=F(0),D=F(.7),M=F(!1),u=F(!1),S=F(!1),g=F(0),et=F(""),at=F(!1),$=F({title:"示例歌曲",artist:"示例艺术家",cover:"/favicon/favicon-light-192.png",url:"",duration:0}),p=F([]),y=F(0),a=F(),J=F(),X=F();const $e=[{id:1,title:"リリィ",artist:"上田 麗奈（うえだ れいな)",cover:"assets/music/cover/Lily.jpg",url:"assets/music/url/Lily.mp3",duration:257},{id:2,title:"Departures 〜あなたにお",artist:"EGOIST",cover:"assets/music/cover/Departures.jpg",url:"assets/music/url/Departures.mp3",duration:255}];async function Re(){if(!k||!T)return;o(u,!0);const s=k.replace(":server",A).replace(":type",I).replace(":id",T).replace(":auth","").replace(":r",Date.now().toString());try{const j=await fetch(s);if(!j.ok)throw new Error("meting api error");const G=await j.json();o(p,G.map(W=>{let ft=W.name??W.title??"未知歌曲",Ft=W.artist??W.author??"未知艺术家",R=W.duration??0;return R>1e4&&(R=Math.floor(R/1e3)),(!Number.isFinite(R)||R<=0)&&(R=0),{id:W.id,title:ft,artist:Ft,cover:W.pic??"",url:W.url??"",duration:R}})),t(p).length>0&&$t(t(p)[0]),o(u,!1)}catch{Et("Meting 歌单获取失败"),o(u,!1)}}function We(){!t(a)||!t($).url||(t(x)?t(a).pause():t(a).play())}function yt(){o(L,!t(L)),t(L)&&(o(b,!1),o(d,!1))}function _t(){o(d,!t(d)),t(d)&&(o(L,!1),o(b,!1))}function re(){o(b,!t(b))}function Ne(){o(S,!t(S))}function Ye(){o(g,(t(g)+1)%3)}function qe(){if(t(p).length<=1)return;const s=t(y)>0?t(y)-1:t(p).length-1;wt(s)}function It(){if(t(p).length<=1)return;let s;if(t(S))do s=Math.floor(Math.random()*t(p).length);while(s===t(y)&&t(p).length>1);else s=t(y)<t(p).length-1?t(y)+1:0;wt(s)}function wt(s){if(s<0||s>=t(p).length)return;const j=t(x);o(y,s),t(a)&&t(a).pause(),$t(t(p)[t(y)]),(j||!t(x))&&setTimeout(()=>{t(a)&&(t(a).readyState>=2?t(a).play().catch(()=>{}):t(a).addEventListener("canplay",()=>{t(a).play().catch(()=>{})},{once:!0}))},100)}function kt(s){return s.startsWith("http://")||s.startsWith("https://")||s.startsWith("/")?s:`/${s}`}function $t(s){!s||!t(a)||(o($,{...s}),s.url?(o(u,!0),t(a).pause(),U(a,t(a).currentTime=0),o(P,0),o(E,s.duration??0),t(a).removeEventListener("loadeddata",ie),t(a).removeEventListener("error",ne),t(a).removeEventListener("loadstart",se),t(a).addEventListener("loadeddata",ie,{once:!0}),t(a).addEventListener("error",ne,{once:!0}),t(a).addEventListener("loadstart",se,{once:!0}),U(a,t(a).src=kt(s.url)),t(a).load()):o(u,!1))}function ie(){o(u,!1),t(a)?.duration&&t(a).duration>1&&(o(E,Math.floor(t(a).duration)),t(p)[t(y)]&&U(p,t(p)[t(y)].duration=t(E)),U($,t($).duration=t(E)))}function ne(s){o(u,!1),Et(`无法播放 "${t($).title}"，正在尝试下一首...`),t(p).length>1?setTimeout(()=>It(),1e3):Et("播放列表中没有可用的歌曲")}function se(){}function Et(s){o(et,s),o(at,!0),setTimeout(()=>{o(at,!1)},3e3)}function Oe(){o(at,!1)}function Ue(s){if(!t(a)||!t(J))return;const j=t(J).getBoundingClientRect(),W=(s.clientX-j.left)/j.width*t(E);U(a,t(a).currentTime=W),o(P,W)}function Xe(s){if(!t(a)||!t(X))return;const j=t(X).getBoundingClientRect(),G=Math.max(0,Math.min(1,(s.clientX-j.left)/j.width));o(D,G),U(a,t(a).volume=t(D)),o(M,t(D)===0)}function le(){t(a)&&(o(M,!t(M)),U(a,t(a).muted=t(M)))}function oe(s){if(!Number.isFinite(s)||s<0)return"0:00";const j=Math.floor(s/60),G=Math.floor(s%60);return`${j}:${G.toString().padStart(2,"0")}`}function Ge(){t(a)&&(t(a).addEventListener("play",()=>{o(x,!0)}),t(a).addEventListener("pause",()=>{o(x,!1)}),t(a).addEventListener("timeupdate",()=>{o(P,t(a).currentTime)}),t(a).addEventListener("ended",()=>{t(g)===1?(U(a,t(a).currentTime=0),t(a).play().catch(()=>{})):t(g)===2||t(y)<t(p).length-1||t(S)?It():o(x,!1)}),t(a).addEventListener("error",s=>{o(u,!1)}),t(a).addEventListener("stalled",()=>{}),t(a).addEventListener("waiting",()=>{}))}ja(()=>{o(a,new Audio),U(a,t(a).volume=t(D)),Ge(),w==="meting"?Re():(o(p,[...$e]),t(p).length>0?$t(t(p)[0]):Et("本地播放列表为空"))}),Pa(()=>{t(a)&&(t(a).pause(),U(a,t(a).src=""))}),za();var ue=nt(),He=tt(ue);{var Ke=s=>{var j=vr(),G=tt(j);{var W=e=>{var m=lr(),_=i(m),C=i(_);f(C,{icon:"material-symbols:error",class:"text-xl flex-shrink-0"});var B=v(C,2),l=i(B,!0);r(B);var H=v(B,2),ct=i(H);f(ct,{icon:"material-symbols:close",class:"text-lg"}),r(H),r(_),r(m),Pt(()=>V(l,t(et))),h("click",H,Oe),Y(e,m)};z(G,e=>{t(at)&&e(W)})}var ft=v(G,2);let Ft;var R=i(ft);let ce;var Ve=i(R);{var Ze=e=>{f(e,{icon:"eos-icons:loading",class:"text-white text-lg"})},Je=e=>{var m=nt(),_=tt(m);{var C=l=>{var H=or();Y(l,H)},B=l=>{f(l,{icon:"material-symbols:music-note",class:"text-white text-lg"})};z(_,l=>{t(x)?l(C):l(B,!1)},!0)}Y(e,m)};z(Ve,e=>{t(u)?e(Ze):e(Je,!1)})}r(R);var st=v(R,2);let de;var ve=i(st),Rt=i(ve),Wt=i(Rt);let fe;var pe=v(Wt,2),Qe=i(pe);{var ta=e=>{f(e,{icon:"eos-icons:loading",class:"text-white text-xl"})},ea=e=>{var m=nt(),_=tt(m);{var C=l=>{f(l,{icon:"material-symbols:pause",class:"text-white text-xl"})},B=l=>{f(l,{icon:"material-symbols:play-arrow",class:"text-white text-xl"})};z(_,l=>{t(x)?l(C):l(B,!1)},!0)}Y(e,m)};z(Qe,e=>{t(u)?e(ta):e(ea,!1)})}r(pe),r(Rt);var Nt=v(Rt,2),Yt=i(Nt),aa=i(Yt,!0);r(Yt);var me=v(Yt,2),ra=i(me,!0);r(me),r(Nt);var be=v(Nt,2),At=i(be),ia=i(At);f(ia,{icon:"material-symbols:visibility-off",class:"text-lg"}),r(At);var qt=v(At,2),na=i(qt);f(na,{icon:"material-symbols:expand-less",class:"text-lg"}),r(qt),r(be),r(ve),r(st);var Ct=v(st,2);let ge;var Ot=i(Ct),Ut=i(Ot),he=i(Ut);let xe;r(Ut);var Xt=v(Ut,2),Gt=i(Xt),sa=i(Gt,!0);r(Gt);var Ht=v(Gt,2),la=i(Ht,!0);r(Ht);var ye=v(Ht,2),oa=i(ye);r(ye),r(Xt);var _e=v(Xt,2),Lt=i(_e),ua=i(Lt);f(ua,{icon:"material-symbols:visibility-off",class:"text-lg"}),r(Lt);var Kt=v(Lt,2),ca=i(Kt);f(ca,{icon:"material-symbols:expand-more",class:"text-lg"}),r(Kt),r(_e),r(Ot);var Vt=v(Ot,2),lt=i(Vt),da=i(lt);r(lt),Se(lt,e=>o(J,e),()=>t(J)),r(Vt);var Zt=v(Vt,2),ot=i(Zt);let we;var va=i(ot);f(va,{icon:"material-symbols:shuffle",class:"text-lg"}),r(ot);var pt=v(ot,2),fa=i(pt);f(fa,{icon:"material-symbols:skip-previous",class:"text-xl"}),r(pt);var ut=v(pt,2);let ke;var pa=i(ut);{var ma=e=>{f(e,{icon:"eos-icons:loading",class:"text-xl"})},ba=e=>{var m=nt(),_=tt(m);{var C=l=>{f(l,{icon:"material-symbols:pause",class:"text-xl"})},B=l=>{f(l,{icon:"material-symbols:play-arrow",class:"text-xl"})};z(_,l=>{t(x)?l(C):l(B,!1)},!0)}Y(e,m)};z(pa,e=>{t(u)?e(ma):e(ba,!1)})}r(ut);var mt=v(ut,2),ga=i(mt);f(ga,{icon:"material-symbols:skip-next",class:"text-xl"}),r(mt);var Bt=v(mt,2);let Ee;var ha=i(Bt);{var xa=e=>{f(e,{icon:"material-symbols:repeat-one",class:"text-lg"})},ya=e=>{var m=nt(),_=tt(m);{var C=l=>{f(l,{icon:"material-symbols:repeat",class:"text-lg"})},B=l=>{f(l,{icon:"material-symbols:repeat",class:"text-lg opacity-50"})};z(_,l=>{t(g)===2?l(C):l(B,!1)},!0)}Y(e,m)};z(ha,e=>{t(g)===1?e(xa):e(ya,!1)})}r(Bt),r(Zt);var Fe=v(Zt,2),Tt=i(Fe),_a=i(Tt);{var wa=e=>{f(e,{icon:"material-symbols:volume-off",class:"text-lg"})},ka=e=>{var m=nt(),_=tt(m);{var C=l=>{f(l,{icon:"material-symbols:volume-down",class:"text-lg"})},B=l=>{f(l,{icon:"material-symbols:volume-up",class:"text-lg"})};z(_,l=>{t(D)<.5?l(C):l(B,!1)},!0)}Y(e,m)};z(_a,e=>{t(M)||t(D)===0?e(wa):e(ka,!1)})}r(Tt);var rt=v(Tt,2),Ea=i(rt);r(rt),Se(rt,e=>o(X,e),()=>t(X));var Dt=v(rt,2);let Ae;var Fa=i(Dt);f(Fa,{icon:"material-symbols:queue-music",class:"text-lg"}),r(Dt),r(Fe),r(Ct);var Aa=v(Ct,2);{var Ca=e=>{var m=dr(),_=i(m),C=i(_),B=i(C,!0);r(C);var l=v(C,2),H=i(l);f(H,{icon:"material-symbols:close",class:"text-lg"}),r(l),r(_);var ct=v(_,2);Va(ct,5,()=>t(p),Za,(bt,Q,q)=>{var K=cr();let Mt;var gt=i(K),La=i(gt);{var Ba=O=>{f(O,{icon:"material-symbols:graphic-eq",class:"text-[var(--primary)] animate-pulse"})},Ta=O=>{var jt=nt(),te=tt(jt);{var ee=dt=>{f(dt,{icon:"material-symbols:pause",class:"text-[var(--primary)]"})},Sa=dt=>{var De=ur();De.textContent=q+1,Y(dt,De)};z(te,dt=>{q===t(y)?dt(ee):dt(Sa,!1)},!0)}Y(O,jt)};z(La,O=>{q===t(y)&&t(x)?O(Ba):O(Ta,!1)})}r(gt);var Jt=v(gt,2),Ce=i(Jt);r(Jt);var Le=v(Jt,2),St=i(Le);let Be;var Da=i(St,!0);r(St);var Qt=v(St,2);let Te;var Ma=i(Qt,!0);r(Qt),r(Le),r(K),Pt((O,jt,te,ee)=>{Mt=N(K,1,"playlist-item flex items-center gap-3 p-3 hover:bg-[var(--btn-plain-bg-hover)] cursor-pointer transition-colors",null,Mt,O),it(K,"aria-label",`播放 ${t(Q).title??""} - ${t(Q).artist??""}`),it(Ce,"src",jt),it(Ce,"alt",t(Q).title),Be=N(St,1,"font-medium truncate",null,Be,te),V(Da,t(Q).title),Te=N(Qt,1,"text-sm text-[var(--content-meta)] truncate",null,Te,ee),V(Ma,t(Q).artist)},[()=>({"bg-[var(--btn-plain-bg)]":q===t(y),"text-[var(--primary)]":q===t(y)}),()=>kt(t(Q).cover),()=>({"text-[var(--primary)]":q===t(y),"text-90":q!==t(y)}),()=>({"text-[var(--primary)]":q===t(y)})]),h("click",K,()=>wt(q)),h("keydown",K,O=>{(O.key==="Enter"||O.key===" ")&&(O.preventDefault(),wt(q))}),Y(bt,K)}),r(ct),r(m),Pt(bt=>V(B,bt),[()=>Qa(Ja.playlist)]),h("click",l,re),ir(3,m,()=>sr,()=>({duration:300,axis:"y"})),Y(e,m)};z(Aa,e=>{t(b)&&e(Ca)})}r(ft),Ha(2),Pt((e,m,_,C,B,l,H,ct,bt,Q,q,K,Mt,gt)=>{Ft=N(ft,1,"music-player fixed bottom-4 right-4 z-50 transition-all duration-300 ease-in-out",null,Ft,e),ce=N(R,1,"orb-player w-12 h-12 bg-[var(--primary)] rounded-full shadow-lg cursor-pointer transition-all duration-500 ease-in-out flex items-center justify-center hover:scale-110 active:scale-95",null,ce,m),de=N(st,1,"mini-player card-base bg-[var(--float-panel-bg)] shadow-xl rounded-2xl p-3 transition-all duration-500 ease-in-out",null,de,_),it(Wt,"src",C),fe=N(Wt,1,"w-full h-full object-cover transition-transform duration-300",null,fe,B),V(aa,t($).title),V(ra,t($).artist),ge=N(Ct,1,"expanded-player card-base bg-[var(--float-panel-bg)] shadow-xl rounded-2xl p-4 transition-all duration-500 ease-in-out",null,ge,l),it(he,"src",H),xe=N(he,1,"w-full h-full object-cover transition-transform duration-300",null,xe,ct),V(sa,t($).title),V(la,t($).artist),V(oa,`${bt??""} / ${Q??""}`),it(lt,"aria-valuenow",t(E)>0?t(P)/t(E)*100:0),Me(da,`width: ${t(E)>0?t(P)/t(E)*100:0}%`),we=N(ot,1,"w-10 h-10 rounded-lg",null,we,q),ot.disabled=t(p).length<=1,pt.disabled=t(p).length<=1,ke=N(ut,1,"btn-regular w-12 h-12 rounded-full",null,ke,K),ut.disabled=t(u),mt.disabled=t(p).length<=1,Ee=N(Bt,1,"w-10 h-10 rounded-lg",null,Ee,Mt),it(rt,"aria-valuenow",t(D)*100),Me(Ea,`width: ${t(D)*100}%`),Ae=N(Dt,1,"btn-plain w-8 h-8 rounded-lg",null,Ae,gt)},[()=>({expanded:t(L),"hidden-mode":t(d)}),()=>({"opacity-0":!t(d),"scale-0":!t(d),"pointer-events-none":!t(d)}),()=>({"opacity-0":t(L)||t(d),"scale-95":t(L)||t(d),"pointer-events-none":t(L)||t(d)}),()=>kt(t($).cover),()=>({spinning:t(x)&&!t(u),"animate-pulse":t(u)}),()=>({"opacity-0":!t(L),"scale-95":!t(L),"pointer-events-none":!t(L)}),()=>kt(t($).cover),()=>({spinning:t(x)&&!t(u),"animate-pulse":t(u)}),()=>oe(t(P)),()=>oe(t(E)),()=>({"btn-regular":t(S),"btn-plain":!t(S)}),()=>({"opacity-50":t(u)}),()=>({"btn-regular":t(g)>0,"btn-plain":t(g)===0}),()=>({"text-[var(--primary)]":t(b)})]),h("click",R,_t),h("keydown",R,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),_t())}),h("click",At,Pe(_t)),h("click",qt,Pe(yt)),h("click",st,yt),h("keydown",st,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),yt())}),h("click",Lt,_t),h("click",Kt,yt),h("click",lt,Ue),h("keydown",lt,e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault(),t(J).getBoundingClientRect();const _=.5*t(E);t(a)&&(U(a,t(a).currentTime=_),o(P,_))}}),h("click",ot,Ne),h("click",pt,qe),h("click",ut,We),h("click",mt,It),h("click",Bt,Ye),h("click",Tt,le),h("click",rt,Xe),h("keydown",rt,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),e.key==="Enter"&&le())}),h("click",Dt,re),Y(s,j)};z(He,s=>{s(Ke)})}Y(c,ue),Xa()}export{Er as default};
