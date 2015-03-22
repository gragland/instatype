var AppComponent = React.createClass({
    getInitialState: function(){
        return {
            inFocus: false,
            endpoint: 'https://api.instagram.com/v1/users/search?access_token=291933.1fb234f.49bb69d84df4458dafeb45262b722d2a&q=gabe',
            results: [
                {
                    image : 'http://imgfave-herokuapp-com.global.ssl.fastly.net/image_cache/142642156144625.jpg',
                    username : 'Gabe'
                },
                {
                    image : 'http://40.media.tumblr.com/37a9787b9352ba10c2dfc8916813a71f/tumblr_nkth875MO41qjqyo8o1_500.jpg',
                    username : 'Irvin'
                }
            ],
        }
    },
    render: function(){

        return (
            <div>
                <InputComponent handleChange={this.handleChange} handleFocus={this.handleFocus} handleBlur={this.handleBlur}/>
                <ResultsComponent data={this.state.results} visible={this.state.inFocus} />
            </div>
        );
    },
    componentDidMount: function(){
        console.log('MOUNT');
    },
    handleChange: function(data) {
        this.setState( { results : data } );
    },
    handleFocus: function() {
        this.setState( { inFocus : true } );
    },
    handleBlur: function() {
        this.setState( { inFocus : false } );
    }
});


var ResultsComponent = React.createClass({

    render: function(){

        var resultNodes = this.props.data.map(function(result){
            //console.log(result);
            return (
                <Result image={result.image}>
                    {result.username}
                </Result>
            );
        });

        // Best way to hide/show results?
        var resultsClass = (this.props.visible === true ? 'results show' : 'results hide');

        console.log(resultsClass);

        return (
            <ul className={resultsClass}>
                {resultNodes}
            </ul>
        );
    }
});


var Result = React.createClass({
    
    render: function(){

        return (
            <li>
                <img width="30" src={this.props.image}/>
                {this.props.children}
            </li>
        );
    }
});


var InputComponent = React.createClass({
    handleChange: function(event){
        this.props.handleChange(event.target.value);
    },
    handleFocus: function(event){
        this.props.handleFocus();
    },
    handleBlur: function(event){
        this.props.handleBlur();
    },
    render: function(){
        return (
            <input type="text" className="input-typeahead" value={this.props.name} onChange={this.handleChange} onFocus={this.handleFocus} onBlur={this.handleBlur}/>
        );
    }
});

React.render(
   <AppComponent/>,
  document.getElementById('mount-point')
);
