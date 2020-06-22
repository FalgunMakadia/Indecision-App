console.log('App.js is running')

const appRoot = document.getElementById('app')

const app = {
    title: 'Indecision App',
    subtitle: 'An app that helps you make decisions!',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault()
    const option = e.target.elements.option.value // option is name of input field in the form
    if(option) {
        app.options.push(option)
        e.target.elements.option.value = ''
        renderIndecision()
    }
}

const onRemoveAll = () => {
    app.options = []
    renderIndecision()
}

const onMakeDecision = () => {
    const randIndex = Math.floor(Math.random() * app.options.length)
    const option = app.options[randIndex]
    alert(option)
}

const renderIndecision = () => {
    const template = (
        <div>
            <h1>{app.title}</h1> 
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length>0 ? 'Here are your options:' : 'No options'}</p> 
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
            {
                app.options.map((option) => <li key={option}>{option}</li>)
            }
            </ol>
            
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot)    
}

renderIndecision()