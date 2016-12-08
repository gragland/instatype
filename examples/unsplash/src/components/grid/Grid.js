import React from 'react';
import Row from './GridRow.js';
import Block from './GridBlock.js';
import { merge } from './util.js';

const Grid = ({ columns, spacing, hideOuterSpacing, children }) => {

  const styles = {
    wrapper: {
      // Prevent horizontal scroll
      overflowX: 'hidden'
    },
    grid: {
      paddingTop: `${spacing}px`,
      paddingBottom: `${spacing}px`
    },
    gridHideOuterSpacing: {
      // Expand grid width to hide outer gutters
      width: `calc(100% + ${spacing}px)`,
      marginLeft: `calc(-${spacing/2}px)`,
      paddingTop: 0,
      paddingBottom: 0
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

  let gridStyle = styles.grid;
  if (hideOuterSpacing){
    gridStyle = merge(gridStyle, styles.gridHideOuterSpacing);
  }

	return (
    <div style={styles.wrapper}>
      <div style={gridStyle}>
        {rowNodes}
      </div>
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
