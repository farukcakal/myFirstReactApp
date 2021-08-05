import React from 'react';

const ImageList = (props) => {
    const images = props.images.map(image => {
        return(
            <img key={image.id} src={image.webformatURL} />
        )
    });
    return(
        <div className="ui segment">
            <div className="image">
                { images }
            </div>
        </div>
    )
}
export default ImageList;