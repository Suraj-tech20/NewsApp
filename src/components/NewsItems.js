import React, { Component } from 'react'

export class News extends Component {
    render() {
        let { title, description, imageUrl } = this.props;
        return (
            <div>
                <div className="card m-3" style={{ width: '18rem' }}>
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        {/* <h5 className="card-title">{this.props.title}</h5> */}
                        <p className="card-text">{description}</p>
                        <a href="/newsdetail" className="btn btn-sm btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default News
