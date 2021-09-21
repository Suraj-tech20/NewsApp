import React, { Component } from 'react'
import NewsItems from './NewsItems';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export default class Query extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

    capitalizeFirstletter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0,
        };
        document.title = `${this.capitalizeFirstletter(this.props.category)} - Daily Dose`
    }
    // https://newsapi.org/v2/everything?q=tesla&from=2021-08-21&sortBy=publishedAt&apiKey=d8475f4b0d454dcdaf28ed200415e1d3
    async componentBuild() {
        this.props.setProgress(0);
        let url = `https://newsapi.org/v2/everything?q=${this.props.query}&sortBy=publishedAt&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.props.setProgress(10);
        this.setState({ loading: true });
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json();
        this.props.setProgress(70);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false,
        });
        this.props.setProgress(100);
    }

    async componentDidMount() {
        this.componentBuild();
    }

    fetchMoreData = async () => {
        this.setState({
            page: this.state.page + 1
        });
        let url = `https://newsapi.org/v2/everything?q=${this.props.query}&sortBy=publishedAt&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
        });
    };

    render() {
        try {
            return (
                <>
                    <h1 className="text-center mt-5">Daily Dose - Top headlines</h1>
                    {this.state.loading && <Spinner />}
                    <div className="container my-5">
                        <InfiniteScroll
                            dataLength={this.state.articles.length}
                            next={this.fetchMoreData}
                            hasMore={this.state.articles.length !== this.state.totalResults}
                            loader={<Spinner />}
                        >
                            <div className="d-flex justify-content-around mx-3" style={{ flexWrap: 'wrap' }}>
                                {this.state.totalResults && this.state.articles.map((element) => {
                                    return (<div key={element.url} className="">
                                        <NewsItems title={element.title} description={element.description} imageUrl={!(element.urlToImage) ? '../download.png' : element.urlToImage}
                                            newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                    </div>)
                                })}
                            </div>
                        </InfiniteScroll>
                    </div>
                </ >

            )
        } catch (error) {
            return (
                <>
                    <h1 className='mt-5'>An Unexpected error occured</h1>
                    <p>Please go to home page. An try again...</p>
                </>
            )
        }
    }
}