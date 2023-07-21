import React, {Component} from 'react';

export class NewsItem extends Component {
    render() {
        let {title, description, imageUrl, url} = this.props;
        return(
            <div className= "my-3">
                <div className="card" >
                 <img src={imageUrl? imageUrl: "https://img.freepik.com/free-photo/purple-osteospermum-daisy-flower_1373-16.jpg?size=626&ext=jpg"} alt="newsImg" />  {/*if the imageUrl value is null give a default image Url to it */}
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a rel="noreferrer" href={url} target= "_blank" className="btn btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
