import React from 'react';
import ReactDOM from 'react-dom';

class HelloReact extends React.Component {

    constructor (props) {
        super(props);

        this.state =  {
            anzahl: 1
        };
    }
    static defaultProps = {name: "Christian"}

    componentDidMount (){
        this.setState({anzahl: this.state.anzahl +5});
    };

  onButtonClick(){
    this.setState({anzahl: this.state.anzahl +1});  }

    render() {
        return (
            <div>
        <h1>
            <Greeting welcome={this.props.welcome} /> {this.props.name}
            </h1>
            <p>{this.state.anzahl}</p>
            <button onClick={this.onButtonClick.bind(this)}>Klick mich!</button>
            </div>
        );
    }
}

class Greeting extends React.Component {
    render (){
        if(this.props.welcome === true)
        return <span>Willkommen</span>;
        else
         return <span>Tschüüüüüs</span>;
    }
}

ReactDOM.render(<HelloReact welcome={true}/>, document.getElementById('root'));

