(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9536:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(7019)}])},7019:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return I}});var t=r(3842),i=r(3444),o=r(9312),s=r(4246),a=r(8038),c=r.n(a),l=r(823),d=r(3994),f=r(339),u=r(9228),h=r(6699),p=r(7071),g=r(7378),m=r(6859),x=r(2614),j=r(8071),b=r(1257),v=(0,m.k)(function(e){return{wrapper:{position:"relative",marginBottom:30},dropzone:{borderWidth:1,paddingBottom:50},icon:{color:"dark"===e.colorScheme?e.colors.dark[3]:e.colors.gray[4]},control:{position:"absolute",width:250,left:"calc(50% - 125px)",bottom:-20}}});function w(e){var n=e.onDrop,r=v(),t=r.classes,i=r.theme,o=(0,g.useRef)(null);return(0,s.jsxs)("div",{className:t.wrapper,children:[(0,s.jsx)(j.fh,{openRef:o,multiple:!1,onDrop:n,className:t.dropzone,radius:"md",accept:{"application/x-figma":[".fig"],"application/json":[".fig.json"]},maxSize:31457280,children:(0,s.jsxs)("div",{style:{pointerEvents:"none"},children:[(0,s.jsxs)(x.Z,{position:"center",children:[(0,s.jsx)(j.fh.Accept,{children:(0,s.jsx)(b.DjJ,{size:50,color:i.colors[i.primaryColor][6],stroke:1.5})}),(0,s.jsx)(j.fh.Reject,{children:(0,s.jsx)(b.kLi,{size:50,color:i.colors.red[6],stroke:1.5})}),(0,s.jsx)(j.fh.Idle,{children:(0,s.jsx)(b.BQx,{size:50,color:"dark"===i.colorScheme?i.colors.dark[0]:i.black,stroke:1.5})})]}),(0,s.jsxs)(u.x,{align:"center",weight:700,size:"lg",mt:"xl",children:[(0,s.jsx)(j.fh.Accept,{children:"Drop files here"}),(0,s.jsx)(j.fh.Reject,{children:".fig file only"}),(0,s.jsx)(j.fh.Idle,{children:"Upload .fig or .fig.json"})]}),(0,s.jsxs)(u.x,{align:"center",size:"sm",mt:"xs",color:"dimmed",children:["Drag'n'drop files here to upload. We can accept only ",(0,s.jsx)("i",{children:".fig"})," or"," ",(0,s.jsx)("i",{children:".fig.json"})," files"]})]})}),(0,s.jsx)(p.z,{className:t.control,size:"md",radius:"xl",onClick:function(){var e;return null===(e=o.current)||void 0===e?void 0:e.call(o)},children:"Select files"})]})}var y,k=r(5218),_=r.n(k),S=r(5034),Z=r(169),z=r(2050),A=r(3859),C=r(9715),N=function(e,n,r){r[0]=e[n+0],r[1]=e[n+1],r[2]=e[n+2],r[3]=e[n+3]},E=new Int32Array(1),D=new Uint8Array(E.buffer),R=new Uint32Array(E.buffer),U=function(e,n){return N(e,n,D),R[0]},O=function(e){var n,r=(0,z.Z)(J(e),2),t=r[0],o=r[1],s=new A.cZ(t),a=(0,A.pM)(s),c=new A.cZ(o);return n=(0,A.ES)(a).decodeMessage(c),n.blobs?(0,Z.Z)((0,S.Z)({},n),{blobs:n.blobs.map(function(e){var n;return btoa((n=String).fromCharCode.apply(n,(0,i.Z)(e.bytes)))})}):n},W=(y=(0,t.Z)(function(e){var n,r,t,i,s,a,c,l,d,f,u,h,p,g,m,x,j;return(0,o.__generator)(this,function(n){switch(n.label){case 0:return[4,fetch("/assets/figma/schema.fig")];case 1:return[4,n.sent().arrayBuffer()];case 2:var o;return r=n.sent(),i=(t=(0,z.Z)(J(r),2))[0],t[1],s=new A.cZ(i),a=(0,A.pM)(s),l=(0,A.ES)(a).encodeMessage(e.blobs?(0,Z.Z)((0,S.Z)({},e),{blobs:e.blobs.map(function(e){return{bytes:Uint8Array.from(atob(e),function(e){return e.charCodeAt(0)})}})}):e),u=4-(f=(d=C.deflateRaw(l)).length)%4,h=f+u,m=4-(g=(p=C.deflateRaw(i)).length)%4,x=g+m,(j=new Uint8Array(12+(4+x)+(4+h)))[0]=102,j[1]=105,j[2]=103,j[3]=45,j[4]=107,j[5]=105,j[6]=119,j[7]=105,j[8]=15,j[9]=0,j[10]=0,j[11]=0,R[0]=x,j[12]=D[0],j[13]=D[1],j[14]=D[2],j[15]=D[3],j.set(p,16),R[0]=h,j[16+x]=D[0],j[17+x]=D[1],j[18+x]=D[2],j[19+x]=D[3],j.set(d,16+x+4),[2,j]}})}),function(e){return y.apply(this,arguments)});function J(e){var n=new Uint8Array(e);(102!==n[0]||105!==n[1]||103!==n[2]||45!==n[3]||107!==n[4]||105!==n[5]||119!==n[6]||105!==n[7])&&(e=C.parse(e)["canvas.fig"].buffer,n=new Uint8Array(e));var r=8;U(n,r),r+=4;for(var t=[];r<n.length;){var i=U(n,r);r+=4;var o=n.slice(r,r+i);137==n[r]&&80==n[r+1]||(o=C.inflateRaw(o)),t.push(o),r+=i}return t}var B=_()(function(){return r.e(366).then(r.t.bind(r,1366,23))},{loadableGenerated:{webpack:function(){return[1366]}},ssr:!1});function F(e,n){var r=document.createElement("a");r.setAttribute("href",e),r.setAttribute("download",n),document.body.appendChild(r),r.click(),r.remove()}var I=function(){var e,n=function(){var e,n;F("data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(a)),"".concat(j||"figma2json.fig.json",".json"))},r=(0,g.useState)(null),a=r[0],m=r[1],x=(0,g.useState)(null),j=x[0],b=x[1],v=(0,l.X)().colorScheme;function y(){return(y=(0,t.Z)(function(){var e;return(0,o.__generator)(this,function(e){switch(e.label){case 0:return[4,W(a)];case 1:var n,r,t,o;return n=e.sent(),r=j||"figma2json.fig",o=btoa((t=String).fromCharCode.apply(t,(0,i.Z)(n))),F("data:application/x-figma;base64,"+o,"".concat(r.replace(".fig.json",""),".fig")),[2]}})})).apply(this,arguments)}return(0,s.jsxs)(d.W,{children:[(0,s.jsxs)(c(),{children:[(0,s.jsx)("title",{children:"Figma to JSON - File"}),(0,s.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,s.jsx)(f.D,{order:1,align:"center",mb:18,children:"File"}),(0,s.jsx)(u.x,{align:"center",mb:18,children:"Upload your Figma file and get JSON representation of it"}),(0,s.jsxs)(d.W,{children:[a&&(0,s.jsxs)(h.x,{mb:24,children:[(0,s.jsxs)(d.W,{style:{display:"flex",justifyContent:"center"},mb:10,children:[(0,s.jsx)(p.z,{onClick:n,children:"Download JSON"}),(0,s.jsx)(p.z,{ml:8,variant:"outline",onClick:function(){return y.apply(this,arguments)},children:"Export .fig"})]}),(0,s.jsx)(B,{style:{minHeight:300,borderRadius:10},src:a,onAdd:function(e){m(e.updated_src)},onEdit:function(e){m(e.updated_src)},onDelete:function(e){m(e.updated_src)},collapsed:!0,theme:"dark"===v?"twilight":"shapeshifter:inverted"})]}),(0,s.jsx)(w,{onDrop:(e=(0,t.Z)(function(e){var n,r,t;return(0,o.__generator)(this,function(i){switch(i.label){case 0:return b((n=e[0]).name),[4,n.arrayBuffer()];case 1:if(r=i.sent(),n.name.endsWith(".fig"))t=O(r);else if(n.name.endsWith(".json"))t=JSON.parse(new TextDecoder().decode(r));else throw Error("File must be .fig or .json");return m(t),[2]}})}),function(n){return e.apply(this,arguments)})})]}),(0,s.jsx)(u.x,{size:"sm",align:"left",mt:18,children:"Note: The file api is considered internal to figma, the REST and Plugin API is designed for public usage."}),(0,s.jsx)(u.x,{size:"sm",align:"left",mt:0,children:"However, it is useful for reading/writing figma files for plugin authors, design tool authors and for design automation."})]})}}},function(e){e.O(0,[554,814,774,888,179],function(){return e(e.s=9536)}),_N_E=e.O()}]);