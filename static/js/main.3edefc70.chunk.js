(this["webpackJsonpkage-editor"]=this["webpackJsonpkage-editor"]||[]).push([[0],{33:function(e){e.exports=JSON.parse('{"stroke type":"\u7dda\u7a2e","stroke type 1":"\u76f4\u7dda","stroke type 2":"\u66f2\u7dda","stroke type 3":"\u6298\u308c","stroke type 4":"\u4e59\u7dda","stroke type 6":"\u8907\u66f2\u7dda","stroke type 7":"\u7e26\u6255\u3044","part":"\u90e8\u54c1","alias of":"({{entity}} \u306e\u30a8\u30a4\u30ea\u30a2\u30b9)","stretch":"\u30b9\u30c8\u30ec\u30c3\u30c1:","selecting multiple strokes":"\u8907\u6570\u9078\u629e\u4e2d","select prev":"\u2190","swap with prev":"\u5165\u66ff\u2190","select next":"\u2192","swap with next":"\u2192\u5165\u66ff","undo":"\u5143\u306b\u623b\u3059","redo":"\u3084\u308a\u76f4\u3059","select all":"\u3059\u3079\u3066\u3092\u9078\u629e","invert selection":"\u9078\u629e\u7bc4\u56f2\u3092\u53cd\u8ee2","copy":"\u30b3\u30d4\u30fc","paste":"\u8cbc\u308a\u4ed8\u3051","cut":"\u5207\u308a\u53d6\u308a","start freehand":"\u624b\u66f8\u304d\u958b\u59cb","end freehand":"\u624b\u66f8\u304d\u7d42\u4e86","decompose":"\u90e8\u54c1\u5206\u89e3","options":"\u8868\u793a\u8a2d\u5b9a...","finish edit":"\u7de8\u96c6\u7d42\u4e86"}')},34:function(e,t,n){e.exports=n(67)},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a,c=n(0),r=n.n(c),o=n(15),l=n.n(o),u=n(3),i=n(16),s=n(28),f=function(e){switch(e){case 0:case 1:case 9:return 7;case 2:case 3:case 4:return 9;case 6:case 7:case 99:return 11;default:return 0}},p=function(e){var t=e.value.slice();return 99===t[0]&&(t[7]=e.partName||""),t.join(":")},d=function(e){return e.split(/[$\r\n]+/).map((function(e){return function(e){for(var t=e.split(":"),n=+t[0],a=f(n),c=[],r=0;r<a;r++)c.push(Math.floor(+t[r]||0));return 99===c[0]?{value:c,partName:t[7]||""}:{value:c}}(e)})).filter((function(e){return 0!==(t=e).value.length&&(0!==t.value[0]||97===t.value[1]||98===t.value[1]||99===t.value[1]);var t}))},h=new URLSearchParams(window.location.hash.slice(1)),v=n(5),b=n(1),m=n(10),O=n.n(m),j=O()("SELECT"),g={selectSingle:j("SELECT_SINGLE"),selectAddSingle:j("SELECT_ADD_SINGLE"),selectRemoveSingle:j("SELECT_REMOVE_SINGLE"),selectNone:j("SELECT_NONE"),selectAll:j("SELECT_ALL"),selectDeselected:j("SELECT_TOGGLE_ALL"),selectPrev:j("SELECT_PREV"),selectNext:j("SELECT_NEXT")},y=n(2),E=n(18);!function(e){e[e.north=0]="north",e[e.south=1]="south",e[e.east=2]="east",e[e.west=3]="west",e[e.southeast=4]="southeast"}(a||(a={}));var S,M=O()("EDITOR"),k={startAreaSelect:M("AREA_SELECT_START"),startSelectionDrag:M("SELECTION_DRAG_START"),startPointDrag:M("MOVE_POINT_START"),startResize:M("RESIZE_START"),mouseMove:M("MOUSE_MOVE"),mouseUp:M("MOUSE_UP"),updateCTMInv:M("UPDATE_CTMINV")},w=n(8),x=n(7),C=[[{position:"start",strokeTypes:[1],shapeTypes:[2]},{position:"start",strokeTypes:[1,2,3,4,6,7],shapeTypes:[12]}],[{position:"start",strokeTypes:[1],shapeTypes:[2]},{position:"end",strokeTypes:[1],shapeTypes:[13,313,413]}],[{position:"end",strokeTypes:[1],shapeTypes:[2]},{position:"start",strokeTypes:[1,2,3,4,6,7],shapeTypes:[22]}],[{position:"end",strokeTypes:[1],shapeTypes:[2]},{position:"end",strokeTypes:[1],shapeTypes:[23,24]}]],N=function(e,t){return e.position===t.position&&e.strokeTypes.includes(t.strokeType)&&e.shapeTypes.includes(t.shapeType)},T=function(e){var t=[];switch(e.value[0]){case 1:case 2:case 3:case 4:case 6:case 7:t.push({position:"start",strokeType:e.value[0],shapeType:e.value[1],coord:[e.value[3],e.value[4]],pointIndex:0});var n=(f(e.value[0])-3)/2-1;t.push({position:"end",strokeType:e.value[0],shapeType:e.value[2],coord:[e.value[3+2*n],e.value[3+2*n+1]],pointIndex:n})}return t},I=Object(x.a)((function(e,t){var n,a=[],c=Object(w.a)(t);try{for(c.s();!(n=c.n()).done;){var r,o=n.value,l=o.lineIndex,u=o.pointIndex,i=Object(w.a)(T(e[l]));try{for(i.s();!(r=i.n()).done;){var s=r.value;s.pointIndex===u&&a.push(s)}}catch(p){i.e(p)}finally{i.f()}}}catch(p){c.e(p)}finally{c.f()}var f=[];return e.forEach((function(e,t){var n,c=Object(w.a)(T(e));try{var r=function(){var e=n.value;a.some((function(t){return a=e,(n=t).coord[0]===a.coord[0]&&n.coord[1]===a.coord[1]&&C.some((function(e){var t=Object(y.a)(e,2),c=t[0],r=t[1];return N(c,n)&&N(r,a)||N(r,n)&&N(c,a)}));var n,a}))&&f.push({lineIndex:t,pointIndex:e.pointIndex})};for(c.s();!(n=c.n()).done;)r()}catch(p){c.e(p)}finally{c.f()}})),f}),(function(e,t){var n=Object(y.a)(e,2),a=n[0],c=n[1],r=Object(y.a)(t,2),o=r[0],l=r[1];return a===o&&c.length===l.length&&c.every((function(e,t){return e.lineIndex===l[t].lineIndex&&e.pointIndex===l[t].pointIndex}))})),D=Object(x.a)((function(e,t){var n,a=[],c=Object(w.a)(t);try{for(c.s();!(n=c.n()).done;){var r=n.value,o=e[r];a.push({lineIndex:r,pointIndex:0}),a.push({lineIndex:r,pointIndex:(f(o.value[0])-3)/2-1})}}catch(l){c.e(l)}finally{c.f()}return I(e,a).filter((function(e){var n=e.lineIndex;return!t.includes(n)}))})),P=function(e,t,n){switch(e.value[0]){case 99:var a=e.value.slice();return a[3]=t(a[3]),a[4]=n(a[4]),a[5]=t(a[5]),a[6]=n(a[6]),{value:a,partName:e.partName};case 0:case 1:case 2:case 3:case 4:case 6:case 7:case 9:for(var c=e.value.slice(),r=3;r+2<=c.length;r+=2)c[r]=t(c[r]),c[r+1]=n(c[r+1]);return{value:c};default:return e}},_=function(e,t,n,a){if(0===t.length)return e;var c,r=e.slice(),o=Object(w.a)(t);try{for(o.s();!(c=o.n()).done;){var l=c.value,u=l.lineIndex,i=l.pointIndex,s=r[u],f=s.value.slice();f[3+2*i]=n(f[3+2*i]),f[3+2*i+1]=a(f[3+2*i+1]),r[u]=Object(b.a)(Object(b.a)({},s),{},{value:f})}}catch(p){o.e(p)}finally{o.f()}return r},A=function(e,t,n,a){var c=D(e,t),r=function(e){return Math.round(e+n)},o=function(e){return Math.round(e+a)};return e=e.map((function(e,n){return t.includes(n)?P(e,r,o):e})),e=_(e,c,r,o)},L=function(e,t,n,a,c){if(0===t.length)return e;var r=t[0],o={lineIndex:r,pointIndex:n},l=I(e,[o]).filter((function(e){return e.lineIndex!==r}));l.push(o);return e=_(e,l,(function(e){return Math.round(e+a)}),(function(e){return Math.round(e+c)}))},R=function(e,t,n,a){return e.map((function(e,c){return t.includes(c)?function(e,t,n){var a=Object(y.a)(t,4),c=a[0],r=a[1],o=a[2],l=a[3],u=Object(y.a)(n,4),i=u[0],s=u[1],f=u[2],p=u[3];return P(e,(function(e){return Math.round(i+(e-c)*(f-i)/(o-c))}),(function(e){return Math.round(s+(e-r)*(p-s)/(l-r))}))}(e,n,a):e}))},z=n(29),X=O()("EDITOR"),Y={loadedBuhin:X("LOAD_BUHIN_DATA"),loadedStretchParam:X("LOAD_STRETCH_PARAM"),swapWithPrev:X("SWAP_WITH_PREV"),swapWithNext:X("SWAP_WITH_NEXT"),undo:X("UNDO"),redo:X("REDO"),paste:X("PASTE"),copy:X("COPY_SELECTION"),cut:X("CUT_SELECTION"),decomposeSelected:X("DECOMPOSE_SELECTION"),toggleFreehand:X("TOGGLE_FREEHAND_MODE"),openOptionModal:X("OPEN_OPTION_MODAL"),closeOptionModal:X("CLOSE_OPTION_MODAL")},U=n(6),W=n.n(U),B=n(13),F=function(){var e=Object(B.a)(W.a.mark((function e(t){var n;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://asia-northeast1-ku6goma.cloudfunctions.net/gwproxy"+t);case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("API error occurred");case 5:return e.t0=URLSearchParams,e.next=8,n.text();case 8:return e.t1=e.sent,e.abrupt("return",new e.t0(e.t1));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(B.a)(W.a.mark((function e(t){var n;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F("/get_source.cgi?name=".concat(encodeURIComponent(t)));case 2:return n=e.sent,e.abrupt("return",n.get("data"));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=new z.Kage,$=new Set,V=Object(x.a)((function(e,t){var n=e.map(p);return H.kBuhin.search=function(e){var n=t.get(e);return"undefined"===typeof n?(function(e){$.has(e)||($.add(e),G(e).then((function(t){if("string"!==typeof t)throw new Error("failed to get buhin source of ".concat(e));var n=/^0:1:0:(-?\d+):(-?\d+):(-?\d+):(-?\d+)(?=$|\$)/.exec(t);if(n){var a=[+n[1]||0,+n[2]||0,+n[3]||0,+n[4]||0];ue.dispatch(Y.loadedStretchParam([e,a]))}ue.dispatch(Y.loadedBuhin([e,t])),$.delete(e)})).catch((function(e){return console.error(e)})))}(e),""):n},H.makeGlyphSeparated(n)})),K=n(4),J=function(e){var t=e.map((function(e){return Object(y.a)(e,1)[0]})),n=e.map((function(e){return Object(y.a)(e,2)[1]}));return[Math.min.apply(Math,Object(v.a)(t)),Math.min.apply(Math,Object(v.a)(n)),Math.max.apply(Math,Object(v.a)(t)),Math.max.apply(Math,Object(v.a)(n))]},Z=function(e){switch(e.value[0]){case 99:return J([[e.value[3],e.value[4]],[e.value[5],e.value[6]]]);case 0:case 1:case 2:case 3:case 4:case 6:case 7:case 9:for(var t=[],n=3;n+2<=e.value.length;n+=2)t.push([e.value[n],e.value[n+1]]);return J(t);default:return J([])}},q=function(e,t){var n=Object(y.a)(e,4),a=n[0],c=n[1],r=n[2],o=n[3],l=Object(y.a)(t,4),u=l[0],i=l[1],s=l[2],f=l[3];return[Math.min(a,u),Math.min(c,i),Math.max(r,s),Math.max(o,f)]},Q=Object(x.a)((function(e){return e.map(Z).reduce(q,J([]))}),(function(e,t){var n=Object(y.a)(e,1)[0],a=Object(y.a)(t,1)[0];return n.length===a.length&&n.every((function(e,t){return e===a[t]}))})),ee=function(e,t,n,c,r){if(1===t.length){var o=e[t[0]];switch(o.value[0]){case 0:case 9:case 99:var l=o.value.slice();switch(n){case a.north:l[4]+=r;break;case a.west:l[3]+=c;break;case a.south:l[6]+=r;break;case a.east:l[5]+=c;break;case a.southeast:l[5]+=c,l[6]+=r}var u=99===o.value[0]?{value:l,partName:o.partName}:{value:l};return e.map((function(e,n){return n===t[0]?u:e}))}}var i=Q(t.map((function(t){return e[t]}))),s=i.slice();switch(n){case a.north:s[1]=Math.min(s[1]+r,s[3]-20);break;case a.west:s[0]=Math.min(s[0]+c,s[2]-20);break;case a.south:s[3]=Math.max(s[3]+r,s[1]+20);break;case a.east:s[2]=Math.max(s[2]+c,s[0]+20);break;case a.southeast:s[2]=Math.max(s[2]+c,s[0]+20),s[3]=Math.max(s[3]+r,s[1]+20)}return R(e,t,i,s)},te=Object(K.a)([function(e){return e.glyph},function(e){return e.selection},function(e){return e.dragSelection},function(e){return e.dragPoint},function(e){return e.resizeSelection}],(function(e,t,n,a,c){if(n){var r=Object(y.a)(n,4),o=r[0],l=r[1],u=r[2],i=r[3];e=A(e,t,u-o,i-l)}else if(a){var s=Object(y.a)(a,2),f=s[0],p=Object(y.a)(s[1],4),d=p[0],h=p[1],v=p[2],b=p[3];e=L(e,t,f,v-d,b-h)}else if(c){var m=Object(y.a)(c,2),O=m[0],j=Object(y.a)(m[1],4),g=j[0],E=j[1],S=j[2],M=j[3];e=ee(e,t,O,S-g,M-E)}return e})),ne=function(e){return 99!==e.value[0]?null:[e.value[9],e.value[10],e.value[1],e.value[2]]},ae=function(e){var t=Object(y.a)(e,4),n=t[0],a=t[1],c=t[2];return c<=100&&(c+=200,n=a=0),[n,a,c,t[3]]},ce=function(e,t){var n=Object(y.a)(e,4),a=n[0],c=n[1],r=n[2],o=n[3];if(a===r&&c===o)return 0;var l,u=ae(t),i=Object(y.a)(u,4),s=i[0],f=i[1],p=i[2],d=i[3];return s===p-200&&f===d?0:(l=Math.round(Math.abs(a-r)>Math.abs(c-o)?(p-100-a)/(r-a)*20:(d+100-c)/(o-c)*20),Math.max(-10,Math.min(10,l))||0)},re=function(e,t){if(99!==e.value[0])return[e];var n=t.get(e.partName);if(!n)return[e];var a=!1;H.kBuhin.search=function(e){var n=t.get(e);return"string"!==typeof n?(a=!0,""):n};var c=d(n),r=H.getEachStrokes(function(e){return e.map((function(e){return p(e)})).join("$")}(c)),o=H.getBox(r);if(a)return[e];var l=e.value[3],u=e.value[4],i=e.value[5],s=e.value[6],f=ae(ne(e)),h=Object(y.a)(f,4),v=h[0],b=h[1],m=h[2],O=h[3],j=!(v===m-200&&b===O);return c.map((function(e){var t=P(e,(function(e){var t=j?H.stretch(m-200,v,e,o.minX,o.maxX):e;return Math.round(t/200*(i-l)+l)}),(function(e){var t=j?H.stretch(O,b,e,o.minY,o.maxY):e;return Math.round(t/200*(s-u)+u)}));if(!j||99!==t.value[0])return t;var n=ae(ne(t)),a=Object(y.a)(n,4),c=a[0],r=a[1],f=a[2],p=a[3];if(c!==f-200||r!==p)return t;var d=t.value[3],h=t.value[4],g=t.value[5],E=t.value[6];if(d===g||h===E)return t;var S=function(e){return(e-d)/(g-d)*200},M=function(e){return(e-h)/(E-h)*200};return function(e,t){if(99!==e.value[0])return e;var n=Object(y.a)(t,4),a=n[0],c=n[1],r=n[2],o=n[3],l=e.value.slice();return l[9]=a,l[10]=c,l[1]=r,l[2]=o,{value:l,partName:e.partName}}(t,[S(c+100),M(r+100),S(f-100)+100,M(p+100)])}))},oe={glyph:d(h.get("data")||""),selection:[],areaSelectRect:null,dragSelection:null,dragPoint:null,resizeSelection:null,ctmInv:null,buhinMap:new Map,stretchParamMap:new Map,freehandMode:!1,showOptionModal:!1,clipboard:[]},le=Object(s.reducerWithInitialState)(oe).withHandling((function(e){return e.case(g.selectSingle,(function(e,t){return Object(b.a)(Object(b.a)({},e),{},{selection:[t]})})).case(g.selectAddSingle,(function(e,t){return Object(b.a)(Object(b.a)({},e),{},{selection:e.selection.includes(t)?e.selection:e.selection.concat([t])})})).case(g.selectRemoveSingle,(function(e,t){return Object(b.a)(Object(b.a)({},e),{},{selection:e.selection.filter((function(e){return t!==e}))})})).case(g.selectAll,(function(e){return Object(b.a)(Object(b.a)({},e),{},{selection:e.glyph.map((function(e,t){return t}))})})).case(g.selectDeselected,(function(e){return Object(b.a)(Object(b.a)({},e),{},{selection:e.glyph.map((function(e,t){return t})).filter((function(t){return!e.selection.includes(t)}))})})).case(g.selectNone,(function(e){return Object(b.a)(Object(b.a)({},e),{},{selection:[]})})).case(g.selectPrev,(function(e){if(0===e.glyph.length)return Object(b.a)(Object(b.a)({},e),{},{selection:[]});var t=0===e.selection.length?0:Math.min.apply(Math,Object(v.a)(e.selection));return Object(b.a)(Object(b.a)({},e),{},{selection:[(t-1+e.glyph.length)%e.glyph.length]})})).case(g.selectNext,(function(e){if(0===e.glyph.length)return Object(b.a)(Object(b.a)({},e),{},{selection:[]});var t=0===e.selection.length?-1:Math.max.apply(Math,Object(v.a)(e.selection));return Object(b.a)(Object(b.a)({},e),{},{selection:[(t+1+e.glyph.length)%e.glyph.length]})}))})).withHandling((function(e){return e.case(k.startAreaSelect,(function(e,t){if(!e.ctmInv)return e;var n=e.ctmInv(t.clientX,t.clientY),a=Object(y.a)(n,2),c=a[0],r=a[1];return Object(b.a)(Object(b.a)({},e),{},{areaSelectRect:[c,r,c,r]})})).case(k.startSelectionDrag,(function(e,t){if(!e.ctmInv)return e;var n=e.ctmInv(t.clientX,t.clientY),a=Object(y.a)(n,2),c=a[0],r=a[1];return Object(b.a)(Object(b.a)({},e),{},{dragSelection:[c,r,c,r]})})).case(k.startPointDrag,(function(e,t){var n=Object(y.a)(t,2),a=n[0],c=n[1];if(!e.ctmInv)return e;var r=e.ctmInv(a.clientX,a.clientY),o=Object(y.a)(r,2),l=o[0],u=o[1];return Object(b.a)(Object(b.a)({},e),{},{dragPoint:[c,[l,u,l,u]]})})).case(k.startResize,(function(e,t){var n=Object(y.a)(t,2),a=n[0],c=n[1];if(!e.ctmInv)return e;var r=e.ctmInv(a.clientX,a.clientY),o=Object(y.a)(r,2),l=o[0],u=o[1];return Object(b.a)(Object(b.a)({},e),{},{resizeSelection:[c,[l,u,l,u]]})})).case(k.mouseMove,(function(e,t){if(!e.ctmInv)return e;if(e.areaSelectRect){var n=Object(y.a)(e.areaSelectRect,2),a=n[0],c=n[1],r=e.ctmInv(t.clientX,t.clientY),o=Object(y.a)(r,2),l=o[0],u=o[1];return Object(b.a)(Object(b.a)({},e),{},{areaSelectRect:[a,c,l,u]})}if(e.dragSelection){var i=Object(y.a)(e.dragSelection,2),s=i[0],f=i[1],p=e.ctmInv(t.clientX,t.clientY),d=Object(y.a)(p,2),h=d[0],v=d[1];return Object(b.a)(Object(b.a)({},e),{},{dragSelection:[s,f,h,v]})}if(e.dragPoint){var m=Object(y.a)(e.dragPoint,2),O=m[0],j=Object(y.a)(m[1],2),g=j[0],E=j[1],S=e.ctmInv(t.clientX,t.clientY),M=Object(y.a)(S,2),k=M[0],w=M[1];return Object(b.a)(Object(b.a)({},e),{},{dragPoint:[O,[g,E,k,w]]})}if(e.resizeSelection){var x=Object(y.a)(e.resizeSelection,2),C=x[0],N=Object(y.a)(x[1],2),T=N[0],I=N[1],D=e.ctmInv(t.clientX,t.clientY),P=Object(y.a)(D,2),_=P[0],A=P[1];return Object(b.a)(Object(b.a)({},e),{},{resizeSelection:[C,[T,I,_,A]]})}return e})).case(k.mouseUp,(function(e,t){if(!e.ctmInv)return e;if(e.areaSelectRect){var n=Object(y.a)(e.areaSelectRect,2),a=n[0],c=n[1],r=e.ctmInv(t.clientX,t.clientY),o=Object(y.a)(r,2),l=o[0],u=o[1],i=function(e,t,n,a,c,r){for(var o=V(e,t),l=[],u=[[n,a],[n,r],[c,r],[c,a],[n,a]],i=0;i<o.length;i++){o[i].array.some((function(e){var t=e.array.map((function(e){return[e.x,e.y]}));return t.push(t[0]),Object(E.a)(u,t)||Object(E.a)(t,u)||Object(E.b)(u,t)}))&&l.push(i)}return l}(e.glyph,e.buhinMap,a,c,l,u),s=Array.from(new Set(e.selection.concat(i)));return Object(b.a)(Object(b.a)({},e),{},{selection:s,areaSelectRect:null})}if(e.dragSelection){var f=Object(y.a)(e.dragSelection,2),p=f[0],d=f[1],h=e.ctmInv(t.clientX,t.clientY),v=Object(y.a)(h,2),m=v[0],O=v[1],j=A(e.glyph,e.selection,m-p,O-d);return Object(b.a)(Object(b.a)({},e),{},{glyph:j,dragSelection:null})}if(e.dragPoint){var g=Object(y.a)(e.dragPoint,2),S=g[0],M=Object(y.a)(g[1],2),k=M[0],w=M[1],x=e.ctmInv(t.clientX,t.clientY),C=Object(y.a)(x,2),N=C[0],T=C[1],I=L(e.glyph,e.selection,S,N-k,T-w);return Object(b.a)(Object(b.a)({},e),{},{glyph:I,dragPoint:null})}if(e.resizeSelection){var D=Object(y.a)(e.resizeSelection,2),P=D[0],_=Object(y.a)(D[1],2),R=_[0],z=_[1],X=e.ctmInv(t.clientX,t.clientY),Y=Object(y.a)(X,2),U=Y[0],W=Y[1],B=ee(e.glyph,e.selection,P,U-R,W-z);return Object(b.a)(Object(b.a)({},e),{},{glyph:B,resizeSelection:null})}return e})).case(k.updateCTMInv,(function(e,t){return Object(b.a)(Object(b.a)({},e),{},{ctmInv:t})}))})).withHandling((function(e){return e.case(Y.loadedBuhin,(function(e,t){var n=Object(y.a)(t,2),a=n[0],c=n[1],r=new Map(e.buhinMap);return r.set(a,c),Object(b.a)(Object(b.a)({},e),{},{buhinMap:r})})).case(Y.loadedStretchParam,(function(e,t){var n=Object(y.a)(t,2),a=n[0],c=n[1],r=new Map(e.stretchParamMap);return r.set(a,c),Object(b.a)(Object(b.a)({},e),{},{stretchParamMap:r})})).case(Y.swapWithPrev,(function(e){if(1!==e.selection.length)return e;var t=e.selection[0];if(0===t)return e;var n=e.glyph.slice();return n[t-1]=e.glyph[t],n[t]=e.glyph[t-1],Object(b.a)(Object(b.a)({},e),{},{glyph:n,selection:[t-1]})})).case(Y.swapWithNext,(function(e){if(1!==e.selection.length)return e;var t=e.selection[0];if(t===e.glyph.length-1)return e;var n=e.glyph.slice();return n[t+1]=e.glyph[t],n[t]=e.glyph[t+1],Object(b.a)(Object(b.a)({},e),{},{glyph:n,selection:[t+1]})})).case(Y.undo,(function(e){return e})).case(Y.redo,(function(e){return e})).case(Y.paste,(function(e){return Object(b.a)(Object(b.a)({},e),{},{glyph:e.glyph.concat(e.clipboard),selection:e.clipboard.map((function(t,n){return e.glyph.length+n}))})})).case(Y.copy,(function(e){var t=e.selection.map((function(t){return e.glyph[t]})),n=Q(t),a=Object(y.a)(n,2),c=a[0],r=a[1],o=function(e){return 230+e-c},l=function(e){return 20+e-r};return Object(b.a)(Object(b.a)({},e),{},{clipboard:e.selection.map((function(t){return P(e.glyph[t],o,l)}))})})).case(Y.cut,(function(e){return Object(b.a)(Object(b.a)({},e),{},{glyph:e.glyph.filter((function(t,n){return!e.selection.includes(n)})),clipboard:e.selection.map((function(t){return e.glyph[t]})),selection:[]})})).case(Y.decomposeSelected,(function(e){var t=[],n=[];return e.glyph.forEach((function(a,c){if(e.selection.includes(c)){var r=re(a,e.buhinMap);n=n.concat(r.map((function(e,n){return t.length+n}))),t=t.concat(r)}else t.push(a)})),Object(b.a)(Object(b.a)({},e),{},{glyph:t,selection:n})})).case(Y.toggleFreehand,(function(e){return Object(b.a)(Object(b.a)({},e),{},{selection:e.freehandMode?e.selection:[],freehandMode:!e.freehandMode})})).case(Y.openOptionModal,(function(e){return Object(b.a)(Object(b.a)({},e),{},{showOptionModal:!0})})).case(Y.closeOptionModal,(function(e){return Object(b.a)(Object(b.a)({},e),{},{showOptionModal:!1})}))})),ue=Object(i.b)(le),ie=(n(53),function(e){return r.a.createElement(r.a.Fragment,null,e.polygons.array.map((function(e,t){return r.a.createElement("polygon",{key:t,points:e.array.map((function(e){var t=e.x,n=e.y;return"".concat(t,",").concat(n," ")})).join("")})})))}),se=(n(54),function(e){var t=V(e.glyph,e.buhinMap),n=e.selection,a=t.map((function(e,t){return t})).filter((function(e){return!n.includes(e)}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("g",{className:"strokes-deselected"},a.map((function(n){return r.a.createElement("g",{key:n,onMouseDown:function(t){var a;return null===(a=e.handleMouseDownDeselectedStroke)||void 0===a?void 0:a.call(e,t,n)}},r.a.createElement(ie,{polygons:t[n]}))}))),r.a.createElement("g",{className:"strokes-selected"},n.map((function(n){return r.a.createElement("g",{key:n,onMouseDown:function(t){var a;return null===(a=e.handleMouseDownSelectedStroke)||void 0===a?void 0:a.call(e,t,n)}},r.a.createElement(ie,{polygons:t[n]}))}))))}),fe=(n(55),function(e){if(!e.rect)return null;var t=Object(y.a)(e.rect,4),n=t[0],a=t[1],c=t[2],o=t[3];if(n>c){var l=n;n=c,c=l}if(a>o){var u=a;a=o,o=u}return r.a.createElement("rect",{className:"areaselect-rect",x:n,y:a,width:c-n,height:o-a})});!function(e){e[e.none=0]="none",e[e.online=1]="online",e[e.match=2]="match"}(S||(S={}));var pe=function(e,t){var n=e[t.lineIndex],a=(f(n.value[0])-3)/2-1;if(0!==t.pointIndex&&t.pointIndex!==a)return S.none;for(var c=n.value[3+2*t.pointIndex],r=n.value[3+2*t.pointIndex+1],o=function(e,t,n,a){return e===n&&e===c&&t<=r&&r<=a||t===a&&t===r&&e<=c&&c<=n},l=S.none,u=0;u<e.length;u++)if(t.lineIndex!==u){var i=e[u];if(![0,9,99].includes(i.value[0])){if(i.value[3]===c&&i.value[4]===r)return S.match;var s=(f(i.value[0])-3)/2-1;if(i.value[3+2*s]===c&&i.value[3+2*s+1]===r)return S.match;switch(i.value[0]){case 3:case 4:(o(i.value[3],i.value[4],i.value[5],i.value[6])||o(i.value[5],i.value[6],i.value[7],i.value[8]))&&(l=S.online);break;case 1:case 7:o(i.value[3],i.value[4],i.value[5],i.value[6])&&(l=S.online)}}}return l},de=(n(56),function(e){return r.a.createElement("rect",{x:e.x-4,y:e.y-4,width:8,height:8,className:"controlpoint-rect ".concat(e.className||""),onMouseDown:e.handleMouseDown})}),he=(n(57),Object(K.a)([te,function(e){return e.selection}],(function(e,t){if(0===t.length)return{rectControl:null,pointControl:[]};if(t.length>1){var n=t.map((function(t){return e[t]}));return{rectControl:{multiSelect:!0,coords:Q(n)},pointControl:[]}}var a=e[t[0]];switch(a.value[0]){case 0:case 9:case 99:return{rectControl:{multiSelect:!1,coords:[a.value[3],a.value[4],a.value[5],a.value[6]]},pointControl:[]};case 1:case 2:case 3:case 4:case 6:case 7:for(var c=[],r=3;r+2<=a.value.length;r+=2){var o=pe(e,{lineIndex:t[0],pointIndex:(r-3)/2}),l="";o===S.match?l="match":o===S.online&&(l="online"),c.push({x:a.value[r],y:a.value[r+1],className:l})}return{rectControl:null,pointControl:c};default:return{rectControl:null,pointControl:[]}}}))),ve=function(){var e=Object(u.d)(he),t=e.rectControl,n=e.pointControl,o=Object(u.c)(),l=Object(c.useCallback)((function(e,t){o(k.startResize([e,t])),e.stopPropagation()}),[o]),i=Object(c.useCallback)((function(e){return l(e,a.north)}),[l]),s=Object(c.useCallback)((function(e){return l(e,a.west)}),[l]),f=Object(c.useCallback)((function(e){return l(e,a.south)}),[l]),p=Object(c.useCallback)((function(e){return l(e,a.east)}),[l]),d=Object(c.useCallback)((function(e){return l(e,a.southeast)}),[l]),h=Object(c.useMemo)((function(){return n.map((function(e,t){return function(e){o(k.startPointDrag([e,t])),e.stopPropagation()}}))}),[o,n]);return r.a.createElement(r.a.Fragment,null,t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("rect",{className:"selection-rect",x:t.coords[0],y:t.coords[1],width:t.coords[2]-t.coords[0],height:t.coords[3]-t.coords[1]}),r.a.createElement(de,{x:(t.coords[0]+t.coords[2])/2,y:t.coords[1],className:"north",handleMouseDown:i}),r.a.createElement(de,{x:t.coords[0],y:(t.coords[1]+t.coords[3])/2,className:"west",handleMouseDown:s}),r.a.createElement(de,{x:(t.coords[0]+t.coords[2])/2,y:t.coords[3],className:"south",handleMouseDown:f}),r.a.createElement(de,{x:t.coords[2],y:(t.coords[1]+t.coords[3])/2,className:"east",handleMouseDown:p}),r.a.createElement(de,{x:t.coords[2],y:t.coords[3],className:"southeast",handleMouseDown:d})),n.map((function(e,t){var n=e.x,a=e.y,c=e.className;return r.a.createElement(de,{key:t,x:n,y:a,className:c,handleMouseDown:h[t]})})))},be=(n(58),function(){var e=Object(u.d)(te),t=Object(u.d)((function(e){return e.buhinMap})),n=Object(u.d)((function(e){return e.selection})),a=Object(u.d)((function(e){return e.areaSelectRect})),o=Object(u.c)(),l=Object(c.useCallback)((function(e){var t=e.currentTarget.getScreenCTM();if(t){var n=e.currentTarget.createSVGPoint(),a=t.inverse();o(k.updateCTMInv((function(e,t){n.x=e,n.y=t;var c=n.matrixTransform(a);return[c.x,c.y]})))}}),[o]),i=Object(c.useCallback)((function(e){e.shiftKey||e.ctrlKey||o(g.selectNone()),o(k.startAreaSelect(e))}),[o]),s=Object(c.useCallback)((function(e,t){e.shiftKey||e.ctrlKey?o(g.selectAddSingle(t)):o(g.selectSingle(t)),o(k.startSelectionDrag(e)),e.stopPropagation()}),[o]),f=Object(c.useCallback)((function(e,t){(e.shiftKey||e.ctrlKey)&&o(g.selectRemoveSingle(t)),o(k.startSelectionDrag(e)),e.stopPropagation()}),[o]);return Object(c.useEffect)((function(){var e=function(e){o(k.mouseMove(e))},t=function(e){o(k.mouseUp(e))};return document.addEventListener("mousemove",e),document.addEventListener("mouseup",t),function(){document.removeEventListener("mousemove",e),document.removeEventListener("mouseup",t)}}),[o]),r.a.createElement("div",{className:"glyph-area"},r.a.createElement("svg",{width:"100%",height:"100%",viewBox:"-20 -20 500 240",onMouseDownCapture:l,onMouseDown:i},r.a.createElement("rect",{x:"0",y:"0",width:"200",height:"200",className:"glyph-boundary"}),r.a.createElement("rect",{x:"12",y:"12",width:"176",height:"176",className:"glyph-guide"}),r.a.createElement(se,{glyph:e,buhinMap:t,selection:n,handleMouseDownDeselectedStroke:s,handleMouseDownSelectedStroke:f}),r.a.createElement(ve,null),r.a.createElement(fe,{rect:a})))}),me=n(68),Oe=(n(59),Object(K.a)([function(e){return e.selection},function(e){return e.selection.length?e.glyph[e.selection[0]]:null}],(function(e,t){if(1!==e.length)return null;var n=t;if(![1,2,3,4,6,7].includes(n.value[0]))return null;for(var a=[],c=3;c+2<=n.value.length;c+=2)a.push("(".concat(n.value[c],",").concat(n.value[c+1],")"));return{strokeType:n.value[0],headShapeType:n.value[1],tailShapeType:n.value[2],coordString:a.join(" \u2192 ")}}))),je=Object(K.a)([function(e){return e.selection},function(e){return e.selection.length?e.glyph[e.selection[0]]:null},function(e){return e.buhinMap},function(e){return e.stretchParamMap}],(function(e,t,n,a){if(1!==e.length)return null;var c=t;if(99!==c.value[0])return null;var r=c.partName,o=n.get(r),l=null;if(o){var u=/^(?:0:1:0:[^$]+\$)?99:0:0:0:0:200:200:([^$]+)$/.exec(o);u&&(l=u[1])}var i=a.get(r),s=i?ce(i,ne(c)):null;return{partName:r,entityName:l,coordString:"(".concat(c.value[3],",").concat(c.value[4],") \u2192 (").concat(c.value[5],",").concat(c.value[6],")"),stretchCoeff:s}})),ge=Object(K.a)([function(e){return e.selection},function(e){return e.selection.length?e.glyph[e.selection[0]]:null}],(function(e,t){if(e.length>1)return{isMultiple:!0};if(0===e.length)return{isMultiple:!1};var n=t;if([1,2,3,4,6,7,99].includes(n.value[0]))return null;for(var a=[],c=3;c+2<=n.value.length;c+=2)a.push("(".concat(n.value[c],",").concat(n.value[c+1],")"));return{isMultiple:!1,coordString:a.join(" \u2192 ")}})),ye=Object(K.a)([function(e){return e.glyph.length},function(e){return e.selection}],(function(e,t){var n=t.map((function(e){return e+1})).sort((function(e,t){return e-t})).join(",");return"".concat(n||"-"," / ").concat(e||"-")})),Ee=Object(K.a)([function(e){return e.glyph.length},function(e){return e.selection}],(function(e,t){return{swapPrevDisabled:1!==t.length||0===t[0],swapNextDisabled:1!==t.length||t[0]===e-1,selectPrevDisabled:0===e,selectNextDisabled:0===e}})),Se=function(){var e=Object(u.d)(Oe),t=Object(u.d)(je),n=Object(u.d)(ge),a=Object(u.d)(ye),o=Object(u.d)(Ee,u.b),l=o.swapPrevDisabled,i=o.swapNextDisabled,s=o.selectPrevDisabled,f=o.selectNextDisabled,p=Object(u.c)(),d=Object(c.useCallback)((function(){p(g.selectPrev())}),[p]),h=Object(c.useCallback)((function(){p(g.selectNext())}),[p]),v=Object(c.useCallback)((function(){p(Y.swapWithPrev())}),[p]),b=Object(c.useCallback)((function(){p(Y.swapWithNext())}),[p]),m=Object(me.a)().t;return r.a.createElement("div",{className:"select-control"},r.a.createElement("div",{className:"selected-info"},e&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,m("stroke type"),r.a.createElement("select",{value:e.strokeType},[1,2,3,4,6,7].map((function(e){return r.a.createElement("option",{key:e,value:e},m("stroke type ".concat(e)))})))),r.a.createElement("div",null,e.coordString)),t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,m("part")," ",r.a.createElement("strong",null,t.partName)," ",t.entityName&&m("alias of",{entity:t.entityName})),r.a.createElement("div",null,t.coordString),null!==t.stretchCoeff&&r.a.createElement("div",null,m("stretch")," ",r.a.createElement("input",{type:"range",min:-10,max:10,value:t.stretchCoeff})," ",t.stretchCoeff)),n&&r.a.createElement(r.a.Fragment,null,n.isMultiple&&r.a.createElement("div",null,m("selecting multiple strokes")),n.coordString&&r.a.createElement("div",null,n.coordString))),r.a.createElement("div",{className:"selection-control"},r.a.createElement("button",{disabled:l,onClick:v},m("swap with prev")),r.a.createElement("button",{className:"select-prevnext-button",disabled:s,onClick:d},m("select prev")),r.a.createElement("div",{className:"selection-num"},a),r.a.createElement("button",{className:"select-prevnext-button",disabled:f,onClick:h},m("select next")),r.a.createElement("button",{disabled:i,onClick:b},m("swap with next"))))},Me=(n(65),function(){var e=Object(u.d)((function(e){return e.glyph})),t=Object(u.d)((function(e){return e.selection})),n=Object(u.d)((function(e){return e.clipboard})),a=Object(u.d)((function(e){return e.freehandMode})),o=0===n.length,l=!t.some((function(t){return 99===e[t].value[0]})),i=Object(u.c)(),s=Object(c.useCallback)((function(){i(Y.undo())}),[i]),f=Object(c.useCallback)((function(){i(Y.redo())}),[i]),p=Object(c.useCallback)((function(){i(g.selectAll())}),[i]),d=Object(c.useCallback)((function(){i(g.selectDeselected())}),[i]),h=Object(c.useCallback)((function(){i(Y.copy())}),[i]),v=Object(c.useCallback)((function(){i(Y.paste())}),[i]),b=Object(c.useCallback)((function(){i(Y.cut())}),[i]),m=Object(c.useCallback)((function(){i(Y.toggleFreehand())}),[i]),O=Object(c.useCallback)((function(){i(Y.decomposeSelected())}),[i]),j=Object(c.useCallback)((function(){i(Y.openOptionModal())}),[i]),y=Object(c.useCallback)((function(){}),[]),E=Object(me.a)().t;return r.a.createElement("div",{className:"editor-controls"},r.a.createElement(Se,null),r.a.createElement("div",{className:"control-buttons"},r.a.createElement("button",{disabled:!0,onClick:s},E("undo")),r.a.createElement("button",{disabled:!0,onClick:f},E("redo")),r.a.createElement("button",{disabled:a||0===e.length,onClick:p},E("select all")),r.a.createElement("button",{disabled:a||0===e.length,onClick:d},E("invert selection")),r.a.createElement("button",{disabled:0===t.length,onClick:h},E("copy")),r.a.createElement("button",{disabled:o,onClick:v},E("paste")),r.a.createElement("button",{disabled:0===t.length,onClick:b},E("cut")),r.a.createElement("button",{disabled:!0,onClick:m},E(a?"end freehand":"start freehand")),r.a.createElement("button",{disabled:l,onClick:O},E("decompose")),r.a.createElement("button",{disabled:!0,onClick:j},E("options"))),r.a.createElement("div",{className:"preview"},r.a.createElement("svg",{className:"preview-thumbnail",viewBox:"0 0 200 200",width:"50",height:"50"}),r.a.createElement("button",{disabled:!0,onClick:y},E("finish edit"))))});var ke=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(be,null),r.a.createElement(Me,null),r.a.createElement("div",{className:"parts-list-area"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var we=n(22),xe=n(14),Ce={ja:{translation:n(33)}},Ne=h.get("host"),Te="ja";if(Ne)switch(Ne.split(".")[0]){case"en":Te="en";break;case"ko":Te="ko";break;case"zhs":Te="zh-Hans";break;case"zht":Te="zh-Hant"}we.a.use(xe.e).init({resources:Ce,lng:Te,returnObjects:!0,interpolation:{escapeValue:!1}});we.a,n(66);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u.a,{store:ue},r.a.createElement(ke,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.3edefc70.chunk.js.map