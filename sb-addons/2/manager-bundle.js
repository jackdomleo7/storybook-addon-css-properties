try{
(()=>{var l=__REACT__,{Children:Be,Component:Ae,Fragment:Me,Profiler:Le,PureComponent:Ue,StrictMode:Ne,Suspense:Fe,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:He,act:De,cloneElement:je,createContext:Ve,createElement:Ke,createFactory:Qe,createRef:Ye,forwardRef:We,isValidElement:Ge,lazy:qe,memo:V,startTransition:Ze,unstable_act:Je,useCallback:f,useContext:Xe,useDebugValue:et,useDeferredValue:tt,useEffect:rt,useId:ot,useImperativeHandle:at,useInsertionEffect:lt,useLayoutEffect:nt,useMemo:st,useReducer:it,useRef:C,useState:ct,useSyncExternalStore:dt,useTransition:mt,version:ut}=__REACT__;var yt=__STORYBOOK_API__,{ActiveTabs:ft,Consumer:$t,ManagerContext:vt,Provider:Et,RequestResponseError:St,addons:U,combineParameters:kt,controlOrMetaKey:xt,controlOrMetaSymbol:Ct,eventMatchesShortcut:wt,eventToShortcut:_t,experimental_MockUniversalStore:Tt,experimental_UniversalStore:Ot,experimental_getStatusStore:Rt,experimental_getTestProviderStore:It,experimental_requestResponse:zt,experimental_useStatusStore:Pt,experimental_useTestProviderStore:Bt,experimental_useUniversalStore:At,internal_fullStatusStore:Mt,internal_fullTestProviderStore:Lt,internal_universalStatusStore:Ut,internal_universalTestProviderStore:Nt,isMacLike:Ft,isShortcutTaken:Ht,keyToSymbol:Dt,merge:jt,mockChannel:Vt,optionOrAltSymbol:Kt,shortcutMatchesShortcut:Qt,shortcutToHumanString:Yt,types:K,useAddonState:Wt,useArgTypes:Gt,useArgs:qt,useChannel:Q,useGlobalTypes:Zt,useGlobals:Jt,useParameter:Y,useSharedState:Xt,useStoryPrepared:er,useStorybookApi:tr,useStorybookState:rr}=__STORYBOOK_API__;var sr=__STORYBOOK_COMPONENTS__,{A:ir,ActionBar:cr,AddonPanel:W,Badge:dr,Bar:mr,Blockquote:ur,Button:pr,Checkbox:hr,ClipboardCode:br,Code:gr,DL:yr,Div:fr,DocumentWrapper:$r,EmptyTabContent:vr,ErrorFormatter:Er,FlexBar:Sr,Form:kr,H1:xr,H2:Cr,H3:wr,H4:_r,H5:Tr,H6:Or,HR:Rr,IconButton:Ir,Img:zr,LI:Pr,Link:Br,ListItem:Ar,Loader:Mr,Modal:Lr,OL:Ur,P:Nr,Placeholder:Fr,Pre:Hr,ProgressSpinner:Dr,ResetWrapper:jr,ScrollArea:Vr,Separator:Kr,Spaced:Qr,Span:Yr,StorybookIcon:Wr,StorybookLogo:Gr,SyntaxHighlighter:qr,TT:Zr,TabBar:Jr,TabButton:Xr,TabWrapper:eo,Table:to,Tabs:ro,TabsState:oo,TooltipLinkList:ao,TooltipMessage:lo,TooltipNote:no,UL:so,WithTooltip:io,WithTooltipPure:co,Zoom:mo,codeCommon:uo,components:po,createCopyToClipboardFunction:ho,getStoryHref:bo,interleaveSeparators:go,nameSpaceClassNames:yo,resetComponents:fo,withReset:$o}=__STORYBOOK_COMPONENTS__;var xo=__STORYBOOK_THEMING__,{CacheProvider:Co,ClassNames:wo,Global:_o,ThemeProvider:To,background:Oo,color:Ro,convert:Io,create:zo,createCache:Po,createGlobal:Bo,createReset:Ao,css:Mo,darken:Lo,ensure:Uo,ignoreSsrWarning:No,isPropValid:Fo,jsx:Ho,keyframes:Do,lighten:jo,styled:m,themes:Vo,typography:Ko,useTheme:Qo,withTheme:Yo}=__STORYBOOK_THEMING__;var D="storybook-addon-css-properties",ne=`${D}/panel`,se="cssVars",E={REQUEST:`${D}/request`},ie=m.div`
  padding: 0;
  font-family: ${({theme:e})=>e.typography.fonts.base};
  background-color: ${({theme:e})=>e.background.content};
  height: 100%;
  overflow-y: auto;
`,ce=m.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .625rem .9375rem;
  border-bottom: 1px solid ${({theme:e})=>e.appBorderColor};
  background: ${({theme:e})=>e.background.content};
  position: sticky;
  top: 0;
  z-index: 1;
`,de=m.div`
  font-size: ${({theme:e})=>e.typography.size.s1/16}rem;
  color: ${({theme:e})=>e.color.mediumdark};
`,G=m.div`
  display: flex;
  gap: .375rem;
`,F=m.button`
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
`,me=m.div`
  display: table;
  width: 100%;
  border-collapse: collapse;
`,ue=m.div`
  display: table-header-group;
  background: ${({theme:e})=>e.background.app};
`,pe=m.div`
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
`,he=m.div`
  display: table-row-group;
`,be=m.div`
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
`,ge=m.div`
  font-family: ${({theme:e})=>e.typography.fonts.mono};
  font-size: ${({theme:e})=>e.typography.size.s1/16}rem;
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  color: ${({theme:e})=>e.color.secondary};
  margin-bottom: .25rem;
  user-select: all;
`,ye=m.div`
  font-size: ${({theme:e})=>e.typography.size.s1/16}rem;
  color: ${({theme:e})=>e.color.mediumdark};
  line-height: 1.4;
`,fe=m.div`
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
`,$e=m.div`
  display: flex;
  align-items: center;
  gap: .5rem;
`,ve=m.div`
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
`,Ee=m.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`,Se=m.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
`,N=m.div`
  display: flex;
  align-items: center;
  gap: .5rem;
`,H=m.input`
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
`,ke=m(H)`
  font-family: ${({theme:e})=>e.typography.fonts.mono};
  min-width: 8rem;
  flex: 1;
`,xe=m.label`
  font-size: ${({theme:e})=>e.typography.size.s1/16}rem;
  color: ${({theme:e})=>e.color.mediumdark};
  white-space: nowrap;
`,Ce=m.span`
  font-size: ${({theme:e})=>e.typography.size.s1/16}rem;
  color: ${({theme:e})=>e.color.defaultText};
  font-family: ${({theme:e})=>e.typography.fonts.mono};
  min-width: 2.5rem;
  text-align: right;
`,q=m(F)`
  padding: .25rem .5rem;
  font-size: ${({theme:e})=>e.typography.size.s1/16}rem;
`,we=m.div`
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
`,_e=V(function(e){let p=Y(se,{}),y=Q({}),v=C({}),w=C({}),_=C({}),S=C({}),k=C({});Object.entries(p).forEach(([t,r])=>{y(E.REQUEST,{[t]:r.value})});let T=f(t=>{if(!t)return{color:"#000000",opacity:1};let r=t.trim().toLowerCase(),s=r.match(/^rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)$/);if(s&&s[1]&&s[2]&&s[3]&&s[4]){let n=parseInt(s[1],10),c=parseInt(s[2],10),d=parseInt(s[3],10),o=parseFloat(s[4]);if(n<=255&&c<=255&&d<=255&&o>=0&&o<=1){let u=b=>b.toString(16).padStart(2,"0");return{color:`#${u(n)}${u(c)}${u(d)}`,opacity:o}}}let a=r.match(/^hsla\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*,\s*([\d.]+)\s*\)$/);if(a&&a[1]&&a[2]&&a[3]&&a[4]){let n=parseInt(a[1],10),c=parseInt(a[2],10),d=parseInt(a[3],10),o=parseFloat(a[4]);if(n<=360&&c<=100&&d<=100&&o>=0&&o<=1){let u=j(n,c,d);if(u)return{color:u,opacity:o}}}let i=oe(t);return i&&x(i)?{color:i,opacity:1}:{color:t,opacity:1}},[]),O=f((t,r)=>{if(r===1)return t;let s=t.match(/^#([0-9a-fA-F]{6})$/);if(s&&s[1]){let a=s[1],i=parseInt(a.substring(0,2),16),n=parseInt(a.substring(2,4),16),c=parseInt(a.substring(4,6),16);return`rgba(${i}, ${n}, ${c}, ${r})`}return t},[]),A=f(t=>{let r=document.createElement("div");if(r.style.color=t,r.style.color){document.body.appendChild(r);let s=window.getComputedStyle(r).color;document.body.removeChild(r);let a=s.match(/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([\d.]+))?\s*\)$/);if(a&&a[1]&&a[2]&&a[3]){let i=parseInt(a[1],10),n=parseInt(a[2],10),c=parseInt(a[3],10),d=o=>o.toString(16).padStart(2,"0");return`#${d(i)}${d(n)}${d(c)}`}}return null},[]),Z=f((t,r)=>{y(E.REQUEST,{[t]:r})},[y]),J=f((t,r)=>{let{color:s,opacity:a}=T(r),i=v.current[t];i&&x(s)&&(i.value=s);let n=w.current[t],c=_.current[t],d=x(s)||A(r);n&&d&&(n.value=a.toString()),c&&(c.textContent=`${Math.round(a*100)}%`);let o=k.current[t];o&&(o.style.backgroundColor=r),y(E.REQUEST,{[t]:r})},[y,T,A]),X=f((t,r)=>{let s=w.current[t],a=s?parseFloat(s.value):1,i=O(r,a),n=S.current[t];n&&(n.value=i);let c=k.current[t];c&&(c.style.backgroundColor=i),y(E.REQUEST,{[t]:i})},[y,O]),ee=f((t,r)=>{let s=v.current[t],a=s?s.value:"#000000",i;if(r===1)i=a;else if(i=O(a,r),i===a&&r!==1){let o=S.current[t],u=o?o.value:a,b=document.createElement("div");if(b.style.color=u,b.style.color){document.body.appendChild(b);let h=window.getComputedStyle(b).color;document.body.removeChild(b);let g=h.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/);if(g&&g[1]&&g[2]&&g[3]){let $=parseInt(g[1],10),ae=parseInt(g[2],10),le=parseInt(g[3],10);i=`rgba(${$}, ${ae}, ${le}, ${r})`}}}let n=_.current[t];n&&(n.textContent=`${Math.round(r*100)}%`);let c=S.current[t];c&&(c.value=i);let d=k.current[t];d&&(d.style.backgroundColor=i),y(E.REQUEST,{[t]:i})},[y,O]),M=f(t=>{let r=v.current[t],s=w.current[t],a=_.current[t],i=S.current[t],n=k.current[t];r&&(r.value="",s&&(s.value="1"),a&&(a.textContent="100%"),i&&(i.value=""),n&&(n.style.backgroundColor="#000000"),y(E.REQUEST,{[t]:""}))},[y]),te=f(()=>{Object.keys(p).forEach(t=>{M(t)})},[p,M]),L=f(t=>{let r=v.current[t],s=w.current[t],a=_.current[t],i=S.current[t],n=k.current[t],c=p[t]?.value||"",d=p[t]?.control;if(r){if(d==="color"){let{color:o,opacity:u}=T(c);r.type==="color"&&x(o)?r.value=o:r.value=c,s&&(s.value=u.toString()),a&&(a.textContent=`${Math.round(u*100)}%`),i&&(i.value=c),n&&(n.style.backgroundColor=c)}else r.value=c;y(E.REQUEST,{[t]:c})}},[p,y,T]),re=f(()=>{Object.entries(p).forEach(([t,r])=>{L(t)})},[p,L]),j=f((t,r,s)=>{let a=t/360,i=r/100,n=s/100,c=(h,g,$)=>($<0&&($+=1),$>1&&($-=1),$<1/6?h+(g-h)*6*$:$<1/2?g:$<2/3?h+(g-h)*(2/3-$)*6:h),d,o,u;if(i===0)d=o=u=n;else{let h=n<.5?n*(1+i):n+i-n*i,g=2*n-h;d=c(g,h,a+1/3),o=c(g,h,a),u=c(g,h,a-1/3)}let b=h=>Math.round(h*255).toString(16).padStart(2,"0");return`#${b(d)}${b(o)}${b(u)}`},[]);function oe(t){let r=t.trim().toLowerCase(),s=r.match(/^#([0-9a-f]{3})$/);if(s&&s[1]){let d=s[1];return`#${d[0]}${d[0]}${d[1]}${d[1]}${d[2]}${d[2]}`}let a=r.match(/^#([0-9a-f]{6})$/);if(a&&a[1])return r;let i=r.match(/^#([0-9a-f]{8})$/);if(i&&i[1])return null;let n=r.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/);if(n&&n[1]&&n[2]&&n[3]){let d=parseInt(n[1],10),o=parseInt(n[2],10),u=parseInt(n[3],10);if(d>255||o>255||u>255)return null;let b=h=>h.toString(16).padStart(2,"0");return`#${b(d)}${b(o)}${b(u)}`}if(r.match(/^rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*[\d.]+\s*\)$/))return null;let c=r.match(/^hsl\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*\)$/);if(c&&c[1]&&c[2]&&c[3]){let d=parseInt(c[1],10),o=parseInt(c[2],10),u=parseInt(c[3],10);return d>360||o>100||u>100?null:j(d,o,u)}return r.match(/^hsla\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*,\s*[\d.]+\s*\)$/),null}function x(t){return t?t.match(/^#([0-9a-fA-F]{6})$/)!==null:!1}return l.createElement(W,{...e},l.createElement(ie,null,l.createElement(ce,null,l.createElement(de,null,l.createElement("span",{id:"clear-label"},"Clear uses component defaults")," \u2022 ",l.createElement("span",{id:"reset-label"},"Reset uses story defaults")),l.createElement(G,null,l.createElement(F,{onClick:te,title:"Use the component's default values","aria-controls":Object.keys(p).join(" "),"aria-describedby":"clear-label"},"Clear all"),l.createElement(F,{onClick:re,title:"Use the story's default values","aria-controls":Object.keys(p).join(" "),"aria-describedby":"reset-label"},"Reset all"))),Object.keys(p).length===0?l.createElement(we,null,l.createElement("h3",null,"No CSS Properties configured"),l.createElement("p",null,"Add CSS variables to your story using the ",l.createElement("code",null,"cssVars")," parameter.")):l.createElement(me,null,l.createElement(ue,null,l.createElement(pe,null,l.createElement(P,null,"Name"),l.createElement(P,null,"Default"),l.createElement(P,null,"Control"),l.createElement(P,null,"Actions"))),l.createElement(he,null,Object.entries(p).map(([t,r])=>{let s=r.control||"text",a=s==="color",{color:i,opacity:n}=a?T(r.value):{color:"",opacity:1},c=a&&x(i),d=a&&(x(i)||A(r.value||""));return l.createElement(be,{key:t},l.createElement(B,null,l.createElement(ge,null,t),r.description&&l.createElement(ye,{id:`${t}-description`},r.description)),l.createElement(B,null,l.createElement(fe,{className:r.default?"has-value":""},r.default||"\u2013")),l.createElement(B,null,l.createElement(Se,null,a?l.createElement(l.Fragment,null,l.createElement(N,null,l.createElement($e,null,l.createElement(ve,{ref:o=>{k.current[t]=o},color:c?O(i,n):r.value||"#000000",role:"button",tabIndex:0,"aria-label":`Color swatch for ${t}. Current color: ${r.value||"not set"}. Click to open color picker.`,onKeyDown:o=>{if(o.key==="Enter"||o.key===" "){o.preventDefault();let u=v.current[t];u&&u.click()}}},l.createElement(Ee,{ref:o=>{v.current[t]=o},id:t,type:"color",defaultValue:c?i:"#000000",onChange:o=>X(t,o.target.value),"aria-label":`Color picker for ${t}`,"aria-describedby":r.description?`${t}-description`:void 0})),l.createElement(ke,{ref:o=>{S.current[t]=o},type:"text",defaultValue:r.value||"",onChange:o=>J(t,o.target.value),placeholder:"Enter color","aria-label":`Color value for ${t}`,"aria-describedby":r.description?`${t}-description`:void 0}))),d&&l.createElement(N,null,l.createElement(xe,{htmlFor:`${t}-opacity`},"Opacity:"),l.createElement(H,{ref:o=>{w.current[t]=o},id:`${t}-opacity`,type:"range",min:"0",max:"1",step:"0.01",defaultValue:n.toString(),onChange:o=>ee(t,parseFloat(o.target.value)),"aria-label":`Opacity for ${t}`,"aria-valuetext":`${Math.round(n*100)} percent`,"aria-describedby":`${t}-opacity-value`}),l.createElement(Ce,{ref:o=>{_.current[t]=o},id:`${t}-opacity-value`},Math.round(n*100),"%"))):l.createElement(N,null,l.createElement(H,{ref:o=>{v.current[t]=o},id:t,type:s,defaultValue:r.value||"",onChange:o=>Z(t,o.target.value),placeholder:`Enter ${s}`,step:s==="number"?1:void 0,"aria-label":`${s} input for ${t}`,"aria-describedby":r.description?`${t}-description`:void 0})))),l.createElement(B,null,l.createElement(G,null,l.createElement(q,{onClick:()=>M(t),title:"Use component default","aria-controls":t,"aria-describedby":"clear-label"},"Clear"),l.createElement(q,{onClick:()=>L(t),title:"Use story default","aria-controls":t,"aria-describedby":"reset-label"},"Reset"))))})))))});U.register(D,e=>{U.add(ne,{type:K.PANEL,title:"CSS Properties",match:({viewMode:p})=>p==="story",render:({active:p})=>l.createElement(_e,{active:p})})});})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
