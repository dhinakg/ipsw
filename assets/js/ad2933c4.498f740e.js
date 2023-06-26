"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4556],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),p=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),c=p(r),u=n,f=c["".concat(s,".").concat(u)]||c[u]||m[u]||o;return r?i.createElement(f,l(l({ref:t},d),{},{components:r})):i.createElement(f,l({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=u;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[c]="string"==typeof e?e:n,l[1]=a;for(var p=2;p<o;p++)l[p]=r[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8659:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var i=r(87462),n=(r(67294),r(3905));const o={id:"imports",title:"imports",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"imports",description:"List all dylibs that load a given dylib"},l=void 0,a={unversionedId:"cli/ipsw/dyld/imports",id:"cli/ipsw/dyld/imports",title:"imports",description:"List all dylibs that load a given dylib",source:"@site/docs/cli/ipsw/dyld/imports.md",sourceDirName:"cli/ipsw/dyld",slug:"/cli/ipsw/dyld/imports",permalink:"/ipsw/docs/cli/ipsw/dyld/imports",draft:!1,editUrl:"https://github.com/blacktop/ipsw/tree/master/www/docs/cli/ipsw/dyld/imports.md",tags:[],version:"current",frontMatter:{id:"imports",title:"imports",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"imports",description:"List all dylibs that load a given dylib"},sidebar:"cli",previous:{title:"image",permalink:"/ipsw/docs/cli/ipsw/dyld/image"},next:{title:"info",permalink:"/ipsw/docs/cli/ipsw/dyld/info"}},s={},p=[{value:"ipsw dyld imports",id:"ipsw-dyld-imports",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],d={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"ipsw-dyld-imports"},"ipsw dyld imports"),(0,n.kt)("p",null,"List all dylibs that load a given dylib"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"ipsw dyld imports [flags]\n")),(0,n.kt)("h3",{id:"options"},"Options"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"  -h, --help          help for imports\n  -i, --ipsw string   Path to IPSW to scan for MachO files that import dylib\n")),(0,n.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"      --color           colorize output\n      --config string   config file (default is $HOME/.config/ipsw/config.yaml)\n  -V, --verbose         verbose output\n")),(0,n.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/dyld"},"ipsw dyld"),"\t - Parse dyld_shared_cache")))}m.isMDXComponent=!0}}]);