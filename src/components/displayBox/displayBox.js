import React from 'react';
import './displayBox.css';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { hybrid } from 'react-syntax-highlighter/dist/esm/styles/hljs';

class DisplayBox extends React.Component {
    render() {
        return (
           <SyntaxHighlighter className="displayBox" language="json" style={hybrid}>
               {JSON.stringify(this.props.value, null, 2)}
           </SyntaxHighlighter>
        );
    }
}


export default DisplayBox;