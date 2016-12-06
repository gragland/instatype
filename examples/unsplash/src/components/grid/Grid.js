var React = require('react');
var Row = require('./GridRow.js');
var Block = require('./GridBlock.js');

var GridComponent = React.createClass({

  getDefaultProps: function() {
    return {
      blockSpacing: 10,
      blocksPerRow: 3,
      hideOuterSpacing: true
    }
  },

  render: function(){

    var blockNodes = [];
    var rowNodes = [];

    var styles = {
      container: {
        paddingTop: (this.props.blockSpacing) + 'px',
        paddingBottom: (this.props.blockSpacing) + 'px'
      },
      containerHideOuterSpacing: {
        paddingTop: 0,
        paddingBottom: 0,
        // Row width width will exceed grid with
        overflowX: 'hidden'
      }
    };

    // Put each child in a <BlockComponent/>
    // Put each <BlockComponent/> into "blockNodes" array (which we slice up into rows below)
    React.Children.forEach(this.props.children, function(child, i) {
        blockNodes.push(
          <Block
            spacing={this.props.blockSpacing} 
            width={(100 / this.props.blocksPerRow) + '%'} 
            handleClick={this.props.handleClick} 
            data={this.props.data}
            key={`block-${child.key || i}`}> 

            {child}
          
          </Block>
        );
    }, this);

    // Slice up blockNodes into rows ...
    // Put each row into "rowNodes" array
    for (var i=0; i<blockNodes.length; i+=this.props.blocksPerRow) {
      
      var rowEndIndex = i + this.props.blocksPerRow;

      rowNodes.push(
        <Row 
          spacing={this.props.blockSpacing} 
          isLastRow={rowEndIndex >= blockNodes.length}
          hideGutters={this.props.hideOuterSpacing}
          key={`row-${rowNodes.length}`}>

            { blockNodes.slice(i, rowEndIndex) }

        </Row>
      );
    }

    var style = styles.container;
    if (this.props.hideOuterSpacing){
      style = Object.assign(style, styles.containerHideOuterSpacing);
    }

  	return (
      <div style={style}>
        {rowNodes}
      </div>
  	);
	
  }
});


module.exports = GridComponent; 
