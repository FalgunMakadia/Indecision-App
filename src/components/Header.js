import React from 'react'

const Header = (props) => {                      // ---> Stateless functional components = we can use it instead of class based when we do not need to use 'state' (it is faster than class based components)
    return (
        <div className='header'>
            <div className='container'>
                <h1 className='header__title'>{props.title}</h1>
                {props.subtitle && <h2 className='header__subtitle'>{props.subtitle}</h2>}
            </div>
        </div>
    );
}
Header.defaultProps = {
    title: 'Indecision'
}

export default Header