try{
(()=>{var a=__REACT__,{Children:je,Component:He,Fragment:De,Profiler:Ke,PureComponent:Qe,StrictMode:Ye,Suspense:Ve,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:We,act:Ge,cloneElement:qe,createContext:Ze,createElement:Je,createFactory:Xe,createRef:et,forwardRef:tt,isValidElement:rt,lazy:ot,memo:W,startTransition:at,unstable_act:lt,useCallback:f,useContext:nt,useDebugValue:st,useDeferredValue:it,useEffect:F,useId:ct,useImperativeHandle:dt,useInsertionEffect:mt,useLayoutEffect:ut,useMemo:pt,useReducer:ht,useRef:w,useState:G,useSyncExternalStore:bt,useTransition:gt,version:yt}=__REACT__;var St=__STORYBOOK_API__,{ActiveTabs:kt,Consumer:xt,ManagerContext:Ct,Provider:wt,RequestResponseError:_t,addons:j,combineParameters:Tt,controlOrMetaKey:Ot,controlOrMetaSymbol:It,eventMatchesShortcut:Rt,eventToShortcut:zt,experimental_MockUniversalStore:Pt,experimental_UniversalStore:Bt,experimental_getStatusStore:At,experimental_getTestProviderStore:Mt,experimental_requestResponse:Lt,experimental_useStatusStore:Ut,experimental_useTestProviderStore:Nt,experimental_useUniversalStore:Ft,internal_fullStatusStore:jt,internal_fullTestProviderStore:Ht,internal_universalStatusStore:Dt,internal_universalTestProviderStore:Kt,isMacLike:Qt,isShortcutTaken:Yt,keyToSymbol:Vt,merge:Wt,mockChannel:Gt,optionOrAltSymbol:qt,shortcutMatchesShortcut:Zt,shortcutToHumanString:Jt,types:q,useAddonState:Xt,useArgTypes:er,useArgs:tr,useChannel:Z,useGlobalTypes:rr,useGlobals:or,useParameter:H,useSharedState:ar,useStoryPrepared:lr,useStorybookApi:J,useStorybookState:nr}=__STORYBOOK_API__;var mr=__STORYBOOK_COMPONENTS__,{A:ur,ActionBar:pr,AddonPanel:X,Badge:ee,Bar:hr,Blockquote:br,Button:gr,ClipboardCode:yr,Code:fr,DL:$r,Div:vr,DocumentWrapper:Er,EmptyTabContent:Sr,ErrorFormatter:kr,FlexBar:xr,Form:Cr,H1:wr,H2:_r,H3:Tr,H4:Or,H5:Ir,H6:Rr,HR:zr,IconButton:Pr,Img:Br,LI:Ar,Link:Mr,ListItem:Lr,Loader:Ur,Modal:Nr,OL:Fr,P:jr,Placeholder:Hr,Pre:Dr,ProgressSpinner:Kr,ResetWrapper:Qr,ScrollArea:Yr,Separator:Vr,Spaced:Wr,Span:Gr,StorybookIcon:qr,StorybookLogo:Zr,SyntaxHighlighter:Jr,TT:Xr,TabBar:eo,TabButton:to,TabWrapper:ro,Table:oo,Tabs:ao,TabsState:lo,TooltipLinkList:no,TooltipMessage:so,TooltipNote:io,UL:co,WithTooltip:mo,WithTooltipPure:uo,Zoom:po,codeCommon:ho,components:bo,createCopyToClipboardFunction:go,getStoryHref:yo,interleaveSeparators:fo,nameSpaceClassNames:$o,resetComponents:vo,withReset:Eo}=__STORYBOOK_COMPONENTS__;var wo=__STORYBOOK_THEMING__,{CacheProvider:_o,ClassNames:To,Global:Oo,ThemeProvider:Io,background:Ro,color:zo,convert:Po,create:Bo,createCache:Ao,createGlobal:Mo,createReset:Lo,css:Uo,darken:No,ensure:Fo,ignoreSsrWarning:jo,isPropValid:Ho,jsx:Do,keyframes:Ko,lighten:Qo,styled:u,themes:Yo,typography:Vo,useTheme:Wo,withTheme:Go}=__STORYBOOK_THEMING__;var Y="storybook-addon-css-properties",oe=`${Y}/panel`,ae="cssVars",k={REQUEST:`${Y}/request`},he=u.div`
  padding: 0;
  font-family: ${({theme:e})=>e.typography.fonts.base};
  background-color: ${({theme:e})=>e.background.content};
  height: 100%;
  overflow-y: auto;
`,be=u.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .625rem .9375rem;
  border-bottom: 1px solid ${({theme:e})=>e.appBorderColor};
  background: ${({theme:e})=>e.background.content};
  position: sticky;
  top: 0;
  z-index: 1;
`,ge=u.div`
  font-size: ${({theme:e})=>e.typography.size.s1/16}rem;
  color: ${({theme:e})=>e.color.mediumdark};
`,te=u.div`
  display: flex;
  gap: .375rem;
`,K=u.button`
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
`,ye=u.div`
  display: table;
  width: 100%;
  border-collapse: collapse;
`,fe=u.div`
  display: table-header-group;
  background: ${({theme:e})=>e.background.app};
`,$e=u.div`
  display: table-row;
`,B=u.div`
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
`,ve=u.div`
  display: table-row-group;
`,Ee=u.div`
  display: table-row;
  
  &:hover {
    background-color: ${({theme:e})=>e.background.hoverable};
  }
`,A=u.div`
  display: table-cell;
  padding: .625rem .9375rem;
  vertical-align: middle;
  border-bottom: 1px solid ${({theme:e})=>e.appBorderColor};
  font-family: ${({theme:e})=>e.typography.fonts.base};
  font-size: ${({theme:e})=>e.typography.size.s2/16}rem;
`,Se=u.div`
  font-family: ${({theme:e})=>e.typography.fonts.mono};
  font-size: ${({theme:e})=>e.typography.size.s1/16}rem;
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  color: ${({theme:e})=>e.color.secondary};
  margin-bottom: .25rem;
  user-select: all;
`,ke=u.div`
  font-size: ${({theme:e})=>e.typography.size.s1/16}rem;
  color: ${({theme:e})=>e.color.mediumdark};
  line-height: 1.4;
`,xe=u.div`
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
`,Ce=u.div`
  display: flex;
  align-items: center;
  gap: .5rem;
`,we=u.div`
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
`,_e=u.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`,Te=u.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
`,D=u.div`
  display: flex;
  align-items: center;
  gap: .5rem;
`,Q=u.input`
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
`,Oe=u(Q)`
  font-family: ${({theme:e})=>e.typography.fonts.mono};
  min-width: 8rem;
  flex: 1;
`,Ie=u.label`
  font-size: ${({theme:e})=>e.typography.size.s1/16}rem;
  color: ${({theme:e})=>e.color.mediumdark};
  white-space: nowrap;
`,Re=u.span`
  font-size: ${({theme:e})=>e.typography.size.s1/16}rem;
  color: ${({theme:e})=>e.color.defaultText};
  font-family: ${({theme:e})=>e.typography.fonts.mono};
  min-width: 2.5rem;
  text-align: right;
`,re=u(K)`
  padding: .25rem .5rem;
  font-size: ${({theme:e})=>e.typography.size.s1/16}rem;
`,ze=u.div`
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
`,Pe=W(function(e){let p=H(ae,{}),b=Z({}),E=w({}),_=w({}),T=w({}),x=w({}),S=w({}),[M,v]=G({});F(()=>{let t={};Object.entries(p).forEach(([r,l])=>{let o=l.value||"";t[r]=o,b(k.REQUEST,{[r]:o})}),v(t)},[p,b]),F(()=>{Object.entries(M).forEach(([t,r])=>{let l=S.current[t],o=p[t];l&&o?.control==="color"&&(l.style.backgroundColor=r||"#000000")})},[M,p]);let O=f(t=>{if(!t)return{color:"#000000",opacity:1};let r=t.trim().toLowerCase(),l=r.match(/^rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)$/);if(l&&l[1]&&l[2]&&l[3]&&l[4]){let c=parseInt(l[1],10),i=parseInt(l[2],10),d=parseInt(l[3],10),m=parseFloat(l[4]);if(c<=255&&i<=255&&d<=255&&m>=0&&m<=1){let n=h=>h.toString(16).padStart(2,"0");return{color:`#${n(c)}${n(i)}${n(d)}`,opacity:m}}}let o=r.match(/^hsla\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*,\s*([\d.]+)\s*\)$/);if(o&&o[1]&&o[2]&&o[3]&&o[4]){let c=parseInt(o[1],10),i=parseInt(o[2],10),d=parseInt(o[3],10),m=parseFloat(o[4]);if(c<=360&&i<=100&&d<=100&&m>=0&&m<=1){let n=V(c,i,d);if(n)return{color:n,opacity:m}}}let s=me(t);return s&&C(s)?{color:s,opacity:1}:{color:t,opacity:1}},[]),I=f((t,r)=>{if(r===1)return t;let l=t.match(/^#([0-9a-fA-F]{6})$/);if(l&&l[1]){let o=l[1],s=parseInt(o.substring(0,2),16),c=parseInt(o.substring(2,4),16),i=parseInt(o.substring(4,6),16);return`rgba(${s}, ${c}, ${i}, ${r})`}return t},[]),L=f(t=>{let r=document.createElement("div");if(r.style.color=t,r.style.color){document.body.appendChild(r);let l=window.getComputedStyle(r).color;document.body.removeChild(r);let o=l.match(/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([\d.]+))?\s*\)$/);if(o&&o[1]&&o[2]&&o[3]){let s=parseInt(o[1],10),c=parseInt(o[2],10),i=parseInt(o[3],10),d=m=>m.toString(16).padStart(2,"0");return`#${d(s)}${d(c)}${d(i)}`}}return null},[]),le=f((t,r)=>{v(l=>({...l,[t]:r})),b(k.REQUEST,{[t]:r})},[b]),ne=f((t,r)=>{v(n=>({...n,[t]:r}));let{color:l,opacity:o}=O(r),s=E.current[t];s&&C(l)&&(s.value=l);let c=_.current[t],i=T.current[t],d=C(l)||L(r);c&&d&&(c.value=o.toString()),i&&(i.textContent=`${Math.round(o*100)}%`);let m=S.current[t];m&&(m.style.backgroundColor=r),b(k.REQUEST,{[t]:r})},[b,O,L]),se=f((t,r)=>{let l=_.current[t],o=l?parseFloat(l.value):1,s=I(r,o);v(d=>({...d,[t]:s}));let c=x.current[t];c&&(c.value=s);let i=S.current[t];i&&(i.style.backgroundColor=s),b(k.REQUEST,{[t]:s})},[b,I,v]),ie=f((t,r)=>{let l=E.current[t],o=l?l.value:"#000000",s;if(r===1)s=o;else if(s=I(o,r),s===o&&r!==1){let m=x.current[t],n=m?m.value:o,h=document.createElement("div");if(h.style.color=n,h.style.color){document.body.appendChild(h);let g=window.getComputedStyle(h).color;document.body.removeChild(h);let y=g.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/);if(y&&y[1]&&y[2]&&y[3]){let $=parseInt(y[1],10),ue=parseInt(y[2],10),pe=parseInt(y[3],10);s=`rgba(${$}, ${ue}, ${pe}, ${r})`}}}v(m=>({...m,[t]:s}));let c=T.current[t];c&&(c.textContent=`${Math.round(r*100)}%`);let i=x.current[t];i&&(i.value=s);let d=S.current[t];d&&(d.style.backgroundColor=s),b(k.REQUEST,{[t]:s})},[b,I]),U=f(t=>{let r=E.current[t],l=_.current[t],o=T.current[t],s=x.current[t],c=S.current[t];v(i=>({...i,[t]:""})),r&&(r.value="",l&&(l.value="1"),o&&(o.textContent="100%"),s&&(s.value=""),c&&(c.style.backgroundColor="#000000"),b(k.REQUEST,{[t]:""}))},[b]),ce=f(()=>{Object.keys(p).forEach(t=>{U(t)})},[p,U]),N=f(t=>{let r=E.current[t],l=_.current[t],o=T.current[t],s=x.current[t],c=S.current[t],i=p[t]?.value||"",d=p[t]?.control;if(v(m=>({...m,[t]:i})),r){if(d==="color"){let{color:m,opacity:n}=O(i);r.type==="color"&&C(m)?r.value=m:r.value=i,l&&(l.value=n.toString()),o&&(o.textContent=`${Math.round(n*100)}%`),s&&(s.value=i),c&&(c.style.backgroundColor=i)}else r.value=i;b(k.REQUEST,{[t]:i})}},[p,b,O]),de=f(()=>{Object.entries(p).forEach(([t,r])=>{N(t)})},[p,N]),V=f((t,r,l)=>{let o=t/360,s=r/100,c=l/100,i=(g,y,$)=>($<0&&($+=1),$>1&&($-=1),$<1/6?g+(y-g)*6*$:$<1/2?y:$<2/3?g+(y-g)*(2/3-$)*6:g),d,m,n;if(s===0)d=m=n=c;else{let g=c<.5?c*(1+s):c+s-c*s,y=2*c-g;d=i(y,g,o+1/3),m=i(y,g,o),n=i(y,g,o-1/3)}let h=g=>Math.round(g*255).toString(16).padStart(2,"0");return`#${h(d)}${h(m)}${h(n)}`},[]);function me(t){let r=t.trim().toLowerCase(),l=r.match(/^#([0-9a-f]{3})$/);if(l&&l[1]){let d=l[1];return`#${d[0]}${d[0]}${d[1]}${d[1]}${d[2]}${d[2]}`}let o=r.match(/^#([0-9a-f]{6})$/);if(o&&o[1])return r;let s=r.match(/^#([0-9a-f]{8})$/);if(s&&s[1])return null;let c=r.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/);if(c&&c[1]&&c[2]&&c[3]){let d=parseInt(c[1],10),m=parseInt(c[2],10),n=parseInt(c[3],10);if(d>255||m>255||n>255)return null;let h=g=>g.toString(16).padStart(2,"0");return`#${h(d)}${h(m)}${h(n)}`}if(r.match(/^rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*[\d.]+\s*\)$/))return null;let i=r.match(/^hsl\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*\)$/);if(i&&i[1]&&i[2]&&i[3]){let d=parseInt(i[1],10),m=parseInt(i[2],10),n=parseInt(i[3],10);return d>360||m>100||n>100?null:V(d,m,n)}return r.match(/^hsla\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*,\s*[\d.]+\s*\)$/),null}function C(t){return t?t.match(/^#([0-9a-fA-F]{6})$/)!==null:!1}return a.createElement(X,{...e},a.createElement(he,null,a.createElement(be,null,a.createElement(ge,null,a.createElement("span",{id:"clear-label"},"Clear uses component defaults")," \u2022 ",a.createElement("span",{id:"reset-label"},"Reset uses story defaults")),a.createElement(te,null,a.createElement(K,{onClick:ce,title:"Use the component's default values","aria-controls":Object.keys(p).join(" "),"aria-describedby":"clear-label"},"Clear all"),a.createElement(K,{onClick:de,title:"Use the story's default values","aria-controls":Object.keys(p).join(" "),"aria-describedby":"reset-label"},"Reset all"))),Object.keys(p).length===0?a.createElement(ze,null,a.createElement("h3",null,"No CSS Properties configured"),a.createElement("p",null,"Add CSS variables to your story using the ",a.createElement("code",null,"cssVars")," parameter.")):a.createElement(ye,null,a.createElement(fe,null,a.createElement($e,null,a.createElement(B,null,"Name"),a.createElement(B,null,"Default"),a.createElement(B,null,"Control"),a.createElement(B,null,"Actions"))),a.createElement(ve,null,Object.entries(p).map(([t,r])=>{let l=r.control||"text",o=l==="color",s=M[t]||r.value||"",{color:c,opacity:i}=o?O(s):{color:"",opacity:1},d=o&&C(c),m=o&&(C(c)||L(s||""));return a.createElement(Ee,{key:t},a.createElement(A,null,a.createElement(Se,null,t),r.description&&a.createElement(ke,{id:`${t}-description`},r.description)),a.createElement(A,null,a.createElement(xe,{className:r.default?"has-value":""},r.default||"\u2013")),a.createElement(A,null,a.createElement(Te,null,o?a.createElement(a.Fragment,null,a.createElement(D,null,a.createElement(Ce,null,a.createElement(we,{ref:n=>{S.current[t]=n},color:d?I(c,i):s||"#000000",role:"button",tabIndex:0,"aria-label":`Color swatch for ${t}. Current color: ${s||"not set"}. Click to open color picker.`,onKeyDown:n=>{if(n.key==="Enter"||n.key===" "){n.preventDefault();let h=E.current[t];h&&h.click()}}},a.createElement(_e,{ref:n=>{E.current[t]=n},id:t,type:"color",value:d?c:"#000000",onChange:n=>se(t,n.target.value),"aria-label":`Color picker for ${t}`,"aria-describedby":r.description?`${t}-description`:void 0})),a.createElement(Oe,{ref:n=>{x.current[t]=n},type:"text",value:s,onChange:n=>ne(t,n.target.value),placeholder:"Enter color","aria-label":`Color value for ${t}`,"aria-describedby":r.description?`${t}-description`:void 0}))),m&&a.createElement(D,null,a.createElement(Ie,{htmlFor:`${t}-opacity`},"Opacity:"),a.createElement(Q,{ref:n=>{_.current[t]=n},id:`${t}-opacity`,type:"range",min:"0",max:"1",step:"0.01",value:i.toString(),onChange:n=>ie(t,parseFloat(n.target.value)),"aria-label":`Opacity for ${t}`,"aria-valuetext":`${Math.round(i*100)} percent`,"aria-describedby":`${t}-opacity-value`}),a.createElement(Re,{ref:n=>{T.current[t]=n},id:`${t}-opacity-value`},Math.round(i*100),"%"))):a.createElement(D,null,a.createElement(Q,{ref:n=>{E.current[t]=n},id:t,type:l,value:s,onChange:n=>le(t,n.target.value),placeholder:`Enter ${l}`,step:l==="number"?1:void 0,"aria-label":`${l} input for ${t}`,"aria-describedby":r.description?`${t}-description`:void 0})))),a.createElement(A,null,a.createElement(te,null,a.createElement(re,{onClick:()=>U(t),title:"Use component default","aria-controls":t,"aria-describedby":"clear-label"},"Clear"),a.createElement(re,{onClick:()=>N(t),title:"Use story default","aria-controls":t,"aria-describedby":"reset-label"},"Reset"))))})))))});function Be(){let e=J().getSelectedPanel(),p=H(ae,{}),b=Object.keys(p).length;return a.createElement("div",{style:{display:"flex",alignItems:"center",gap:6}},a.createElement("span",null,"CSS Properties"),b===0?null:a.createElement(ee,{compact:!0,status:e===oe?"active":"neutral"},b))}j.register(Y,e=>{j.add(oe,{type:q.PANEL,title:Be,match:({viewMode:p})=>p==="story",render:({active:p})=>a.createElement(Pe,{active:p??!1})})});})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
