const Field = ({name, children, onChange, value}) => <div className="form-group">
        <fieldset><legend>{children}</legend>
        <input type="number" name={name} id={name} onChange={onChange} value={value} /></fieldset>
    </div>;

class Converter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            celsius: '',
            fahrenheit: ''
        };
    }

    toCelsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9;

    toFahrenheit = (celsius) => celsius * 9 / 5 + 32;

    changeValue = (convertedValue, e) => {
        if(e.target.value === '') {
            this.changeState('', '');
        } else if(convertedValue === 'celsius') {
            this.changeState(e.target.value, this.toFahrenheit(e.target.value));
        } else if(convertedValue === 'fahrenheit') {
            this.changeState(this.toCelsius(e.target.value), e.target.value);
        }
    }

    changeState = (celsius, fahrenheit) => this.setState({
        celsius: celsius,
        fahrenheit: fahrenheit
    });

    handleChange = (e) => this.changeValue(e.target.name, e);

    render = () => <form className="container">
            <Field name="celsius" value={this.state.celsius} onChange={this.handleChange}>Enter temperature in Celsius:</Field>
            <Field name="fahrenheit" value={this.state.fahrenheit} onChange={this.handleChange}>Enter temperature in Fahrenheit:</Field>
            <p>{this.state.celsius >= 100 ? 'The water would boil' : 'The water would not boil'}</p>
        </form>;
}

ReactDOM.render(<Converter />, document.querySelector('#app'));