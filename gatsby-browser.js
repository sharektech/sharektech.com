import React from 'react';
import { ThemeProvider } from './src/context/ThemeContext';

import { MDXProvider } from '@mdx-js/react';
import { Author } from './src/shortcodes';

const shortcodes = { Author };

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={shortcodes}>
    <ThemeProvider>{element}</ThemeProvider>
  </MDXProvider>
);
