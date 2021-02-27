import '../styles/globals.css'
import { MDXProvider } from '@mdx-js/react';

import CodeBlock from '../components/CodeBlock';

const Wrapper = props => (
  <main style={{ padding: '20px', background: 'tomato' }} {...props} />
);

const components1 = {
  pre: props => <div {...props} />,
  code: props => <pre style={{ color: 'white', background: 'black', padding: '20px' }} {...props} />
};

const components2 = {
  pre: props => <div {...props} />,
  code: CodeBlock
};

function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={components2}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}

export default MyApp
