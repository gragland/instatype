import React from 'react';
import Grid from 'react-simple-grid';

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
    this.getGridWith = this.getGridWith.bind(this);
  }

  componentDidMount(){
    window.addEventListener('resize', this.setup);
    this.setup();
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
    const gridWidth = this.getGridWith();
    let spacing = 4;
    let columns = 4;
    
    if (gridWidth < 500){
      spacing = 2;
      columns = 1;
    }else if (gridWidth < 700){
      spacing = columns = 2;
    }else if (gridWidth < 900){
      spacing = columns = 3;
    }

    this.setState({ 
      spacing: spacing, 
      columns: columns
    });
  }

  columnWidth(){
    const { hideOuterSpacing } = this.props;
    const { spacing, columns } = this.state;

    const gridWidth = this.getGridWith();

    console.log(`Grid Width: ${gridWidth}`);

    const gutterCount = columns + (hideOuterSpacing ? -1 : 1);
    const totalSpacing = gutterCount * spacing;
    const columnWidth = (gridWidth - totalSpacing) / columns;

    console.log(`Column Width: ${columnWidth}`);

    this.setState({ 
      columnWidth: columnWidth
    });
  }

  getGridWith(){
    // TODO: cross browser test to ensure that clientWidth is correct for all browsers
    return this.el.clientWidth;
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

Image.propTypes = {
  spacing: React.PropTypes.number,
  columns: React.PropTypes.columns,
  breakPoints: React.PropTypes.object,
  hideOuterSpacing: React.PropTypes.bool,
  passColumnWidth: React.PropTypes.bool,
  children: React.PropTypes.node
};

export default ResponsiveGrid;