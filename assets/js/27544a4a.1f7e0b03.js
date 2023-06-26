"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2303],{3905:(e,t,i)=>{i.d(t,{Zo:()=>s,kt:()=>g});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(i),u=r,g=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return i?n.createElement(g,a(a({ref:t},s),{},{components:i})):n.createElement(g,a({ref:t},s))}));function g(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=i[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},96260:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=i(87462),r=(i(67294),i(3905));const o={id:"img",title:"img",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"img",description:"Image commands"},a=void 0,l={unversionedId:"cli/ipsw/idev/img/img",id:"cli/ipsw/idev/img/img",title:"img",description:"Image commands",source:"@site/docs/cli/ipsw/idev/img/img.md",sourceDirName:"cli/ipsw/idev/img",slug:"/cli/ipsw/idev/img/",permalink:"/ipsw/docs/cli/ipsw/idev/img/",draft:!1,editUrl:"https://github.com/blacktop/ipsw/tree/master/www/docs/cli/ipsw/idev/img/img.md",tags:[],version:"current",frontMatter:{id:"img",title:"img",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"img",description:"Image commands"},sidebar:"cli",previous:{title:"fsyms",permalink:"/ipsw/docs/cli/ipsw/idev/fsyms"},next:{title:"lookup",permalink:"/ipsw/docs/cli/ipsw/idev/img/lookup"}},p={},c=[{value:"ipsw idev img",id:"ipsw-idev-img",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],s={toc:c},m="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(m,(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"ipsw-idev-img"},"ipsw idev img"),(0,r.kt)("p",null,"Image commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ipsw idev img [flags]\n")),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  -h, --help   help for img\n")),(0,r.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"      --color           colorize output\n      --config string   config file (default is $HOME/.config/ipsw/config.yaml)\n  -u, --udid string     Device UniqueDeviceID to connect to\n  -V, --verbose         verbose output\n")),(0,r.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/idev"},"ipsw idev"),"\t - USB connected device commands"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/idev/img/lookup"},"ipsw idev img lookup"),"\t - Lookup image type"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/idev/img/ls"},"ipsw idev img ls"),"\t - List mounted images"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/idev/img/mount"},"ipsw idev img mount"),"\t - Mount an image"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/idev/img/nonce"},"ipsw idev img nonce"),"\t - Query Nonce"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/idev/img/unmount"},"ipsw idev img unmount"),"\t - Unmount an image")))}d.isMDXComponent=!0}}]);