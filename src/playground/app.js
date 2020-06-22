class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.state = {
            options: []     //options: props.options 
        }
    }
    componentDidMount() {
        try{
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)
            if(options){
                this.setState(() => ({ options }) )
            }
        } catch(e) {

        }
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
    }
    componentWillUnmount() {
        console.log('Component will Unmount')
    }
    handleDeleteOptions() {
        // this.setState(() => {
        //     return {
        //         options: []
        //     }
        // })
        this.setState(() => ({ options: [] }) ) // ES6 Arrow function short hand syntax
    }
    handleDeleteOption(option) {
        this.setState((prevState) => ({ 
            options: prevState.options.filter((op) => op != option) 
        }) )
    }
    handlePick() {
        const randomIndex = Math.floor(Math.random() * this.state.options.length)
        const random = this.state.options[randomIndex]
        alert(random)
    }
    handleAddOption(option) {
        if(!option) {
            return 'Please Enter Valid Option!'
        } else if(this.state.options.indexOf(option) > -1) {
            return 'Entered option already exists!'
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option) }) ) // ES6 Short hand so I removed 'return' keyword
    }
    render() {
        //const title = 'Indecision';      <Header title={title} subtitle={subtitle}></Header> 
        const subtitle = 'Put your life in the hands of a computer.';
        return (
            <div>
                <Header subtitle={subtitle}></Header> 
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options} 
                    handleDeleteOptions = {this.handleDeleteOptions}
                    handleDeleteOption = {this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}
// IndecisionApp.defaultProps = {
//     options: []
// }

const Header = (props) => {                      // ---> Stateless functional components = we can use it instead of class based when we do not need to use 'state' (it is faster than class based components)
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}
Header.defaultProps = {
    title: 'Indecision'
}

// class Header extends React.Component {           ---> Class based component = We should only use it when we are taking advantage of 'state'
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }
// }

const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick} 
                disabled={!props.hasOptions}
            >
                What Should I DO?    
            </button>
        </div>
    );
}

const Options = (props) => {
    return (
        <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {props.options.length === 0 && <p>Please enter options to get started!</p>}
        {props.options.map((option) => 
            <Option 
                key={option} 
                optionText={option} 
                handleDeleteOption={props.handleDeleteOption}
            /> )}
        </div>
    );    
}

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button 
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText)
                }}
            >Remove
            </button>
        </div>
    );
}

class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault()
        const option = e.target.elements.option.value.trim()
        const error = this.props.handleAddOption(option)
            
        this.setState(() => ({ error }) )

        if(!error) {
            e.target.elements.option.value = ''
        }

    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input typr='text' placeholder='Enter option' name='option' />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))