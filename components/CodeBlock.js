import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import theme from "prism-react-renderer/themes/shadesOfPurple";

import Button from './Button';
import Input from './Input';

export default ({ children, className, live }) => {
  const language = className.replace(/language-/, '');

  if (live) {
    return (
      <div style={{ marginTop: '40px', border: '1px solid black', margin: '5px', borderRadius: '5px', background: '#e8e8e8' }}>
        <LiveProvider code={children} scope={{ Button, Input }} transformCode={code => `<>${code}</>`} theme={theme} >
          <LivePreview style={{ padding: '10px' }} />
          <LiveEditor style={{ margin: '10px', padding: '0px' }}/>
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
