module.exports=function(n){var e={};function t(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return n[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}return t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var a in n)t.d(r,a,function(e){return n[e]}.bind(null,a));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){n.exports=t(1)},function(n,e,t){"use strict";var r=this&&this.__makeTemplateObject||function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n},a=this&&this.__importDefault||function(n){return n&&n.__esModule?n:{default:n}},o=this&&this.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(null!=n)for(var t in n)Object.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e.default=n,e};Object.defineProperty(e,"__esModule",{value:!0});var i=a(t(2)),l=o(t(3)),d=o(t(4)),c=t(5);e.default=function(n){return i.default.createElement(i.default.Fragment,null,i.default.createElement(m,null),i.default.createElement(l.default,{cardStyle:n.cardStyle,className:"fd-read-history"+(n.className?" "+n.className:"")},i.default.createElement(d.default,{className:"h-read-history",textStyle:"card-h"},i.default.createElement("h3",null,n.title?n.title:"Recent gelezen")),i.default.createElement("nav",null,n.news.map(function(n){return i.default.createElement("a",{key:n.uuid,href:n.url,target:n.target},i.default.createElement("time",null,n.dateTime),i.default.createElement("span",{className:n.isRead?"is-read":void 0},n.title))}))))};var u,s,f,p=c.css(u||(u=r(["\n.fd-read-history {\n    h3.h-read-history,\n    > a,\n    nav > a {\n        padding: 12px 10px;\n        @media only screen and (min-width: 641px) {\n            padding: 12px;\n        }\n        @media only screen and (min-width: 861px) {\n            padding: 12px 15px;\n        }\n    }\n\n    > a,\n    nav > a {\n        display: block;\n        font-family: 'ProximaNovaRegular', sans-serif;\n        border-top: 1px solid rgba(0,0,0,0.1);\n        line-height: 1.2em;\n        color: #191919;\n        .is-read {\n            opacity: 0.6;\n        }\n        &:hover {\n            color: #49a4a2;\n            .icon-chevron-right {\n                color: #49a4a2;\n            }\n        }\n        text-decoration: none;\n        font-size: 16px;\n        @media only screen and (min-width: 641px) {\n            font-size: 17px;\n        }\n    }\n\n    time {\n        color: #677381;\n        display: block;\n        font-size: 13px;\n        @media only screen and (min-width: 641px) {\n            font-size: 14px;\n        }\n    }\n}\n"],["\n.fd-read-history {\n    h3.h-read-history,\n    > a,\n    nav > a {\n        padding: 12px 10px;\n        @media only screen and (min-width: 641px) {\n            padding: 12px;\n        }\n        @media only screen and (min-width: 861px) {\n            padding: 12px 15px;\n        }\n    }\n\n    > a,\n    nav > a {\n        display: block;\n        font-family: 'ProximaNovaRegular', sans-serif;\n        border-top: 1px solid rgba(0,0,0,0.1);\n        line-height: 1.2em;\n        color: #191919;\n        .is-read {\n            opacity: 0.6;\n        }\n        &:hover {\n            color: #49a4a2;\n            .icon-chevron-right {\n                color: #49a4a2;\n            }\n        }\n        text-decoration: none;\n        font-size: 16px;\n        @media only screen and (min-width: 641px) {\n            font-size: 17px;\n        }\n    }\n\n    time {\n        color: #677381;\n        display: block;\n        font-size: 13px;\n        @media only screen and (min-width: 641px) {\n            font-size: 14px;\n        }\n    }\n}\n"]))),m=c.createGlobalStyle(s||(s=r(["",""],["",""])),p);e.ReadHistoryStyle=c.css(f||(f=r(["\n    ","\n    ","\n    ","\n"],["\n    ","\n    ","\n    ","\n"])),l.CardStyle,d.getAllTextStyles(["card-h"]),p)},function(n,e){n.exports=require("react")},function(n,e){n.exports=require("@fdmg/fd-card")},function(n,e){n.exports=require("@fdmg/fd-typography")},function(n,e){n.exports=require("styled-components")}]);