import React from 'react';
import Result from './result.js';

class Results extends React.PureComponent {

  constructor(props) {
    super(props);
  }

  render(){

    const { data, handleSelect, thumbStyle } = this.props;

    return (
      <div className="resultsContainer">

        { data && data.length > 0 &&
          <ul className={'results thumb-' + thumbStyle}>
            
            {data.map((result, i) => (
              <Result image={result.image} handleSelect={handleSelect} data={result} key={`result-${result.id || i}`}>
                {result.name}
              </Result>
            ))}

          </ul>
        }

      </div>
    );
  }
};

Results.propTypes = {
  data: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      image: React.PropTypes.string,
      name: React.PropTypes.string.isRequired
    })
  ),
  handleSelect: React.PropTypes.func.isRequired,
  thumbStyle: React.PropTypes.string.isRequired
};

export default Results;