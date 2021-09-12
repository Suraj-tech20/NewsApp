import React, { Component } from 'react'

export class News extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div>
                <div className="card m-3" style={{ width: '20rem' }}>
                    <span className="position-absolute bg-danger badge text-white">
                        {source}
                    </span>
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {author ? author : 'unknown'} at {new Date(date).toDateString()}  {
                            new Date(date).toLocaleTimeString()}</small></p>
                        <a rel="noreferrer" target='_blank' href={newsUrl} className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default News
