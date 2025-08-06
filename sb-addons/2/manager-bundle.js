try{
(()=>{var l=__REACT__,{Children:Je,Component:er,Fragment:rr,Profiler:tr,PureComponent:or,StrictMode:ar,Suspense:nr,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:lr,act:sr,cloneElement:ir,createContext:cr,createElement:dr,createFactory:mr,createRef:pr,forwardRef:ur,isValidElement:hr,lazy:gr,memo:X,startTransition:br,unstable_act:fr,useCallback:v,useContext:yr,useDebugValue:$r,useDeferredValue:Er,useEffect:D,useId:kr,useImperativeHandle:vr,useInsertionEffect:xr,useLayoutEffect:Sr,useMemo:K,useReducer:Cr,useRef:I,useState:J,useSyncExternalStore:wr,useTransition:_r,version:Tr}=__REACT__;var Rr=__STORYBOOK_API__,{ActiveTabs:Pr,Consumer:Br,ManagerContext:Mr,Provider:Lr,RequestResponseError:Nr,addons:Q,combineParameters:Ur,controlOrMetaKey:jr,controlOrMetaSymbol:Fr,eventMatchesShortcut:Hr,eventToShortcut:Wr,experimental_MockUniversalStore:Dr,experimental_UniversalStore:Kr,experimental_getStatusStore:Qr,experimental_getTestProviderStore:Vr,experimental_requestResponse:Yr,experimental_useStatusStore:Gr,experimental_useTestProviderStore:qr,experimental_useUniversalStore:Zr,internal_fullStatusStore:Xr,internal_fullTestProviderStore:Jr,internal_universalStatusStore:et,internal_universalTestProviderStore:rt,isMacLike:tt,isShortcutTaken:ot,keyToSymbol:at,merge:nt,mockChannel:lt,optionOrAltSymbol:st,shortcutMatchesShortcut:it,shortcutToHumanString:ct,types:ee,useAddonState:dt,useArgTypes:mt,useArgs:pt,useChannel:re,useGlobalTypes:ut,useGlobals:ht,useParameter:V,useSharedState:gt,useStoryPrepared:bt,useStorybookApi:te,useStorybookState:ft}=__STORYBOOK_API__;var vt=__STORYBOOK_COMPONENTS__,{A:xt,ActionBar:St,AddonPanel:oe,Badge:ae,Bar:Ct,Blockquote:wt,Button:_t,ClipboardCode:Tt,Code:Ot,DL:It,Div:At,DocumentWrapper:zt,EmptyTabContent:Rt,ErrorFormatter:Pt,FlexBar:Bt,Form:Mt,H1:Lt,H2:Nt,H3:Ut,H4:jt,H5:Ft,H6:Ht,HR:Wt,IconButton:Dt,Img:Kt,LI:Qt,Link:Vt,ListItem:Yt,Loader:Gt,Modal:qt,OL:Zt,P:Xt,Placeholder:Jt,Pre:eo,ProgressSpinner:ro,ResetWrapper:to,ScrollArea:oo,Separator:ao,Spaced:no,Span:lo,StorybookIcon:so,StorybookLogo:io,SyntaxHighlighter:co,TT:mo,TabBar:po,TabButton:uo,TabWrapper:ho,Table:go,Tabs:bo,TabsState:fo,TooltipLinkList:yo,TooltipMessage:$o,TooltipNote:Eo,UL:ko,WithTooltip:vo,WithTooltipPure:xo,Zoom:So,codeCommon:Co,components:wo,createCopyToClipboardFunction:_o,getStoryHref:To,interleaveSeparators:Oo,nameSpaceClassNames:Io,resetComponents:Ao,withReset:zo}=__STORYBOOK_COMPONENTS__;var Lo=__STORYBOOK_THEMING__,{CacheProvider:No,ClassNames:Uo,Global:jo,ThemeProvider:Fo,background:Ho,color:Wo,convert:Do,create:Ko,createCache:Qo,createGlobal:Vo,createReset:Yo,css:Go,darken:qo,ensure:Zo,ignoreSsrWarning:Xo,isPropValid:Jo,jsx:ea,keyframes:ra,lighten:ta,styled:g,themes:oa,typography:aa,useTheme:na,withTheme:la}=__STORYBOOK_THEMING__;var Z="storybook-addon-css-properties",ie=`${Z}/panel`,ce="cssVars",w={REQUEST:`${Z}/request`},Ee=g.div`
  padding: 0;
  font-family: ${({theme:e})=>e.typography.fonts.base};
  background-color: ${({theme:e})=>e.background.content};
  height: 100%;
  overflow-y: auto;
`,ke=g.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .625rem .9375rem;
  border-bottom: 1px solid ${({theme:e})=>e.appBorderColor};
  background: ${({theme:e})=>e.background.content};
  position: sticky;
  top: 0;
  z-index: 1;
`,ve=g.div`
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
`,xe=g.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid ${({theme:e})=>e.appBorderColor};
  border-radius: .25rem;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,Se=g.thead`
  background: ${({theme:e})=>e.background.app};
`,Ce=g.tr`
  /* No additional styles needed */
`,N=g.th`
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
`,we=g.tbody`
  /* No additional styles needed */
`,_e=g.tr`
  background: ${({theme:e})=>e.background.app};
`,Te=g.th`
  padding: .75rem .9375rem;
  font-family: ${({theme:e})=>e.typography.fonts.base};
  font-size: ${({theme:e})=>e.typography.size.s2/16}rem;
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  color: ${({theme:e})=>e.color.defaultText};
  text-align: left;
  border-block: 1px solid ${({theme:e})=>e.appBorderColor};
  position: relative;
`,Oe=g.tr`
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
`,U=g.td`
  padding: .625rem .9375rem;
  vertical-align: middle;
  border-bottom: 1px solid ${({theme:e})=>e.appBorderColor};
  font-family: ${({theme:e})=>e.typography.fonts.base};
  font-size: ${({theme:e})=>e.typography.size.s2/16}rem;
`,Ie=g.div`
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
`,Ae=g.div`
  font-size: ${({theme:e})=>e.typography.size.s1/16}rem;
  color: ${({theme:e})=>e.color.mediumdark};
  line-height: 1.4;
`,ze=g.div`
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
`,Re=g.div`
  height: 1.25rem;
  width: 1.25rem;
  border-radius: .25rem;
  background-color: ${({color:e})=>e};
`,Pe=g.div`
  display: flex;
  align-items: center;
  gap: .5rem;
`,Be=g.div`
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
`,Me=g.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`,Le=g.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
`,Y=g.div`
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
`,Ne=g(q)`
  font-family: ${({theme:e})=>e.typography.fonts.mono};
  min-width: 8rem;
  flex: 1;
`,Ue=g.label`
  font-size: ${({theme:e})=>e.typography.size.s1/16}rem;
  color: ${({theme:e})=>e.color.mediumdark};
  white-space: nowrap;
`,je=g.span`
  font-size: ${({theme:e})=>e.typography.size.s1/16}rem;
  color: ${({theme:e})=>e.color.defaultText};
  font-family: ${({theme:e})=>e.typography.fonts.mono};
  min-width: 2.5rem;
  text-align: right;
`,le=g(G)`
  padding: .25rem .5rem;
  font-size: ${({theme:e})=>e.typography.size.s1/16}rem;
`,Fe=g.div`
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
`;function j(e){return e.startsWith("--")}function He(e){let f={};return Object.entries(e).forEach(([b,E])=>{j(b)?f[b]=E:Object.entries(E).forEach(([$,x])=>{j($)&&(f[$]=x)})}),f}function We(e){let f=[],b=[],E=new Map;return Object.entries(e).forEach(([$,x])=>{if(j($))b.push({key:$,value:x});else{let _=[];Object.entries(x).forEach(([S,T])=>{j(S)&&_.push({key:S,value:T})}),_.length>0&&E.set($,_)}}),b.length>0&&f.push({category:null,properties:b}),E.forEach(($,x)=>{f.push({category:x,properties:$})}),f}var De=X(function(e){let f=V(ce,{}),b=re({}),E=I({}),$=I({}),x=I({}),_=I({}),S=I({}),[T,C]=J({}),k=K(()=>He(f),[f]),de=K(()=>We(f),[f]);D(()=>{let r={};Object.entries(k).forEach(([a,t])=>{let n=t.value||"";r[a]=n,b(w.REQUEST,{[a]:n})}),C(r)},[k,b]),D(()=>{Object.entries(T).forEach(([r,a])=>{let t=S.current[r],n=k[r];t&&n?.control==="color"&&(t.style.backgroundColor=a||"#000000")})},[T,k]);let A=v(r=>{if(!r)return{color:"#000000",opacity:1};let a=r.trim().toLowerCase(),t=a.match(/^#([0-9a-f]{4})$/);if(t&&t[1]&&t[1].length===4){let s=t[1],p=s.charAt(0)+s.charAt(0),u=s.charAt(1)+s.charAt(1),d=s.charAt(2)+s.charAt(2),o=s.charAt(3)+s.charAt(3),h=parseInt(o,16)/255;return{color:`#${p}${u}${d}`,opacity:h}}let n=a.match(/^#([0-9a-f]{8})$/);if(n&&n[1]&&n[1].length===8){let s=n[1],p=s.substring(0,2),u=s.substring(2,4),d=s.substring(4,6),o=s.substring(6,8),h=parseInt(o,16)/255;return{color:`#${p}${u}${d}`,opacity:h}}let i=a.match(/^rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)$/);if(i&&i[1]&&i[2]&&i[3]&&i[4]){let s=parseInt(i[1],10),p=parseInt(i[2],10),u=parseInt(i[3],10),d=parseFloat(i[4]);if(s<=255&&p<=255&&u<=255&&d>=0&&d<=1){let o=h=>h.toString(16).padStart(2,"0");return{color:`#${o(s)}${o(p)}${o(u)}`,opacity:d}}}let c=a.match(/^hsla\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*,\s*([\d.]+)\s*\)$/);if(c&&c[1]&&c[2]&&c[3]&&c[4]){let s=parseInt(c[1],10),p=parseInt(c[2],10),u=parseInt(c[3],10),d=parseFloat(c[4]);if(s<=360&&p<=100&&u<=100&&d>=0&&d<=1){let o=W(s,p,u);if(o)return{color:o,opacity:d}}}let m=fe(r);return m&&O(m)?{color:m,opacity:1}:{color:r,opacity:1}},[]),z=v((r,a)=>{if(a===1)return r;let t=r.match(/^#([0-9a-fA-F]{6})$/);if(t&&t[1]){let n=t[1],i=parseInt(n.substring(0,2),16),c=parseInt(n.substring(2,4),16),m=parseInt(n.substring(4,6),16);return`rgba(${i}, ${c}, ${m}, ${a})`}return r},[]),L=v(r=>{let a=document.createElement("div");if(a.style.color=r,a.style.color){document.body.appendChild(a);let t=window.getComputedStyle(a).color;document.body.removeChild(a);let n=t.match(/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([\d.]+))?\s*\)$/);if(n&&n[1]&&n[2]&&n[3]){let i=parseInt(n[1],10),c=parseInt(n[2],10),m=parseInt(n[3],10),s=p=>p.toString(16).padStart(2,"0");return`#${s(i)}${s(c)}${s(m)}`}}return null},[]),me=v((r,a)=>{C(t=>({...t,[r]:a})),b(w.REQUEST,{[r]:a})},[b]),pe=v((r,a)=>{C(u=>({...u,[r]:a}));let{color:t,opacity:n}=A(a),i=E.current[r];i&&O(t)&&(i.value=t);let c=$.current[r],m=x.current[r],s=O(t)||L(a);c&&s&&(c.value=n.toString()),m&&(m.textContent=`${Math.round(n*100)}%`);let p=S.current[r];p&&(p.style.backgroundColor=a),b(w.REQUEST,{[r]:a})},[b,A,L]),ue=v((r,a)=>{let t=$.current[r],n=t?parseFloat(t.value):1,i=z(a,n);C(m=>({...m,[r]:i}));let c=S.current[r];c&&(c.style.backgroundColor=i),b(w.REQUEST,{[r]:i})},[b,z]),he=v((r,a)=>{let t=E.current[r],n=t?t.value:"#000000",i;if(a===1)i=n;else if(i=z(n,a),i===n&&a!==1){let s=_.current[r],p=s?s.value:n,u=document.createElement("div");if(u.style.color=p,u.style.color){document.body.appendChild(u);let d=window.getComputedStyle(u).color;document.body.removeChild(u);let o=d.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/);if(o&&o[1]&&o[2]&&o[3]){let h=parseInt(o[1],10),y=parseInt(o[2],10),R=parseInt(o[3],10);i=`rgba(${h}, ${y}, ${R}, ${a})`}}}C(s=>({...s,[r]:i}));let c=x.current[r];c&&(c.textContent=`${Math.round(a*100)}%`);let m=S.current[r];m&&(m.style.backgroundColor=i),b(w.REQUEST,{[r]:i})},[b,z]),F=v(r=>{let a=E.current[r],t=$.current[r],n=x.current[r],i=S.current[r];C(c=>({...c,[r]:""})),a&&a.type==="color"&&(a.value="#000000"),t&&(t.value="1"),n&&(n.textContent="100%"),i&&(i.style.backgroundColor="#000000"),b(w.REQUEST,{[r]:""})},[b]),ge=v(()=>{Object.keys(k).forEach(r=>{F(r)})},[k,F]),H=v(r=>{let a=E.current[r],t=$.current[r],n=x.current[r],i=S.current[r],c=k[r]?.value||"",m=k[r]?.control;if(C(s=>({...s,[r]:c})),m==="color"){let{color:s,opacity:p}=A(c);a&&a.type==="color"&&(a.value=O(s)?s:"#000000"),t&&(t.value=p.toString()),n&&(n.textContent=`${Math.round(p*100)}%`),i&&(i.style.backgroundColor=c||"#000000")}b(w.REQUEST,{[r]:c})},[k,b,A]),be=v(()=>{Object.entries(k).forEach(([r,a])=>{H(r)})},[k,H]),W=v((r,a,t)=>{let n=r/360,i=a/100,c=t/100,m=(o,h,y)=>(y<0&&(y+=1),y>1&&(y-=1),y<1/6?o+(h-o)*6*y:y<1/2?h:y<2/3?o+(h-o)*(2/3-y)*6:o),s,p,u;if(i===0)s=p=u=c;else{let o=c<.5?c*(1+i):c+i-c*i,h=2*c-o;s=m(h,o,n+1/3),p=m(h,o,n),u=m(h,o,n-1/3)}let d=o=>Math.round(o*255).toString(16).padStart(2,"0");return`#${d(s)}${d(p)}${d(u)}`},[]);function fe(r){let a=r.trim().toLowerCase(),t=a.match(/^#([0-9a-f]{3})$/);if(t&&t[1]){let d=t[1];return`#${d.charAt(0)}${d.charAt(0)}${d.charAt(1)}${d.charAt(1)}${d.charAt(2)}${d.charAt(2)}`}let n=a.match(/^#([0-9a-f]{4})$/);if(n&&n[1]&&n[1].length===4){let d=n[1];return`#${d.charAt(0)}${d.charAt(0)}${d.charAt(1)}${d.charAt(1)}${d.charAt(2)}${d.charAt(2)}`}let i=a.match(/^#([0-9a-f]{6})$/);if(i&&i[1])return a;let c=a.match(/^#([0-9a-f]{8})$/);if(c&&c[1]&&c[1].length===8)return`#${c[1].substring(0,6)}`;let m=a.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/);if(m&&m[1]&&m[2]&&m[3]){let d=parseInt(m[1],10),o=parseInt(m[2],10),h=parseInt(m[3],10);if(d>255||o>255||h>255)return null;let y=R=>R.toString(16).padStart(2,"0");return`#${y(d)}${y(o)}${y(h)}`}let s=a.match(/^rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*[\d.]+\s*\)$/);if(s&&s[1]&&s[2]&&s[3]){let d=parseInt(s[1],10),o=parseInt(s[2],10),h=parseInt(s[3],10);if(d>255||o>255||h>255)return null;let y=R=>R.toString(16).padStart(2,"0");return`#${y(d)}${y(o)}${y(h)}`}let p=a.match(/^hsl\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*\)$/);if(p&&p[1]&&p[2]&&p[3]){let d=parseInt(p[1],10),o=parseInt(p[2],10),h=parseInt(p[3],10);return d>360||o>100||h>100?null:W(d,o,h)}let u=a.match(/^hsla\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*,\s*[\d.]+\s*\)$/);if(u&&u[1]&&u[2]&&u[3]){let d=parseInt(u[1],10),o=parseInt(u[2],10),h=parseInt(u[3],10);return d>360||o>100||h>100?null:W(d,o,h)}return null}function O(r){return r?r.match(/^#([0-9a-fA-F]{6})$/)!==null:!1}function ye(r){if(!r)return!1;let a=r.trim().toLowerCase(),t=a.match(/^#([0-9a-f]{4})$/),n=a.match(/^#([0-9a-f]{8})$/),i=a.match(/^rgba\(/),c=a.match(/^hsla\(/);return!!(t||n||i||c)}function $e(r){return r.startsWith("#")||r.startsWith("rgb(")||r.startsWith("rgba(")||r.startsWith("hsl(")||r.startsWith("hsla(")||L(r)!==null}return l.createElement(oe,{...e},l.createElement(Ee,null,l.createElement(ke,null,l.createElement(ve,null,l.createElement("span",{id:"clear-label"},"Clear uses component defaults")," \u2022 ",l.createElement("span",{id:"reset-label"},"Reset uses story defaults")),l.createElement(ne,null,l.createElement(G,{onClick:ge,title:"Use the component's default values","aria-controls":Object.keys(k).join(" "),"aria-describedby":"clear-label"},"Clear all"),l.createElement(G,{onClick:be,title:"Use the story's default values","aria-controls":Object.keys(k).join(" "),"aria-describedby":"reset-label"},"Reset all"))),Object.keys(k).length===0?l.createElement(Fe,null,l.createElement("h3",null,"No CSS Properties configured"),l.createElement("p",null,"Add CSS variables to your story using the ",l.createElement("code",null,"cssVars")," parameter.")):l.createElement(xe,{role:"table","aria-label":"CSS Properties Configuration"},l.createElement(Se,null,l.createElement(Ce,null,l.createElement(N,{scope:"col"},"Name"),l.createElement(N,{scope:"col"},"Default"),l.createElement(N,{scope:"col"},"Control"),l.createElement(N,{scope:"col"},"Actions"))),l.createElement(we,null,de.map(({category:r,properties:a})=>l.createElement(l.Fragment,{key:r||"uncategorized"},r&&l.createElement(_e,null,l.createElement(Te,{colSpan:4,scope:"colgroup"},r)),a.map(({key:t,value:n})=>{let i=n.control||"text",c=i==="color",m=T[t]!==void 0?T[t]:n.value||"",{color:s,opacity:p}=c?A(m):{color:"",opacity:1},u=c&&O(s),d=c&&(O(s)||L(m||"")||ye(m||""));return l.createElement(Oe,{key:t},l.createElement(U,null,l.createElement(Ie,null,t),n.description&&l.createElement(Ae,{id:`${t}-description`},n.description)),l.createElement(U,null,l.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.25rem"}},l.createElement(ze,{className:n.default?"has-value":""},n.default||"\u2013"),n.default&&$e(n.default)&&l.createElement(Re,{color:n.default}))),l.createElement(U,null,l.createElement(Le,null,c?l.createElement(l.Fragment,null,l.createElement(Y,null,l.createElement(Pe,null,l.createElement(Be,{ref:o=>{S.current[t]=o},color:u?z(s,p):m||"#000000",role:"button",tabIndex:0,"aria-label":`Color swatch for ${t}. Current color: ${m||"not set"}. Click to open color picker.`,onKeyDown:o=>{if(o.key==="Enter"||o.key===" "){o.preventDefault();let h=E.current[t];h&&h.click()}}},l.createElement(Me,{ref:o=>{E.current[t]=o},id:t,type:"color",value:u?s:"#000000",onChange:o=>ue(t,o.target.value),"aria-label":`Color picker for ${t}`,"aria-describedby":n.description?`${t}-description`:void 0})),l.createElement(Ne,{ref:o=>{_.current[t]=o},type:"text",value:m,onChange:o=>pe(t,o.target.value),placeholder:"Enter color","aria-label":`Color value for ${t}`,"aria-describedby":n.description?`${t}-description`:void 0}))),d&&l.createElement(Y,null,l.createElement(Ue,{htmlFor:`${t}-opacity`},"Opacity:"),l.createElement(q,{ref:o=>{$.current[t]=o},id:`${t}-opacity`,type:"range",min:"0",max:"1",step:"0.01",value:p.toString(),onChange:o=>he(t,parseFloat(o.target.value)),"aria-label":`Opacity for ${t}`,"aria-valuetext":`${Math.round(p*100)} percent`,"aria-describedby":`${t}-opacity-value`}),l.createElement(je,{ref:o=>{x.current[t]=o},id:`${t}-opacity-value`},Math.round(p*100),"%"))):l.createElement(Y,null,l.createElement(q,{ref:o=>{E.current[t]=o},id:t,type:i,value:m,onChange:o=>me(t,o.target.value),placeholder:`Enter ${i}`,step:i==="number"?1:void 0,"aria-label":`${i} input for ${t}`,"aria-describedby":n.description?`${t}-description`:void 0})))),l.createElement(U,null,l.createElement(ne,null,l.createElement(le,{onClick:()=>F(t),title:"Use component default","aria-controls":t,"aria-describedby":"clear-label"},"Clear"),l.createElement(le,{onClick:()=>H(t),title:"Use story default","aria-controls":t,"aria-describedby":"reset-label"},"Reset"))))})))))))});function se(e){return e.startsWith("--")}function Ke(e){let f=0;return Object.entries(e).forEach(([b,E])=>{se(b)?f++:Object.keys(E).forEach($=>{se($)&&f++})}),f}function Qe(){let e=te().getSelectedPanel(),f=V(ce,{}),b=Ke(f);return l.createElement("div",{style:{display:"flex",alignItems:"center",gap:6}},l.createElement("span",null,"CSS Properties"),b===0?null:l.createElement(ae,{compact:!0,status:e===ie?"active":"neutral"},b))}Q.register(Z,e=>{Q.add(ie,{type:ee.PANEL,title:Qe,match:({viewMode:f})=>f==="story",render:({active:f})=>l.createElement(De,{active:f??!1})})});})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
