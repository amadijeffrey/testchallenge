import React, { Component } from 'react'
import './searchbar.css'

 class Searchbar extends Component {
    constructor(props) {
        super(props)

        this.state = { term: '' }

        this.onInputChange = this.onInputChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onInputChange(e) {
        this.setState({ term: e.target.value })

    }

    onSubmit(e) {
        e.preventDefault()
        document.querySelector('input').value = ''
    }

    render() {
        return (
           <div className='container'>
            <form onSubmit={this.onSubmit}>
                <input onChange={this.onInputChange} placeholder="search " className="search-bar" value={this.state.term} type="text" id="input" />
                <input  className='submit' type='submit' value='Search' />
            </form>
            </div>
        )
    }
}




export default Searchbar