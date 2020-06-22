import React from 'react'
import AddOption from './AddOption'
import Options from './Options'
import Header from './Header'
import Action from './Action'
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }
    
    handleDeleteOptions = () => {
        // this.setState(() => {
        //     return {
        //         options: []
        //     }
        // })
        this.setState(() => ({ options: [] }) ) // ES6 Arrow function short hand syntax
    }
    handleDeleteOption = (option) => {
        this.setState((prevState) => ({ 
            options: prevState.options.filter((op) => op != option) 
        }) )
    }
    handlePick = () => {
        const randomIndex = Math.floor(Math.random() * this.state.options.length)
        const random = this.state.options[randomIndex]
        this.setState(() => ({ selectedOption: random }) )
    }
    handleAddOption = (option) => {
        if(!option) {
            return 'Input can not be empty!'
        } else if(this.state.options.indexOf(option) > -1) {
            return 'Entered option already exists!'
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option) }) ) // ES6 Short hand so I removed 'return' keyword
    }
    handleCloseModal = () => {
        this.setState(() => ({ selectedOption: undefined }) )
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

    render() {
        //const title = 'Indecision';      <Header title={title} subtitle={subtitle}></Header> 
        const subtitle = 'Let the Máquina decide it for you!';
        return (
            <div>
                <Header subtitle={subtitle}></Header> 
                <div className='container'>
                    <Action 
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options 
                            options={this.state.options} 
                            handleDeleteOptions = {this.handleDeleteOptions}
                            handleDeleteOption = {this.handleDeleteOption}
                        />
                        <AddOption 
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                </div>
                
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleCloseModal={this.handleCloseModal}
                />
            </div>
        );
    }
}