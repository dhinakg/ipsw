"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9348],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),f=n,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||i;return r?o.createElement(d,a(a({ref:t},s),{},{components:r})):o.createElement(d,a({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:n,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},61624:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var o=r(87462),n=(r(67294),r(3905));const i={id:"lipo",title:"lipo",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"lipo",description:"Extract single MachO out of a universal/fat MachO"},a=void 0,c={unversionedId:"cli/ipsw/macho/lipo",id:"cli/ipsw/macho/lipo",title:"lipo",description:"Extract single MachO out of a universal/fat MachO",source:"@site/docs/cli/ipsw/macho/lipo.md",sourceDirName:"cli/ipsw/macho",slug:"/cli/ipsw/macho/lipo",permalink:"/ipsw/docs/cli/ipsw/macho/lipo",draft:!1,editUrl:"https://github.com/blacktop/ipsw/tree/master/www/docs/cli/ipsw/macho/lipo.md",tags:[],version:"current",frontMatter:{id:"lipo",title:"lipo",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"lipo",description:"Extract single MachO out of a universal/fat MachO"},sidebar:"cli",previous:{title:"info",permalink:"/ipsw/docs/cli/ipsw/macho/info"},next:{title:"o2a",permalink:"/ipsw/docs/cli/ipsw/macho/o2a"}},l={},p=[{value:"ipsw macho lipo",id:"ipsw-macho-lipo",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],s={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"ipsw-macho-lipo"},"ipsw macho lipo"),(0,n.kt)("p",null,"Extract single MachO out of a universal/fat MachO"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"ipsw macho lipo [flags]\n")),(0,n.kt)("h3",{id:"options"},"Options"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"  -a, --arch string     Which architecture to use for fat/universal MachO\n  -h, --help            help for lipo\n      --output string   Directory to extract the MachO\n")),(0,n.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"      --color           colorize output\n      --config string   config file (default is $HOME/.config/ipsw/config.yaml)\n  -V, --verbose         verbose output\n")),(0,n.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/macho"},"ipsw macho"),"\t - Parse MachO")))}m.isMDXComponent=!0}}]);