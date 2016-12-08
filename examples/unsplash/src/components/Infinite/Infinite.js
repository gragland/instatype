import React from 'react';
import throttle from 'lodash/throttle';
import loadingIcon from './loading.svg';

class Infinite extends React.PureComponent {

   constructor(props){
    super(props);

    this.addScrollListener = this.addScrollListener.bind(this);
    this.checkScroll = this.checkScroll.bind(this);
    this.scrollListenerThrottled = throttle(this.checkScroll.bind(this), 500);
  }

  componentDidMount(){
    this.addScrollListener();
    // Delay the initial check so that child elements are rendered first
    setTimeout(() => this.checkScroll(), 50);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.scrollListenerThrottled);
  }

  addScrollListener(){
    window.addEventListener('scroll', this.scrollListenerThrottled);
  }

  checkScroll(trailing){

    const { loading, atEnd, requestHandler } = this.props;

    const minDistanceFromBotton = 50;

    const body = document.body;
    const html = document.documentElement;

    const totalHeight = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
    const clientHeight = (window.innerHeight || document.documentElement.clientHeight);
    const scrollTop = (document.body.scrollTop || document.documentElement.scrollTop);
    const scrollDistance = scrollTop + clientHeight;
    const distanceFromBottom = totalHeight - scrollDistance;

    //console.log(`[INFINITE] Total height: ${totalHeight}`);
    //console.log(`[INFINITE] Client height: ${clientHeight}`);
    //console.log(`[INFINITE] Scroll top: ${scrollTop}`);
    console.log(`[INFINITE] Distance from bottom: ${distanceFromBottom}`);

    const reachedBottom = (distanceFromBottom < minDistanceFromBotton);

    if (atEnd){
      console.log('[INFINITE] No more pages');
    }else
    if (reachedBottom && !loading) {
      console.log('[INFINITE] Requesting next page');
      requestHandler();
    }
  }

  render(){

    const { atEnd, children } = this.props;

    var loadingsStyle = {
      display: 'block',
      width: '3em',
      margin: '2em auto 2em auto'
    };

    return (
      <div>
        {children}
        {!atEnd &&
          <img src={loadingIcon} style={loadingsStyle} />
        }
      </div>
    );
  }
  
};

Infinite.defaultProps = {
  atEnd: false,
  loading: false
}

Infinite.propTypes = {
  requestHandler: React.PropTypes.func,
  loading: React.PropTypes.bool,
  atEnd: React.PropTypes.bool,
  children: React.PropTypes.node
};

export default Infinite;
