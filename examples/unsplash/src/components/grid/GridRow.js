import React from 'react';

const Row = ({ spacing, isLastRow, hideGutters, children }) => {

  const styles = {
    row: {
      position: 'relative',
      width: '100%',
      marginBottom: `${spacing}px`,
      paddingLeft: `${spacing/2}px`, // Half spacing because child blocks also have left/right padding
      paddingRight: `${spacing/2}px`,
      'boxSizing': 'border-box',
      'WebkitBoxSizing': 'border-box',
      'MozBoxSizing': 'border-box'
    },
    rowLast: {
      marginBottom: 0
    },
    // Expands row width to hide gutters (spacing to left and right of row)
    // Note: Gutter spacing is caused by child Block components (not style of row element)
    rowHideGutters: {
      width: `calc(100% + ${spacing}px)`,
      marginLeft: `calc(-${spacing/2}px`,
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
    rowStyle = Object.assign(rowStyle, styles.rowLast);
  }

  if (hideGutters && spacing > 0){
    rowStyle = Object.assign(rowStyle, styles.rowHideGutters);
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