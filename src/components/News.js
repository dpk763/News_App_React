import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";

export default class News extends Component {
  articles = [
    {
      source: {
        id: "engadget",
        name: "Engadget",
      },
      author: null,
      title:
        "Microsoft will charge businesses $30 per user for its 365 AI Copilot - Engadget",
      description:
        "At the Microsoft Inspire partner event today, the Windows maker announced pricing for its AI-infused Copilot for Microsoft 365.",
      url: "https://www.engadget.com/microsoft-will-charge-businesses-30-per-user-for-its-365-ai-copilot-153042654.html",
      urlToImage:
        "https://s.yimg.com/uu/api/res/1.2/v6_iVgu1J1TSDWG5LoPNOw--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-07/8ad97820-24c1-11ee-8ef3-4952b6077bf1.cf.jpg",
      publishedAt: "2023-07-18T15:31:59Z",
      content:
        "At the Microsoft Inspire partner event today, the Windows maker announced pricing for its AI-infused Copilot for Microsoft 365. The suite of contextual artificial intelligence tools, the fruit of the… [+2469 chars]",
    },
    {
      source: {
        id: "the-verge",
        name: "The Verge",
      },
      author: "Jon Porter",
      title:
        "Microsoft's new Bing Chat Enterprise offers better privacy for businesses - The Verge",
      description:
        "Bing Chat Enterprise is a new AI-powered chat tool from Microsoft designed to offer more data protection for businesses with privacy and security concerns.",
      url: "https://www.theverge.com/2023/7/18/23797317/microsoft-bing-chat-enterprise-generative-ai-gpt-chatbot",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/m_Ryw7aOmIKVpA1DWQsBoKG-LGg=/0x0:1620x1080/1200x628/filters:focal(810x540:811x541)/cdn.vox-cdn.com/uploads/chorus_asset/file/24794354/Blog_Hero_Image_Under_Embargo_Until_7.18__8.30am_PT.jpg",
      publishedAt: "2023-07-18T15:30:00Z",
      content:
        "Microsofts new Bing Chat Enterprise offers better privacy for businesses\r\nMicrosofts new Bing Chat Enterprise offers better privacy for businesses\r\n / Microsoft attempts to reassure businesses that t… [+2976 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "MADDIE BURAKOFF",
      title:
        "Mammals may have hunted down dinosaurs for dinner, rare fossil suggests - The Associated Press",
      description:
        "An unusual find in China suggests some early mammals may have hunted dinosaur for dinner. The fossil shows a badgerlike creature chomping down on a small, beaked dinosaur, their skeletons intertwined. The research published Tuesday adds to growing evidence th…",
      url: "https://apnews.com/article/mammals-eating-dinosaurs-cretaceous-af0ccd6f491e01ec779753b03568c61c",
      urlToImage:
        "https://dims.apnews.com/dims4/default/2672d95/2147483647/strip/true/crop/6000x3375+0+312/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fb3%2F1a%2F86d11530048f279c3d3816f561e7%2F797c4dec86e34be084fd3396ffa641c9",
      publishedAt: "2023-07-18T15:11:00Z",
      content:
        "NEW YORK (AP) An unusual find in China suggests some early mammals may have hunted dinosaur for dinner. \r\nThe fossil shows a badgerlike creature chomping down on a small, beaked dinosaur, their skele… [+2513 chars]",
    },
    {
      source: {
        id: null,
        name: "Eonline.com",
      },
      author: "Jess Cohen",
      title:
        "Gigi Hadid Released After Being Arrested for Marijuana in Cayman Islands - E! NEWS",
      description:
        'Gigi Hadid "was traveling with marijuana purchased legally in NYC with a medical license," when she was arrested in the Cayman Islands, her rep tells E! News exclusively. She faces no further charges.',
      url: "https://www.eonline.com/news/1380481/gigi-hadid-released-after-being-arrested-for-marijuana-in-cayman-islands",
      urlToImage:
        "https://akns-images.eonline.com/eol_images/Entire_Site/2023618/rs_1200x1200-230718062258-1200-Gigi-Hadid-LT-071823-GettyImages-1492095681.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
      publishedAt: "2023-07-18T14:36:00Z",
      content:
        "Gigi Hadid had a bumpy start to her summer vacation.\r\nThe supermodel was embarking on a girls' trip to the Cayman Islands on July 10 when she was arrested at Owen Roberts International Airport, E! Ne… [+1021 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: "Angelo Amante, Emma Farge",
      title: "Europe on red alert as heatwave brings health warning - Reuters",
      description:
        "Large swathes of southern and eastern Europe were placed on heatwave red alert on Tuesday and the World Meteorological Organization warned of an increased risk of deaths as extreme weather gripped the continent, Asia and the United States.",
      url: "https://www.reuters.com/world/wmo-warns-risk-heart-attacks-deaths-heatwave-intensifies-2023-07-18/",
      urlToImage:
        "https://www.reuters.com/resizer/WYxTJdTdSDPtVky8zNmaRknhWc4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/FUHZQ5X5ENOGVJJEAAJDURV4XE.jpg",
      publishedAt: "2023-07-18T14:32:00Z",
      content:
        "ROME, July 18 (Reuters) - Large swathes of southern and eastern Europe were placed on heatwave red alert on Tuesday and the World Meteorological Organization warned of an increased risk of deaths as … [+5787 chars]",
    },
    {
      source: {
        id: null,
        name: "Fox Business",
      },
      author: "Julia Musto",
      title:
        "Eli Lilly says FDA approval of Alzheimer’s drug donanemab could come later this year - Fox Business",
      description:
        "The manufacturer Eli Lilly & Co. announced that the drug donanemab modestly slows the progression of Alzheimer's disease, with egulatory action expected by the end of the year.",
      url: "https://www.foxbusiness.com/lifestyle/eli-lilly-fda-approval-alzheimers-drug-donanemab-could-come-later-this-year",
      urlToImage:
        "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2023/07/0/0/Lilly-Lab.jpg?ve=1&tl=1",
      publishedAt: "2023-07-18T14:14:08Z",
      content:
        "Drugmaker Eli Lilly &amp; Co. said Monday that a second drug that modestly slows the progression of Alzheimer’s disease could be approved by the end of this year.\r\nThe manufacturer said donanemab sig… [+2875 chars]",
    },
    {
      source: {
        id: null,
        name: "clevelandbrowns.com",
      },
      author: "Anthony Poisal",
      title:
        "Browns unveil white alternate throwback helmets - clevelandbrowns.com",
      description:
        "The White Out Series, presented by DUDE Wipes, will include 3 regular season games featuring the new white alternate helmet and throwback uniform",
      url: "https://www.clevelandbrowns.com/news/browns-unveil-white-alternate-throwback-helmets",
      urlToImage:
        "https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/browns/hfh0gcvlgcttwbd4yqff",
      publishedAt: "2023-07-18T14:02:21Z",
      content:
        "The Browns have introduced a new alternate helmet and are tapping deeper than ever into their franchise's history to bring back a true throwback look.\r\nFor three games in 2023, the Browns will wear a… [+1265 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Katelyn Polantz, Jeremy Herb",
      title:
        "Donald Trump says he’s a target of special counsel’s criminal probe into 2020 election aftermath - CNN",
      description:
        "Former President Donald Trump said in a social media post that he’s been informed by special counsel Jack Smith that he is a target of the criminal investigation into efforts to overturn the 2020 election, a sign he may soon be charged by the special counsel..",
      url: "https://www.cnn.com/2023/07/18/politics/trump-special-counsel-probe/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230629105952-donald-trump-0624.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-07-18T13:54:00Z",
      content:
        "Former President Donald Trump said in a social media post that hes been informed by special counsel Jack Smith that he is a target of the criminal investigation into efforts to overturn the 2020 elec… [+3371 chars]",
    },
    {
      source: {
        id: null,
        name: "FOX 5 Atlanta",
      },
      author: "FOX 5 Atlanta",
      title:
        "Carlee Russell: Parents say missing Alabama woman 'fought for her life' after disappearance - FOX 5 Atlanta",
      description:
        'In a new interview, Carlee Russell\'s parents say that she "fought for her life" after disappearing on the side of an Alabama highway.',
      url: "https://www.fox5atlanta.com/news/carlee-russell-parents-abduction-update-investigation-latest",
      urlToImage:
        "https://images.foxtv.com/static.fox5atlanta.com/www.fox5atlanta.com/content/uploads/2023/07/1280/720/38d7f1f7-Carlee-Russell.jpg?ve=1&tl=1",
      publishedAt: "2023-07-18T13:47:23Z",
      content:
        'HOOVER, Ala. - The parents of Carlethia "Carlee" Nichole Russell say their daughter "fought for her life" after the 25-year-old Alabama woman went missing when she pulled over on the interstate to ch… [+5775 chars]',
    },
    {
      source: {
        id: null,
        name: "Hollywood Reporter",
      },
      author: "Alex Ritman",
      title:
        "SAG-AFTRA Strike: Why There Won’t Be Sympathy Strikes in the U.K. - Hollywood Reporter",
      description:
        'Thanks to "draconian" trade union legislation that is considered among the most restrictive in the Western world, industrial action is limited in the U.K. and prevents local union Equity from calling a "primary  onClick={}strike."',
      url: "https://www.hollywoodreporter.com/business/business-news/actors-strike-no-uk-sympathy-strike-equity-sag-aftra-1235538641/",
      urlToImage:
        "https://www.hollywoodreporter.com/wp-content/uploads/2023/07/IMG_7802-H-2023.jpg?w=1024",
      publishedAt: "2023-07-18T13:45:47Z",
      content:
        "When SAG-AFTRA called its historic strike on July 13, among the first industry bodies to show near-immediate solidarity was the U.K.’s actors union Equity. \r\nRepresenting some 47,000 members, Equity … [+3875 chars]",
    },
    {
      source: {
        id: null,
        name: "CNBC",
      },
      author: "Brian Evans, Samantha Subin",
      title:
        "S&P 500 is flat following weak retail sales, so-so earnings: Live updates - CNBC",
      description:
        "Stocks were mixed Tuesday as a busy day of earnings got under way and traders digested soft retail sales data.",
      url: "https://www.cnbc.com/2023/07/17/stock-market-today-live-updates.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/107272522-1689618676764-Traders-TF-Photo-AJ-20230717-0129-PRESS-13.jpg?v=1689691375&w=1920&h=1080",
      publishedAt: "2023-07-18T13:42:00Z",
      content:
        "The Dow Jones Industrial Average was higher Tuesday as traders digested better-than-expected corporate earnings.\r\nThe Dow added 310 points, 0.9%, aided by a nearly 5% jump in Verizon. The Nasdaq Comp… [+1575 chars]",
    },
    {
      source: {
        id: null,
        name: "GMA",
      },
      author: "Danielle Long, Carson Blackwelder",
      title:
        "Miranda Lambert calls out fans for taking selfies during concert, fan responds - GMA",
      description: "",
      url: "https://www.goodmorningamerica.com/culture/story/miranda-lambert-calls-fans-taking-selfies-concert-speaks-out-101400575",
      urlToImage:
        "https://s.abcnews.com/images/GMA/Miranda-Lambert-gty-thg-230718_1689684489231_hpMain_16x9_608.jpg",
      publishedAt: "2023-07-18T13:26:53Z",
      content:
        'One of the women Miranda Lambert called out for taking a selfie during a recent Las Vegas concert is speaking out.\r\nIn a \r\n TikTok video posted Sunday, the country singer stopped singing her song "Ti… [+1503 chars]',
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "An American national has crossed into North Korea without authorization and has been detained - 6abc Philadelphia",
      description:
        "An American has crossed the heavily fortified border from South Korea into North Korea, the American-led U.N. Command overseeing the area said Tuesday, amid ...",
      url: "https://www.youtube.com/watch?v=eOj7t_MybIs",
      urlToImage:
        "https://i.ytimg.com/vi/eOj7t_MybIs/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGFsgYyhlMA8=&rs=AOn4CLCOrpeuUyrtAmfCfCk1mw1OXSau4g",
      publishedAt: "2023-07-18T13:21:59Z",
      content: null,
    },
    {
      source: {
        id: "abc-news",
        name: "ABC News",
      },
      author: "FELIPE DANA Associated Press",
      title:
        "Russia targets Ukraine's port of Odesa and calls it payback for a strike on a key bridge to Crimea - ABC News",
      description:
        "Ukraine said its forces shot down Russian drones and cruise missiles targeting the Black Sea port of Odesa in what Moscow called “retribution” for an attack that damaged a crucial bridge to the Crimean Peninsula",
      url: "https://abcnews.go.com/International/wireStory/russia-targets-key-ukraine-black-sea-port-odesa-101396682",
      urlToImage:
        "https://s.abcnews.com/images/International/wirestory_f4f9cc439384e4d7012c82368338405f_16x9_992.jpg",
      publishedAt: "2023-07-18T13:18:45Z",
      content:
        "KYIV, Ukraine -- Ukraine said its forces shot down Russian drones and cruise missiles targeting the Black Sea port of Odesa before dawn Tuesday in what Moscow called retribution for an attack that da… [+6122 chars]",
    },
    {
      source: {
        id: null,
        name: "Rolling Stone",
      },
      author: "Alan Sepinwall",
      title:
        "Timothy Olyphant Loves Being TV’s Ultimate Cowboy - Rolling Stone",
      description:
        "Acclaimed actor talks Raylan Givens’ return in Justified: City Primeval and his gunslinger roles in The Mandalorian and Deadwood",
      url: "https://www.rollingstone.com/tv-movies/tv-movie-features/timothy-olyphant-interview-justified-city-primeval-the-mandalorian-deadwood-cowboy-1234783927/",
      urlToImage:
        "https://www.rollingstone.com/wp-content/uploads/2023/07/0171.jpg?w=1600&h=900&crop=1",
      publishedAt: "2023-07-18T13:00:00Z",
      content:
        "Timothy Olyphant just can’t stay away from cowboy hats. \r\nIn 2019, Olyphant reprised his role as rage-filled Wild West sheriff Seth Bullock in Deadwood: The Movie. A year later, he cameoed on The Goo… [+12682 chars]",
    },
    {
      source: {
        id: "national-review",
        name: "National Review",
      },
      author: "Jim Geraghty",
      title:
        "Once Again, Texas Democrats Think This Is the Cycle They Beat Ted Cruz - National Review",
      description:
        "NPR informs us that Texas Democrats are, once again, convinced this is the cycle that they beat GOP senator Ted Cruz.",
      url: "https://www.nationalreview.com/corner/once-again-texas-democrats-think-this-is-the-cycle-they-beat-ted-cruz/",
      urlToImage:
        "https://www.nationalreview.com/wp-content/uploads/2022/03/Ted-Cruz-1.jpg?fit=2057%2C1200",
      publishedAt: "2023-07-18T12:45:05Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "CBS Sports",
      },
      author: "",
      title:
        "Derrick Henry, Jonathan Taylor among star RBs angry about Saquon Barkley, Josh Jacobs franchise tags - CBS Sports",
      description:
        "'I'm with every RB that's fighting to get what they deserve,' Henry tweeted",
      url: "https://www.cbssports.com/nfl/news/derrick-henry-jonathan-taylor-among-star-rbs-angry-about-saquon-barkley-josh-jacobs-franchise-tags/",
      urlToImage:
        "https://sportshub.cbsistatic.com/i/r/2021/10/18/94876701-86e9-41b9-b5f1-e203d4036295/thumbnail/1200x675/869ed33eaeccdfbf6a7375f65187bdb8/gettyimages-1346281038.jpg",
      publishedAt: "2023-07-18T12:41:00Z",
      content:
        "The deadline for franchise-tagged players came and went Monday with none of the three tagged running backs -- the Giants' Saquon Barkley, the Raiders' Josh Jacobs and the Cowboys' Tony Pollard -- agr… [+2428 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: "Pratyush Thakur, Mike Stone",
      title:
        "Lockheed Martin raises full-year forecast on strong weapons demand - Reuters",
      description:
        'U.S. weapons maker Lockheed Martin <a href="https://www.reuters.com/markets/companies/LMT.N" target="_blank">(LMT.N)</a> on Tuesday raised its annual profit and sales outlook on strong demand for military equipment stoked by ongoing geopolitical uncertainties.',
      url: "https://www.reuters.com/business/aerospace-defense/lockheed-martin-raises-full-year-forecast-strong-weapons-demand-2023-07-18/",
      urlToImage:
        "https://www.reuters.com/resizer/cE-VdbGcOLhG4HheB1ZNauAQWYU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/Q2HICSPEHFIJDGDYZRIJINGDUY.jpg",
      publishedAt: "2023-07-18T12:39:00Z",
      content:
        "July 18 (Reuters) - U.S. weapons maker Lockheed Martin (LMT.N) on Tuesday raised its annual profit and sales outlook on strong demand for military equipment stoked by ongoing geopolitical uncertainti… [+1826 chars]",
    },
    {
      source: {
        id: null,
        name: "CNET",
      },
      author: null,
      title:
        "iPadOS 17 Beta Is Here and It's Already Making Things Better - CNET",
      description:
        "From more stable multitasking to its new widgets and tools, the OS update looks promising.",
      url: "https://www.cnet.com/tech/computing/ipados-17-beta-is-here-and-its-already-making-things-better/",
      urlToImage:
        "https://www.cnet.com/a/img/resize/d6fa261862fd72f7d824cb9e07caa8b032278dfc/hub/2023/07/17/afc1e5d9-2c19-4f06-85ae-791d59019bda/ipados17-beta-stagemanager.jpg?auto=webp&fit=crop&height=675&width=1200",
      publishedAt: "2023-07-18T12:00:00Z",
      content:
        "The iPad doesn't go through massive transformations year to year, but it continues to slowly evolve. The latest version of iPadOS, expected to arrive finished in the fall, as it always does, is in pu… [+6442 chars]",
    },
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: "https://www.facebook.com/bbcnews",
      title:
        "Opposition meeting: 26 Indian parties form alliance to take on PM Modi - BBC",
      description:
        "Opposition parties have formed the Indian National Developmental Inclusive Alliance ahead of 2024's election.",
      url: "https://www.bbc.com/news/world-asia-india-66230072",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/32AA/production/_130407921_congressparty.jpg",
      publishedAt: "2023-07-18T11:32:22Z",
      content:
        "The leaders of 26 Indian opposition parties have formed an alliance to take on Prime Minister Narendra Modi's party in the general election due next year.\r\nThe opposition's coalition will be called I… [+2870 chars]",
    },
  ];

  constructor() {
    super();

    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=7117246737bd4f3f8f517ac73a8c9799&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedata = await data.json();

    this.setState({ articles: parsedata.articles, 
      totalResults:parsedata.totalResults,
    loading:false});
  }

   next = async () => {

    if(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)){
    }
    else{
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=7117246737bd4f3f8f517ac73a8c9799&page=${
        this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});

    let data = await fetch(url);
    let parsedata = await data.json();

    this.setState({
      page: this.state.page + 1,
      articles: parsedata.articles,
      loading:false
    });

  }
  };

   pre = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=7117246737bd4f3f8f517ac73a8c9799&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});

    let data = await fetch(url);
    let parsedata = await data.json();

    this.setState({
      page: this.state.page - 1,
      articles: parsedata.articles,
      loading:false
    });
  };
  

  render() { 
    return (
      <>
        <div className="container my-2">
          <h1>Top Headlines</h1>
          {this.state.loading && <Loading/>}
          <div className="row">
            {!this.state.loading && this.state.articles.map((ele) => {
              return (
                <div className="col-md-3" key={ele.url}>
                  <NewsItem
                    title={ele.title.slice(0, 20) + "..."}
                    desctiption={ele.description.slice(0, 80) + "..."}
                    imgurl={ele.urlToImage}
                    newsurl={ele.url}
                  />
                </div>
              );
            })}
          </div>
          <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-primary"
              onClick={this.pre}
            >
              &larr; previous
            </button>

            <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-primary next" onClick={this.next}>
              Next &rarr;
            </button>
          </div>
        </div>
      </>
    );
  }
}
