import{j as t}from"./index-B8IOm00S.js";import{r as w}from"./iframe-BAbSoevv.js";import"./preload-helper-C1FmrZbK.js";const a=()=>t.jsx("button",{type:"button",className:"button",children:"Click me"});a.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Button"};const y={title:"Example/Button",component:a,parameters:{cssVarsTarget:".button",cssVars:{"--button-bg-color":{control:"color",default:"#1ea7fd",description:"Background color of the button"},"--button-text-color":{default:"#fff",description:"Text color of the button"}}}},e={},r={parameters:{cssVars:{"--button-bg-color":{value:"#f80"},"--button-text-color":{value:"ghostwhite"}}}},n={parameters:{cssVars:{"--button-bg-color":{value:"#e60"},"--button-text-color":{value:"ghostwhite"}}},decorators:[o=>t.jsx("div",{style:{display:"grid",placeItems:"center"},children:t.jsx(o,{})})]},s={render:()=>{const[o,x]=w.useState(!1);return t.jsxs("div",{children:[t.jsx("p",{children:"Click the toggle to show/hide the button. CSS variables will be applied automatically when the button appears."}),t.jsxs("button",{onClick:()=>x(!o),style:{marginBottom:"1rem",padding:"0.5rem 1rem"},children:[o?"Hide":"Show"," Button"]}),o&&t.jsx(a,{})]})},parameters:{cssVars:{"--button-bg-color":{value:"#ff6b6b"},"--button-text-color":{value:"#fff"}}}};var c,u,l;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(l=(u=e.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var i,d,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  parameters: {
    cssVars: {
      '--button-bg-color': {
        value: '#f80'
      },
      '--button-text-color': {
        value: 'ghostwhite'
      }
    }
  }
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,b,h;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    cssVars: {
      '--button-bg-color': {
        value: '#e60'
      },
      '--button-text-color': {
        value: 'ghostwhite'
      }
    }
  },
  decorators: [Story => {
    // This decorator is used to apply CSS variables to the story
    return <div style={{
      display: 'grid',
      placeItems: 'center'
    }}><Story /></div>;
  }]
}`,...(h=(b=n.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var f,g,v;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const [showButton, setShowButton] = useState(false);
    return <div>
        <p>Click the toggle to show/hide the button. CSS variables will be applied automatically when the button appears.</p>
        <button onClick={() => setShowButton(!showButton)} style={{
        marginBottom: '1rem',
        padding: '0.5rem 1rem'
      }}>
          {showButton ? 'Hide' : 'Show'} Button
        </button>
        {showButton && <Button />}
      </div>;
  },
  parameters: {
    cssVars: {
      '--button-bg-color': {
        value: '#ff6b6b'
      },
      '--button-text-color': {
        value: '#fff'
      }
    }
  }
}`,...(v=(g=s.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const j=["Default","Custom","CustomWithDecorator","CustomConditionalRender"];export{r as Custom,s as CustomConditionalRender,n as CustomWithDecorator,e as Default,j as __namedExportsOrder,y as default};
