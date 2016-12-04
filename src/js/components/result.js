import React from 'react';

class Result extends React.PureComponent {

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

  onMouseOver(){
    this.setState({ isHovered: true });
  }

  onMouseLeave(){
    this.setState({ isHovered: false });
  }

  render(){

    const { image, children } = this.props;
    const { isHovered } = this.state;

    return (
      <li className={`${isHovered ? 'hovered' : ''} clearfix`} onClick={this.handleSelect} onMouseOver={this.onMouseOver} onMouseLeave={this.onMouseLeave}>
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