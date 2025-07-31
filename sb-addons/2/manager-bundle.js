try{
(()=>{var a=__REACT__,{Children:Le,Component:Ue,Fragment:Ne,Profiler:Fe,PureComponent:He,StrictMode:je,Suspense:De,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Ve,act:Ke,cloneElement:Qe,createContext:Ye,createElement:Ge,createFactory:We,createRef:qe,forwardRef:Ze,isValidElement:Je,lazy:Xe,memo:K,startTransition:et,unstable_act:tt,useCallback:f,useContext:rt,useDebugValue:ot,useDeferredValue:at,useEffect:lt,useId:nt,useImperativeHandle:st,useInsertionEffect:it,useLayoutEffect:ct,useMemo:dt,useReducer:mt,useRef:C,useState:ut,useSyncExternalStore:pt,useTransition:ht,version:bt}=__REACT__;var vt=__STORYBOOK_API__,{ActiveTabs:Et,Consumer:St,ManagerContext:kt,Provider:xt,RequestResponseError:Ct,addons:U,combineParameters:wt,controlOrMetaKey:_t,controlOrMetaSymbol:Tt,eventMatchesShortcut:Ot,eventToShortcut:It,experimental_MockUniversalStore:Rt,experimental_UniversalStore:zt,experimental_getStatusStore:Pt,experimental_getTestProviderStore:Bt,experimental_requestResponse:At,experimental_useStatusStore:Mt,experimental_useTestProviderStore:Lt,experimental_useUniversalStore:Ut,internal_fullStatusStore:Nt,internal_fullTestProviderStore:Ft,internal_universalStatusStore:Ht,internal_universalTestProviderStore:jt,isMacLike:Dt,isShortcutTaken:Vt,keyToSymbol:Kt,merge:Qt,mockChannel:Yt,optionOrAltSymbol:Gt,shortcutMatchesShortcut:Wt,shortcutToHumanString:qt,types:Q,useAddonState:Zt,useArgTypes:Jt,useArgs:Xt,useChannel:Y,useGlobalTypes:er,useGlobals:tr,useParameter:N,useSharedState:rr,useStoryPrepared:or,useStorybookApi:G,useStorybookState:ar}=__STORYBOOK_API__;var cr=__STORYBOOK_COMPONENTS__,{A:dr,ActionBar:mr,AddonPanel:W,Badge:q,Bar:ur,Blockquote:pr,Button:hr,ClipboardCode:br,Code:gr,DL:yr,Div:fr,DocumentWrapper:$r,EmptyTabContent:vr,ErrorFormatter:Er,FlexBar:Sr,Form:kr,H1:xr,H2:Cr,H3:wr,H4:_r,H5:Tr,H6:Or,HR:Ir,IconButton:Rr,Img:zr,LI:Pr,Link:Br,ListItem:Ar,Loader:Mr,Modal:Lr,OL:Ur,P:Nr,Placeholder:Fr,Pre:Hr,ProgressSpinner:jr,ResetWrapper:Dr,ScrollArea:Vr,Separator:Kr,Spaced:Qr,Span:Yr,StorybookIcon:Gr,StorybookLogo:Wr,SyntaxHighlighter:qr,TT:Zr,TabBar:Jr,TabButton:Xr,TabWrapper:eo,Table:to,Tabs:ro,TabsState:oo,TooltipLinkList:ao,TooltipMessage:lo,TooltipNote:no,UL:so,WithTooltip:io,WithTooltipPure:co,Zoom:mo,codeCommon:uo,components:po,createCopyToClipboardFunction:ho,getStoryHref:bo,interleaveSeparators:go,nameSpaceClassNames:yo,resetComponents:fo,withReset:$o}=__STORYBOOK_COMPONENTS__;var xo=__STORYBOOK_THEMING__,{CacheProvider:Co,ClassNames:wo,Global:_o,ThemeProvider:To,background:Oo,color:Io,convert:Ro,create:zo,createCache:Po,createGlobal:Bo,createReset:Ao,css:Mo,darken:Lo,ensure:Uo,ignoreSsrWarning:No,isPropValid:Fo,jsx:Ho,keyframes:jo,lighten:Do,styled:m,themes:Vo,typography:Ko,useTheme:Qo,withTheme:Yo}=__STORYBOOK_THEMING__;var D="storybook-addon-css-properties",X=`${D}/panel`,ee="cssVars",E={REQUEST:`${D}/request`},de=m.div`
  padding: 0;
  font-family: ${({theme:e})=>e.typography.fonts.base};
  background-color: ${({theme:e})=>e.background.content};
  height: 100%;
  overflow-y: auto;
`,me=m.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .625rem .9375rem;
  border-bottom: 1px solid ${({theme:e})=>e.appBorderColor};
  background: ${({theme:e})=>e.background.content};
  position: sticky;
  top: 0;
  z-index: 1;
`,ue=m.div`
  font-size: ${({theme:e})=>e.typography.size.s1/16}rem;
  color: ${({theme:e})=>e.color.mediumdark};
`,Z=m.div`
  display: flex;
  gap: .375rem;
`,H=m.button`
  font-family: ${({theme:e})=>e.typography.fonts.base};
  font-size: ${({theme:e})=>e.typography.size.s1/16}rem;
  font-weight: ${({theme:e})=>e.typography.weight.regular};
  padding: .375rem .75rem;
  border: 1px solid ${({theme:e})=>e.appBorderColor};
  border-radius: ${({theme:e})=>e.appBorderRadius/16}rem;
  background-color: ${({theme:e})=>e.background.content};
  color: ${({theme:e})=>e.color.defaultText};
  cursor: pointer;
  transition: all 0.15s ease-out;

  &:hover {
    border-color: ${({theme:e})=>e.color.secondary};
    background-color: ${({theme:e})=>e.background.hoverable};
  }

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.color.secondary};
    box-shadow: 0 0 0 .0625rem ${({theme:e})=>e.color.secondary};
  }

  &:active {
    background-color: ${({theme:e})=>e.background.app};
  }
`,pe=m.div`
  display: table;
  width: 100%;
  border-collapse: collapse;
`,he=m.div`
  display: table-header-group;
  background: ${({theme:e})=>e.background.app};
`,be=m.div`
  display: table-row;
`,P=m.div`
  display: table-cell;
  padding: .5rem .9375rem;
  font-family: ${({theme:e})=>e.typography.fonts.base};
  font-size: ${({theme:e})=>e.typography.size.s1/16}rem;
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  color: ${({theme:e})=>e.color.dark};
  text-align: left;
  border-bottom: 1px solid ${({theme:e})=>e.appBorderColor};
  
  &:first-child {
    width: 30%;
  }
  
  &:nth-child(2) {
    width: 20%;
  }
  
  &:nth-child(3) {
    width: auto;
  }
  
  &:last-child {
    width: 1%;
    white-space: nowrap;
  }
`,ge=m.div`
  display: table-row-group;
`,ye=m.div`
  display: table-row;
  
  &:hover {
    background-color: ${({theme:e})=>e.background.hoverable};
  }
`,B=m.div`
  display: table-cell;
  padding: .625rem .9375rem;
  vertical-align: middle;
  border-bottom: 1px solid ${({theme:e})=>e.appBorderColor};
  font-family: ${({theme:e})=>e.typography.fonts.base};
  font-size: ${({theme:e})=>e.typography.size.s2/16}rem;
`,fe=m.div`
  font-family: ${({theme:e})=>e.typography.fonts.mono};
  font-size: ${({theme:e})=>e.typography.size.s1/16}rem;
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  color: ${({theme:e})=>e.color.secondary};
  margin-bottom: .25rem;
  user-select: all;
`,$e=m.div`
  font-size: ${({theme:e})=>e.typography.size.s1/16}rem;
  color: ${({theme:e})=>e.color.mediumdark};
  line-height: 1.4;
`,ve=m.div`
  font-family: ${({theme:e})=>e.typography.fonts.mono};
  font-size: ${({theme:e})=>e.typography.size.s1/16}rem;
  color: ${({theme:e})=>e.color.mediumdark};
  
  &.has-value {
    color: ${({theme:e})=>e.color.defaultText};
    background: ${({theme:e})=>e.background.app};
    padding: .25rem .375rem;
    border-radius: .1875rem;
    border: 1px solid ${({theme:e})=>e.appBorderColor};
    display: inline-flex;
    user-select: all;
  }
`,Ee=m.div`
  display: flex;
  align-items: center;
  gap: .5rem;
`,Se=m.div`
  width: 2rem;
  height: 2rem;
  border-radius: .25rem;
  border: 1px solid ${({theme:e})=>e.appBorderColor};
  background: ${({color:e})=>e};
  cursor: pointer;
  position: relative;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  transition: all 0.15s ease-out;
  
  &:hover {
    border-color: ${({theme:e})=>e.color.secondary};
    transform: scale(1.05);
  }
  
  &:focus-within,
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.color.secondary};
    box-shadow: 0 0 0 .125rem ${({theme:e})=>e.color.secondary}33, inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  }
  
  /* Checkered background for transparency */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      linear-gradient(45deg, #ccc 25%, transparent 25%), 
      linear-gradient(-45deg, #ccc 25%, transparent 25%), 
      linear-gradient(45deg, transparent 75%, #ccc 75%), 
      linear-gradient(-45deg, transparent 75%, #ccc 75%);
    background-size: .5rem .5rem;
    background-position: 0 0, 0 .25rem, .25rem -.25rem, -.25rem 0rem;
    border-radius: calc(.25rem - 1px);
    z-index: -1;
  }
`,ke=m.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`,xe=m.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
`,F=m.div`
  display: flex;
  align-items: center;
  gap: .5rem;
`,j=m.input`
  font-family: ${({theme:e})=>e.typography.fonts.mono};
  font-size: ${({theme:e})=>e.typography.size.s1/16}rem;
  padding: .375rem .5rem;
  border: 1px solid ${({theme:e})=>e.appBorderColor};
  border-radius: ${({theme:e})=>e.appBorderRadius/16}rem;
  background-color: ${({theme:e})=>e.background.content};
  color: ${({theme:e})=>e.color.defaultText};
  flex: 1;
  min-width: 0;
  max-width: 13rem;
  transition: border-color 0.15s ease-out;

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.color.secondary};
  }

  &:hover {
    border-color: ${({theme:e})=>e.color.mediumdark};
  }

  &[type="color"] {
    width: 2rem;
    height: 2rem;
    padding: .125rem;
    cursor: pointer;
    
    &::-webkit-color-swatch-wrapper {
      padding: 0;
      border: none;
      border-radius: .125rem;
      overflow: hidden;
    }
    
    &::-webkit-color-swatch {
      border: none;
      border-radius: .125rem;
    }
  }

  &[type="range"] {
    padding: 0;
    height: 1.25rem;
    background: transparent;
    cursor: pointer;
    appearance: none;
    max-width: 9.5rem;
    
    &::-webkit-slider-track {
      width: 100%;
      height: .25rem;
      background: ${({theme:e})=>e.appBorderColor};
      border-radius: .125rem;
    }
    
    &::-webkit-slider-thumb {
      appearance: none;
      height: 1rem;
      width: 1rem;
      border-radius: 50%;
      background: ${({theme:e})=>e.color.secondary};
      cursor: pointer;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
      transition: all 0.15s ease-out;
      
      &:hover {
        transform: scale(1.1);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
      }
    }
    
    &::-moz-range-track {
      width: 100%;
      height: .25rem;
      background: ${({theme:e})=>e.appBorderColor};
      border-radius: .125rem;
      border: none;
    }
    
    &::-moz-range-thumb {
      height: 1rem;
      width: 1rem;
      border-radius: 50%;
      background: ${({theme:e})=>e.color.secondary};
      cursor: pointer;
      border: none;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
      transition: all 0.15s ease-out;
      
      &:hover {
        transform: scale(1.1);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
      }
    }
    
    &:focus {
      outline: none;
      
      &::-webkit-slider-thumb {
        box-shadow: 0 0 0 .125rem ${({theme:e})=>e.color.secondary}33, 0 1px 2px rgba(0, 0, 0, 0.1);
      }
      
      &::-moz-range-thumb {
        box-shadow: 0 0 0 .125rem ${({theme:e})=>e.color.secondary}33, 0 1px 2px rgba(0, 0, 0, 0.1);
      }
    }
  }

  &::placeholder {
    color: ${({theme:e})=>e.color.mediumdark};
    font-style: italic;
  }
`,Ce=m(j)`
  font-family: ${({theme:e})=>e.typography.fonts.mono};
  min-width: 8rem;
  flex: 1;
`,we=m.label`
  font-size: ${({theme:e})=>e.typography.size.s1/16}rem;
  color: ${({theme:e})=>e.color.mediumdark};
  white-space: nowrap;
`,_e=m.span`
  font-size: ${({theme:e})=>e.typography.size.s1/16}rem;
  color: ${({theme:e})=>e.color.defaultText};
  font-family: ${({theme:e})=>e.typography.fonts.mono};
  min-width: 2.5rem;
  text-align: right;
`,J=m(H)`
  padding: .25rem .5rem;
  font-size: ${({theme:e})=>e.typography.size.s1/16}rem;
`,Te=m.div`
  padding: 2.5rem 1.25rem;
  text-align: center;
  color: ${({theme:e})=>e.color.mediumdark};
  
  h3 {
    font-family: ${({theme:e})=>e.typography.fonts.base};
    font-size: ${({theme:e})=>e.typography.size.s1/16}rem;
    font-weight: ${({theme:e})=>e.typography.weight.regular};
    margin: 0 0 .5rem 0;
    color: ${({theme:e})=>e.color.defaultText};
  }
  
  p {
    font-family: ${({theme:e})=>e.typography.fonts.base};
    font-size: ${({theme:e})=>e.typography.size.s2/16}rem;
    margin: 0;
    line-height: 1.4;
  }
  
  code {
    font-family: ${({theme:e})=>e.typography.fonts.mono};
    background: ${({theme:e})=>e.background.app};
    padding: .125rem .25rem;
    border-radius: .1875rem;
    font-size: ${({theme:e})=>e.typography.size.s1/16}rem;
  }
`,Oe=K(function(e){let p=N(ee,{}),h=Y({}),v=C({}),w=C({}),_=C({}),S=C({}),k=C({});Object.entries(p).forEach(([t,r])=>{h(E.REQUEST,{[t]:r.value})});let T=f(t=>{if(!t)return{color:"#000000",opacity:1};let r=t.trim().toLowerCase(),s=r.match(/^rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)$/);if(s&&s[1]&&s[2]&&s[3]&&s[4]){let n=parseInt(s[1],10),c=parseInt(s[2],10),d=parseInt(s[3],10),o=parseFloat(s[4]);if(n<=255&&c<=255&&d<=255&&o>=0&&o<=1){let u=g=>g.toString(16).padStart(2,"0");return{color:`#${u(n)}${u(c)}${u(d)}`,opacity:o}}}let l=r.match(/^hsla\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*,\s*([\d.]+)\s*\)$/);if(l&&l[1]&&l[2]&&l[3]&&l[4]){let n=parseInt(l[1],10),c=parseInt(l[2],10),d=parseInt(l[3],10),o=parseFloat(l[4]);if(n<=360&&c<=100&&d<=100&&o>=0&&o<=1){let u=V(n,c,d);if(u)return{color:u,opacity:o}}}let i=se(t);return i&&x(i)?{color:i,opacity:1}:{color:t,opacity:1}},[]),O=f((t,r)=>{if(r===1)return t;let s=t.match(/^#([0-9a-fA-F]{6})$/);if(s&&s[1]){let l=s[1],i=parseInt(l.substring(0,2),16),n=parseInt(l.substring(2,4),16),c=parseInt(l.substring(4,6),16);return`rgba(${i}, ${n}, ${c}, ${r})`}return t},[]),A=f(t=>{let r=document.createElement("div");if(r.style.color=t,r.style.color){document.body.appendChild(r);let s=window.getComputedStyle(r).color;document.body.removeChild(r);let l=s.match(/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([\d.]+))?\s*\)$/);if(l&&l[1]&&l[2]&&l[3]){let i=parseInt(l[1],10),n=parseInt(l[2],10),c=parseInt(l[3],10),d=o=>o.toString(16).padStart(2,"0");return`#${d(i)}${d(n)}${d(c)}`}}return null},[]),te=f((t,r)=>{h(E.REQUEST,{[t]:r})},[h]),re=f((t,r)=>{let{color:s,opacity:l}=T(r),i=v.current[t];i&&x(s)&&(i.value=s);let n=w.current[t],c=_.current[t],d=x(s)||A(r);n&&d&&(n.value=l.toString()),c&&(c.textContent=`${Math.round(l*100)}%`);let o=k.current[t];o&&(o.style.backgroundColor=r),h(E.REQUEST,{[t]:r})},[h,T,A]),oe=f((t,r)=>{let s=w.current[t],l=s?parseFloat(s.value):1,i=O(r,l),n=S.current[t];n&&(n.value=i);let c=k.current[t];c&&(c.style.backgroundColor=i),h(E.REQUEST,{[t]:i})},[h,O]),ae=f((t,r)=>{let s=v.current[t],l=s?s.value:"#000000",i;if(r===1)i=l;else if(i=O(l,r),i===l&&r!==1){let o=S.current[t],u=o?o.value:l,g=document.createElement("div");if(g.style.color=u,g.style.color){document.body.appendChild(g);let b=window.getComputedStyle(g).color;document.body.removeChild(g);let y=b.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/);if(y&&y[1]&&y[2]&&y[3]){let $=parseInt(y[1],10),ie=parseInt(y[2],10),ce=parseInt(y[3],10);i=`rgba(${$}, ${ie}, ${ce}, ${r})`}}}let n=_.current[t];n&&(n.textContent=`${Math.round(r*100)}%`);let c=S.current[t];c&&(c.value=i);let d=k.current[t];d&&(d.style.backgroundColor=i),h(E.REQUEST,{[t]:i})},[h,O]),M=f(t=>{let r=v.current[t],s=w.current[t],l=_.current[t],i=S.current[t],n=k.current[t];r&&(r.value="",s&&(s.value="1"),l&&(l.textContent="100%"),i&&(i.value=""),n&&(n.style.backgroundColor="#000000"),h(E.REQUEST,{[t]:""}))},[h]),le=f(()=>{Object.keys(p).forEach(t=>{M(t)})},[p,M]),L=f(t=>{let r=v.current[t],s=w.current[t],l=_.current[t],i=S.current[t],n=k.current[t],c=p[t]?.value||"",d=p[t]?.control;if(r){if(d==="color"){let{color:o,opacity:u}=T(c);r.type==="color"&&x(o)?r.value=o:r.value=c,s&&(s.value=u.toString()),l&&(l.textContent=`${Math.round(u*100)}%`),i&&(i.value=c),n&&(n.style.backgroundColor=c)}else r.value=c;h(E.REQUEST,{[t]:c})}},[p,h,T]),ne=f(()=>{Object.entries(p).forEach(([t,r])=>{L(t)})},[p,L]),V=f((t,r,s)=>{let l=t/360,i=r/100,n=s/100,c=(b,y,$)=>($<0&&($+=1),$>1&&($-=1),$<1/6?b+(y-b)*6*$:$<1/2?y:$<2/3?b+(y-b)*(2/3-$)*6:b),d,o,u;if(i===0)d=o=u=n;else{let b=n<.5?n*(1+i):n+i-n*i,y=2*n-b;d=c(y,b,l+1/3),o=c(y,b,l),u=c(y,b,l-1/3)}let g=b=>Math.round(b*255).toString(16).padStart(2,"0");return`#${g(d)}${g(o)}${g(u)}`},[]);function se(t){let r=t.trim().toLowerCase(),s=r.match(/^#([0-9a-f]{3})$/);if(s&&s[1]){let d=s[1];return`#${d[0]}${d[0]}${d[1]}${d[1]}${d[2]}${d[2]}`}let l=r.match(/^#([0-9a-f]{6})$/);if(l&&l[1])return r;let i=r.match(/^#([0-9a-f]{8})$/);if(i&&i[1])return null;let n=r.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/);if(n&&n[1]&&n[2]&&n[3]){let d=parseInt(n[1],10),o=parseInt(n[2],10),u=parseInt(n[3],10);if(d>255||o>255||u>255)return null;let g=b=>b.toString(16).padStart(2,"0");return`#${g(d)}${g(o)}${g(u)}`}if(r.match(/^rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*[\d.]+\s*\)$/))return null;let c=r.match(/^hsl\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*\)$/);if(c&&c[1]&&c[2]&&c[3]){let d=parseInt(c[1],10),o=parseInt(c[2],10),u=parseInt(c[3],10);return d>360||o>100||u>100?null:V(d,o,u)}return r.match(/^hsla\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*,\s*[\d.]+\s*\)$/),null}function x(t){return t?t.match(/^#([0-9a-fA-F]{6})$/)!==null:!1}return a.createElement(W,{...e},a.createElement(de,null,a.createElement(me,null,a.createElement(ue,null,a.createElement("span",{id:"clear-label"},"Clear uses component defaults")," \u2022 ",a.createElement("span",{id:"reset-label"},"Reset uses story defaults")),a.createElement(Z,null,a.createElement(H,{onClick:le,title:"Use the component's default values","aria-controls":Object.keys(p).join(" "),"aria-describedby":"clear-label"},"Clear all"),a.createElement(H,{onClick:ne,title:"Use the story's default values","aria-controls":Object.keys(p).join(" "),"aria-describedby":"reset-label"},"Reset all"))),Object.keys(p).length===0?a.createElement(Te,null,a.createElement("h3",null,"No CSS Properties configured"),a.createElement("p",null,"Add CSS variables to your story using the ",a.createElement("code",null,"cssVars")," parameter.")):a.createElement(pe,null,a.createElement(he,null,a.createElement(be,null,a.createElement(P,null,"Name"),a.createElement(P,null,"Default"),a.createElement(P,null,"Control"),a.createElement(P,null,"Actions"))),a.createElement(ge,null,Object.entries(p).map(([t,r])=>{let s=r.control||"text",l=s==="color",{color:i,opacity:n}=l?T(r.value):{color:"",opacity:1},c=l&&x(i),d=l&&(x(i)||A(r.value||""));return a.createElement(ye,{key:t},a.createElement(B,null,a.createElement(fe,null,t),r.description&&a.createElement($e,{id:`${t}-description`},r.description)),a.createElement(B,null,a.createElement(ve,{className:r.default?"has-value":""},r.default||"\u2013")),a.createElement(B,null,a.createElement(xe,null,l?a.createElement(a.Fragment,null,a.createElement(F,null,a.createElement(Ee,null,a.createElement(Se,{ref:o=>{k.current[t]=o},color:c?O(i,n):r.value||"#000000",role:"button",tabIndex:0,"aria-label":`Color swatch for ${t}. Current color: ${r.value||"not set"}. Click to open color picker.`,onKeyDown:o=>{if(o.key==="Enter"||o.key===" "){o.preventDefault();let u=v.current[t];u&&u.click()}}},a.createElement(ke,{ref:o=>{v.current[t]=o},id:t,type:"color",defaultValue:c?i:"#000000",onChange:o=>oe(t,o.target.value),"aria-label":`Color picker for ${t}`,"aria-describedby":r.description?`${t}-description`:void 0})),a.createElement(Ce,{ref:o=>{S.current[t]=o},type:"text",defaultValue:r.value||"",onChange:o=>re(t,o.target.value),placeholder:"Enter color","aria-label":`Color value for ${t}`,"aria-describedby":r.description?`${t}-description`:void 0}))),d&&a.createElement(F,null,a.createElement(we,{htmlFor:`${t}-opacity`},"Opacity:"),a.createElement(j,{ref:o=>{w.current[t]=o},id:`${t}-opacity`,type:"range",min:"0",max:"1",step:"0.01",defaultValue:n.toString(),onChange:o=>ae(t,parseFloat(o.target.value)),"aria-label":`Opacity for ${t}`,"aria-valuetext":`${Math.round(n*100)} percent`,"aria-describedby":`${t}-opacity-value`}),a.createElement(_e,{ref:o=>{_.current[t]=o},id:`${t}-opacity-value`},Math.round(n*100),"%"))):a.createElement(F,null,a.createElement(j,{ref:o=>{v.current[t]=o},id:t,type:s,defaultValue:r.value||"",onChange:o=>te(t,o.target.value),placeholder:`Enter ${s}`,step:s==="number"?1:void 0,"aria-label":`${s} input for ${t}`,"aria-describedby":r.description?`${t}-description`:void 0})))),a.createElement(B,null,a.createElement(Z,null,a.createElement(J,{onClick:()=>M(t),title:"Use component default","aria-controls":t,"aria-describedby":"clear-label"},"Clear"),a.createElement(J,{onClick:()=>L(t),title:"Use story default","aria-controls":t,"aria-describedby":"reset-label"},"Reset"))))})))))});function Ie(){let e=G().getSelectedPanel(),p=N(ee,{}),h=Object.keys(p).length;return a.createElement("div",{style:{display:"flex",alignItems:"center",gap:6}},a.createElement("span",null,"CSS Properties"),h===0?null:a.createElement(q,{compact:!0,status:e===X?"active":"neutral"},h))}U.register(D,e=>{U.add(X,{type:Q.PANEL,title:Ie,match:({viewMode:p})=>p==="story",render:({active:p})=>a.createElement(Oe,{active:p??!1})})});})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
