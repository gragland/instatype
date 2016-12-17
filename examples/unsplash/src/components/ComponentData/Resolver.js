import React from 'react';

// JOB: give the component data, whether by getting it via context or by fetching it itself

class Resolver extends React.PureComponent {

  constructor(props, context){
    super(props);
    this.state = {};
    this.clientResolve = this.clientResolve.bind(this);
    this.clientResolveFromComponent = this.clientResolveFromComponent.bind(this);
  }

  static contextTypes = {
    data: React.PropTypes.object
  }

  componentWillMount(){

    console.log('[HOC] Mounted');

    const { data } = this.context;

    if (data){

      console.log('[HOC] Have props from context');

      this.setState({ data: data });

      console.log('[HOC] Have props from context (after setstate)');

    }else if (isClient()){

      console.log('[HOC] No props');

      this.clientResolve()
    }

  }

  async clientResolve(){

    console.log('[HOC] Resolving props client-side');

    const data = this.clientResolveFromDOM() || await this.clientResolveFromComponent();

    if (data){
      this.setState({ data: data });
    }
  }

  clientResolveFromDOM(){
    const element = document.getElementById('REACT_COMPONENT_DATA_PAYLOAD');
    const data = (element ? JSON.parse(element.innerHTML) : null);

    if (data){
      console.log('[HOC] Re-hydration was successful', data);

      // Always remove element so that data isn't cached when navigating client-side
      element.remove();

    }else{
      console.log('[HOC] Re-hydration failed. No data.');
    }

    return data;
  }

  // Call component getInitialProps(), save data to HOC state, pass down to child component
  async clientResolveFromComponent(){
    const Component = React.Children.only(this.props.children);
    const data = (Component.type.getInitialProps ? await Component.type.getInitialProps() : null);

    if (data){
      this.setState({ data: data });

      console.log('[HOC] Resolved component getInitialProps()', data);
    }else{

    }
  }

  render(){

    const Component = React.Children.only(this.props.children);

    if (this.state.data){
      const ComponentWithProps = React.cloneElement(Component, this.state.data);
      // Adding a key when props are added forces component to remount
      // Makes it easier since component doesn't need to implement componentWillReceiveProps to update
      const ComponentWithKey = React.cloneElement(ComponentWithProps, { key: 'hasInitialProps' });
      return ComponentWithKey;
    }else{
      return Component;
    }

  }
}

function isClient(){
  return typeof window !== 'undefined';
}

export default Resolver;
