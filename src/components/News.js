import React, { Component } from 'react'

import NewsItems from './NewsItems';
export class News extends Component {
    articles = {
        "status": "ok",
        "totalResults": 11,
        "articles": [{
            "source": {
                "id": "talksport",
                "name": "TalkSport"
            },
            "author": "talkSPORT",
            "title": "Transfer rumours and football news LIVE: Ronaldo’s second Man United debut could be delayed, Rice on Red D...",
            "description": "",
            "url": "https://talksport.com/football/834837/transfer-news-live-gossip-premier-league-arsenal-ronaldo-man-utd-debut-liverpool-chelsea/",
            "urlToImage": "https://talksport.com/wp-content/uploads/sites/5/2021/09/TALKSPORT-Blog-7th-Sept-AM.jpg?strip=all&quality=100&w=1200&h=800&crop=1",
            "publishedAt": "2021-09-07T07:40:12Z",
            "content": "It’s the final week of the international break, with Premier League clubs gearing up for their return to action next weekend.\r\nThe quartet of Premier League stars involved in the COVID quarantine dra… [+877 chars]"
        },
        {
            "source": {
                "id": "four-four-two",
                "name": "FourFourTwo"
            },
            "author": "PA Staff",
            "title": "Football rumours: Manchester United to make fresh approach for Declan Rice",
            "description": "Manchester United have not given up on their plans to sign DeclanRice despite not pursuing their interest in the West Ham midfielder over the summer, writes the Daily Mirror. The 22-year-old will be on a list of targets next summer, the paper adds, with Chels…",
            "url": "https://www.fourfourtwo.com/news/football-rumours-manchester-united-to-make-fresh-approach-for-declan-rice-1630995384000",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/eoqxraFnK97yESLvjHR6CL-1200-80.jpg",
            "publishedAt": "2021-09-07T06:16:24Z",
            "content": "What the papers say\r\nManchester United have not given up on their plans to sign DeclanRice despite not pursuing their interest in the West Ham midfielder over the summer, writes the Daily Mirror. The… [+1802 chars]"
        },
        {
            "source": {
                "id": "espn",
                "name": "ESPN"
            },
            "author": "Alex ScarboroughESPN Staff Writer ",
            "title": "UConn says football coach Randy Edsall to step down immediately, instead of at season's end",
            "description": "UConn announced Monday that football coach Randy Edsall will step down immediately, instead of waiting until the end of the season to retire.",
            "url": "http://espn.go.com/college-football/story/_/id/32161620/uconn-says-football-coach-randy-edsall-step-immediately-season-end",
            "urlToImage": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F0906%2Fr905545_1296x729_16%2D9.jpg",
            "publishedAt": "2021-09-06T22:39:00Z",
            "content": "UConn football coach Randy Edsall isn't waiting until the end of the season to retire. He'll step down immediately.\r\nOn Monday, the school announced the change of plans, saying that Edsall and direct… [+1411 chars]"
        },
        {
            "source": {
                "id": "four-four-two",
                "name": "FourFourTwo"
            },
            "author": "PA Staff",
            "title": "Ireland winger James McClean desperate to play more tournament football",
            "description": "James McClean is desperate for the Republic of Ireland’s young guns to play tournament football as he bids to experience it again.",
            "url": "https://www.fourfourtwo.com/news/ireland-winger-james-mcclean-desperate-to-play-more-tournament-football-1630965637000",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/tDhCVjCxwBwiGHnojTUFU4-1200-80.jpg",
            "publishedAt": "2021-09-06T22:00:37Z",
            "content": "James McClean is desperate for the Republic of Irelands young guns to play tournament football as he bids to experience it again.\r\nThe 32-year-old Wigan winger travelled to both Euro 2012 and Euro 20… [+2474 chars]"
        },
        {
            "source": {
                "id": "fox-sports",
                "name": "Fox Sports"
            },
            "author": "FOX Sports",
            "title": "Pro Football Hall of Famer Terrell Owens talks Donovan McNabb, Antonio Brown on 'Club Shay Shay'",
            "description": "Terrell Owens discusses Donovan McNabb and a potential return to the NFL on \"Club Shay Shay\" with Shannon Sharpe.",
            "url": "http://www.foxsports.com/stories/nfl/terrell-owens-club-shay-shay-julio-jones-antonio-brown-donovan-mcnabb-eagles-shannon-sharpe",
            "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2021/09/1408/814/9.6.21_CSS-Terrell-Owens-16x9.jpg?ve=1&tl=1",
            "publishedAt": "2021-09-06T21:41:34Z",
            "content": "There was more than one gold jacket relaxing in \"Club Shay Shay\" this week.\r\nShannon Sharpe was joined by Pro Football Hall of Fame wide receiver Terrell Owens on Monday, and of course, the entertain… [+1832 chars]"
        },
        {
            "source": {
                "id": "nfl-news",
                "name": "NFL News"
            },
            "author": null,
            "title": "NFL Fantasy Football Podcast: Fantasy Preseason Wrap-up (aka Final Answers)",
            "description": "Marcas Grant and Michael F. Florio are back for a new edition of the NFL Fantasy Football Podcast! In this episode, the hosts recap the latest news, starting with news that New York Giants running back Saquon Barkley will possibly have a limited workload",
            "url": "https://www.nfl.com/news/nfl-fantasy-football-podcast-fantasy-preseason-wrap-up-aka-final-answers",
            "urlToImage": "https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/eta20gh3zpwci6du4qbw",
            "publishedAt": "2021-09-06T21:22:27.5670493Z",
            "content": "Marcas Grant and Michael F. Florio are back for a new edition of the NFL Fantasy Football Podcast! In this episode, the hosts recap the latest news, starting with news that New York Giants running ba… [+978 chars]"
        },
        {
            "source": {
                "id": "espn",
                "name": "ESPN"
            },
            "author": "Mark SchlabachESPN Senior Writer ",
            "title": "Georgia football coach Kirby Smart says Bulldogs experiencing 'highest spike' of COVID-19 despite more than 90% being vaccinated",
            "description": "Georgia football coach Kirby Smart says three or four players and sports medicine director Ron Courson are out with COVID-19, despite more than 90% of the football program being vaccinated.",
            "url": "http://espn.go.com/college-football/story/_/id/32160799/georgia-football-coach-kirby-smart-says-90-vaccination-bulldogs-experiencing-highest-spike-covid-19",
            "urlToImage": "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F0830%2Fr902598_1296x729_16%2D9.jpg",
            "publishedAt": "2021-09-06T18:55:00Z",
            "content": "With Georgia set to host its first home game against UAB at Sanford Stadium on Saturday, coach Kirby Smart said three or four of his players are sidelined with COVID-19.\r\nSmart declined to identify t… [+1763 chars]"
        },
        {
            "source": {
                "id": "bleacher-report",
                "name": "Bleacher Report"
            },
            "author": "Kerry Miller",
            "title": "Top 21 Overreactions from Week 1 of 2021 College Football Season",
            "description": "As college football fans, we overreact to just about everything that happens throughout the course of a season.   However, the post-Week 1 overreactions are the best kind.   And, also, typically the worst...",
            "url": "https://bleacherreport.com/articles/2948066-top-21-overreactions-from-week-1-of-2021-college-football-season",
            "urlToImage": "https://img.bleacherreport.net/img/images/photos/003/917/202/5c32fb1639bb836671010d338a851475_crop_exact.jpg?w=1200&h=1200&q=75",
            "publishedAt": "2021-09-06T11:00:03Z",
            "content": "Notre Dame QB Jack CoanIcon Sportswire/Getty Images\r\nHands down, the biggest story of Notre Dame's 41-38 overtime victory over Florida State on Sunday night was the return of McKenzie Milton.\r\nWhile … [+1707 chars]"
        },
        {
            "source": {
                "id": "bleacher-report",
                "name": "Bleacher Report"
            },
            "author": "David Kenyon",
            "title": "B/R's College Football Weekly Awards: Week 1",
            "description": "Welcome back, college football, you beautiful, chaotic sport.   After a small sampling of games last Saturday, Week 1 featured the season opener for the rest of the Football Bowl Subdivision...",
            "url": "https://bleacherreport.com/articles/2948079-brs-college-football-weekly-awards-week-1",
            "urlToImage": "https://img.bleacherreport.net/img/slides/photos/004/474/048/hi-res-87abab17c08998ee46b2e211ed41fd91_crop_exact.jpg?w=1200&h=1200&q=75",
            "publishedAt": "2021-09-06T11:00:01Z",
            "content": "Chris Carlson/Associated Press\r\nNo surprise here. Perhaps other than if Miami had beaten Alabamaand there was no danger of that Saturdayeither Clemson or Georgia seemed destined to receive this award… [+1022 chars]"
        },
        {
            "source": {
                "id": "espn",
                "name": "ESPN"
            },
            "author": "ESPN Fantasy staff",
            "title": "ESPN+ fantasy football cheat sheet - Draft tips, sleepers and busts",
            "description": "Get all of our best fantasy intel, compiled on a printable cheat sheet to bring with you to your fantasy football drafts.",
            "url": "http://espn.go.com/fantasy/football/insider/story/_/id/32004845/espn+-fantasy-football-cheat-sheet-draft-tips-sleepers-busts",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F0804%2Fr891048_1296x729_16%2D9.jpg",
            "publishedAt": "2021-08-11T21:23:10Z",
            "content": "Few things are better than fantasy football season, but it can be tough to read every article we publish all summer. In order to help you prepare for your drafts as quickly as possible, we present yo… [+467 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "Five famous people (and one cat) you didn't know have ESPNcricinfo profiles | ESPNcricinfo.com",
            "description": "Why do a footballer, a Nobel laureate and a prime minister (no, not Imran Khan) find themselves in the ESPNcricinfo player database? | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29102695/five-famous-people-one-cat-know-espncricinfo-profiles",
            "urlToImage": "https://a.espncdn.com/i/cricket/cricinfo/1221668_1296x1296.gif",
            "publishedAt": "2020-04-27T07:20:43Z",
            "content": "Why do a cat, a footballer, a Nobel laureate and a prime minister find themselves in the ESPNcricinfo database? Here are six player profiles you wouldn't have expected we had.\r\nPeter the catThe only … [+5504 chars]"
        }
        ]
    }
    constructor() {
        super();
        this.state = {
            articles: this.articles
        }
        console.log("hello I am a constructor");
    }
    render() {
        return (
            <div>
                <div className="container mt-3">
                    <h1>Daily Dose - Top headlines</h1>
                    <div className="row">
                        <div className="col-md-4">
                            <NewsItems title="mytitle" description="mydesc" imageUrl="https://talksport.com/wp-content/uploads/sites/5/2021/09/TALKSPORT-Blog-7th-Sept-AM.jpg?strip=all&quality=100&w=1200&h=800&crop=1" />
                        </div>
                        <div className="col-md-4">
                            <NewsItems title="mytitle" description="mydesc" />
                        </div>
                        <div className="col-md-4">
                            <NewsItems title="mytitle" description="mydesc" />
                        </div>
                        <div className="col-md-4">
                            <NewsItems title="mytitle" description="mydesc" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default News
