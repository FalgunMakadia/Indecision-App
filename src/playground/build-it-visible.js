class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props)
        this.handleRoggleVisibility = this.handleRoggleVisibility.bind(this)
        this.state = {
            count: false
        }
    }
    handleRoggleVisibility() {
        this.setState((prevState) => {
            return{
                count: !prevState.count
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle 3</h1>
                <button onClick={this.handleRoggleVisibility}>{this.state.count == false ? 'Show Details' : 'Hide details'}</button>
                <p>{this.state.count == true && 'Some Hidden data'}</p>
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))

// class VisibilityToggle extends React.Component {
//     constructor(props) {
//         super(props)
//         this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
//         this.state = {
//             count: 1
//         }
//     }
//     handleToggleVisibility() {
//         if(this.state.count == true) {
//             this.setState((prevState) => {
//                 return {
//                     count: 0
//                 }
//             })
//         }
//         else {
//             this.setState((prevState) => {
//                 return {
//                     count: 1
//                }
//             })
//         }
//     }
//     render() {
//         return(
//             <div>
//                 <h1>Visibility Toggle 2</h1>
//                 <button onClick={this.handleToggleVisibility}>{this.state.count == 1 ? 'Show details' : 'Hide details'}</button>
//                 <p>{this.state.count == 0 && 'Some hidden data'}</p>
//             </div>
//         );
//     }
// }

// ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))





// const appRoot = document.getElementById('app')

// let count = 0 // we can also user true false and simply flip it's value in buttonclick function
// const buttonclick = () => {
//     if(count == 0) {
//         count++
//         render()
//     } else {
//         count--
//         render()
//     }
// }

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={buttonclick}>{count==0 ? 'Show Details' : 'Hide Details'}</button>
//             <p>{count!=0 && 'This is some hidden data'}</p>
//         </div>
//     );
//     ReactDOM.render(template, appRoot)
// }

// render()