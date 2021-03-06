import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import theme from "prism-react-renderer/themes/vsLight";

import Button from './Button';
import Input from './Input';

export default ({ children, className, live }) => {
  const language = className.replace(/language-/, '');

  if (live) {
    return (
      <div style={{ marginTop: '40px', border: '1px solid black', margin: '5px', borderRadius: '5px' }}>
        <LiveProvider code={children} scope={{ Button, Input }} transformCode={code => `<>${code}</>`} theme={theme} >
          <LivePreview style={{ padding: '10px' }} />
          <div style={{ backgroundColor: '#F6F6FF', position: 'relative' }}>
            <LiveEditor style={{ backgroundColor: '#F6F6FF', display: 'flex' }} />
            <div style={{ position: 'absolute', top: 0, right: 0, padding: '3px', fontSize: '10px', color: '#257F99' }}>LIVE DEMO</div>
          </div>
          <LiveError />
        </LiveProvider>
      </div>
    );
  }

  return (
    <Highlight {...defaultProps} code={children} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: '20px' }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
