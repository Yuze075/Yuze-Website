import React from 'react';

// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';

export const Detail = ({children, summary}) => {
    if (summary == null) summary = "summary";
    return (
        <details>
            <summary><b>{summary}</b></summary>
            {children}
        </details>
    );
}

export const Highlight = ({children, color}) => {
    if (color == null) color = "#1877F2";
    return (
        <span
            style={{
                backgroundColor: color,
                borderRadius: '2px',
                color: '#fff',
                padding: '0.2rem',
            }}>
      {children}
    </span>
    );
}

export default {
    // Re-use the default mapping
    ...MDXComponents,
    // Map the "<Highlight>" tag to our Highlight component
    // `Highlight` will receive all props that were passed to `<Highlight>` in MDX
    Highlight,
    Detail,
};
