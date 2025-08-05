import{j as t}from"./jsx-runtime-YJVl4s2E.js";import{r as C}from"./iframe-DgQbaY5b.js";const s=()=>t.jsx("button",{type:"button",className:"button",children:"Click me"});s.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Button"};const y={title:"Example/Button",component:s,parameters:{cssVarsTarget:".button",cssVars:{"--button-bg-color":{control:"color",default:"#1EA7FD",description:"Background color of the button"},"--button-text-color":{default:"#FFF",description:"Text color of the button"},Colors:{"--button-hover-bg":{control:"color",default:"#0D7DC1",description:"Background color when hovered"},"--button-hover-text-color":{control:"color",default:"var(--button-text-color)",description:"Text color when hovered"}},Layout:{"--button-padding":{default:"0.5em 1.5em",description:"Padding around the button text"},"--button-border-radius":{default:"3em",description:"Corner radius of the button"}}}}},e={},n={parameters:{cssVars:{"--button-bg-color":{value:"#f80"},"--button-text-color":{value:"ghostwhite"},Colors:{"--button-hover-bg":{value:"#e70"}},Layout:{"--button-padding":{value:"15px 30px"},"--button-border-radius":{value:"8px"}}}}},r={parameters:{cssVars:{"--button-bg-color":{value:"#e60"},"--button-text-color":{value:"ghostwhite"},Colors:{"--button-hover-bg":{value:"#c50"}},Layout:{"--button-padding":{value:"12px 24px"},"--button-border-radius":{value:"12px"}}}},decorators:[o=>t.jsx("div",{style:{display:"grid",placeItems:"center"},children:t.jsx(o,{})})]},a={render:()=>{const[o,f]=C.useState(!1);return t.jsxs("div",{children:[t.jsx("p",{children:"Click the toggle to show/hide the button. CSS variables will be applied automatically when the button appears."}),t.jsxs("button",{onClick:()=>f(!o),style:{marginBottom:"1rem",padding:"0.5rem 1rem"},children:[o?"Hide":"Show"," Button"]}),o&&t.jsx(s,{})]})},parameters:{cssVars:{"--button-bg-color":{value:"#ff6b6b"},"--button-text-color":{value:"#fff"},Colors:{"--button-hover-bg":{value:"#ff5252"}},Layout:{"--button-padding":{value:"8px 16px"},"--button-border-radius":{value:"20px"}}}}};var u,l,c;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,i,b;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: {
    cssVars: {
      '--button-bg-color': {
        value: '#f80'
      },
      '--button-text-color': {
        value: 'ghostwhite'
      },
      'Colors': {
        '--button-hover-bg': {
          value: '#e70'
        }
      },
      'Layout': {
        '--button-padding': {
          value: '15px 30px'
        },
        '--button-border-radius': {
          value: '8px'
        }
      }
    }
  }
}`,...(b=(i=n.parameters)==null?void 0:i.docs)==null?void 0:b.source}}};var p,m,h;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    cssVars: {
      '--button-bg-color': {
        value: '#e60'
      },
      '--button-text-color': {
        value: 'ghostwhite'
      },
      'Colors': {
        '--button-hover-bg': {
          value: '#c50'
        }
      },
      'Layout': {
        '--button-padding': {
          value: '12px 24px'
        },
        '--button-border-radius': {
          value: '12px'
        }
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
}`,...(h=(m=r.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var v,g,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
      },
      'Colors': {
        '--button-hover-bg': {
          value: '#ff5252'
        }
      },
      'Layout': {
        '--button-padding': {
          value: '8px 16px'
        },
        '--button-border-radius': {
          value: '20px'
        }
      }
    }
  }
}`,...(x=(g=a.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const w=["Default","Custom","CustomWithDecorator","CustomConditionalRender"],j=Object.freeze(Object.defineProperty({__proto__:null,Custom:n,CustomConditionalRender:a,CustomWithDecorator:r,Default:e,__namedExportsOrder:w,default:y},Symbol.toStringTag,{value:"Module"}));export{n as C,j as b};
