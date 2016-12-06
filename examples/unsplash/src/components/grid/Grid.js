import React from 'react';
import Row from './GridRow.js';
import Block from './GridBlock.js';

const Grid = ({ columns, spacing, hideOuterSpacing, children }) => {

  const styles = {
    container: {
      paddingTop: `${spacing}px`,
      paddingBottom: `${spacing}px`
    },
    containerHideOuterSpacing: {
      paddingTop: 0,
      paddingBottom: 0,
      // Row width width will exceed grid with
      overflowX: 'hidden'
    }
  };

  const blockNodes = React.Children.map(children, (child, i) => {
    return (
      <Block
        spacing={spacing} 
        width={`${100 / columns}%`} 
        key={`block-${child.key || i}`}> 

        {child}
        
      </Block>
    )
  });

  let rowNodes = [];

  // Slice up blockNodes into rows
  // Each iteration jumps forward the number of columns (i+=columns)
  for (let i=0; i<blockNodes.length; i+=columns) {
    
    let rowStart = i;
    let rowEnd = i + columns;

    rowNodes.push(
      <Row 
        spacing={spacing} 
        isLastRow={rowEnd >= blockNodes.length}
        hideGutters={hideOuterSpacing}
        key={`row-${rowNodes.length}`}>

          { blockNodes.slice(rowStart, rowEnd) }

      </Row>
    );
  }

  let style = styles.container;

  if (hideOuterSpacing){
    style = Object.assign(style, styles.containerHideOuterSpacing);
  }

	return (
    <div style={style}>
      {rowNodes}
    </div>
	);
};

Grid.defaultProps = {
  columns: 3,
  spacing: 5,
  hideOuterSpacing: true
};

Grid.propTypes = {
  columns: React.PropTypes.number,
  spacing: React.PropTypes.number,
  hideOuterSpacing: React.PropTypes.bool,
  children: React.PropTypes.node.isRequired
};

export default Grid;
