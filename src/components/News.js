import React, {Component} from 'react';
import NewsItem from './NewsItem';

export class News extends Component {

    articles=[]
    //     {
    //         "source": {
    //         "id": null,
    //         "name": "The Guardian"
    //         },
    //         "author": "Jamie Driscoll",
    //         "title": "Labour voters are disillusioned with the party. Their support since my resignation proves it | Jamie Driscoll",
    //         "description": "After the party blocked me, I left it to run for North East mayor as an independent. It’s a campaign people believe in“Why have you resigned from Labour to run as an independent?” I’ve been asked by a dozen different journalists in the past 24 hours. Truth is…",
    //         "url": "https://www.theguardian.com/commentisfree/2023/jul/18/labour-voters-party-support-resignation-mayor-jamie-driscoll",
    //         "urlToImage": "https://i.guim.co.uk/img/media/676b95e9de6427692cd49a5b8baecf0f1ea60f09/0_29_5808_3485/master/5808.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=e29bd217b43596dfb79d7ace7d6787c0",
    //         "publishedAt": "2023-07-18T10:34:21Z",
    //         "content": "Why have you resigned from Labour to run as an independent? Ive been asked by a dozen different journalists in the past 24 hours. Truth is, theres probably a dozen different reasons.\r\nThe overwhelmin… [+4636 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "MacRumors"
    //         },
    //         "author": "Tim Hardwick",
    //         "title": "TikTok Announces Passkey Login Support for iOS Devices",
    //         "description": "TikTok has announced it is introducing support for passkeys, providing an easier and more secure login method for users of the popular short-form video platform. Apple integrated passkeys into iOS with the launch of iOS 16, and they are also available in iPad…",
    //         "url": "https://www.macrumors.com/2023/07/18/tiktok-announces-passkey-support-ios/",
    //         "urlToImage": "https://images.macrumors.com/t/RKe-ihkRY_z5uXNYZSPfUNnvjbc=/1600x/article-new/2020/08/tiktok-logo.jpg",
    //         "publishedAt": "2023-07-18T06:51:11Z",
    //         "content": "TikTok has announced it is introducing support for passkeys, providing an easier and more secure login method for users of the popular short-form video platform. Apple integrated passkeys into iOS wi… [+1666 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": null,
    //         "name": "Slashdot.org"
    //         },
    //         "author": "BeauHD",
    //         "title": "Giant Telecom Company That Once Almost Bought Apple Is Teetering On the Brink of Failure",
    //         "description": "An anonymous reader quotes a report from Fortune: It's not a misprint. Telecom Italia SpA, Italy's beleaguered former telephone monopoly, once pitched a plan to buy Apple. About 25 years ago a group of executives from the carrier flew to California to meet Ap…",
    //         "url": "https://apple.slashdot.org/story/23/07/17/2058226/giant-telecom-company-that-once-almost-bought-apple-is-teetering-on-the-brink-of-failure",
    //         "urlToImage": "https://a.fsdn.com/sd/topics/business_64.png",
    //         "publishedAt": "2023-07-18T00:02:00Z",
    //         "content": "It's not a misprint. Telecom Italia SpA, Italy's beleaguered former telephone monopoly, once pitched a plan to buy Apple. About 25 years ago a group of executives from the carrier flew to California … [+2169 chars]"
    //         },
    //         {
    //         "source": {
    //         "id": "google-news",
    //         "name": "Google News"
    //         },
    //         "author": null,
    //         "title": "Apple iPhone 15 series rumoured to get a vibrant twist with new pink colour option - The Economic Times",
    //         "description": "<ol><li>Apple iPhone 15 series rumoured to get a vibrant twist with new pink colour option  The Economic Times\r\n</li><li>Leaked iPhone 15 Pro vs iPhone 14 Pro image highlights five differences  PhoneArena\r\n</li><li>iPhone 15 and iPhone 15 Plus colours: What i…",
    //         "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMimgFodHRwczovL20uZWNvbm9taWN0aW1lcy5jb20vbWFnYXppbmVzL3BhbmFjaGUvYXBwbGUtaXBob25lLTE1LXNlcmllcy1ydW1vdXJlZC10by1nZXQtYS12aWJyYW50LXR3aXN0LXdpdGgtbmV3LXBpbmstY29sb3VyLW9wdGlvbi9hcnRpY2xlc2hvdy8xMDE4NDU5MTEuY21z0gGeAWh0dHBzOi8vbS5lY29ub21pY3RpbWVzLmNvbS9tYWdhemluZXMvcGFuYWNoZS9hcHBsZS1pcGhvbmUtMTUtc2VyaWVzLXJ1bW91cmVkLXRvLWdldC1hLXZpYnJhbnQtdHdpc3Qtd2l0aC1uZXctcGluay1jb2xvdXItb3B0aW9uL2FtcF9hcnRpY2xlc2hvdy8xMDE4NDU5MTEuY21z?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
    //         "urlToImage": null,
    //         "publishedAt": "2023-07-18T05:00:00Z",
    //         "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
    //         }
    // ]
    
   constructor(){
    super();
    this.state= {
        articles: [],
        loading: false,
        page: 1,
    }
   } 
   
   async componentDidMount(){
    let url= "https://newsapi.org/v2/top-headlines?country=in&apiKey=798374f4bc2c480b8f96a013cd565ad1&page=1&pageSize=18";
    let data= await fetch(url);
    let parsedData= await data.json();
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
   }
   

   handlePrevClick =async ()=>{
    let url= `https://newsapi.org/v2/top-headlines?country=in&apiKey=798374f4bc2c480b8f96a013cd565ad1&page=${this.state.page -1}&pageSize=18`;
    let data= await fetch(url);
    let parsedData= await data.json();

    this.setState({
        page: this.state.page -1,
        articles: parsedData.articles
    })
   }
   
   //This button makes sure that if there are still more news to be displayed it takes us to the next page by keeping track of the Total no. of all the news articles
   handleNextClick =async () =>{
    if(this.state.page +1  > Math.ceil(this.state.totalResults/18)){

    }
    else{
        let url= `https://newsapi.org/v2/top-headlines?country=in&apiKey=798374f4bc2c480b8f96a013cd565ad1&page=${this.state.page +1}&pageSize=18`;
        let data= await fetch(url);
        let parsedData= await data.json();
    
        this.setState({
            page: this.state.page +1,
            articles: parsedData.articles
        })
    }
   }
   
   render() {
    return(
        <div className="container my-3" style={{color:'white', backgroundColor:'grey'}}>
            <h1 className="text-center mx-3">News App- TOP HEADLINES</h1>
               <div className="row text-center">
               {this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                            <NewsItem title= {element.title? element.title:""} description= {element.description? element.description: ""} imageUrl= {element.urlToImage} url= {element.url} />
                           </div>                  
               })}  
               </div>
               <div className= "container d-flex justify-content-between">
                 <button disabled={this.state.page<=1} type="button" className="btn btn-warning" onClick={this.handlePrevClick}> &larr; Previous</button>
                 <button disabled= {this.state.page +1  > Math.ceil(this.state.totalResults/18)} type="button" className="btn btn-warning" onClick={this.handleNextClick}>Next &rarr;</button>
               </div>                
        </div>
    )
   }
}

export default News;