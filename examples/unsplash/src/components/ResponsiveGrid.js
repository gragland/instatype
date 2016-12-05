import React from 'react';
import Grid from 'react-simple-grid';
import { nextHighestNumber, elementWidth } from './../util.js';

class ResponsiveGrid extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      spacing: this.props.spacing,
      columns: this.props.columns
    };

    this.setup = this.setup.bind(this);
    this.breakPoints = this.breakPoints.bind(this);
    this.columnWidth = this.columnWidth.bind(this);
  }

  componentDidMount(){
    this.setup();
    window.addEventListener('resize', this.setup);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setup);
  }

  setup() {
    // Compute column count and spacing based on grid width
    if (this.props.breakPoints){
      this.breakPoints();
    }

    // Compute column width and pass to child components
    // Async so that children are rendered before computing column width
    // Otherwise scroll bar may change actual width and our value will be wrong
    if (this.props.passColumnWidth){
      setTimeout(() => this.columnWidth(), 0);
    }
  }

  breakPoints(){
    const { breakPoints } = this.props;
    const gridWidth = elementWidth(this.el);
    const { columns, spacing } = nextHighestNumber(breakPoints, gridWidth, 'maxWidth');

    this.setState({ 
      spacing: spacing, 
      columns: columns
    });
  }

  columnWidth(){
    const { hideOuterSpacing } = this.props;
    const { spacing, columns } = this.state;

    const gridWidth = elementWidth(this.el);

    const gutterCount = columns + (hideOuterSpacing ? -1 : 1);
    const totalSpacing = gutterCount * spacing;
    const columnWidth = (gridWidth - totalSpacing) / columns;

    console.log(`Grid Width: ${gridWidth}`);
    console.log(`Column Width: ${columnWidth}`);

    this.setState({ columnWidth: columnWidth });
  }

  render(){

    const { children, hideOuterSpacing, ...props } = this.props;
    const { columns, spacing, columnWidth } = this.state;

    const childrenWithProps = React.Children.map(children, (child) => {
      return React.cloneElement(child, {
        parentColumnWidth: columnWidth
      });
    });

    // TODO: Modify react-simple-grid so that overflow-x is hidden
    // We can then remove wrapper and apply ref directly to component
    return(
      <div style={{ overflowX: 'hidden' }} ref={(el) => { this.el = el; }}>
        <Grid {...props} blocksPerRow={columns} blockSpacing={spacing} hideOuterSpacing={hideOuterSpacing}>
          {childrenWithProps}
        </Grid>
      </div>
    )
  }
};

ResponsiveGrid.defaultProps = {
  // Should always be same as default value within <Grid>
  // Column width logic needs to know what this will be
  hideOuterSpacing: true
}

ResponsiveGrid.propTypes = {
  spacing: React.PropTypes.number,
  columns: React.PropTypes.number,
  hideOuterSpacing: React.PropTypes.bool,
  passColumnWidth: React.PropTypes.bool,
  children: React.PropTypes.node,
  breakPoints: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      maxWidth: React.PropTypes.number,
      columns: React.PropTypes.number,
      spacing: React.PropTypes.number
    })
  )
};

export default ResponsiveGrid;