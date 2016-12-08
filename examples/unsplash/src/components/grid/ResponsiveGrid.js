import React from 'react';
import Grid from './Grid.js';
import { nextHighestNumber, elementWidth } from './util.js';

class ResponsiveGrid extends React.PureComponent {

  constructor(props){
    super(props);

    this.state = {
      columns: this.props.columns,
      spacing: this.props.spacing
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
    let { columns, spacing } = this.props;
    const { breakPoints } = this.props;
    const gridWidth = elementWidth(this.el);

    const breakPointOptions = nextHighestNumber(breakPoints, gridWidth, true, false, 'maxWidth');

    if (breakPointOptions){
      columns = breakPointOptions.columns || columns;
      spacing = breakPointOptions.spacing || spacing;
    }
     
    this.setState({
      'columns': columns,
      'spacing': spacing, 
    });
  }

  columnWidth(){
    const { hideOuterSpacing } = this.props;
    const { spacing, columns } = this.state;

    const gridWidth = elementWidth(this.el);

    const gutterCount = columns + (hideOuterSpacing ? -1 : 1);
    const totalSpacing = gutterCount * spacing;
    const columnWidth = (gridWidth - totalSpacing) / columns;

    console.log(`[GRID] Grid Width: ${gridWidth}`);
    console.log(`[GRID] Column Width: ${columnWidth}`);

    this.setState({ columnWidth: columnWidth });
  }

  render(){

    let childrenWithProps;

    const { children, hideOuterSpacing } = this.props;

    const { columns, spacing, columnWidth } = this.state;

    if (columnWidth){

      childrenWithProps = React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parentColumnWidth: columnWidth
        });
      });

    }else{
      childrenWithProps = children;
    }

    // Wrap with <div> so we can grab DOM node without needing to import findDOMNode from react-dom
    return(
      <div ref={(el) => { this.el = el; }}>
        <Grid columns={columns} spacing={spacing} hideOuterSpacing={hideOuterSpacing}>
          {childrenWithProps}
        </Grid>
      </div>
    )
  }
};

ResponsiveGrid.defaultProps = {
  columns: 3,
  spacing: 5,
  hideOuterSpacing: true
}

ResponsiveGrid.propTypes = {
  spacing: React.PropTypes.number,
  columns: React.PropTypes.number,
  hideOuterSpacing: React.PropTypes.bool,
  passColumnWidth: React.PropTypes.bool,
  children: React.PropTypes.node.isRequired,
  breakPoints: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      maxWidth: React.PropTypes.number,
      columns: React.PropTypes.number,
      spacing: React.PropTypes.number
    })
  )
};

export default ResponsiveGrid;
