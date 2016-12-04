import React from 'react';

class Result extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isHovered: false };
    this.handleSelect = this.handleSelect.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  handleSelect(event) {
    this.props.handleSelect(this.props.data);
    event.preventDefault();
    event.stopPropagation();
  }

  shouldComponentUpdate(nextProps, nextState){
    return (!this.props.data.id || // If we have no data.id to identify whether result changed
              (this.props.data.id !== nextProps.data.id) || // If data.id did change
                this.state.isHovered !== nextState.isHovered); // If hover state changed
  }

  onMouseOver(){
    this.setState({ isHovered: true })
  }

  onMouseLeave(){
    this.setState({ isHovered: false })
  }

  render(){

    const { image, children } = this.props;

    let className = 'clearfix';
    if (this.state.isHovered)
      className += ' hovered';

    return (
      <li className={className} onClick={this.handleSelect} onMouseOver={this.onMouseOver} onMouseLeave={this.onMouseLeave}>
          {image && 
            <img src={image}/>
          }
          <div>{children}</div>
      </li>
    );
  }
};

Result.propTypes = {
  data: React.PropTypes.object.isRequired,
  image: React.PropTypes.string,
  children: React.PropTypes.node
};



export default Result;