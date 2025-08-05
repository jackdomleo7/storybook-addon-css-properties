try{
(()=>{var l=__REACT__,{Children:Ze,Component:Xe,Fragment:Je,Profiler:er,PureComponent:rr,StrictMode:tr,Suspense:or,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:ar,act:nr,cloneElement:lr,createContext:sr,createElement:cr,createFactory:ir,createRef:dr,forwardRef:pr,isValidElement:mr,lazy:ur,memo:X,startTransition:hr,unstable_act:gr,useCallback:v,useContext:br,useDebugValue:fr,useDeferredValue:yr,useEffect:Q,useId:$r,useImperativeHandle:Er,useInsertionEffect:kr,useLayoutEffect:vr,useMemo:W,useReducer:xr,useRef:I,useState:J,useSyncExternalStore:Sr,useTransition:Cr,version:wr}=__REACT__;var Ar=__STORYBOOK_API__,{ActiveTabs:zr,Consumer:Rr,ManagerContext:Pr,Provider:Br,RequestResponseError:Mr,addons:K,combineParameters:Lr,controlOrMetaKey:Nr,controlOrMetaSymbol:Ur,eventMatchesShortcut:jr,eventToShortcut:Fr,experimental_MockUniversalStore:Hr,experimental_UniversalStore:Dr,experimental_getStatusStore:Qr,experimental_getTestProviderStore:Wr,experimental_requestResponse:Kr,experimental_useStatusStore:Yr,experimental_useTestProviderStore:Vr,experimental_useUniversalStore:Gr,internal_fullStatusStore:qr,internal_fullTestProviderStore:Zr,internal_universalStatusStore:Xr,internal_universalTestProviderStore:Jr,isMacLike:et,isShortcutTaken:rt,keyToSymbol:tt,merge:ot,mockChannel:at,optionOrAltSymbol:nt,shortcutMatchesShortcut:lt,shortcutToHumanString:st,types:ee,useAddonState:ct,useArgTypes:it,useArgs:dt,useChannel:re,useGlobalTypes:pt,useGlobals:mt,useParameter:Y,useSharedState:ut,useStoryPrepared:ht,useStorybookApi:te,useStorybookState:gt}=__STORYBOOK_API__;var Et=__STORYBOOK_COMPONENTS__,{A:kt,ActionBar:vt,AddonPanel:oe,Badge:ae,Bar:xt,Blockquote:St,Button:Ct,ClipboardCode:wt,Code:_t,DL:Tt,Div:Ot,DocumentWrapper:It,EmptyTabContent:At,ErrorFormatter:zt,FlexBar:Rt,Form:Pt,H1:Bt,H2:Mt,H3:Lt,H4:Nt,H5:Ut,H6:jt,HR:Ft,IconButton:Ht,Img:Dt,LI:Qt,Link:Wt,ListItem:Kt,Loader:Yt,Modal:Vt,OL:Gt,P:qt,Placeholder:Zt,Pre:Xt,ProgressSpinner:Jt,ResetWrapper:eo,ScrollArea:ro,Separator:to,Spaced:oo,Span:ao,StorybookIcon:no,StorybookLogo:lo,SyntaxHighlighter:so,TT:co,TabBar:io,TabButton:po,TabWrapper:mo,Table:uo,Tabs:ho,TabsState:go,TooltipLinkList:bo,TooltipMessage:fo,TooltipNote:yo,UL:$o,WithTooltip:Eo,WithTooltipPure:ko,Zoom:vo,codeCommon:xo,components:So,createCopyToClipboardFunction:Co,getStoryHref:wo,interleaveSeparators:_o,nameSpaceClassNames:To,resetComponents:Oo,withReset:Io}=__STORYBOOK_COMPONENTS__;var Bo=__STORYBOOK_THEMING__,{CacheProvider:Mo,ClassNames:Lo,Global:No,ThemeProvider:Uo,background:jo,color:Fo,convert:Ho,create:Do,createCache:Qo,createGlobal:Wo,createReset:Ko,css:Yo,darken:Vo,ensure:Go,ignoreSsrWarning:qo,isPropValid:Zo,jsx:Xo,keyframes:Jo,lighten:ea,styled:g,themes:ra,typography:ta,useTheme:oa,withTheme:aa}=__STORYBOOK_THEMING__;var Z="storybook-addon-css-properties",ce=`${Z}/panel`,ie="cssVars",w={REQUEST:`${Z}/request`},$e=g.div`
  padding: 0;
  font-family: ${({theme:e})=>e.typography.fonts.base};
  background-color: ${({theme:e})=>e.background.content};
  height: 100%;
  overflow-y: auto;
`,Ee=g.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .625rem .9375rem;
  border-bottom: 1px solid ${({theme:e})=>e.appBorderColor};
  background: ${({theme:e})=>e.background.content};
  position: sticky;
  top: 0;
  z-index: 1;
`,ke=g.div`
  font-size: ${({theme:e})=>e.typography.size.s1/16}rem;
  color: ${({theme:e})=>e.color.mediumdark};
`,ne=g.div`
  display: flex;
  gap: .375rem;
`,G=g.button`
  font-family: ${({theme:e})=>e.typography.fonts.base};
  font-size: ${({theme:e})=>e.typography.size.s1/16}rem;
  font-weight: ${({theme:e})=>e.typography.weight.regular};
  padding: .375rem .75rem;
  border: 1px solid ${({theme:e})=>e.appBorderColor};
  border-radius: ${({theme:e})=>e.appBorderRadius/16}rem;
  background-color: ${({theme:e})=>e.background.content};
  color: ${({theme:e})=>e.color.defaultText};
  cursor: pointer;
  
  @media (prefers-reduced-motion: no-preference) {
    transition: all 0.15s ease-out;
  }

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
`,ve=g.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid ${({theme:e})=>e.appBorderColor};
  border-radius: .25rem;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,xe=g.thead`
  background: ${({theme:e})=>e.background.app};
`,Se=g.tr`
  /* No additional styles needed */
`,L=g.th`
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
`,Ce=g.tbody`
  /* No additional styles needed */
`,we=g.tr`
  background: ${({theme:e})=>e.background.app};
`,_e=g.th`
  padding: .75rem .9375rem;
  font-family: ${({theme:e})=>e.typography.fonts.base};
  font-size: ${({theme:e})=>e.typography.size.s2/16}rem;
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  color: ${({theme:e})=>e.color.defaultText};
  text-align: left;
  background: linear-gradient(135deg, ${({theme:e})=>e.background.hoverable}, ${({theme:e})=>e.background.app});
  border-top: 1px solid ${({theme:e})=>e.appBorderColor};
  border-bottom: 2px solid ${({theme:e})=>e.color.secondary};
  position: relative;
`,Te=g.tr`
  @media (prefers-reduced-motion: no-preference) {
    transition: background-color 0.15s ease;
  }

  &:hover {
    background-color: ${({theme:e})=>e.background.hoverable};
  }
  
  &:last-child td {
    border-bottom: none;
  }
  
  &:focus-within {
    background-color: ${({theme:e})=>e.background.hoverable};
    outline: 2px solid ${({theme:e})=>e.color.secondary};
    outline-offset: -2px;
  }
`,N=g.td`
  padding: .625rem .9375rem;
  vertical-align: middle;
  border-bottom: 1px solid ${({theme:e})=>e.appBorderColor};
  font-family: ${({theme:e})=>e.typography.fonts.base};
  font-size: ${({theme:e})=>e.typography.size.s2/16}rem;
`,Oe=g.div`
  font-family: ${({theme:e})=>e.typography.fonts.mono};
  font-size: ${({theme:e})=>e.typography.size.s1/16}rem;
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  color: ${({theme:e})=>e.color.secondary};
  margin-bottom: .25rem;
  user-select: all;
  background: ${({theme:e})=>e.background.app};
  padding: .125rem .25rem;
  border-radius: .125rem;
  display: inline-block;
`,Ie=g.div`
  font-size: ${({theme:e})=>e.typography.size.s1/16}rem;
  color: ${({theme:e})=>e.color.mediumdark};
  line-height: 1.4;
`,Ae=g.div`
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
`,ze=g.div`
  display: flex;
  align-items: center;
  gap: .5rem;
`,Re=g.div`
  width: 2rem;
  height: 2rem;
  border-radius: .25rem;
  border: 1px solid ${({theme:e})=>e.appBorderColor};
  background: ${({color:e})=>e};
  cursor: pointer;
  position: relative;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  
  @media (prefers-reduced-motion: no-preference) {
    transition: all 0.15s ease-out;
  }
  
  &:hover {
    border-color: ${({theme:e})=>e.color.secondary};
    transform: scale(1.05);
  }
  
  &:focus-within,
  &:focus {
    outline: 2px solid ${({theme:e})=>e.color.secondary};
    outline-offset: 2px;
    border-color: ${({theme:e})=>e.color.secondary};
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  }
  
  &:focus:not(:focus-visible) {
    outline: none;
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
`,Pe=g.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`,Be=g.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
`,V=g.div`
  display: flex;
  align-items: center;
  gap: .5rem;
`,q=g.input`
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
`,Me=g(q)`
  font-family: ${({theme:e})=>e.typography.fonts.mono};
  min-width: 8rem;
  flex: 1;
`,Le=g.label`
  font-size: ${({theme:e})=>e.typography.size.s1/16}rem;
  color: ${({theme:e})=>e.color.mediumdark};
  white-space: nowrap;
`,Ne=g.span`
  font-size: ${({theme:e})=>e.typography.size.s1/16}rem;
  color: ${({theme:e})=>e.color.defaultText};
  font-family: ${({theme:e})=>e.typography.fonts.mono};
  min-width: 2.5rem;
  text-align: right;
`,le=g(G)`
  padding: .25rem .5rem;
  font-size: ${({theme:e})=>e.typography.size.s1/16}rem;
`,Ue=g.div`
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
`;function U(e){return e.startsWith("--")}function je(e){let f={};return Object.entries(e).forEach(([b,E])=>{U(b)?f[b]=E:Object.entries(E).forEach(([$,x])=>{U($)&&(f[$]=x)})}),f}function Fe(e){let f=[],b=[],E=new Map;return Object.entries(e).forEach(([$,x])=>{if(U($))b.push({key:$,value:x});else{let _=[];Object.entries(x).forEach(([S,T])=>{U(S)&&_.push({key:S,value:T})}),_.length>0&&E.set($,_)}}),b.length>0&&f.push({category:null,properties:b}),E.forEach(($,x)=>{f.push({category:x,properties:$})}),f}var He=X(function(e){let f=Y(ie,{}),b=re({}),E=I({}),$=I({}),x=I({}),_=I({}),S=I({}),[T,C]=J({}),k=W(()=>je(f),[f]),de=W(()=>Fe(f),[f]);Q(()=>{let t={};Object.entries(k).forEach(([a,r])=>{let n=r.value||"";t[a]=n,b(w.REQUEST,{[a]:n})}),C(t)},[k,b]),Q(()=>{Object.entries(T).forEach(([t,a])=>{let r=S.current[t],n=k[t];r&&n?.control==="color"&&(r.style.backgroundColor=a||"#000000")})},[T,k]);let A=v(t=>{if(!t)return{color:"#000000",opacity:1};let a=t.trim().toLowerCase(),r=a.match(/^#([0-9a-f]{4})$/);if(r&&r[1]&&r[1].length===4){let s=r[1],m=s.charAt(0)+s.charAt(0),u=s.charAt(1)+s.charAt(1),d=s.charAt(2)+s.charAt(2),o=s.charAt(3)+s.charAt(3),h=parseInt(o,16)/255;return{color:`#${m}${u}${d}`,opacity:h}}let n=a.match(/^#([0-9a-f]{8})$/);if(n&&n[1]&&n[1].length===8){let s=n[1],m=s.substring(0,2),u=s.substring(2,4),d=s.substring(4,6),o=s.substring(6,8),h=parseInt(o,16)/255;return{color:`#${m}${u}${d}`,opacity:h}}let c=a.match(/^rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)$/);if(c&&c[1]&&c[2]&&c[3]&&c[4]){let s=parseInt(c[1],10),m=parseInt(c[2],10),u=parseInt(c[3],10),d=parseFloat(c[4]);if(s<=255&&m<=255&&u<=255&&d>=0&&d<=1){let o=h=>h.toString(16).padStart(2,"0");return{color:`#${o(s)}${o(m)}${o(u)}`,opacity:d}}}let i=a.match(/^hsla\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*,\s*([\d.]+)\s*\)$/);if(i&&i[1]&&i[2]&&i[3]&&i[4]){let s=parseInt(i[1],10),m=parseInt(i[2],10),u=parseInt(i[3],10),d=parseFloat(i[4]);if(s<=360&&m<=100&&u<=100&&d>=0&&d<=1){let o=D(s,m,u);if(o)return{color:o,opacity:d}}}let p=fe(t);return p&&O(p)?{color:p,opacity:1}:{color:t,opacity:1}},[]),z=v((t,a)=>{if(a===1)return t;let r=t.match(/^#([0-9a-fA-F]{6})$/);if(r&&r[1]){let n=r[1],c=parseInt(n.substring(0,2),16),i=parseInt(n.substring(2,4),16),p=parseInt(n.substring(4,6),16);return`rgba(${c}, ${i}, ${p}, ${a})`}return t},[]),j=v(t=>{let a=document.createElement("div");if(a.style.color=t,a.style.color){document.body.appendChild(a);let r=window.getComputedStyle(a).color;document.body.removeChild(a);let n=r.match(/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([\d.]+))?\s*\)$/);if(n&&n[1]&&n[2]&&n[3]){let c=parseInt(n[1],10),i=parseInt(n[2],10),p=parseInt(n[3],10),s=m=>m.toString(16).padStart(2,"0");return`#${s(c)}${s(i)}${s(p)}`}}return null},[]),pe=v((t,a)=>{C(r=>({...r,[t]:a})),b(w.REQUEST,{[t]:a})},[b]),me=v((t,a)=>{C(u=>({...u,[t]:a}));let{color:r,opacity:n}=A(a),c=E.current[t];c&&O(r)&&(c.value=r);let i=$.current[t],p=x.current[t],s=O(r)||j(a);i&&s&&(i.value=n.toString()),p&&(p.textContent=`${Math.round(n*100)}%`);let m=S.current[t];m&&(m.style.backgroundColor=a),b(w.REQUEST,{[t]:a})},[b,A,j]),ue=v((t,a)=>{let r=$.current[t],n=r?parseFloat(r.value):1,c=z(a,n);C(p=>({...p,[t]:c}));let i=S.current[t];i&&(i.style.backgroundColor=c),b(w.REQUEST,{[t]:c})},[b,z]),he=v((t,a)=>{let r=E.current[t],n=r?r.value:"#000000",c;if(a===1)c=n;else if(c=z(n,a),c===n&&a!==1){let s=_.current[t],m=s?s.value:n,u=document.createElement("div");if(u.style.color=m,u.style.color){document.body.appendChild(u);let d=window.getComputedStyle(u).color;document.body.removeChild(u);let o=d.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/);if(o&&o[1]&&o[2]&&o[3]){let h=parseInt(o[1],10),y=parseInt(o[2],10),R=parseInt(o[3],10);c=`rgba(${h}, ${y}, ${R}, ${a})`}}}C(s=>({...s,[t]:c}));let i=x.current[t];i&&(i.textContent=`${Math.round(a*100)}%`);let p=S.current[t];p&&(p.style.backgroundColor=c),b(w.REQUEST,{[t]:c})},[b,z]),F=v(t=>{let a=E.current[t],r=$.current[t],n=x.current[t],c=S.current[t];C(i=>({...i,[t]:""})),a&&a.type==="color"&&(a.value="#000000"),r&&(r.value="1"),n&&(n.textContent="100%"),c&&(c.style.backgroundColor="#000000"),b(w.REQUEST,{[t]:""})},[b]),ge=v(()=>{Object.keys(k).forEach(t=>{F(t)})},[k,F]),H=v(t=>{let a=E.current[t],r=$.current[t],n=x.current[t],c=S.current[t],i=k[t]?.value||"",p=k[t]?.control;if(C(s=>({...s,[t]:i})),p==="color"){let{color:s,opacity:m}=A(i);a&&a.type==="color"&&(a.value=O(s)?s:"#000000"),r&&(r.value=m.toString()),n&&(n.textContent=`${Math.round(m*100)}%`),c&&(c.style.backgroundColor=i||"#000000")}b(w.REQUEST,{[t]:i})},[k,b,A]),be=v(()=>{Object.entries(k).forEach(([t,a])=>{H(t)})},[k,H]),D=v((t,a,r)=>{let n=t/360,c=a/100,i=r/100,p=(o,h,y)=>(y<0&&(y+=1),y>1&&(y-=1),y<1/6?o+(h-o)*6*y:y<1/2?h:y<2/3?o+(h-o)*(2/3-y)*6:o),s,m,u;if(c===0)s=m=u=i;else{let o=i<.5?i*(1+c):i+c-i*c,h=2*i-o;s=p(h,o,n+1/3),m=p(h,o,n),u=p(h,o,n-1/3)}let d=o=>Math.round(o*255).toString(16).padStart(2,"0");return`#${d(s)}${d(m)}${d(u)}`},[]);function fe(t){let a=t.trim().toLowerCase(),r=a.match(/^#([0-9a-f]{3})$/);if(r&&r[1]){let d=r[1];return`#${d.charAt(0)}${d.charAt(0)}${d.charAt(1)}${d.charAt(1)}${d.charAt(2)}${d.charAt(2)}`}let n=a.match(/^#([0-9a-f]{4})$/);if(n&&n[1]&&n[1].length===4){let d=n[1];return`#${d.charAt(0)}${d.charAt(0)}${d.charAt(1)}${d.charAt(1)}${d.charAt(2)}${d.charAt(2)}`}let c=a.match(/^#([0-9a-f]{6})$/);if(c&&c[1])return a;let i=a.match(/^#([0-9a-f]{8})$/);if(i&&i[1]&&i[1].length===8)return`#${i[1].substring(0,6)}`;let p=a.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/);if(p&&p[1]&&p[2]&&p[3]){let d=parseInt(p[1],10),o=parseInt(p[2],10),h=parseInt(p[3],10);if(d>255||o>255||h>255)return null;let y=R=>R.toString(16).padStart(2,"0");return`#${y(d)}${y(o)}${y(h)}`}let s=a.match(/^rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*[\d.]+\s*\)$/);if(s&&s[1]&&s[2]&&s[3]){let d=parseInt(s[1],10),o=parseInt(s[2],10),h=parseInt(s[3],10);if(d>255||o>255||h>255)return null;let y=R=>R.toString(16).padStart(2,"0");return`#${y(d)}${y(o)}${y(h)}`}let m=a.match(/^hsl\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*\)$/);if(m&&m[1]&&m[2]&&m[3]){let d=parseInt(m[1],10),o=parseInt(m[2],10),h=parseInt(m[3],10);return d>360||o>100||h>100?null:D(d,o,h)}let u=a.match(/^hsla\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*,\s*[\d.]+\s*\)$/);if(u&&u[1]&&u[2]&&u[3]){let d=parseInt(u[1],10),o=parseInt(u[2],10),h=parseInt(u[3],10);return d>360||o>100||h>100?null:D(d,o,h)}return null}function O(t){return t?t.match(/^#([0-9a-fA-F]{6})$/)!==null:!1}function ye(t){if(!t)return!1;let a=t.trim().toLowerCase(),r=a.match(/^#([0-9a-f]{4})$/),n=a.match(/^#([0-9a-f]{8})$/),c=a.match(/^rgba\(/),i=a.match(/^hsla\(/);return!!(r||n||c||i)}return l.createElement(oe,{...e},l.createElement($e,null,l.createElement(Ee,null,l.createElement(ke,null,l.createElement("span",{id:"clear-label"},"Clear uses component defaults")," \u2022 ",l.createElement("span",{id:"reset-label"},"Reset uses story defaults")),l.createElement(ne,null,l.createElement(G,{onClick:ge,title:"Use the component's default values","aria-controls":Object.keys(k).join(" "),"aria-describedby":"clear-label"},"Clear all"),l.createElement(G,{onClick:be,title:"Use the story's default values","aria-controls":Object.keys(k).join(" "),"aria-describedby":"reset-label"},"Reset all"))),Object.keys(k).length===0?l.createElement(Ue,null,l.createElement("h3",null,"No CSS Properties configured"),l.createElement("p",null,"Add CSS variables to your story using the ",l.createElement("code",null,"cssVars")," parameter.")):l.createElement(ve,{role:"table","aria-label":"CSS Properties Configuration"},l.createElement(xe,null,l.createElement(Se,null,l.createElement(L,{scope:"col"},"Name"),l.createElement(L,{scope:"col"},"Default"),l.createElement(L,{scope:"col"},"Control"),l.createElement(L,{scope:"col"},"Actions"))),l.createElement(Ce,null,de.map(({category:t,properties:a})=>l.createElement(l.Fragment,{key:t||"uncategorized"},t&&l.createElement(we,null,l.createElement(_e,{colSpan:4,scope:"colgroup"},t)),a.map(({key:r,value:n})=>{let c=n.control||"text",i=c==="color",p=T[r]!==void 0?T[r]:n.value||"",{color:s,opacity:m}=i?A(p):{color:"",opacity:1},u=i&&O(s),d=i&&(O(s)||j(p||"")||ye(p||""));return l.createElement(Te,{key:r},l.createElement(N,null,l.createElement(Oe,null,r),n.description&&l.createElement(Ie,{id:`${r}-description`},n.description)),l.createElement(N,null,l.createElement(Ae,{className:n.default?"has-value":""},n.default||"\u2013")),l.createElement(N,null,l.createElement(Be,null,i?l.createElement(l.Fragment,null,l.createElement(V,null,l.createElement(ze,null,l.createElement(Re,{ref:o=>{S.current[r]=o},color:u?z(s,m):p||"#000000",role:"button",tabIndex:0,"aria-label":`Color swatch for ${r}. Current color: ${p||"not set"}. Click to open color picker.`,onKeyDown:o=>{if(o.key==="Enter"||o.key===" "){o.preventDefault();let h=E.current[r];h&&h.click()}}},l.createElement(Pe,{ref:o=>{E.current[r]=o},id:r,type:"color",value:u?s:"#000000",onChange:o=>ue(r,o.target.value),"aria-label":`Color picker for ${r}`,"aria-describedby":n.description?`${r}-description`:void 0})),l.createElement(Me,{ref:o=>{_.current[r]=o},type:"text",value:p,onChange:o=>me(r,o.target.value),placeholder:"Enter color","aria-label":`Color value for ${r}`,"aria-describedby":n.description?`${r}-description`:void 0}))),d&&l.createElement(V,null,l.createElement(Le,{htmlFor:`${r}-opacity`},"Opacity:"),l.createElement(q,{ref:o=>{$.current[r]=o},id:`${r}-opacity`,type:"range",min:"0",max:"1",step:"0.01",value:m.toString(),onChange:o=>he(r,parseFloat(o.target.value)),"aria-label":`Opacity for ${r}`,"aria-valuetext":`${Math.round(m*100)} percent`,"aria-describedby":`${r}-opacity-value`}),l.createElement(Ne,{ref:o=>{x.current[r]=o},id:`${r}-opacity-value`},Math.round(m*100),"%"))):l.createElement(V,null,l.createElement(q,{ref:o=>{E.current[r]=o},id:r,type:c,value:p,onChange:o=>pe(r,o.target.value),placeholder:`Enter ${c}`,step:c==="number"?1:void 0,"aria-label":`${c} input for ${r}`,"aria-describedby":n.description?`${r}-description`:void 0})))),l.createElement(N,null,l.createElement(ne,null,l.createElement(le,{onClick:()=>F(r),title:"Use component default","aria-controls":r,"aria-describedby":"clear-label"},"Clear"),l.createElement(le,{onClick:()=>H(r),title:"Use story default","aria-controls":r,"aria-describedby":"reset-label"},"Reset"))))})))))))});function se(e){return e.startsWith("--")}function De(e){let f=0;return Object.entries(e).forEach(([b,E])=>{se(b)?f++:Object.keys(E).forEach($=>{se($)&&f++})}),f}function Qe(){let e=te().getSelectedPanel(),f=Y(ie,{}),b=De(f);return l.createElement("div",{style:{display:"flex",alignItems:"center",gap:6}},l.createElement("span",null,"CSS Properties"),b===0?null:l.createElement(ae,{compact:!0,status:e===ce?"active":"neutral"},b))}K.register(Z,e=>{K.add(ce,{type:ee.PANEL,title:Qe,match:({viewMode:f})=>f==="story",render:({active:f})=>l.createElement(He,{active:f??!1})})});})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
