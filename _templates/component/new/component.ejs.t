---
to: src/components/<%= type %>/<%= name %>/<%= name %>.tsx
---
import React from 'react';
import './_<%= name %>.style.scss';


export interface Props {

}
const <%= name %> = ({}: Props): JSX.Element => {

	return (
    <div 
      data-testid="<%= name.replace(/[A-Z]/g, (match, offset) => (offset > 0 ? '-' : '') + match.toLowerCase())%>">
      {children}
    </div>
	);
}

export default <%= name %>;