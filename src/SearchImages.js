import React from 'react' ;

import './css/SearchImage.css'
class SearchImages extends React.Component {
    
    State = {term: ''}

    onSubmitForm = (event) => {
        


        event.preventDefault()

        this.props.onSubmit(this.state.term)
        
    }

    

// wajib ada class render, function yg akan di jalankan untuk rendering jsx
    render(){
        return (
            <div align="center">
                <form onSubmit={this.onSubmitForm} className="form-group">
                    <input onChange={(e) => {this.setState({term: e.target.value})}}type="text" className="form-control" placeholder="Search image here.."/>
                </form>
            </div>
        )
    }

    
}


export default SearchImages;