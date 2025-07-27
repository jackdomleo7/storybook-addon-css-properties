try{
(()=>{var s=__REACT__,{Children:be,Component:ge,Fragment:ye,Profiler:Se,PureComponent:Ee,StrictMode:_e,Suspense:Te,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:$e,act:ve,cloneElement:xe,createContext:Ce,createElement:ke,createFactory:Oe,createRef:Re,forwardRef:we,isValidElement:Ie,lazy:Me,memo:L,startTransition:Pe,unstable_act:Ue,useCallback:b,useContext:Be,useDebugValue:Fe,useDeferredValue:Le,useEffect:Ae,useId:Ne,useImperativeHandle:He,useInsertionEffect:je,useLayoutEffect:ze,useMemo:De,useReducer:Ve,useRef:M,useState:Ye,useSyncExternalStore:Ke,useTransition:Qe,version:We}=__REACT__;var Xe=__STORYBOOK_API__,{ActiveTabs:et,Consumer:tt,ManagerContext:rt,Provider:ot,RequestResponseError:at,addons:P,combineParameters:nt,controlOrMetaKey:lt,controlOrMetaSymbol:st,eventMatchesShortcut:it,eventToShortcut:ct,experimental_MockUniversalStore:dt,experimental_UniversalStore:mt,experimental_getStatusStore:ut,experimental_getTestProviderStore:pt,experimental_requestResponse:ht,experimental_useStatusStore:ft,experimental_useTestProviderStore:bt,experimental_useUniversalStore:gt,internal_fullStatusStore:yt,internal_fullTestProviderStore:St,internal_universalStatusStore:Et,internal_universalTestProviderStore:_t,isMacLike:Tt,isShortcutTaken:$t,keyToSymbol:vt,merge:xt,mockChannel:Ct,optionOrAltSymbol:kt,shortcutMatchesShortcut:Ot,shortcutToHumanString:Rt,types:A,useAddonState:wt,useArgTypes:It,useArgs:Mt,useChannel:N,useGlobalTypes:Pt,useGlobals:Ut,useParameter:H,useSharedState:Bt,useStoryPrepared:Ft,useStorybookApi:Lt,useStorybookState:At}=__STORYBOOK_API__;var Dt=__STORYBOOK_COMPONENTS__,{A:Vt,ActionBar:Yt,AddonPanel:j,Badge:Kt,Bar:Qt,Blockquote:Wt,Button:Gt,Checkbox:qt,ClipboardCode:Zt,Code:Jt,DL:Xt,Div:er,DocumentWrapper:tr,EmptyTabContent:rr,ErrorFormatter:or,FlexBar:ar,Form:nr,H1:lr,H2:sr,H3:ir,H4:cr,H5:dr,H6:mr,HR:ur,IconButton:pr,Img:hr,LI:fr,Link:br,ListItem:gr,Loader:yr,Modal:Sr,OL:Er,P:_r,Placeholder:Tr,Pre:$r,ProgressSpinner:vr,ResetWrapper:xr,ScrollArea:Cr,Separator:kr,Spaced:Or,Span:Rr,StorybookIcon:wr,StorybookLogo:Ir,SyntaxHighlighter:Mr,TT:Pr,TabBar:Ur,TabButton:Br,TabWrapper:Fr,Table:Lr,Tabs:Ar,TabsState:Nr,TooltipLinkList:Hr,TooltipMessage:jr,TooltipNote:zr,UL:Dr,WithTooltip:Vr,WithTooltipPure:Yr,Zoom:Kr,codeCommon:Qr,components:Wr,createCopyToClipboardFunction:Gr,getStoryHref:qr,interleaveSeparators:Zr,nameSpaceClassNames:Jr,resetComponents:Xr,withReset:eo}=__STORYBOOK_COMPONENTS__;var no=__STORYBOOK_THEMING__,{CacheProvider:lo,ClassNames:so,Global:io,ThemeProvider:co,background:mo,color:uo,convert:po,create:ho,createCache:fo,createGlobal:bo,createReset:go,css:yo,darken:So,ensure:Eo,ignoreSsrWarning:_o,isPropValid:To,jsx:$o,keyframes:vo,lighten:xo,styled:p,themes:Co,typography:ko,useTheme:z,withTheme:Oo}=__STORYBOOK_THEMING__;var B="storybook-addon-css-properties",q=`${B}/panel`,Z="cssVars",E={REQUEST:`${B}/request`},J=p.div`
  padding: 1.5rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background-color: ${({theme:t})=>t.background.content};
`,X=p.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`,D=p.div`
  display: flex;
  gap: 0.5rem;
`,k=p.button`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border: 1px solid ${({theme:t})=>t.color.border};
  border-radius: 0.375rem;
  background-color: ${({theme:t})=>t.background.content};
  color: ${({theme:t})=>t.color.defaultText};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({theme:t})=>t.color.lighter};
  }

  &:focus {
    outline: none;
    border-color: ${({theme:t})=>t.color.secondary};
    box-shadow: 0 0 0 0.1875rem ${({theme:t})=>t.color.secondary}20;
  }

  &:active {
    transform: translateY(1px);
  }
`,ee=p.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 32px;
`,te=p.li`
  display: flex;
  flex-direction: column;
  gap: .75rem;
`,re=p.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`,oe=p.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1;
  max-width: 37.5rem;
  margin-left: auto;
`,ae=p.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,ne=p.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,le=p.span`
  font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
  font-size: 0.875rem;
  color: ${({theme:t})=>t.color.mediumdark};
  min-width: 4rem;
  flex-shrink: 0;
`,se=p.label`
  font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({theme:t})=>t.color.defaultText};
  min-width: 12.5rem;
  flex-shrink: 0;
`,U=p.input`
  font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
  font-size: 1.125rem;
  padding: 1rem 1.25rem;
  border: 2px solid ${({theme:t})=>t.color.border};
  border-radius: .5rem;
  background-color: ${({theme:t})=>t.background.content};
  color: ${({theme:t})=>t.color.defaultText};
  flex: 1;
  min-height: 2rem;
  box-sizing: border-box;
  transition: all 0.2s ease;
  max-width: 37.5rem;
  margin-left: auto;

  &:focus {
    outline: none;
    border-color: ${({theme:t})=>t.color.secondary};
    box-shadow: 0 0 0 .1875rem ${({theme:t})=>t.color.secondary}20;
  }

  &:hover {
    border-color: ${({theme:t})=>t.color.mediumdark};
  }

  &[type="color"] {
    padding: .5rem .75rem;
    height: 3.75rem;
    cursor: pointer;
    border-radius: .5rem;
    
    &::-webkit-color-swatch-wrapper {
      padding: 0;
      border: none;
      border-radius: .25rem;
      overflow: hidden;
    }
    
    &::-webkit-color-swatch {
      border: none;
      border-radius: .25rem;
    }
  }

  &[type="number"] {
    max-width: 12.5rem;
  }

  &[type="range"] {
    padding: 0;
    height: 2rem;
    background: transparent;
    cursor: pointer;
    
    &::-webkit-slider-track {
      width: 100%;
      height: 0.5rem;
      background: linear-gradient(90deg, transparent 0%, ${({theme:t})=>t.color.defaultText} 100%);
      border-radius: 0.25rem;
      border: 1px solid ${({theme:t})=>t.color.border};
    }
    
    &::-webkit-slider-thumb {
      appearance: none;
      height: 1.25rem;
      width: 1.25rem;
      border-radius: 50%;
      background: ${({theme:t})=>t.color.defaultText};
      border: 2px solid ${({theme:t})=>t.background.content};
      box-shadow: 0 0 0 1px ${({theme:t})=>t.color.border};
      cursor: pointer;
    }
    
    &::-moz-range-track {
      width: 100%;
      height: 0.5rem;
      background: linear-gradient(90deg, transparent 0%, ${({theme:t})=>t.color.defaultText} 100%);
      border-radius: 0.25rem;
      border: 1px solid ${({theme:t})=>t.color.border};
    }
    
    &::-moz-range-thumb {
      height: 1.25rem;
      width: 1.25rem;
      border-radius: 50%;
      background: ${({theme:t})=>t.color.defaultText};
      border: 2px solid ${({theme:t})=>t.background.content};
      box-shadow: 0 0 0 1px ${({theme:t})=>t.color.border};
      cursor: pointer;
    }
  }

  &::placeholder {
    color: ${({theme:t})=>t.color.mediumdark};
    font-style: italic;
  }
`,ie=p.small`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 1rem;
  color: ${({theme:t})=>t.color.mediumdark};
  font-style: italic;
  line-height: 1.4;
`,ce=L(function(t){z();let u=H(Z,{}),f=N({}),_=M({}),x=M({});Object.entries(u).forEach(([e,r])=>{f(E.REQUEST,{[e]:r.value})});let O=b(e=>{if(!e)return{color:"#000000",opacity:1};let r=e.trim().toLowerCase(),o=r.match(/^rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)$/);if(o&&o[1]&&o[2]&&o[3]&&o[4]){let l=parseInt(o[1],10),a=parseInt(o[2],10),i=parseInt(o[3],10),d=parseFloat(o[4]);if(l<=255&&a<=255&&i<=255&&d>=0&&d<=1){let m=g=>g.toString(16).padStart(2,"0");return{color:`#${m(l)}${m(a)}${m(i)}`,opacity:d}}}let n=r.match(/^hsla\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*,\s*([\d.]+)\s*\)$/);if(n&&n[1]&&n[2]&&n[3]&&n[4]){let l=parseInt(n[1],10),a=parseInt(n[2],10),i=parseInt(n[3],10),d=parseFloat(n[4]);if(l<=360&&a<=100&&i<=100&&d>=0&&d<=1){let m=F(l,a,i);if(m)return{color:m,opacity:d}}}let c=G(e);return c&&I(c)?{color:c,opacity:1}:{color:e,opacity:1}},[]),C=b((e,r)=>{if(r===1)return e;let o=e.match(/^#([0-9a-fA-F]{6})$/);if(o&&o[1]){let n=o[1],c=parseInt(n.substr(0,2),16),l=parseInt(n.substr(2,2),16),a=parseInt(n.substr(4,2),16);return`rgba(${c}, ${l}, ${a}, ${r})`}return e},[]),V=b((e,r)=>{f(E.REQUEST,{[e]:r})},[f]),Y=b((e,r)=>{let o=x.current[e],n=o?parseFloat(o.value):1,c=C(r,n);f(E.REQUEST,{[e]:c})},[f,C]),K=b((e,r)=>{let o=_.current[e],n=o?o.value:"#000000",c=C(n,r);f(E.REQUEST,{[e]:c})},[f,C]),R=b(e=>{let r=_.current[e],o=x.current[e];r&&(r.value="",o&&(o.value="1"),f(E.REQUEST,{[e]:""}))},[f]),Q=b(()=>{Object.keys(u).forEach(e=>{R(e)})},[u,R]),w=b(e=>{let r=_.current[e],o=x.current[e],n=u[e]?.value||"",c=u[e]?.type;if(r){if(c==="color"){let{color:l,opacity:a}=O(n);r.type==="color"&&I(l)?r.value=l:r.value=n,o&&(o.value=a.toString())}else r.value=n;f(E.REQUEST,{[e]:n})}},[u,f,O]),W=b(()=>{Object.entries(u).forEach(([e,r])=>{w(e)})},[u,w]),F=b((e,r,o)=>{let n=e/360,c=r/100,l=o/100,a=(h,S,y)=>(y<0&&(y+=1),y>1&&(y-=1),y<1/6?h+(S-h)*6*y:y<1/2?S:y<2/3?h+(S-h)*(2/3-y)*6:h),i,d,m;if(c===0)i=d=m=l;else{let h=l<.5?l*(1+c):l+c-l*c,S=2*l-h;i=a(S,h,n+1/3),d=a(S,h,n),m=a(S,h,n-1/3)}let g=h=>Math.round(h*255).toString(16).padStart(2,"0");return`#${g(i)}${g(d)}${g(m)}`},[]);function G(e){let r=e.trim().toLowerCase(),o=r.match(/^#([0-9a-f]{3})$/);if(o&&o[1]){let i=o[1];return`#${i[0]}${i[0]}${i[1]}${i[1]}${i[2]}${i[2]}`}let n=r.match(/^#([0-9a-f]{6})$/);if(n&&n[1])return r;let c=r.match(/^#([0-9a-f]{8})$/);if(c&&c[1])return null;let l=r.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/);if(l&&l[1]&&l[2]&&l[3]){let i=parseInt(l[1],10),d=parseInt(l[2],10),m=parseInt(l[3],10);if(i>255||d>255||m>255)return null;let g=h=>h.toString(16).padStart(2,"0");return`#${g(i)}${g(d)}${g(m)}`}if(r.match(/^rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*[\d.]+\s*\)$/))return null;let a=r.match(/^hsl\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*\)$/);if(a&&a[1]&&a[2]&&a[3]){let i=parseInt(a[1],10),d=parseInt(a[2],10),m=parseInt(a[3],10);return i>360||d>100||m>100?null:F(i,d,m)}return r.match(/^hsla\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*,\s*[\d.]+\s*\)$/),null}function I(e){return e?e.match(/^#([0-9a-fA-F]{6})$/)!==null:!1}return s.createElement(j,{...t},s.createElement(J,null,s.createElement(X,null,s.createElement("div",null,s.createElement("p",null,"Clearing will use the component's default values | Resetting will use the story's default values")),s.createElement(D,null,s.createElement(k,{onClick:Q,title:"Use the component's default values","aria-controls":Object.entries(u).map(([e])=>e).join(" ")},"Clear all"),s.createElement(k,{onClick:W,title:"Use the story's default values","aria-controls":Object.entries(u).map(([e])=>e).join(" ")},"Reset all"))),s.createElement(ee,null,Object.entries(u).map(([e,r])=>{let o=r.type==="color",{color:n,opacity:c}=o?O(r.value):{color:"",opacity:1},l=o&&I(n);return s.createElement(te,{key:e},s.createElement(re,null,s.createElement(se,{htmlFor:e},e),o?s.createElement(oe,null,s.createElement(ae,null,s.createElement(U,{ref:a=>{_.current[e]=a},id:e,type:l?"color":"text",defaultValue:l?n:r.value||"",onChange:a=>Y(e,a.target.value),placeholder:"Enter color","aria-describedby":`id-${e}-description`})),l&&s.createElement(ne,null,s.createElement(le,null,"Opacity:"),s.createElement(U,{ref:a=>{x.current[e]=a},type:"range",min:"0",max:"1",step:"0.01",defaultValue:c.toString(),onChange:a=>K(e,parseFloat(a.target.value)),"aria-label":`${e} opacity`}))):s.createElement(U,{ref:a=>{_.current[e]=a},id:e,type:r.type,defaultValue:r.value||"",onChange:a=>V(e,a.target.value),placeholder:`Enter ${r.type}`,step:r.type==="number"?1:void 0,"aria-describedby":`${e}-description`}),s.createElement(D,null,s.createElement(k,{onClick:()=>R(e),title:"Use the component's default value","aria-controls":e},"Clear"),s.createElement(k,{onClick:()=>w(e),title:"Use the story's default value","aria-controls":e},"Reset"))),r.description&&s.createElement(ie,{id:`${e}-description`},r.description))}))))});P.register(B,t=>{P.add(q,{type:A.PANEL,title:"CSS Properties",match:({viewMode:u})=>u==="story",render:({active:u})=>s.createElement(ce,{active:u})})});})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
