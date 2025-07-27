try{
(()=>{var s=__REACT__,{Children:be,Component:ge,Fragment:ye,Profiler:Se,PureComponent:Ee,StrictMode:xe,Suspense:_e,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:$e,act:Te,cloneElement:ve,createContext:Ce,createElement:ke,createFactory:Re,createRef:Oe,forwardRef:we,isValidElement:Ie,lazy:Me,memo:L,startTransition:Pe,unstable_act:Ue,useCallback:b,useContext:Be,useDebugValue:Fe,useDeferredValue:Le,useEffect:Ae,useId:Ne,useImperativeHandle:He,useInsertionEffect:ze,useLayoutEffect:De,useMemo:Ve,useReducer:Ye,useRef:M,useState:Ke,useSyncExternalStore:Qe,useTransition:je,version:We}=__REACT__;var Xe=__STORYBOOK_API__,{ActiveTabs:et,Consumer:tt,ManagerContext:rt,Provider:ot,RequestResponseError:at,addons:P,combineParameters:nt,controlOrMetaKey:lt,controlOrMetaSymbol:st,eventMatchesShortcut:it,eventToShortcut:ct,experimental_MockUniversalStore:dt,experimental_UniversalStore:ut,experimental_getStatusStore:mt,experimental_getTestProviderStore:pt,experimental_requestResponse:ht,experimental_useStatusStore:ft,experimental_useTestProviderStore:bt,experimental_useUniversalStore:gt,internal_fullStatusStore:yt,internal_fullTestProviderStore:St,internal_universalStatusStore:Et,internal_universalTestProviderStore:xt,isMacLike:_t,isShortcutTaken:$t,keyToSymbol:Tt,merge:vt,mockChannel:Ct,optionOrAltSymbol:kt,shortcutMatchesShortcut:Rt,shortcutToHumanString:Ot,types:A,useAddonState:wt,useArgTypes:It,useArgs:Mt,useChannel:N,useGlobalTypes:Pt,useGlobals:Ut,useParameter:H,useSharedState:Bt,useStoryPrepared:Ft,useStorybookApi:Lt,useStorybookState:At}=__STORYBOOK_API__;var Vt=__STORYBOOK_COMPONENTS__,{A:Yt,ActionBar:Kt,AddonPanel:z,Badge:Qt,Bar:jt,Blockquote:Wt,Button:Gt,Checkbox:qt,ClipboardCode:Zt,Code:Jt,DL:Xt,Div:er,DocumentWrapper:tr,EmptyTabContent:rr,ErrorFormatter:or,FlexBar:ar,Form:nr,H1:lr,H2:sr,H3:ir,H4:cr,H5:dr,H6:ur,HR:mr,IconButton:pr,Img:hr,LI:fr,Link:br,ListItem:gr,Loader:yr,Modal:Sr,OL:Er,P:xr,Placeholder:_r,Pre:$r,ProgressSpinner:Tr,ResetWrapper:vr,ScrollArea:Cr,Separator:kr,Spaced:Rr,Span:Or,StorybookIcon:wr,StorybookLogo:Ir,SyntaxHighlighter:Mr,TT:Pr,TabBar:Ur,TabButton:Br,TabWrapper:Fr,Table:Lr,Tabs:Ar,TabsState:Nr,TooltipLinkList:Hr,TooltipMessage:zr,TooltipNote:Dr,UL:Vr,WithTooltip:Yr,WithTooltipPure:Kr,Zoom:Qr,codeCommon:jr,components:Wr,createCopyToClipboardFunction:Gr,getStoryHref:qr,interleaveSeparators:Zr,nameSpaceClassNames:Jr,resetComponents:Xr,withReset:eo}=__STORYBOOK_COMPONENTS__;var no=__STORYBOOK_THEMING__,{CacheProvider:lo,ClassNames:so,Global:io,ThemeProvider:co,background:uo,color:mo,convert:po,create:ho,createCache:fo,createGlobal:bo,createReset:go,css:yo,darken:So,ensure:Eo,ignoreSsrWarning:xo,isPropValid:_o,jsx:$o,keyframes:To,lighten:vo,styled:m,themes:Co,typography:ko,useTheme:D,withTheme:Ro}=__STORYBOOK_THEMING__;var B="storybook-addon-css-properties",q=`${B}/panel`,Z="cssVars",E={REQUEST:`${B}/request`},J=m.div`
  padding: 1.5rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background-color: ${({theme:t})=>t.background.content};
`,X=m.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`,V=m.div`
  display: flex;
  gap: 0.5rem;
`,k=m.button`
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
`,ee=m.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 32px;
`,te=m.li`
  display: flex;
  flex-direction: column;
  gap: .75rem;
`,re=m.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`,oe=m.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1;
  max-width: 37.5rem;
  margin-left: auto;
`,ae=m.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,ne=m.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,le=m.span`
  font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
  font-size: 0.875rem;
  color: ${({theme:t})=>t.color.mediumdark};
  min-width: 4rem;
  flex-shrink: 0;
`,se=m.label`
  font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({theme:t})=>t.color.defaultText};
  min-width: 12.5rem;
  flex-shrink: 0;
`,U=m.input`
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
`,ie=m.small`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 1rem;
  color: ${({theme:t})=>t.color.mediumdark};
  font-style: italic;
  line-height: 1.4;
`,ce=L(function(t){D();let h=H(Z,{}),f=N({}),x=M({}),v=M({});Object.entries(h).forEach(([e,r])=>{f(E.REQUEST,{[e]:r.value})});let R=b(e=>{if(!e)return{color:"#000000",opacity:1};let r=e.trim().toLowerCase(),o=r.match(/^rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)$/);if(o&&o[1]&&o[2]&&o[3]&&o[4]){let l=parseInt(o[1],10),a=parseInt(o[2],10),i=parseInt(o[3],10),d=parseFloat(o[4]);if(l<=255&&a<=255&&i<=255&&d>=0&&d<=1){let u=g=>g.toString(16).padStart(2,"0");return{color:`#${u(l)}${u(a)}${u(i)}`,opacity:d}}}let n=r.match(/^hsla\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*,\s*([\d.]+)\s*\)$/);if(n&&n[1]&&n[2]&&n[3]&&n[4]){let l=parseInt(n[1],10),a=parseInt(n[2],10),i=parseInt(n[3],10),d=parseFloat(n[4]);if(l<=360&&a<=100&&i<=100&&d>=0&&d<=1){let u=F(l,a,i);if(u)return{color:u,opacity:d}}}let c=G(e);return c&&I(c)?{color:c,opacity:1}:{color:e,opacity:1}},[]),C=b((e,r)=>{if(r===1)return e;let o=e.match(/^#([0-9a-fA-F]{6})$/);if(o&&o[1]){let n=o[1],c=parseInt(n.substr(0,2),16),l=parseInt(n.substr(2,2),16),a=parseInt(n.substr(4,2),16);return`rgba(${c}, ${l}, ${a}, ${r})`}return e},[]),Y=b((e,r)=>{f(E.REQUEST,{[e]:r})},[f]),K=b((e,r)=>{let o=v.current[e],n=o?parseFloat(o.value):1,c=C(r,n);f(E.REQUEST,{[e]:c})},[f,C]),Q=b((e,r)=>{let o=x.current[e],n=o?o.value:"#000000",c=C(n,r);f(E.REQUEST,{[e]:c})},[f,C]),O=b(e=>{let r=x.current[e],o=v.current[e];r&&(r.value="",o&&(o.value="1"),f(E.REQUEST,{[e]:""}))},[f]),j=b(()=>{Object.keys(h).forEach(e=>{O(e)})},[h,O]),w=b(e=>{let r=x.current[e],o=v.current[e],n=h[e]?.value||"",c=h[e]?.type;if(r){if(c==="color"){let{color:l,opacity:a}=R(n);r.type==="color"&&I(l)?r.value=l:r.value=n,o&&(o.value=a.toString())}else r.value=n;f(E.REQUEST,{[e]:n})}},[h,f,R]),W=b(()=>{Object.entries(h).forEach(([e,r])=>{w(e)})},[h,w]),F=b((e,r,o)=>{let n=e/360,c=r/100,l=o/100,a=(p,S,y)=>(y<0&&(y+=1),y>1&&(y-=1),y<1/6?p+(S-p)*6*y:y<1/2?S:y<2/3?p+(S-p)*(2/3-y)*6:p),i,d,u;if(c===0)i=d=u=l;else{let p=l<.5?l*(1+c):l+c-l*c,S=2*l-p;i=a(S,p,n+1/3),d=a(S,p,n),u=a(S,p,n-1/3)}let g=p=>Math.round(p*255).toString(16).padStart(2,"0");return`#${g(i)}${g(d)}${g(u)}`},[]);function G(e){let r=e.trim().toLowerCase(),o=r.match(/^#([0-9a-f]{3})$/);if(o&&o[1]){let i=o[1];return`#${i[0]}${i[0]}${i[1]}${i[1]}${i[2]}${i[2]}`}let n=r.match(/^#([0-9a-f]{6})$/);if(n&&n[1])return r;let c=r.match(/^#([0-9a-f]{8})$/);if(c&&c[1])return null;let l=r.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/);if(l&&l[1]&&l[2]&&l[3]){let i=parseInt(l[1],10),d=parseInt(l[2],10),u=parseInt(l[3],10);if(i>255||d>255||u>255)return null;let g=p=>p.toString(16).padStart(2,"0");return`#${g(i)}${g(d)}${g(u)}`}if(r.match(/^rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*[\d.]+\s*\)$/))return null;let a=r.match(/^hsl\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*\)$/);if(a&&a[1]&&a[2]&&a[3]){let i=parseInt(a[1],10),d=parseInt(a[2],10),u=parseInt(a[3],10);return i>360||d>100||u>100?null:F(i,d,u)}return r.match(/^hsla\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*,\s*[\d.]+\s*\)$/),null}function I(e){return e?e.match(/^#([0-9a-fA-F]{6})$/)!==null:!1}return s.createElement(z,{...t},s.createElement(J,null,s.createElement(X,null,s.createElement("div",null,s.createElement("p",null,"Clearing will use the component's default values | Resetting will use the story's default values")),s.createElement(V,null,s.createElement(k,{onClick:j,title:"Use the component's default values"},"Clear all"),s.createElement(k,{onClick:W,title:"Use the story's default values"},"Reset all"))),s.createElement(ee,null,Object.entries(h).map(([e,r])=>{let o=r.type==="color",{color:n,opacity:c}=o?R(r.value):{color:"",opacity:1},l=o&&I(n);return s.createElement(te,{key:e},s.createElement(re,null,s.createElement(se,{htmlFor:e},e),o?s.createElement(oe,null,s.createElement(ae,null,s.createElement(U,{ref:a=>{x.current[e]=a},id:e,type:l?"color":"text",defaultValue:l?n:r.value||"",onChange:a=>K(e,a.target.value),placeholder:"Enter color","aria-describedby":`id-${e}-description`})),l&&s.createElement(ne,null,s.createElement(le,null,"Opacity:"),s.createElement(U,{ref:a=>{v.current[e]=a},type:"range",min:"0",max:"1",step:"0.01",defaultValue:c.toString(),onChange:a=>Q(e,parseFloat(a.target.value)),"aria-label":`${e} opacity`}))):s.createElement(U,{ref:a=>{x.current[e]=a},id:e,type:r.type,defaultValue:r.value||"",onChange:a=>Y(e,a.target.value),placeholder:`Enter ${r.type}`,step:r.type==="number"?1:void 0,"aria-describedby":`id-${e}-description`}),s.createElement(V,null,s.createElement(k,{onClick:()=>O(e),title:"Use the component's default value"},"Clear"),s.createElement(k,{onClick:()=>w(e),title:"Use the story's default value"},"Reset"))),r.description&&s.createElement(ie,{id:`id-${e}-description`},r.description))}))))});P.register(B,t=>{P.add(q,{type:A.PANEL,title:"CSS Properties",match:({viewMode:h})=>h==="story",render:({active:h})=>s.createElement(ce,{active:h})})});})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
