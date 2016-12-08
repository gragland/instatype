import React from 'react';
import Grid from './Grid.js';
import passGridColumnWidth from './passGridColumnWidth.js';
import Block from './GridBlock.js';
import { nextHighestNumber, elementWidth } from './util.js';

class ResponsiveGrid extends React.PureComponent {

  constructor(props){
    super(props);

    this.state = {
      columns: this.props.columns,
      spacing: this.props.spacing,
      blockWidth: this.props.blockWidth
    };

    this.setup = this.setup.bind(this);
    this.breakPoints = this.breakPoints.bind(this);
    this.columnWidth = this.columnWidth.bind(this);
  }

  /*
  getChildContext() {

    console.log('[RESPONSIVE GRID - CONTEXT] ' + this.state.columnWidth);

    return { 
      parentColumnWidth: this.state.columnWidth
    }
  }*/

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
    let { columns, spacing, blockWidth } = this.props;
    const { breakPoints } = this.props;
    const gridWidth = elementWidth(this.el);

    const breakPointOptions = nextHighestNumber(breakPoints, gridWidth, true, false, 'maxWidth');

    if (breakPointOptions){
      columns = breakPointOptions.columns || columns;
      spacing = breakPointOptions.spacing || spacing;
      blockWidth = breakPointOptions.blockWidth || blockWidth;
    }
     
    this.setState({
      columns: columns,
      spacing: spacing, 
      blockWidth: blockWidth
    });
  }

  columnWidth(){
    //const { hideOuterSpacing } = this.props;
    //const { spacing, columns } = this.state;

    const gridWidthPx = elementWidth(this.el);

    //const gutterCount = columns + (hideOuterSpacing ? -1 : 1);
    //const totalSpacing = gutterCount * spacing;
    //const columnWidth = (gridWidthPx - totalSpacing) / columns;

    console.log(`[GRID] Grid Width: ${gridWidthPx}`);
    
    //console.log(`[GRID] Column Width: ${columnWidth}`);

    this.setState({ 
      gridWidthPx: gridWidthPx,
      //columnWidth: columnWidth 
    });
  }

  render(){

    let childrenWithProps;

    const { children, hideOuterSpacing, passColumnWidth } = this.props;

    // This state is set from props in constructor
    const { columns, spacing, blockWidth, gridWidthPx } = this.state;

    //const showGrid = ((passColumnWidth && !gridWidthPx) ? false : true);

    // Wrap with <div> so we can grab DOM node without needing to import findDOMNode from react-dom
    return(
      <div ref={(el) => { this.el = el; }}>
        <Grid columns={columns} gridWidthPx={gridWidthPx} blockWidth={blockWidth} spacing={spacing} hideOuterSpacing={hideOuterSpacing}>
          {children}
        </Grid>
      </div>
    )
  }
};

ResponsiveGrid.defaultProps = {
  columns: 3,
  spacing: 5,
  hideOuterSpacing: true,
  passColumnWidth: true
};

/*
ResponsiveGrid.childContextTypes = {
  parentColumnWidth: React.PropTypes.number
};
*/

ResponsiveGrid.propTypes = {
  spacing: React.PropTypes.number,
  columns: React.PropTypes.number,
  hideOuterSpacing: React.PropTypes.bool,
  passColumnWidth: React.PropTypes.bool,
  blockWidth: React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.arrayOf(React.PropTypes.number)
  ]),
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
export { Block, passGridColumnWidth };
