const data = [
    {
        title: "The origami bots that could do surgery",
        path: "/news/technology-41505801",
        firstPublishedAt: "2017-10-10",
    },
    {
        title: "Amazon's AI musical keyboard 'sounds terrible'",
        path: "/news/technology-50629390",
        firstPublishedAt: "2019-12-02",
    },
    {
        title: "US chip makers hit by new China export rule",
        path: "/news/business-62747401",
        firstPublishedAt: "2022-09-01",
    },
    {
        title: "Canada refuses visas to African AI researchers",
        path: "/news/world-us-canada-50426774",
        firstPublishedAt: "2019-11-15",
    },
    {
        title: "Prince Harry to 'shine spotlight' on issues",
        path: "/news/uk-42488837",
        firstPublishedAt: "2017-12-27",
    },
    {
        title: "Algorithm learns to recognise natural beauty",
        path: "/news/technology-40805739",
        firstPublishedAt: "2017-08-08",
    },
    {
        title: "James Bulger's mother calls AI clips of son 'sick'",
        path: "/news/uk-england-merseyside-66348332",
        firstPublishedAt: "2023-07-29",
    },
    {
        title: "Windsor crossbow intruder 'planned to kill guards'",
        path: "/news/uk-england-berkshire-66337656",
        firstPublishedAt: "2023-07-28",
    },
    {
        title: "Honours for Gibb, Starr and Bussell",
        path: "/news/uk-42504660",
        firstPublishedAt: "2017-12-29",
    },
    {
        title: "Stay ahead in AI race, tech boss urges West",
        path: "/news/technology-65834085",
        firstPublishedAt: "2023-06-08",
    },
    {
        title: "ChatGPT banned in Italy over privacy concerns",
        path: "/news/technology-65139406",
        firstPublishedAt: "2023-03-31",
    },
    {
        title: "Fake Trump arrest photos: How to spot an AI-generated image",
        path: "/news/world-us-canada-65069316",
        firstPublishedAt: "2023-03-24",
    },
    {
        title: "Students warned against using AI for assignments",
        path: "/news/uk-england-bristol-64785020",
        firstPublishedAt: "2023-02-28",
    },
    {
        title: "Arm drones to stop shootings, says Taser-gun maker",
        path: "/news/world-us-canada-61685117",
        firstPublishedAt: "2022-06-03",
    },
    {
        title: "Twitter employees speak out about Elon Musk",
        path: "/news/technology-61179016",
        firstPublishedAt: "2022-04-26",
    },
    {
        title: "Scottish woman dies after hit-and-run in Canada",
        path: "/news/uk-scotland-edinburgh-east-fife-61163596",
        firstPublishedAt: "2022-04-20",
    },
    {
        title: "Chancellor announces £1m Manchester Prize for AI",
        path: "/news/technology-64967493",
        firstPublishedAt: "2023-03-15",
    },
    {
        title: "Musk: Robots to be bigger business than Tesla cars",
        path: "/news/technology-60154782",
        firstPublishedAt: "2022-01-27",
    },
    {
        title: "India gambles on building a leading drone industry",
        path: "/news/business-62966802",
        firstPublishedAt: "2022-11-04",
    },
    {
        title: "'Threat to quit ECHR' and 'mortgage price war'",
        path: "/news/blogs-the-papers-66456003",
        firstPublishedAt: "2023-08-09",
    },
    {
        title: "Victory over Australia and 'Oil be back'",
        path: "/news/blogs-the-papers-66367678",
        firstPublishedAt: "2023-07-31",
    },
    {
        title: "Did Yellen's trip to Beijing boost US-China relations?",
        path: "/news/world-asia-66146889",
        firstPublishedAt: "2023-07-09",
    },
    {
        title: "Aberdeen AI trial helps doctors spot breast cancers",
        path: "/news/technology-65821552",
        firstPublishedAt: "2023-06-09",
    },
    {
        title: "Bloodhound Diary: All models are wrong...",
        path: "/news/science-environment-48596771",
        firstPublishedAt: "2019-06-11",
    },
    {
        title: "Why Huawei matters in five charts",
        path: "/news/business-46480208",
        firstPublishedAt: "2018-12-07",
    },
    {
        title: "Spoonful of sugar and victims' bitter pill",
        path: "/news/uk-northern-ireland-48292047",
        firstPublishedAt: "2019-05-16",
    },
    {
        title: "Tech Tent: Let the 5G battle commence",
        path: "/news/technology-47826948",
        firstPublishedAt: "2019-04-05",
    },
    {
        title: "'I saw my father's dead body on Facebook'",
        path: "/news/world-africa-64518964",
        firstPublishedAt: "2023-02-11",
    },
    {
        title: "US-China trade talks resume amid tensions",
        path: "/news/business-49995684",
        firstPublishedAt: "2019-10-10",
    },
    {
        title: "Watch industry's times are changing",
        path: "/news/business-46822929",
        firstPublishedAt: "2019-01-13",
    },
    {
        title: "Dinosaur teeth could be oldest found in UK",
        path: "/newsround/65291107",
        firstPublishedAt: "2023-04-16",
    },
    {
        title: "New superbug-killing antibiotic discovered using AI",
        path: "/news/health-65709834",
        firstPublishedAt: "2023-05-25",
    },
    {
        title: "Six announcements from Google I/O",
        path: "/news/technology-57166202",
        firstPublishedAt: "2021-05-18",
    },
    {
        title: "Self-driving lorry 'crosses America in three days'",
        path: "/news/technology-50742080",
        firstPublishedAt: "2019-12-11",
    },
    {
        title: "Could an ‘intelligent’ bin cut food waste?",
        path: "/news/business-47708059",
        firstPublishedAt: "2019-03-28",
    },
    {
        title: "AI 'godfather' says it won't destroy jobs forever",
        path: "/news/technology-65886125",
        firstPublishedAt: "2023-06-14",
    },
    {
        title: "Restaurant cat robot meows angrily at diners",
        path: "/news/technology-51003084",
        firstPublishedAt: "2020-01-06",
    },
    {
        title: "Tech Tent: Should you trust smart machines?",
        path: "/news/technology-48966240",
        firstPublishedAt: "2019-07-12",
    },
    {
        title: "Facebook will pay contract staff to work from home",
        path: "/news/technology-51954968",
        firstPublishedAt: "2020-03-18",
    },
    {
        title: "How to investigate a firm with 60 million documents",
        path: "/news/business-55306139",
        firstPublishedAt: "2021-01-19",
    },
    {
        title: "Google AI tool can help diagnose skin conditions",
        path: "/news/technology-57157566",
        firstPublishedAt: "2021-05-18",
    },
    {
        title: "Artificial humans 'don't live up to hype'",
        path: "/news/technology-51028990",
        firstPublishedAt: "2020-01-08",
    },
    {
        title: "Automation 'puts half of NI jobs at risk'",
        path: "/news/uk-northern-ireland-42721225",
        firstPublishedAt: "2018-01-18",
    },
    {
        title: "Business bottleneck in the 'age of optimism'",
        path: "/news/uk-scotland-59088269",
        firstPublishedAt: "2021-10-29",
    },
    {
        title: "Nvidia takeover of chip designer Arm investigated",
        path: "/news/technology-55560417",
        firstPublishedAt: "2021-01-06",
    },
    {
        title: "Microsoft's mega-deal worries small video game makers",
        path: "/news/business-60241535",
        firstPublishedAt: "2022-02-08",
    },
    {
        title: "Tech Tent: ARM, TikTok and the battle for tech supremacy",
        path: "/news/technology-54210077",
        firstPublishedAt: "2020-09-18",
    },
    {
        title: "How China plans to lead the computer chip industry",
        path: "/news/business-50287485",
        firstPublishedAt: "2019-11-19",
    },
    {
        title: "'How a smartphone saved my mother's life'",
        path: "/news/business-47156077",
        firstPublishedAt: "2019-02-08",
    },
    {
        title: "Week ahead in Parliament",
        path: "/news/uk-politics-parliaments-42110048",
        firstPublishedAt: "2017-11-24",
    },
    {
        title: "'Death or poverty' no longer only malaria outcomes",
        path: "/news/newsbeat-58848721",
        firstPublishedAt: "2021-10-11",
    },
    {
        title: "Robot carpenter makes custom furniture",
        path: "/news/technology-43251669",
        firstPublishedAt: "2018-03-02",
    },
    {
        title: "The big problem holding back the UK economy",
        path: "/news/business-66937239",
        firstPublishedAt: "2023-09-27",
    },
    {
        title: "Firms 'going to war' against rivals on social media",
        path: "/news/business-62161520",
        firstPublishedAt: "2022-07-17",
    },
    {
        title: "Driverless cars plan steps up a gear",
        path: "/news/uk-england-42238774",
        firstPublishedAt: "2017-12-05",
    },
    {
        title: "Death threats circulate in Brexit Facebook groups",
        path: "/news/blogs-trending-49902321",
        firstPublishedAt: "2019-10-07",
    },
    {
        title: "The robots behind the bar serving your next drink",
        path: "/news/business-59246183",
        firstPublishedAt: "2021-11-15",
    },
    {
        title: "Mastectomy photo project aims to empower women",
        path: "/news/uk-england-manchester-64055153",
        firstPublishedAt: "2023-01-06",
    },
    {
        title: "IBM claims advance in quantum computing",
        path: "/news/science-environment-59320073",
        firstPublishedAt: "2021-11-17",
    },
    {
        title: "AI image creator faces UK and US legal challenges",
        path: "/news/technology-64285227",
        firstPublishedAt: "2023-01-18",
    },
    {
        title: "Google's DeepMind goes undercover to battle gamers",
        path: "/news/technology-48950103",
        firstPublishedAt: "2019-07-11",
    },
    {
        title: "Corbyn: Let workers control robots",
        path: "/news/uk-politics-41614820",
        firstPublishedAt: "2017-10-14",
    },
    {
        title: "'Voters abandon Tories' as PM defends strategy",
        path: "/news/blogs-the-papers-63105718",
        firstPublishedAt: "2022-10-01",
    },
    {
        title: "Concerns about NHS on front pages",
        path: "/news/blogs-the-papers-46477661",
        firstPublishedAt: "2018-12-06",
    },
    {
        title: "Welsh? There could be a device for that",
        path: "/news/uk-wales-45943127",
        firstPublishedAt: "2018-10-23",
    },
    {
        title: "Google chief breaks silence on China plan",
        path: "/news/technology-45872965",
        firstPublishedAt: "2018-10-16",
    },
    {
        title: "Why don't MPs say these words any more?",
        path: "/news/uk-politics-46649650",
        firstPublishedAt: "2019-01-11",
    },
    {
        title: "A different way to measure wealth",
        path: "/news/business-45816049",
        firstPublishedAt: "2018-10-11",
    },
    {
        title: "Budget offers digital skills boost",
        path: "/news/technology-42081703",
        firstPublishedAt: "2017-11-22",
    },
    {
        title: "Uber strikes deal to buy self-drive Volvos",
        path: "/news/technology-42055841",
        firstPublishedAt: "2017-11-20",
    },
    {
        title: "Tech 2019: What happened next?",
        path: "/news/technology-50809562",
        firstPublishedAt: "2019-12-31",
    },
    {
        title: "DeepMind claims landmark moment for AI in esports",
        path: "/news/technology-50212841",
        firstPublishedAt: "2019-10-30",
    },
    {
        title: "What can Silicon Valley learn from tinned food?",
        path: "/news/business-49742270",
        firstPublishedAt: "2019-10-01",
    },
    {
        title: "Amazon till-less grocery store opens in London",
        path: "/news/technology-56266494",
        firstPublishedAt: "2021-03-04",
    },
    {
        title: "Huawei turns to pig farming as smartphone sales fall",
        path: "/news/business-56121470",
        firstPublishedAt: "2021-02-19",
    },
    {
        title: "Tech helps doctors assess patients’ pain levels",
        path: "/news/technology-55831453",
        firstPublishedAt: "2021-02-03",
    },
    {
        title: "Japan to fund AI matchmaking to boost birth rate",
        path: "/news/world-asia-55226098",
        firstPublishedAt: "2020-12-08",
    },
    {
        title: "Ten African innovations to help tackle Covid-19",
        path: "/news/world-africa-53776027",
        firstPublishedAt: "2020-08-15",
    },
    {
        title: "Tech Tent: China and US, the great tech schism",
        path: "/news/technology-53366516",
        firstPublishedAt: "2020-07-10",
    },
    {
        title: "Amazon using thermal cameras to detect Covid-19",
        path: "/news/technology-52356177",
        firstPublishedAt: "2020-04-20",
    },
    {
        title: "Why are there doubts over contact-tracing apps?",
        path: "/news/technology-52353720",
        firstPublishedAt: "2020-04-20",
    },
];

export { data };
