import React from 'react';
import Grid from './Grid.js';
import PassBlockWidth from './PassBlockWidth.js';
import Block from './GridBlock.js';
import { nextHighestNumber, elementWidth } from './util.js';

//import visualizeRender from 'react-render-visualizer-decorator';
//@visualizeRender
class GridResponsive extends React.PureComponent {

  constructor(props){
    super(props);

    this.state = {
      blocksPerRow: this.props.blocksPerRow,
      spacing: this.props.spacing,
      blockWidth: this.props.blockWidth
    };

    this.setup = this.setup.bind(this);
    this.breakPoints = this.breakPoints.bind(this);
    this.gridWidth = this.gridWidth.bind(this);
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

    // ADD TO DOCS: (small link pointing to wiki page):
    //  - "If you need the width to always be accurate down to the px please read this"
    //  - Your children will render without a width initially
    //  - You can have the children not render themself if no width
    //  - But the actual width may change by ~17px if children then result in scrollbar appearing
    //  - In most cases this is fine, you don't need an exact width of the grid
    //  - But if you do (such as if you want to render an image that's the exact px width of its container) ...
    //  - ... and not have it render and then the actual grid width shrink by 17px when the scrollbar appears ...
    //  - Then make sure your child has a wrapper component that maintains the aspect ratio of the child
    //  - Link to example of my <Image> component

    if (this.props.passBlockWidth){
      setTimeout(() => this.gridWidth(), 0);
    }
  }

  breakPoints(){
    const { blocksPerRow, spacing, blockWidth, breakPoints } = this.props;
    const gridWidth = elementWidth(this.el);

    const breakPointOptions = nextHighestNumber(breakPoints, gridWidth, true, false, 'maxWidth');

    if (breakPoints){
      this.setState({
        blocksPerRow: breakPointOptions.blocksPerRow || blocksPerRow,
        spacing: breakPointOptions.spacing || spacing, 
        blockWidth: breakPointOptions.blockWidth || blockWidth
      });
    }
  }

  gridWidth(){
    const gridWidthPx = elementWidth(this.el);
    console.log(`[GRID] Grid Width: ${gridWidthPx}`);

    this.setState({ gridWidthPx: gridWidthPx });
  }

  render(){

    const { children, hideOuterSpacing } = this.props;

    // This state is set from props in constructor
    const { blocksPerRow, spacing, blockWidth, gridWidthPx } = this.state;

    // Wrap with <div> so we can grab DOM node without needing to import findDOMNode from react-dom
    return(
      <div ref={(el) => { this.el = el; }}>
        <Grid blocksPerRow={blocksPerRow} gridWidthPx={gridWidthPx} blockWidth={blockWidth} spacing={spacing} hideOuterSpacing={hideOuterSpacing}>
          {children}
        </Grid>
      </div>
    )
  }
};

GridResponsive.defaultProps = {
  blocksPerRow: 3,
  spacing: 5,
  hideOuterSpacing: true,
  passBlockWidth: true
};

GridResponsive.propTypes = {
  spacing: React.PropTypes.number,
  blocksPerRow: React.PropTypes.number,
  hideOuterSpacing: React.PropTypes.bool,
  passBlockWidth: React.PropTypes.bool,
  blockWidth: React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.arrayOf(React.PropTypes.number)
  ]),
  children: React.PropTypes.node.isRequired,
  breakPoints: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      maxWidth: React.PropTypes.number,
      blocksPerRow: React.PropTypes.number,
      spacing: React.PropTypes.number
    })
  )
};

export default GridResponsive;
export { Block, PassBlockWidth };
