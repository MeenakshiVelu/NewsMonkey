import React, { Component } from 'react'
// import data from "./data/data.json";

export class NewsItem extends Component {
    render() {
        // const articles1 = data.articles;//from json file       
        // const { articles } = this.props;

        let { title, description, url, urlToImage } = this.props;
        // console.log(title);

        return (
            <div className="my-3 text-center">

                <div class="card" style={{ width: "18rem" }}>
                    <img src={(urlToImage ? urlToImage : "https://www.reuters.com/resizer/FQp6aCEO8pemWsHYTb5B5WUYGPY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/SGV2N5MGRBP33CZ56U2JGAY3RE.jpg")} class="card-img-top" alt="..." style={{ height: "12rem" }} />
                    <div class="card-body" style={{ height: "16rem" }}>
                        <h5 class="card-title">{title.slice(0, 50)}</h5>
                        <p class="card-text">{(description ? description.slice(0, 50) : "")}...</p>
                        <a href={url} target="_blank" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
        // const item = articles1.map((elem, index) => {
        //     return (              
        //         <div key={index} className="card " style={{ width: "18rem"}}>
        //             <img src={elem.urlToImage} className="card-img-top" alt="..." />
        //             <div className="card-body">
        //                 <h5 className="card-title">{elem.title}</h5>
        //                 <p className="card-text">{elem.description}</p>
        //                 <a href={elem.url} target="_blank" className="btn btn-primary">Read More</a>
        //             </div>
        //         </div>   
        //     )
        // })

        // return (
        //     // <div className='container text-center row gx-5 gy-5 '>
        //     <div className='container text-center'>
        //         {item}
        //     </div>
        // )


    }
}

export default NewsItem
