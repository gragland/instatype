import React from 'react';
import Row from './GridRow.js';
import Block from './GridBlock.js';
import { merge } from './util.js';

class Grid extends React.PureComponent {

  constructor(props){
    super(props);
    this.computeBlockWidthPx = this.computeBlockWidthPx.bind(this);
  }

  // Compute the pixel width of a <Block>
  computeBlockWidthPx(block, numBlocksInRow){

    const { spacing, hideOuterSpacing, gridWidthPx } = this.props;

    // If we don't have a width for the grid then return null width
    if (!gridWidthPx) return null;

    const gutterCount = numBlocksInRow + (hideOuterSpacing ? -1 : 1);
    const totalSpacing = gutterCount * spacing;
    const totalBlockSpace = gridWidthPx - totalSpacing;
    const blockWidthPx = totalBlockSpace * (block.width/100);
    return blockWidthPx;
  }

  render(){

    const { blocksPerRow, blockWidth, spacing, hideOuterSpacing, children } = this.props;

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

    // Get desired blockWidth from <Grid blockWidth> or based on <Grid blocksPerRow> (alternate)
    // blockWidth can be a number or an array of numbers
    // This will be overridden by an individual <Block width> if specified
    let blockWidthFromProps = blockWidth || 1/blocksPerRow;

    // Normally into an array of widths ([1/4] or [1/4,1/2,1/4])
    const blockWidthArray = setupBlockWidthArray(blockWidthFromProps);

    /**** BUILD OUR <ROWS> OF <BLOCKS> ****/

    let rowNodes = [];
    let rowInProgress = [];
    let rowInProgressWidth = 0;
    let bwaIndex = 0;

    // Filter out null children such as {/*...*/}
    const validChildren = children.filter(child => child);

    // Iterate through all children
    // Fetch props from children that are already <Blocks>
    React.Children.forEach(validChildren, (child, i) => {

      // Begin setting up our block object
      let block = {
        spacing: spacing,
        key: `block-${child.key || i}`
      };

      // Get the next blockWidth from our array of widths
      let blockWidth = blockWidthArray[ bwaIndex ];
      // Once we get to the end of blockWidthArray then start back at 0
      bwaIndex = (blockWidthArray[bwaIndex+1] ? bwaIndex+1 : 0);

      // If child is a <Block> then we use its width and children props
      if (child.type === Block){
        block.width = (child.props.width ? child.props.width*100 : blockWidth);
        block.children = child.props.children;
      }else{
        block.width = blockWidth;
        block.children = child;
      }

      // If we've gone over 100% width for our rowInProgress ...
      // Make the current <Block> width smaller so that we're at 100% exactly
      let amountOver = rowInProgressWidth - 100;
      if (amountOver > 0){
        block.width = block.width - amountOver;
      }

      // Add to our row array
      rowInProgress.push(block);

      // Total width of current row
      rowInProgressWidth += block.width;

      // See if it's the last block so we can push a final row
      let isLastBlock = (i === validChildren.length-1);

      // If the <Row> we are preparing is full then push it!
      // Or if we're on the last <Block> push an unfinished row
      // Round up since row might be 99.9999...
      if (rowInProgressWidth.toFixed(2) >= 100 || isLastBlock){
        rowNodes.push(
          <Row 
            spacing={spacing} 
            isLastRow={(i === validChildren.length-1)}
            hideGutters={hideOuterSpacing}
            key={`row-${rowNodes.length}`}>

              {rowInProgress.map((block) => (
                <Block
                  spacing={block.spacing} 
                  width={block.width}
                  widthPx={this.computeBlockWidthPx(block, rowInProgress.length)}
                  key={block.key}> 
                    {block.children}
                </Block>
              ))}

          </Row>
        );

        // Reset to prepare a new <Row>
        rowInProgress = [];
        rowInProgressWidth = 0;
      }

    });

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

  }
};

// Setup an array of block widths to iterate through
function setupBlockWidthArray(blockWidth){
  // Normalize value into an array of numbers 
  let pattern = (isArray(blockWidth) ? blockWidth : [blockWidth]);
  // Turn width values from fraction (1/4) to percent (25)
  return pattern.map(w => w*100 );
}

// From http://perfectionkills.com/instanceof-considered-harmful-or-how-to-write-a-robust-isarray/
function isArray(o) {
  return Object.prototype.toString.call(o) === '[object Array]';
}

Grid.propTypes = {
  blocksPerRow: React.PropTypes.number,
  spacing: React.PropTypes.number,
  hideOuterSpacing: React.PropTypes.bool,
  children: (props) => {
    const { children } = props;

    // Get all children that are <Block> components
    const blocks = children.filter(child => (child && child.type === Block));

    // Throw error if some children are <Blocks> but not all
    if (blocks.length && blocks.length !== children.length){
      throw new Error("<Grid> children must all be <Blocks> (or none should and we'll wrap them in <Blocks> for you). It's all or nothing!");
    }

    // Get all <Blocks> that have a width specified
    // Also add up total width of all <Blocks>
    let totalWidth = 0;
    const blocksWithWidth = blocks.filter((child) => {
      totalWidth += child.props.width;
      return (child.props.width > 0);
    });

    // All <Blocks> should have a width specified or none of them should
    if (blocksWithWidth.length && blocksWithWidth.length !== blocks.length){
      throw new Error("You must specify a width for all <Block> components (or for none of them and it will be divided evenly)");
    }

    // Make sure total width of <Blocks> add up to 100 or is 0 (none specified)
    /*
    if (totalWidth !== 100 && totalWidth !== 0){
      throw new Error("Total width of all <Block> components must equal 100 (or 0 and it will be divided evenly)");
    }*/

    return null;
  }
};

export default Grid;
