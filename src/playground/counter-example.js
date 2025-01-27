class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.handlePlusOne = this.handlePlusOne.bind(this)
        this.handleMinusOne = this.handleMinusOne.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.state = {
            count: 0
        }
    }
    componentDidMount() {
        const strCount = localStorage.getItem('count')
        const count = parseInt(strCount)
        if(count && !isNaN(count)){
            this.setState(() => ({ count }) )
        }
    }
    componentDidUpdate(prevProps ,prevState) {
        if(prevState.count !== this.state.count){
            localStorage.setItem('count', this.state.count)
        }
    }
    handlePlusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }
    handleReset() {
        this.setState((prevState) => {
            return {
                count: 0
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handlePlusOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}
// Counter.defaultProps = {
//     count: 0
// }

ReactDOM.render(<Counter />, document.getElementById('app'))

// let count = 0
// const appRoot = document.getElementById('app')

// const addOne = () => {
//     count++;
//     renderCounter();
// }
// const minusOne = () => {
//     count --;
//     renderCounter();
// }
// const reset = () => {
//     count = 0;
//     renderCounter();   
// }

// const renderCounter = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count : {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo, appRoot)    
// }

// renderCounter()