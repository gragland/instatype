import React from 'react';
import { merge } from './util.js';

const Row = ({ spacing, isLastRow, hideGutters, children }) => {

  const styles = {
    row: {
      position: 'relative',
      width: '100%',
      marginBottom: `${spacing}px`,
      // Half outer spacing because child blocks also have left/right padding
      paddingLeft: `${spacing/2}px`,
      paddingRight: `${spacing/2}px`,
      'boxSizing': 'border-box',
      'WebkitBoxSizing': 'border-box',
      'MozBoxSizing': 'border-box'
    },
    rowLast: {
      marginBottom: 0
    },
    rowHideGutters: {
      paddingLeft: 0,
      paddingRight: 0
    },
    clearfix: {
      content: '""',
      display: 'table',
      clear: 'both'
    }
  };

  let rowStyle = styles.row;

  if (isLastRow){
    rowStyle = merge(rowStyle, styles.rowLast);
  }

  if (hideGutters && spacing > 0){
    rowStyle = merge(rowStyle, styles.rowHideGutters);
  }

  return (
    <div style={rowStyle}>
      {children}
      <div style={styles.clearfix} />
    </div>
  );
  
};

Row.propTypes = {
  spacing: React.PropTypes.number,
  isLastRow: React.PropTypes.bool,
  hideGutters: React.PropTypes.bool,
  children: React.PropTypes.node.isRequired
};

export default Row;