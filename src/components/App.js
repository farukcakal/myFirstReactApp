import React from 'react';
import SearchInput from './SearchInput';
import ImageList from './ImageList';
import axios from 'axios';
class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {images: []};
    }
     onSearchSubmit = async (entry) => {
        const response = await axios.get(`https://pixabay.com/api/?key=22797543-9b6a22007c493cb3c93e021cc&q=${entry}&image_type=photo&pretty=true`);
        this.setState({images: response.data.hits});
    }

    render(){
        return(
            <div>
                <div className="ui container" style={{marginTop:'30px'}}>
                    <SearchInput 
                    onSearchSubmit={this.onSearchSubmit}
                    />
                    <ImageList 
                    images={this.state.images}
                    />
                </div>
            </div>
        )
    }
    }

export default App;