var React = require('react');

var Row = React.createClass({

  render: function(){

    var styles = {
      row: {
        position: 'relative',
        width: '100%',
        marginBottom: (this.props.spacing) + 'px',
        paddingLeft: (this.props.spacing/2) + 'px', // Half spacing because child blocks also have left/right padding
        paddingRight: (this.props.spacing/2) + 'px',
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
        width: 'calc(100% + ' + this.props.spacing + 'px)',
        marginLeft: "calc(-" + (this.props.spacing/2) + "px)",
        paddingLeft: 0,
        paddingRight: 0
      },
      clearfix: {
        content: '""',
        display: 'table',
        clear: 'both'
      }
    };

    var rowStyle = styles.row;
    if (this.props.isLastRow)
      rowStyle = Object.assign(rowStyle, styles.rowLast);
    if (this.props.hideGutters)
      rowStyle = Object.assign(rowStyle, styles.rowHideGutters);

    return (
      <div className="row" style={rowStyle}>

          {this.props.children}

          <div style={styles.clearfix} />
      </div>
    );
  }
});

module.exports = Row;