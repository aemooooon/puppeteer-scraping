const data = [
    {
        title: "Oppose Digital Currency—Communism Beyond Marx’s Dreams",
        publishedAt: 1678923167,
        uri: "/opinion/oppose-digital-currency-communism-beyond-marxs-dreams-5126611",
    },
    {
        title: "DeSantis Looking Forward To His Next Debate—With California Governor Newsom",
        publishedAt: 1696463355,
        uri: "/us/desantis-looking-forward-to-his-next-debate-with-california-governor-newsom-5503942",
    },
    {
        title: "Google Being Sued Over New AI Data-Scraping Privacy Policy",
        publishedAt: 1689275943,
        uri: "/article/google-being-sued-over-new-ai-data-scraping-privacy-policy-5396730",
    },
    {
        title: "CCP's ‘Thousand Talents Program’ Recruits in France",
        publishedAt: 1678726107,
        uri: "/china/ccps-thousand-talents-program-recruits-in-france-5103262",
    },
    {
        title: "Elon Musk Asks Judge to Start Twitter Trial on Oct. 17",
        publishedAt: 1658890700,
        uri: "/article/elon-musk-asks-judge-to-start-twitter-trial-on-oct-17-4622799",
    },
    {
        title: "Move Over, Everest Climbers. The Rarest Peaks to Scale May Be in South Florida",
        publishedAt: 1677679202,
        uri: "/bright/move-over-everest-climbers-the-rarest-peaks-to-scale-may-be-in-south-florida-5090744",
    },
    {
        title: "US Desperately Needs a Long Deflation",
        publishedAt: 1689175933,
        uri: "/opinion/us-desperately-needs-a-long-deflation-5392842",
    },
    {
        title: "Elon Musk Donates Nearly $2 Billion in Tesla Shares to Charity",
        publishedAt: 1676469728,
        uri: "/us/elon-musk-donates-nearly-2-billion-in-tesla-shares-to-charity-5059068",
    },
    {
        title: "Andrew Moore Runs for Middletown District School Board",
        publishedAt: 1683122186,
        uri: "/us/andrew-moore-runs-for-middletown-district-school-board-5238449",
    },
    {
        title: "Ontario Releases New Science Curriculum for Grades 1 to 8",
        publishedAt: 1646780848,
        uri: "/world/ontario-releases-new-science-curriculum-for-grades-1-to-8-4325013",
    },
    {
        title: "Google Expanding 'Prebunking' Campaign to Germany",
        publishedAt: 1676319841,
        uri: "/article/google-expanding-prebunking-campaign-in-germany-5054070",
    },
    {
        title: "China Likely Poses 'Single Biggest' Cybersecurity Threat to UK: NCSC",
        publishedAt: 1667403772,
        uri: "/china/china-likely-poses-single-biggest-cybersecurity-threat-to-uk-ncsc-4836448",
    },
    {
        title: "Klaus Schwab Wants to ‘Structurally Restructure’ the World Despite ‘Extensive Social Tensions’",
        publishedAt: 1668616092,
        uri: "/article/klaus-schwab-wants-to-structurally-restructure-the-world-despite-extensive-social-tensions-4867098",
    },
    {
        title: "South Korea Becomes Non-Permanent Member of UN Security Council",
        publishedAt: 1686804570,
        uri: "/world/south-korea-becomes-non-permanent-member-of-un-security-council-5331944",
    },
    {
        title: "An Upgraded State-Planned Economy May Be Accelerated in China After the 20th Congress: Experts",
        publishedAt: 1666024904,
        uri: "/opinion/an-upgraded-state-planned-economy-may-be-accelerated-in-china-after-the-20th-congress-experts-4800041",
    },
    {
        title: "Not Just Spy Balloons: The CCP’s Expansive Spy Campaign Against America",
        publishedAt: 1675456176,
        uri: "/china/not-just-balloons-the-ccps-expansive-spy-campaign-against-america-5032375",
    },
    {
        title: "US, South Korea Strengthen Economic Ties Through ‘Semiconductor Alliance’",
        publishedAt: 1653720195,
        uri: "/world/us-south-korea-strengthen-economic-ties-through-semiconductor-alliance-4495228",
    },
    {
        title: "UK MP Asks Expert About Risks of AI and Is Told 'It Could Kill Everyone'",
        publishedAt: 1674669789,
        uri: "/world/uk-mp-asks-expert-about-risks-of-ai-and-is-told-it-could-kill-everyone-5009348",
    },
    {
        title: "University of Montreal Signed Agreements in 2019 With Chinese Tech Institute Tied to China’s Military",
        publishedAt: 1684191933,
        uri: "/world/university-of-montreal-signed-agreements-in-2019-with-chinese-tech-institute-tied-to-chinas-military-5263212",
    },
    {
        title: "Chinese Ambassador Accuses the US of Being a Failing Democracy",
        publishedAt: 1680149057,
        uri: "/china/chinese-ambassador-accuses-the-us-of-being-a-failing-democracy-5159495",
    },
    {
        title: "4 Most Popular Investment Trends That You Won't Want to Miss",
        publishedAt: 1656700310,
        uri: "/bright/4-most-popular-investment-trends-that-you-wont-want-to-miss-4568887",
    },
    {
        title: "Biden, British PM Strike New Economic Partnership, Touting ‘Indispensable Alliance’",
        publishedAt: 1686258797,
        uri: "/us/biden-british-pm-strike-new-economic-partnership-touting-indispensable-alliance-5322117",
    },
    {
        title: "Artificial Intelligence Professor Rewires Brain 10 Years After Concussion",
        publishedAt: 1452172508,
        uri: "/health/artificial-intelligence-professor-rewires-brain-10-years-after-concussion-1931901",
    },
    {
        title: "Meta Stuns Street With Lower Costs, Big Buyback, Upbeat Sales",
        publishedAt: 1675344477,
        uri: "/article/meta-stuns-street-with-lower-costs-big-buyback-upbeat-sales-5028660",
    },
    {
        title: "Google Brings Artificial Intelligence to Your Inbox",
        publishedAt: 1446591703,
        uri: "/article/google-brings-artificial-intelligence-to-your-inbox-1890404",
    },
    {
        title: "Beijing’s Leadership Announces Its Goals",
        publishedAt: 1679493863,
        uri: "/opinion/beijings-leadership-announces-its-goals-5135760",
    },
    {
        title: "Meta Threatens to Pull News Feeds Over California's Journalism Preservation Act",
        publishedAt: 1685605512,
        uri: "/article/meta-threatens-to-pull-news-feeds-over-californias-journalism-preservation-act-5305272",
    },
    {
        title: "Elon Musk's Brain Implant Startup Neuralink Holds ‘Show and Tell’ Recruitment Drive",
        publishedAt: 1669887958,
        uri: "/article/elon-musks-brain-implant-startup-neuralink-holds-show-and-tell-recruitment-drive-4897219",
    },
    {
        title: "Former Texas Rep. Will Hurd Launches 2024 GOP Presidential Run",
        publishedAt: 1687462606,
        uri: "/us/former-texas-rep-will-hurd-launches-2024-gop-presidential-run-5350285",
    },
    {
        title: "Arizona Mother Warns About AI Voice Cloning After Kidnapping Scam",
        publishedAt: 1681421831,
        uri: "/us/arizona-mother-warns-about-ai-voice-cloning-after-kidnapping-scam-5192749",
    },
    {
        title: "Climate Studies Show ‘Consensus’ Claims to Be Based on Bullying, Not Science",
        publishedAt: 1694606305,
        uri: "/opinion/climate-studies-show-consensus-claims-to-be-based-on-bullying-not-science-5489718",
    },
    {
        title: "CCP Is Engineering a New Society to Control Human Will via Data: Authors",
        publishedAt: 1663264224,
        uri: "/china/ccp-is-engineering-a-new-society-to-control-human-will-via-data-authors-4732455",
    },
    {
        title: "Film Review: ‘Kubrick by Kubrick’: The Enigmatic Auteur in His Own Words",
        publishedAt: 1679269219,
        uri: "/bright/film-review-kubrick-by-kubrick-the-enigmatic-auteur-in-his-own-words-5118551",
    },
    {
        title: "Feds Spent Over $800,000 on Guest Speakers on ‘Equity, Diversity, Inclusion,’ More Than Any Other Topic",
        publishedAt: 1677104655,
        uri: "/world/feds-spent-over-800000-on-guest-speakers-on-equity-diversity-inclusion-more-than-any-other-topic-5071662",
    },
    {
        title: "US Navy Leads Largest Ever AI-Assisted Unmanned Maritime Exercise in Middle East",
        publishedAt: 1643856261,
        uri: "/world/us-navy-leads-largest-ever-ai-assisted-unmanned-maritime-exercise-in-middle-east-4253503",
    },
    {
        title: "Buffett Says People Shouldn't Worry About Berkshire, Banks",
        publishedAt: 1681358237,
        uri: "/article/buffett-says-people-shouldnt-worry-about-berkshire-banks-5190286",
    },
    {
        title: "Man Hatches Plan Using Robot Dogs, AI to Find $181 Million in Bitcoin Accidentally Thrown in Garbage Dump",
        publishedAt: 1658761359,
        uri: "/science/man-hatches-plan-using-robot-dogs-ai-to-find-181-million-in-bitcoin-accidentally-thrown-in-garbage-dump-4619784",
    },
    {
        title: "How to Protect Parents From Financial Scams",
        publishedAt: 1681317063,
        uri: "/bright/how-to-protect-parents-from-financial-scams-5189684",
    },
    {
        title: "Woolworths Expands Rollout of AI-Based Checkout Technology",
        publishedAt: 1676924275,
        uri: "/world/woolworths-expands-rollout-of-checkout-ai-technology-5069567",
    },
    {
        title: "Xi’s Speech and PLA Modernization: No Surprises",
        publishedAt: 1666906447,
        uri: "/opinion/xis-speech-and-pla-modernization-no-surprises-4820713",
    },
    {
        title: "China Seeks to Punish Online Bullying–But Journalist-In-Exile Says Beijing is Directing It All",
        publishedAt: 1687290048,
        uri: "/china/china-seeks-to-punish-online-bullying-but-journalist-in-exile-says-beijing-is-directing-it-all-5341667",
    },
    {
        title: "GOP House Members Sound Alarm on VA Failing to Provide Vets Adequate Brain Injury Exams",
        publishedAt: 1683174951,
        uri: "/us/gop-house-members-sound-alarm-on-va-failing-to-provide-vets-adequate-brain-injury-exams-5241156",
    },
    {
        title: "Defence and Tech Experts Call for Australia to Build In-House AI Capability",
        publishedAt: 1649750889,
        uri: "/world/defence-and-tech-experts-call-for-australia-to-build-in-house-ai-capability-4397985",
    },
    {
        title: "Biden Admin’s New ‘Climate Cop’ Studied at CCP-Controlled University With Ties to Chinese Military",
        publishedAt: 1663681900,
        uri: "/us/biden-admins-new-climate-cop-studied-at-ccp-controlled-university-with-ties-to-chinese-military-4742193",
    },
    {
        title: "New AI Chatbot Released That Can See Images, Produce More Advanced Responses",
        publishedAt: 1678895937,
        uri: "/tech/new-ai-chatbot-released-that-can-see-images-produce-more-advanced-responses-5125197",
    },
    {
        title: "ANALYSIS: DeSantis Campaign Restart in Iowa Gains Traction",
        publishedAt: 1690654495,
        uri: "/us/analysis-desantis-campaign-restart-in-iowa-gains-some-traction-5429582",
    },
    { title: "Notes From the Digital Gulag", publishedAt: 1671824252, uri: "/opinion/4943108-4943108" },
    {
        title: "Ford, ADT Form Venture to Make Vehicle Security Products",
        publishedAt: 1642577955,
        uri: "/article/ford-adt-form-venture-to-make-vehicle-security-products-4221020",
    },
    {
        title: "US Should Put Aside Differences With Big Tech to Take on Beijing: Senator",
        publishedAt: 1663140661,
        uri: "/us/us-should-put-aside-differences-with-big-tech-to-take-on-beijing-senator-4729334",
    },
    {
        title: "US Must Remove CCP from Society: Robert Spalding",
        publishedAt: 1671736620,
        uri: "/china/us-must-remove-ccp-from-society-spalding-4940641",
    },
    {
        title: "Dostoevsky Debunked Socialism 50 Years Before the Russian Revolution",
        publishedAt: 1703263450,
        uri: "/bright/dostoevsky-debunked-socialism-50-years-before-the-russian-revolution-5548385",
    },
    {
        title: "Business Leader Urges UK PM Sunak to Increase Economic Immigration",
        publishedAt: 1669052186,
        uri: "/world/business-leader-urges-uk-pm-sunak-to-increase-economic-immigration-4869211",
    },
    { title: "Is Cash App Safe? ", publishedAt: 1686581527, uri: "/bright/is-cash-app-safe-5326009" },
    {
        title: "China’s Expanding Web of Overseas Bases",
        publishedAt: 1684593430,
        uri: "/opinion/chinas-expanding-web-of-overseas-bases-5277716",
    },
    {
        title: "AgTech Hackathon Seeks to Solve Farming Problems Through Innovation, Technology",
        publishedAt: 1666325179,
        uri: "/us/escondidos-agtech-hackathon-seeks-to-solve-farming-problems-through-innovation-technology-4811042",
    },
    {
        title: "4 Steps the US Can Take to Win the Competition With China",
        publishedAt: 1672446396,
        uri: "/opinion/4-steps-the-us-can-take-to-win-the-competition-with-china-4953500",
    },
    {
        title: "Navy Expedites Waterborne Drones to Close Gap With China",
        publishedAt: 1659198928,
        uri: "/china/navy-expedites-waterborne-drones-to-close-gap-with-china-4631134",
    },
    {
        title: "AI Deepfake ‘News Anchors’ Used in Pro-China Videos on Social Media: Report",
        publishedAt: 1675869453,
        uri: "/china/ai-deepfake-news-anchors-used-in-pro-china-videos-on-social-media-report-5042371",
    },
    {
        title: "Emotional Support Experiment With AI Chatbot Prompts Backlash",
        publishedAt: 1673557252,
        uri: "/tech/emotional-support-experiment-with-ai-chatbot-prompts-backlash-4977681",
    },
    {
        title: "Bowser Unveils DC's 5-Year Economic Plan to Create Jobs, Attract Remote Workers",
        publishedAt: 1673546776,
        uri: "/us/bowser-unveils-dcs-5-year-economic-plan-to-create-jobs-attract-remote-workers-4975625",
    },
    {
        title: "US Chip Ban on China Requires Strict Enforcement to Thwart Circumvention by Beijing: Experts",
        publishedAt: 1672326697,
        uri: "/china/us-chip-ban-on-china-requires-strict-enforcement-to-thwart-circumvention-by-beijing-experts-4915905",
    },
    {
        title: "House Rules and Administration Committee Meets with US Election Officials",
        publishedAt: 1686199290,
        uri: "/us/house-rules-and-administration-committee-meets-with-us-election-officials-5320086",
    },
    { title: "Has China Already Won?", publishedAt: 1654870806, uri: "/opinion/has-china-already-won-4522279" },
    {
        title: "Beijing Will Know More About You Than You Do: Gettr CEO",
        publishedAt: 1664794920,
        uri: "/china/beijing-will-know-more-about-you-than-you-do-gettr-ceo-4770268",
    },
    {
        title: "Why Home-Based, Tech-Enabled Care Is the Future of Medicine for Seniors",
        publishedAt: 1652686848,
        uri: "/health/why-home-based-tech-enabled-care-is-the-future-of-medicine-for-seniors-4465729",
    },
    {
        title: "New Threats Revealed at China’s Zhuhai Airshow",
        publishedAt: 1668623508,
        uri: "/opinion/new-threats-revealed-at-chinas-zhuhai-airshow-4867274",
    },
    {
        title: "Rogers to Invest $10 Billion to Improve Reliability",
        publishedAt: 1658784672,
        uri: "/world/rogers-to-invest-10-billion-to-improve-reliability-4619977",
    },
    {
        title: "Is the CCP’s Rule Permanent?",
        publishedAt: 1682086422,
        uri: "/opinion/is-the-ccps-rule-permanent-5211551",
    },
    {
        title: "US Restrictions Will Slow China's Military Development",
        publishedAt: 1669926506,
        uri: "/opinion/us-restrictions-will-slow-chinas-military-development-4894357",
    },
    {
        title: "Meta Sued Over Youth Addiction to Social Media",
        publishedAt: 1679666420,
        uri: "/article/meta-sued-over-youth-addiction-to-social-media-5146828",
    },
    {
        title: "Winner Takes All: The US-China Race to AI Mastery",
        publishedAt: 1681723599,
        uri: "/opinion/winner-takes-all-the-us-china-race-to-ai-mastery-5199237",
    },
    {
        title: "Microsoft to Boost Pay, Stock Compensation to Beat Inflation, Compete With Other Big Tech",
        publishedAt: 1652859588,
        uri: "/article/microsoft-to-boost-pay-stock-compensation-to-beat-inflation-compete-with-other-big-tech-4473278",
    },
    {
        title: "Will ChatGPT Impact Finance?",
        publishedAt: 1679587203,
        uri: "/bright/will-chatgpt-impact-finance-5143870",
    },
    {
        title: "Australian Government Opens Consultations for Critical Technologies List",
        publishedAt: 1661227718,
        uri: "/world/australian-government-opens-consultations-for-critical-technologies-list-4682043",
    },
    {
        title: "'Forged in Blood': US, South Korea Draw Closer in Face of North's Nuclear Threats",
        publishedAt: 1681569691,
        uri: "/world/forged-in-blood-us-south-korea-draw-closer-in-face-of-norths-nuclear-threats-5196450",
    },
    {
        title: "Here's How Goldman Sachs Views NVIDIA",
        publishedAt: 1646726415,
        uri: "/article/heres-how-goldman-sachs-views-nvidia-4321751",
    },
    {
        title: "Nvidia to Sell ‘Repackaged’ A100 Chips in China, Bypassing US Export Restrictions",
        publishedAt: 1667923281,
        uri: "/article/nvidia-to-sell-repackaged-a100-chips-in-china-bypassing-us-export-restrictions-4849890",
    },
    {
        title: "Food Makers, Feeling Squeezed, Pull the Plug on Slow-Selling Products",
        publishedAt: 1677327879,
        uri: "/article/food-makers-feeling-squeezed-pull-the-plug-on-slow-selling-products-5082667",
    },
    {
        title: "Nuclear Lab in China Procured US Chips Despite Ban",
        publishedAt: 1675100974,
        uri: "/china/nuclear-lab-in-china-procured-us-chips-despite-ban-5020208",
    },
    {
        title: "Experts Warn UK Not to Trust TikTok's Pledge to Keep User Data From CCP",
        publishedAt: 1671124646,
        uri: "/world/experts-warn-uk-not-to-trust-tiktoks-pledge-to-keep-user-data-from-ccp-4920591",
    },
    {
        title: "'American Manufacturing Is Back': Biden Visits New Semiconductor Plant in Arizona",
        publishedAt: 1670367117,
        uri: "/china/american-manufacturing-is-back-biden-welcomes-planned-new-semiconductor-plant-in-arizona-4907581",
    },
    {
        title: "Kash's Corner: Obfuscation and Lies, From the Pentagon Intel Leak to the Whitewashing of the Afghanistan Exit Debacle",
        publishedAt: 1681517876,
        uri: "/epochtv/kashs-corner-obfuscation-and-lies-from-the-pentagon-intel-leak-to-the-whitewashing-of-the-afghanistan-exit-debacle-5194895",
    },
    {
        title: "Tesla Supplier Looks to Invest $5B on EV Batteries, Supply Chain Software",
        publishedAt: 1648883544,
        uri: "/article/tesla-supplier-looks-to-invest-5b-on-ev-batteries-supply-chain-software-4377074",
    },
    {
        title: "Tesla to Seek Shareholder Approval for Stock Split; Shares Surge",
        publishedAt: 1648534807,
        uri: "/article/tesla-to-seek-shareholder-approval-for-stock-split-shares-surge-4366785",
    },
    {
        title: "Republicans Unfocused in Strategy Against China",
        publishedAt: 1692287565,
        uri: "/opinion/republicans-unfocused-in-strategy-against-china-5469751",
    },
    {
        title: "Can the ‘Woke Mind Virus’ Be Destroyed?",
        publishedAt: 1683135796,
        uri: "/opinion/can-the-woke-mind-virus-be-destroyed-5236398",
    },
    {
        title: "China to Increase Nuclear Warheads to 1,500, Pentagon Warns",
        publishedAt: 1669957150,
        uri: "/china/china-to-increase-nuclear-warheads-to-1500-pentagon-warns-4896158",
    },
    {
        title: "China’s Shrinking Economic Base",
        publishedAt: 1674579621,
        uri: "/opinion/chinas-shrinking-economic-base-5005544",
    },
    {
        title: "Using AI for Employee Recruitment",
        publishedAt: 1678890845,
        uri: "/bright/using-ai-for-employee-recruitment-5118558",
    },
    {
        title: "FTC Warning: Americans’ Fingerprints and Eye Scans May Be Subject to Data Manipulation",
        publishedAt: 1684869597,
        uri: "/tech/ftc-warning-americans-fingerprints-and-eye-scans-may-be-subject-to-data-manipulation-5285061",
    },
    {
        title: "Google to Set Up First Africa Product Development Center in Nairobi",
        publishedAt: 1650458887,
        uri: "/tech/google-to-set-up-first-africa-product-development-center-in-nairobi-4415496",
    },
    {
        title: "Almost 80 Percent of Americans Aged 17 to 24 Unfit for Military Service",
        publishedAt: 1677532316,
        uri: "/us/food-assistance-contributing-to-obesity-with-almost-80-percent-of-americans-aged-17-24-unfit-for-military-service-5076107",
    },
    {
        title: "Elon Musk Predicts China's ‘Population Collapse’",
        publishedAt: 1654551399,
        uri: "/us/elon-musk-predicts-chinas-population-collapse-4515767",
    },
    {
        title: "Was Spengler Right After All?",
        publishedAt: 1695058795,
        uri: "/opinion/was-spengler-right-after-all-5493551",
    },
    {
        title: "AI Greatly Improves Denture Design, HK Research Wins International Award",
        publishedAt: 1658766575,
        uri: "/tech/ai-greatly-improves-denture-design-hk-research-wins-international-award-4611144",
    },
    {
        title: "UK Government Announces Winners of £2 Billion Levelling up Fund",
        publishedAt: 1674150507,
        uri: "/world/uk-government-announces-winners-of-2-billion-levelling-up-fund-4996513",
    },
    {
        title: "Online Series Review: 'Stonehouse': Wild Political Melodrama",
        publishedAt: 1673997330,
        uri: "/bright/online-series-review-stonehouse-wild-political-melodrama-4988373",
    },
    {
        title: "‘Bomb in a China Shop’: AI to Wipe Out Jobs, Create Election Uncertainties, Congress Hears",
        publishedAt: 1684260706,
        uri: "/us/bomb-in-a-china-shop-ai-to-wipe-out-jobs-create-election-uncertainties-congress-hears-5268833",
    },
    {
        title: "Bill Gates Hopeful Fake Meat Products, Plant-Based Alternatives Will 'Eventually' Be 'Very Good'",
        publishedAt: 1673880348,
        uri: "/article/bill-gates-hopeful-fake-meat-products-plant-based-alternatives-will-eventually-be-very-good-4987787",
    },
    {
        title: "Health App That Tracks Response to Diseases Rated No. 1 by Cedars-Sinai Medical Center",
        publishedAt: 1639598727,
        uri: "/us/health-app-that-tracks-response-to-diseases-rated-no-1-by-cedars-sinai-medical-center-4159309",
    },
    {
        title: "Biden Announces New Sanctions On Russia; Oil Prices Surge Amid Russian Invasion | NTD Business",
        publishedAt: 1645739833,
        uri: "/epochtv/biden-announces-new-sanctions-on-russia-oil-prices-surge-amid-russian-invasion-ntd-business-4290679",
    },
    {
        title: "'World First' Cameras to Nab Speeding Drivers in Queensland",
        publishedAt: 1661147586,
        uri: "/world/world-first-cameras-to-nab-speeding-drivers-in-queensland-4679268",
    },
    {
        title: "Malaysia Rolls Out ‘Digital Nomad’ and Premium Visas to Attract Foreigners",
        publishedAt: 1663766140,
        uri: "/world/malaysia-rolls-out-digital-nomad-and-premium-visas-to-attract-foreigners-4744347",
    },
    {
        title: "Hollywood's Strike Hurts More Than Movies",
        publishedAt: 1691046420,
        uri: "/opinion/hollywoods-strike-hurts-more-than-movies-5421114",
    },
    {
        title: "'Spongiest' City Auckland Still No Match for Floods",
        publishedAt: 1675557692,
        uri: "/world/spongiest-city-auckland-still-no-match-for-floods-5034570",
    },
    {
        title: "How China Made Russia Its Junior Partner",
        publishedAt: 1681748646,
        uri: "/opinion/how-china-made-russia-its-junior-partner-5197963",
    },
    {
        title: "Facebook Use Plummets Among Teens as YouTube, TikTok Use Surges: Pew Research",
        publishedAt: 1660305636,
        uri: "/article/facebook-use-plummets-among-teens-as-youtube-tiktok-use-surges-pew-research-4660173",
    },
    {
        title: "Taiwan: Piggybacking on the 4th Industrial Revolution for New Military Prowess",
        publishedAt: 1660852427,
        uri: "/opinion/taiwan-piggybacking-on-the-4th-industrial-revolution-for-new-military-prowess-4668871",
    },
    {
        title: "Chinese Spy Balloons Over America",
        publishedAt: 1675698305,
        uri: "/opinion/chinese-spy-balloons-over-america-5034095",
    },
    {
        title: "Fears Varroa Here to Stay but Hope Remains",
        publishedAt: 1665613818,
        uri: "/world/fears-varroa-here-to-stay-but-hope-remains-4790715",
    },
    {
        title: "In War for Control of Humanity, Thoughts and Emotions Are the Battlefield: Dr. Robert Malone",
        publishedAt: 1672354049,
        uri: "/us/in-war-for-control-of-humanity-thoughts-and-emotions-are-the-battlefield-dr-robert-malone-4948067",
    },
    {
        title: "Former Pentagon Software Chief Denies Saying America Has 'Lost Its AI Fight to China'",
        publishedAt: 1633948788,
        uri: "/us/pentagons-ex-software-chief-denies-saying-america-has-lost-its-ai-fight-to-china-4042397",
    },
    {
        title: "The End of Education as We Know It? (Part 1 of 2)",
        publishedAt: 1680032564,
        uri: "/bright/the-end-of-education-as-we-know-it-part-1-of-2-5138579",
    },
    {
        title: "China Loses More in US-China Technology Decoupling, Peking University Report Reveals",
        publishedAt: 1644255693,
        uri: "/china/china-loses-more-in-us-china-technology-decoupling-peking-university-report-reveals-4261392",
    },
    {
        title: "A Simple (But Not Easy) Guide to Achieving Almost Any Dream",
        publishedAt: 1652374845,
        uri: "/bright/a-simple-but-not-easy-guide-to-achieving-almost-any-dream-4456294",
    },
    {
        title: "Lawmakers Hope New House China Panel Will Find Bipartisan Solutions",
        publishedAt: 1676944615,
        uri: "/us/lawmakers-hope-new-house-china-panel-will-find-bipartisan-solutions-5070732",
    },
    {
        title: "Trump’s Social Media Platform Launches; Bill Gates: Omicron Is a ‘Type of Vaccine’ | NTD Business",
        publishedAt: 1645480621,
        uri: "/epochtv/trumps-social-media-platform-launches-bill-gates-omicron-is-a-type-of-vaccine-ntd-business-4290663",
    },
    {
        title: "TSMC Says It Will Have Advanced ASML Chipmaking Tool in 2024",
        publishedAt: 1655621654,
        uri: "/tech/tsmc-says-it-will-have-advanced-asml-chipmaking-tool-in-2024-4541134",
    },
    {
        title: "Google Shares Findings on Ransomware Hacker Group",
        publishedAt: 1647561499,
        uri: "/article/google-shares-findings-on-ransomware-hacker-group-4345442",
    },
    {
        title: "The 'Whole of Society' Censorship Industry",
        publishedAt: 1672269156,
        uri: "/opinion/the-whole-of-society-censorship-industry-4949858",
    },
    {
        title: "US Government Funds Group Seeking to Blacklist Conservative Media",
        publishedAt: 1676740100,
        uri: "/us/us-government-funds-group-seeking-to-blacklist-conservative-media-5067448",
    },
    {
        title: "US Commerce Secretary Arrives in Beijing as CCP Struggles to Save Its Economy",
        publishedAt: 1693159117,
        uri: "/china/us-commerce-secretary-arrives-in-beijing-as-ccp-struggles-to-save-its-economy-5481428",
    },
    {
        title: "5 Reasons Why Chinese Manufacturing Will Decline Rapidly",
        publishedAt: 1674502187,
        uri: "/opinion/5-reasons-why-chinese-manufacturing-will-decline-rapidly-4998201",
    },
    {
        title: "UCSD Finds Technique That Could Boost Mapping of Cell Interiors",
        publishedAt: 1637801743,
        uri: "/us/ucsd-finds-technique-that-could-boost-mapping-of-cell-interiors-4123210",
    },
    {
        title: "Disinformation Tied to Humanity’s 'Most Existential' Threats, Says Panelist at the World Economic Forum",
        publishedAt: 1674489678,
        uri: "/world/disinformation-tied-to-humanitys-most-existential-threats-says-panelist-at-the-world-economic-forum-5000677",
    },
    {
        title: "Drones Plant Millions of Trees in Australia’s Biggest Botanical Garden",
        publishedAt: 1658270930,
        uri: "/world/drones-plant-millions-of-trees-in-australias-biggest-botanical-garden-4606354",
    },
    {
        title: "Health Canada Pursues Enhancements to COVID Vaccine Passport, Raises Link to Digital ID",
        publishedAt: 1675195006,
        uri: "/world/health-canada-pursues-enhancements-to-covid-vaccine-passport-raises-link-to-digital-id-5023769",
    },
    {
        title: "Social Media Star Cameron Hamilton 'Blown Away' by Shen Yun",
        publishedAt: 1672122813,
        uri: "/shenyun/social-media-star-cameron-hamilton-blown-away-by-shen-yun-4946860",
    },
    {
        title: "Pentagon Pushing to Minimize Chinese Presence in Defense Department Supply Chains",
        publishedAt: 1663604712,
        uri: "/us/pentagon-pushing-to-minimize-chinese-presence-in-defense-department-supply-chains-4739872",
    },
    {
        title: "Why the UAE Is Embracing China and Shunning the US",
        publishedAt: 1667495673,
        uri: "/opinion/why-the-uae-is-embracing-china-and-shunning-the-us-4836124",
    },
    {
        title: "Kash Patel: Biden Administration Diverts Attention From National Security Failures—From Chinese Spy Balloon to Fentanyl Crisis",
        publishedAt: 1676072524,
        uri: "/epochtv/kash-patel-biden-administration-trying-to-divert-attention-from-national-security-failures-from-chinese-spy-balloon-to-fentanyl-crisis-5049444",
    },
    {
        title: "Chinese Military Using US Semiconductors to Train Combat AI: Report",
        publishedAt: 1658175333,
        uri: "/china/chinese-military-using-us-semiconductors-to-train-combat-ai-report-says-4604609",
    },
    {
        title: "Feds Reveal Canada’s Role in WEF-Promoted ‘Fourth Industrial Revolution’",
        publishedAt: 1674170739,
        uri: "/world/feds-reveal-canadas-role-in-wef-promoted-fourth-industrial-revolution-4997973",
    },
    {
        title: "Media Mischaracterising AUKUS and Ignoring Benefits: Defence Experts",
        publishedAt: 1663364986,
        uri: "/us/media-mischaracterising-aukus-and-ignoring-benefits-defence-experts-4734900",
    },
    {
        title: "Champagne Says Canada Only Wants 'Trusted' AI Partners as Huawei Decision Looms",
        publishedAt: 1636468730,
        uri: "/world/champagne-says-canada-only-wants-trusted-ai-partners-as-huawei-decision-looms-4094545",
    },
    {
        title: "Scientific Consensus—A Manufactured Construct",
        publishedAt: 1682102733,
        uri: "/opinion/scientific-consensus-a-manufactured-construct-5212845",
    },
    {
        title: "NATO ‘Does Not Have Enough Ammunition For High Intensity Conflict’—ex US General",
        publishedAt: 1657721402,
        uri: "/world/nato-does-not-have-enough-ammunition-for-high-intensity-conflict-ex-us-general-4595134",
    },
    {
        title: "New US Chip Ban Could Cripple Chinese Development of AI and Supercomputers",
        publishedAt: 1667056438,
        uri: "/china/new-us-chip-ban-could-cripple-chinese-development-of-ai-and-supercomputers-4824184",
    },
    {
        title: "Photographer Finds Old Bellow Camera From 1907, Takes Jaw-Dropping Exposures on Huge Glass Plates",
        publishedAt: 1689159602,
        uri: "/bright/photographer-finds-old-bellow-camera-from-1907-takes-jaw-dropping-exposures-on-huge-glass-plates-5326958",
    },
    {
        title: "Are Gummies a Good Way to Take Your Vitamins?",
        publishedAt: 1695488402,
        uri: "/health/gummies-are-yummy-but-are-they-the-best-way-to-take-your-vitamins-5490270",
    },
    {
        title: "Is There Really a Labor Shortage?",
        publishedAt: 1679926331,
        uri: "/bright/is-there-really-a-labor-shortage-5149285",
    },
    {
        title: "Housing and Crime Major Issues as Tory Seeks Third Term as Toronto's Mayor",
        publishedAt: 1662645148,
        uri: "/world/housing-and-crime-major-issues-as-tory-seeks-third-term-as-torontos-mayor-4714724",
    },
    {
        title: "America's Businesses Are ‘Fed Up’ With Washington Amid Overregulation, Inflation, Border Crisis: US Chamber",
        publishedAt: 1673637684,
        uri: "/us/americas-businesses-are-fed-up-with-washington-amid-overregulation-inflation-border-crisis-us-chamber-4983969",
    },
    {
        title: "Will China Soon Claim the Western Pacific?",
        publishedAt: 1655305455,
        uri: "/opinion/will-china-soon-claim-the-western-pacific-4535291",
    },
    {
        title: "Executive Order Advances Biotech-Transhumanist Agenda",
        publishedAt: 1664193227,
        uri: "/health/executive-order-advances-biotech-transhumanist-agenda-4754782",
    },
    {
        title: "‘Borrowed Swords’: China’s Military Is Built With US Technology",
        publishedAt: 1671307840,
        uri: "/china/borrowed-swords-chinas-military-is-built-with-us-technology-4897779",
    },
    {
        title: "Telco Giant CEO Urges Australia to Strengthen Cyber Security",
        publishedAt: 1661318951,
        uri: "/world/telco-giant-ceo-urges-australia-to-strengthen-cyber-security-4685006",
    },
    {
        title: "Pupils Studying International Baccalaureate Will Be Allowed to Use ChatGPT in Essays",
        publishedAt: 1677532530,
        uri: "/tech/pupils-studying-international-baccalaureate-will-be-allowed-to-use-chatgpt-in-essays-5086676",
    },
    {
        title: "New Submarines Likely to Be a 'Tri-Nation' Project: UK Defence Minister",
        publishedAt: 1675388228,
        uri: "/world/aukus-likely-to-be-a-tri-nation-project-uk-defence-minister-5030653",
    },
    {
        title: "US Sanctions on China and Russia Are Failing",
        publishedAt: 1675372372,
        uri: "/opinion/us-sanctions-on-china-and-russia-are-failing-5029169",
    },
    {
        title: "Microsoft President Sees 'New Era' of Stagnating Labor Pool",
        publishedAt: 1658395642,
        uri: "/article/microsoft-president-sees-new-era-of-stagnating-labor-pool-4608482",
    },
    {
        title: "Gmail Creator Warns ChatGPT Challenges Google's Search Engine Dominance",
        publishedAt: 1675261686,
        uri: "/tech/gmail-creator-warns-chatgpt-challenges-googles-search-engine-dominance-5025775",
    },
    {
        title: "Trudeau Reiterates Intention to Regulate Online Hate During Speech at B20 Summit in Bali",
        publishedAt: 1668523376,
        uri: "/world/trudeau-repeats-intention-to-regulate-online-hate-during-speech-at-b20-summit-in-bali-4864093",
    },
    {
        title: "Intel Launches New AI Chips, Challenging Nvidia's Market",
        publishedAt: 1652335918,
        uri: "/article/intel-launches-new-ai-chips-challenging-nvidias-market-4460323",
    },
    {
        title: "Tech Layoffs Here to Stay; Workers Must Upgrade or Be Out of Date: Tech Experts",
        publishedAt: 1679084313,
        uri: "/us/tech-layoffs-here-to-stay-workers-must-upgrade-or-be-out-of-date-tech-experts-5130885",
    },
    {
        title: "Data Scientist Gets Fired for Saying 'Black Lives Matter is Killing Black Lives' | Larry Elder",
        publishedAt: 1643131663,
        uri: "/epochtv/data-scientist-gets-fired-for-saying-black-lives-matter-is-killing-black-lives-larry-elder-4233625",
    },
    {
        title: "US Restricts Nvidia Corp. From Selling AI Chips to China and Russia, Company Says",
        publishedAt: 1662042736,
        uri: "/article/us-restricts-nvidia-corp-from-selling-ai-chips-to-china-and-russia-company-says-4704013",
    },
    {
        title: "Biden Signs Executive Order Blocking Foreign Investments in US Technology",
        publishedAt: 1663265912,
        uri: "/us/biden-signs-executive-order-blocking-foreign-investments-in-us-technology-4733323",
    },
    {
        title: "China Conducting Influence Campaigns to Interfere in US Midterm Elections: Report",
        publishedAt: 1665765124,
        uri: "/china/china-conducting-influence-campaigns-to-interfere-in-us-midterm-elections-report-4796794",
    },
    {
        title: "AI-Generated Face Swapping Video Technology Rampant in China",
        publishedAt: 1650648685,
        uri: "/china/ai-generated-face-swapping-video-technology-rampant-in-china-4417640",
    },
    {
        title: "Tesla's High-Profile Autopilot Executive Departs",
        publishedAt: 1657842404,
        uri: "/article/teslas-high-profile-autopilot-executive-departs-4597680",
    },
    {
        title: "Senate Foreign Relations Committee Approves Transfer of Nuclear Submarines to Australia",
        publishedAt: 1689529609,
        uri: "/world/senate-foreign-relations-committee-approves-transfer-of-nuclear-submarines-to-australia-5401824",
    },
    {
        title: "German Chancellor Olaf Scholz Coming to Canada to Meet With Trudeau, Business Leaders",
        publishedAt: 1660450821,
        uri: "/world/german-chancellor-olaf-scholz-coming-to-canada-to-meet-with-trudeau-business-leaders-4663315",
    },
    {
        title: "Why the Russian-Ukraine War Is a Teachable Moment for Southeast Asia",
        publishedAt: 1676663027,
        uri: "/opinion/why-the-russian-ukraine-war-is-a-teachable-moment-for-southeast-asia-5055884",
    },
    {
        title: "Deepfake Fraud Surges More Than 1,000 Percent, Insiders Say It's Just the Beginning",
        publishedAt: 1691014622,
        uri: "/tech/deepfake-fraud-surges-more-than-1000-percent-insiders-say-its-just-the-beginning-5434089",
    },
    {
        title: "Experts Say Allegation FBI is Inflating 'Domestic Violent Extremism' Numbers Looks Political",
        publishedAt: 1659310145,
        uri: "/us/padding-violent-extremism-numbers-meaningless-harmful-experts-say-4634039",
    },
    {
        title: "A Major US Company Hacked by China Agrees to Help China",
        publishedAt: 1646949607,
        uri: "/opinion/a-major-us-company-hacked-by-china-agrees-to-help-china-4323590",
    },
    {
        title: "IBM Collaborates With Quebec Government",
        publishedAt: 1644050106,
        uri: "/article/ibm-collaborates-with-quebec-government-4256649",
    },
    {
        title: "The (Block) Chaining of America",
        publishedAt: 1680124572,
        uri: "/opinion/the-block-chaining-of-america-5156360",
    },
    {
        title: "Pentagon Spending Millions on High-Altitude Spy Balloons",
        publishedAt: 1657170446,
        uri: "/us/pentagon-spending-millions-on-high-altitude-spy-balloons-4580206",
    },
    {
        title: "China’s Xi Will Kill the Golden Goose",
        publishedAt: 1655835266,
        uri: "/opinion/chinas-xi-will-kill-the-golden-goose-4545136",
    },
    {
        title: "John Robson: Beware the Governmental Word 'Continue'",
        publishedAt: 1673962880,
        uri: "/opinion/john-robson-beware-the-governmental-word-continue-4988327",
    },
    {
        title: "Conservatives Need to Recapture Institutions Subverted by Neo-Marxists: Author",
        publishedAt: 1693493448,
        uri: "/us/conservatives-need-to-recapture-institutions-subverted-by-neo-marxists-author-5483889",
    },
    {
        title: "2 California Books for Your Christmas Stockings",
        publishedAt: 1671487900,
        uri: "/opinion/two-california-books-for-your-christmas-stockings-4933783",
    },
    {
        title: "Can AI Plan the Economy?",
        publishedAt: 1697638070,
        uri: "/opinion/can-ai-plan-the-economy-5512372",
    },
    {
        title: "To Defeat China, the US Must Focus on These 5 Key Sectors",
        publishedAt: 1647547381,
        uri: "/opinion/to-defeat-china-the-us-must-focus-on-these-5-key-sectors-4335441",
    },
    {
        title: "Millions Expected to See Full Moon Eclipse",
        publishedAt: 1652551874,
        uri: "/science/millions-expected-to-see-full-moon-eclipse-4466604",
    },
    {
        title: "Proposed $874 Billion Defense Budget Cleared for House Hearings Beginning Next Week",
        publishedAt: 1686763526,
        uri: "/us/proposed-874-billion-defense-budget-cleared-for-house-hearings-beginning-next-week-5331725",
    },
    {
        title: "Navy Needs to Think Smarter to Counter China",
        publishedAt: 1662040734,
        uri: "/opinion/navy-needs-to-think-smarter-to-counter-china-4703399",
    },
    {
        title: "Demographics: Another Problem for China",
        publishedAt: 1669070917,
        uri: "/opinion/demographics-another-problem-for-china-4876702",
    },
    {
        title: "‘Climate Uncertainty and Risk'",
        publishedAt: 1695985223,
        uri: "/bright/climate-uncertainty-and-risk-5500265",
    },
    {
        title: "Will Arts in America Go the Way of Bud Light?",
        publishedAt: 1686588345,
        uri: "/opinion/will-arts-in-america-go-the-way-of-bud-light-5327417",
    },
    {
        title: "Modernizing China’s Military: Exploiting Civilian High Tech",
        publishedAt: 1645481507,
        uri: "/opinion/modernizing-chinas-military-exploiting-civilian-high-tech-4289608",
    },
    {
        title: "What Not to Put in a Resume, and Why",
        publishedAt: 1692973430,
        uri: "/bright/what-not-to-put-in-a-resume-and-why-5480392",
    },
    {
        title: "China Commission to MLB, US Firms: Stop Subsidizing China’s Abuses",
        publishedAt: 1689781523,
        uri: "/opinion/china-commission-to-mlb-us-firms-stop-subsidizing-chinas-abuses-5408758",
    },
    {
        title: "Here's Why BofA Remains Bullish On Alphabet",
        publishedAt: 1642744784,
        uri: "/article/heres-why-bofa-remains-bullish-on-alphabet-4225613",
    },
    {
        title: "Do Republicans Have the Guts Really to Take on Google?",
        publishedAt: 1666545430,
        uri: "/opinion/do-republicans-have-the-guts-really-to-take-on-google-4814964",
    },
    {
        title: "Beijing’s 'Elite Capture' Strategy Was a Success: Peter Schweizer",
        publishedAt: 1650206029,
        uri: "/china/beijings-elite-capture-strategy-was-a-success-peter-schweizer-4407071",
    },
    {
        title: "CCP Develops AI Technology Aiming for World Military Domination",
        publishedAt: 1625845670,
        uri: "/china/ccp-develops-ai-technology-aiming-for-world-military-domination-3891969",
    },
    {
        title: "The Dark Side of Social Media Use and How to Protect Children—and Yourself: Nick Janicki",
        publishedAt: 1687992931,
        uri: "/epochtv/the-dark-side-of-social-media-use-and-how-to-protect-children-and-yourself-nick-janicki-5358635",
    },
    {
        title: "Data Point to a Recession in 2023",
        publishedAt: 1675093423,
        uri: "/article/data-point-to-a-recession-in-2023-5002934",
    },
    {
        title: "Man Arrested After Allegedly Assaulting Secret Service Officer Outside White House",
        publishedAt: 1660120991,
        uri: "/us/man-arrested-after-allegedly-assaulting-secret-service-officer-outside-white-house-4654762",
    },
    {
        title: "China's JD.com Founder Wears an 'Invisible Shackle': Analyst",
        publishedAt: 1663857893,
        uri: "/china/chinas-jd-com-founder-wears-an-invisible-shackle-analyst-4744556",
    },
    {
        title: "'Mayberry RED': Putting Savings Above Security",
        publishedAt: 1659725218,
        uri: "/opinion/mayberry-red-putting-savings-above-security-4644103",
    },
    {
        title: "Chinese Regime Seeks to Control Global EV Supply Chain, Leaving US Vulnerable: Experts",
        publishedAt: 1651095602,
        uri: "/china/chinese-regime-seeks-to-control-global-ev-supply-chain-leaving-us-vulnerable-experts-4431998",
    },
    {
        title: "Combination of Russian Aggression and Chinese Technology Marks 'Epochal Shift' in Global Security: Expert",
        publishedAt: 1651009349,
        uri: "/china/combination-of-russian-aggression-and-chinese-technology-marks-epochal-shift-in-global-security-expert-4429036",
    },
    {
        title: "Hong Kong Medical Expert Says COVID Vaccine May Cause Heart Disease",
        publishedAt: 1656948314,
        uri: "/article/hong-kong-medical-expert-says-covid-vaccine-may-cause-heart-disease-4573450",
    },
    {
        title: "AUKUS Is Developing Operational Vitality, but Faces Strategic Challenges",
        publishedAt: 1682017328,
        uri: "/opinion/aukus-is-developing-operational-vitality-but-faces-strategic-challenges-5202185",
    },
    {
        title: "2030: The Year China Runs the World?",
        publishedAt: 1647642511,
        uri: "/opinion/2030-the-year-china-runs-the-world-4338242",
    },
    {
        title: "The Attack of the Subversive Elites",
        publishedAt: 1678208151,
        uri: "/opinion/the-attack-of-the-subversive-elites-5105252",
    },
    {
        title: "Two Canadian Senators Link Up With CCP Agency, Meeting With Chair and Attending ‘High-Level Conference’",
        publishedAt: 1694696875,
        uri: "/world/two-senators-link-up-with-ccp-agency-meeting-with-chair-and-attending-high-level-conference-5489262",
    },
    {
        title: "Despite Federal Tax Hikes, Revenues Are Way Down—Here Are 5 Reasons Why",
        publishedAt: 1694531791,
        uri: "/opinion/despite-federal-tax-hikes-revenues-are-way-down-here-are-5-reasons-why-5490171",
    },
    {
        title: "How China’s Push for AI Weapons Threatens the World",
        publishedAt: 1653612072,
        uri: "/epochtv/how-chinas-push-for-ai-weapons-threatens-the-world-4494169",
    },
    {
        title: "Texas Lawmaker Wants to Ban Minors From Social Media",
        publishedAt: 1659065418,
        uri: "/us/texas-lawmaker-wants-to-ban-minors-from-social-media-4629431",
    },
    {
        title: "John Robson: Promoting Social Justice, Climate Change Cooperation in Indo-Pacific Does Nothing to Deter China",
        publishedAt: 1669663109,
        uri: "/opinion/john-robson-promoting-social-justice-climate-change-cooperation-in-indo-pacific-does-nothing-to-deter-china-4889938",
    },
    {
        title: "Google Search Ads Exceed Revenue Expectations Despite 'Low Expectations'",
        publishedAt: 1658941489,
        uri: "/article/google-search-ads-exceed-revenue-expectations-despite-low-expectations-4625639",
    },
    {
        title: "Elon Musk Turning Twitter Into Totalitarian Social Credit App?",
        publishedAt: 1681497146,
        uri: "/opinion/elon-musk-turning-twitter-into-totalitarian-social-credit-app-5192229",
    },
    {
        title: "Investment by South Korea’s SK Group Will Be ‘Consequential’ to US, Biden Says",
        publishedAt: 1658899595,
        uri: "/world/investment-from-south-koreas-sk-group-will-be-consequential-to-us-says-biden-4624305",
    },
    {
        title: "Schools Using Facial Recognition Creating 'Out of Control' Surveillance Society: Campaigners",
        publishedAt: 1684947569,
        uri: "/world/schools-using-facial-recognition-creating-out-of-control-surveillance-society-campaigners-5288424",
    },
    {
        title: "UK Antitrust Regulator Looks Into Microsoft's $16 Billion Nuance Deal",
        publishedAt: 1639402712,
        uri: "/article/uk-antitrust-regulator-looks-into-microsofts-16-billion-nuance-deal-4154091",
    },
    {
        title: "China Targets Western Elites Through Twitter, Facebook, and YouTube",
        publishedAt: 1641505016,
        uri: "/opinion/china-targets-western-elites-through-twitter-facebook-and-youtube-4189424",
    },
    {
        title: "How the Supreme Court Could Reshape Free Speech Online",
        publishedAt: 1702337369,
        uri: "/article/how-the-supreme-court-could-reshape-social-media-freedom-5543004",
    },
    {
        title: "Biotech, Clean Energy Sectors in China Face Uncertain Future, Insider Says",
        publishedAt: 1673673841,
        uri: "/china/biotech-clean-energy-sectors-in-china-face-uncertain-future-insider-says-4980756",
    },
    {
        title: "'A Surveillance Company': Rights Group Sounds Alarm After Amazon Acquires iRobot",
        publishedAt: 1660027505,
        uri: "/world/a-surveillance-company-rights-group-sounds-alarm-after-amazon-acquires-irobot-4651977",
    },
    {
        title: "Just 3 Percent of CEOs Say COVID-19 Is Their Top Worry: Report",
        publishedAt: 1640701138,
        uri: "/article/just-3-percent-of-ceos-say-covid-19-is-their-top-worry-report-4180786",
    },
    {
        title: "Sunak Vows to Crack Down on University Degrees With Low Outcomes",
        publishedAt: 1659889844,
        uri: "/world/sunak-vows-to-crack-down-on-university-degrees-with-low-outcomes-4648479",
    },
    {
        title: "Robot Orders Increase 40 Percent in 1st Quarter Amid Mass Quits, Labor Shortages: Report",
        publishedAt: 1654078968,
        uri: "/article/robot-orders-increase-40-percent-in-first-quarter-amid-mass-quits-labor-shortages-report-4504633",
    },
    {
        title: "National Security Threat: China’s Eyes in America",
        publishedAt: 1663095202,
        uri: "/opinion/national-security-threat-chinas-eyes-in-america-4728373",
    },
    {
        title: "NZ Intelligence Agency Thwarts Foreign Power Plot To Steal Sensitive Technology",
        publishedAt: 1647385359,
        uri: "/world/nz-intelligence-agency-thwarts-foreign-power-plot-to-steal-sensitive-technology-4338256",
    },
    {
        title: "Qualcomm's AI Chip Chief Departs to Take Helm at Startup MemryX",
        publishedAt: 1639205602,
        uri: "/article/qualcomms-ai-chip-chief-departs-to-take-helm-at-startup-memryx-4147713",
    },
    {
        title: "Cory Morgan: Canada’s Push to Control Movement of Information on the Internet a Dangerous Path to Travel Down",
        publishedAt: 1669156170,
        uri: "/opinion/cory-morgan-canadas-push-to-control-movement-of-information-on-the-internet-a-dangerous-path-to-travel-down-4879221",
    },
    {
        title: "Chinese Military-Linked Firm Gathers American DNA, Provides COVID Tests",
        publishedAt: 1643832462,
        uri: "/opinion/chinese-military-linked-firm-gathers-american-dna-provides-covid-tests-4250811",
    },
    {
        title: "US Must Help Japan, Taiwan Boost War Preparedness To Counter Heightened China Threat: Experts",
        publishedAt: 1678316702,
        uri: "/china/us-must-help-japanese-taiwanese-militaries-boost-war-preparedness-experts-5091111",
    },
    {
        title: "CCP May Collect Top American Athletes’ DNA at Beijing Olympics, Experts Say",
        publishedAt: 1643573567,
        uri: "/china/ccp-may-collect-top-american-athletes-dna-at-beijing-olympics-experts-say-4245850",
    },
    {
        title: "Microsoft, Intel, GE Provide 'Direct Support' to Chinese Military, State Security Bodies: Report",
        publishedAt: 1644098400,
        uri: "/china/microsoft-intel-ge-provide-direct-support-to-chinese-military-state-security-bodies-report-4256768",
    },
    {
        title: "The Biomedical Security State, British Edition",
        publishedAt: 1675432842,
        uri: "/opinion/the-biomedical-security-state-british-edition-5031596",
    },
    {
        title: "While America Gave Thanks, the World Was in Revolt",
        publishedAt: 1701358624,
        uri: "/article/while-america-gave-thanks-the-world-was-in-revolt-5538762",
    },
    {
        title: "South Korea President Yoon Seeks More Canada Trade as China Looms Over Ottawa Visit",
        publishedAt: 1663991124,
        uri: "/world/south-korea-president-yoon-seeks-more-canada-trade-as-china-looms-over-ottawa-visit-4752075",
    },
    {
        title: "Scientists Worry About Arms Race in Artificial Intelligence",
        publishedAt: 1438090565,
        uri: "/article/scientists-worry-about-arms-race-in-artificial-intelligence-1667190",
    },
    {
        title: "Apple Needs to Be Held Accountable for Helping the CCP Obstruct Protesters: Author",
        publishedAt: 1670606512,
        uri: "/china/apple-needs-to-be-held-accountable-for-helping-the-ccp-obstruct-protesters-author-4914226",
    },
    {
        title: "Los Angeles Opera Presents 'Frankenstein' (1931): Opera Meets the Monster",
        publishedAt: 1668213568,
        uri: "/entertainment/los-angeles-opera-presents-frankenstein-1931-opera-meets-the-monster-4858779",
    },
    {
        title: "AI Could Eliminate 300 Million Jobs, Warns Goldman Sachs",
        publishedAt: 1680123927,
        uri: "/article/ai-could-eliminate-300-million-jobs-warns-goldman-sachs-5157862",
    },
    {
        title: "Russian Oil Tankers Going Dark, ‘Turning Off Transmissions Deliberately’ to Avoid Sanctions",
        publishedAt: 1648744599,
        uri: "/world/russian-oil-tankers-going-dark-turning-off-transmissions-deliberately-to-avoid-sanctions-4374398",
    },
    {
        title: "'Like We Just Split the Atom': ChatGPT AI Shakes Up Tech",
        publishedAt: 1670295708,
        uri: "/article/like-we-just-split-the-atom-chatgpt-ai-shakes-up-tech-4905483",
    },
    {
        title: "Remembering Leszek Kolakowski",
        publishedAt: 1695643816,
        uri: "/opinion/remembering-leszek-kolakowski-5497693",
    },
    { title: "US Bombs Houthis", publishedAt: 1705038626, uri: "/article/us-bombs-houthis-5563921" },
    {
        title: "Health Effects of Fluoride: The Science",
        publishedAt: 1682642494,
        uri: "/health/health-effects-of-fluoride-the-science-5199260",
    },
    {
        title: "'The Battle Over Data Is Also the Battle Over the Future': Dr. Arthur Herman on US–China Data War",
        publishedAt: 1628991026,
        uri: "/epochtv/the-battle-over-data-is-also-the-battle-over-the-future-dr-arthur-herman-on-us-china-data-war-3948169",
    },
    {
        title: "Biden Administration Extends China Chip Curbs to Macau",
        publishedAt: 1674223645,
        uri: "/china/biden-administration-extends-china-chip-curbs-to-macau-4997434",
    },
    {
        title: "Japan's SoftBank Drops Sale of Arm, Plans IPO",
        publishedAt: 1644389410,
        uri: "/article/japans-softbank-drops-sale-of-arm-plans-ipo-4263851",
    },
    {
        title: "Biden Wraps Visit to South Korea, Highlights Hyundai’s Major US Investment Pledge",
        publishedAt: 1653289519,
        uri: "/world/biden-wraps-visit-to-south-korea-highlights-hyundais-major-us-investment-pledge-4483525",
    },
    {
        title: "US Would Face ‘Deep and Immediate Recession’ If Chips from Taiwan Stop Flowing, Warns Commerce Secretary",
        publishedAt: 1658460758,
        uri: "/china/us-would-face-deep-and-immediate-recession-if-chips-from-taiwan-stop-flowing-warns-commerce-secretary-4613735",
    },
    {
        title: "The CCP’s Covert Influence in the United States 'Rather Extraordinary': Former US Intelligence Official",
        publishedAt: 1657202336,
        uri: "/china/the-ccps-covert-influence-in-the-united-states-rather-extraordinary-former-us-intelligence-official-4581070",
    },
    {
        title: "A Dubious Contribution to Climate Change Alarmism Literature",
        publishedAt: 1676021457,
        uri: "/opinion/a-dubious-contribution-to-climate-change-alarmism-literature-5039950",
    },
    {
        title: "'Toxic' Values Undermining US Ability to Tackle Beijing: Senator",
        publishedAt: 1663299461,
        uri: "/us/toxic-values-undermining-us-ability-to-tackle-beijing-senator-4734585",
    },
    {
        title: "Academy Award-Winning Actor William Hurt Dies at 71: Family",
        publishedAt: 1647206527,
        uri: "/entertainment/academy-award-winning-actor-william-hurt-dies-at-71-family-4334861",
    },
    {
        title: "Modi Aims to Make India a Global Hub for Semiconductors",
        publishedAt: 1651308215,
        uri: "/world/modi-aims-to-make-india-a-hub-for-global-semiconductors-4437592",
    },
    {
        title: "CCP's 20th National Congress Sends 'Chilling' Message to Democracies: Taiwan's Top Envoy in Canada",
        publishedAt: 1667415781,
        uri: "/world/ccps-20th-national-congress-sends-chilling-message-to-democracies-taiwans-top-envoy-in-canada-4837427",
    },
    {
        title: "Alfi Inks AI Tech Deal for Improved Passenger Experience at BWI Thurgood Marshall Airport",
        publishedAt: 1642748257,
        uri: "/article/alfi-inks-ai-tech-deal-for-improved-passenger-experience-at-bwi-thurgood-marshall-airport-4225113",
    },
    {
        title: "Jacob Siegel (Part 2): Pandemic Censorship and the Technocratic Betrayal of the American Voter",
        publishedAt: 1694564440,
        uri: "/epochtv/part-2-jacob-siegel-on-pandemic-censorship-and-the-technocratic-betrayal-of-the-american-voter-5488754",
    },
    {
        title: "China Government Entity Tried to Set Up TikTok Account for Propaganda Targeting Western Audiences",
        publishedAt: 1660230163,
        uri: "/china/china-government-entity-tried-to-set-up-tiktok-account-for-propaganda-targeting-western-audiences-4649460",
    },
    {
        title: "China Well On Its Way to Becoming Global ‘Cyber Superpower’: Expert",
        publishedAt: 1645130474,
        uri: "/china/china-well-on-its-way-to-becoming-global-cyber-superpower-expert-4284704",
    },
    {
        title: "Australia Unveils New Research Strategy Post Bushfires and COVID-19",
        publishedAt: 1649470878,
        uri: "/world/australia-unveils-new-research-strategy-post-bushfires-and-covid-19-4389076",
    },
    {
        title: "Salt Lake City Named Top US City for Minimalist Living",
        publishedAt: 1678906859,
        uri: "/real-estate/salt-lake-city-named-top-us-city-for-minimalist-living-5123209",
    },
    {
        title: "RealNetworks Founder/CEO Robert Glaser Seeks to Buy up All Outstanding Shares",
        publishedAt: 1652170329,
        uri: "/article/realnetworks-founder-ceo-robert-glaser-seeks-to-buy-up-all-outstanding-shares-4454944",
    },
    {
        title: "US and European Leaders Warn About China Setting Standards on AI",
        publishedAt: 1626347156,
        uri: "/china/us-and-european-leaders-warn-about-china-setting-standards-on-ai-3902807",
    },
    {
        title: "Infosys, Australian Open Extend Collaboration Until 2026",
        publishedAt: 1639716324,
        uri: "/article/infosys-australian-open-extend-collaboration-until-2026-4162603",
    },
    {
        title: "Elon Musk’s Brain Chip Company Neuralink Hiring Clinical Trial Director to Manage Clinical Trials",
        publishedAt: 1643035542,
        uri: "/tech/elon-musks-brain-chip-company-neuralink-hiring-clinical-trial-director-to-manage-clinical-trials-4232094",
    },
    {
        title: "This Day In Market History: World Chess Champion Defeats IBM Supercomputer",
        publishedAt: 1645170671,
        uri: "/article/this-day-in-market-history-world-chess-champion-defeats-ibm-supercomputer-4284886",
    },
    {
        title: "Xi’s New State-Driven Innovation Strategy Could Be a Disaster for China",
        publishedAt: 1650471923,
        uri: "/opinion/xis-new-state-driven-innovation-strategy-could-be-a-disaster-for-china-4409967",
    },
    {
        title: "Treatment Versus No Treatment of Localized Prostate Cancer Had Similar Results Over 15 Years, 1 Question Raised",
        publishedAt: 1681747248,
        uri: "/health/treatment-vs-no-treatment-of-localized-prostate-cancer-had-similar-results-over-15-years-1-question-raised-5188264",
    },
    {
        title: "Microsoft's $16 Billion Nuance Bid Gets EU Antitrust Approval",
        publishedAt: 1640104656,
        uri: "/article/microsofts-16-billion-nuance-bid-gets-eu-antitrust-approval-4169972",
    },
    {
        title: "The Chinese Military Case for a Coup Against Xi Jinping",
        publishedAt: 1690915700,
        uri: "/opinion/the-chinese-military-case-for-a-coup-against-xi-jinping-5426621",
    },
    {
        title: "GM Invests in Oculii, Radar Software Maker for Self-Driving Cars",
        publishedAt: 1631560448,
        uri: "/article/gm-invests-in-oculii-radar-software-maker-for-self-driving-cars-3994856",
    },
    {
        title: "Australia's Defense Budget Hits 20-year High",
        publishedAt: 1666920067,
        uri: "/world/australias-defense-budget-hits-20-year-high-4823453",
    },
    {
        title: "Finland Seeks to Enhance Ties With Australia",
        publishedAt: 1670290939,
        uri: "/world/finland-seeks-to-enhance-ties-with-australia-4899646",
    },
    {
        title: "Orange County IDA Top Executive Charts New Course After Corruption Scandal",
        publishedAt: 1681237874,
        uri: "/us/orange-county-ida-top-executive-charts-new-course-following-corruption-scandals-5186891",
    },
    {
        title: "China Races Into Cyber Totalitarianism With Tightened Internet Rules: Experts",
        publishedAt: 1658847501,
        uri: "/china/china-races-into-cyber-totalitarianism-with-tightened-internet-rules-experts-4621886",
    },
    {
        title: "Lawmaker Sees 'Moonshot Moment' for All-Out Effort to Propel US Tech, Fight China Threat",
        publishedAt: 1677624400,
        uri: "/us/lawmaker-sees-moonshot-moment-for-all-out-effort-to-propel-us-tech-fight-china-threat-5089024",
    },
    {
        title: "SoftBank Faces Investment Difficulty in China as US Bans Chinese Military Firms",
        publishedAt: 1640456177,
        uri: "/china/softbank-faces-investment-difficulty-in-china-as-us-bans-chinese-military-firms-4177334",
    },
    {
        title: "Biden Asks Congress to End Social Media Immunity at White House Summit on 'Hate-Fueled Violence'",
        publishedAt: 1663300291,
        uri: "/us/biden-asks-congress-to-end-social-media-immunity-denounces-white-supremacy-at-wh-summit-on-hate-fueled-violence-4734570",
    },
    {
        title: "NZ's Absence From New Military Alliance ‘Disappointing’: NZ Opposition Leader",
        publishedAt: 1631759465,
        uri: "/world/nzs-absence-from-new-military-alliance-disappointing-nz-opposition-leader-4000034",
    },
    {
        title: "Senate Backs Measures Tackling China Tech Investments, CCP Farmland Purchases",
        publishedAt: 1690365144,
        uri: "/us/senate-backs-measures-tackling-china-tech-investments-ccp-farmland-purchases-5423158",
    },
    {
        title: "Here Are the Bills, Big and Small, That Politicians Will Be Looking at Next Year",
        publishedAt: 1671811080,
        uri: "/world/here-are-the-bills-big-and-small-that-politicians-will-be-looking-at-next-year-4942687",
    },
    {
        title: "China, Mind Control Weapons, and the Future of Warfare",
        publishedAt: 1640726280,
        uri: "/opinion/china-mind-control-weapons-and-the-future-of-warfare-4177146",
    },
    {
        title: "Biden’s New National Defense Strategy Already Failed",
        publishedAt: 1667836591,
        uri: "/opinion/bidens-new-national-defense-strategy-already-failed-4846745",
    },
    {
        title: "Drone Used to Locate Fallen Meteorite in Australia",
        publishedAt: 1647652839,
        uri: "/world/drone-used-to-locate-fallen-meteorite-in-australia-4347739",
    },
    {
        title: "Biden Must Solve the 'China Trap': Changing the Course of US Businesses to Save Them",
        publishedAt: 1644964103,
        uri: "/opinion/biden-must-solve-the-china-trap-changing-the-course-of-us-businesses-to-save-them-4275030",
    },
    {
        title: "SenseTime Offers Blueprint for Banished Chinese Stocks",
        publishedAt: 1641499733,
        uri: "/opinion/sensetime-offers-blueprint-for-banished-chinese-stocks-4196066",
    },
    {
        title: "What If Xi Jinping Survives the Present Challenges in China?",
        publishedAt: 1695157192,
        uri: "/opinion/what-if-xi-jinping-survives-the-present-challenges-in-china-5489952",
    },
    {
        title: "US Senators Reintroduce 'Gene Act' to Protect Americans' Genetic Data From Chinese Regime",
        publishedAt: 1686587709,
        uri: "/china/us-senators-reintroduce-gene-act-to-protect-americans-genetic-data-from-chinese-regime-5326917",
    },
    { title: "The Swarm War Future?", publishedAt: 1639582923, uri: "/opinion/the-swarm-war-future-4158867" },
    {
        title: "EU Signs Ukraine Aid Deal, New Partnerships on Green, Digital World Ambitions",
        publishedAt: 1662448267,
        uri: "/world/eu-signs-ukraine-aid-deal-new-partnerships-on-green-digital-world-ambitions-4712543",
    },
    {
        title: "Shen Yun Performing Arts Brings Hope, Inspiration to Audiences",
        publishedAt: 1672793797,
        uri: "/shenyun/shen-yun-performing-arts-brings-hope-inspiration-to-audiences-4944539",
    },
    {
        title: "Ultimate Coffee Makers: A Guide to Coffee and Espresso Machines for Lovers of the Bean",
        publishedAt: 1653921270,
        uri: "/bright/ultimate-coffee-makers-a-guide-to-coffee-and-espresso-machines-for-lovers-of-the-bean-4436312",
    },
    {
        title: "Just 16 Percent of Organizations Rank Employee Retention and Engagement as Top Priority: Report",
        publishedAt: 1637758362,
        uri: "/article/just-16-percent-of-organizations-rank-employee-retention-and-engagement-as-top-priority-report-4121733",
    },
    {
        title: "Telefonica Reaches Agreement to Cut About 2,700 Jobs in Spain",
        publishedAt: 1640701282,
        uri: "/article/telefonica-reaches-agreement-to-cut-about-2700-jobs-in-spain-4180922",
    },
    {
        title: "South Korea, US and Japan Issue Declaration Amid Increasing Tensions With Pyongyang, Beijing",
        publishedAt: 1668664657,
        uri: "/world/south-korea-us-and-japan-issue-declaration-amid-increasing-tensions-with-pyongyang-beijing-4868689",
    },
    {
        title: "New AI Technology Detects Cancer Mutations in Minutes",
        publishedAt: 1668530208,
        uri: "/health/new-ai-technology-detects-cancer-mutations-in-minutes-4862057",
    },
    {
        title: "The Naval Balance of Power in the South China Sea Has Shifted Dramatically in Favor of China",
        publishedAt: 1644531942,
        uri: "/opinion/the-naval-balance-of-power-in-the-south-china-sea-has-shifted-dramatically-in-favor-of-china-4259722",
    },
    {
        title: "China Trade Restrictions Are Necessary for National Defense",
        publishedAt: 1670360506,
        uri: "/opinion/china-trade-restrictions-are-necessary-for-national-defense-4904683",
    },
    {
        title: "Musk's 'AI Day' Confronts Tough Questions About Tesla's Technology",
        publishedAt: 1629389939,
        uri: "/article/musks-ai-day-confronts-tough-questions-about-teslas-technology-3956000",
    },
    {
        title: "Report: Spy Cameras, Blackmail Rampant in China",
        publishedAt: 1640917698,
        uri: "/epochtv/report-spy-cameras-blackmail-rampant-in-china-4186308",
    },
    {
        title: "China Launches New Satellite While AUKUS Raises Stakes",
        publishedAt: 1649444331,
        uri: "/opinion/china-launches-new-satellite-while-aukus-raises-stakes-4390963",
    },
    {
        title: "Beijing Marks Its Territory: Xi Warns Against Meddling in Central Asia",
        publishedAt: 1663736270,
        uri: "/china/beijing-marks-its-territory-xi-warns-against-meddling-in-central-asia-4732350",
    },
    {
        title: "House Passes Senate GOP Bill to Fast-Track New US Semiconductor Factories",
        publishedAt: 1659143564,
        uri: "/us/house-passes-senate-gop-bill-to-fast-track-new-us-semi-conductor-factories-4630817",
    },
    {
        title: "Marine Experts Create Library Organising the Orchestra of the Ocean",
        publishedAt: 1645841656,
        uri: "/world/marine-experts-create-library-organising-the-orchestra-of-the-ocean-4299449",
    },
    {
        title: "China Tech Shares Sink as US Export Curbs Raise Chip Sector Hurdles",
        publishedAt: 1665459575,
        uri: "/china/china-tech-shares-sink-as-us-export-curbs-raise-chip-sector-hurdles-4786334",
    },
    {
        title: "Civilian AI Companies at the Forefront of US Strategy to Defend Taiwan",
        publishedAt: 1635211309,
        uri: "/china/civilian-ai-companies-at-the-forefront-of-us-strategy-to-defend-taiwan-4060317",
    },
    {
        title: "Chinese Leader Fast Tracks to Military Modernization at All Cost",
        publishedAt: 1629750746,
        uri: "/opinion/chinese-leader-fast-tracks-to-military-modernization-at-all-cost-3947215",
    },
    {
        title: "'Data Is the New Strategic Commodity of the 21st Century': Arthur Herman on China's Chip Race",
        publishedAt: 1657412283,
        uri: "/epochtv/data-is-the-new-strategic-commodity-of-the-21st-century-arthur-herman-on-chinas-chip-race-4586583",
    },
    {
        title: "Southern California Hyundai Headquarters to Develop Flying Taxis",
        publishedAt: 1644023971,
        uri: "/us/southern-california-hyundai-headquarters-to-develop-flying-taxis-4257819",
    },
    {
        title: "The Alarming Dangers of Synthetic Marijuana",
        publishedAt: 1686769555,
        uri: "/opinion/the-alarming-dangers-of-synthetic-marijuana-5333394",
    },
    {
        title: "Biden’s New Policy Funds China’s Military, Supports Slavery, Achieves Nothing",
        publishedAt: 1655306070,
        uri: "/opinion/bidens-new-policy-funds-chinas-military-supports-slavery-achieves-nothing-4535323",
    },
    {
        title: "Tech’s Dubious Green Pose",
        publishedAt: 1658419804,
        uri: "/opinion/techs-dubious-green-pose-4612746",
    },
    {
        title: "IN-DEPTH: Leaks, False Information, Misuse Lead Many to Reconsider AI",
        publishedAt: 1681542971,
        uri: "/tech/in-depth-leaks-false-information-misuse-lead-many-to-reconsider-ai-5192907",
    },
    {
        title: "Efforts to Repeal American Shipping Act Only Aid China",
        publishedAt: 1660674760,
        uri: "/opinion/efforts-to-repeal-american-shipping-laws-only-aid-china-4666108",
    },
    {
        title: "China Weaponizes the WTO Against America",
        publishedAt: 1671046537,
        uri: "/opinion/china-weaponizes-the-wto-against-america-4922416",
    },
    {
        title: "Norfolk Southern Announces Safety Plan Amid Train Derailment Aftermath",
        publishedAt: 1678172077,
        uri: "/us/norfolk-southern-announces-safety-plan-amid-train-derailment-aftermath-5104524",
    },
    {
        title: "TikTok’s In-App Browser Can Monitor Clicks and Keystrokes: Researcher",
        publishedAt: 1662830324,
        uri: "/china/tiktoks-in-app-browser-can-monitor-clicks-and-keystrokes-researcher-4721504",
    },
    {
        title: "The Disruptive Military Technologies That the Pentagon Is Spending Nearly $150 Billion On",
        publishedAt: 1681438494,
        uri: "/us/pentagon-officials-say-integrating-new-weapons-systems-can-cause-battlefield-disruption-5193557",
    },
    {
        title: "Expectations High as Canada Prepares to Reveal Plan for Aging North American Defences",
        publishedAt: 1655675215,
        uri: "/world/expectations-high-as-canada-prepares-to-reveal-plan-for-aging-north-american-defences-4543777",
    },
    {
        title: "Tory MPs Call on Liberal Government to Ban Huawei From 5G Network",
        publishedAt: 1637710974,
        uri: "/world/tory-mps-call-on-liberal-government-to-ban-huawei-4120414",
    },
    {
        title: "China’s 'Robo-Yak': Not Its Best Foot Forward",
        publishedAt: 1645650467,
        uri: "/opinion/chinas-robo-yak-not-its-best-foot-forward-4295190",
    },
    {
        title: "AUKUS Is the New ANZUS: Diplomacy Expert",
        publishedAt: 1631779407,
        uri: "/world/aukus-is-the-new-anzus-diplomacy-expert-4000246",
    },
    {
        title: "Progress and Its Deluded Enemies",
        publishedAt: 1663355654,
        uri: "/opinion/progress-and-its-deluded-enemies-4736094",
    },
    {
        title: "Jacob Siegel on the Technocratic Brave New World: Part 2",
        publishedAt: 1695334037,
        uri: "/us/jacob-siegel-on-the-technocratic-brave-new-world-part-2-post-5494479",
    },
    {
        title: "The Rise of AI: Why Are So Many American Companies Helping the Chinese Regime?",
        publishedAt: 1632101631,
        uri: "/opinion/the-rise-of-ai-why-are-so-many-american-companies-helping-the-chinese-regime-4002048",
    },
    {
        title: "Mike Benz (Part 2): How the ‘Department of Dirty Tricks’ Turned on Americans",
        publishedAt: 1675552425,
        uri: "/epochtv/mike-benz-part-2-how-the-department-of-dirty-tricks-turned-on-americans-5032982",
    },
    {
        title: "IN-DEPTH: CCP Uses Colossal Hydropower Dams to Control Mekong River and Southeast Asia",
        publishedAt: 1692305971,
        uri: "/world/in-depth-ccp-uses-colossal-hydropower-dams-to-control-mekong-river-and-southeast-asia-5462138",
    },
    {
        title: "Biden Administration's Semiconductor Export Controls Face Mounting Hurdles",
        publishedAt: 1666207570,
        uri: "/us/biden-administrations-semiconductor-export-controls-face-mounting-hurdles-4806100",
    },
    {
        title: "Why We Lost Trust in the Expert Class",
        publishedAt: 1659631576,
        uri: "/opinion/why-we-lost-trust-in-the-expert-class-4643631",
    },
    {
        title: "On China, It Isn’t Just the Economy, Stupid",
        publishedAt: 1673646653,
        uri: "/opinion/on-china-it-isnt-just-the-economy-stupid-4984313",
    },
    {
        title: "Nvidia Features as Top Pick By UBS",
        publishedAt: 1640247226,
        uri: "/article/nvidia-features-as-top-pick-by-ubs-4171608",
    },
    {
        title: "HK Government Admits LeaveHomeSafe App Contains Facial Recognition Feature; Experts Call For Full Transparency",
        publishedAt: 1652202285,
        uri: "/china/hk-government-admits-leavehomesafe-app-contains-facial-recognition-feature-experts-call-for-full-transparency-4454125",
    },
    {
        title: "IN-DEPTH: Ukraine 'Endgame' Likely Means Intensified US-NATO 'Long Game' Against Russia: Experts",
        publishedAt: 1683268223,
        uri: "/world/in-depth-ukraine-endgame-likely-means-intensified-us-nato-long-game-against-russia-experts-5244029",
    },
    {
        title: "Human Cyborgs Are Just the Beginning.",
        publishedAt: 1664474431,
        uri: "/health/human-cyborgs-are-just-the-beginning-4764093",
    },
    {
        title: "Tech Manager Leaves China, Citing Ubiquitous Digital Surveillance",
        publishedAt: 1663601093,
        uri: "/article/young-manager-leaves-china-oppressed-by-ubiquitous-digital-surveillance-4739625",
    },
    {
        title: "Evergrande to Miss Earnings Deadline, Says Lenders Have Seized $2 Billion in Cash",
        publishedAt: 1647974383,
        uri: "/china/evergrande-to-miss-earnings-deadline-says-lenders-have-seized-2-billion-in-cash-4354493",
    },
    {
        title: "China’s Largest Industrial City Suzhou Forced Into COVID-19 Lockdown",
        publishedAt: 1650565027,
        uri: "/article/chinas-largest-industrial-city-suzhou-forced-into-covid-19-lockdown-4415269",
    },
    {
        title: "FIFA to Use New High-Tech for Offside Calls at World Cup",
        publishedAt: 1656742307,
        uri: "/sports/fifa-to-use-new-high-tech-for-offside-calls-at-world-cup-4571159",
    },
    {
        title: "Is Beijing Weaponizing Your DNA?",
        publishedAt: 1638815018,
        uri: "/opinion/is-beijing-weaponizing-your-dna-4134462",
    },
    {
        title: "Taiwan Joins Quantum Computing Race, Establishes National R&D Team",
        publishedAt: 1648441451,
        uri: "/china/taiwan-joins-quantum-computing-race-establishes-national-rd-team-4363962",
    },
    {
        title: "Rogers to Spend $150 Million on Customer Credits After July 8 Outage",
        publishedAt: 1658978495,
        uri: "/world/rogers-to-spend-150-million-on-customer-credits-after-july-8-outage-4626596",
    },
    {
        title: "Childhood Obesity: Are Drugs and Surgery the Answer?",
        publishedAt: 1675767700,
        uri: "/health/childhood-obesity-are-drugs-and-surgery-the-answer-4985667",
    },
    {
        title: "Transhumanist Biodigital Vision for Future Advanced by Pandemic, Professor Says",
        publishedAt: 1642621965,
        uri: "/world/transhumanist-biodigital-vision-for-future-advanced-by-pandemic-professor-says-4220882",
    },
    {
        title: "Staying Safe From Sepsis",
        publishedAt: 1660755636,
        uri: "/health/staying-safe-from-sepsis-4670810",
    },
    {
        title: "Counterfeit Cash Financed Midterm Democrats",
        publishedAt: 1668749554,
        uri: "/opinion/counterfeit-cash-financed-midterm-democrats-4870573",
    },
    {
        title: "Amazon Plans to Invest $1 Billion Into Its Industrial Innovation Fund",
        publishedAt: 1651083494,
        uri: "/article/amazon-plans-to-invest-1-billion-into-its-industrial-innovation-fund-4418968",
    },
    {
        title: "Why Are America’s Wealthiest People Enabling Communist China?",
        publishedAt: 1643063749,
        uri: "/opinion/why-are-americas-wealthiest-people-enabling-communist-china-4232732",
    },
    {
        title: "Chip Startups Using Light Instead of Wires Gaining Speed and Investments",
        publishedAt: 1651045229,
        uri: "/article/chip-startups-using-light-instead-of-wires-gaining-speed-and-investments-4428750",
    },
    {
        title: "COVID Insider Farrar and His Eugenics Agenda",
        publishedAt: 1675786726,
        uri: "/opinion/covid-insider-farrar-and-his-eugenics-agenda-5039794",
    },
    {
        title: "Salesforce Raises Full-Year Revenue Outlook on Hybrid Work Boost",
        publishedAt: 1632401586,
        uri: "/article/salesforce-raises-full-year-revenue-outlook-on-hybrid-work-boost-4012693",
    },
    {
        title: "Samsung Electronics Co. Investing $360 Billion to Build Chips, Boost Biotech Business",
        publishedAt: 1653425262,
        uri: "/article/samsung-electronics-co-investing-360-billion-to-build-chips-boost-biotech-business-4487381",
    },
    {
        title: "EXCLUSIVE: US Bid to Rejoin UN Education Agency Could Be Derailed by House GOP",
        publishedAt: 1687827560,
        uri: "/us/exclusive-us-bid-to-rejoin-un-education-agency-could-be-derailed-by-house-gop-5358125",
    },
    {
        title: "Hewlett Packard Enterprise Wins $2 Billion Computing Service Deal With NSA",
        publishedAt: 1630515767,
        uri: "/article/hewlett-packard-enterprise-wins-2-billion-computing-service-deal-with-nsa-3975937",
    },
    {
        title: "US Tech Restrictions Curb China's Military Ambitions",
        publishedAt: 1672081777,
        uri: "/opinion/us-tech-restrictions-curb-chinas-military-ambitions-4945844",
    },
    {
        title: "Hong Kong's Leader Admits Loss of 140,000 Workers in Past Two Years",
        publishedAt: 1666377564,
        uri: "/china/hong-kongs-leader-admits-loss-of-140000-workers-in-past-two-years-4811351",
    },
    {
        title: "AI-Powered Robots’ Limited Capabilities Still Open Exciting, Scary Futures",
        publishedAt: 1677081310,
        uri: "/us/ai-powered-robots-limited-capabilities-still-open-exciting-scary-futures-5072925",
    },
    {
        title: "What Experts Think About the Existential Risks of Artificial Intelligence",
        publishedAt: 1432375217,
        uri: "/article/what-ai-experts-think-about-the-existential-risk-of-ai-1366189",
    },
    {
        title: "China Launches Military Exercises in South China Sea as Biden Arrives in Asia",
        publishedAt: 1653075914,
        uri: "/china/china-launches-military-exercises-in-south-china-sea-as-biden-arrives-in-asia-4480008",
    },
    {
        title: "Australia and New Zealand Get Feet Wet in 4-day Work Week Trial",
        publishedAt: 1659944549,
        uri: "/world/australia-and-new-zealand-get-feet-wet-in-4-day-work-week-trial-4649344",
    },
    {
        title: "Australia-UK Deepen Security Ties, Welcome AUKUS Progress",
        publishedAt: 1645166805,
        uri: "/world/australia-uk-deepen-security-ties-welcome-aukus-progress-4286449",
    },
    {
        title: "Biden, AUKUS Leaders Announce Hypersonic Missile Plan",
        publishedAt: 1649196765,
        uri: "/us/biden-aukus-leaders-announce-hypersonic-missile-plan-4385175",
    },
    {
        title: "'Treasure Trove': GOP Investigator Says House Republicans Have Hunter Biden's Laptop",
        publishedAt: 1650385479,
        uri: "/us/treasure-trove-gop-investigator-says-house-republicans-have-hunter-bidens-laptop-4413579",
    },
    {
        title: "Future of Warfare: US, China Race for AI Dominance",
        publishedAt: 1639014511,
        uri: "/epochtv/future-of-warfare-us-china-race-for-ai-dominance-4146878",
    },
    {
        title: "NSA Says 'No Backdoors' in New Quantum Resistant Encryption Scheme",
        publishedAt: 1652545359,
        uri: "/us/nsa-says-no-backdoors-in-new-quantum-resistant-encryption-scheme-4466522",
    },
    {
        title: "Chinese Tech Giant Alibaba Linked to Xinjiang Repression by Funding Facial Recognition Technology: Report",
        publishedAt: 1650034569,
        uri: "/china/alibaba-linked-to-uyghur-genocide-in-xinjiang-by-funding-facial-recognition-technology-report-4406294",
    },
    {
        title: "The Disappearing American?",
        publishedAt: 1657229905,
        uri: "/opinion/the-disappearing-american-4584145",
    },
    {
        title: "Australian Professor Leaves for China After Ethnic Facial Recognition Research Found to Be Unethical",
        publishedAt: 1632382145,
        uri: "/world/australian-professor-runs-to-china-after-ethnic-facial-recognition-research-found-to-be-unethical-4010238",
    },
    {
        title: "What's Under the 'Hood' of Self-Driving Cars?",
        publishedAt: 1640330144,
        uri: "/tech/whats-under-the-hood-of-self-driving-cars-4174597",
    },
    {
        title: "Engineer Warns About Google AI‘s ‘Sentient’ Behavior, Gets Suspended",
        publishedAt: 1655161355,
        uri: "/tech/google-engineer-warns-about-sentient-behavior-of-companys-ai-gets-suspended-4531209",
    },
    {
        title: "COVID Jabs Have Erased 25 Years of Health Gains",
        publishedAt: 1672782427,
        uri: "/health/covid-jabs-have-erased-25-years-of-health-gains-4960041",
    },
    {
        title: "6 Takeaways From First Weaponization of the Federal Government Hearing",
        publishedAt: 1675999130,
        uri: "/us/6-takeaways-from-first-weaponization-of-the-federal-government-hearing-5047180",
    },
    {
        title: "They Hit the Pause Button and the Music Stopped",
        publishedAt: 1680713200,
        uri: "/opinion/they-hit-the-pause-button-and-the-music-stopped-5174096",
    },
    {
        title: "Tax Evasion Crackdown: IRS Bolstering Resources for Scrutinizing Partnerships, High-Income Earners",
        publishedAt: 1696645248,
        uri: "/us/tax-evasion-crackdown-irs-bolstering-resources-for-scrutinizing-partnerships-high-income-earners-5505562",
    },
    {
        title: "India Bans 54 More Chinese Apps Over National Security Concerns",
        publishedAt: 1644868193,
        uri: "/china/india-bans-54-more-chinese-apps-over-national-security-concerns-4276541",
    },
    {
        title: "Tesla Vehicle Deliveries Fall Short in Q3, Causing Shares to Dip",
        publishedAt: 1664892577,
        uri: "/article/tesla-vehicle-deliveries-fall-short-in-q3-causing-shares-to-dip-4771403",
    },
    {
        title: "Australia, US, UK to Collaborate on Hypersonic Weapon Development",
        publishedAt: 1649208231,
        uri: "/world/australia-us-uk-to-collaborate-on-hypersonic-weapon-development-4385479",
    },
    {
        title: "EXCLUSIVE: Tennessee AG Skrmetti on Fighting Federal Overreach",
        publishedAt: 1704755074,
        uri: "/article/in-the-foxhole-tennessee-takes-on-biden-admin-wall-street-big-tech-5557325",
    },
    {
        title: "Red Tape Will Strangle Labor Party’s Proposed DARPA-Lookalike: Defence Industry Expert",
        publishedAt: 1651209206,
        uri: "/world/red-tape-will-strangle-labor-partys-proposed-darpa-lookalike-defence-industry-expert-4435404",
    },
    {
        title: "Google's 'Dreaming' Artificial Intelligence Shows What Real Machine 'Learning' Looks Like",
        publishedAt: 1435149136,
        uri: "/article/googles-dreaming-ai-shows-what-real-machine-learning-looks-like-1401624",
    },
    {
        title: "How to Finance a Startup Business",
        publishedAt: 1669750682,
        uri: "/article/how-to-finance-a-startup-business-4892947",
    },
    {
        title: "Top US General Warns of 'Potential International Instability'",
        publishedAt: 1620275343,
        uri: "/world/top-us-general-warns-of-potential-international-instability-3804412",
    },
    {
        title: "Starbucks Links With Amazon Go for First Cashier-Less Cafe",
        publishedAt: 1637243002,
        uri: "/article/starbucks-links-with-amazon-go-for-first-cashier-less-cafe-4111294",
    },
    {
        title: "The Five C’s to Better Eating",
        publishedAt: 1667905248,
        uri: "/health/the-five-cs-to-better-eating-4834787",
    },
    {
        title: "Salesforce Rival Freshworks Raises $1.03 Billion in US IPO, Valued at $10.13 Billion",
        publishedAt: 1632380958,
        uri: "/article/salesforce-rival-freshworks-raises-1-03-billion-in-us-ipo-valued-at-10-13-billion-4011463",
    },
    {
        title: "CCP's Militarization of South China Sea Islands Marks 'Significant Change' in Balance of Power in Region: Analysts",
        publishedAt: 1648412631,
        uri: "/china/chinas-militarization-of-south-china-sea-islands-marks-significant-change-in-balance-of-power-in-region-analysts-4365487",
    },
    {
        title: "Companies Must Improve Internal Culture to Thwart Cyberthreats, Panelists Say",
        publishedAt: 1676320208,
        uri: "/tech/companies-must-improve-internal-culture-to-thwart-cyber-threats-panelists-say-5054391",
    },
    {
        title: "These 3 Mega Caps Are Bear Market Buys",
        publishedAt: 1658516221,
        uri: "/bright/these-3-mega-caps-are-bear-market-buys-4615238",
    },
    {
        title: "Paradigm Shift in the US Labor Market",
        publishedAt: 1661872292,
        uri: "/opinion/paradigm-shift-in-the-us-labor-market-4696389",
    },
    {
        title: "Fauci Stepping Down Because 'His Presence Is No Longer Politically Sustainable': Attorney",
        publishedAt: 1661786219,
        uri: "/article/fauci-stepping-down-because-his-presence-is-no-longer-politically-sustainable-attorney-4681505",
    },
    {
        title: "Pentagon, Chinese Military Officials Hold ‘Frank’ Talks, Weeks After AUKUS Pact",
        publishedAt: 1632994472,
        uri: "/china/pentagon-chinese-military-officials-hold-frank-talks-weeks-after-aukus-pact-4024713",
    },
    {
        title: "Grammarly Continues to Pay Full Salary, Benefits to Ukraine Employees Who Joined Army: CEO",
        publishedAt: 1647960614,
        uri: "/world/grammarly-continues-to-pay-full-salary-benefits-to-ukraine-employees-whogram-joined-army-ceo-4353550",
    },
    {
        title: "CCP Seeks 'All-Out Push' for New Weapons After Reported Test of Hypersonic Missile",
        publishedAt: 1635533964,
        uri: "/china/ccp-seeks-all-out-push-for-new-weapons-after-reported-test-of-hypersonic-missile-4076228",
    },
    {
        title: "Parents Wary of Digital Hall Pass That Records Students’ Movements",
        publishedAt: 1661373360,
        uri: "/us/parents-wary-of-digital-hall-pass-that-records-students-movements-4685766",
    },
    {
        title: "It’s Time to Resist the Algorithms",
        publishedAt: 1668970823,
        uri: "/health/its-time-to-resist-the-algorithms-4858809",
    },
    {
        title: "5 Short Squeeze Candidates to Watch: SmileDirectClub, Kidpik Join the Leaderboard",
        publishedAt: 1643707604,
        uri: "/article/5-short-squeeze-candidates-to-watch-smiledirectclub-kidpik-join-the-leaderboard-4247998",
    },
    {
        title: "'Enormous Advantage on the Battlefield': Arthur Herman on the Race for AI",
        publishedAt: 1638671438,
        uri: "/epochtv/enormous-advantage-on-the-battlefield-arthur-herman-on-the-race-for-ai-4137999",
    },
    {
        title: "Time to Leave the CCP and Choose Taiwan: Israeli National Security Official",
        publishedAt: 1661276070,
        uri: "/world/time-to-leave-the-ccp-and-choose-taiwan-israeli-national-security-official-4682635",
    },
    {
        title: "Chinese Surveillance Cameras Used in 60 Percent of UK Public Bodies: Report",
        publishedAt: 1644344656,
        uri: "/world/chinese-surveillance-cameras-used-in-60-percent-of-uk-public-bodies-report-4264664",
    },
    {
        title: "US Companies Aiding China’s Human Rights Violations Under Spotlight at Congressional Hearing",
        publishedAt: 1689193157,
        uri: "/china/congressional-hearing-examines-corporate-complicity-in-subsidizing-chinas-human-rights-violations-5386244",
    },
    {
        title: "Beijing Using South China Sea Drills as Cover to Search for Crashed Chinese Warplane: Taiwan",
        publishedAt: 1646931636,
        uri: "/china/chinese-warplane-crashed-into-south-china-sea-beijing-using-drills-as-cover-to-search-for-it-taiwan-4329181",
    },
    {
        title: "Oracle to Buy Cerner for $28.3 Billion in Healthcare Sector Push",
        publishedAt: 1640070965,
        uri: "/article/oracle-to-buy-cerner-for-28-3-billion-in-healthcare-sector-push-4168170",
    },
    {
        title: "Nvidia's $40 Billion Arm Deals Faces FTC Roadblock",
        publishedAt: 1638598575,
        uri: "/article/nvidias-40-billion-arm-deals-faces-ftc-roadblock-4137631",
    },
    {
        title: "SenseTime Relaunches $767 Million Hong Kong IPO After US Investment Ban",
        publishedAt: 1640014002,
        uri: "/china/sensetime-relaunches-767-million-hong-kong-ipo-after-us-investment-ban-4167391",
    },
    {
        title: "The Sobering Truth About 5G",
        publishedAt: 1671478002,
        uri: "/opinion/the-sobering-truth-about-5g-4918025",
    },
    {
        title: "China’s Metaverse Is Dystopia",
        publishedAt: 1656095738,
        uri: "/opinion/chinas-metaverse-is-dystopia-4555367",
    },
    {
        title: "Elon Musk and the Chinese Temptation",
        publishedAt: 1648415613,
        uri: "/opinion/elon-musk-and-the-chinese-temptation-4365544",
    },
    {
        title: "New UK Law Boosts Scrutiny Over Hostile Foreign Takeovers",
        publishedAt: 1641302496,
        uri: "/world/new-uk-law-boosts-scrutiny-over-hostile-foreign-takeovers-4192074",
    },
    {
        title: "Intel Launches New PC Chips, Says US Supercomputer Will Double Expected Speeds",
        publishedAt: 1635397500,
        uri: "/article/intel-launches-new-pc-chips-says-us-supercomputer-will-double-expected-speeds-4072210",
    },
    {
        title: "Inside the Blogs Allegedly Authored by Paul Pelosi's Attacker",
        publishedAt: 1667863034,
        uri: "/us/inside-the-blogs-allegedly-authored-by-paul-pelosis-attacker-4847376",
    },
    {
        title: "Pentagon to Build up Bases in Guam and Australia to Counter China",
        publishedAt: 1638381249,
        uri: "/us/pentagon-to-build-up-bases-in-guam-and-australia-to-counter-china-4132625",
    },
    {
        title: "US Extends Ban on Investments in Firms Tied to Chinese Military",
        publishedAt: 1636495326,
        uri: "/china/us-extends-ban-on-investments-in-firms-tied-to-chinese-military-4095643",
    },
    {
        title: "US Needs to Nurture STEM Studies to Fill Space Industry: Rep. Brian Babin",
        publishedAt: 1648923868,
        uri: "/us/us-needs-to-nurture-stem-studies-to-fill-space-industry-rep-brian-babin-4377549",
    },
    {
        title: "Google Wants to Use AI to Time Traffic Lights More Efficiently",
        publishedAt: 1633528983,
        uri: "/article/google-wants-to-use-ai-to-time-traffic-lights-more-efficiently-4034774",
    },
    {
        title: "Americans Are Being Scammed in More Sophisticated Ways Than Ever",
        publishedAt: 1702005595,
        uri: "/article/next-time-you-pick-up-the-phone-it-could-cost-you-29000-post-5538533",
    },
    {
        title: "China Has the World’s Largest Robotics Market but Lacks Core Technologies",
        publishedAt: 1646170022,
        uri: "/china/china-has-the-worlds-largest-robotics-market-but-lacks-core-technologies-4308957",
    },
    {
        title: "Beijing Has Taken Advantage of America’s Academic Freedoms, Security Expert Says",
        publishedAt: 1628652521,
        uri: "/china/beijing-has-taken-advantage-of-americas-academic-freedom-security-expert-says-3941052",
    },
    {
        title: "State-Linked Cyber Actors Could Face Counter-Attack From Australia: Intelligence Boss",
        publishedAt: 1637221381,
        uri: "/world/state-linked-cyber-actors-could-face-counter-attack-from-australia-intelligence-boss-4110983",
    },
    {
        title: "‘Bits and Bytes’: Australian PM Warns Conflict With Beijing Could Be Fought in Cyberspace",
        publishedAt: 1650955636,
        uri: "/world/bits-and-bytes-australian-pm-warns-conflict-with-beijing-could-be-fought-in-cyberspace-4427647",
    },
    {
        title: "US Senate Votes to Open Debate on China Tech Bill",
        publishedAt: 1621300551,
        uri: "/china/us-senate-votes-to-open-debate-on-china-tech-bill-3819487",
    },
    {
        title: "Commerce Cronyism: Inside Deals, Conflicts of Interest, and Chinese Connections",
        publishedAt: 1653071229,
        uri: "/opinion/commerce-cronyism-inside-deals-conflicts-of-interest-and-chinese-connections-4479928",
    },
    {
        title: "The US Inflation Reduction Act of 2022 Boosts EV Demand and Supply-Chain Manufacturing",
        publishedAt: 1680102017,
        uri: "/article/the-us-inflation-reduction-act-of-2022-boosts-ev-demand-and-supply-chain-manufacturing-5155611",
    },
    {
        title: "Liberals' Decision on Huawei Still Pending, While Reports Mount on Telecom Giant’s Alleged Spying Activities",
        publishedAt: 1639782002,
        uri: "/world/liberals-decision-on-huawei-still-pending-while-reports-mount-on-telecom-giants-alleged-spying-activities-4160792",
    },
    {
        title: "CCP's High-Tech Repression in Xinjiang Calls for Tougher Sanctions: Advocates",
        publishedAt: 1645891207,
        uri: "/china/ccps-high-tech-repression-in-xinjiang-calls-for-tougher-sanctions-advocates-4302266",
    },
    {
        title: "EU Backs US Tech Trade Declaration After French Concerns",
        publishedAt: 1632932863,
        uri: "/world/eu-backs-us-tech-trade-declaration-after-french-concerns-4022991",
    },
    {
        title: "Nvidia Terminates Planned $40 Billion Acquisition of UK Chip Designer Arm Due to 'Significant Regulatory Challenges'",
        publishedAt: 1644321508,
        uri: "/article/nvidia-terminates-planned-40-billion-acquisition-of-uk-chip-designer-arm-due-to-significant-regulatory-challenges-4263832",
    },
    {
        title: "Should We Fear Full Artificial Intelligence? (Video)",
        publishedAt: 1421820608,
        uri: "/article/should-we-fear-full-artificial-intelligence-video-1210692",
    },
    {
        title: "UK's Johnson Says Sanctions May Not Stop Putin as Russian Official Accuses the West of 'Warmongering'",
        publishedAt: 1645379702,
        uri: "/world/uks-johnson-says-sanctions-may-not-stop-putin-as-russian-official-accuses-the-west-of-warmongering-4290103",
    },
    {
        title: "Scientists Reveal How Powerful the Human Brain Is Compared to the Fastest Supercomputers in the World",
        publishedAt: 1670077107,
        uri: "/bright/scientists-reveal-how-powerful-the-human-brain-is-compared-to-the-fastest-supercomputers-in-the-world-4898025",
    },
    {
        title: "South Korean Chip Giant SK Hynix Unveils World’s Fastest, Highest Capacity Memory Chip",
        publishedAt: 1635745378,
        uri: "/tech/south-korean-chip-giant-sk-hynix-unveils-worlds-fastest-highest-capacity-memory-chip-4078764",
    },
    {
        title: "ARK's Cathie Wood Says Wall Street Not in a Bubble",
        publishedAt: 1632407431,
        uri: "/article/arks-cathie-wood-says-wall-street-not-in-a-bubble-4012823",
    },
    {
        title: "China’s Military Can and Will ‘Challenge’ the US: Report",
        publishedAt: 1645116912,
        uri: "/china/chinas-military-can-and-will-challenge-the-us-report-4284406",
    },
    {
        title: "Data Collection from Athletes in Australia Needs to Be Regulated: Discussion Paper",
        publishedAt: 1649990026,
        uri: "/world/data-collection-from-athletes-in-australia-needs-to-be-regulated-discussion-paper-4403437",
    },
    {
        title: "Japanese Messaging App Admits to Sending User Data to China",
        publishedAt: 1635003984,
        uri: "/tech/japanese-messaging-app-admits-it-processed-user-data-in-china-4063785",
    },
    {
        title: "Prime Minister Has ‘Great Trust’ in Australian People, Downplays Poor Polling Results",
        publishedAt: 1643744071,
        uri: "/world/prime-minister-has-great-trust-in-quiet-australians-downplays-poor-polling-results-4249140",
    },
    {
        title: "Russia's Sberbank, Enhancing AI Offering, Unveils Second Supercomputer",
        publishedAt: 1636757745,
        uri: "/world/russias-sberbank-enhancing-ai-offering-unveils-second-supercomputer-4101061",
    },
    {
        title: "MP Calls for Law to Fight Online Sexual Exploitation Amid Pornhub Employee’s Claim Regarding Content Moderation",
        publishedAt: 1696517714,
        uri: "/world/mp-calls-for-law-to-fight-online-sexual-exploitation-amid-pornhub-employees-claim-regarding-content-moderation-5496226",
    },
    {
        title: "China's New Infrastructure Still Relies on Carbon: Report",
        publishedAt: 1632925079,
        uri: "/china/chinas-new-infrastructure-still-relies-on-carbon-report-4022713",
    },
    {
        title: "'Non-Traditional Intelligence Collectors': CSIS Warns Universities of Spy Tactics by Foreign States",
        publishedAt: 1627411455,
        uri: "/world/non-traditional-intelligence-collectors-csis-warns-universities-of-spy-tactics-by-foreign-states-3920858",
    },
    {
        title: "Loneliness as Unhealthy as 15 Cigarettes a Day, U.S. Surgeon General Says",
        publishedAt: 1684460576,
        uri: "/us/loneliness-as-unhealthy-as-15-cigarettes-a-day-u-s-surgeon-general-advises-5275953",
    },
    {
        title: "Preparing for AI: Lessons From the Past",
        publishedAt: 1681750346,
        uri: "/article/preparing-for-ai-lessons-from-the-past-5184556",
    },
    {
        title: "Senate to Vote on Semiconductor Bill Aimed at China Competition",
        publishedAt: 1658412312,
        uri: "/china/senate-to-vote-on-semiconductor-bill-aimed-at-china-competition-4607792",
    },
    {
        title: "What Do Bots Think About Marriage?",
        publishedAt: 1672809674,
        uri: "/bright/what-do-bots-think-about-marriage-4865360",
    },
    {
        title: "US Intelligence Agency Warns Companies on China's 'Comprehensive' Efforts to Acquire Critical Technologies",
        publishedAt: 1634928414,
        uri: "/china/us-intelligence-agency-warns-companies-on-chinas-comprehensive-efforts-to-acquire-critical-technologies-4063455",
    },
    {
        title: "Amazon and Google Set to Attend White House Forum on Quantum Technology",
        publishedAt: 1633503996,
        uri: "/tech/amazon-and-google-set-to-attend-white-house-forum-on-quantum-technology-4032870",
    },
    {
        title: "TSMC Sees Multi-Year Growth Ahead, to Boost Chip Spending in 2022",
        publishedAt: 1642075892,
        uri: "/article/tsmc-sees-multi-year-growth-ahead-to-boost-chip-spending-in-2022-4210490",
    },
    {
        title: "Net-Zero Is the Real Climate Catastrophe",
        publishedAt: 1662145653,
        uri: "/opinion/net-zero-is-the-real-climate-catastrophe-4707480",
    },
    {
        title: "Rubio Calls on 22 US Universities to End Ties With Institutions That Support China’s Military",
        publishedAt: 1644522155,
        uri: "/china/rubio-calls-on-22-us-universities-to-end-ties-with-institutions-that-support-chinas-military-4270145",
    },
    {
        title: "The People’s Republic of Chains",
        publishedAt: 1678651861,
        uri: "/opinion/the-peoples-republic-of-chains-5114167",
    },
    {
        title: "Chinese Regime Replaces Xinjiang Communist Party Chief",
        publishedAt: 1640545790,
        uri: "/china/chinese-regime-replaces-xinjiang-communist-party-chief-4177920",
    },
    {
        title: "Dire Straits–How a China Taiwan Takeover Could Look Like the Cuban Missile Crisis",
        publishedAt: 1669242601,
        uri: "/opinion/dire-straits-how-a-china-taiwan-takeover-could-look-like-the-cuban-missile-crisis-4882380",
    },
    {
        title: "IN-DEPTH: Employment Experts Discuss Disconnect Between Useful Skills and Academic Degrees",
        publishedAt: 1696014000,
        uri: "/us/special-report-employment-experts-discuss-disconnect-between-useful-skills-and-academic-degrees-5498021",
    },
    {
        title: "Salesforce Rival Freshworks Aims for Nearly $9 Billion Valuation in US IPO",
        publishedAt: 1631602675,
        uri: "/article/salesforce-rival-freshworks-aims-for-nearly-9-billion-valuation-in-us-ipo-3994944",
    },
    {
        title: "AUKUS Focus on Cyber Deters CCP Aggression: Experts",
        publishedAt: 1633539100,
        uri: "/china/aukus-focus-on-cyber-deters-ccp-aggression-experts-4035066",
    },
    {
        title: "Malaysia Seeking Beijing’s ‘Views’ on New Australia, US, UK Nuclear Submarine Pact",
        publishedAt: 1632374525,
        uri: "/world/malaysia-seeking-beijings-views-on-new-australia-us-uk-nuclear-submarine-pact-4012253",
    },
    {
        title: "Google Adds Visual Search Features in Shopping, Video Push",
        publishedAt: 1632991205,
        uri: "/tech/google-adds-visual-search-features-in-shopping-video-push-4023834",
    },
    {
        title: "One in Six Chance of Worldwide Nuclear War: Physicist's Post Goes Viral",
        publishedAt: 1665445036,
        uri: "/world/one-in-six-chance-of-worldwide-nuclear-war-physicists-post-goes-viral-4786911",
    },
    {
        title: "Microsoft Rolls out New Tech to Connect Its Cloud to Rivals",
        publishedAt: 1635959971,
        uri: "/tech/microsoft-rolls-out-new-tech-to-connect-its-cloud-to-rivals-4084142",
    },
    {
        title: "Samsung CEO Visits The Netherlands to Bolster Chipmaking Value Chain",
        publishedAt: 1655713467,
        uri: "/article/samsung-ceo-visits-the-netherlands-to-bolster-chipmaking-value-chain-4544125",
    },
    {
        title: "Joe Biden, the Inflationary Reverse Robin Hood",
        publishedAt: 1661701291,
        uri: "/opinion/joe-biden-the-inflationary-reverse-robin-hood-4694152",
    },
    { title: "Is Your AI Woke?", publishedAt: 1631154266, uri: "/opinion/is-your-ai-woke-3988539" },
    {
        title: "The Glory Days of Hong Kong Are Definitely Gone",
        publishedAt: 1653197259,
        uri: "/opinion/the-glory-days-of-hong-kong-are-definitely-gone-4449745",
    },
    {
        title: "Semiconductor Chip Industry Will Reach $1 Trillion in a Decade Despite Shortages",
        publishedAt: 1643655861,
        uri: "/article/semiconductor-chip-industry-will-reach-1-trillion-in-a-decade-despite-shortages-4247225",
    },
    {
        title: "Colonization With Chinese Characteristics: China Is Devouring Latin America",
        publishedAt: 1645401448,
        uri: "/opinion/colonization-with-chinese-characteristics-china-is-devouring-latin-america-4274283",
    },
    {
        title: "Beijing's Political Warfare Campaigns Exploit Social Media",
        publishedAt: 1640299211,
        uri: "/opinion/beijings-political-warfare-campaigns-exploit-social-media-4173398",
    },
    {
        title: "South Korea to Track COVID-19 Patients, Ensure Mask Compliance With Facial Recognition Cameras",
        publishedAt: 1639478619,
        uri: "/world/south-korea-to-track-covid-19-patients-ensure-mask-compliance-with-facial-recognition-cameras-4156000",
    },
    {
        title: "Author: This Is Why Humans Should Not Play God",
        publishedAt: 1683155500,
        uri: "/epochtv/sally-saxon-author-of-covid-19-vaccines-beyond-talks-about-freedom-the-search-for-truth-and-why-humans-should-not-play-god-5239331",
    },
    {
        title: "Australia Loses More Than $10 Billion a Year Over Financial Abuse",
        publishedAt: 1645837865,
        uri: "/world/australia-loses-more-than-10-billion-a-year-over-financial-abuse-4302033",
    },
    { title: "Robotic Anxieties", publishedAt: 1648220117, uri: "/article/robotic-anxieties-4361464" },
    {
        title: "Intel Posts Record Quarterly Revenue, Sees Supply Strains Through Year",
        publishedAt: 1643300534,
        uri: "/article/intel-posts-record-quarterly-revenue-sees-supply-strains-through-year-4240404",
    },
    {
        title: "How Drug Cartels Infiltrated the Prescription Drug Market With Fake Pills: Michael Brown",
        publishedAt: 1707011056,
        uri: "/epochtv/how-drug-cartels-infiltrated-the-prescription-drug-market-with-fake-pills-michael-brown-5579246",
    },
    {
        title: "Another ‘Affront Against Universal Rights’: Blinken Criticizes Beijing for Using Sanctions to ‘Intimidate’ US Critics",
        publishedAt: 1641849695,
        uri: "/china/another-affront-against-universal-rights-blinken-criticizes-beijing-for-using-sanctions-to-intimidate-us-critics-4204215",
    },
    {
        title: "US Bans American Investment in Chinese AI Company Over Human Rights Concerns",
        publishedAt: 1639164666,
        uri: "/china/us-bans-american-investment-in-chinese-ai-company-sensetime-over-rights-concerns-4150525",
    },
    {
        title: "A Universal Basic Income?",
        publishedAt: 1647872288,
        uri: "/opinion/a-universal-basic-income-4346738",
    },
    {
        title: "The One Country That Can Replace China as the World's Factory",
        publishedAt: 1637689402,
        uri: "/opinion/the-one-country-that-could-replace-china-as-the-worlds-factory-4105077",
    },
    {
        title: "CCP's Behavior Runs Counter to Rules-Based International Order: Japan Ambassador",
        publishedAt: 1642541956,
        uri: "/china/ccps-behavior-runs-counter-to-rules-based-international-order-japan-ambassador-4220592",
    },
    {
        title: "US–China Strategic Rivalry Escalates Over Chips, Foreign Businesses Caution Investing in China",
        publishedAt: 1664031470,
        uri: "/china/us-china-strategic-rivalry-escalates-over-chips-foreign-businesses-caution-investing-in-china-4750120",
    },
    {
        title: "Michigan Chemist Sentenced to 14 Years in Prison for Stealing Trade Secrets to Benefit Chinese Firm",
        publishedAt: 1652169002,
        uri: "/us/stealing-trade-secrets-to-benefit-china-michigan-chemist-sentenced-to-14-year-jail-term-4456591",
    },
    {
        title: "GiveSendGo Donors From United States Account For Roughly 50 Percent of Canadian Freedom Convoy Campaign",
        publishedAt: 1645037501,
        uri: "/us/givesendgo-donors-from-united-states-account-for-roughly-50-percent-of-canadian-freedom-convoy-campaign-4282256",
    },
    { title: "Real Men Wanted", publishedAt: 1647379853, uri: "/bright/real-men-wanted-4333979" },
    {
        title: "China Signals Crackdown on Privacy, Data, Anti-Trust to Continue",
        publishedAt: 1628783627,
        uri: "/china/china-signals-crackdown-on-privacy-data-anti-trust-to-continue-3945796",
    },
    {
        title: "Communist China's Sprawling Plan to Infiltrate American College Campuses",
        publishedAt: 1667333266,
        uri: "/us/communist-chinas-sprawling-plan-to-infiltrate-american-college-campuses-4757143",
    },
    {
        title: "Chinese Health Care Firms' Shares Slide on Report That US Will Blacklist Biotech, AI Firms",
        publishedAt: 1639586866,
        uri: "/china/shares-in-chinese-healthcare-firms-plummet-after-report-that-us-will-blacklist-biotch-ai-firms-4158990",
    },
    {
        title: "South Korean PM Endorses Presidential Pardon for Samsung Chief Lee Jae-yong",
        publishedAt: 1659680740,
        uri: "/world/south-korean-pm-endorses-presidential-pardon-for-samsung-chief-lee-jae-yong-4642424",
    },
    {
        title: "Big Business Still in China's Xinjiang After Uyghur Sanctions",
        publishedAt: 1644003321,
        uri: "/opinion/big-business-still-in-china-4255820",
    },
    {
        title: "AUKUS Submarine Deal to 'Project Our Power' North: Australian Ambassador to US",
        publishedAt: 1636696355,
        uri: "/world/aukus-submarine-deal-to-project-our-power-north-australian-ambassador-to-us-4100300",
    },
    {
        title: "Afghanistan a Wake-Up Call for Europe on Defense, Leadership: France",
        publishedAt: 1630772502,
        uri: "/world/afghanistan-a-wake-up-call-for-europe-on-defense-leadership-france-3981672",
    },
    {
        title: "How the Prestige and Trust Deficit Affects the Strategic Equation",
        publishedAt: 1681409807,
        uri: "/opinion/how-the-prestige-and-trust-deficit-impacts-the-strategic-equation-5183752",
    },
    {
        title: "Is the US Government Creating Brain Hacking Technology?",
        publishedAt: 1669753876,
        uri: "/opinion/is-the-us-government-creating-brain-hacking-technology-4881673",
    },
    {
        title: "London Is Now the Most Surveilled City in the Western World",
        publishedAt: 1657313847,
        uri: "/opinion/london-is-now-the-most-surveilled-city-in-the-western-world-4574784",
    },
    {
        title: "Xi Jinping’s Crackdown on Private Tech Is Endangering Military Modernization",
        publishedAt: 1628624781,
        uri: "/opinion/xi-jinpings-crackdown-on-private-tech-is-endangering-military-modernization-3942179",
    },
    {
        title: "China Destabilizes the World Through Militarized Drone Exports",
        publishedAt: 1648664343,
        uri: "/opinion/china-destabilizes-the-world-through-militarized-drone-exports-4361432",
    },
    {
        title: "China Uses ‘Whole-of-Society’ Effort to Steal From US: Former CIA Officer",
        publishedAt: 1635680398,
        uri: "/china/china-uses-whole-of-society-effort-to-steal-from-the-us-former-cia-officer-4078082",
    },
    {
        title: "Space ETF Adds 8 New Companies Including 7 That Completed SPAC Mergers: What Investors Should Know",
        publishedAt: 1640156927,
        uri: "/article/space-etf-adds-8-new-companies-including-7-that-completed-spac-mergers-what-investors-should-know-4171395",
    },
    {
        title: "ANALYSIS: In First Debate, a Shadow War Between Establishment Reaganism and Insurgent Trumpism",
        publishedAt: 1693027362,
        uri: "/us/in-depth-in-first-debate-a-shadow-war-between-establishment-reaganism-and-insurgent-trumpism-5481073",
    },
    {
        title: "SoftBank CEO Son Says Smart Robots Can Revitalise Japan Growth, Competitiveness",
        publishedAt: 1631701284,
        uri: "/article/softbank-ceo-son-says-smart-robots-can-revitalise-japan-growth-competitiveness-3998536",
    },
    {
        title: "China's Influence Over US Universities Poses Existential Risks",
        publishedAt: 1640118922,
        uri: "/opinion/chinas-influence-over-us-universities-poses-existential-risks-4164700",
    },
    {
        title: "Silicon Valley Has the Power to Destroy the Republican Party",
        publishedAt: 1644684578,
        uri: "/article/silicon-valley-has-the-power-to-destroy-the-republican-party-4272836",
    },
    {
        title: "Chinese Military Plans Foreign Port Destruction",
        publishedAt: 1635872724,
        uri: "/opinion/chinese-military-plans-foreign-port-destruction-4077629",
    },
    {
        title: "Investing Inheritance: Creating a Cycle of Wealth",
        publishedAt: 1672193153,
        uri: "/bright/investing-inheritance-creating-a-cycle-of-wealth-4948543",
    },
    {
        title: "World’s Longest-Living Panda in Captivity Dies at 35 in Hong Kong",
        publishedAt: 1658578015,
        uri: "/china/worlds-longest-living-panda-dies-at-35-in-hong-kong-4616919",
    },
    {
        title: "The End of Education as We Know It? (Part 2 of 2)",
        publishedAt: 1680641177,
        uri: "/bright/the-end-of-education-as-we-know-it-part-2-of-2-5160434",
    },
    {
        title: "Chinese AI Company Seeks to Block Apple’s iPhone Sales Ahead of New Device Launch",
        publishedAt: 1631302691,
        uri: "/china/chinese-ai-company-seeks-to-block-apples-iphone-sales-ahead-of-new-device-launch-3990598",
    },
    {
        title: "Big Tech Sends Troubling Signals, With More Layoffs to Come",
        publishedAt: 1668788001,
        uri: "/article/big-tech-sends-troubling-signals-with-more-layoffs-to-come-4872005",
    },
    {
        title: "Security Experts Call for Ban on AI Transfers to China",
        publishedAt: 1630566171,
        uri: "/china/security-experts-call-for-ban-on-ai-transfers-to-china-3977069",
    },
    {
        title: "Intelligence Report Warns of Potentially Catastrophic Shocks From Threats Like Tech Disruption, Disease",
        publishedAt: 1618255982,
        uri: "/us/intelligence-report-warns-of-potentially-catastrophic-shocks-from-threats-like-tech-and-disease-3772026",
    },
    {
        title: "Is Google’s LaMDA Woke? Its Software Engineers Sure Are",
        publishedAt: 1656096647,
        uri: "/opinion/is-googles-lamda-woke-its-software-engineers-sure-are-4556747",
    },
    {
        title: "Tyson Automating Meat-Processing Plants, Reducing Labor Costs, Improving Efficiency",
        publishedAt: 1639135129,
        uri: "/article/tyson-automating-meat-processing-plants-reducing-labor-costs-improving-efficiency-4149744",
    },
    {
        title: "The Silicon Valley Dream and What Went Wrong (Part I)",
        publishedAt: 1625611721,
        uri: "/opinion/the-silicon-valley-dream-and-what-went-wrong-3889836",
    },
    {
        title: "Samsung Names New CEOs, to Merge Mobile, Consumer Electronics Units",
        publishedAt: 1639035431,
        uri: "/article/samsung-names-new-ceos-to-merge-mobile-consumer-electronics-units-4145596",
    },
    {
        title: "UK Cannot Be Strategically Dependent on China: Foreign Secretary",
        publishedAt: 1634988693,
        uri: "/world/uk-cannot-be-strategically-dependent-on-china-foreign-secretary-4064681",
    },
    {
        title: "US Capital Pours Into China, Posing Risks",
        publishedAt: 1645564240,
        uri: "/article/us-capital-pours-into-china-posing-risks-4292030",
    },
    {
        title: "Cadence Design Systems Aims to Cash in on New Custom-Chip Era",
        publishedAt: 1642662382,
        uri: "/tech/cadence-design-systems-aims-to-cash-in-on-new-custom-chip-era-4222601",
    },
    {
        title: "The Ethical Risks of China's 'Brain Control' Tech",
        publishedAt: 1640302726,
        uri: "/opinion/the-ethical-risks-of-chinas-brain-control-tech-4167051",
    },
    {
        title: "Sebastian Gorka on Russia-Ukraine War Narratives, Political Prisoners in America, and the Politicization of the Intel Community",
        publishedAt: 1673738346,
        uri: "/epochtv/sebastian-gorka-on-russia-ukraine-war-narratives-political-prisoners-in-america-and-the-politicization-of-the-intel-community-4984918",
    },
    {
        title: "Exploring the US Labor Shortage and Unemployment",
        publishedAt: 1661277788,
        uri: "/article/exploring-the-us-labor-shortage-and-unemployment-4680837",
    },
    {
        title: "Investment Canada Act Update Part of Restructuring Globalization Away From China: Business Professor",
        publishedAt: 1671037974,
        uri: "/world/investment-canada-act-update-part-of-restructuring-globalization-away-from-china-business-professor-4923472",
    },
    {
        title: "Chinese Regime Has Stolen Enough Data to Compile 'Dossier' on All Americans: Former Official",
        publishedAt: 1628268390,
        uri: "/china/chinese-regime-has-stolen-enough-data-to-compile-dossier-on-all-americans-official-3936760",
    },
    {
        title: "[EXCLUSIVE] Matt Taibbi: How Hidden Actors Distort Reality, Manipulate the Public, and Enforce Consensus",
        publishedAt: 1690069596,
        uri: "/epochtv/exclusive-matt-taibbi-how-hidden-actors-distort-reality-manipulate-the-public-and-enforce-consensus-5411724",
    },
    {
        title: "US Weakness Against Russia Will Put Taiwan in Harm’s Way: Sen. Cotton",
        publishedAt: 1646736446,
        uri: "/china/senator-says-us-weakness-against-russia-will-put-taiwan-in-harms-way-4323511",
    },
    {
        title: "Senators Want More Oversight of US Companies Looking to Offshore Critical Industries to China",
        publishedAt: 1639607164,
        uri: "/china/senators-want-more-oversight-of-us-companies-looking-to-offshore-critical-industries-to-china-4159925",
    },
    {
        title: "UN Secretary-General Calls to Ban 'Killer Robots'",
        publishedAt: 1639425133,
        uri: "/opinion/un-secretary-general-calls-to-ban-killer-robots-4154216",
    },
    {
        title: "NATO Will Concentrate on Countering the Chinese Threat for Next Decade: Stoltenberg",
        publishedAt: 1634994711,
        uri: "/world/nato-will-concentrate-on-countering-the-chinese-threat-for-next-decade-stoltenberg-4064280",
    },
    {
        title: "China's SenseTime Postpones $767 Million Hong Kong IPO After US Ban",
        publishedAt: 1639422977,
        uri: "/china/chinas-sensetime-postpones-767-million-hong-kong-ipo-after-us-ban-4154524",
    },
    {
        title: "China in Focus: Beijing Firms Are Collecting American DNA: Report",
        publishedAt: 1622238483,
        uri: "/epochtv/china-in-focus-may-28-beijing-firms-are-collecting-american-dna-report-premiering-on-5-28-at-9pm-et-3835407",
    },
    {
        title: "US Tech Companies Should Not Assist Communist China: Lawmaker",
        publishedAt: 1641896903,
        uri: "/article/lawmaker-says-us-tech-companies-should-not-assist-communist-china-4205299",
    },
    {
        title: "Sen. Marco Rubio: US Reliance on Chinese-Made Pharmaceuticals and Critical Technology Could Help Hand Taiwan to the Regime",
        publishedAt: 1655488026,
        uri: "/us/sen-marco-rubio-us-reliance-on-chinese-made-pharmaceuticals-and-critical-technology-could-help-hand-taiwan-to-the-regime-4500148",
    },
    {
        title: "US Response to China-Russia Axis: Building Alliances and Extending Sanctions",
        publishedAt: 1646251215,
        uri: "/opinion/us-response-to-china-russia-alliance-4312012",
    },
    {
        title: "Ohio Governor, Intel CEO Announce Location for Microchip Plants",
        publishedAt: 1642809044,
        uri: "/us/ohio-governor-intel-ceo-announce-location-for-microchip-plants-4228183",
    },
    {
        title: "Twitter's Security Lapses, Censorship Means Platform Needs Musk Far More Than Musk Needs Twitter: Experts",
        publishedAt: 1663105965,
        uri: "/us/twitters-security-lapses-censorship-means-platform-needs-musk-far-more-than-musk-needs-twitter-experts-4728297",
    },
    {
        title: "Inability to Distinguish Truth From Fiction Has Laid Ground For Totalitarianism: Author Rod Dreher",
        publishedAt: 1663696374,
        uri: "/us/inability-to-distinguish-truth-from-fiction-has-laid-ground-for-totalitarianism-author-rod-dreher-4741087",
    },
    {
        title: "China's Quant Funds Become Victims of Their Own Success",
        publishedAt: 1641314987,
        uri: "/china/chinas-quant-funds-become-victims-of-their-own-success-4192421",
    },
    {
        title: "The Metaverse, With Chinese Characteristics",
        publishedAt: 1645889426,
        uri: "/opinion/the-metaverse-with-chinese-characteristics-4298715",
    },
    {
        title: "Surfing and Snowboarding in One Day? How I Survived the ‘California Double’",
        publishedAt: 1680893027,
        uri: "/bright/surfing-and-snowboarding-in-one-day-how-i-survived-the-california-double-5179616",
    },
    {
        title: "Intel, Sequoia Linked to AI Company That Worked for Chinese Military: Report",
        publishedAt: 1636145739,
        uri: "/china/intel-sequoia-linked-to-ai-company-that-worked-for-chinese-military-report-4086124",
    },
    {
        title: "AI Aims to Preempt Choice and Chance",
        publishedAt: 1615472925,
        uri: "/health/ai-aims-to-preempt-choice-and-chance-3718553",
    },
    {
        title: "Police Use of Facial Recognition Technology Could Threaten Charter Rights, Lawyer Tells MPs",
        publishedAt: 1647966737,
        uri: "/world/police-use-of-facial-recognition-technology-could-threaten-charter-rights-lawyers-4353407",
    },
    {
        title: "‘Malicious’: GOP Lawmaker Slams Chinese Surveillance Giant for Attempting to Interfere With Congress",
        publishedAt: 1643377543,
        uri: "/china/republican-rep-tenney-slams-malicious-china-run-tech-giant-for-manipulating-congress-4242422",
    },
    { title: "China’s Data Play", publishedAt: 1638467320, uri: "/opinion/chinas-data-play-4132689" },
    {
        title: "Didi, China, and the Data War",
        publishedAt: 1628339597,
        uri: "/opinion/didi-china-and-the-data-war-3937270",
    },
    {
        title: "'Military-Civil Fusion' Information Secretly Removed by the Chinese Regime, Leaked Documents Shows",
        publishedAt: 1618672859,
        uri: "/china/military-civil-fusion-information-secretly-removed-by-the-chinese-regime-leaked-documents-shows-3779391",
    },
    {
        title: "CCP ‘Serious’ About Breaking US Encryption With Quantum Tech: Expert",
        publishedAt: 1677768603,
        uri: "/china/ccp-serious-about-breaking-us-encryption-with-quantum-tech-expert-5086023",
    },
    {
        title: "China, Goldman Sachs, and Genocide Denial",
        publishedAt: 1643056341,
        uri: "/opinion/china-goldman-sachs-and-genocide-denial-4227818",
    },
    {
        title: "Japan Plans to Resume Air Defense Drills, Upgrade Missiles, and Fighter Jets Amid Growing Regional Threats",
        publishedAt: 1662735378,
        uri: "/world/japan-plans-to-resume-air-defense-drills-upgrade-missiles-and-fighter-jets-amid-growing-regional-threats-4718066",
    },
    {
        title: "YouTube Admits Error in Removing Video of GOP Lawmaker Criticizing Russian Vaccines",
        publishedAt: 1636647608,
        uri: "/article/youtube-admits-error-in-removing-video-of-gop-lawmaker-criticizing-russian-vaccines-4099145",
    },
    {
        title: "Chinese Spy Ship Spotted Off Australia's Coast for 3 Weeks",
        publishedAt: 1637983860,
        uri: "/world/chinese-spy-ship-hugs-australias-coast-for-three-weeks-4125228",
    },
    {
        title: "Elon Musk Solves Twitter Problem the Old-Fashioned American Way",
        publishedAt: 1651537265,
        uri: "/opinion/elon-musk-solves-twitter-problem-the-old-fashioned-american-way-4441803",
    },
    {
        title: "Japan Cabinet OKs Record Defense Budget Amid Taiwan Concerns",
        publishedAt: 1640363679,
        uri: "/world/japan-cabinet-oks-record-defense-budget-amid-taiwan-concerns-4176197",
    },
    {
        title: "CCP Set to Continue Expansionist Agenda Upon Xi's Expected Third Term in Power: Experts",
        publishedAt: 1649359755,
        uri: "/china/ccp-set-to-continue-expansionist-agenda-upon-xis-expected-third-term-in-power-experts-4389652",
    },
    {
        title: "The Weakness of China’s Economic System",
        publishedAt: 1643132302,
        uri: "/opinion/the-weakness-of-chinas-economic-system-4232956",
    },
    {
        title: "Australian Navy to Train in Virtual Reality",
        publishedAt: 1642571954,
        uri: "/world/australian-navy-to-train-in-virtual-reality-4221809",
    },
    {
        title: "Conrad Black: The Voters Are Not Distracted",
        publishedAt: 1655142770,
        uri: "/opinion/the-voters-are-not-distracted-4528856",
    },
    {
        title: "The Spider Dragon's Long-Term Goals of Dominating the World",
        publishedAt: 1632421655,
        uri: "/opinion/the-spider-dragons-long-term-goals-of-dominating-the-world-4007786",
    },
    {
        title: "The Future of Money in Real Estate",
        publishedAt: 1655110837,
        uri: "/bright/the-future-of-money-in-real-estate-4509077",
    },
    {
        title: "US-China Tech Decoupling Underway",
        publishedAt: 1671658701,
        uri: "/opinion/us-china-tech-decoupling-underway-4931742",
    },
    {
        title: "From Recession Probability to FOMC Meeting, Critical Week for US Economy",
        publishedAt: 1658780317,
        uri: "/article/from-recession-probability-to-fomc-meeting-critical-week-for-us-economy-4620558",
    },
    {
        title: "‘We’d Probably Lose’ a War Over Taiwan: Rep. Gallagher",
        publishedAt: 1635557687,
        uri: "/china/wed-probably-lose-a-war-over-taiwan-rep-gallagher-4076314",
    },
    {
        title: "China’s Rapid Advances in Satellite Technology Strengthens 'Kill Chain' for 'Carrier Killer' Missiles",
        publishedAt: 1676999531,
        uri: "/opinion/chinas-rapid-advances-in-satellite-technology-strengthens-kill-chain-for-carrier-killer-missiles-5063642",
    },
    {
        title: "Seoul: N. Korea's Kim Lost 20 Kilograms but Remains Healthy",
        publishedAt: 1635492635,
        uri: "/world/seoul-n-koreas-kim-lost-20-kilograms-but-remains-healthy-4074290",
    },
    {
        title: "Facebook to Shut Down Facial Recognition System, Delete Data of 1 Billion Users",
        publishedAt: 1635875335,
        uri: "/article/facebook-to-shut-down-facial-recognition-system-delete-data-of-1-billion-users-4082237",
    },
    {
        title: "7 Potential IPOs in 2022: Discord, OpenSea, Impossible Foods, and More",
        publishedAt: 1640845063,
        uri: "/article/7-potential-ipos-in-2022-discord-opensea-impossible-foods-and-more-4183751",
    },
    {
        title: "Robert F. Kennedy Jr.: Big Tech, Media Propaganda Facilitated Takeover of Democratic Institutions by the Medical Cartel",
        publishedAt: 1644361661,
        uri: "/us/robert-f-kennedy-jr-media-as-a-propaganda-device-facilitated-takeover-of-democratic-institutions-by-the-medical-cartel-4249892",
    },
    {
        title: "‘I Couldn’t Hold It Back’: US-born Chinese Figure Skater Breaks Down After Another Fall at Beijing 2022",
        publishedAt: 1644335189,
        uri: "/sports/i-couldnt-hold-it-back-us-born-chinese-figure-skater-breaks-down-after-another-fall-at-beijing-2022-4263830",
    },
    {
        title: "How Cancer Deaths From the COVID Jabs Are Being Hidden",
        publishedAt: 1665757843,
        uri: "/health/how-cancer-deaths-from-the-covid-jabs-are-being-hidden-4796410",
    },
    {
        title: "UN Secretary-General Betrays Human Rights by Attending Beijing Olympics",
        publishedAt: 1640121861,
        uri: "/opinion/un-secretary-general-betrays-human-rights-by-attending-beijing-olympics-4170841",
    },
    {
        title: "Rep. Gohmert Says Diplomatic Boycott of Beijing Olympics Won't Make Much Impact",
        publishedAt: 1639327031,
        uri: "/us/rep-gohmert-says-diplomatic-boycott-of-beijing-olympics-fails-to-make-an-impact-4152595",
    },
    {
        title: "Trump Signs Executive Order Promoting Trustworthy US Government AI Use",
        publishedAt: 1607100708,
        uri: "/us/trump-signs-executive-order-promoting-trustworthy-us-government-ai-use-3604779",
    },
    {
        title: "Biden Administration Is Working to Reduce China Investment and Trade—But Moving Slowly",
        publishedAt: 1657912441,
        uri: "/opinion/biden-administration-is-working-to-reduce-china-investment-and-trade-but-moving-slowly-4597211",
    },
    {
        title: "Inflation Reduction Act Is Socialist Wish List: Expert",
        publishedAt: 1660664087,
        uri: "/article/inflation-reduction-act-is-socialist-wish-list-expert-4662478",
    },
    {
        title: "AUKUS Arms Race Fears 'Misleading': Defense Expert",
        publishedAt: 1636599209,
        uri: "/world/aukus-arms-race-fears-misleading-defence-expert-4098269",
    },
    {
        title: "Behind in Quantum Computer Race, Germany Gets Boost From IBM",
        publishedAt: 1623772542,
        uri: "/world/behind-in-quantum-computer-race-germany-gets-boost-from-ibm-3859274",
    },
    {
        title: "Texas Gov. Abbott Declares State Will Be 'Home of Semiconductor Manufacturing' Amid Global Chip Shortage",
        publishedAt: 1638880406,
        uri: "/us/texas-gov-abbott-declares-state-will-be-home-of-semiconductor-manufacturing-amid-global-chip-shortage-4142974",
    },
    {
        title: "Layoffs, Hiring Freezes Becoming More Common in US Labor Market",
        publishedAt: 1657646368,
        uri: "/article/layoffs-hiring-freezes-becoming-more-common-in-us-labor-market-4592711",
    },
    {
        title: "California Losing Tesla Headquarters to Texas",
        publishedAt: 1633726308,
        uri: "/us/california-losing-tesla-headquarters-to-texas-4039763",
    },
    {
        title: "IN-DEPTH: US Territories, Allies Say CCP Subversion Imperils Security, Sovereignty",
        publishedAt: 1693066232,
        uri: "/china/pacific-turmoil-us-territories-allies-say-ccp-subversion-imperils-security-sovereignty-5480971",
    },
    {
        title: "It’s Time to Restart the Strategic Defense Initiative",
        publishedAt: 1647907095,
        uri: "/opinion/its-time-to-restart-the-strategic-defense-initiative-4349556",
    },
    {
        title: "‘Defund the Police’ Movement Could Mean More Lone Wolf Attacks: Terrorism Experts",
        publishedAt: 1624305950,
        uri: "/world/defund-the-police-movement-could-mean-more-lone-wolf-attacks-terrorism-experts-3866275",
    },
    {
        title: "The Future of Warfare Is Quantum: Has China Already Won?",
        publishedAt: 1633639149,
        uri: "/opinion/the-future-of-warfare-is-quantum-has-china-already-won-4035535",
    },
    {
        title: "Where in the World Is China's Military?",
        publishedAt: 1658178194,
        uri: "/china/where-in-the-world-is-chinas-military-4603263",
    },
    {
        title: "New Hypersonic Missile Versus China",
        publishedAt: 1649598354,
        uri: "/opinion/new-hypersonic-missile-versus-china-4391253",
    },
    {
        title: "IN-DEPTH: China’s Economy Is Faltering",
        publishedAt: 1687525205,
        uri: "/china/in-depth-chinas-economy-is-faltering-5329514",
    },
    {
        title: "Xenobots: Cell-Based Living Robots That Can Self-Replicate",
        publishedAt: 1638367894,
        uri: "/tech/xenobots-cell-based-living-robots-that-can-self-replicate-4131111",
    },
    {
        title: "Are We the Last Generation of Humans?",
        publishedAt: 1653342037,
        uri: "/opinion/are-we-the-last-generation-of-humans-4477490",
    },
    {
        title: "Is This Chinese App Harvesting Your Data?",
        publishedAt: 1646005226,
        uri: "/opinion/is-this-chinese-app-harvesting-your-data-4299437",
    },
    {
        title: "US, UK, Australia Announce New Security Partnership Amid Rise in Chinese Influence",
        publishedAt: 1631746010,
        uri: "/china/us-uk-australia-announce-new-security-partnership-amid-rising-chinese-influence-3999725",
    },
    {
        title: "Another Australian State Launches Home Quarantine App With Facial Recognition, Geolocation Tech",
        publishedAt: 1632957898,
        uri: "/world/another-australian-state-launches-home-quarantine-app-with-facial-recognition-geolocation-tech-4022657",
    },
    {
        title: "TSMC Announces Chip Plant in Japan, Flags 'Tight' Capacity Throughout 2022",
        publishedAt: 1634224123,
        uri: "/article/tsmc-announces-chip-plant-in-japan-flags-tight-capacity-throughout-2022-4049050",
    },
    {
        title: "Is Time on China’s Side?",
        publishedAt: 1660244432,
        uri: "/opinion/is-time-on-chinas-side-4657092",
    },
    {
        title: "Why Is Free Health Care for the Poor Not Enough for California Progressives?",
        publishedAt: 1642652789,
        uri: "/opinion/why-is-free-health-care-for-the-poor-not-enough-for-california-progressives-4224561",
    },
    {
        title: "Beijing Reacts to US Report on Close Encounter Between US and Chinese Satellites",
        publishedAt: 1656716857,
        uri: "/china/beijing-angry-over-us-news-report-on-close-encounter-between-us-and-chinese-satellites-4570590",
    },
    {
        title: "Elon Musk Reveals Twitter Staff Had a 'Fauci Fan Club'",
        publishedAt: 1672238372,
        uri: "/article/elon-musk-reveals-twitter-staff-had-a-fauci-fan-club-4949107",
    },
    {
        title: "The Biden Administration Still Has No China Policy",
        publishedAt: 1652727655,
        uri: "/opinion/the-biden-administration-still-has-no-china-policy-4465398",
    },
    {
        title: "Italy Breaks Up Fake EU COVID-19 Pass Schemes",
        publishedAt: 1625396400,
        uri: "/world/italy-breaks-up-fake-eu-covid-19-pass-schemes-3885647",
    },
    {
        title: "Ford, Google Join Hands to Offer Cloud-Based Data Services",
        publishedAt: 1612232347,
        uri: "/article/ford-google-join-hands-to-offer-cloud-based-data-services-3680458",
    },
    {
        title: "Man Bypasses Facial Recognition on Sleeping Ex-girlfriend's Phone by Lifting Her Eyelids, Steals Money",
        publishedAt: 1639846877,
        uri: "/china/man-bypasses-facial-recognition-on-sleeping-ex-girlfriends-phone-by-lifting-her-eyelids-steals-money-4158884",
    },
    {
        title: "Evidence Overwhelmingly Pointed to Leak From Wuhan Lab From Day One",
        publishedAt: 1679507806,
        uri: "/opinion/evidence-overwhelmingly-pointed-to-leak-from-wuhan-lab-from-day-one-5141744",
    },
    {
        title: "GOP House Members Pose Questions to NIH Over US Nonprofit That Helped Fund Wuhan Lab",
        publishedAt: 1623413004,
        uri: "/us/gop-house-members-pose-questions-to-nih-over-us-nonprofit-that-helped-fund-wuhan-lab-3854335",
    },
    {
        title: "China’s Alibaba Tightens Grip on Southeast Asia",
        publishedAt: 1650394887,
        uri: "/opinion/chinas-alibaba-tightens-grip-on-southeast-asia-4412667",
    },
    {
        title: "China Challenges on Cryptocurrency",
        publishedAt: 1627763205,
        uri: "/opinion/china-challenges-on-cryptocurrency-3926929",
    },
    {
        title: "Inside China's Global Military Expansion",
        publishedAt: 1694340040,
        uri: "/article/inside-chinas-global-military-expansion-5487930",
    },
    {
        title: "The Chinese Regime Aims to Influence and Control All Human Endeavors",
        publishedAt: 1632576858,
        uri: "/opinion/the-chinese-regime-aims-to-influence-and-control-all-human-endeavors-4013758",
    },
    {
        title: "Analysis: Outage Shows How Amazon's Complex Cloud Makes Backup Plans Difficult",
        publishedAt: 1639122726,
        uri: "/tech/analysis-outage-shows-how-amazons-complex-cloud-makes-backup-plans-difficult-4148301",
    },
    {
        title: "Rampant Online Child Abuse Spurs Calls for Big Tech to ID Users on Sign-Up",
        publishedAt: 1639120901,
        uri: "/world/rampant-online-child-abuse-spurs-calls-for-big-tech-to-id-users-on-sign-up-4149587",
    },
    {
        title: "Insomnia – a Comprehensive Look With Natural Remedies",
        publishedAt: 1659044189,
        uri: "/health/insomnia-a-comprehensive-look-with-natural-remedies-4628013",
    },
    {
        title: "Keep Section 230 But Amend It to Force Big Tech to be Transparent: Kalev Leetaru",
        publishedAt: 1634097706,
        uri: "/tech/keep-section-230-but-amend-it-to-force-big-tech-to-be-transparent-kalev-leetaru-4044683",
    },
    {
        title: "LAPD Used Fake Social Media Accounts to Spy on Users: Documents",
        publishedAt: 1637694252,
        uri: "/us/lapd-used-fake-social-media-accounts-to-spy-on-users-documents-4119703",
    },
    {
        title: "Supercomputer Predicts Evolution of La Palma Eruption",
        publishedAt: 1636478161,
        uri: "/world/supercomputer-predicts-evolution-of-la-palma-eruption-4094600",
    },
    {
        title: "Biden's COVID-19 Vaccine Mandates Driving Big Business to Relocate to Texas: Gov. Abbott",
        publishedAt: 1638804379,
        uri: "/us/bidens-covid-19-vaccine-mandates-driving-big-business-to-relocate-headquarters-into-texas-gov-abbott-4140771",
    },
    {
        title: "Xi’s Control Is Preventing China From Overtaking the US",
        publishedAt: 1668014629,
        uri: "/opinion/xis-control-is-preventing-china-from-overtaking-the-us-4848967",
    },
    {
        title: "Top Amazon Post-Black Friday Deals You Do Not Want to Miss",
        publishedAt: 1700208040,
        uri: "/article/top-amazon-black-friday-deals-you-do-not-want-to-miss-5525529",
    },
    {
        title: "Chinese Researchers Build AI 'Prosecutor' That Can File Charges by Itself",
        publishedAt: 1641045630,
        uri: "/china/chinese-researchers-built-ai-prosecutor-that-can-file-charges-by-itself-4187616",
    },
    {
        title: "Does China Only Have 10 Years Left Before It Implodes?",
        publishedAt: 1675884857,
        uri: "/opinion/does-china-only-have-10-years-left-before-it-implodes-4997075",
    },
    {
        title: "How Israel, a Close Ally of the US, Became a Close Ally of China",
        publishedAt: 1640620883,
        uri: "/opinion/how-israel-a-close-ally-of-the-us-became-a-close-ally-of-china-4173534",
    },
    {
        title: "Understanding the Marxist Underpinnings of Education",
        publishedAt: 1689264817,
        uri: "/us/understanding-the-marxist-underpinnings-of-education-5356837",
    },
    {
        title: "GOP Senators Urge Tightening of Export Controls to Counteract 'China's Economic Predation'",
        publishedAt: 1623840395,
        uri: "/us/gop-senators-urge-tightening-of-export-controls-to-counteract-chinas-economic-predation-3860795",
    },
    {
        title: "US Losing Ground to China Due to Pentagon’s Wasteful Bureaucracy: Former Chief Software Officer",
        publishedAt: 1644775214,
        uri: "/china/pentagons-bureaucratic-waste-ensures-us-loses-ground-to-china-former-chief-software-officer-4271917",
    },
    {
        title: "The ‘Great Reset’: A Blueprint for Destroying Freedom, Innovation, and Prosperity",
        publishedAt: 1661977379,
        uri: "/opinion/the-great-reset-a-blueprint-for-destroying-freedom-innovation-and-prosperity-4702628",
    },
    {
        title: "China’s Secret Navy in the South China Sea",
        publishedAt: 1650730776,
        uri: "/opinion/chinas-secret-navy-in-the-south-china-sea-4416924",
    },
    {
        title: "Billionaire's Space Trip Brought $125 Million to St. Jude Hospital",
        publishedAt: 1644650305,
        uri: "/science/billionaires-space-trip-brought-125-million-to-st-jude-hospital-4271927",
    },
    {
        title: "AI Operations Could Lead to ‘Catastrophic’ Consequences for China and US: Expert",
        publishedAt: 1637792289,
        uri: "/china/ai-operations-could-lead-to-catastrophic-consequences-for-china-and-us-expert-4122695",
    },
    {
        title: "‘I'm the Big Problem:’ COVID-19 Whistleblower on Why She Won’t Be Silent Despite Threats to Her Life",
        publishedAt: 1640104784,
        uri: "/article/im-the-big-problem-covid-19-whistleblower-on-why-she-wont-be-silent-despite-threats-to-her-life-4167633",
    },
    {
        title: "Researchers Suspect New Variants of Rapidly Progressing Brain Degenerating Diseases From COVID-19 Vaccines",
        publishedAt: 1657635983,
        uri: "/health/researchers-suspects-new-variants-of-rapidly-progressing-brain-degenerating-diseases-from-covid-19-vaccines-4581466",
    },
    {
        title: "Pentagon Needs to Reform Budget Process to Confront Chinese Military Threat: Report",
        publishedAt: 1614346032,
        uri: "/us/pentagon-needs-to-reform-budget-process-to-confront-chinese-military-threat-report-3712301",
    },
    {
        title: "Bill Gates- and Jeff Bezos-Backed Mining Firm to Seek Electric Vehicle Metals in Greenland",
        publishedAt: 1628617484,
        uri: "/world/bill-gates-and-jeff-bezos-backed-mining-firm-to-seek-electric-vehicle-metals-in-greenland-3942041",
    },
    {
        title: "Facebook Chief Technology Officer Makes 'Difficult Decision' to Step Down in 2022",
        publishedAt: 1632393100,
        uri: "/article/facebook-chief-technology-officer-makes-difficult-decision-to-step-down-in-2022-4012505",
    },
    {
        title: "Sunshine State Could Soon Decouple From China",
        publishedAt: 1643824193,
        uri: "/us/sunshine-state-could-decouple-from-china-4252312",
    },
    {
        title: "Apple Halts Plan to Scan Child Sex Abuse Images in iPhones",
        publishedAt: 1630709681,
        uri: "/article/apple-halts-plan-to-scan-child-sex-abuse-images-in-iphones-3980669",
    },
    {
        title: "How to Stand Out to Small Business Investors",
        publishedAt: 1668905037,
        uri: "/bright/how-to-stand-out-to-small-business-investors-4874296",
    },
    {
        title: "China’s Penchant for Plagiarism Poses an Existential Threat to US",
        publishedAt: 1645225706,
        uri: "/opinion/chinas-penchant-for-plagiarism-poses-an-existential-threat-to-us-4274960",
    },
    {
        title: "The Chinese Regime Uses Infiltration Tactics to Control Dissent and Steal Technology",
        publishedAt: 1644618547,
        uri: "/opinion/the-chinese-regime-uses-infiltration-tactics-to-control-dissent-and-steal-technology-4265230",
    },
    {
        title: "Beijing Will Attempt to Censor the Metaverse",
        publishedAt: 1643414904,
        uri: "/opinion/beijing-will-attempt-to-censor-the-metaverse-4242666",
    },
    {
        title: "US Proposes AI Cooperation With India on Defense, Security Issues",
        publishedAt: 1608421239,
        uri: "/world/us-proposes-ai-cooperation-with-india-on-defense-and-security-issues-3624077",
    },
    {
        title: "Artificial Intelligence (AI), It's Here: My Experience With exClone",
        publishedAt: 1413302990,
        uri: "/article/artificial-intelligence-ai-its-here-my-experience-with-exclone-1018057",
    },
    {
        title: "China’s New Surveillance",
        publishedAt: 1638806619,
        uri: "/opinion/chinas-new-surveillance-4135551",
    },
    {
        title: "Former Google CEO Slams US' 'Pathetic' Performance in 5G Race, Leaving America 'Well Behind' China",
        publishedAt: 1645125498,
        uri: "/china/former-google-ceo-slams-us-pathetic-performance-in-5g-race-leaving-america-well-behind-china-4284927",
    },
    {
        title: "In the Name of Science: How Modern Medicine Reduced the Art of Healing",
        publishedAt: 1665665710,
        uri: "/health/in-the-name-of-science-how-modern-medicine-reduced-the-art-of-healing-4783763",
    },
    {
        title: "Jeff Bezos to Fly Into Space Next Month",
        publishedAt: 1623082909,
        uri: "/tech/jeff-bezos-to-fly-into-space-next-month-3847779",
    },
    {
        title: "The Other Epidemic: Chinese Spies and Academic Espionage ",
        publishedAt: 1636667896,
        uri: "/opinion/the-other-epidemic-chinese-spies-and-academic-espionage-4095082",
    },
    {
        title: "Chinese Surveillance Technology Aids Iranian Regime as Tehran Clamps Down on Protesters",
        publishedAt: 1670823237,
        uri: "/world/chinese-surveillance-technology-aids-iranian-regime-as-tehran-clamps-down-on-protesters-4876337",
    },
    {
        title: "China Has Debated Attacking Taiwan-Controlled Islands, Top Taiwan Official Says",
        publishedAt: 1636056204,
        uri: "/china/china-has-debated-attacking-taiwan-controlled-islands-top-taiwan-official-says-4086851",
    },
    {
        title: "Body Responds in 5 Ways to COVID Vaccine Injuries: Doctor",
        publishedAt: 1670779405,
        uri: "/health/body-responds-in-5-ways-to-covid-vaccine-injuries-doctor-4917036",
    },
    {
        title: "New Report Highlights Corruption at DOJ That Began With Obama",
        publishedAt: 1667939354,
        uri: "/opinion/new-report-highlights-corruption-at-doj-that-began-with-obama-4847834",
    },
    {
        title: "‘Very Proud’ of Work Advising Huawei on Meng Wanzhou Case, Charest Says at Tory Leadership Campaign Launch",
        publishedAt: 1647039636,
        uri: "/world/very-proud-of-work-advising-huawei-on-meng-wanzhou-case-charest-says-at-tory-leadership-campaign-launch-4332109",
    },
    {
        title: "'We Cannot Afford to Lose This Race': Former National Security Adviser Warns US Losing Its Advantage to China in 5G",
        publishedAt: 1646503239,
        uri: "/china/we-cannot-afford-to-lose-this-race-former-national-security-advisor-warns-us-losing-its-advantage-to-china-in-5g-4316735",
    },
    {
        title: "Chinese Regime Is 'Greatest Adversary' of US: Former Director of National Intelligence",
        publishedAt: 1618856245,
        uri: "/china/chinese-regime-is-us-greatest-adversary-former-director-of-national-intelligence-3782030",
    },
    {
        title: "Samsung Picks Texas City for $17 Billion Semiconductor Factory, to Create 2,000+ Jobs",
        publishedAt: 1637825794,
        uri: "/article/samsung-picks-texas-city-for-17-billion-semiconductor-factory-to-create-2000-jobs-4123597",
    },
    {
        title: "China in Focus (Feb. 4): China's AI Giant Loses $1.7 Billion Share Value in a Day",
        publishedAt: 1612491357,
        uri: "/epochtv/china-in-focus-feb-4-chinas-ai-giant-loses-1-7b-share-value-in-a-day-3685676",
    },
    {
        title: "University of Alberta to Work With ‘All Levels of Government’ to Curtail Research Ties With China",
        publishedAt: 1620254448,
        uri: "/world/university-of-alberta-to-work-with-all-levels-of-government-to-curtail-research-ties-with-china-3804258",
    },
    {
        title: "Chinese Acquisition of Semiconductor Firm Poses Security Risks, US Treasury Warns",
        publishedAt: 1630445572,
        uri: "/china/us-treasury-warns-of-national-security-risks-in-chinese-acquisition-of-semiconductor-firm-magnachip-3974167",
    },
    {
        title: "The CCP Is Destroying China’s Future",
        publishedAt: 1661461305,
        uri: "/opinion/the-ccp-is-destroying-chinas-future-4688445",
    },
    {
        title: "The Pandemic Has Not Stopped China’s Military Buildup",
        publishedAt: 1620598342,
        uri: "/opinion/the-pandemic-has-not-stopped-chinas-military-buildup-3807842",
    },
    {
        title: "Technology Plays God in the Effort to Erase Sexual Identity",
        publishedAt: 1633732875,
        uri: "/opinion/technology-plays-god-in-the-effort-to-erase-sexual-identity-4039971",
    },
    {
        title: "China’s New Aircraft Carrier Uses Catapult Tech Stolen From US",
        publishedAt: 1656451863,
        uri: "/china/chinas-new-aircraft-carrier-uses-catapult-tech-stolen-from-us-4557632",
    },
    {
        title: "Trump, Haley in One-on-One Race on Eve of New Hampshire Primary",
        publishedAt: 1705938421,
        uri: "/us/live-updates-trump-haley-in-one-on-one-race-on-eve-of-new-hampshire-primary-5571074",
    },
    {
        title: "Polish Gene Project Moves to Drop Chinese Tech Over Data Concerns",
        publishedAt: 1632384954,
        uri: "/china/polish-gene-project-moves-to-drop-chinese-tech-on-data-concerns-4010634",
    },
    {
        title: "Tesla to Delay New Models in 2022 for Automated Vehicle Push",
        publishedAt: 1643500255,
        uri: "/article/tesla-to-delay-new-models-in-2022-for-automated-vehicle-push-4241264",
    },
    {
        title: "Chinese Communist Party Advances Agenda to Weaken US Through Stealth Tactics: Expert",
        publishedAt: 1641698243,
        uri: "/china/chinese-communist-party-advances-its-agenda-to-weaken-us-through-stealth-tactics-expert-4200291",
    },
    {
        title: "State Lottery Advertising Tells Players Half of the Story",
        publishedAt: 1657776628,
        uri: "/us/state-lottery-advertising-tells-players-half-of-the-story-4593416",
    },
    {
        title: "Destruction of Traditional Culture Key to Successful Marxist Revolution: James Lindsay",
        publishedAt: 1644274889,
        uri: "/us/destruction-of-traditional-culture-key-to-successful-marxist-revolution-james-lindsay-4253973",
    },
    {
        title: "Greens Pledge to Cancel AUKUS, Cut Australian Defence Spending Amid China Tensions",
        publishedAt: 1634606064,
        uri: "/world/greens-pledge-to-cancel-aukus-cut-australian-defence-spending-amid-china-tensions-4055940",
    },
    {
        title: "YouTube Demonetizes Popular Australian Fishing Channel for ‘Animal Abuse'",
        publishedAt: 1632200162,
        uri: "/world/youtube-demonetizes-popular-australian-fishing-channel-for-animal-abuse-4007622",
    },
    {
        title: "US Not Looking for Cold War With China: White House",
        publishedAt: 1632177259,
        uri: "/china/us-not-looking-for-cold-war-with-china-white-house-4007284",
    },
    {
        title: "Pentagon Cancels $10 Billion Contract That Microsoft and Amazon Were Fighting Over",
        publishedAt: 1625596977,
        uri: "/us/pentagon-cancels-10-billion-contract-that-microsoft-and-amazon-were-fighting-over-3889241",
    },
    {
        title: "Augmented and Virtual Reality Expo Returns to Silicon Valley",
        publishedAt: 1636684298,
        uri: "/us/augmented-and-virtual-reality-expo-returns-to-silicon-valley-4100317",
    },
    {
        title: "US and China Announce Major Investment Plans in Heated AI Race",
        publishedAt: 1626807289,
        uri: "/china/us-and-china-announce-major-investment-plans-in-heated-ai-race-3908743",
    },
    {
        title: "‘One Team, One Fight!’: Former DoD Official Highlights Urgency in US Fight to Maintain AI Superiority Over China",
        publishedAt: 1634247611,
        uri: "/china/one-team-one-fight-former-dod-official-highlights-urgency-in-us-fight-to-maintain-ai-superiority-over-china-4049076",
    },
    {
        title: "Chinese Regime Using US Tech to Create Weapons, House Republicans Warn",
        publishedAt: 1635282647,
        uri: "/china/chinese-regime-using-us-tech-to-create-weapons-house-republicans-warn-4069309",
    },
    {
        title: "Nuclear Submarine Deal Will Reshape Indo-Pacific Relations",
        publishedAt: 1631818296,
        uri: "/world/nuclear-submarine-deal-will-reshape-indo-pacific-relations-4000788",
    },
    { title: "5 Trends in Finance", publishedAt: 1666125791, uri: "/bright/5-trends-in-finance-4802118" },
    {
        title: "Apple Announces 1st East Coast Campus in North Carolina",
        publishedAt: 1619450222,
        uri: "/article/apple-announces-1st-east-coast-campus-in-north-carolina-3791342",
    },
    {
        title: "India Honors Soldiers Killed Fighting Chinese at Galwan",
        publishedAt: 1611692117,
        uri: "/world/india-honors-soldiers-killed-fighting-chinese-at-galwan-3672127",
    },
    {
        title: "China, Russia ‘Primary Culprits’ in Conducting Espionage and Foreign Interference in Canada: Parliamentary Report",
        publishedAt: 1618424312,
        uri: "/china/china-russia-primary-culprits-in-conducting-espionage-and-foreign-interference-in-canada-parliamentary-report-3774955",
    },
    {
        title: "Fauci Lied About COVID-19 Origin in 2020: Adm. Brett Giroir",
        publishedAt: 1622786201,
        uri: "/article/fauci-lied-about-covid-19-origin-in-2020-says-adm-brett-giroir-3844083",
    },
    {
        title: "GOP Lawmakers on House Intel Committee Probe Potential Chinese ‘Malign Influence’ Over Forbes Merger",
        publishedAt: 1650383634,
        uri: "/china/house-intel-committee-probes-potential-chinese-malign-influence-over-forbes-merger-4402138",
    },
    {
        title: "Bank of England Sees Potential Risks From Cloud Data Providers",
        publishedAt: 1619018372,
        uri: "/world/bank-of-england-sees-potential-risks-from-cloud-data-providers-3785318",
    },
    {
        title: "India Arrests 12, Including 2 Chinese Women, for Circulating Malicious App on WhatsApp",
        publishedAt: 1611068397,
        uri: "/world/india-arrests-2-chinese-women-for-circulating-infected-app-on-whatsapp-3660853",
    },
    {
        title: "Researchers Complete First-Ever Detailed Map of Global Coral",
        publishedAt: 1631130846,
        uri: "/science/researchers-complete-first-ever-detailed-map-of-global-coral-3987759",
    },
    {
        title: "Businesses Question Old Inventory Strategies Amid Shortages, Delays",
        publishedAt: 1635730655,
        uri: "/article/amid-shortages-and-delays-industries-question-old-inventory-strategies-4078550",
    },
    {
        title: "China’s Control Over ‘Algorithms’",
        publishedAt: 1633286656,
        uri: "/opinion/chinas-control-over-algorithms-another-challenge-for-us-investors-4029401",
    },
    {
        title: "Military Budget Proposal Would Cost an Extra $1.2 Trillion Over 10 Years: Tax Expert",
        publishedAt: 1630874518,
        uri: "/us/military-budget-proposal-would-cost-an-extra-1-2-trillion-over-10-years-tax-expert-3982675",
    },
    {
        title: "GOP Lawmakers Unveil Bill to Sanction Chinese Health Officials Over COVID-19 Origins",
        publishedAt: 1623851632,
        uri: "/article/gop-lawmakers-unveil-bill-to-sanction-chinese-health-officials-over-covid-19-origins-3860784",
    },
    {
        title: "Apple Will Scan iPhones for Illegal Child Abuse Images, Sparking Privacy Debate",
        publishedAt: 1628200674,
        uri: "/article/apple-will-scan-all-iphones-for-illegal-child-abuse-images-sparking-privacy-debate-3935633",
    },
    {
        title: "New US-EU Trade and Technology Council Is Designed to Counter China, Experts Say",
        publishedAt: 1633042770,
        uri: "/china/new-us-eu-trade-and-technology-council-is-designed-to-counter-china-expert-says-4026059",
    },
    {
        title: "US Blacklists Dozens of Chinese Biotech Firms That Aid Military, Including for ‘Brain-Control Weaponry’",
        publishedAt: 1639686293,
        uri: "/china/us-blacklist-dozens-of-chinese-biotech-firms-that-aid-military-including-for-brain-control-weaponry-4161999",
    },
    {
        title: "5 Highest Yielding Dow Jones Stocks",
        publishedAt: 1639628395,
        uri: "/article/5-highest-yielding-dow-jones-stocks-4160014",
    },
    {
        title: "My Book Is Being Burned",
        publishedAt: 1676659535,
        uri: "/opinion/my-book-is-being-burned-5065858",
    },
    {
        title: "Samsung Vice Chairman Lee Jae-yong Visits US for Chip Plant Project",
        publishedAt: 1637413378,
        uri: "/world/samsung-vice-chairman-lee-jae-yong-visits-us-for-chip-plant-project-4114913",
    },
    {
        title: "What Americans Should Expect of Their Leaders",
        publishedAt: 1643041186,
        uri: "/opinion/what-americans-should-expect-of-their-leaders-4225900",
    },
    {
        title: "London Metal Exchange Faces Complaint From US Hedge Fund Group Over Cancelled Nickel Trades",
        publishedAt: 1655313212,
        uri: "/china/london-metal-exchange-faces-complaint-from-us-hedge-fund-group-over-cancelled-nickel-trades-4531940",
    },
    {
        title: "Philippines' Defense Chief Says Beijing Intends to Occupy More South China Sea Areas",
        publishedAt: 1617586299,
        uri: "/world/philippines-defense-chief-says-china-intends-to-occupy-more-south-china-sea-areas-3761786",
    },
    {
        title: "US Urged to Boost AI Weapons to Counter China’s Rise",
        publishedAt: 1614692721,
        uri: "/china/us-urged-to-boost-ai-weapons-to-counter-chinas-rise-3716648",
    },
    {
        title: "Divide and Rule: The Plan to Make You Disposable",
        publishedAt: 1674226802,
        uri: "/health/divide-and-rule-the-plan-to-make-you-disposable-4999060",
    },
    {
        title: "DOJ Drops Charges Against 5 Researchers Accused of Hiding Chinese Military Affiliations: Report",
        publishedAt: 1627091357,
        uri: "/us/doj-drops-charges-against-5-researchers-accused-of-hiding-chinese-military-affiliations-report-3916163",
    },
    {
        title: "National Security Concerns Mount as Chinese Company Builds Major Plant Near North Dakota Military Base",
        publishedAt: 1658235632,
        uri: "/us/company-with-ties-to-china-continuing-with-corn-mill-project-near-airbase-in-north-dakota-4605916",
    },
    {
        title: "Taking the Gold in Technology Theft",
        publishedAt: 1644606735,
        uri: "/opinion/taking-the-gold-in-technology-theft-4263803",
    },
    {
        title: "Alibaba’s European Hub Is Causing Espionage Concerns in Belgium",
        publishedAt: 1622649039,
        uri: "/china/alibabas-european-hub-is-causing-espionage-concerns-in-belgium-3839408",
    },
    {
        title: "Can Russia’s Su-75 Stealth Fighter Checkmate America’s F-35?",
        publishedAt: 1627066742,
        uri: "/opinion/can-russias-su-75-stealth-fighter-checkmate-americas-f-35-3915767",
    },
    {
        title: "Waning Enthusiasm, Competition Weigh on Meta Stock in Earnings Fallout",
        publishedAt: 1644265091,
        uri: "/article/waning-enthusiasm-competition-weigh-on-meta-stock-in-earnings-fallout-4261469",
    },
    {
        title: "EpochTV Review: Things That Make You Go Hmm...",
        publishedAt: 1632587682,
        uri: "/opinion/epochtv-review-things-that-make-you-go-hmm-4015437",
    },
    {
        title: "Senate Adopts Amendment That Slashes Tariffs on Hundreds of Chinese Imports to US",
        publishedAt: 1622155970,
        uri: "/us/senate-adopts-amendment-that-slashes-tariffs-on-hundreds-of-chinese-imports-to-us-3834094",
    },
    {
        title: "The World Economic Forum Will Dictate the 4th Industrial Revolution",
        publishedAt: 1673565641,
        uri: "/opinion/the-world-economic-forum-will-dictate-the-fourth-industrial-revolution-4971255",
    },
    {
        title: "Spy Chief Says China Is Bent on Stealing Canadian Secrets, Silencing Critics",
        publishedAt: 1612907645,
        uri: "/world/spy-chief-says-china-is-bent-on-stealing-canadian-secrets-silencing-critics-3691028",
    },
    {
        title: "Where's the Republican Political Strategy for 2022?",
        publishedAt: 1663249146,
        uri: "/opinion/wheres-the-republican-political-strategy-for-2022-4730441",
    },
    {
        title: "US Expert: Images Show Chinese Ship Waste Endangering Reefs",
        publishedAt: 1626160079,
        uri: "/china/us-expert-images-show-chinese-ship-waste-endangering-reefs-3897924",
    },
    {
        title: "French Should Have Seen Sub Deal Cancellation Coming: Defence Analyst",
        publishedAt: 1633332389,
        uri: "/world/french-should-have-seen-sub-deal-cancellation-coming-defence-analyst-4030289",
    },
    {
        title: "Leaked Documents Reveal Beijing Created a Tech Alliance With Former Soviet Bloc Countries",
        publishedAt: 1609936508,
        uri: "/china/leaked-documents-reveal-beijing-created-a-tech-alliance-with-former-soviet-bloc-countries-3616518",
    },
    {
        title: "AI-Generated 'People' Push Anti-Western and Pro-CCP Narratives on Social Media: Report",
        publishedAt: 1628607255,
        uri: "/china/ai-generated-people-push-anti-western-and-pro-ccp-narratives-on-social-media-report-3941563",
    },
    {
        title: "US Blacklists Over a Dozen Chinese Entities for Aiding Xinjiang Abuses and Military Modernization",
        publishedAt: 1625856911,
        uri: "/china/us-blacklists-over-a-dozen-chinese-entities-for-aiding-xinjiang-abuses-and-military-modernization-3894741",
    },
    {
        title: "We Need a Reset, but Not ‘The Great Reset’",
        publishedAt: 1656624940,
        uri: "/health/the-only-choice-left-slavery-or-freedom-4569601",
    },
    {
        title: "US Companies Are Supercharging the Chinese Communist Party",
        publishedAt: 1641935404,
        uri: "/china/american-companies-are-supercharging-the-chinese-communist-party-4202904",
    },
    {
        title: "America Should Not Silence Science",
        publishedAt: 1653601419,
        uri: "/health/america-should-not-silence-science-4494299",
    },
    {
        title: "China’s Quantum Ambition Meets US Counterblow",
        publishedAt: 1638735415,
        uri: "/opinion/chinas-quantum-ambition-meets-us-counterblow-4139970",
    },
    {
        title: "Future of San Francisco’s Great Highway in Jeopardy",
        publishedAt: 1627340621,
        uri: "/opinion/future-of-san-franciscos-great-highway-in-jeopardy-3919581",
    },
    {
        title: "Another China-Style Sputnik Moment?",
        publishedAt: 1634926979,
        uri: "/opinion/another-china-style-sputnik-moment-4062530",
    },
    {
        title: "Canada’s Failure to Heed Multiple Warnings Seen as Reason for AUKUS Snub",
        publishedAt: 1632327446,
        uri: "/world/canadas-failure-to-heed-multiple-warnings-seen-as-reason-for-aukus-snub-4010695",
    },
    {
        title: "New AUKUS Partnership a ‘Win’ for Democracies: Experts",
        publishedAt: 1632320988,
        uri: "/china/new-aukus-partnership-a-win-for-democracies-experts-4009120",
    },
    {
        title: "Transcript of Second GOP Presidential Debate",
        publishedAt: 1695866033,
        uri: "/us/transcript-of-second-gop-presidential-debate-5499583",
    },
    {
        title: "Chinese Diplomats Are the Driving Force in Beijing's Foreign Technology Acquisition: Report",
        publishedAt: 1623339778,
        uri: "/china/chinese-diplomats-are-the-driving-force-in-beijings-foreign-technology-acquisition-report-3849576",
    },
    {
        title: "Are China–US Relations Escalating Into a Cold War?",
        publishedAt: 1636494158,
        uri: "/opinion/are-china-us-relations-escalating-into-a-cold-war-4087821",
    },
    {
        title: "Australia to Acquire Tomahawk Cruise Missiles, 8 Nuclear Subs Amid Historic US, UK Alliance",
        publishedAt: 1631761452,
        uri: "/world/australia-to-acquire-tomahawk-cruise-missiles-amid-historic-trilateral-alliance-with-us-uk-4000098",
    },
    {
        title: "White House: China's Opposition to Investigation Into COVID-19 Origins 'Irresponsible'",
        publishedAt: 1626977463,
        uri: "/article/white-house-chinas-opposition-to-investigation-into-covid-19-origins-irresponsible-3913871",
    },
    {
        title: "Director of National Intelligence: China Using 'Gene Editing' to Boost Military",
        publishedAt: 1607361365,
        uri: "/us/director-of-national-intelligence-china-using-gene-editing-to-boost-military-3607957",
    },
    {
        title: "Quad Nations Should Work Out 'Finer Nuances' to Coordinate Rare-Earth Supply Chain, Scientist Says",
        publishedAt: 1619192110,
        uri: "/world/quad-nations-should-work-out-finer-nuances-for-coordinating-rare-earth-supply-chain-noted-scientist-3778620",
    },
    {
        title: "JPMorgan Tells Investors Not to Fear a 20% Stock Market Correction",
        publishedAt: 1641879999,
        uri: "/article/jpmorgan-tells-investors-not-to-fear-a-20-stock-market-correction-4204507",
    },
    {
        title: "GOP Nomination Becomes 2-Horse Race After DeSantis Drops Out",
        publishedAt: 1705845769,
        uri: "/us/live-updates-candidates-race-to-finish-line-in-new-hampshire-5570447",
    },
    {
        title: "Budget 2021: $1.2 Billion Into Australia’s Digital Future",
        publishedAt: 1620287053,
        uri: "/world/budget-2021-1-2-billion-into-australias-digital-future-3804990",
    },
    {
        title: "US Scientific Collaboration With China May Support CCP’s Military Programs, Experts Warn",
        publishedAt: 1631289101,
        uri: "/china/us-scientific-collaboration-with-china-may-support-the-ccps-military-programs-experts-warn-3991359",
    },
    {
        title: "Myths for Our Times, Part 2: Capaneus and the Age of Hubris",
        publishedAt: 1652212516,
        uri: "/bright/myths-for-our-times-part-2-capaneus-and-the-age-of-hubris-4452422",
    },
    {
        title: "China Poses Greatest Threat to US Leadership in Emerging Technologies: Expert",
        publishedAt: 1603054837,
        uri: "/article/expert-china-poses-greatest-threat-to-us-leadership-in-emerging-technologies-3543251",
    },
    {
        title: "Best Practices to Make a Successful Career Change in a Tech-Driven World",
        publishedAt: 1648670865,
        uri: "/bright/best-practices-to-make-a-successful-career-change-in-a-tech-driven-world-4372813",
    },
    { title: "Eugenics, Then and Now", publishedAt: 1675435733, uri: "/opinion/eugenics-then-and-now-5031659" },
    {
        title: "Chinese 'Peacekeeping' in Middle East, North Africa Expands Beijing's Security Footprint",
        publishedAt: 1641401919,
        uri: "/opinion/chinese-peacekeeping-in-the-middle-east-north-africa-expands-beijings-security-footprint-4192804",
    },
    {
        title: "Safeguard Canadian Research From CCP Theft and Exploitation, Says Alberta's Advanced Education Minister",
        publishedAt: 1622561274,
        uri: "/world/safeguard-canadian-research-from-ccp-theft-and-exploitation-says-alberta-advanced-education-minister-3835836",
    },
    {
        title: "NATO Chief Warns of China’s Expanding Nuclear Arsenal and Silos",
        publishedAt: 1631000722,
        uri: "/china/nato-chief-warns-of-chinas-expanding-nuclear-arsenal-and-silos-3984820",
    },
    {
        title: "No Farmers, No Food, No Life",
        publishedAt: 1659465548,
        uri: "/opinion/no-farmers-no-food-no-life-4638591",
    },
    {
        title: "If There Is a New Cold War, It's at Beijing's Behest",
        publishedAt: 1628344530,
        uri: "/opinion/if-there-is-a-new-cold-war-its-at-beijings-behest-3937264",
    },
    {
        title: "Persecution of Falun Gong Laid Groundwork for China’s Digital Totalitarianism",
        publishedAt: 1670515868,
        uri: "/china/persecution-of-falun-gong-laid-groundwork-for-chinas-digital-totalitarianism-4911756",
    },
    {
        title: "UCI Says Its Antibody Treatment Could Reduce COVID-19 Hospitalizations Nationwide",
        publishedAt: 1613851234,
        uri: "/us/uci-says-its-antibody-treatment-could-reduce-covid-19-hospitalizations-nationwide-3700586",
    },
    {
        title: "Microchips: China’s Weakest Link?",
        publishedAt: 1626545932,
        uri: "/opinion/microchips-chinas-weakest-link-3905581",
    },
    {
        title: "Microsoft Provides Australian State Police with Object Recognition Services For Surveillance",
        publishedAt: 1623214649,
        uri: "/world/microsoft-provides-australian-state-police-with-facial-recognition-services-for-surveillance-3850705",
    },
    {
        title: "China Developing 'Super Soldiers' Through Gene-Editing Tech",
        publishedAt: 1607376541,
        uri: "/china/china-developing-super-soldiers-through-gene-editing-tech-3605761",
    },
    {
        title: "Dominion's Ties to UBS, China",
        publishedAt: 1607713538,
        uri: "/article/dominions-ties-to-ubs-china-3612997",
    },
    {
        title: "Taiwan Sells Nearly Half of Its Exports to China, Reflecting China's Dependence on Island for Semiconductors",
        publishedAt: 1644345249,
        uri: "/world/taiwan-sells-nearly-half-of-its-exports-to-china-despite-anti-communism-stance-4264584",
    },
    {
        title: "Don’t Expect a Sino-Russian Alliance Anytime Soon",
        publishedAt: 1640619523,
        uri: "/opinion/dont-expect-a-sino-russian-alliance-anytime-soon-4177072",
    },
    {
        title: "The 'Great Reset' Is a 'Great Setback'",
        publishedAt: 1647493271,
        uri: "/opinion/the-great-reset-is-a-great-setback-4343111",
    },
    {
        title: "New Evidence Emerges of Chinese Company's Role in Suppressing Uyghurs: Tech Firm",
        publishedAt: 1604960779,
        uri: "/china/new-evidence-emerges-of-chinese-companys-role-in-suppressing-uyghurs-tech-firm-3569608",
    },
    {
        title: "Former Top Pentagon Scientist Casts Doubt on Subsidizing Chip Manufacturing",
        publishedAt: 1626985166,
        uri: "/us/former-top-pentagon-scientist-casts-doubt-on-subsidizing-chip-manufacture-3914164",
    },
    {
        title: "Film Review: 'Finch': Post-Apocalyptic Sci-Fi With a Troubling Message",
        publishedAt: 1635969325,
        uri: "/bright/film-review-finch-post-apocalyptic-sci-fi-with-a-troubling-message-4082641",
    },
    {
        title: "China’s Famous New Plan Has Begun to Stifle Growth",
        publishedAt: 1631741064,
        uri: "/opinion/chinas-famous-new-plan-has-begun-to-stifle-growth-3998788",
    },
    {
        title: "Borderline Criminal: The Media’s Failure to Report on China's Forced Organ Harvesting",
        publishedAt: 1635788483,
        uri: "/opinion/borderline-criminal-the-medias-failure-to-report-on-chinas-forced-organ-harvesting-4077644",
    },
    {
        title: "Third-Generation Ohio Farm to Sell Land for Intel's Microchip Plants",
        publishedAt: 1643308525,
        uri: "/us/third-generation-ohio-farm-to-sell-land-for-intels-microchip-plants-4232638",
    },
    {
        title: "US Lawmaker Proposes Bill Requiring Disclosures of Beijing Ties for Publicly Traded Companies",
        publishedAt: 1596749468,
        uri: "/china/us-lawmaker-proposes-bill-requiring-disclosures-of-beijing-ties-for-publicly-traded-companies-3452328",
    },
    {
        title: "Big Tech Adopts Communist China’s Tactics",
        publishedAt: 1673301185,
        uri: "/opinion/big-tech-adopts-communist-chinas-tactics-4972654",
    },
    {
        title: "Get a Grip on Procrastination",
        publishedAt: 1649696233,
        uri: "/health/get-a-grip-on-procrastination-4381670",
    },
    {
        title: "Senators Put YouTube, TikTok, Snap on Defensive on Children's Use",
        publishedAt: 1635277671,
        uri: "/tech/senators-put-youtube-tiktok-snap-on-defensive-on-kids-use-4069448",
    },
    {
        title: "Social Media App Parler Is Back Online, With New Hosting Service",
        publishedAt: 1613400654,
        uri: "/tech/parler-ceo-says-social-media-app-is-back-online-gets-new-computer-servers-3697078",
    },
    {
        title: "Innovation Minister Defends 'Superclusters' Following Critical Report",
        publishedAt: 1603911819,
        uri: "/article/innovation-minister-defends-superclusters-following-critical-report-3556489",
    },
    {
        title: "China’s Crackdown on Tech Companies Is a Warning to US Investors: Expert",
        publishedAt: 1628775770,
        uri: "/china/chinas-crackdown-on-tech-companies-should-be-a-warning-taken-seriously-expert-3945484",
    },
    {
        title: "Are Most Fish Oil Products Synthetic?",
        publishedAt: 1677335560,
        uri: "/health/are-most-fish-oil-products-synthetic-5077356",
    },
    {
        title: "Amid Ukraine War, China Threat Rises",
        publishedAt: 1646595013,
        uri: "/world/wests-focus-on-ukraine-war-gives-chinese-regime-room-to-expand-its-worldwide-influence-analysts-4314224",
    },
    {
        title: "'History Has Been Made': First Aussie Made Military Aircraft in 50 Years Takes Off",
        publishedAt: 1614761477,
        uri: "/world/history-has-been-made-first-aussie-made-military-aircraft-in-50-years-takes-off-3716941",
    },
    {
        title: "Inflation and the Price of Goods: What to Buy Now and What to Avoid",
        publishedAt: 1628441377,
        uri: "/article/inflation-and-the-price-of-goods-what-to-buy-now-and-what-to-avoid-3938781",
    },
    {
        title: "Nicolas Chaillan, Former Pentagon Software Chief, on What the US Must Do to Win China AI Battle Before ‘Point of No Return’",
        publishedAt: 1634425019,
        uri: "/epochtv/nicolas-chaillan-former-pentagon-software-chief-on-what-the-us-must-do-to-win-china-ai-battle-before-point-of-no-return-4052569",
    },
    {
        title: "Your Brain Is a Supercomputer. Here's How to Reboot It, According to World-Renowned Brain Coach Jim Kwik.",
        publishedAt: 1623804621,
        uri: "/health/your-brain-is-a-supercomputer-heres-how-to-reboot-it-according-to-world-renowned-brain-coach-jim-kwik-3860221",
    },
    {
        title: "China Pursues ‘Brain Control’ Weaponry in Bid to Command Future of Warfare",
        publishedAt: 1640895647,
        uri: "/china/china-pursues-brain-control-weaponry-in-bid-to-command-future-of-warfare-4186003",
    },
    {
        title: "Military Budgeting Portends Pivot Toward Great-Power Conflicts",
        publishedAt: 1630451760,
        uri: "/us/military-budgeting-portends-pivot-towards-great-power-conflicts-3974380",
    },
    {
        title: "Sea World Stands by Dolphin Breeding",
        publishedAt: 1621047651,
        uri: "/world/sea-world-stands-by-dolphin-breeding-3816591",
    },
    {
        title: "Kyle Bass: Why Investors Need to Get Out of China and Implications of the Taiwan Election",
        publishedAt: 1705023926,
        uri: "/epochtv/kyle-bass-why-investors-need-to-get-out-of-china-and-implications-of-the-taiwan-election-5563723",
    },
    {
        title: "Book Review: 'Our Wild Calling'",
        publishedAt: 1634326676,
        uri: "/bright/book-review-our-wild-calling-4051483",
    },
    {
        title: "US and EU Should Enhance Joint Economic Countermeasures Against China",
        publishedAt: 1641841706,
        uri: "/opinion/us-and-eu-should-enhance-joint-economic-countermeasures-against-china-4201304",
    },
    {
        title: "Student Invents Pain-Free At-Home Breast Cancer Testing Device, Wins Top Prize",
        publishedAt: 1607938656,
        uri: "/bright/student-invents-pain-free-at-home-breast-cancer-testing-device-wins-top-prize-3609196",
    },
    {
        title: "When the Eye on Older Patients Is a Camera",
        publishedAt: 1641726012,
        uri: "/health/when-the-eye-on-older-patients-is-a-camera-4189767",
    },
    {
        title: "Canada’s Spy Agency Head Says Chinese Regime’s Threat Coming on ‘All Fronts’",
        publishedAt: 1612971624,
        uri: "/world/canadas-spy-agency-head-says-chinese-regimes-threat-coming-on-all-fronts-3692200",
    },
    {
        title: "Investigative Report: The Reason Behind Blackouts Across China",
        publishedAt: 1614207353,
        uri: "/china/the-secret-behind-blackouts-across-china-3704697",
    },
    {
        title: "Military Contractors Raked in $4.4 Trillion Since 9/11: Study",
        publishedAt: 1631821113,
        uri: "/us/military-contractors-raked-in-4-4-trillion-since-9-11-study-4000668",
    },
    {
        title: "EU Agrees to Tighten Controls of Surveillance Tech Exports",
        publishedAt: 1605034044,
        uri: "/world/eu-agrees-to-tighten-controls-of-surveillance-tech-exports-3572929",
    },
    {
        title: "China Launches State Rival to SpaceX’s Starlink",
        publishedAt: 1620073987,
        uri: "/china/china-launches-state-rival-to-spacexs-starlink-3799348",
    },
    {
        title: "Australia's Chief Scientist Wants Impact From Research",
        publishedAt: 1616028787,
        uri: "/world/australias-chief-scientist-wants-impact-from-research-3738485",
    },
    {
        title: "Canada Crawling Toward AI Regulatory Regime, but Experts Say Reform Is Urgent",
        publishedAt: 1604162341,
        uri: "/world/canada-crawling-toward-ai-regulatory-regime-but-experts-say-reform-is-urgent-3559953",
    },
    {
        title: "Border Surveillance Tools Could Become Ubiquitous Nationwide: Report",
        publishedAt: 1635535741,
        uri: "/us/border-surveillance-tools-could-become-ubiquitous-nationwide-report-4075985",
    },
    {
        title: "Nicolas Chaillan: The CCP Is Using TikTok to Manipulate Americans and Gather Data for AI Weapons",
        publishedAt: 1666128513,
        uri: "/epochtv/nicolas-chaillan-the-ccp-is-using-tiktok-to-manipulate-americans-and-gather-data-for-ai-weapons-4802605",
    },
    {
        title: "AUKUS Provides More Opportunity Than Just Nukes",
        publishedAt: 1635476788,
        uri: "/opinion/aukus-provides-opportunity-for-so-much-more-than-just-nukes-4075267",
    },
    {
        title: "Facebook Official Recorded Saying Company Has Too Much Power, Should Be Broken Up",
        publishedAt: 1615860158,
        uri: "/article/facebook-official-says-company-should-be-broken-up-has-too-much-power-3734951",
    },
    {
        title: "The CCP’s Infiltration and Threat",
        publishedAt: 1637254437,
        uri: "/opinion/the-ccps-infiltration-and-threat-4088370",
    },
    {
        title: "How Google Targets Conservatives and Perpetuates CCP Propaganda",
        publishedAt: 1629325138,
        uri: "/opinion/how-google-targets-conservatives-and-perpetuates-ccp-propaganda-3953028",
    },
    {
        title: "Biden Is 'Buying Votes' Ahead of Midterm Elections With Policy Decisions: Rep. Lauren Boebert",
        publishedAt: 1666380956,
        uri: "/us/biden-is-buying-votes-ahead-of-midterm-elections-with-policy-decisions-rep-lauren-boebert-4809076",
    },
    {
        title: "Time for Serious Counter-Propaganda Operations Against Communist China",
        publishedAt: 1643995617,
        uri: "/opinion/time-for-serious-counter-propaganda-operations-against-communist-china-4249250",
    },
    {
        title: "Elon Musk Snapping Up Twitter: Free Speech Revival or Socialist Expansion?",
        publishedAt: 1650392919,
        uri: "/us/elon-musk-snapping-up-twitter-free-speech-revival-or-socialist-expansion-4413672",
    },
    {
        title: "US Must Invest in Domestic Infrastructure, Innovation to Compete Against China: Blinken",
        publishedAt: 1628579084,
        uri: "/us/us-must-invest-in-domestic-infrastructure-innovation-to-compete-against-china-blinken-3941171",
    },
    {
        title: "Oracle Reportedly Wins TikTok Bid, After Microsoft Gets Rejection",
        publishedAt: 1600044911,
        uri: "/article/oracle-reportedly-wins-tiktok-bid-after-microsoft-gets-rejection-3498479",
    },
    {
        title: "US and China Compete for Influence Through Law Enforcement in Latin America",
        publishedAt: 1640363016,
        uri: "/opinion/us-and-china-compete-for-influence-through-law-enforcement-in-latin-america-4172338",
    },
    {
        title: "Using AI, Canadian City Predicts Who Might Become Homeless",
        publishedAt: 1602789755,
        uri: "/world/using-ai-canadian-city-predicts-who-might-become-homeless-3540751",
    },
    {
        title: "Will Chinese Tariffs Be Sacrificed on the Altar of High Inflation?",
        publishedAt: 1656020972,
        uri: "/opinion/will-chinese-tariffs-be-sacrificed-on-the-altar-of-high-inflation-4544048",
    },
    {
        title: "American Tech Sector Keeps Blowing Away the Rest of the World",
        publishedAt: 1628004991,
        uri: "/opinion/american-tech-sector-keeps-blowing-away-the-rest-of-the-world-3931323",
    },
    {
        title: "Intel and Tesla Struggle to Balance Ethics and Profit in China",
        publishedAt: 1646258903,
        uri: "/opinion/intel-and-tesla-struggle-to-balance-ethics-and-profit-in-china-4310849",
    },
    {
        title: "AI, 5G, and How Algorithms Could Cost You More Than Your Money",
        publishedAt: 1600867491,
        uri: "/world/ai-5g-and-how-algorithms-could-cost-you-more-than-your-money-3433893",
    },
    {
        title: "Senator Lays Out Strategy for Targeted Decoupling With China in New Report",
        publishedAt: 1613773244,
        uri: "/china/senator-lays-out-strategy-for-targeted-decoupling-with-china-in-new-report-3703808",
    },
    {
        title: "Will the New AUKUS Pact Transform Security in Asia?",
        publishedAt: 1631823199,
        uri: "/opinion/will-the-new-aukus-pact-transform-security-in-asia-4001267",
    },
    {
        title: "CCP Mismanagement to Blame for Evergrande Crisis, Business Experts Say",
        publishedAt: 1635714053,
        uri: "/china/ccp-mismanagement-to-blame-for-evergrande-crisis-business-experts-say-4078486",
    },
    {
        title: "Tech Giant to Establish Adelaide Hub, Creating More Jobs in South Australia",
        publishedAt: 1601264930,
        uri: "/world/tech-giant-to-establish-adelaide-hub-creating-more-jobs-in-south-australia-3516550",
    },
    {
        title: "Automation to Wipe 1.5 Million Australian Jobs by 2030: Report",
        publishedAt: 1614066006,
        uri: "/world/automation-to-wipe-1-5-million-australian-jobs-by-2030-report-3707255",
    },
    {
        title: "UC–Irvine Develops Online Tool to Help Predict Patients' COVID-19 Severity",
        publishedAt: 1608245871,
        uri: "/us/new-uc-irvine-tool-helps-predict-patients-covid-19-severity-3623384",
    },
    {
        title: "Will Musk Work Out Better Deal With Twitter or Walk Away?",
        publishedAt: 1654797814,
        uri: "/article/will-elon-musk-work-out-a-better-deal-with-twitter-or-walk-away-4520595",
    },
    {
        title: "Man’s Final Conquest: Mankind?",
        publishedAt: 1600276412,
        uri: "/opinion/mans-final-conquest-mankind-3502400",
    },
    {
        title: "Telstra to Slash 2000 Jobs by the End of 2021 Amid Market 'Headwinds'",
        publishedAt: 1620277514,
        uri: "/world/telstra-to-slash-2000-jobs-by-the-end-of-2021-amid-market-headwinds-3804812",
    },
    {
        title: "US Navy Must Win Wars, With Robots and Perhaps Without Them",
        publishedAt: 1620237550,
        uri: "/opinion/us-navy-must-win-wars-with-robots-and-perhaps-without-them-3803983",
    },
    {
        title: "Trump Administration to Invest $1 Billion in Quantum Computing, AI",
        publishedAt: 1598481749,
        uri: "/us/trump-administration-to-invest-1-billion-in-quantum-computing-ai-3476446",
    },
    {
        title: "New Parler CEO: Trump Is Welcome on the Platform",
        publishedAt: 1613589717,
        uri: "/tech/new-parler-ceo-trump-is-welcome-on-the-platform-3700666",
    },
    {
        title: "‘Personal Carbon Allowances’ Pushed to Fight Global Warming",
        publishedAt: 1631148552,
        uri: "/opinion/personal-carbon-allowances-pushed-to-fight-global-warming-3988432",
    },
    {
        title: "How To Deal With Late Employees",
        publishedAt: 1648668623,
        uri: "/bright/how-to-deal-with-late-employees-4372693",
    },
    {
        title: "Guess Who's Coming for Dinner? 13 GOP Candidates in 130 Minutes in Iowa Cattle Call",
        publishedAt: 1690648457,
        uri: "/us/guess-whos-coming-for-dinner-13-gop-candidates-in-130-minutes-in-iowa-cattle-call-5431378",
    },
    {
        title: "Hawley Introduces Bill to Reduce Pentagon's Reliance on Technology From China and Other 'Adversary Nations'",
        publishedAt: 1619698981,
        uri: "/us/hawley-introduces-bill-to-reduce-pentagons-reliance-on-technology-from-china-and-other-adversary-nations-3795877",
    },
    {
        title: "China Expands Influence in Africa by Building Government Facilities, West Starting to Counter",
        publishedAt: 1621936262,
        uri: "/china/china-expands-influence-in-africa-by-building-government-facilities-west-starting-to-counter-3829609",
    },
    {
        title: "South Korean Conglomerates Diversify Production Bases and Cut Reliance on China",
        publishedAt: 1650997712,
        uri: "/world/south-korean-conglomerates-diversify-production-bases-and-cut-reliance-on-china-4427525",
    },
    {
        title: "Academics Breaking the COVID Spell",
        publishedAt: 1637954178,
        uri: "/opinion/academics-breaking-the-covid-spell-4124459",
    },
    {
        title: "Huawei Boss's Internal Speech Hints at the Company Possibly Going Public",
        publishedAt: 1620248821,
        uri: "/china/huawei-bosss-internal-speech-hints-at-the-company-possibly-going-public-3803167",
    },
    {
        title: "Distrust Continues to Undercut China's Domestic Milk Powder Brands, Russia Sees Opening",
        publishedAt: 1632212150,
        uri: "/china/distrust-continues-to-undercut-chinas-domestic-milk-powder-brands-russia-sees-opening-4007430",
    },
    {
        title: "Ottawa Must End Contract With Visa Application Company Linked to CCP, Committee Hears",
        publishedAt: 1613666363,
        uri: "/world/ottawa-must-end-contract-with-visa-application-company-linked-to-ccp-committee-hears-3701815",
    },
    {
        title: "Facebook Says It Removed 1.3 Billion Fake Accounts, Explains How It Handles Misinformation",
        publishedAt: 1616438741,
        uri: "/tech/facebook-says-it-removed-1-3-billion-fake-accounts-explains-how-it-handles-misinformation-3743801",
    },
    {
        title: "CCP Virus Ushers In Brave New World of Techno-Utopian ‘Education’",
        publishedAt: 1606931154,
        uri: "/opinion/ccp-virus-ushers-in-brave-new-world-of-techno-utopian-education-3598600",
    },
    {
        title: "Propaganda, ‘United Front Tactics’ Are CCP's ‘Magic Weapons’ Against US: Steven Mosher",
        publishedAt: 1644131134,
        uri: "/china/propaganda-united-front-tactics-are-ccps-magic-weapons-against-us-steven-mosher-4259396",
    },
    {
        title: "SoCal Government Group Hears Mixed Economic Forecast From Analyst",
        publishedAt: 1610906101,
        uri: "/us/analyst-delivers-mixed-economic-message-to-scag-3659054",
    },
    {
        title: "Nvidia to Buy UK's Arm, Sparking Fears of Chip Dominance",
        publishedAt: 1600160831,
        uri: "/article/nvidia-to-buy-uks-arm-sparking-fears-of-chip-dominance-3499258",
    },
    {
        title: "Chinese Companies Stockpile Chips for Autos, Exacerbating Global Chip Shortage",
        publishedAt: 1618411959,
        uri: "/article/chinese-companies-stockpile-chips-for-autos-exacerbating-global-chip-shortage-3774860",
    },
    {
        title: "Chinese Regime Cannot Be Trusted on Climate Pledges: GOP Lawmakers",
        publishedAt: 1619136318,
        uri: "/us/chinese-regime-cannot-be-trusted-on-climate-pledges-gop-lawmakers-3787167",
    },
    {
        title: "Full Documentary: The American Republic vs the CCP",
        publishedAt: 1603118844,
        uri: "/epochtv/programming-alert-a-documentary-exposing-chinas-game-plan-for-the-2020-us-election-3544222",
    },
    {
        title: "Autonomous Navy Robots Used in Disaster Simulation on Brisbane River",
        publishedAt: 1604623151,
        uri: "/world/autonomous-navy-robots-used-in-disaster-simulation-on-brisbane-river-3567396",
    },
    {
        title: "Great Britain to Launch Covert Operations Against Russia and China",
        publishedAt: 1627324641,
        uri: "/world/great-britain-to-launch-covert-operations-against-russia-and-china-3918912",
    },
    {
        title: "Trump's Security Adviser: China Is the Threat of the Century",
        publishedAt: 1603316734,
        uri: "/article/trumps-security-adviser-china-is-the-threat-of-the-century-3547951",
    },
    {
        title: "The Return of the Corporate Welfare State",
        publishedAt: 1624981704,
        uri: "/opinion/the-return-of-the-corporate-welfare-state-3879484",
    },
    {
        title: "Emerging Technologies That Are Disrupting Cybercrime",
        publishedAt: 1631075195,
        uri: "/article/emerging-technologies-that-are-disrupting-cybercrime-3983922",
    },
    {
        title: "Over Half of Canadians See China as Greatest Security Threat: Poll",
        publishedAt: 1615408214,
        uri: "/world/over-half-of-canadians-see-china-as-greatest-security-threat-global-war-already-happening-poll-3728181",
    },
    {
        title: "Footage of Bats Kept in Wuhan Lab Fuels Scrutiny Over Its Research",
        publishedAt: 1624501394,
        uri: "/article/footage-of-bats-kept-in-wuhan-lab-fuels-scrutiny-over-its-research-3871801",
    },
    {
        title: "Pentagon Chief Calls for 'New Vision' for American Defense",
        publishedAt: 1619985723,
        uri: "/us/pentagon-chief-calls-for-new-vision-for-american-defense-3799001",
    },
    {
        title: "Why China's 'Whole-Process Democracy' Didn’t Qualify for the US-led Democracy Summit",
        publishedAt: 1639774102,
        uri: "/opinion/why-chinas-whole-process-democracy-didnt-qualify-for-the-us-led-democracy-summit-4155808",
    },
    {
        title: "India Should Rethink Its Taiwan Policy and Be More Proactive: Experts",
        publishedAt: 1636055656,
        uri: "/world/india-should-rethink-its-taiwan-policy-and-be-more-proactive-experts-4085934",
    },
    {
        title: "Melatonin Affects Thrombosis, Sepsis, and COVID Mortality Rate",
        publishedAt: 1638738020,
        uri: "/health/melatonin-affects-thrombosis-sepsis-and-covid-mortality-rate-4105459",
    },
    {
        title: "Biden Administration's China Policy Views the Communist Regime as 'Integral' to Global Progress",
        publishedAt: 1654278589,
        uri: "/opinion/biden-administrations-china-policy-views-the-communist-regime-as-integral-to-global-progress-4507777",
    },
    {
        title: "China Gene Firm Providing Worldwide COVID Tests Worked With Chinese Military",
        publishedAt: 1612021197,
        uri: "/china/china-gene-firm-providing-worldwide-covid-tests-worked-with-chinese-military-3678419",
    },
    {
        title: "Twitter ‘Indefinitely’ Suspends Account of ‘The Plot Against the President’",
        publishedAt: 1606449151,
        uri: "/us/twitter-indefinitely-suspends-account-of-the-plot-against-the-president-3595329",
    },
    {
        title: "James Lindsay: The Marxist Underpinnings of Modern Education and the ‘Unraveling of Civilization’",
        publishedAt: 1685487501,
        uri: "/epochtv/james-lindsay-the-marxist-underpinnings-of-modern-education-and-the-unraveling-of-civilization-5301101",
    },
    {
        title: "Biden Says China Will Not Surpass US as Global Leader on His Watch",
        publishedAt: 1616739250,
        uri: "/china/biden-says-china-will-not-surpass-us-as-global-leader-on-his-watch-3750356",
    },
    {
        title: "RAF Takes £30 Million Step Towards Robot Revolution in the Skies",
        publishedAt: 1611584715,
        uri: "/world/raf-takes-30-million-step-towards-robot-revolution-in-the-skies-3670051",
    },
    {
        title: "China Flirts With Universal Basic Capital; US Flirts With Universal Basic Income",
        publishedAt: 1631736389,
        uri: "/opinion/china-flirts-with-universal-basic-capital-us-flirts-with-universal-basic-income-3995328",
    },
    {
        title: "China, Russia Have Caught Up With West in Air Power: UK Minister",
        publishedAt: 1616596929,
        uri: "/world/china-russia-have-caught-up-with-west-in-air-power-uk-minister-3747455",
    },
    {
        title: "4 in 5 Canadians View China Negatively: Poll",
        publishedAt: 1615981534,
        uri: "/world/4-in-5-canadians-view-china-negatively-poll-3735905",
    },
    {
        title: "Maker of Fertility App Sued Over Allegedly Sharing Personal Data With Chinese Firms",
        publishedAt: 1612116643,
        uri: "/china/popular-fertility-app-sued-over-allegedly-sharing-personal-data-with-chinese-firms-3678556",
    },
    {
        title: "Data Dominance: China Establishes Key EU Outpost in Cyprus",
        publishedAt: 1643209146,
        uri: "/china/data-dominance-china-establishes-key-eu-outpost-in-cyprus-4223213",
    },
    {
        title: "Top 10 Plus 5 Best Movies of 2021",
        publishedAt: 1638571194,
        uri: "/bright/top-10-plus-5-best-movies-of-2021-4135934",
    },
    {
        title: "Russia-Ukraine War (March 31): Russian Forces Block Buses Leaving Mariupol: Ukraine Government",
        publishedAt: 1648701573,
        uri: "/world/live-updates-uk-spy-chief-says-russian-soldiers-disobey-orders-in-ukraine-4373717",
    },
    {
        title: "Canada to Join First Mission to the Moon, Signs New 'Gateway' Treaty with NASA",
        publishedAt: 1608234818,
        uri: "/world/canada-to-join-first-mission-to-the-moon-signs-new-gateway-treaty-with-nasa-3622814",
    },
    {
        title: "Trump Should Declassify How Chinese Communist Party Interfered in Our Election",
        publishedAt: 1609456135,
        uri: "/opinion/trump-should-declassify-how-the-chinese-communist-party-interfered-in-our-election-3639921",
    },
    {
        title: "Australian Prime Minister Says Bing Could Replace Google",
        publishedAt: 1612198552,
        uri: "/world/australian-prime-minister-says-bing-could-replace-google-3680142",
    },
    {
        title: "Pennsylvania Senate Passes 'One of the Strongest Integrity Bills' in the Country: Committee Chairman",
        publishedAt: 1624967610,
        uri: "/us/pennsylvania-senate-passes-bills-requiring-voter-id-3875864",
    },
    {
        title: "China Insider Aug. 31: Media Exposes Names of Australians Recruited Under China's Thousand Talents Plan",
        publishedAt: 1598989548,
        uri: "/epochtv/names-exposed-in-ccps-australian-thousand-talents-plan-3484297",
    },
    {
        title: "Beijing Has More Billionaires Than New York",
        publishedAt: 1620300533,
        uri: "/china/beijing-has-more-billionaires-than-new-york-3804325",
    },
    {
        title: "China a Main Source of Fentanyl Fuelling Opioid Crisis Killing Canadians, Public Safety Minister Says",
        publishedAt: 1614353910,
        uri: "/world/china-a-main-source-of-fentanyl-fuelling-opioid-crisis-killing-canadians-public-safety-minister-says-3708295",
    },
    {
        title: "Xi Jinping Undermines Much of the Basis of China’s Economic Miracle",
        publishedAt: 1630700833,
        uri: "/opinion/xi-jinping-undermines-much-of-the-basis-of-chinas-economic-miracle-3979989",
    },
    {
        title: "Biden Admin Has 'No Interest' in Actually Confronting the CCP: Jack Posobiec",
        publishedAt: 1612997399,
        uri: "/us/biden-admin-has-no-interest-in-actually-confronting-the-ccp-jack-posobiec-3692641",
    },
    {
        title: "Anti-Trump Sentiment Contaminates Debate on Virus Origin: MI6 Ex-chief",
        publishedAt: 1622823963,
        uri: "/article/anti-trump-sentiment-contaminates-debate-on-virus-origin-mi6-ex-chief-3842773",
    },
    {
        title: "South Korea to Release Samsung Scion on Parole",
        publishedAt: 1628560332,
        uri: "/world/south-korea-to-release-samsung-scion-on-parole-3939994",
    },
    {
        title: "Trump Signs Executive Order to Protect US Against Security Threats From Drones",
        publishedAt: 1611037981,
        uri: "/china/trump-signs-executive-order-to-protect-against-security-threats-from-drones-3662197",
    },
    {
        title: "Sydney Researchers Build Dementia Predicting Technology",
        publishedAt: 1607393817,
        uri: "/world/sydney-researchers-build-dementia-predicting-technology-3591187",
    },
    {
        title: "EpochTV Review: How Communists Create Division to Achieve Their Goals",
        publishedAt: 1633990508,
        uri: "/opinion/epochtv-review-how-communists-create-division-to-achieve-their-goals-4031219",
    },
    {
        title: "What a Chinese Scholar’s View Tells Us About Beijing’s Internal Propaganda",
        publishedAt: 1623965647,
        uri: "/opinion/what-a-chinese-scholars-view-tells-us-about-beijings-internal-propaganda-3861034",
    },
    {
        title: "5 Game-Changing E-Commerce Trends in 2022",
        publishedAt: 1633585895,
        uri: "/article/5-game-changing-e-commerce-trends-in-2022-4035180",
    },
    {
        title: "Pentagon Adopts Ethical Principles for Using AI in War",
        publishedAt: 1582635380,
        uri: "/us/pentagon-adopts-ethical-principles-for-using-ai-in-war-3249607",
    },
    {
        title: "Demographers Warn of Impending Population Collapse",
        publishedAt: 1654458152,
        uri: "/world/demographers-warn-of-impending-population-collapse-4512821",
    },
    {
        title: "Republicans Call for Fauci to Be Fired Over Wuhan Lab Controversy",
        publishedAt: 1622135667,
        uri: "/article/republicans-call-for-fauci-to-be-fired-over-wuhan-lab-controversy-3833262",
    },
    {
        title: "5,000 Foreigners Flagged by China in Advanced Surveillance Sweep: Data Leak",
        publishedAt: 1617261027,
        uri: "/china/5000-foreigners-flagged-in-advanced-surveillance-sweep-latest-chinese-data-leak-3758323",
    },
    {
        title: "GOP Trustbusters Are Embracing Progressives’ Agenda",
        publishedAt: 1619020021,
        uri: "/opinion/gop-trustbusters-are-embracing-progressives-agenda-3785472",
    },
    {
        title: "7 Facts About Virus Research in Wuhan: China Should End Gain-of-Function Research",
        publishedAt: 1622061105,
        uri: "/opinion/seven-facts-about-virus-research-in-wuhan-china-should-end-gain-of-function-research-3831599",
    },
    {
        title: "This 5,000-Year-Old Chinese Board Game Can Help Your Business Make Millions",
        publishedAt: 1636357455,
        uri: "/health/this-5000-year-old-chinese-board-game-can-help-your-business-make-millions-4088619",
    },
    {
        title: "Turning the Tide on Addiction",
        publishedAt: 1642676409,
        uri: "/health/turning-the-tide-on-addiction-4208304",
    },
    {
        title: "US State Department Spokesman Deflects Questions About Facebook News Ban in Australia",
        publishedAt: 1613959169,
        uri: "/world/us-state-department-spokesman-deflects-questions-about-facebook-news-ban-in-australia-3704460",
    },
    {
        title: "Biden Seeks Unity With Japan's Suga Against China at First White House Summit",
        publishedAt: 1618615337,
        uri: "/us/biden-seeks-unity-with-japans-suga-against-china-at-first-white-house-summit-3779726",
    },
    {
        title: "Huawei Eyes Off Australian 6G Network After 5G Ban",
        publishedAt: 1610072147,
        uri: "/world/huawei-eyes-off-australian-6g-network-after-5g-ban-3648522",
    },
    {
        title: "The Silicon Valley Dream and What Went Wrong (Part III)",
        publishedAt: 1626850700,
        uri: "/opinion/the-silicon-valley-dream-and-what-went-wrong-part-iii-3911219",
    },
    {
        title: "A Take on Recent Money Flows Into China",
        publishedAt: 1626798341,
        uri: "/opinion/a-take-on-recent-money-flows-into-china-3909819",
    },
    {
        title: "AI to Be Used in Canada's Money Laundering Enforcement Efforts",
        publishedAt: 1583954387,
        uri: "/world/ai-to-be-used-in-canadas-money-laundering-enforcement-efforts-3268360",
    },
    {
        title: "It’s Now Crucial to Understand What We’re Up Against",
        publishedAt: 1655560679,
        uri: "/health/its-now-crucial-to-understand-what-were-up-against-4542024",
    },
    {
        title: "Facing the Threat of the Chinese Communist Party",
        publishedAt: 1635433165,
        uri: "/us/facing-the-threat-of-the-chinese-communist-party-4045799",
    },
    {
        title: "DOJ’s Crackdown on Chinese Espionage Comes Under Fire, But Some Argue Program is Necessary to Counter CCP Infiltration",
        publishedAt: 1645556453,
        uri: "/china/as-critics-seek-to-dismantle-dojs-crackdown-on-chinese-espionage-others-say-program-is-necessary-but-needs-reform-4291886",
    },
    {
        title: "YouTube’s New Policy on Election-Related Content Akin to Censorship: Chinese Analysts",
        publishedAt: 1607970484,
        uri: "/china/youtubes-new-policy-on-election-related-content-akin-to-censorship-chinese-analysts-3616301",
    },
    {
        title: "Surveying the Biological Warfare Landscape",
        publishedAt: 1650237890,
        uri: "/opinion/surveying-the-biological-warfare-landscape-4392080",
    },
    {
        title: "Tesla Posts $438 Million 1Q Profit on Strong Electric Vehicle Sales",
        publishedAt: 1619530022,
        uri: "/article/tesla-posts-438-million-1q-profit-on-strong-electric-vehicle-sales-3792865",
    },
    {
        title: "US-China Battle for Semiconductors",
        publishedAt: 1634744127,
        uri: "/opinion/us-china-battle-for-semiconductors-4056868",
    },
    {
        title: "Why the Chinese Regime Can't Reverse 'Zero COVID': Tiananmen Square Student Leader Fengsuo Zhou",
        publishedAt: 1669655159,
        uri: "/epochtv/why-the-chinese-regime-cant-reverse-zero-covid-tiananmen-square-student-leader-fengsuo-zhou-4888973",
    },
    {
        title: "Singaporean National Pleads Guilty in US to Spying for Chinese Intelligence",
        publishedAt: 1595628981,
        uri: "/china/singaporean-national-pleads-guilty-to-spying-for-chinese-intelligence-3437394",
    },
    {
        title: "Experts Bullish on Orange County’s Economy at Chapman Annual Forecast",
        publishedAt: 1608561164,
        uri: "/us/experts-bullish-on-orange-countys-economy-at-chapman-annual-forecast-3624977",
    },
    {
        title: "Industry Says Feds Not Doing Enough to Fortify Supply Chains, Manufacturing",
        publishedAt: 1619627461,
        uri: "/article/industry-says-feds-not-doing-enough-to-fortify-supply-chains-manufacturing-3794730",
    },
    {
        title: "Film Review: 'My Octopus Teacher': A Love Letter to the Perfection of Nature",
        publishedAt: 1619206707,
        uri: "/bright/film-review-my-octopus-teacher-a-love-letter-to-the-perfection-of-nature-3781484",
    },
    {
        title: "Biden Signs Executive Order to Fortify Critical Supply Chains",
        publishedAt: 1614208601,
        uri: "/us/biden-signs-executive-order-to-fortify-critical-supply-chains-3710132",
    },
    {
        title: "Biden Is Right to Curb US Investment in China’s High-Tech Spying and Repression",
        publishedAt: 1622840360,
        uri: "/opinion/biden-is-right-to-curb-us-investment-in-chinas-high-tech-spying-and-repression-3844994",
    },
    {
        title: "Xinjiang Genocide Means US Firms Can't 'Continue to Deceive Themselves' About China: US Commissioner",
        publishedAt: 1611694268,
        uri: "/china/xinjiang-genocide-means-us-firms-cant-continue-to-deceive-themselves-about-china-us-commissioner-3670914",
    },
    {
        title: "Can China Afford an Arms Race?",
        publishedAt: 1637169876,
        uri: "/opinion/can-china-afford-an-arms-race-4108335",
    },
    {
        title: "Which War Is Beijing Preparing For?",
        publishedAt: 1633870495,
        uri: "/opinion/which-war-is-beijing-preparing-for-4039434",
    },
    {
        title: "Upgrading Basic Arctic Infrastructure and Protecting Canada’s Sovereignty",
        publishedAt: 1615999800,
        uri: "/world/upgrading-basic-arctic-infrastructure-and-protecting-canadas-sovereignty-3737713",
    },
    {
        title: "China Is Collecting Americans' DNA, Posing Major Security Risks: US Counterintelligence Agency",
        publishedAt: 1612390370,
        uri: "/china/china-is-collecting-americans-dna-posing-major-security-risks-us-counterintelligence-agency-3683440",
    },
    {
        title: "‘Trojan Horse’: Kyle Bass Warns China Will Use Digital Yuan to Export Tech Authoritarianism",
        publishedAt: 1617980940,
        uri: "/article/trojan-horse-kyle-bass-warns-china-will-use-digital-yuan-to-export-tech-authoritarianism-3768891",
    },
    {
        title: "Senate Adopts GOP Amendment Banning US Funding of China’s Gain-of-Function Cell Research",
        publishedAt: 1622059023,
        uri: "/us/senate-adopts-gop-amendment-banning-u-s-funding-of-chinas-gain-of-function-cell-research-3832246",
    },
    {
        title: "US, 'Quad' Allies Set Partnership to Boost Vaccine Supply in Indo-Pacific",
        publishedAt: 1615580702,
        uri: "/us/us-and-asian-allies-launch-partnership-to-supply-billions-of-vaccines-in-indo-pacific-3731370",
    },
    {
        title: "Chinese Regime Rolls Out New Plans to Overtake the US in Technology",
        publishedAt: 1615408800,
        uri: "/china/chinese-regime-rolls-out-new-plans-to-overtake-the-us-in-technology-3727448",
    },
    {
        title: "Trump Wins New Hampshire Primary",
        publishedAt: 1706014373,
        uri: "/us/live-updates-new-hampshire-voters-head-to-polls-for-first-in-the-nation-primary-5571933",
    },
    {
        title: "Didi: A Tale of Deceit and Disrespect",
        publishedAt: 1625756294,
        uri: "/opinion/didi-a-tale-of-deceit-and-disrespect-3892533",
    },
    {
        title: "Beijing Launches Psychological War Against Taiwan After COVID-19 Outbreak",
        publishedAt: 1621590084,
        uri: "/article/beijing-launches-psychological-war-against-taiwan-after-covid-19-outbreak-3824526",
    },
    {
        title: "Ernst, Hassan Amendment Tells National Science Foundation to Withhold Funds If Project Costs Aren’t Disclosed",
        publishedAt: 1621445589,
        uri: "/us/ernst-hassan-amendment-tells-national-science-foundation-to-withhold-funds-if-project-costs-arent-disclosed-3822408",
    },
    {
        title: "White House Proposes Regulatory Principles to Govern AI Use",
        publishedAt: 1578571929,
        uri: "/article/white-house-proposes-regulatory-principles-to-govern-ai-use-3198742",
    },
    {
        title: "The 5 Things the Chinese Regime Fears Most",
        publishedAt: 1619039528,
        uri: "/opinion/the-5-things-the-chinese-regime-fears-most-3780429",
    },
    {
        title: "Space War Is Real and China Wants to Lead",
        publishedAt: 1635369745,
        uri: "/opinion/space-war-is-real-and-china-wants-to-lead-4071721",
    },
    {
        title: "Experts Discuss China Tech Threat at CPAC Panel",
        publishedAt: 1614381043,
        uri: "/article/experts-discuss-china-tech-threat-at-cpac-panel-3712898",
    },
    {
        title: "China Poses ‘The Greatest Threat to World Order’: UK Military Intelligence Chief",
        publishedAt: 1600076328,
        uri: "/china/china-poses-the-greatest-threat-to-world-order-uk-military-intelligence-chief-3498059",
    },
    {
        title: "Largest Meat Producer Getting Back Online After Cyberattack",
        publishedAt: 1622640081,
        uri: "/us/meat-producer-jbs-says-expects-most-plants-working-wednesday-3840942",
    },
    {
        title: "House Lawmakers Urge Biden to Confront China’s Threat to Emerging Technologies",
        publishedAt: 1611853965,
        uri: "/china/house-lawmakers-urge-biden-to-confront-chinas-threat-to-emerging-technologies-3675029",
    },
    {
        title: "Chinese Regime Turned to Military for CCP Virus Cover-Up: Former Trump Adviser",
        publishedAt: 1614029383,
        uri: "/china/chinese-regime-turned-to-military-for-ccp-virus-cover-up-former-trump-adviser-3706136",
    },
    {
        title: "UN Education Agency Launches War on 'Conspiracy Theories' ",
        publishedAt: 1662416267,
        uri: "/us/un-education-agency-launches-war-on-conspiracy-theories-4711793",
    },
    {
        title: "The Sudden Dominance of the Diversity Industrial Complex",
        publishedAt: 1676658027,
        uri: "/us/the-sudden-dominance-of-the-diversity-industrial-complex-5065707",
    },
    {
        title: "China’s Economy Weakens: COVID-19 Yes, but Also More Fundamental Growth Impediments",
        publishedAt: 1631311902,
        uri: "/opinion/chinas-economy-weakens-covid-19-yes-but-also-more-fundamental-growth-impediments-3991540",
    },
    {
        title: "CCP Poses 'Insider Threat' to American Companies: Former Pentagon Official",
        publishedAt: 1634334027,
        uri: "/china/ccp-poses-insider-threat-to-american-companies-former-pentagon-official-4050868",
    },
    {
        title: "Fauci Now ‘Not Convinced’ COVID-19 Developed Naturally, Backs Origin Probe",
        publishedAt: 1621843322,
        uri: "/us/fauci-now-not-convinced-covid-19-developed-naturally-backs-origin-probe-3827834",
    },
    {
        title: "Sen. Johnson Presses Fauci to Explain Seemingly Shifting Position on CCP Virus Origin",
        publishedAt: 1622202899,
        uri: "/us/sen-johnson-presses-fauci-to-explain-seemingly-shifting-position-on-ccp-virus-origin-3834567",
    },
    {
        title: "China: Building a Modern Air Force",
        publishedAt: 1623578406,
        uri: "/opinion/china-building-a-modern-air-force-3856009",
    },
    {
        title: "How Chinese Data Trove on 2 Million People Serves Beijing’s Unrestricted Warfare",
        publishedAt: 1600808914,
        uri: "/china/how-chinese-data-trove-on-2-million-people-serves-beijings-unrestricted-warfare-3510341",
    },
    {
        title: "Australia Report Says Make Google and Facebook Pay for News",
        publishedAt: 1613150037,
        uri: "/tech/australia-report-says-make-google-and-facebook-pay-for-news-3694716",
    },
    {
        title: "Xi Orders China's Military to Strengthen Combat Readiness",
        publishedAt: 1615350751,
        uri: "/china/xi-jinping-orders-military-to-heighten-sense-of-urgency-strengthen-combat-readiness-3727163",
    },
    {
        title: "Government Funding of Science: When, Why, and How Much?",
        publishedAt: 1600509451,
        uri: "/opinion/government-funding-of-science-when-why-and-how-much-3505379",
    },
    {
        title: "Quad Military Exercise Presents Alternative Vision to CCP Ideology",
        publishedAt: 1630428803,
        uri: "/china/quad-military-exercise-presents-alternative-vision-to-ccp-ideology-3973259",
    },
    {
        title: "Ottawa's 2021 Budget First Small Step in Long, Expensive Path to Upgrading North American Defences",
        publishedAt: 1619279171,
        uri: "/world/budget-first-small-step-in-long-expensive-path-to-upgrading-north-american-defences-3788838",
    },
    {
        title: "Tom Cotton: US Should Deny Visas to Chinese Science and Tech Students",
        publishedAt: 1588019206,
        uri: "/us/tom-cotton-us-should-deny-visas-to-chinese-science-and-tech-students-3328600",
    },
    {
        title: "Xi Jinping's Speech Shows Ambition but No Confidence",
        publishedAt: 1619023899,
        uri: "/opinion/xi-jinpings-speech-shows-ambition-but-no-confidence-3785073",
    },
    {
        title: "Exclusive: $2.3 Trillion of US Investments in China Are Dragging Down America",
        publishedAt: 1626546709,
        uri: "/opinion/2-3-trillion-of-us-investments-in-china-are-dragging-down-america-3905899",
    },
    {
        title: "TikTok to Close Its Indian Operations, Incurring Mass Layoffs",
        publishedAt: 1612197637,
        uri: "/china/tiktok-to-close-its-indian-operations-with-mass-layoffs-3679039",
    },
    {
        title: "China Advancing Tech Standards Competition Amid the Pandemic",
        publishedAt: 1589388451,
        uri: "/china/china-advancing-tech-standards-competition-amid-the-pandemic-3340646",
    },
    {
        title: "US Congressmen Ask Intel, Nvidia About Their Chips Potentially Being Used for Human Rights Violations in Xinjiang",
        publishedAt: 1607530698,
        uri: "/china/us-congressmen-ask-intel-nvidia-about-their-chips-potentially-being-used-for-human-rights-violations-in-xinjiang-3611086",
    },
    {
        title: "US Senate Report Accuses China of 'Digital Authoritarianism'",
        publishedAt: 1595348751,
        uri: "/china/us-senate-report-accuses-china-of-digital-authoritarianism-3432596",
    },
    {
        title: "Will China Attack the United States?",
        publishedAt: 1626292903,
        uri: "/opinion/will-china-attack-the-united-states-3899959",
    },
    {
        title: "Naomi Wolf: We’re Now in the Last Stage of a Tyrannical Takeover",
        publishedAt: 1654447082,
        uri: "/health/naomi-wolf-were-now-in-the-last-stage-of-a-tyrannical-takeover-4513369",
    },
    {
        title: "Semiconductors Key to US Supremacy in High-Tech War",
        publishedAt: 1626208359,
        uri: "/article/semiconductors-key-to-us-supremacy-in-high-tech-war-3900030",
    },
    {
        title: "Chinese Regime’s Targeting of Jack Ma Underscores Its Mafia Capitalism",
        publishedAt: 1609771278,
        uri: "/opinion/chinese-regimes-targeting-of-jack-ma-underscores-its-mafia-capitalism-3640800",
    },
    {
        title: "Exclusive: More Than 432,000 Votes Removed From Trump in Pennsylvania, Data Scientists Say",
        publishedAt: 1609763720,
        uri: "/us/exclusive-over-432000-votes-removed-from-trump-in-pennsylvania-data-scientists-say-3642202",
    },
    {
        title: "Chinese Company Hikvision Confirms It’s Controlled by China’s Military Industrial Complex",
        publishedAt: 1622385411,
        uri: "/article/chinese-company-hikvision-confirms-its-controlled-by-chinas-military-industrial-complex-3836392",
    },
    {
        title: "Email Marketing Trends and Tips Straight From the Experts",
        publishedAt: 1626000772,
        uri: "/article/email-marketing-trends-and-tips-straight-from-the-experts-3891176",
    },
    {
        title: "5 Smart Business Objectives Entrepreneurs Should Focus on Now",
        publishedAt: 1629450731,
        uri: "/article/5-smart-business-objectives-entrepreneurs-should-focus-on-now-3954873",
    },
    {
        title: "Trump Suggests CCP Virus Spread From Wuhan Lab Probably Due to Incompetence",
        publishedAt: 1588896980,
        uri: "/article/trump-suggests-ccp-virus-spread-from-wuhan-lab-probably-due-to-incompetence-3342745",
    },
    {
        title: "Rep. Steel Talks New Role Monitoring CCP Human Rights Violations ",
        publishedAt: 1615658741,
        uri: "/us/orange-county-congresswoman-joins-committee-to-oversee-ccps-human-rights-violations-3731678",
    },
    {
        title: "Canada’s New Warships Fade Evermore Into the Future",
        publishedAt: 1613480465,
        uri: "/opinion/canadas-new-warships-fade-evermore-into-the-future-3697945",
    },
    {
        title: "US Homeland Security Official Highlights Popular TV Manufacturer’s Ties to Beijing",
        publishedAt: 1608765254,
        uri: "/china/us-homeland-security-official-highlights-popular-tv-manufacturers-ties-to-beijing-3629995",
    },
    {
        title: "March Hiring Accelerated to 916,000, yet Many Jobs Remain Lost",
        publishedAt: 1617378089,
        uri: "/us/march-hiring-accelerated-to-916000-yet-many-jobs-remain-lost-3759968",
    },
    {
        title: "Google Launches Movement Tracking Tool To Help Fight Pandemic",
        publishedAt: 1585941417,
        uri: "/article/google-launches-movement-tracking-tool-to-help-fight-pandemic-3297255",
    },
    {
        title: "Which Way for China’s Yuan?",
        publishedAt: 1624644903,
        uri: "/opinion/which-way-for-chinas-yuan-3874505",
    },
    {
        title: "MPs Say UK Should Send Aircraft Carrier Through Taiwan Strait",
        publishedAt: 1618908105,
        uri: "/world/mps-say-uk-should-send-aircraft-carrier-through-taiwan-strait-3778829",
    },
    {
        title: "China’s AI Spending Difficult to Compare, Harder to Assess, Report Says",
        publishedAt: 1581638619,
        uri: "/us/chinas-ai-spending-difficult-to-compare-harder-to-assess-says-institute-for-defense-analyses-3237901",
    },
    {
        title: "How Technology Is Transforming Retirement Preparation",
        publishedAt: 1654819240,
        uri: "/bright/how-technology-is-transforming-retirement-preparation-4497893",
    },
    {
        title: "TikTok, WeChat Bans Aimed at Protecting Americans' Data From Beijing, US Assistant AG Says",
        publishedAt: 1597270128,
        uri: "/china/tiktok-wechat-bans-aimed-at-protecting-american-data-from-beijing-us-assistant-ag-says-3459682",
    },
    {
        title: "Kremlin Tells West Not to Rush to Judge It on Navalny as Sanctions Talk Starts",
        publishedAt: 1599151218,
        uri: "/world/kremlin-tells-west-not-to-rush-to-judge-it-on-navalny-as-sanctions-talk-starts-3486954",
    },
    {
        title: "Liberals 'Completely Unwilling' to Hold Political Parties to Account on Privacy",
        publishedAt: 1607788045,
        uri: "/world/liberals-completely-unwilling-to-hold-political-parties-to-account-on-privacy-3615526",
    },
    {
        title: "China Targeting US Labs to Spy on Virus Research, US Assistant AG Says",
        publishedAt: 1587772384,
        uri: "/china/china-is-targeting-us-labs-to-spy-on-virus-research-us-assistant-attorney-general-3325183",
    },
    {
        title: "Germplasm Resources Are a 'Chip' in China's Strategy to Surpass the West",
        publishedAt: 1633977219,
        uri: "/china/germplasm-resources-are-a-chip-in-chinas-strategy-to-surpass-the-west-4042866",
    },
    {
        title: "US Imposes Visa Curbs on Staff at Huawei, Chinese Tech Firms That Aid Human Rights Abuses",
        publishedAt: 1594827504,
        uri: "/china/us-imposes-visa-curbs-on-huawei-employees-chinese-tech-firms-that-aid-human-rights-abuses-3425268",
    },
    {
        title: "Chinese Regime Ordered 'Transfer' of Foreign Technologies, Leaked Documents Reveal",
        publishedAt: 1609851647,
        uri: "/china/leaked-documents-reveal-chinese-regimes-orders-to-steal-foreign-technologies-3619005",
    },
    {
        title: "Chinese City Launches, Then Cancels App to Rank Citizens’ Level of Civility Amid Backlash",
        publishedAt: 1600010329,
        uri: "/china/chinese-city-launches-then-cancels-app-to-rank-citizens-level-of-civility-amid-backlash-3498040",
    },
    {
        title: "Study Finds Google AI System Could Improve Breast Cancer Detection",
        publishedAt: 1577941312,
        uri: "/tech/study-finds-google-ai-system-could-improve-breast-cancer-detection-3191374",
    },
    {
        title: "It's Time for Americans to Stand Up Against China's Technology Theft",
        publishedAt: 1618515969,
        uri: "/opinion/its-time-for-americans-to-stand-up-against-chinas-technology-theft-3770946",
    },
    {
        title: "Six Key Takeaways From Senate Hearing With Facebook Whistleblower",
        publishedAt: 1633484631,
        uri: "/us/key-takeaways-from-the-senates-hearing-with-facebook-whistleblower-4033593",
    },
    {
        title: "China Completes BeiDou Navigation System Amid Security Concerns",
        publishedAt: 1596473736,
        uri: "/china/china-rolls-out-beidou-navigation-system-amid-security-concerns-3447861",
    },
    {
        title: "Boycott the China Winter Olympics",
        publishedAt: 1615850426,
        uri: "/opinion/boycott-the-china-winter-olympics-3734781",
    },
    {
        title: "'Duty of Care': Holding the Taxman to Account",
        publishedAt: 1613650878,
        uri: "/world/duty-of-care-holding-the-taxman-to-account-3699753",
    },
    {
        title: "Trump, Esper Reject Proposal to Cut Military Healthcare",
        publishedAt: 1597761437,
        uri: "/article/trump-esper-reject-proposal-to-cut-military-healthcare-3465682",
    },
    {
        title: "The 'Monstrous Hybrids' That Control Us",
        publishedAt: 1611005769,
        uri: "/opinion/the-monstrous-hybrids-that-control-us-3661279",
    },
    {
        title: "Shares of China's Baidu and Its Streaming Service iQiyi Fall on SEC Probe",
        publishedAt: 1597598624,
        uri: "/china/shares-fall-for-chinese-tech-giant-baidu-and-its-streaming-service-iqiyi-after-sec-probe-3463286",
    },
    {
        title: "Gordon Chang: We Need to Cut Ties to the Chinese Regime",
        publishedAt: 1611092929,
        uri: "/china/gordon-chang-we-need-to-cut-ties-to-the-chinese-regime-3662900",
    },
    {
        title: "Trump to Establish US-Africa Pandemic Research Institute to Fight Future Outbreaks",
        publishedAt: 1601133755,
        uri: "/article/trump-to-establish-us-africa-pandemic-research-institute-to-fight-future-outbreaks-3515432",
    },
    {
        title: "US 'Secretly Expelled' 2 Chinese Embassy Officials: Report",
        publishedAt: 1576449058,
        uri: "/us/us-secretly-expelled-2-chinese-embassy-officials-report-3174731",
    },
    {
        title: "What Is the Great Reset?",
        publishedAt: 1652619155,
        uri: "/opinion/what-is-the-great-reset-4467659",
    },
    {
        title: "Consumers Should Be Warned About China’s Rebranded Hikvision Cameras",
        publishedAt: 1622282454,
        uri: "/opinion/consumers-should-be-warned-about-chinas-rebranded-hikvision-cameras-3834983",
    },
    {
        title: "TikTok Is an ‘Attractive Database’ on ‘Young Australians’ for the Chinese Regime: Aussie MP",
        publishedAt: 1590827976,
        uri: "/world/tiktok-is-an-attractive-database-on-young-australians-for-the-chinese-regime-aussie-mp-3370259",
    },
    {
        title: "Russia–Ukraine War (April 12): Ukraine Secret Service Says It Has Arrested Top Putin Ally",
        publishedAt: 1649743444,
        uri: "/world/live-updates-russia-ukraine-war-april-12-4398346",
    },
    {
        title: "The Congressional Research Service Takes a Peek at the Next Big War",
        publishedAt: 1605795377,
        uri: "/opinion/the-congressional-research-service-takes-a-peek-at-the-next-big-war-3585697",
    },
    {
        title: "Experts Predict Innovation in Medicine, Remote Work as COVID-19 Silver Linings",
        publishedAt: 1585663130,
        uri: "/article/experts-predict-innovation-in-medicine-remote-work-as-covid-19-silver-linings-3292224",
    },
    {
        title: "China Has a Problem With New Working Hands and Minds",
        publishedAt: 1622051986,
        uri: "/opinion/china-has-a-problem-with-new-working-hands-and-minds-3831888",
    },
    {
        title: "Dr. Pierre Kory: Deadly Conflicts of Interest and the Global Coverup of a Failed Medical Experiment",
        publishedAt: 1684270813,
        uri: "/epochtv/dr-pierre-kory-deadly-conflicts-of-interest-and-the-global-coverup-of-a-failed-medical-experiment-5266434",
    },
    {
        title: "Peter Thiel Calls Out Big Tech's Collaboration With Chinese Communist Regime",
        publishedAt: 1617905206,
        uri: "/article/peter-thiel-calls-out-big-techs-collaboration-with-chinese-communist-regime-3767456",
    },
    {
        title: "117 British Companies Taken Over by China in a Decade Long Corporate Coup",
        publishedAt: 1605199337,
        uri: "/world/british-companies-taken-over-by-china-in-a-decade-long-corporate-coup-3576246",
    },
    {
        title: "Could Push Come to Shove in US Effort to Rein in Beijing?",
        publishedAt: 1595004826,
        uri: "/opinion/could-push-come-to-shove-in-us-effort-to-rein-in-beijing-3428096",
    },
    {
        title: "Autonomous Naval Robots to Help Detect Threats: Defence Minister",
        publishedAt: 1598840739,
        uri: "/world/autonomous-naval-robots-to-help-detect-threats-defence-minister-3481747",
    },
    {
        title: "US Restricts Exports of AI for Analyzing Satellite Images",
        publishedAt: 1578321154,
        uri: "/us/us-restricts-exports-of-ai-for-analyzing-satellite-images-3194956",
    },
    {
        title: "How 'The Spinners' by Velázquez Teaches the Consequence of Irreverence and More",
        publishedAt: 1628168192,
        uri: "/bright/how-the-spinners-by-velazquez-teaches-the-consequence-of-irreverence-and-more-3901260",
    },
    {
        title: "Mango and Peppercorns: The Unlikely Flavors of the American Dream",
        publishedAt: 1624626316,
        uri: "/bright/mango-and-peppercorns-the-unlikely-flavors-of-the-american-dream-3870781",
    },
    {
        title: "Hong Kong Police Have Had AI Facial Recognition Tech for Years, Sparking Fears of Mainland-Style Surveillance",
        publishedAt: 1572020634,
        uri: "/china/hong-kong-police-have-had-ai-facial-recognition-tech-for-years-sparking-fears-of-mainland-style-surveillance-3127520",
    },
    {
        title: "Esper Says Pentagon Plans for Over 500-Ship Navy to Counter China",
        publishedAt: 1602066737,
        uri: "/us/esper-reveals-pentagon-plans-for-over-500-navy-ships-to-counter-china-3529367",
    },
    {
        title: "Beijing Tries to Respond to China’s Bleak Demographics",
        publishedAt: 1624306839,
        uri: "/opinion/beijing-tries-to-respond-to-chinas-bleak-demographics-3867582",
    },
    {
        title: "Liberals' Superclusters Program Delayed and Unrealistic: PBO Report",
        publishedAt: 1602023778,
        uri: "/world/liberals-superclusters-program-delayed-and-unrealistic-pbo-report-3528825",
    },
    {
        title: "DARPA, Insects, Mad Science, and Us: Nowhere to Hide",
        publishedAt: 1659091715,
        uri: "/health/darpa-insects-mad-science-and-us-nowhere-to-hide-4630142",
    },
    {
        title: "Chinese Hacker Reveals How He Helped Beijing Steal Secrets From Foreign Governments, Companies",
        publishedAt: 1606415852,
        uri: "/china/chinese-hacker-reveals-how-he-helped-beijing-steal-secrets-from-foreign-governments-companies-3580849",
    },
    {
        title: "Down to the Sea in Ships (Again)",
        publishedAt: 1599264887,
        uri: "/opinion/down-to-the-sea-in-ships-again-3487536",
    },
    {
        title: "Putin Critic Navalny Poisoned With Novichok Nerve Agent, Merkel Says",
        publishedAt: 1599112850,
        uri: "/world/putin-critic-navalny-poisoned-with-novichok-nerve-agent-merkel-says-3485685",
    },
    {
        title: "China Increases Defense Budget, Premier Orders Military to Prepare for War",
        publishedAt: 1615246420,
        uri: "/china/china-increases-defense-budget-premier-orders-the-military-to-prepare-for-war-3725377",
    },
    {
        title: "Beijing’s Modern 'Cultural Revolution' Threatens Western Civilization: US Commissioner",
        publishedAt: 1620222504,
        uri: "/china/beijings-modern-cultural-revolution-threatens-western-civilization-us-commissioner-3803523",
    },
    {
        title: "The Premiere, in Life and in Music",
        publishedAt: 1610485746,
        uri: "/bright/the-premiere-in-life-and-in-music-3654110",
    },
    {
        title: "Beijing’s Threats Against Czech Senator Visiting Taiwan Draws Rebuke From Czech Republic",
        publishedAt: 1598888339,
        uri: "/china/beijings-threats-against-czech-senator-visiting-taiwan-draws-rebuke-from-czech-republic-3482180",
    },
    {
        title: "China Is Listed as Country of Particular Concern for 21st Year",
        publishedAt: 1588810264,
        uri: "/china/china-is-listed-as-country-of-particular-concern-for-21st-year-3341368",
    },
    {
        title: "Canadian Researcher Using Big Data, AI Says World Needs to Change Outbreak Preparation Strategy",
        publishedAt: 1590409123,
        uri: "/world/canadian-researcher-using-big-data-ai-says-world-needs-to-change-outbreak-preparation-strategy-3363545",
    },
    {
        title: "Beijing Seeks to Acquire US Tech by Enticing Silicon Valley Startups to Set Up in China",
        publishedAt: 1614047360,
        uri: "/china/china-seeking-to-acquire-us-tech-via-attracting-silicon-valley-startups-to-set-up-operations-there-3644966",
    },
    {
        title: "How to Prepare for Coming Crises",
        publishedAt: 1658077053,
        uri: "/health/how-to-prepare-for-coming-crises-4603354",
    },
    {
        title: "What Is Long COVID Really Like?",
        publishedAt: 1671374635,
        uri: "/health/what-is-long-covid-really-like-4915946",
    },
    {
        title: "Russia–Ukraine War (April 26): Blasts Heard in Russia's Belgorod, Nearby Ammunition Depot on Fire: Governor",
        publishedAt: 1650949348,
        uri: "/world/live-updates-russia-ukraine-war-april-26-4427573",
    },
    {
        title: "The CCP’s Arms Race With the US Will Lead to Its Collapse: Analysts",
        publishedAt: 1632243096,
        uri: "/china/the-ccps-arms-race-with-the-us-will-lead-to-its-collapse-analysis-4005770",
    },
    {
        title: "G7 Leaders Under Pressure From Lawmakers to Stand Tough on China",
        publishedAt: 1611642518,
        uri: "/china/g7-leaders-under-pressure-from-lawmakers-to-stand-tough-on-china-3671710",
    },
    {
        title: "Senators Introduce Bill to Boost US Production of Semiconductors Amid Beijing's Threats",
        publishedAt: 1593454282,
        uri: "/china/senators-introduce-new-bill-to-boost-us-production-of-semiconductors-3405360",
    },
    {
        title: "Fauci Says Evidence 'Very Strongly' Shows Virus Is Not Man-Made",
        publishedAt: 1588700715,
        uri: "/article/fauci-says-evidence-very-strongly-shows-virus-did-not-originate-in-wuhan-lab-3339286",
    },
    {
        title: "US Needs to Boost Export Financing to Take on China, Commerce's Ross Says",
        publishedAt: 1599773986,
        uri: "/us/wilbur-ross-us-needs-to-boost-export-financing-to-take-on-china-3495641",
    },
    {
        title: "British Intelligence Agencies Urge Reassessing China Relationship",
        publishedAt: 1586988659,
        uri: "/world/british-intelligence-agencies-urge-reassessing-china-relationship-3311700",
    },
    {
        title: "DARPA Study Forecasts New Encryption Ending Intelligence Surveillance",
        publishedAt: 1566330224,
        uri: "/china/darpa-study-forecasts-new-encryption-ending-intelligence-surveillance-3049330",
    },
    {
        title: "Japan Is Changing Its Approach to Defense (and to China)",
        publishedAt: 1625263263,
        uri: "/opinion/japan-is-changing-its-approach-to-defense-and-to-china-3884778",
    },
    {
        title: "'Taiwan-China Conflict Is Not a Localized Conflict:' US-Taiwan Business Council President",
        publishedAt: 1621873548,
        uri: "/china/taiwan-china-conflict-is-not-a-localized-conflict-us-taiwan-business-council-president-3828364",
    },
    {
        title: "Kash Patel and Ric Grenell Part 1: Russia, NATO, and Building Serbia-Kosovo Peace | Kash’s Corner",
        publishedAt: 1635550513,
        uri: "/epochtv/kashs-corner-kashs-up-close-and-personal-conversation-with-richard-grenell-4072951",
    },
    {
        title: "Air Force Announces Contracts for Skyborg Autonomous 'Wingman'",
        publishedAt: 1595601007,
        uri: "/us/skyborg-air-force-announces-contracts-for-autonomous-wingman-3436722",
    },
    {
        title: "White House Asks US Agencies to Detail All China-Related Funding",
        publishedAt: 1599245050,
        uri: "/us/white-house-asks-us-agencies-to-detail-all-china-related-funding-3488592",
    },
    {
        title: "Communist China's Silent War Against the West",
        publishedAt: 1603724074,
        uri: "/world/communist-chinas-silent-invasion-of-canada-and-the-west-3552824",
    },
    {
        title: "Senators Introduce Bill to Scrutinize Beijing’s Efforts in Setting Tech Standards",
        publishedAt: 1605818453,
        uri: "/china/senators-introduce-bill-to-scrutinize-beijings-efforts-in-setting-technology-standards-3585525",
    },
    {
        title: "Chinese Regime Seeks to Use Pandemic to Fulfill Ambitions, Report Says",
        publishedAt: 1585198167,
        uri: "/china/chinese-regime-aims-to-take-advantage-of-pandemic-to-fulfill-its-ambitions-3282253",
    },
    {
        title: "Chinese National Pleads Guilty to Conspiracy to Commit Money Laundering for Drug Cartels",
        publishedAt: 1593562420,
        uri: "/us/chinese-national-pleads-guilty-to-conspiracy-to-commit-money-laundering-for-drug-cartels-3407695",
    },
    {
        title: "Rod Dreher: What Happens When a Society Loses the Desire to Know the Truth?",
        publishedAt: 1663441851,
        uri: "/epochtv/rod-dreher-what-happens-when-a-society-loses-the-desire-to-know-the-truth-4737312",
    },
    {
        title: "CCP Paid Trolls to Counter News of Tainted Dumplings, Leaked Documents Show",
        publishedAt: 1603309055,
        uri: "/china/exclusive-how-chinese-internet-censors-manipulate-public-opinion-on-social-media-platforms-3533078",
    },
    {
        title: "Millions of Australian Homes to Get Ultra-Fast Internet With $4.5 Billion Upgrade",
        publishedAt: 1600833149,
        uri: "/world/millions-of-australian-homes-to-get-ultra-fast-internet-with-4-5-billion-upgrade-3510708",
    },
    { title: "China Wants It All", publishedAt: 1617134706, uri: "/opinion/china-wants-it-all-3755738" },
    {
        title: "WHO Probe Under Scrutiny Over Investigators’ Ties to Chinese Regime",
        publishedAt: 1614633982,
        uri: "/china/who-probe-under-scrutiny-over-investigators-ties-to-chinese-regime-3715315",
    },
    {
        title: "Remote Canadian Town Programs Radar to Spot Approaching Polar Bears",
        publishedAt: 1605020865,
        uri: "/world/remote-canadian-town-programs-radar-to-spot-approaching-polar-bears-3573054",
    },
    {
        title: "Russia-Ukraine (March 13): Instagram Users in Russia Told Service Will Cease From Midnight",
        publishedAt: 1647177034,
        uri: "/world/live-updates-march-13-nearly-125000-people-evacuated-via-humanitarian-corridors-in-ukraine-zelensky-4334234",
    },
    {
        title: "Pompeo Calls Communist China 'Central Threat of Our Times'",
        publishedAt: 1580414043,
        uri: "/world/pompeo-communist-china-central-threat-of-our-times-3221718",
    },
    {
        title: "‘We Had a Guardian Angel’: Teen Pulled Under Fast-Moving Current Saved by Friends' CPR",
        publishedAt: 1597483296,
        uri: "/bright/we-had-a-guardian-angel-teen-pulled-under-fast-moving-current-saved-by-friends-cpr-3460072",
    },
    {
        title: "CCP’s New 5-Year Plan Creates More Aggressive 'Thousand Talents Plan': Chinese Expert",
        publishedAt: 1616176260,
        uri: "/china/ccps-new-5-year-plan-creates-more-aggressive-thousand-talents-plan-chinese-expert-3740207",
    },
    {
        title: "Key Takeaways From China's Annual 'Two Sessions' Meeting",
        publishedAt: 1615915112,
        uri: "/china/key-takeaways-from-chinas-annual-two-sessions-meeting-3734588",
    },
    {
        title: "Embrace New Technology but Stay in Charge",
        publishedAt: 1570747971,
        uri: "/opinion/embrace-new-technology-but-stay-in-charge-3107517",
    },
    {
        title: "US Big Tech Aiding Blacklisted Chinese Surveillance Firms, Report Says",
        publishedAt: 1590267773,
        uri: "/china/us-big-tech-aiding-blacklisted-chinese-surveillance-firms-report-says-3362164",
    },
    {
        title: "India and Australia Sign Strategic Cooperation Agreement",
        publishedAt: 1591580016,
        uri: "/world/india-and-australia-sign-strategic-cooperation-agreement-3377820",
    },
    {
        title: "New App Promises to Cut Through Clutter of Covid-19 Misinformation",
        publishedAt: 1599069962,
        uri: "/world/new-app-promises-to-cut-through-clutter-of-covid-19-misinformation-3485561",
    },
    {
        title: "US Restructures Supply Chains With South Korea and Taiwan to Decouple from CCP",
        publishedAt: 1622129410,
        uri: "/china/us-restructures-supply-chains-with-south-korea-and-taiwan-to-decouple-from-ccp-3833031",
    },
    {
        title: "Trump Looking at Further Actions to Stop China's Theft of US Research: Pompeo",
        publishedAt: 1598922490,
        uri: "/china/trump-evaluating-actions-to-stop-chinas-theft-of-us-research-pompeo-3483067",
    },
    {
        title: "FBI Director: One New China-Related Investigation Is Opened Every 10 Hours",
        publishedAt: 1594148062,
        uri: "/china/fbi-director-one-new-china-related-investigation-is-opened-every-10-hours-3415195",
    },
    {
        title: "The Data-Driven New World Order",
        publishedAt: 1611279872,
        uri: "/opinion/the-data-driven-new-world-order-3666070",
    },
    {
        title: "US Finally Pushing Back Against Chinese Communist Aggression: Sen. Cotton",
        publishedAt: 1596057020,
        uri: "/china/us-is-finally-pushing-back-against-chinese-communist-aggression-sen-cotton-3442918",
    },
    {
        title: "Beijing Exploits Pandemic to Intensify Internet Surveillance, Report Finds",
        publishedAt: 1602712547,
        uri: "/china/beijing-exploits-pandemic-to-intensify-internet-surveillance-report-finds-3539594",
    },
    {
        title: "India's Ban of Chinese Apps Merits International Support: Expert",
        publishedAt: 1614796025,
        uri: "/world/indias-ban-of-chinese-apps-needs-international-support-expert-3711251",
    },
    {
        title: "Tech Giants Warn of AI Moderation Errors as Staff Work From Home",
        publishedAt: 1584423717,
        uri: "/article/tech-giants-warn-of-ai-moderation-errors-as-staff-work-from-home-3274904",
    },
    {
        title: "How Major Credit Card Networks Protect Customers Against Fraud",
        publishedAt: 1623738189,
        uri: "/article/how-major-credit-card-networks-protect-customers-against-fraud-3858551",
    },
    {
        title: "Deutsche Bank Using Robots to Replace 18,000 Workers In Radical Restructuring Plan",
        publishedAt: 1574150447,
        uri: "/article/deutsche-bank-using-robots-to-replace-18000-workers-in-radical-restructuring-plan-3150446",
    },
    {
        title: "US Finalizing Rules to Limit Sensitive Tech Exports to China, Others",
        publishedAt: 1576596107,
        uri: "/china/us-finalizing-rules-to-limit-sensitive-tech-exports-to-china-others-3176818",
    },
    {
        title: "China Uses AI to Flag Thousands of Uyghurs for Detention: Report",
        publishedAt: 1574772253,
        uri: "/china/china-uses-ai-to-flag-thousands-of-uyghurs-for-detention-report-3156325",
    },
    {
        title: "Republicans Call for 'Aggressive, Smart' Tax Incentives to Compete With China",
        publishedAt: 1601583480,
        uri: "/us/republicans-call-for-aggressive-smart-tax-incentives-to-compete-with-china-3522558",
    },
    {
        title: "Controversy Surrounds China's Ant Group Before Its Public Offering",
        publishedAt: 1603674754,
        uri: "/us/controversy-surrounds-chinas-ant-group-before-its-public-offering-3552019",
    },
    {
        title: "Mercedes-Benz Opening Tech Center in Beijing to Develop V2X Technology",
        publishedAt: 1634314433,
        uri: "/opinion/mercedes-benz-opening-tech-center-in-beijing-to-develop-v2x-technology-4047065",
    },
    {
        title: "Quick Test Tells You How Old You Really Are",
        publishedAt: 1643644213,
        uri: "/health/quick-test-tells-you-how-old-you-really-are-4247274",
    },
    {
        title: "When It Comes to China, Western Media Often Sees Economic Strength When There Is Weakness",
        publishedAt: 1623161747,
        uri: "/opinion/when-it-comes-to-china-western-media-often-sees-economic-strength-when-there-is-weakness-3848963",
    },
    {
        title: "Pompeo Says Documents Confirm China Committing 'Very Significant' Xinjiang Abuses",
        publishedAt: 1574794578,
        uri: "/china/pompeo-says-documents-confirm-china-committing-very-significant-xinjiang-abuses-3157370",
    },
    {
        title: "TikTok Is Spyware for the Chinese Regime, Cyber Experts Warn",
        publishedAt: 1595280265,
        uri: "/china/tiktok-is-spyware-for-the-chinese-regime-cyber-experts-warn-3429621",
    },
    {
        title: "The Power Behind Chinese Telecom Giants",
        publishedAt: 1610578255,
        uri: "/article/power-behind-chinese-telecom-giants-3651320",
    },
    {
        title: "Australia Designs and Builds Military Aircraft for First Time in 50 Years",
        publishedAt: 1588664046,
        uri: "/world/australia-designs-and-builds-military-aircraft-for-first-time-in-50-years-3338399",
    },
    {
        title: "Raise Canada’s Competitiveness by Getting Tax Policy, Regulation Right: RBC CEO",
        publishedAt: 1593627078,
        uri: "/article/rbc-ceo-calls-on-government-to-get-tax-policy-regulation-right-to-raise-canadas-competitiveness-3408832",
    },
    {
        title: "Britain Pledges Million Pounds to Tackle Dangerous ‘Space Junk’",
        publishedAt: 1600285593,
        uri: "/world/britain-pledges-million-pounds-to-tackle-dangerous-space-junk-3502200",
    },
    {
        title: "Trump Adviser Warns China Exporting Tech Authoritarianism",
        publishedAt: 1573155521,
        uri: "/china/trump-adviser-warns-china-exporting-tech-authoritarianism-3140310",
    },
    {
        title: "Sen. Marco Rubio: How the Chinese Regime Co-opts Our Elites and Weaponizes Our Systems Against Us",
        publishedAt: 1652817615,
        uri: "/epochtv/sen-marco-rubio-how-the-chinese-regime-co-opts-our-elites-and-weaponizes-our-systems-against-us-4472373",
    },
    {
        title: "Russia–Ukraine War (May 31): US Agrees to Send Advanced Rockets to Ukraine",
        publishedAt: 1653971973,
        uri: "/world/live-updates-russia-ukraine-war-may-31-4501706",
    },
    {
        title: "Ownership of Dominion Draws Scrutiny After Unusual Fundraising",
        publishedAt: 1608056976,
        uri: "/article/ownership-of-dominion-draws-scrutiny-after-unusual-fundraising-3618603",
    },
    {
        title: "Trump Administration Rewrote US Approach to China Threat",
        publishedAt: 1611591294,
        uri: "/china/trump-administration-rewrote-us-approach-to-china-threat-3668729",
    },
    {
        title: "Child Predator Online Activity Surges Amid Pandemic",
        publishedAt: 1595346987,
        uri: "/us/child-predator-online-activity-surges-amid-pandemic-3432330",
    },
    {
        title: "US Urged to Invest More in AI as China Gains Ground: Report",
        publishedAt: 1572897768,
        uri: "/china/us-urged-to-invest-more-in-ai-as-china-gains-ground-report-3136806",
    },
    {
        title: "China’s Global Data Security Initiative Likely a Propaganda Project: Cyber Expert",
        publishedAt: 1599585345,
        uri: "/china/chinas-global-data-security-initiative-likely-a-propaganda-project-cyber-expert-3491658",
    },
    {
        title: "Singaporean Defeats Chinese Candidate to Head UN Patent Office",
        publishedAt: 1583350254,
        uri: "/world/singaporean-defeats-chinese-candidate-to-head-un-patent-office-3260016",
    },
    {
        title: "Chinese Military Officers Charged With Stealing 145 Million Americans’ Data in Equifax Hack",
        publishedAt: 1581350818,
        uri: "/china/us-indicts-4-chinese-military-officers-for-hacking-equifax-to-steal-145-million-americans-info-3233167",
    },
    {
        title: "UK Grants Huawei a Limited Role in 5G",
        publishedAt: 1580222320,
        uri: "/china/uk-grants-huawei-a-limited-role-in-5g-3218629",
    },
    {
        title: "Pentagon Lists 20 Chinese Companies as Backed by Chinese Military, Including Huawei",
        publishedAt: 1593093535,
        uri: "/china/pentagon-names-20-chinese-companies-as-backed-by-chinese-military-3401480",
    },
    {
        title: "New Zealand Universities, Businesses Providing ‘Cutting-Edge’ Knowhow to Beijing's Military: Expert Warns",
        publishedAt: 1596434779,
        uri: "/world/new-zealand-universities-businesses-providing-cutting-edge-knowhow-to-beijings-military-expert-warns-3447623",
    },
    {
        title: "TikTok Sets up Office in Australia Amid Concerns Over Privacy, Data, and Beijing",
        publishedAt: 1592451468,
        uri: "/world/tiktok-sets-up-office-in-australia-amid-concerns-over-privacy-data-and-beijing-3392697",
    },
    {
        title: "Goldman, American Firms Evaluating Roles in Chinese Tech Firms Blacklisted by US",
        publishedAt: 1570634152,
        uri: "/article/goldman-american-firms-evaluating-roles-in-chinese-tech-firms-blacklisted-by-us-3111214",
    },
    {
        title: "Time to Reassess The China-Israel Economic Relationship: Former Israeli National Security Head",
        publishedAt: 1596116171,
        uri: "/world/it-is-time-to-reassess-the-china-israel-economic-relationship-former-israeli-national-security-head-3443628",
    },
    {
        title: "China Has the Most Surveilled Population in the World, UK Study Says",
        publishedAt: 1595960171,
        uri: "/china/china-has-the-most-surveilled-population-in-the-world-says-uk-study-3439922",
    },
    {
        title: "China Vies to Run UN Patent Office in Bid for Fifth Leadership",
        publishedAt: 1583326277,
        uri: "/world/china-vies-to-run-un-patent-office-in-bid-for-fifth-leadership-3259656",
    },
    {
        title: "Steve Bannon's Huawei Film 'Claws of the Red Dragon' Screens on China in Focus",
        publishedAt: 1585937802,
        uri: "/china/steve-bannons-huawei-film-claws-of-the-red-dragon-screens-on-china-in-focus-3297186",
    },
    {
        title: "Chinese Consulate in San Francisco Harbors Wanted Military Researcher, FBI Says",
        publishedAt: 1595506255,
        uri: "/china/san-francisco-chinese-consulate-harboring-wanted-military-researcher-fbi-says-3435214",
    },
    {
        title: "Trump to 'Take a Look' at Google After Accusations of Treason With China",
        publishedAt: 1563292575,
        uri: "/us/trump-to-take-a-look-at-google-after-accusations-of-treason-with-china-3004361",
    },
    {
        title: "Bipartisan Group Urges Public Release of List of Chinese Military Firms",
        publishedAt: 1568575037,
        uri: "/us/bipartisan-group-urges-public-release-of-list-of-chinese-military-firms-3082729",
    },
    {
        title: "MPs to Examine Privacy Implications of Facial Recognition Technology Used by RCMP",
        publishedAt: 1582922520,
        uri: "/world/mps-to-examine-privacy-implications-of-facial-recognition-technology-used-by-rcmp-3254595",
    },
    {
        title: "US Lawmakers Propose Bill to Deny Entry to Chinese Graduate Students in Science, Technology",
        publishedAt: 1590690417,
        uri: "/china/us-lawmakers-propose-bill-to-block-entry-to-chinese-graduate-students-in-science-technology-3368156",
    },
    {
        title: "Pentagon Hands Microsoft $10B Cloud Computing Contract, Snubs Amazon",
        publishedAt: 1572048384,
        uri: "/article/pentagon-hands-microsoft-10b-war-cloud-deal-snubs-amazon-3128115",
    },
    {
        title: "Kash Patel: FBI's Washington Headquarters Should Be Disbanded, Agents Sent Back to the Field",
        publishedAt: 1663953592,
        uri: "/epochtv/kash-patel-fbi-washington-headquarters-should-be-disbanded-agents-sent-back-to-the-field-4750437",
    },
    {
        title: "Dutch Farmers Rise Up Against Food System ‘Reset’",
        publishedAt: 1657894114,
        uri: "/health/dutch-farmers-rise-up-against-food-system-reset-4600363",
    },
    {
        title: "Chinese Regime ‘Lashing Out’ at the World: China Analyst Gordon Chang",
        publishedAt: 1594651168,
        uri: "/china/chinese-regime-lashing-out-at-the-world-china-analyst-gordon-chang-3422259",
    },
    {
        title: "Russia-Ukraine (March 14): EU Imposes 4th Set of Sanctions Against Russia for War",
        publishedAt: 1647259208,
        uri: "/world/live-updates-taiwan-says-asus-will-evacuate-russia-after-ukraine-urges-exit-4335398",
    },
    {
        title: "Pompeo Urges Britain to Rethink Huawei 5G Decision",
        publishedAt: 1580344445,
        uri: "/us/pompeo-urges-britain-to-rethink-huawei-5g-decision-3220441",
    },
    {
        title: "China's Useful Elitists: Westerners Exploited for Beijing's Domestic Image",
        publishedAt: 1615926545,
        uri: "/china/chinas-useful-elitists-westerners-exploited-for-beijings-domestic-image-3735500",
    },
    {
        title: "Chinese Regime Using Australian Scientists in Quest for Tech, Military Dominance",
        publishedAt: 1598662322,
        uri: "/world/chinese-regime-using-australian-scientists-in-quest-for-tech-military-dominance-3475881",
    },
    {
        title: "China Is Pursuing a Post-Virus Plan to Overtake the US Economy, Report Says",
        publishedAt: 1584962037,
        uri: "/china/china-is-pursuing-a-post-virus-plan-to-overtake-the-us-economy-report-says-3279578",
    },
    {
        title: "Elon Musk Wants Talent, Not Diplomas",
        publishedAt: 1581528936,
        uri: "/article/elon-musk-wants-talent-not-diplomas-3231944",
    },
    {
        title: "'Doomsday Document' Predicted Food Shortages Two Years Ago",
        publishedAt: 1656712699,
        uri: "/health/doomsday-document-predicted-food-shortages-two-years-ago-4572321",
    },
    {
        title: "Chinese State-Sponsored Hackers Intercept Text Messages Worldwide: Cyber Report",
        publishedAt: 1572825811,
        uri: "/china/chinese-state-sponsored-hackers-intercept-text-messages-worldwide-cyber-report-3135052",
    },
    {
        title: "Orioles Star Trey Mancini Survived His Cancer Battle, His Home Run Derby Appearance Will Honor a Teammate Who Didn’t",
        publishedAt: 1625972148,
        uri: "/sports/orioles-star-trey-mancini-survived-his-cancer-battle-his-home-run-derby-appearance-will-honor-a-teammate-who-didnt-3895986",
    },
    {
        title: "Twitter Apologizes After ‘Mistakenly’ Suspending Satirical The Babylon Bee’s Account",
        publishedAt: 1597812190,
        uri: "/tech/twitter-apologizes-after-mistakenly-suspending-satirical-the-babylon-bees-account-3466945",
    },
    {
        title: "Facebook to Label 'Newsworthy' Posts That Violate Policies",
        publishedAt: 1593227828,
        uri: "/tech/facebook-to-label-newsworthy-posts-that-violate-policies-3403652",
    },
    {
        title: "Biden Would Undermine Military Deterrence Against Major Enemies",
        publishedAt: 1607170809,
        uri: "/opinion/biden-would-undermine-military-deterrence-against-major-enemies-3605202",
    },
    {
        title: "5G’s Timing Perfect for COVID-19’s Accelerated Societal Transformation",
        publishedAt: 1593005628,
        uri: "/article/5gs-timing-perfect-for-covid-19s-accelerated-societal-transformation-3400165",
    },
    {
        title: "'Worst Experience of My Life': Early Vaccine Adopters Suffer Injuries, Struggle to Get Proper Care",
        publishedAt: 1645294012,
        uri: "/health/worst-experience-of-my-life-early-vaccine-adopters-suffer-injuries-struggle-to-get-proper-care-4277958",
    },
    {
        title: "Law Professor Sues Chinese Zoo for Mandatory Face-Scanning",
        publishedAt: 1572991145,
        uri: "/china/law-professor-sues-chinese-zoo-for-mandatory-face-scanning-3138101",
    },
    {
        title: "Barr Sounds Alarm on Chinese Regime's 'Technological Blitzkrieg' on US",
        publishedAt: 1581030499,
        uri: "/china/barr-sounds-alarm-on-chinese-regimes-technological-blitzkrieg-on-the-united-states-3229998",
    },
    {
        title: "What’s at the Core of China–US Conflict?",
        publishedAt: 1596739055,
        uri: "/opinion/whats-at-the-core-of-the-china-us-conflict-3451845",
    },
    {
        title: "The Matrix Is Already Here",
        publishedAt: 1606110061,
        uri: "/health/the-matrix-is-already-here-3579377",
    },
    {
        title: "Internal Documents Expose the True Intentions Behind China’s Virus Mobile App System",
        publishedAt: 1594244164,
        uri: "/article/internal-documents-expose-the-true-intentions-behind-chinas-virus-mobile-app-system-3417393",
    },
    {
        title: "CEO and Co-founder of Internet Giant Doused in Water at His Own Conference",
        publishedAt: 1562599912,
        uri: "/china/ceo-and-co-founder-of-internet-giant-doused-in-water-at-his-own-conference-2988590",
    },
    {
        title: "China's 'Unicorn' Creation Falls to Six-Year Low as Investors Play It Safe",
        publishedAt: 1589470638,
        uri: "/article/china-unicorn-creation-falls-to-six-year-low-as-investors-play-it-safe-3350708",
    },
    {
        title: "Pompeo Calls Out Tech CEOs for 'Incredulous' Ignorance of Chinese IP Theft",
        publishedAt: 1596142051,
        uri: "/china/incredulous-pompeo-calls-out-tech-execs-ignorance-of-chinese-ip-theft-3444719",
    },
    {
        title: "Canada’s Quantum Capabilities Central to US Competition With China",
        publishedAt: 1594741806,
        uri: "/world/canadas-quantum-capabilities-central-to-us-competition-with-china-3423483",
    },
    {
        title: "Hong Kong's Deployment of Chinese Soldiers Set to Ratchet Up Sino-U.S. Tech War",
        publishedAt: 1574098740,
        uri: "/china/hong-kongs-deployment-of-chinese-soldiers-set-to-ratchet-up-sino-u-s-tech-war-3149436",
    },
    {
        title: "The Role of Data Science in Improving Customer Satisfaction",
        publishedAt: 1626290842,
        uri: "/article/the-role-of-data-science-in-improving-customer-satisfaction-3892587",
    },
    {
        title: "American Companies Shouldn’t Aid Communist China in Religious Suppression: Experts",
        publishedAt: 1595524286,
        uri: "/china/american-companies-shouldnt-aid-communist-china-in-religious-suppression-experts-3435727",
    },
    {
        title: "Chinese Leader Xi Jinping Makes First Visit to Wuhan Since Virus Outbreak",
        publishedAt: 1583818986,
        uri: "/article/chinese-leader-xi-jinping-makes-first-visit-to-wuhan-since-virus-outbreak-3266219",
    },
    {
        title: "Playing the Race Card for China",
        publishedAt: 1624964434,
        uri: "/opinion/playing-the-race-card-for-china-3875323",
    },
    {
        title: "Flynn’s Lawyer Opposes Further Proceedings, Says Judge Twisted Facts, ‘Hijacked’ Prosecution",
        publishedAt: 1595250443,
        uri: "/us/flynns-lawyer-opposes-further-proceedings-says-judge-sullivan-twisted-facts-hijacked-prosecution-3430710",
    },
    {
        title: "The Fallout From Ant Group’s Collapsed IPO",
        publishedAt: 1604940741,
        uri: "/opinion/the-fallout-from-ant-groups-collapsed-ipo-3569370",
    },
    {
        title: "US Set to Reshore Manufacturing as China Demographic Time Bomb Explodes",
        publishedAt: 1588352866,
        uri: "/china/us-set-to-reshore-manufacturing-as-china-demographic-time-bomb-explodes-3334283",
    },
    {
        title: "Chinese Authorities Secure Police Funding in Spite of Nationwide Budget Cuts",
        publishedAt: 1595016215,
        uri: "/china/chinese-authorities-secure-police-funding-in-spite-of-nationwide-budget-cuts-3424699",
    },
    {
        title: "Renewed Calls for Ottawa to End Arms Sales to Saudi Arabia",
        publishedAt: 1600896592,
        uri: "/world/renewed-calls-for-ottawa-to-end-arms-sales-to-saudi-arabia-3509946",
    },
    {
        title: "US Lending Agency Provides Relief for Exporters Hit by Pandemic",
        publishedAt: 1587936457,
        uri: "/us/us-lending-agency-provides-relief-for-exporters-hit-by-the-pandemic-3327756",
    },
    {
        title: "US Warns UK Against Allowing Huawei Into 5G Networks",
        publishedAt: 1577227165,
        uri: "/world/us-warns-uk-on-allowing-huawei-into-their-5g-networks-3184196",
    },
    {
        title: "Pompeo Says US Troubled by Reports of China Harassing Families of Uyghur Activists",
        publishedAt: 1572978483,
        uri: "/china/pompeo-says-us-troubled-by-reports-of-china-harassing-families-of-uyghur-muslim-activists-3137791",
    },
    {
        title: "Gordon Chang on Virus Explosion in China, Xi Jinping Losing Control, and CCP Gearing Up for War",
        publishedAt: 1673134165,
        uri: "/epochtv/gordon-chang-on-virus-explosion-in-china-xi-jinping-losing-control-and-ccp-gearing-up-for-war-4967549",
    },
    {
        title: "Amazon Bans Police Use of Its Facial Recognition Software for 1 Year",
        publishedAt: 1591889168,
        uri: "/us/amazon-bans-police-use-of-its-facial-recognition-software-for-a-year-3384889",
    },
    {
        title: "Melatonin Significantly Reduces COVID-19 Mortality: Study",
        publishedAt: 1642108551,
        uri: "/health/melatonin-significantly-reduces-covid-19-mortality-4211068",
    },
    {
        title: "Catholic Church Is Infiltrated by Globalists: Archbishop Carlo Maria Vigano",
        publishedAt: 1610140686,
        uri: "/us/catholic-church-is-infiltrated-by-globalists-archbishop-carlo-maria-vigano-3649152",
    },
    {
        title: "9-Year-Old Genius Almost Finished Degree in Electrical Engineering, With Sights on PhD",
        publishedAt: 1574212670,
        uri: "/bright/9-year-old-genius-almost-finished-degree-in-electrical-engineering-with-sights-on-phd-3147445",
    },
    {
        title: "Leaked Document Reveals How CCP Uses ByteDance-Owned App to Spread Propaganda",
        publishedAt: 1599575470,
        uri: "/china/leaked-document-staff-at-chinese-tech-giant-bytedance-detail-how-its-apps-collect-data-and-promote-ccp-content-3487465",
    },
    {
        title: "High ‘Suicide’ Rate of Hong Kong Protesters Points to Chinese Regime",
        publishedAt: 1571162863,
        uri: "/china/high-suicide-rate-of-hong-kong-protesters-points-to-chinese-regime-3116492",
    },
    {
        title: "Trade Deal No Panacea for Rocky US Relations With China",
        publishedAt: 1579200192,
        uri: "/china/trade-deal-no-panacea-for-rocky-us-relations-with-china-3206135",
    },
    {
        title: "US Imposes Visa Restrictions on Chinese Officials Over Abuse of Muslim Minorities in Xinjiang",
        publishedAt: 1570566926,
        uri: "/china/us-imposes-visa-restrictions-on-chinese-officials-over-abuse-of-muslim-minorities-in-xinjiang-3110275",
    },
    {
        title: "US Officials Push New Efforts to Address Beijing’s Suppression of Xinjiang Uyghurs",
        publishedAt: 1584109298,
        uri: "/china/us-officials-push-new-efforts-to-address-beijings-suppression-of-xinjiang-uyghurs-3270618",
    },
    {
        title: "America's Critical Point in Time",
        publishedAt: 1606340895,
        uri: "/opinion/americas-critical-point-in-time-3593545",
    },
    {
        title: "‘Bigotry of Low Expectations’—Dr. Zuhdi Jasser Talks Iran Protests, Islamist Ideology, and Islamic Reform",
        publishedAt: 1665525954,
        uri: "/epochtv/bigotry-of-low-expectations-dr-zuhdi-jasser-talks-iran-protests-islamist-ideology-and-islamic-reform-4777114",
    },
    {
        title: "It’s Time Ottawa Got Tough on China, Former Ambassador Says",
        publishedAt: 1579657619,
        uri: "/world/time-to-get-tough-on-china-former-ambassador-tells-ottawa-3211822",
    },
    {
        title: "Large Public Companies Are Tapping Small-Business Relief Program",
        publishedAt: 1588023713,
        uri: "/article/large-public-companies-are-tapping-the-small-business-relief-program-3329316",
    },
    {
        title: "How Canada Can Lessen Its Alarming Dependence on China",
        publishedAt: 1590610303,
        uri: "/world/how-canada-can-unwind-its-alarming-dependence-on-china-3366990",
    },
    {
        title: "US Tech Giants Are Top Contributors to China's Surveillance State",
        publishedAt: 1563280731,
        uri: "/china/us-tech-giants-are-top-contributors-to-chinas-surveillance-state-3004196",
    },
    {
        title: "Senators Want DHS to Study Deepfake Videos",
        publishedAt: 1562009679,
        uri: "/us/senators-want-dhs-to-study-deepfake-videos-2985611",
    },
    {
        title: "Pompeo Says China's Treatment of Muslims 'Enormous Human Rights Violation'",
        publishedAt: 1570708920,
        uri: "/china/pompeo-says-chinas-treatment-of-muslims-enormous-human-rights-violation-3112437",
    },
    {
        title: "Phytoplankton Predicted to Increase By 2100, Researchers Say",
        publishedAt: 1580378516,
        uri: "/science/phytoplankton-predicted-to-increase-by-2100-researchers-say-3221261",
    },
    {
        title: "YouTube Automatically Deletes Some Terms Critical of Chinese Regime",
        publishedAt: 1589747630,
        uri: "/us/youtube-automatically-deletes-some-terms-critical-of-chinese-regime-3354254",
    },
    {
        title: "How an Investor Managing America’s Top College Endowments Funded an AI Research Institute Beneficial to China",
        publishedAt: 1569274159,
        uri: "/china/how-an-investor-managing-americas-top-college-endowments-funded-an-ai-research-institute-beneficial-to-china-3092601",
    },
    {
        title: "Google Works on AI With Top Chinese University That Has Ties to China's Military",
        publishedAt: 1564154436,
        uri: "/china/google-works-on-ai-with-top-chinese-university-that-has-ties-with-chinese-military-3012365",
    },
    {
        title: "Google Demos Car Bookings by Voice Assistant at Annual I/O Event",
        publishedAt: 1557319949,
        uri: "/article/google-demos-car-bookings-by-voice-assistant-at-annual-i-o-event-2910705",
    },
    {
        title: "Taiwan Semiconductor Maker to Set Up $12 Billion Plant in Arizona",
        publishedAt: 1589550220,
        uri: "/article/taiwan-semiconductor-maker-to-set-up-12-billion-plant-in-arizona-3352125",
    },
    {
        title: "Private-Sector Talent Needed for AI Innovation, Senators Told",
        publishedAt: 1552506628,
        uri: "/us/defense-tells-senators-private-sector-talent-needed-for-ai-innovation-2836682",
    },
    {
        title: "9 Old-Fashioned Items That Might Just Improve Your Life",
        publishedAt: 1570917059,
        uri: "/life-tradition/9-old-fashioned-items-that-might-just-improve-your-life-3107755",
    },
    {
        title: "CCP Extending '3 Warfares' Strategy Into Space: Expert",
        publishedAt: 1639085888,
        uri: "/china/ccp-extending-3-warfares-strategy-into-space-expert-4148756",
    },
    {
        title: "Vancouver Biotech Firm Finding Antibodies to Treat COVID-19",
        publishedAt: 1588689639,
        uri: "/article/vancouver-biotech-firm-finding-antibodies-to-treat-covid-19-3339058",
    },
    {
        title: "Michael Doran on the Hamas–Israeli Conflict and Communist China’s Ambitions in the Middle East",
        publishedAt: 1621983412,
        uri: "/epochtv/michael-doran-on-the-hamas-israeli-conflict-and-communist-chinas-ambitions-in-the-middle-east-3830885",
    },
    {
        title: "China, Russia Exploit CCP Virus Pandemic to Advance Interests in Italy: Defense Secretary",
        publishedAt: 1589301037,
        uri: "/us/china-russia-take-advantage-of-covid-19-pandemic-to-advance-their-interests-in-italy-defense-secretary-warned-3347239",
    },
    {
        title: "Chinese App ‘TikTok,’ Popular With US Teens, Raises National Security Concerns",
        publishedAt: 1573092392,
        uri: "/china/chinese-app-tiktok-popular-with-us-teens-raises-national-security-concerns-3138618",
    },
    {
        title: "Covert Chinese Recruitment Plan Continues Despite US Scrutiny, Leaked Documents Show",
        publishedAt: 1599873039,
        uri: "/china/covert-chinese-recruitment-plan-continues-despite-us-scrutiny-leaked-documents-show-3496827",
    },
    {
        title: "China Tightens Surveillance on Citizens, Dissidents in Name of Urban Management",
        publishedAt: 1603332548,
        uri: "/china/china-is-advancing-tight-surveillance-on-citizens-dissidents-in-the-name-of-urban-management-3527871",
    },
    {
        title: "Chinese Regime Plans to Restrict Visas for US Visitors With 'Anti-China' Links",
        publishedAt: 1570630718,
        uri: "/china/chinese-regime-plans-to-restrict-visas-for-us-visitors-with-anti-china-links-3111159",
    },
    {
        title: "US Officials Suggest Backing Huawei Competitors, Providing Alternatives",
        publishedAt: 1581717575,
        uri: "/us/us-officials-suggest-backing-huawei-competitors-providing-alternatives-3238510",
    },
    {
        title: "Google and Microsoft Accelerate Production Shift From China Due to Coronavirus",
        publishedAt: 1582916584,
        uri: "/article/google-and-microsoft-accelerate-production-shift-from-china-due-to-coronavirus-3254586",
    },
    {
        title: "Ex-NBA Commissioner David Stern Dies at Age 77",
        publishedAt: 1577915251,
        uri: "/sports/ex-nba-commissioner-david-stern-dies-at-age-77-3191018",
    },
    {
        title: "Czech Speaker Receives International Support in Response to China’s Threat Over Taiwan Visit",
        publishedAt: 1599082619,
        uri: "/world/czech-speaker-receives-international-support-in-response-to-chinas-threat-over-taiwan-visit-3485900",
    },
    {
        title: "Over 1.6 Million Australians Use Beijing-Backed TikTok App",
        publishedAt: 1590117792,
        uri: "/world/over-1-6-million-australians-use-beijing-backed-tiktok-app-3360391",
    },
    {
        title: "A Breakdown of China’s 'Total Competition' Strategy",
        publishedAt: 1579672646,
        uri: "/us/a-breakdown-of-chinas-total-competition-strategy-3211608",
    },
    {
        title: "Huawei Employees Worked With China Military on Research Projects: Bloomberg",
        publishedAt: 1561634131,
        uri: "/china/huawei-employees-worked-with-china-military-on-research-projects-bloomberg-2980775",
    },
    {
        title: "Beijing Seeks to Influence Overseas Talent Who Return to China",
        publishedAt: 1598892952,
        uri: "/china/how-beijing-influences-overseas-elite-to-work-in-china-3478889",
    },
    {
        title: "Google's ‘Project Nightingale’ Secretly Gathers Personal Health Data on Millions of Americans",
        publishedAt: 1573535214,
        uri: "/science/googles-project-nightingale-secretly-gathers-personal-health-data-on-millions-of-americans-3143843",
    },
    {
        title: "iQiyi, ‘Netflix of China,’ Allegedly Committed Securities Fraud",
        publishedAt: 1586667526,
        uri: "/china/iqiyi-netflix-of-china-allegedly-committed-securities-fraud-3305986",
    },
    {
        title: "Communist China’s Silent War Against America",
        publishedAt: 1594065070,
        uri: "/china/communist-chinas-silent-war-against-america-3412704",
    },
    {
        title: "Pompeo Warns US Tech Companies Against Aiding Chinese Regime's 'Orwellian Surveillance State'",
        publishedAt: 1579033093,
        uri: "/china/pompeo-warns-us-tech-companies-against-aiding-chinese-regimes-orwellian-surveillance-state-3203573",
    },
    {
        title: "Former Local Official Flees to the US in Fear of Repercussion From Chinese Regime",
        publishedAt: 1598302922,
        uri: "/china/former-local-official-flees-to-the-us-in-fear-of-repercussion-from-chinese-regime-3473290",
    },
    {
        title: "This COVID-19 Contact Tracing App Uses Bluetooth, Won’t Log Your Location",
        publishedAt: 1587111188,
        uri: "/article/this-covid-19-contact-tracing-app-uses-bluetooth-wont-log-your-location-3315862",
    },
    {
        title: "Arms Racing With China: 70th Anniversary Military Parade, Part 2: Intimidating Taiwan",
        publishedAt: 1569965320,
        uri: "/china/arms-racing-with-china-70th-anniversary-military-parade-part-2-intimidating-taiwan-3102313",
    },
    {
        title: "Beijing, on High Alert as Virus Spreads, Monitors Close Contacts of Those Infected",
        publishedAt: 1588106500,
        uri: "/article/beijing-city-on-high-alert-as-virus-spreads-monitoring-close-contacts-of-those-infected-3330751",
    },
    {
        title: "Facebook Removes Fake Chinese Accounts That Posted on US Election, Spread Beijing Propaganda",
        publishedAt: 1600884572,
        uri: "/china/facebook-removes-fake-chinese-accounts-that-posted-on-us-election-spread-beijing-propaganda-3511338",
    },
    {
        title: "Japan’s Global Diplomatic Efforts Scare the CCP",
        publishedAt: 1618341499,
        uri: "/opinion/japans-global-diplomatic-efforts-scare-the-ccp-3773399",
    },
    {
        title: "Ban Huawei to Escape China’s Digital Dictatorial Embrace",
        publishedAt: 1548953999,
        uri: "/opinion/ban-huawei-to-escape-chinas-digital-dictatorial-embrace-2-2784343",
    },
    {
        title: "US Commission Urges Sanctions for Chinese Regime's Rights Abuses",
        publishedAt: 1578524697,
        uri: "/china/us-commission-urges-sanctions-for-chinese-regimes-rights-abuses-3197706",
    },
    {
        title: "Trump Administration Blacklists 28 China-Based Entities Over Human Rights Abuses in Xinjiang",
        publishedAt: 1570503173,
        uri: "/china/trump-administration-blacklists-28-china-based-entities-over-human-rights-abuses-in-xinjiang-3109407",
    },
    {
        title: "Facebook Has Been Paying Contractors to Transcribe Users' Facebook Messenger Voice Chats",
        publishedAt: 1565784707,
        uri: "/tech/facebook-has-been-paying-contractors-to-transcribe-users-facebook-messenger-voice-chats-3041704",
    },
    {
        title: "4 Signs That Inflation Has Arrived",
        publishedAt: 1600093313,
        uri: "/opinion/four-signs-inflation-has-arrived-3497895",
    },
    {
        title: "US Tech Chief Calls China 'Advanced Authoritarian State,' Warns Against Surveillance, Censorship",
        publishedAt: 1573415837,
        uri: "/us/us-tech-chief-calls-china-advanced-authoritarian-state-warns-against-surveillance-censorship-3142181",
    },
    {
        title: "China’s Great Leap Ahead of US on 5G Poses Grave National Security Worries, Think Tank Says",
        publishedAt: 1568093094,
        uri: "/china/chinas-great-leap-ahead-of-us-on-5g-poses-grave-national-security-worries-think-tank-says-3074027",
    },
    {
        title: "Say No to a Very Dark Winter: Finding Light in the New Year",
        publishedAt: 1609063908,
        uri: "/bright/say-no-to-a-very-dark-winter-finding-light-in-the-new-year-3625562",
    },
    {
        title: "Google Undermines Its Legal Protections With Threat to Demonetize The Federalist, FCC's Carr Says",
        publishedAt: 1592412409,
        uri: "/us/google-undermines-its-legal-protections-by-threatening-to-demonetize-the-federalist-fcc-chair-says-3391858",
    },
    {
        title: "A School Movement Targeting Minorities That Works. But Progressives Don't Like It.",
        publishedAt: 1630603400,
        uri: "/us/a-school-movement-targeting-minorities-that-works-but-progressives-dont-like-it-3975813",
    },
    {
        title: "Elitists’ Goal: Wipe Out Good Food",
        publishedAt: 1658931984,
        uri: "/health/elitists-goal-wipe-out-good-food-4625303",
    },
    {
        title: "US Opens National Security Investigation Into TikTok: Report",
        publishedAt: 1572820834,
        uri: "/us/us-opens-national-security-investigation-into-tiktok-report-3135791",
    },
    {
        title: "Children Are Getting Medical Care They Don't Need",
        publishedAt: 1579502250,
        uri: "/health/children-are-getting-medical-care-they-dont-need-3201859",
    },
    {
        title: "Huawei Employees Have Deep Links to China's Military and Intelligence, Study Finds",
        publishedAt: 1562529295,
        uri: "/china/huawei-employees-have-deep-links-to-chinas-military-and-intelligence-study-finds-2992271",
    },
    {
        title: "Trading Academics for Far-Left ‘Social-Emotional Learning’",
        publishedAt: 1598022819,
        uri: "/opinion/trading-academics-for-far-left-social-emotional-learning-3466722",
    },
    {
        title: "Dr. Aaron Kheriaty: Self-Spreading Vaccines, Transhumanist Ideology, and Government Gag Orders–The New Technocracy Threatening Hippocratic Medicine and the Nuremberg Code",
        publishedAt: 1672789917,
        uri: "/epochtv/dr-aaron-kheriaty-self-spreading-vaccines-transhumanist-ideology-and-government-gag-orders-the-new-technocracy-threatening-hippocratic-medicine-and-the-nuremberg-code-4943584",
    },
    {
        title: "Exporting Totalitarianism: Experts Explain Why You Should Care About China",
        publishedAt: 1595342093,
        uri: "/china/exporting-totalitarianism-experts-explain-why-you-should-care-about-china-3431561",
    },
    {
        title: "Video: Parler Interim CEO Mark Meckler Talks Relaunch, Data Privacy, and Building A New Independent Tech Stack",
        publishedAt: 1613697420,
        uri: "/epochtv/video-parler-interim-ceo-mark-meckler-talks-relaunch-data-privacy-and-building-a-new-independent-tech-stack-3702725",
    },
    {
        title: "Secretary of Defense Awarding of Pentagon Contract to Microsoft Over Amazon Was Done 'Freely and Fairly'",
        publishedAt: 1573836239,
        uri: "/us/secretary-of-defense-awarding-of-pentagon-contract-to-microsoft-over-amazon-was-done-freely-and-fairly-3147662",
    },
    {
        title: "Tencent’s 7,000-Plus-Membership Communist Party Branch Reveals Close Ties With Beijing",
        publishedAt: 1598564823,
        uri: "/china/tencents-7000-plus-membership-communist-party-branch-reveals-close-ties-with-beijing-3478021",
    },
    {
        title: "Esper Has Sharp Words for Turkey, Warns NATO Allies",
        publishedAt: 1571961392,
        uri: "/us/esper-has-sharp-words-for-turkey-warns-nato-allies-3127235",
    },
    {
        title: "Beijing Ramps Up Influence Operations on Twitter in Bid to Shift Global Opinion",
        publishedAt: 1593034262,
        uri: "/china/beijing-ramps-up-influence-operations-on-twitter-in-bid-to-shift-global-opinion-3400894",
    },
    {
        title: "US Ambassador: Chinese Regime Biggest Oppressor of Religious Freedom",
        publishedAt: 1582904334,
        uri: "/china/us-ambassador-chinese-regime-biggest-oppressor-of-religious-freedom-3253781",
    },
    {
        title: "New Soros-Funded University to Combat Climate Change, Nationalism",
        publishedAt: 1580670684,
        uri: "/us/new-soros-funded-university-to-combat-climate-change-and-nationalism-3224703",
    },
    {
        title: "The Chinese Academy of Sciences Pledges to Develop Core Technologies—Is This a Joke? ",
        publishedAt: 1601501879,
        uri: "/opinion/the-chinese-academy-of-sciences-pledges-to-develop-core-technologies-is-this-a-joke-3519292",
    },
    {
        title: "Film Screening Highlights How Confucius Institutes Are Not Consistent With Australian Values",
        publishedAt: 1572644671,
        uri: "/world/film-screening-highlights-how-confucius-institutes-are-not-consistent-with-australian-values-3134892",
    },
    {
        title: "Top US General to Meet With Google on China Security Worries",
        publishedAt: 1553263396,
        uri: "/article/top-us-general-to-meet-with-google-on-china-security-worries-2849007",
    },
    {
        title: "A Primer on Politeness, From the 'Complete Handbook for the Use of the Lady in Polite Society'",
        publishedAt: 1649185825,
        uri: "/bright/a-primer-on-politeness-from-the-complete-handbook-for-the-use-of-the-lady-in-polite-society-4384218",
    },
    {
        title: "YouTube Admits to Deleting Anti-CCP Phrases, Blames ‘Error’",
        publishedAt: 1590534864,
        uri: "/us/youtube-admits-deleting-anti-ccp-phrases-blames-error-3365719",
    },
    {
        title: "Rulemaking on China Buying Advanced US Tech Needs Urgent Action, Lawmaker Says",
        publishedAt: 1572631472,
        uri: "/us/rulemaking-on-china-buying-advanced-us-tech-needs-urgent-action-lawmaker-says-3134587",
    },
    {
        title: "Sen. Cotton: Stop Giving Visas to Chinese Army-Affiliated Students",
        publishedAt: 1564587383,
        uri: "/us/sen-cotton-stop-giving-visas-to-chinese-army-affiliated-students-3024064",
    },
    {
        title: "Senators Urge NBC to Refuse to Air 2022 Beijing Olympics Over Human Rights Concerns",
        publishedAt: 1576936565,
        uri: "/china/senators-urge-nbc-not-to-air-2022-beijing-olympics-over-human-rights-concerns-3181169",
    },
    {
        title: "Steve Bannon's Huawei Film 'Claws of the Red Dragon' Debuts",
        publishedAt: 1571508747,
        uri: "/entertainment/steve-bannons-huawei-film-claws-of-the-red-dragon-debuts-3121440",
    },
    {
        title: "US to Sell 34 Surveillance Drones to Allies in South China Sea Region",
        publishedAt: 1559659638,
        uri: "/world/us-to-sell-34-surveillance-drones-to-allies-in-south-china-sea-region-2950307",
    },
    {
        title: "To Free Doctors From Computers, Far-Flung Scribes Are Now Taking Notes for Them",
        publishedAt: 1602497662,
        uri: "/health/to-free-doctors-from-computers-far-flung-scribes-are-now-taking-notes-for-them-3525169",
    },
    {
        title: "Trump's 15 Percent Tariffs on $112B in Chinese Goods Take Effect",
        publishedAt: 1567323667,
        uri: "/china/trumps-15-percent-tariffs-on-112b-in-chinese-goods-take-effect-3064231",
    },
    {
        title: "Should US Chipmakers Fear China’s Semiconductor Ambitions?",
        publishedAt: 1599325446,
        uri: "/china/should-us-chipmakers-fear-chinas-semiconductor-ambitions-3488974",
    },
    {
        title: "Army Publishes 16-Year Modernization Plan to Outpace China With New Battle Concept",
        publishedAt: 1572962672,
        uri: "/us/army-publishes-16-year-modernization-plan-to-outpace-china-with-new-battle-concept-3135355",
    },
    {
        title: "The ‘Scientific Consensus’ Is Often Wrong",
        publishedAt: 1606822660,
        uri: "/opinion/the-scientific-consensus-is-often-wrong-3598729",
    },
    {
        title: "America's Spy-Busters Put Secret-Stealing Chinese 'Grad Students' Under Microscope",
        publishedAt: 1613058934,
        uri: "/china/americas-spy-busters-put-secret-stealing-chinese-grad-students-under-microscope-3693493",
    },
    {
        title: "Urgent Legislation Needed to Stop the Online Exploitation of Children: NCOSE",
        publishedAt: 1573232090,
        uri: "/us/urgent-legislation-needed-to-stop-the-online-exploitation-of-children-ncose-3140659",
    },
    {
        title: "Apple Previews New Software as It Diversifies Beyond IPhones",
        publishedAt: 1559627479,
        uri: "/article/apple-previews-new-software-as-it-diversifies-beyond-iphones-2949769",
    },
    {
        title: "Huawei's US Research Arm Futurewei Laying Off Workers",
        publishedAt: 1563818581,
        uri: "/china/huaweis-us-research-arm-futurewei-laying-off-workers-3011760",
    },
    {
        title: "Victorian Driver Licences Will Be Uploaded to Australian Government's Facial Recognition Database",
        publishedAt: 1568693648,
        uri: "/world/victorian-driver-licences-will-be-uploaded-to-australian-governments-facial-recognition-database-3084430",
    },
    {
        title: "No Decision on Huawei and 5G Before Fall Federal Election Call: Goodale",
        publishedAt: 1564580044,
        uri: "/world/no-decision-on-huawei-and-5g-before-fall-federal-election-call-goodale-3024021",
    },
    {
        title: "Trump: Hong Kong, Human Rights Are Part of China Trade Talks",
        publishedAt: 1579701842,
        uri: "/article/trump-hong-kong-human-rights-are-part-of-china-trade-talks-3212228",
    },
    {
        title: "Indian Spacecraft Launched Last Month Is Now Orbiting Moon",
        publishedAt: 1566298227,
        uri: "/science/indian-spacecraft-launched-last-month-is-now-orbiting-moon-3048801",
    },
    {
        title: "Key Technological Accomplishments by the Current Administration Over the Past 2 Years",
        publishedAt: 1547702203,
        uri: "/opinion/key-technological-accomplishments-by-the-current-administration-over-the-past-2-years-2766227",
    },
    {
        title: "Companies Using Facial Recognition Need to Follow Ethical Standards: Lawmakers",
        publishedAt: 1579324730,
        uri: "/us/u-s-congress-time-to-hold-companies-that-use-facial-recognition-to-ethical-standards-3207929",
    },
    {
        title: "Toyota's Not Alone in the Slow Lane to Self-Driving Cars",
        publishedAt: 1572339815,
        uri: "/article/toyotas-not-alone-in-the-slow-lane-to-self-driving-cars-3129903",
    },
    {
        title: "Rep. Mark Green: On Reshoring Supply Chains from China and Protecting Companies Struggling Under COVID 19",
        publishedAt: 1589428649,
        uri: "/epochtv/rep-mark-green-on-reshoring-supply-chains-from-china-and-protecting-companies-struggling-under-covid-19-3350242",
    },
    {
        title: "Senators Challenge Google for ‘Putting Profits Before Country’",
        publishedAt: 1565209518,
        uri: "/us/senators-challenge-google-for-putting-profits-before-country-3033569",
    },
    {
        title: "Canada Funds COVID-19 Research With Controversial Wuhan Virus Lab",
        publishedAt: 1587148549,
        uri: "/article/canada-funds-covid-19-research-with-controversial-wuhan-virus-lab-3316256",
    },
    {
        title: "TikTok’s Growth Expands China’s AI and Surveillance Capabilities",
        publishedAt: 1563737381,
        uri: "/china/tiktoks-growth-expands-chinas-ai-and-surveillance-capabilities-3010625",
    },
    {
        title: "Argo Takes Different Road to Skirt Self-Driving Challenges",
        publishedAt: 1576566648,
        uri: "/article/argo-takes-different-road-to-skirt-self-driving-challenges-3176056",
    },
    {
        title: "US Vulnerable to China Rare-Earth Monopoly, Researchers Find",
        publishedAt: 1593960392,
        uri: "/us/us-vulnerable-to-china-rare-earth-monopoly-researchers-find-3408972",
    },
    {
        title: "Facing Down China's Technology Challenge",
        publishedAt: 1585342354,
        uri: "/opinion/facing-down-chinas-technology-challenge-3288654",
    },
    {
        title: "Erik Bethel: China’s New Digital Currency Is Tool for Mass Control, in China and Beyond",
        publishedAt: 1644364403,
        uri: "/epochtv/erik-bethel-chinas-new-digital-currency-is-tool-for-mass-control-in-china-and-beyond-4265462",
    },
    {
        title: "2019 in Review: US Steps Up Offensive Against Chinese Regime",
        publishedAt: 1577213920,
        uri: "/china/year-in-review-us-steps-up-offensive-against-chinese-regime-3182839",
    },
    {
        title: "US Senator: Chinese Families Are Threatened by Beijing If Their US-Educated Child Doesn’t Bring Back Stolen IP",
        publishedAt: 1560974275,
        uri: "/china/us-senator-chinese-families-are-threatened-by-beijing-if-their-us-educated-child-doesnt-bring-back-stolen-ip-2969354",
    },
    {
        title: "The AI Race: China's Aggressive Bid to Overtake US as Global Leader",
        publishedAt: 1551393573,
        uri: "/china/the-ai-race-chinas-aggressive-bid-to-overtake-us-as-global-leader-2816585",
    },
    {
        title: "SoftBank Profits Rise, Partly on Gains From Saudi-Tied Fund",
        publishedAt: 1557474431,
        uri: "/article/softbank-profits-rise-partly-on-gains-from-saudi-tied-fund-2915241",
    },
    {
        title: "Businesses Urge White House to Counter China in Quantum, AI Research",
        publishedAt: 1581877847,
        uri: "/us/businesses-urge-white-house-to-counter-china-in-quantum-and-ai-research-3239930",
    },
    {
        title: "Kudlow: Human Rights Are 'Very Important Part' of US–China Talks",
        publishedAt: 1571679759,
        uri: "/us/kudlow-human-rights-are-very-important-part-of-the-us-china-talks-3122864",
    },
    {
        title: "Will Robots Take Your Job? Quarter of US Workers at Risk",
        publishedAt: 1548433611,
        uri: "/tech/will-robots-take-your-job-quarter-of-us-workers-at-risk-2778930",
    },
    {
        title: "Federal Thrift Savings Board Insists on Investing in China Stock",
        publishedAt: 1573765275,
        uri: "/us/federal-thrift-savings-board-insists-on-investing-in-china-stock-3146945",
    },
    {
        title: "Silicon Valley Billionaire Peter Thiel: The President Will Get Reelected, But the Socialists Are Not to Be Underestimated",
        publishedAt: 1569013409,
        uri: "/article/silicon-valley-billionaire-peter-thiel-the-president-will-get-reelected-but-the-socialists-are-not-to-be-underestimated-3089386",
    },
    {
        title: "Google’s China Ties in AI Research Eyed",
        publishedAt: 1568242642,
        uri: "/china/googles-china-ties-in-ai-research-eyed-3078658",
    },
    {
        title: "Morrison Government at the ‘Forefront’ of Countering Beijing's Unrestricted Warfare: Expert",
        publishedAt: 1594379958,
        uri: "/world/morrison-government-at-the-forefront-of-countering-beijing-unrestricted-warfare-expert-3419030",
    },
    {
        title: "Google Unveils Pixel 4 Phones With Radar, More Affordable Laptop",
        publishedAt: 1571207780,
        uri: "/article/google-unveils-pixel-4-phones-with-radar-more-affordable-laptop-3117316",
    },
    {
        title: "Decoupling From China Is Necessary and Inevitable, Experts Say",
        publishedAt: 1587570513,
        uri: "/us/decoupling-from-china-is-necessary-and-inevitable-say-experts-3322473",
    },
    {
        title: "Late Chinese Physicist Had Ambitious Dreams for His Venture Capital Firm",
        publishedAt: 1546024143,
        uri: "/china/late-chinese-physicist-had-ambitious-dreams-for-his-venture-capital-firm-2750535",
    },
    {
        title: "Perspective on the Pandemic: British PM’s Ties With the Chinese Regime",
        publishedAt: 1587143154,
        uri: "/article/perspective-on-the-pandemic-british-pms-ties-with-the-chinese-regime-3316330",
    },
    {
        title: "Big Brother Schools Using Big Data to Manipulate and Spy on Kids",
        publishedAt: 1579722606,
        uri: "/opinion/big-brother-schools-using-big-data-to-manipulate-and-spy-on-kids-3209749",
    },
    {
        title: "Democratic Rep. Moulton Lays Out Party’s Views on Defense",
        publishedAt: 1550093732,
        uri: "/us/democratic-rep-moulton-lays-out-partys-views-on-defense-2799856",
    },
    {
        title: "Institute Unveils 'Team Canada of Cancer Research' at Spot Where Fox Began Run",
        publishedAt: 1555100256,
        uri: "/world/institute-unveils-team-canada-of-cancer-research-at-spot-where-fox-began-run-2877699",
    },
    {
        title: "Australian Universities Helping Chinese Regime in Global Spying Efforts, Investigation Reveals",
        publishedAt: 1571257638,
        uri: "/world/australian-universities-helping-chinese-regime-in-global-spying-efforts-investigation-reveals-3117428",
    },
    {
        title: "US Joined by Nations Around the World in Cracking Down on Chinese Investment",
        publishedAt: 1577329183,
        uri: "/us/us-joined-by-nations-around-the-world-in-cracking-down-on-chinese-investment-3185130",
    },
    {
        title: "Human Workers Can Listen to Google Assistant Recordings",
        publishedAt: 1563067775,
        uri: "/tech/human-workers-can-listen-to-google-assistant-recordings-3001121",
    },
    {
        title: "Taiwan Ministry of Science and Technology Holds Expansion Conference in Boston",
        publishedAt: 1536971155,
        uri: "/tech/taiwan-ministry-of-science-and-technology-holds-expansion-conference-in-boston-2661769",
    },
    {
        title: "China Dominant in Global Expansion of AI Surveillance: Carnegie Endowment Report",
        publishedAt: 1570562015,
        uri: "/china/china-dominant-in-global-expansion-of-ai-surveillance-carnegie-endowment-report-3109999",
    },
    {
        title: "Sanctions on Chinese Tech Firms Involved in Xinjiang Suppression a 'Possibility:' US Ambassador",
        publishedAt: 1565545566,
        uri: "/china/sanctions-on-chinese-tech-firms-involved-in-xinjiang-suppression-a-possibility-us-ambassador-3037636",
    },
    {
        title: "Canada’s Military Hits 2 Milestones but Procurement and Funding Concerns Linger",
        publishedAt: 1596657815,
        uri: "/world/canadas-military-hits-2-milestones-but-procurement-and-funding-concerns-linger-3451554",
    },
    {
        title: "Chinese Leader Warns Against Foreign Forces Interfering in Hong Kong, Macau",
        publishedAt: 1576881392,
        uri: "/china/chinese-leader-warns-against-foreign-forces-interfering-in-hong-kong-macau-3181103",
    },
    {
        title: "Welcome to Xi Jinping’s 'Smart Jails': A Secret Text Revealed",
        publishedAt: 1563971528,
        uri: "/china/welcome-to-xi-jinpings-smart-jails-a-secret-text-revealed-3014660",
    },
    {
        title: "Russia–Ukraine War (April 8): Russia Urges Western Countries to Stop Supplying Ukraine With Weapons",
        publishedAt: 1649395006,
        uri: "/world/live-updates-russia-ukraine-war-april-8-uk-says-russian-forces-have-fully-withdrawn-from-northern-ukraine-4391136",
    },
    {
        title: "China's Xi Rolls Out New Governance Concept as Key Party Conclave Begins",
        publishedAt: 1572300432,
        uri: "/china/as-key-party-conclave-begins-chinese-leader-xi-rolls-out-new-governance-concept-3130200",
    },
    {
        title: "China Tightens Up on Info After Xinjiang Leaks",
        publishedAt: 1576501150,
        uri: "/china/china-tightens-up-on-info-after-xinjiang-leaks-3175509",
    },
    {
        title: "China’s Tech Giants Introduce On-Farm Pig Face Recognition Technology",
        publishedAt: 1550085812,
        uri: "/china/chinas-tech-giants-introduce-on-farm-pig-face-recognition-technology-2799848",
    },
    {
        title: "Cleveland Clinic Identifies Melatonin as COVID-19 Treatment",
        publishedAt: 1607041651,
        uri: "/health/cleveland-clinic-identifies-melatonin-as-covid-19-treatment-3592407",
    },
    {
        title: "Google Achieves ‘Quantum Supremacy’ That Will Soon Break All Encryptions",
        publishedAt: 1569437121,
        uri: "/tech/google-achieves-quantum-supremacy-that-will-soon-break-all-encryptions-3096063",
    },
    {
        title: "Japan to Fortify Universities Against Leaks of US Technology",
        publishedAt: 1553713491,
        uri: "/china/japan-to-fortify-universities-against-leaks-of-us-technology-2855683",
    },
    {
        title: "Chinese Regime Using Pandemic to Advance Global Ambitions, Expert Says",
        publishedAt: 1585764787,
        uri: "/article/chinese-regime-using-pandemic-to-advance-global-ambitions-expert-says-3294231",
    },
    {
        title: "Exclusive With Data Scientists: Public Data Shows 432,000 Trump Votes Removed in Pennsylvania",
        publishedAt: 1609902951,
        uri: "/epochtv/exclusive-with-data-scientists-public-data-shows-432000-trump-votes-removed-in-pennsylvania-3645160",
    },
    {
        title: "SARS-COV-2 Vaccines and Neurodegenerative Disease",
        publishedAt: 1641950561,
        uri: "/health/sars-cov-2-vaccines-and-neurodegenerative-disease-4207235",
    },
    {
        title: "West Increases Defense Spending to Keep Ahead of Chinese Tech: Conference Report",
        publishedAt: 1550245283,
        uri: "/china/west-increases-defense-spending-to-keep-ahead-of-chinese-tech-conference-report-2802564",
    },
    {
        title: "NBCUniversal, Sky Team up to Expand Global Advertising Product",
        publishedAt: 1552951709,
        uri: "/article/nbcuniversal-sky-team-up-to-expand-global-advertising-product-2843135",
    },
    {
        title: "Report Warns Hypersonic Weapons Would be Hard to Defend Against, Puts Spotlight on China's Ambitions",
        publishedAt: 1568993050,
        uri: "/china/report-warns-hypersonic-weapons-would-be-hard-to-defend-against-puts-spotlight-on-chinas-ambitions-3089373",
    },
    {
        title: "Pentagon Keeps Focus on Modernizing to Counter China in FY2021 Budget Request",
        publishedAt: 1581440459,
        uri: "/us/pentagon-keeps-focus-on-modernizing-to-counter-china-in-2021-budget-request-3233572",
    },
    {
        title: "How We Won the Cold War, but Are Losing This Time",
        publishedAt: 1585076835,
        uri: "/opinion/how-we-won-the-cold-war-but-are-losing-this-time-3284290",
    },
    {
        title: "Japan's Honda, Hino Join Softbank-Toyota Mobility Venture",
        publishedAt: 1553815551,
        uri: "/article/japans-honda-hino-join-softbank-toyota-mobility-venture-2857562",
    },
    {
        title: "Trump's Reelection Campaign Launches 'Women for Trump' Coalition",
        publishedAt: 1563314213,
        uri: "/article/trumps-re-election-campaign-launches-women-for-trump-coalition-3004946",
    },
    {
        title: "Unleashing Our New Sputnik Movement",
        publishedAt: 1580837088,
        uri: "/opinion/unleashing-our-new-sputnik-movement-3226863",
    },
    {
        title: "No More 'Business as Usual' With China",
        publishedAt: 1568642838,
        uri: "/opinion/no-more-business-as-usual-with-china-3083353",
    },
    {
        title: "Chinese Surveillance Exposes Identities of Adults, Minors for Crossing Street at Wrong Time: Police",
        publishedAt: 1559153429,
        uri: "/china/chinese-surveillance-exposes-identities-of-adults-minors-for-crossing-street-at-wrong-time-police-2941586",
    },
    {
        title: "China Leads in Emerging Technology Industries, US Defense Official Warns",
        publishedAt: 1572464474,
        uri: "/china/china-is-leading-in-emerging-technology-industries-defense-official-warns-3131789",
    },
    {
        title: "China Is Branding Anti-Satellite Weapons as 'Scavenger Satellites'",
        publishedAt: 1557090334,
        uri: "/opinion/china-is-branding-anti-satellite-weapons-as-scavenger-satellites-2907825",
    },
    {
        title: "China’s Race for AI Dominance",
        publishedAt: 1549426817,
        uri: "/opinion/chinas-race-for-ai-dominance-2790345",
    },
    {
        title: "Cuomo Blunders Big by Tying NY Recovery to CCP Apologists at McKinsey",
        publishedAt: 1587172354,
        uri: "/opinion/cuomo-blunders-big-tying-ny-recovery-to-ccp-apologists-mckinsey-3316798",
    },
    {
        title: "Taiwan Science and Technology Department Holds Conference on Expansion",
        publishedAt: 1537197907,
        uri: "/tech/taiwan-science-and-technology-department-holds-conference-on-expansion-2663014",
    },
    {
        title: "Philippines Protests Over Chinese Vessels in Disputed Waters",
        publishedAt: 1554128126,
        uri: "/world/philippines-protests-over-chinese-vessels-in-disputed-waters-2861619",
    },
    {
        title: "Bolton Says US Currently Bolstering Defense Against China’s Cyber Espionage",
        publishedAt: 1560980895,
        uri: "/china/bolton-says-us-currently-bolstering-defense-against-chinas-cyber-espionage-2970371",
    },
    {
        title: "White House's Navarro Says China Trade Deal Will Take Time: CNBC",
        publishedAt: 1562239186,
        uri: "/china/white-houses-navarro-says-china-trade-deal-will-take-time-cnbc-2988081",
    },
    {
        title: "Health Websites Share Sensitive Personal Data with Advertisers Without Required Consent: Report",
        publishedAt: 1573660345,
        uri: "/tech/health-websites-share-sensitive-personal-data-with-advertisers-without-required-consent-report-3145153",
    },
    {
        title: "Industry and State Department Battle Over 5G Standards",
        publishedAt: 1577667612,
        uri: "/us/industry-and-state-department-battle-over-5g-standards-3187784",
    },
    {
        title: "Concerns Over China Bring Fading US Lending Agency Back to Life",
        publishedAt: 1577648677,
        uri: "/us/concerns-over-china-bring-the-fading-u-s-lending-agency-back-to-life-3187796",
    },
    {
        title: "San Francisco Votes to Ban City Use of Facial Recognition Technology",
        publishedAt: 1557935302,
        uri: "/us/san-francisco-votes-to-ban-city-use-of-facial-recognition-technology-2924671",
    },
    {
        title: "Trump Welcomes Australia's Prime Minister, Cementing Strong Trade, Security Ties",
        publishedAt: 1569000238,
        uri: "/article/trump-welcomes-australias-prime-minister-cementing-strong-trade-security-ties-3089625",
    },
    {
        title: "California’s New Data Privacy Law Could Hit Mom-and-Pops Hard",
        publishedAt: 1579276947,
        uri: "/us/californias-new-data-privacy-law-could-hit-mom-and-pops-hard-3207415",
    },
    {
        title: "Casey Fleming: The Chinese Regime Uses All Sectors to Wage War on the US, and the US Must Respond",
        publishedAt: 1581984057,
        uri: "/epochtv/casey-fleming-the-chinese-regime-uses-all-sectors-to-wage-war-on-the-us-and-the-us-must-respond-3240756",
    },
    {
        title: "American Companies Struggling With Counterfeits Welcome Administration's Crackdown",
        publishedAt: 1582735377,
        uri: "/us/businesses-industry-groups-laud-trump-admin-for-latest-push-in-counterfeit-battle-3251454",
    },
    {
        title: "Helium, Socialism, and Party City",
        publishedAt: 1558083982,
        uri: "/opinion/helium-socialism-and-party-city-2924698",
    },
    {
        title: "George Soros Declares Cold War on China",
        publishedAt: 1550193049,
        uri: "/opinion/george-soros-declares-cold-war-on-china-2801291",
    },
    {
        title: "A Look Back at the Biden Family’s China Business Ties",
        publishedAt: 1603387026,
        uri: "/china/a-look-back-at-the-biden-familys-china-business-ties-3547134",
    },
    {
        title: "Huawei Supplying Major Chinese Cities and Regions with Mass Surveillance Tech",
        publishedAt: 1545316192,
        uri: "/china/huawei-supplying-major-chinese-cities-and-regions-with-mass-surveillance-tech-2744481",
    },
    {
        title: "Meet the Doctor Who Gave Hope to People for Early COVID Treatment",
        publishedAt: 1654178449,
        uri: "/health/meet-the-doctor-who-gave-hope-to-people-for-early-covid-treatment-4500350",
    },
    {
        title: "Germany's Merkel Says Hong Kong's Rights Should Be Protected",
        publishedAt: 1567770012,
        uri: "/world/germanys-merkel-says-hong-kongs-rights-should-be-protected-3071397",
    },
    {
        title: "Chinese Authorities Require Surveillance Cameras to Be Installed Inside Rental Housing",
        publishedAt: 1555009054,
        uri: "/china/chinese-authorities-require-surveillance-cameras-installed-inside-rental-housing-2875997",
    },
    {
        title: "Canada's Intelligence Chief Says Foreign Interference, Espionage Biggest Threats to National Interest",
        publishedAt: 1544049586,
        uri: "/world/canadas-intelligence-chief-says-foreign-interference-espionage-biggest-threats-to-national-interest-2-2731666",
    },
    {
        title: "Taiwan’s Advances in Digital Healthcare",
        publishedAt: 1556171659,
        uri: "/opinion/taiwans-advances-in-digital-healthcare-2893819",
    },
    {
        title: "Chinese Tech Investors Flee Silicon Valley as Trump Tightens Scrutiny",
        publishedAt: 1546874885,
        uri: "/china/chinese-tech-investors-flee-silicon-valley-as-trump-tightens-scrutiny-2759100",
    },
    {
        title: "China Reveals State Funding Amounts for Science and Tech Projects",
        publishedAt: 1542170423,
        uri: "/china/china-reveals-state-funding-amounts-for-science-and-tech-projects-2715068",
    },
    {
        title: "China Deploys Fighter Jets at Disputed Island in South China Sea, as US Allies Conduct Naval Exercises",
        publishedAt: 1561406694,
        uri: "/china/china-deploys-fighter-jets-at-island-in-south-china-sea-as-us-allies-conduct-naval-exercises-2973571",
    },
    {
        title: "To Be Fair, a Trade Deal With China Must Be Tough",
        publishedAt: 1544413863,
        uri: "/opinion/to-be-fair-a-trade-deal-with-china-must-be-tough-2732143",
    },
    {
        title: "Huawei Embarks on PR Blitz Amid Global Concerns About Its Shady Practices",
        publishedAt: 1549319005,
        uri: "/china/huawei-embarks-on-pr-blitz-amid-global-concerns-of-its-shady-practices-2790029",
    },
    {
        title: "Beijing Launches Plans for Shenzhen to Become World Hub, in Apparent Bid to Replace Hong Kong",
        publishedAt: 1566337940,
        uri: "/china/beijing-launches-plans-for-shenzhen-to-become-top-financial-center-in-apparent-bid-to-replace-hong-kong-3049218",
    },
    {
        title: "IKEA to Revamp App as Store Strategy Shifts",
        publishedAt: 1559021937,
        uri: "/article/ikea-to-revamp-app-as-store-strategy-shifts-2939673",
    },
    {
        title: "Girl, 15, Arrested for Making Terror Threats Against Her High School via Snapchat: Police",
        publishedAt: 1565938977,
        uri: "/us/girl-15-arrested-for-making-terror-threats-against-her-high-school-via-snapchat-police-3044481",
    },
    {
        title: "Security, Spying Concerns as Philippines Considers China's Surveillance Tender",
        publishedAt: 1544845893,
        uri: "/china/security-spying-concerns-as-philippines-considers-chinas-surveillance-tender-2739054",
    },
    {
        title: "Bipartisan Senate Group Wants Tougher US Export Controls on China’s Hong Kong Exploitation",
        publishedAt: 1568230254,
        uri: "/us/bipartisan-senate-group-wants-tougher-u-s-export-controls-on-chinas-hong-kong-exploitation-3078306",
    },
    {
        title: "The Chinese Communist Regime Is a Danger to the World",
        publishedAt: 1592920929,
        uri: "/article/the-chinese-communist-regime-is-a-danger-to-the-world-3380625",
    },
    {
        title: "Huawei’s Use of Political Insiders for Lobbying Could Be a Concern, Experts Warn",
        publishedAt: 1557977357,
        uri: "/world/huaweis-use-of-political-insiders-for-lobbying-could-be-a-concern-experts-warn-2925251",
    },
    {
        title: "Google Launches $399 Pixel Phone, More US Carriers Will Sell It",
        publishedAt: 1557320426,
        uri: "/article/google-launches-399-pixel-phone-more-us-carriers-will-sell-it-2910783",
    },
    {
        title: "Harvard Professor Defends Claim Interstellar Object Might Be Extraterrestrial Probe: Report",
        publishedAt: 1547674010,
        uri: "/science/harvard-professor-defends-claim-interstellar-object-might-be-extraterrestrial-probe-report-2768812",
    },
    {
        title: "Banking on China: University of California’s China Collaborations Under the Spotlight",
        publishedAt: 1625241085,
        uri: "/china/banking-on-china-university-of-californias-china-collaborations-under-the-spotlight-3882795",
    },
    {
        title: "Cheating in Baseball: Past, Present, and Future",
        publishedAt: 1579296371,
        uri: "/opinion/cheating-in-baseball-past-present-and-future-3207641",
    },
    {
        title: "AP Partnership With Chinese State-Run Media Xinhua Draws Congressional Concern",
        publishedAt: 1545866501,
        uri: "/china/ap-partnership-with-chinese-state-run-media-draws-scrutiny-from-us-congress-2749314",
    },
    {
        title: "China Introduces Mandatory Facial Scans for Phone Users",
        publishedAt: 1575401662,
        uri: "/china/china-introduces-mandatory-facial-scans-for-phone-users-3162905",
    },
    {
        title: "A Hard Touch of China’s 'Soft Power' in Central Asia",
        publishedAt: 1582550610,
        uri: "/world/a-hard-touch-of-chinas-soft-power-in-central-asia-3248038",
    },
    {
        title: "China, Russia, North Korea, Iran Form Anti-American Alliance",
        publishedAt: 1578942884,
        uri: "/opinion/china-russia-north-korea-iran-form-anti-american-alliance-3202575",
    },
    {
        title: "Video: Gordon Chang on Chinese Election Interference; Paid Propaganda in US Media; China’s Massive DNA Database",
        publishedAt: 1607045225,
        uri: "/epochtv/gordon-chang-on-chinese-election-interference-paid-propaganda-in-us-media-chinas-massive-dna-database-3604136",
    },
    {
        title: "Google Debuts Pixel 4 Phone, Wireless Earbuds With AI",
        publishedAt: 1571158148,
        uri: "/tech/google-debuts-pixel-4-phone-wireless-earbuds-with-ai-3117082",
    },
    {
        title: "Sitting on the Fence Is No Longer an Option With China",
        publishedAt: 1596930197,
        uri: "/opinion/sitting-on-the-fence-is-no-longer-an-option-with-china-3453716",
    },
    {
        title: "Universal Basic Income and the Pandemic Income Crisis",
        publishedAt: 1585157496,
        uri: "/opinion/universal-basic-income-and-the-pandemic-income-crisis-3284632",
    },
    {
        title: "US Senators Raise National Security Concerns About Huawei Solar Product",
        publishedAt: 1551298463,
        uri: "/china/us-senators-raise-national-security-concerns-about-huawei-solar-product-2817958",
    },
    {
        title: "Key Beijing Conclave Emphasizes Xi's Leadership, Hints at Tough Stance on Hong Kong",
        publishedAt: 1572560814,
        uri: "/china/key-beijing-conclave-solidifies-xis-leadership-hints-at-tough-stance-on-hong-kong-3133940",
    },
    {
        title: "UK Scientists Build Hand Database to Catch Child Abusers",
        publishedAt: 1550082552,
        uri: "/world/uk-scientists-build-hand-database-to-catch-abusers-2799677",
    },
    {
        title: "US-Based Research Body Bars Huawei From Peer Review, Editorial Process",
        publishedAt: 1559247404,
        uri: "/china/us-based-research-body-bans-huawei-from-peer-review-and-editorial-process-2944207",
    },
    {
        title: "Canadian, UK Universities Warned by Intelligence Agencies to Be Wary of Huawei",
        publishedAt: 1545248610,
        uri: "/world/universities-warned-to-be-wary-of-research-partnerships-with-huawei-2743679",
    },
    {
        title: "How to Heal Post-Vaccine and Counter Effects",
        publishedAt: 1645477805,
        uri: "/health/how-to-detoxify-and-heal-from-vaccinations-4292712",
    },
    {
        title: "Sen. Tom Cotton: Communist China Waging ‘Undeclared War’ on US and the West",
        publishedAt: 1596040239,
        uri: "/epochtv/sen-tom-cotton-communist-china-waging-undeclared-war-on-us-and-the-west-3442964",
    },
    {
        title: "US Army Taps Academic Research for Cutting-Edge Military Technology",
        publishedAt: 1580759914,
        uri: "/us/army-taps-academic-research-for-cutting-edge-military-tech-3225335",
    },
    {
        title: "Arrest of UK Nationals, Harassment of US Citizens in China Prompt Fears of Hostage Diplomacy",
        publishedAt: 1562964310,
        uri: "/china/arrest-of-uk-nationals-harassment-of-us-citizens-in-china-prompt-fears-of-hostage-diplomacy-3000042",
    },
    {
        title: "Behind the Changes of Foxconn’s Wisconsin Investment",
        publishedAt: 1550586046,
        uri: "/china/behind-the-changes-of-foxconns-wisconsin-investment-2806338",
    },
    {
        title: "US Semiconductor Group Urges More Research Funding to Counter China",
        publishedAt: 1554306324,
        uri: "/china/us-semiconductor-group-urges-more-research-funding-to-counter-china-2864858",
    },
    {
        title: "Canada Must Face All Aspects of Huawei Problem",
        publishedAt: 1551137548,
        uri: "/opinion/canada-must-face-all-aspects-of-huawei-problem-2815486",
    },
    {
        title: "Hong Kong Protesters Wary of Chinese Surveillance Technology",
        publishedAt: 1560448001,
        uri: "/china/hong-kong-protesters-wary-of-chinese-surveillance-technology-2962280",
    },
    {
        title: "US Warns Israel of Security Risks in Huawei Solar Products",
        publishedAt: 1561664055,
        uri: "/china/us-warns-israel-of-security-risks-in-huawei-solar-products-2981072",
    },
    {
        title: "Trump Shakes Hand of Every Air Force Academy Graduate Following Commencement Speech",
        publishedAt: 1559315460,
        uri: "/article/trump-shakes-hand-of-every-air-force-academy-graduate-following-commencement-speech-2945974",
    },
    {
        title: "Philippines' Duterte Tells China to 'Lay Off' Island in Disputed Waters",
        publishedAt: 1554393358,
        uri: "/world/philippines-says-chinese-vessels-in-disputed-waters-illegal-2866755",
    },
    {
        title: "Huawei Launches PR Campaign to Allay Security Concerns, Criticism of Ties to Beijing",
        publishedAt: 1545343463,
        uri: "/china/huawei-launches-pr-campaign-to-allay-security-concerns-and-criticisms-of-ties-to-beijing-2745012",
    },
    {
        title: "Iran Oil Tanker Pursued by US Turns Off Tracker Near Syria",
        publishedAt: 1567555689,
        uri: "/world/iran-oil-tanker-pursued-by-us-turns-off-tracker-near-syria-3067419",
    },
    {
        title: "Policy-Makers Play Catch-Up in Measuring the Digital Economy",
        publishedAt: 1560977586,
        uri: "/article/policy-makers-play-catch-up-in-measuring-the-digital-economy-2970500",
    },
    {
        title: "Cloud Optimizer Spotinst Raises $35 Million in Private Funding",
        publishedAt: 1535604080,
        uri: "/tech/cloud-optimizer-spotinst-raises-35-million-in-private-funding-2635094",
    },
    {
        title: "Video: Communist China Is Committing Genocide in Xinjiang and Building Authoritarian Bloc—USCIRF Commissioners",
        publishedAt: 1611450938,
        uri: "/epochtv/video-communist-china-is-committing-genocide-in-xinjiang-and-building-authoritarian-bloc-uscirf-commissioners-3668721",
    },
    {
        title: "Trump Cites Google Engineer Who Said Company Had 'Bias' Against President, Criticizes Sundar Pichai",
        publishedAt: 1565114200,
        uri: "/article/trump-cites-google-engineer-who-said-company-had-bias-against-president-criticizes-sundar-pichai-3031979",
    },
    {
        title: "Huawei: ‘A Pressing Problem That Demands Serious Work’",
        publishedAt: 1554501197,
        uri: "/article/huawei-a-pressing-problem-that-demands-serious-work-2868529",
    },
    {
        title: "US Universities Unplug from China's Huawei Under New National Security Law",
        publishedAt: 1548343456,
        uri: "/us/us-universities-unplug-from-chinas-huawei-under-new-national-security-law-2777598",
    },
    {
        title: "China’s Ambitious Blockchain Plans Could Cast US Dollar Out of the Game",
        publishedAt: 1553266498,
        uri: "/china/chinas-ambitious-blockchain-plans-could-cast-us-dollar-out-of-the-game-2849020",
    },
    {
        title: "China Sinochem's Online Energy Platform Slashes Jobs After Poor Reception",
        publishedAt: 1546622220,
        uri: "/china/china-sinochems-online-energy-platform-slashes-jobs-after-poor-reception-2757055",
    },
    {
        title: "Is Beijing’s 'German Strategy' Working?",
        publishedAt: 1569376282,
        uri: "/opinion/is-beijings-german-strategy-working-3094334",
    },
    {
        title: "A Life of Learning: One Man's Journey Through Five Careers",
        publishedAt: 1577783518,
        uri: "/bright/a-life-of-learning-one-mans-journey-through-five-careers-3178423",
    },
    {
        title: "The Mysterious Origins of the CCP Virus",
        publishedAt: 1585170393,
        uri: "/article/the-mysterious-origins-of-the-ccp-virus-2-3281567",
    },
    {
        title: "Wisconsin Man Convicted of Sex Trafficking on Backpage",
        publishedAt: 1555447962,
        uri: "/us/wisconsin-man-convicted-of-sex-trafficking-on-backpage-2882287",
    },
    {
        title: "US to Press Allies to Keep Huawei Out of 5G in Prague Meeting",
        publishedAt: 1555362263,
        uri: "/china/us-to-press-allies-to-keep-huawei-out-of-5g-in-prague-meeting-2880801",
    },
    {
        title: "Pompeo Assures Philippines of US Protection in Event of Sea Conflict With China",
        publishedAt: 1551458449,
        uri: "/world/pompeo-assures-philippines-of-us-protection-in-event-of-sea-conflict-with-china-2820973",
    },
    {
        title: "Infrastructure Warfare: GPS Faces Growing Threat From China",
        publishedAt: 1594984923,
        uri: "/us/infrastructure-warfare-gps-faces-growing-threat-from-china-3419573",
    },
    {
        title: "China Collecting DNA From Males Across Country, Prompting Eugenics and Privacy Concerns",
        publishedAt: 1570314434,
        uri: "/china/china-collecting-dna-from-males-across-country-prompting-eugenics-and-privacy-concerns-3099248",
    },
    {
        title: "Huawei Smartphones to “Maintain Stability”",
        publishedAt: 1559842902,
        uri: "/china/huawei-smartphones-to-maintain-stability-2953752",
    },
    {
        title: "China Develops AI Fake News Detector Seen by Experts as Likely Censorship Tool",
        publishedAt: 1554930884,
        uri: "/china/china-develops-ai-fake-news-detector-experts-fear-a-tool-of-censorship-2873547",
    },
    {
        title: "Trade War Sparks Further ‘Decoupling’ Between US, China",
        publishedAt: 1563834288,
        uri: "/us/trade-war-sparks-further-decoupling-between-u-s-and-china-3012308",
    },
    {
        title: "Multi-State Child Exploitation Operation Busted; 82 Arrested, 17 Children Rescued",
        publishedAt: 1557075146,
        uri: "/us/82-arrested-in-multi-state-child-exploitation-operation-17-children-rescued-2907412",
    },
    {
        title: "2019 in Review: Atolls and Missiles–Military Continues Pivot to Great Power Competition",
        publishedAt: 1576866106,
        uri: "/us/atolls-and-missiles-military-continues-pivot-to-great-power-competition-3179851",
    },
    {
        title: "Gordon Chang: Communist China Has Committed ‘Mass Murder’ of Americans",
        publishedAt: 1620514856,
        uri: "/epochtv/gordon-chang-communist-china-has-committed-mass-murder-of-americans-3807328",
    },
    {
        title: "YouTube to Pay $170M Fine After Violating Kids' Privacy Law",
        publishedAt: 1567674161,
        uri: "/tech/youtube-to-pay-170m-fine-after-violating-kids-privacy-law-3069727",
    },
    {
        title: "US Colleges Halt Work With Huawei Following Federal Charges",
        publishedAt: 1554474323,
        uri: "/china/us-colleges-halt-work-with-huawei-following-federal-charges-2868000",
    },
    {
        title: "US Congress Report: China Is Not a True Samaritan When It Comes to International Aid",
        publishedAt: 1563391319,
        uri: "/china/us-congress-report-china-is-not-a-true-samaritan-when-it-comes-to-international-aid-3006165",
    },
    {
        title: "Google Unveils New Pixel Phone, Adds Tablet in Apple Challenge",
        publishedAt: 1539120058,
        uri: "/tech/google-unveils-new-pixel-phone-adds-tablet-in-apple-challenge-2685082",
    },
    {
        title: "Huawei Senior VP: Acknowledge and Study US Manufacturing Power",
        publishedAt: 1548968247,
        uri: "/china/huawei-senior-vp-acknowledge-and-study-us-manufacturing-power-2782858",
    },
    {
        title: "Google Will 'Actively Interfere' in 2020 Elections, Researcher Says",
        publishedAt: 1565214749,
        uri: "/article/google-will-actively-interfere-in-2020-elections-researcher-says-3033230",
    },
    {
        title: "Pompeo Warns Israel That Chinese Investment Into Country Could Hinder US Cooperation",
        publishedAt: 1553291539,
        uri: "/china/pompeo-warns-israel-that-chinese-investment-into-country-could-hinder-us-cooperation-2-2849688",
    },
    {
        title: "Dr. Robert Malone: The Monkeypox Scare, the Origins of Groupthink, and the Power of the ‘Heretic’",
        publishedAt: 1660227049,
        uri: "/epochtv/dr-robert-malone-the-monkeypox-scare-the-origins-of-groupthink-and-the-power-of-the-heretic-4657213",
    },
    {
        title: "China a Major Exporter of AI Surveillance Tools that Violate Citizens’ Rights: Report",
        publishedAt: 1569016030,
        uri: "/china/china-a-major-exporter-of-ai-surveillance-tools-that-violate-citizens-rights-report-3087476",
    },
    {
        title: "Chinese Regime Waging Economic War With West, US Experts Warn",
        publishedAt: 1556247029,
        uri: "/china/chinese-regime-waging-economic-war-with-west-us-experts-warn-2894290",
    },
    {
        title: "Will the 21st Century Really Belong to China?",
        publishedAt: 1558408416,
        uri: "/opinion/will-the-21st-century-really-belong-to-china-2930326",
    },
    {
        title: "Trump Calls for an Investigation Into Biden Family's Links With the Chinese Regime",
        publishedAt: 1558465949,
        uri: "/china/trump-calls-for-an-investigation-into-biden-familys-links-with-the-chinese-regime-2930949",
    },
    {
        title: "User Data from Popular Video-Sharing App TikTok Can Be Transferred to China, Security Expert Warns",
        publishedAt: 1547490995,
        uri: "/china/security-expert-warns-that-user-data-from-popular-video-sharing-app-tiktok-can-be-transferred-to-china-2766224",
    },
    {
        title: "Major Tech Companies Kowtow to China’s Communist Party, Just Like Huawei—Roslyn Layton [CPAC 2020]",
        publishedAt: 1585328037,
        uri: "/epochtv/major-tech-companies-kowtow-to-chinas-communist-party-just-like-huawei-roslyn-layton-cpac-2020-3288315",
    },
    {
        title: "Big Tech, AI, and the Fight Against Mass Violence",
        publishedAt: 1566800540,
        uri: "/opinion/big-tech-ai-and-the-fight-against-mass-violence-3054002",
    },
    {
        title: "US Lawmakers Grapple With Their Role in Regulating Media Manipulation",
        publishedAt: 1560491603,
        uri: "/us/us-lawmakers-grapple-with-their-role-in-regulating-media-manipulation-2963084",
    },
    {
        title: "Vermont Bans Huawei, ZTE, and Three Other Chinese Tech Firms over Security Concerns",
        publishedAt: 1551129558,
        uri: "/china/vermont-bans-huawei-zte-and-three-other-chinese-tech-firms-over-security-concerns-2812890",
    },
    {
        title: "Getting China Policy Right—At Long Last",
        publishedAt: 1575774178,
        uri: "/opinion/getting-china-policy-right-at-long-last-3168098",
    },
    {
        title: "Autopilot Was in Use Before Tesla Hit Semitrailer",
        publishedAt: 1558071805,
        uri: "/article/autopilot-was-in-use-before-tesla-hit-semitrailer-2926358",
    },
    {
        title: "A Robot Wife: The Latest AI Development in China",
        publishedAt: 1550697355,
        uri: "/china/a-robot-wife-the-latest-ai-development-in-china-2809017",
    },
    {
        title: "Microsoft Boasts of a Security Win Ahead of Pentagon Cloud Bids",
        publishedAt: 1539132460,
        uri: "/article/microsoft-boasts-of-a-security-win-ahead-of-pentagon-cloud-bids-2684907",
    },
    {
        title: "Microsoft Flags Dangers to EU of Plans to Limit Data Use",
        publishedAt: 1536174304,
        uri: "/us/microsoft-flags-dangers-to-eu-of-plans-to-limit-data-use-2641936",
    },
    {
        title: "Trafficking Survivor Eliza Bleu: How My Abuser Preyed on My Vulnerabilities",
        publishedAt: 1659051020,
        uri: "/epochtv/trafficking-survivor-eliza-bleu-how-my-abuser-preyed-on-my-vulnerabilities-4628629",
    },
    {
        title: "US Capital Markets Fund China’s Totalitarianism",
        publishedAt: 1559719103,
        uri: "/china/us-capital-markets-fund-chinas-totalitarianism-2950553",
    },
    {
        title: "China's Alibaba Revenue Grows at Weakest Pace in 3 Years",
        publishedAt: 1548863723,
        uri: "/china/chinas-alibaba-revenue-grows-at-weakest-pace-in-3-years-2784449",
    },
    {
        title: "New EU Commission President's Political Guidelines and Direction for European Union",
        publishedAt: 1571162574,
        uri: "/world/new-eu-commission-presidents-political-guidelines-and-direction-for-european-union-3116866",
    },
    {
        title: "Are Robots Coming for Your Job?",
        publishedAt: 1544079005,
        uri: "/opinion/are-robots-coming-for-your-job-2730668",
    },
    {
        title: "Joe Biden's Son Reportedly Invested in Chinese App That Spies on Muslims as US Condemns China Over 'Concentration Camps'",
        publishedAt: 1556972185,
        uri: "/world/joe-bidens-son-reportedly-invested-in-chinese-app-that-spies-on-muslims-as-us-condemns-china-over-concentration-camps-2906482",
    },
    {
        title: "Religious Persecution a Global Crisis Needing Urgent Action, US Ambassador Says",
        publishedAt: 1563313395,
        uri: "/us/religious-persecution-a-global-crisis-needing-urgent-action-us-ambassador-says-3004405",
    },
    {
        title: "White House Huddles With Tech Execs on Future of Jobs",
        publishedAt: 1544157716,
        uri: "/article/white-house-huddles-with-tech-execs-on-future-of-jobs-2732689",
    },
    {
        title: "A Mom's Research (Part 4): Why Are Many Elites Leftists?",
        publishedAt: 1619466801,
        uri: "/opinion/a-moms-research-part-4-why-are-many-elites-leftists-3791887",
    },
    {
        title: "Old Trade, New Game: Taiwan's Talk with Australia for CPTPP",
        publishedAt: 1541033642,
        uri: "/opinion/old-trade-new-game-taiwans-talk-with-australia-for-cptpp-2705306",
    },
    {
        title: "Congress Passes Bill Addressing China's Theft of Intellectual Property",
        publishedAt: 1533161538,
        uri: "/us/congress-passes-bill-addressing-chinas-theft-of-intellectual-property-2612067",
    },
    {
        title: "Three Taiwan Science Parks Joint Overseas Invest-in-Taiwan Conference",
        publishedAt: 1536554333,
        uri: "/us/three-taiwan-science-parks-joint-overseas-invest-in-taiwan-conference-2656440",
    },
    {
        title: "US Got China Wrong, But Trump Is Turning Things Around, Expert Says",
        publishedAt: 1538343488,
        uri: "/article/us-got-china-wrong-but-trump-is-turning-things-around-expert-says-2674985",
    },
    {
        title: "In High-Level Talks, US Presses China to Halt Militarization of South China Sea",
        publishedAt: 1541796464,
        uri: "/china/in-high-level-talks-us-presses-china-to-halt-militarization-of-south-china-sea-2712572",
    },
    {
        title: "Democrats Deny True Threat of China Over Their Obsession With Russia",
        publishedAt: 1562699564,
        uri: "/opinion/democrats-deny-true-threat-of-china-over-their-obsession-with-russia-2995380",
    },
    {
        title: "In 5G Play, Vodafone and IBM Link up Cloud Systems for Business",
        publishedAt: 1547794557,
        uri: "/article/in-5g-play-vodafone-and-ibm-link-up-cloud-systems-for-business-2769978",
    },
    {
        title: "Spread of China's State-Controlled Internet Model Raises Concerns",
        publishedAt: 1549481447,
        uri: "/china/think-tank-raises-concerns-about-china-exporting-its-state-controlled-internet-model-2792233",
    },
    {
        title: "'Front Page of the Internet' Receives Censorship Giant's Investment",
        publishedAt: 1549833193,
        uri: "/china/front-page-of-the-internet-receives-censorship-giants-investment-2795779",
    },
    { title: "Huawei’s 5G Patent Race", publishedAt: 1548966797, uri: "/china/huaweis-5g-patent-race-2782903" },
    {
        title: "China's Big Brother Social Control Goes to Australia",
        publishedAt: 1556484403,
        uri: "/opinion/chinas-big-brother-social-control-goes-to-australia-2898104",
    },
    {
        title: "US May Lose Ground to China in 5G Race, Experts Warn",
        publishedAt: 1542584237,
        uri: "/us/us-may-lose-ground-to-china-in-5g-race-warn-experts-2718739",
    },
    {
        title: "Challenges From Legal and Illegal Immigration",
        publishedAt: 1556330831,
        uri: "/opinion/challenges-from-legal-and-illegal-immigration-2896589",
    },
    {
        title: "The Recent 'Sonic Attacks' Are a Glimpse at Cyber's Impact on Warfare",
        publishedAt: 1531084742,
        uri: "/opinion/the-recent-sonic-attacks-are-a-glimpse-at-cybers-impact-on-warfare-2586449",
    },
    {
        title: "Vietnam Protests New Platform Built by Beijing in South China Sea",
        publishedAt: 1542896367,
        uri: "/china/vietnam-protests-new-building-by-beijing-in-south-china-sea-2721855",
    },
    {
        title: "South Korea, Japan Take Up Measures to Shield Semiconductor Industries From China IP Theft",
        publishedAt: 1558380403,
        uri: "/china/south-korea-and-japan-take-up-measures-to-protect-semiconductor-industries-against-china-ip-theft-2929756",
    },
    {
        title: "Anders Corr on Communist China’s Reported $275 Billion Deal with Apple and the Road to Global Tyranny",
        publishedAt: 1640302734,
        uri: "/epochtv/anders-corr-on-communist-chinas-reported-275-billion-deal-with-apple-and-the-road-to-global-tyranny-4175550",
    },
    {
        title: "U.S. Lawmakers Ask Google If It Will Rejoin Chinese Market",
        publishedAt: 1536873176,
        uri: "/us/u-s-lawmakers-ask-google-if-it-will-rejoin-chinese-market-2660756",
    },
    {
        title: "Taiwan's Ministry of Science and Technology Holds Conference on Expansion of Science Parks",
        publishedAt: 1536416290,
        uri: "/us/taiwans-ministry-of-science-and-technology-holds-conference-on-expansion-of-science-parks-2655223",
    },
    {
        title: "US Pension Money Flows Into Blacklisted Chinese Companies",
        publishedAt: 1571240321,
        uri: "/us/us-pension-money-flows-into-blacklisted-chinese-companies-3118044",
    },
    {
        title: "Australia's Defence Minister Christopher Pyne Announces Official Visit to China",
        publishedAt: 1548134313,
        uri: "/world/australias-defence-minister-christopher-pyne-announces-official-visit-to-china-2774319",
    },
    {
        title: "Why China Is Using a Boy Band to Promote Orwellian Surveillance",
        publishedAt: 1557864441,
        uri: "/china/why-china-is-using-a-boy-band-to-promote-orwellian-surveillance-2923692",
    },
    {
        title: "Samsung BioLogics' Listing Under Review After Regulator Says It Breached Accounting Rules",
        publishedAt: 1542224760,
        uri: "/article/samsung-biologics-listing-under-review-after-regulator-says-it-breached-accounting-rules-2715825",
    },
    {
        title: "French Startup Uses Drones and 3D Images to Reconstruct War-torn Heritage Sites",
        publishedAt: 1540675473,
        uri: "/bright/french-startup-uses-drones-and-3d-images-to-reconstruct-war-torn-heritage-sites-2695522",
    },
    {
        title: "Google Employees Push to Stop Project Dragonfly",
        publishedAt: 1543341694,
        uri: "/china/google-employees-push-to-stop-project-dragonfly-2724865",
    },
    {
        title: "China Bars Millions From Travel for 'Social Credit' Offenses",
        publishedAt: 1550849278,
        uri: "/bright/china-bars-millions-from-travel-for-social-credit-offenses-2811584",
    },
    {
        title: "House to Modernize But More Transparency Not on the Agenda",
        publishedAt: 1552955052,
        uri: "/us/house-to-modernize-but-more-transparency-not-on-the-agenda-2843652",
    },
    {
        title: "Foxconn Plans to Move Production out of China Due to Client Security Fears",
        publishedAt: 1552945590,
        uri: "/china/foxconn-plans-to-move-production-out-of-china-due-to-client-security-fears-2842993",
    },
    {
        title: "Google Employees Demand Oversight of China Censored Search Engine Plan",
        publishedAt: 1534454230,
        uri: "/china/google-employees-demand-oversight-of-china-censored-search-engine-plan-2626093",
    },
    {
        title: "UK Court Calls Facebook and Others 'Digital Gangsters'",
        publishedAt: 1550518957,
        uri: "/world/uk-court-calls-facebook-and-others-digital-gangsters-2805563",
    },
    {
        title: "Australia Police Share Footage of Glowing Light During Thunderstorm",
        publishedAt: 1550509664,
        uri: "/science/australia-police-share-footage-of-glowing-light-during-thunderstorm-2805597",
    },
    {
        title: "China Building on New Reef in South China Sea, Think Tank Says",
        publishedAt: 1542815172,
        uri: "/china/china-building-on-new-reef-in-south-china-sea-think-tank-says-2720862",
    },
    {
        title: "Peephole Cameras in Hotels Become Problem in China’s Surveillance State",
        publishedAt: 1547575834,
        uri: "/china/peephole-cameras-in-hotels-become-problem-in-chinas-surveillance-state-2767295",
    },
    {
        title: "China Exports its Restrictive Internet Policies to Dozens of Countries: Report",
        publishedAt: 1541082304,
        uri: "/china/china-exports-its-restrictive-internet-policies-to-dozens-of-countries-report-2704545",
    },
    {
        title: "China Suspends Tariff Hike on US Cars, Parts Amid Trade Ceasefire",
        publishedAt: 1544945748,
        uri: "/china/china-suspends-tariff-hike-on-us-cars-parts-amid-trade-ceasefire-2740153",
    },
    {
        title: "Spygate Indictments Coming, Says Former Intelligence Operative Tony Shaffer",
        publishedAt: 1565880339,
        uri: "/epochtv/spygate-indictments-coming-says-former-intelligence-operative-tony-shaffer-3043536",
    },
    {
        title: "Trump Administration May Blacklist Chinese Video Surveillance Firm Hikvision: Report",
        publishedAt: 1558545691,
        uri: "/china/trump-administration-considers-blacklisting-chinese-video-surveillance-firm-report-2932377",
    },
    {
        title: "Pentagon Looks to Exoskeletons to Build 'Super-Soldiers'",
        publishedAt: 1543574357,
        uri: "/us/pentagon-looks-to-exoskeletons-to-build-super-soldiers-2727601",
    },
    {
        title: "Construction Machine Makers Brace for Weaker China Sales as Economy Slows",
        publishedAt: 1543503758,
        uri: "/china/construction-machine-makers-brace-for-weaker-china-sales-as-economy-slows-2726837",
    },
    {
        title: "China Missile Tests in South China Sea Highlights Beijing's Ambitions in Region",
        publishedAt: 1562192671,
        uri: "/china/china-missile-tests-in-south-china-sea-highlights-beijings-ambitions-in-region-2988927",
    },
    {
        title: "Trump Says Google Is Committed to US Not Chinese Military",
        publishedAt: 1553732542,
        uri: "/article/trump-says-google-is-committed-to-us-not-chinese-military-2856459",
    },
    {
        title: "Trump Admin Improved American Manufacturing, More to Be Done on Industrial Policy and China, Expert Says",
        publishedAt: 1577378790,
        uri: "/article/america-first-policy-expert-hails-trump-on-trade-calls-for-more-action-on-industrial-policy-and-china-3183842",
    },
    {
        title: "Amid US–China Trade Tensions, US Tech Giants Turn to Taiwan for Investment",
        publishedAt: 1523457878,
        uri: "/china/amid-us-china-trade-tensions-us-tech-giants-turn-to-taiwan-for-investment-2490687",
    },
    {
        title: "Japanese Mobile Operator NTT Docomo Rejects Huawei for 5G Network",
        publishedAt: 1551385834,
        uri: "/china/japanese-mobile-operator-ntt-docomo-rejects-huawei-for-5g-network-2819586",
    },
    {
        title: "US Capital Is Incubating Beijing’s Autocracy-Serving Tech Firms",
        publishedAt: 1561751762,
        uri: "/china/u-s-capital-is-incubating-beijings-autocracy-serving-tech-firms-2982669",
    },
    {
        title: "US Considers Tightening Grip on China Ties to Corporate America",
        publishedAt: 1524842194,
        uri: "/china/u-s-considers-tightening-grip-on-china-ties-to-corporate-america-2507072",
    },
    {
        title: "The World Champion Chess Prodigy Who Made Hottest Ever Japan IPO",
        publishedAt: 1534470092,
        uri: "/article/the-world-champion-chess-prodigy-who-made-hottest-ever-japan-ipo-2624945",
    },
    {
        title: "Missing Juvenile Girl Rescued From Being Trafficked to Chicago by an Alert Officer",
        publishedAt: 1555529123,
        uri: "/us/missing-juvenile-girl-rescued-from-being-trafficked-to-chicago-by-an-alert-officer-2884011",
    },
    {
        title: "Huawei's US Research Arm Said to Be Building Separate Identity",
        publishedAt: 1561403225,
        uri: "/china/huaweis-us-research-arm-builds-separate-identity-2975898",
    },
    {
        title: "China Gets US Tariff Delay but Movement on Tech Unclear",
        publishedAt: 1543863231,
        uri: "/china/china-gets-us-tariff-delay-but-movement-on-tech-unclear-2729484",
    },
    {
        title: "CEO of Chinese Search Engine Baidu Nominated for Top Engineering Honor; Netizens Oppose",
        publishedAt: 1557258282,
        uri: "/china/netizens-oppose-ceo-of-chinese-search-engine-baidu-getting-top-engineering-honor-2909351",
    },
    {
        title: "L'Oreal Adds to Facebook Sales Push With Virtual Make-Up Tests",
        publishedAt: 1533913635,
        uri: "/entertainment/loreal-adds-to-facebook-sales-push-with-virtual-make-up-tests-2-2620704",
    },
    {
        title: "6-Year-Old Boy Busted for Cheating on Homework With Alexa, Video Suggests",
        publishedAt: 1546016751,
        uri: "/us/6-year-old-boy-busted-for-cheating-on-homework-with-alexa-video-suggests-2750769",
    },
    {
        title: "Japan's Osaka to Host 2025 World Expo, Beating Russian City",
        publishedAt: 1543005374,
        uri: "/world/japans-osaka-to-host-2025-world-expo-beating-russian-city-2722717",
    },
    {
        title: "Beijing Adds New Subsidies to Boost Domestic Chipmaking, Ignoring US Trade Talk Demands",
        publishedAt: 1558637454,
        uri: "/china/beijing-launches-new-subsidies-to-boost-domestic-ic-sector-ignoring-us-trade-talk-demands-2934144",
    },
    {
        title: "China Chip Industry Insiders Voice Caution on Catch-Up Efforts",
        publishedAt: 1560516774,
        uri: "/china/china-chip-industry-insiders-voice-caution-on-catch-up-efforts-2962301",
    },
    {
        title: "How the Snow Globe Was Invented",
        publishedAt: 1558501322,
        uri: "/bright/how-the-snow-globe-was-invented-2923476",
    },
    {
        title: "For Businesses, Mastering Competition Rests on Change and Adaptation",
        publishedAt: 1531774695,
        uri: "/opinion/for-businesses-mastering-competition-rests-on-change-and-adaptation-2593579",
    },
    {
        title: "Using Technology to Separate Fact From Fiction in Online Media",
        publishedAt: 1548581758,
        uri: "/opinion/using-technology-to-separate-fact-from-fiction-in-online-media-2777696",
    },
    {
        title: "Trump Signs $717 Billion Military Funding Bill",
        publishedAt: 1534202186,
        uri: "/article/trump-signs-717-billion-military-funding-bill-2622730",
    },
    {
        title: "Shanghai Airport Unveils Facial Recognition Tech, Raises Privacy Concerns",
        publishedAt: 1539715078,
        uri: "/china/shanghai-airport-unveils-facial-recognition-tech-raises-privacy-concerns-2691214",
    },
    {
        title: "Adecco Chief Calls for Life-Long Learning to Dodge Jobs 'Time Bomb'",
        publishedAt: 1542318771,
        uri: "/article/adecco-chief-calls-for-life-long-learning-to-dodge-jobs-time-bomb-2716868",
    },
    {
        title: "Using FaceApp to Make You Look Old May Be Fun, but Experts Warn About Security Concerns",
        publishedAt: 1563577807,
        uri: "/life-tradition/using-faceapp-to-make-you-look-old-may-be-fun-but-experts-warn-about-security-concerns-3007028",
    },
    {
        title: "China Set to Scrap 'Made in China 2025' Policy as Trade Talks With US Progress",
        publishedAt: 1544651712,
        uri: "/china/china-set-to-scrap-made-in-china-2025-policy-as-trade-talks-with-us-progress-2737081",
    },
    {
        title: "With Indo-Pacific Competition Growing, Time for a Reset of Canada’s Relationship with India",
        publishedAt: 1559702563,
        uri: "/opinion/with-indo-pacific-competition-growing-time-for-a-reset-of-canadas-relationship-with-india-2947957",
    },
    {
        title: "Online Firms to Risk EU Fine If Extremist Posts Linger",
        publishedAt: 1536776760,
        uri: "/tech/online-firms-to-risk-eu-fine-if-extremist-posts-linger-2659190",
    },
    {
        title: "L'Oreal Adds to Facebook Sales Push With Virtual Make-Up Tests",
        publishedAt: 1533853641,
        uri: "/world/loreal-adds-to-facebook-sales-push-with-virtual-make-up-tests-2620419",
    },
    {
        title: "China Exports Weaken Ahead of US Trade Talks",
        publishedAt: 1544453578,
        uri: "/china/china-exports-weaken-ahead-of-us-trade-talks-2734616",
    },
    {
        title: "US, China to Relaunch Talks With Little Changed Since Deal Fell Apart",
        publishedAt: 1562684522,
        uri: "/china/us-china-to-relaunch-talks-with-little-changed-since-deal-fell-apart-2995203",
    },
    {
        title: "China Seeks to Snap Up Technology, Build Middle East Influence Through Israel Relations",
        publishedAt: 1541530873,
        uri: "/china/china-seeks-to-snap-up-technology-build-middle-east-influence-through-israel-relations-2709377",
    },
    {
        title: "Online Sex-Trafficking Demand Drops After Backpage Takedown, Trump Admin Policies: Report",
        publishedAt: 1555021739,
        uri: "/article/online-sex-trafficking-demand-drops-after-backpage-takedown-trump-admin-policies-report-2875865",
    },
    {
        title: "GM President Ammann Will Take Over Cruise Self-Driving Car Unit",
        publishedAt: 1543531392,
        uri: "/article/gm-president-ammann-will-take-over-cruise-self-driving-car-unit-2727163",
    },
    {
        title: "China Has Built Intelligence Hub in Disputed Area of South China Sea, According to Think Tank",
        publishedAt: 1519079290,
        uri: "/china/china-has-built-intelligence-hub-in-disputed-area-of-south-china-sea-according-to-think-tank-2445464",
    },
    {
        title: "New US Justice Department Initiative to Tackle China's Misconduct Goes Beyond Espionage",
        publishedAt: 1541192113,
        uri: "/china/new-us-justice-department-initiative-to-tackle-chinas-misconduct-goes-beyond-espionage-2706973",
    },
    {
        title: "Justice Dept. Meeting With State Officials Focuses on Data Privacy",
        publishedAt: 1537911794,
        uri: "/us/justice-dept-meeting-with-state-officials-focuses-on-data-privacy-2671110",
    },
    {
        title: "Directed-Energy Weapons Prioritized in New Defense Budget",
        publishedAt: 1530658879,
        uri: "/us/directed-energy-weapons-are-prioritized-in-defense-budget-2582859",
    },
    {
        title: "Facebook Debuts Smart Speaker for Messenger Video Calls",
        publishedAt: 1539034743,
        uri: "/article/facebook-debuts-smart-speaker-for-messenger-video-calls-2683795",
    },
    {
        title: "China Recruits Top Students to Train Them Into AI Weapons Experts",
        publishedAt: 1542051978,
        uri: "/china/china-recruits-top-students-to-train-them-into-ai-weapons-experts-2714104",
    },
    {
        title: "Amazon Rolls Out Machines That Pack Orders And Replace Jobs",
        publishedAt: 1557781578,
        uri: "/article/amazon-rolls-out-machines-that-pack-orders-and-replace-jobs-2921769",
    },
    {
        title: "Man Indicted for Snapchat Shooting Threat That Panicked Ohio School",
        publishedAt: 1551720367,
        uri: "/us/man-indicted-for-snapchat-shooting-threat-that-panicked-ohio-school-2823845",
    },
    {
        title: "China Transplant Expert Disinvited From Israel Conference Over Suspected Link to Forced Organ Harvesting",
        publishedAt: 1542574542,
        uri: "/china/transplant-expert-suspected-of-forced-organ-harvesting-in-china-barred-from-israel-conference-2718645",
    },
    {
        title: "Jeffrey Tucker: How the US Adopted CCP-Inspired COVID-19 Control Policies, a Timeline",
        publishedAt: 1651954354,
        uri: "/epochtv/jeffrey-tucker-how-the-us-adopted-ccp-inspired-covid-19-control-policies-a-timeline-4440770",
    },
    {
        title: "Robot Hand Learns Real World Moves in Virtual Training",
        publishedAt: 1532984768,
        uri: "/tech/robot-hand-learns-real-world-moves-in-virtual-training-2608774",
    },
    {
        title: "Ex-Defense Official Blasts Google for Dropping Pentagon’s AI Project While Helping China’s",
        publishedAt: 1530040585,
        uri: "/us/ex-defense-official-blasts-google-for-dropping-pentagons-ai-project-while-helping-chinas-2574823",
    },
    {
        title: "Germany's Poorer East Embraces Tech Revolution",
        publishedAt: 1557209790,
        uri: "/world/germanys-poorer-east-embraces-tech-revolution-2907638",
    },
    {
        title: "US Needs More Tools to Counter China on IP Transfers, Congress Told",
        publishedAt: 1538084516,
        uri: "/us/us-needs-more-tools-to-counter-china-congress-told-2673182",
    },
    {
        title: "SoftBank Upping Bet on Loss-Making WeWork With Possible Majority Stake: Source",
        publishedAt: 1539308828,
        uri: "/article/softbank-upping-bet-on-loss-making-wework-with-possible-majority-stake-source-2686145",
    },
    {
        title: "US Disinvites China From International Naval Exercise In Response to South China Sea Aggression",
        publishedAt: 1527101352,
        uri: "/china/us-disinvites-china-from-international-naval-exercise-in-response-to-south-china-sea-aggression-2535152",
    },
    {
        title: "Chinese Leader Xi Jinping Calls Upon State Media to Expand Its Reach",
        publishedAt: 1548630633,
        uri: "/china/chinese-leader-xi-jinping-calls-upon-state-media-to-expand-its-reach-2781008",
    },
    {
        title: "Xi Jinping and the Paradox Of Power",
        publishedAt: 1563907497,
        uri: "/opinion/xi-jinping-and-the-paradox-of-power-3013573",
    },
    {
        title: "Chinese 'Gait Recognition' Tech IDs People",
        publishedAt: 1541524835,
        uri: "/china/chinese-gait-recognition-tech-ids-people-2709332",
    },
    {
        title: "Cristina Kirchner Is Argentinian Peak Insanity",
        publishedAt: 1558404078,
        uri: "/opinion/cristina-kirchner-is-argentinian-peak-insanity-2930294",
    },
    {
        title: "Kenyan IT Official Calls for Probe Into Huawei and ZTE",
        publishedAt: 1545936505,
        uri: "/world/kenyan-it-official-calls-for-probe-into-huawei-and-zte-2749876",
    },
    {
        title: "JD.com CEO, Under Investigation for Rape Allegation, Skips China Forum",
        publishedAt: 1537218238,
        uri: "/china/jd-com-ceo-under-investigation-for-rape-allegation-skips-china-forum-2663565",
    },
    {
        title: "Taiwan, South Korea Face Challenges From China’s Talent-Recruitment Agenda",
        publishedAt: 1539646627,
        uri: "/china/taiwan-south-korea-face-challenges-from-chinas-talent-recruitment-agenda-2689983",
    },
    {
        title: "New Artificial Intelligence Computer Chips Mimic the Brain",
        publishedAt: 1314759311,
        uri: "/article/new-artificial-intelligence-computer-chips-mimic-the-brain-1494474",
    },
    {
        title: "Trump Predicts Talks With China, Russia on Arms Spending Cuts",
        publishedAt: 1543877677,
        uri: "/article/trump-predicts-us-china-russia-talks-on-arms-spending-cuts-2729696",
    },
    {
        title: "Bureaucracies, Debt Threaten Europe’s Future",
        publishedAt: 1536590964,
        uri: "/opinion/bureaucracies-debt-threaten-europes-future-2656207",
    },
    {
        title: "Israel Grows Wary of China Investments",
        publishedAt: 1539820226,
        uri: "/world/israel-grows-wary-of-china-investments-2692773",
    },
    {
        title: "Pentagon Working on Radical New Fighting Style: Mosaic Warfare",
        publishedAt: 1579957059,
        uri: "/us/pentagon-working-on-radical-new-fighting-style-mosaic-warfare-3210312",
    },
    {
        title: "Innovation Improving in Canada but Urgency of Necessity Lacking",
        publishedAt: 1526565785,
        uri: "/article/innovation-improving-in-canada-but-urgency-of-necessity-lacking-2527321",
    },
    {
        title: "The Chipmakers' Bumper Year",
        publishedAt: 1509655395,
        uri: "/article/the-chipmakers-bumper-year-2-2344199",
    },
    {
        title: "Facebook Says No One Flagged NZ Mosque Shooting Livestream",
        publishedAt: 1553029553,
        uri: "/world/facebook-says-no-one-flagged-nz-mosque-shooting-livestream-2844774",
    },
    {
        title: "Nvidia forecast lags Wall Street as crypto demand evaporates",
        publishedAt: 1534731191,
        uri: "/article/nvidia-forecast-lags-wall-street-as-crypto-demand-evaporates-2-2627841",
    },
    {
        title: "How Communist China Subverts Institutions and Freedoms in the West: Canadian MP Garnett Genuis",
        publishedAt: 1601953996,
        uri: "/epochtv/how-communist-china-subverts-institutions-and-freedoms-in-the-west-canadian-mp-garnett-genuis-3527564",
    },
    {
        title: "Viral Killer Drones Video Gives Humanity a Dire Look at the Misuse of AI",
        publishedAt: 1511364942,
        uri: "/tech/viral-killer-drones-video-gives-humanity-a-dire-look-at-the-misuse-of-ai-2363739",
    },
    {
        title: "Australian Navy Spots Chinese Spy Ship Docking Near Largest Warship",
        publishedAt: 1528739726,
        uri: "/world/australian-navy-spots-chinese-spy-ship-docking-near-largest-warship-2557769",
    },
    {
        title: "Scientists Say AI Could 'Get Power' Over Humans",
        publishedAt: 1510414797,
        uri: "/science/scientists-say-ai-could-get-power-over-humans-2355073",
    },
    {
        title: "Frank Gaffney: How China’s Communist Party Is Exploiting American Pension Funds and the Coronavirus Outbreak",
        publishedAt: 1589304957,
        uri: "/epochtv/frank-gaffney-how-chinas-communist-party-is-exploiting-american-pension-funds-and-the-coronavirus-outbreak-3348102",
    },
    {
        title: "Online Clothing Retailers Hunt for Better Fit to Cut Costly Returns",
        publishedAt: 1545712029,
        uri: "/article/online-clothing-retailers-hunt-for-better-fit-to-cut-costly-returns-2747684",
    },
    {
        title: "Facebook Kills AI That Made Its Own Language: Here Are 5 Times AI Got Creepy",
        publishedAt: 1501521611,
        uri: "/article/facebook-kills-ai-that-made-its-own-language-here-are-5-times-ai-got-creepy-2274969",
    },
    {
        title: "Facebook 'Labels' Posts by Hand, Posing Privacy Questions",
        publishedAt: 1557158349,
        uri: "/tech/facebook-labels-posts-by-hand-posing-privacy-questions-2908784",
    },
    {
        title: "A Bit Creepy: A Machine-Created Lullaby Wants to Put You to Sleep Faster Than a Human",
        publishedAt: 1511912940,
        uri: "/tech/a-bit-creepy-a-machine-created-lullaby-wants-to-put-you-to-sleep-faster-than-a-human-2367831",
    },
    {
        title: "Automation, Innovation, and the Arrogance of the Elite",
        publishedAt: 1523054425,
        uri: "/opinion/automation-innovation-and-the-arrogance-of-the-elite-2480953",
    },
    {
        title: "Chinese Smartphone App Suspected of Monitoring Personal Conversations",
        publishedAt: 1515424562,
        uri: "/china/chinese-smartphone-app-suspected-of-monitoring-personal-conversations-2407515",
    },
    {
        title: "Clyde Prestowitz: How Communist China Entrapped America’s Elite, from Washington to Wall Street",
        publishedAt: 1631660671,
        uri: "/epochtv/clyde-prestowitz-how-communist-china-entrapped-americas-elite-from-washington-to-wall-street-3997818",
    },
    { title: "China’s New World Order", publishedAt: 1556302445, uri: "/opinion/chinas-new-world-order-2895934" },
    {
        title: "Cal Newport: On Attention in an Age of Digital Distraction",
        publishedAt: 1571934868,
        uri: "/health/cal-newport-on-attention-in-an-age-of-digital-distraction-3105482",
    },
    {
        title: "The Great Flood and What It Tells Us",
        publishedAt: 1571848106,
        uri: "/bright/the-great-flood-and-what-it-tells-us-3121405",
    },
    {
        title: "China’s 'Made in China 2025' Continues Apace",
        publishedAt: 1555960287,
        uri: "/opinion/chinas-made-in-china-2025-continues-apace-2889900",
    },
    {
        title: "Film Review: 'Alita: Battle Angel': Top-Notch Action, Kung Fu, Love, and Hope",
        publishedAt: 1549326989,
        uri: "/bright/film-review-alita-battle-angel-top-notch-action-kung-fu-love-and-hope-2788338",
    },
    {
        title: "Nvidia Forecast Lags Wall Street as Crypto Demand Evaporates",
        publishedAt: 1534538261,
        uri: "/article/nvidia-forecast-lags-wall-street-as-crypto-demand-evaporates-2626890",
    },
    {
        title: "Communist China Using George Floyd Protests for Propaganda: K.T. McFarland",
        publishedAt: 1591287611,
        uri: "/epochtv/communist-china-using-george-floyd-protests-for-propaganda-k-t-mcfarland-3376910",
    },
    {
        title: "Black Hawk Down: Army Puts Faith in Next Generation Aircraft 'Leap'",
        publishedAt: 1576688829,
        uri: "/us/black-hawk-down-army-puts-faith-in-next-generation-aircraft-leap-3171744",
    },
    {
        title: "When Technology Meets Tyranny",
        publishedAt: 1542515294,
        uri: "/opinion/when-technology-meets-tyranny-2718255",
    },
    {
        title: "Is the Crypto Rebound for Real?",
        publishedAt: 1555263921,
        uri: "/opinion/is-the-crypto-rebound-for-real-2879301",
    },
    {
        title: "Pentagon Sees China as 'Growing Risk' to US Defense Industry",
        publishedAt: 1538747782,
        uri: "/china/pentagon-sees-china-as-growing-risk-to-us-defense-industry-2679942",
    },
    {
        title: "China Sets Up 'Think Tank Alliance' to Help It Battle US in Trade War",
        publishedAt: 1531965650,
        uri: "/china/china-sets-up-think-tank-alliance-to-help-it-battle-us-in-trade-war-2595500",
    },
    {
        title: "Secret Documents Reveal How China's Mass Detention Camps Work",
        publishedAt: 1574625819,
        uri: "/china/secret-documents-reveal-how-china-mass-detention-camps-work-3155621",
    },
    {
        title: "London Police Test Facial-Recognition Technology",
        publishedAt: 1545082652,
        uri: "/world/london-police-trial-facial-recognition-cameras-2741266",
    },
    {
        title: "Politicians and Heads of Industry Meet at Secretive Bilderberg Conference in Italy",
        publishedAt: 1528303732,
        uri: "/world/politicians-and-heads-of-industry-meet-at-secretive-bilderberg-conference-in-italy-2551721",
    },
    {
        title: "Trump Administration Unveils 'Offensive' and 'Deterrent' National Cyber Strategy",
        publishedAt: 1538014089,
        uri: "/us/trump-administration-unveils-offensive-and-deterrent-national-cyber-strategy-2672308",
    },
    {
        title: "Suicide Detection Pilot Project May Fall Short on Results, Say Experts",
        publishedAt: 1515673301,
        uri: "/world/suicide-detection-pilot-project-may-fall-short-on-results-say-experts-2410269",
    },
    {
        title: "Tencent’s Reddit Play a Strategic Move for Chinese Regime",
        publishedAt: 1550451847,
        uri: "/china/tencents-reddit-play-a-strategic-move-for-chinese-regime-2804790",
    },
    {
        title: "Seizing on Huawei's Troubles, Samsung Bets Big on Network Gear",
        publishedAt: 1550250027,
        uri: "/article/seizing-on-huaweis-troubles-samsung-bets-big-on-network-gear-2802638",
    },
    {
        title: "US Congressional Report Highlights Beijing’s Failed Attempts to Address Foreign Investment Concerns",
        publishedAt: 1557250703,
        uri: "/china/us-congressional-report-highlights-beijings-failed-attempts-to-address-foreign-investment-concerns-2910455",
    },
    {
        title: "What Should the Fed Do in 2019?",
        publishedAt: 1553700091,
        uri: "/opinion/what-should-the-fed-do-in-2019-2855538",
    },
    {
        title: "[WCS Special] With Failures of Engagement, Trump Offers New Policy on China—Frank Gaffney",
        publishedAt: 1563500661,
        uri: "/epochtv/with-failures-of-engagement-trump-offers-new-policy-on-china-frank-gaffney-wcs-special-3017374",
    },
    {
        title: "Another Utopian Vision: 'Fully Automated Luxury Communism'",
        publishedAt: 1560958922,
        uri: "/opinion/another-utopian-vision-fully-automated-luxury-communism-2962279",
    },
    {
        title: "Space Tech May Bring 2nd Silicon Revolution, With Implications for Security and Business",
        publishedAt: 1532292732,
        uri: "/us/space-tech-may-bring-second-silicon-revolution-with-implications-for-security-and-business-2600538",
    },
    {
        title: "Report: Hopes That Guided US–China Policy Have Proven ‘Futile’",
        publishedAt: 1542318428,
        uri: "/us/report-hopes-that-guided-us-china-policy-proven-futile-2716979",
    },
    {
        title: "Pentagon Boosts Secret AI Program to Find Hidden Nuclear Missiles",
        publishedAt: 1528232884,
        uri: "/us/pentagon-boosts-secret-ai-program-to-find-hidden-nuclear-missiles-2550866",
    },
    {
        title: "Nury Turkel: How the Chinese Communist Party Turned My Homeland Into the World’s Largest Open-Air Prison",
        publishedAt: 1652394561,
        uri: "/epochtv/nury-turkel-how-the-chinese-communist-party-turned-my-homeland-into-the-worlds-largest-open-air-prison-4462349",
    },
    {
        title: "Trump’s Indo-Pacific Vision Aims to Contain ‘Authoritarian Revisionist Powers:’ State Department",
        publishedAt: 1573818850,
        uri: "/world/trumps-indo-pacific-vision-aims-to-contain-authoritarian-revisionist-powers-state-department-3141913",
    },
    {
        title: "US Considering Export Curbs in 'Emerging' Tech Fields That China Is Aggressively Developing",
        publishedAt: 1542769307,
        uri: "/china/us-considering-export-curbs-in-emerging-tech-fields-that-china-is-aggressively-developing-2720420",
    },
    {
        title: "Myanmar Hardline Monks Vow to Stay on Facebook Despite Ban",
        publishedAt: 1528570499,
        uri: "/world/myanmar-hardline-monks-vow-to-stay-on-facebook-despite-ban-2556427",
    },
    {
        title: "The Blockchain Revolution Quietly Continues",
        publishedAt: 1547001365,
        uri: "/opinion/the-blockchain-revolution-quietly-continues-2761046",
    },
    {
        title: "The 5G Cold War Heats Up",
        publishedAt: 1551979184,
        uri: "/opinion/the-5g-cold-war-heats-up-2828578",
    },
    {
        title: "Chinese Bitcoin Mining Rig Makers Aim to Raise Billions in HK IPOs",
        publishedAt: 1535402204,
        uri: "/tech/chinese-bitcoin-mining-rig-makers-aim-to-raise-billions-in-hk-ipos-2634350",
    },
    {
        title: "Spain’s Largest Phone Company Tries to Treat Alcoholism, Body Disorders",
        publishedAt: 1539715857,
        uri: "/health/spains-largest-phone-company-tries-to-treat-alcoholism-body-disorders-2691247",
    },
    {
        title: "Accounts of Persecution Told at US Ministerial",
        publishedAt: 1532726332,
        uri: "/us/accounts-of-persecution-told-at-us-ministerial-2605818",
    },
    {
        title: "US Must Protect Itself in Cyber War With China",
        publishedAt: 1540250262,
        uri: "/opinion/us-must-protect-itself-against-china-cyber-war-2695206",
    },
    {
        title: "Understanding 'RYAN,' One of the Key Concepts of Military Development",
        publishedAt: 1536875284,
        uri: "/opinion/understanding-ryan-one-of-the-key-concepts-of-military-development-2627941",
    },
    {
        title: "Mark Zuckerberg Doesn't Understand AI, Says Tech Business Magnate",
        publishedAt: 1500999963,
        uri: "/article/mark-zuckerberg-doesnt-understand-ai-says-tech-business-magnate-2272649",
    },
    {
        title: "France to Bolster Anti-Takeover Measures Amid Foreign Investment Boom",
        publishedAt: 1532018060,
        uri: "/world/france-to-bolster-anti-takeover-measures-amid-foreign-investment-boom-2596425",
    },
    {
        title: "China's New Strategy for Tech Domination: China Standards 2035",
        publishedAt: 1541040712,
        uri: "/china/chinas-new-strategy-for-tech-domination-china-standards-2035-2705000",
    },
    {
        title: "Watch: NASA Pit Its AI Drone Against a Human Pro",
        publishedAt: 1511901845,
        uri: "/science/watch-nasa-pit-its-ai-drone-against-a-human-pro-2367837",
    },
    {
        title: "EU Reaches Consensus on Investment-Screening Rules Amid Concern About China",
        publishedAt: 1542834080,
        uri: "/china/eu-reaches-consensus-on-investment-screening-rules-amid-concern-about-china-2721039",
    },
    {
        title: "Outgunned, Outranged US Army Hurries to Forge Long-Range Weapons",
        publishedAt: 1576159544,
        uri: "/us/u-s-army-continues-rapid-modernization-of-long-range-weapons-3169235",
    },
    {
        title: "One Canadian and Two Americans Charged With Stealing Military Technology for China",
        publishedAt: 1517259117,
        uri: "/china/one-canadian-and-two-americans-charged-with-stealing-military-technology-for-china-2427270",
    },
    {
        title: "SoftBank's Massive $100 Billion Vision Fund Throws Its Weight Around",
        publishedAt: 1504214549,
        uri: "/article/softbanks-massive-100-billion-vision-fund-throws-its-weight-around-2-2286817",
    },
    {
        title: "US Government Report Reveals Business Sectors Under Siege From Chinese Cyber Espionage",
        publishedAt: 1533201244,
        uri: "/china/us-government-report-reveals-business-sectors-under-siege-from-chinese-cyber-espionage-2611097",
    },
    {
        title: "US Report Identifies Emerging Military Threats From China",
        publishedAt: 1545344130,
        uri: "/china/us-report-identifies-emerging-military-threats-from-china-2744541",
    },
    {
        title: "Rise of the Machines: Philippine Outsourcing Industry Braces for AI",
        publishedAt: 1510231328,
        uri: "/world/rise-of-the-machines-philippine-outsourcing-industry-braces-for-ai-2353346",
    },
    {
        title: "World War III 'Most Likely' Over AI, Not North Korea: SpaceX, Tesla CEO",
        publishedAt: 1504628099,
        uri: "/article/world-war-iii-most-likely-over-ai-not-north-korea-spacex-tesla-ceo-2291924",
    },
    {
        title: "Sleek New SUVs Dominate Reveals at New York Auto Show",
        publishedAt: 1555572917,
        uri: "/us/sleek-new-suvs-dominate-reveals-at-new-york-auto-show-2885049",
    },
    {
        title: "Saudi Arabia Grants Citizenship to Humanoid AI-powered Robot",
        publishedAt: 1509141097,
        uri: "/tech/saudi-arabia-grants-citizenship-to-humanoid-ai-powered-robot-2343970",
    },
    {
        title: "China Puts Off Licenses for US Companies Amid Tariff Battle",
        publishedAt: 1536704897,
        uri: "/china/china-puts-off-licenses-for-us-companies-amid-tariff-battle-2658443",
    },
    {
        title: "China’s Big Plans to Rule the World",
        publishedAt: 1551813480,
        uri: "/opinion/chinas-big-plans-to-rule-the-world-2825600",
    },
    {
        title: "Facebook AI Incident Feels Like 'The Terminator', Expert Says",
        publishedAt: 1501600908,
        uri: "/article/facebook-ai-incident-feels-like-the-terminator-expert-says-2275428",
    },
    {
        title: "Self-Driving Uber Kills Pedestrian in Phoenix—First Reported AV Fatality",
        publishedAt: 1521484675,
        uri: "/us/self-driving-uber-kills-pedestrian-in-phoenix-first-reported-av-fatality-2469716",
    },
    {
        title: "Amazon Eyes Chilean Skies as It Seeks to Datamine the Stars",
        publishedAt: 1536124110,
        uri: "/tech/amazon-eyes-chilean-skies-as-it-seeks-to-datamine-the-stars-2640801",
    },
    {
        title: "Inside Communist China’s War on Faith—USCIRF Commissioner Nury Turkel, Born in a Chinese Re-Education Camp",
        publishedAt: 1620169209,
        uri: "/epochtv/inside-communist-chinas-war-on-faith-uscirf-commissioner-nury-turkel-born-in-a-chinese-re-education-camp-3802499",
    },
    {
        title: "Vladimir Putin Warns of Genetically Engineered Super Soldiers ‘Worse Than a Nuclear Bomb’",
        publishedAt: 1508771910,
        uri: "/world/vladimir-putin-warns-of-genetically-engineered-super-soldiers-worse-than-a-nuclear-bomb-2339195",
    },
    {
        title: "Google 'Go' Computer Outsmarts Previous Tech—Without Human Input",
        publishedAt: 1508518609,
        uri: "/tech/google-go-computer-outsmarts-previous-tech-without-human-input-2337795",
    },
    {
        title: "Robert Epstein: How Big Tech Bias Threatens Free and Fair Elections",
        publishedAt: 1568279385,
        uri: "/opinion/robert-epstein-how-big-tech-bias-threatens-free-and-fair-elections-3077681",
    },
    {
        title: "Facebook Shut Down AI That Developed Its Own Language: Is This What Experts Have Warned About?",
        publishedAt: 1501539820,
        uri: "/article/facebook-shuts-ai-that-develops-own-language-is-this-what-experts-have-warned-about-2275223",
    },
    {
        title: "A Bold Vision for Mars and the Moon Will Yield Big Technology Advancements",
        publishedAt: 1541510975,
        uri: "/opinion/a-bold-vision-for-mars-and-the-moon-will-yield-big-technology-advancements-and-critical-public-and-private-partnerships-if-successful-2708653",
    },
    {
        title: "In China, an Arms Race for Cutting-Edge Surveillance Technology",
        publishedAt: 1527709836,
        uri: "/china/in-china-an-arms-race-for-cutting-edge-surveillance-technology-2543753",
    },
    {
        title: "Awan Family Had Access to Emails of 59 House Democrats",
        publishedAt: 1528666295,
        uri: "/us/awan-family-had-access-to-emails-of-59-house-democrats-2557062",
    },
    {
        title: "China Actively Targeting Critical Infrastructure in US; Railcar Manufacturers on List",
        publishedAt: 1534103353,
        uri: "/china/china-actively-targeting-critical-infrastructure-in-the-us-rail-car-manufacturers-on-list-2621975",
    },
    {
        title: "Google Stealthily Infuses Political Agenda Into Products to Prevent Trump Reelection, Insiders, Documents Say",
        publishedAt: 1561413347,
        uri: "/us/google-stealthily-infuses-political-agenda-into-products-to-prevent-trump-reelection-insiders-documents-say-2976582",
    },
    {
        title: "Huawei and the Creation of China’s Orwellian Surveillance State",
        publishedAt: 1545689957,
        uri: "/china/huawei-and-the-creation-of-chinas-orwellian-surveillance-state-2747922",
    },
    {
        title: "US Aircraft Carrier Arrives in Vietnam on Landmark Visit",
        publishedAt: 1520247658,
        uri: "/us/us-aircraft-carrier-arrives-in-vietnam-on-landmark-visit-2457666",
    },
    {
        title: "Protecting Space with a Bold Cybersecurity Portfolio and Strategy",
        publishedAt: 1547836115,
        uri: "/opinion/protecting-space-with-a-bold-cyber-security-portfolio-and-strategy-2766583",
    },
    {
        title: "US Capital Is the Lifeline of the Chinese Communist Party: Roger Robinson Interview",
        publishedAt: 1576442604,
        uri: "/article/the-u-s-capital-is-the-lifeline-of-the-chinese-communist-party-roger-robinson-interview-3172994",
    },
    {
        title: "Stop the Handwringing About Withdrawal From Syria",
        publishedAt: 1548370994,
        uri: "/opinion/stop-the-handwringing-about-withdrawal-from-syria-2766569",
    },
    {
        title: "Amid Fears of Big Brother Surveillance State, China Announces Ambition to Become Leader in AI Tech",
        publishedAt: 1512502524,
        uri: "/china/amid-fears-of-big-brother-surveillance-state-china-announces-ambition-to-become-leader-in-ai-tech-2379333",
    },
    {
        title: "Experts Examine Modernizing NAFTA, Serving the Human Element",
        publishedAt: 1528327406,
        uri: "/article/experts-examine-modernizing-nafta-serving-the-human-element-2552759",
    },
    {
        title: "Google Claims It Can Predict Heart Disease Through People’s Eyes",
        publishedAt: 1519163059,
        uri: "/us/google-claims-it-can-predict-heart-disease-through-peoples-eyes-2446517",
    },
    {
        title: "Why YouTube's Most Popular Channel on China Politics Doesn't Show in Search Suggestions",
        publishedAt: 1538435956,
        uri: "/us/youtube-scraped-most-popular-channel-on-china-politics-from-search-suggestions-2675796",
    },
    {
        title: "Chinese Regime Escalates Efforts to Cover Countryside With Surveillance Cameras",
        publishedAt: 1529952231,
        uri: "/china/chinese-regime-escalates-efforts-to-cover-countryside-with-surveillance-cameras-2573351",
    },
    {
        title: "Gordon Chang: On the Hong Kong Security Law, the India China Standoff, and Banning TikTok",
        publishedAt: 1594515481,
        uri: "/epochtv/gordon-chang-on-the-hong-kong-security-law-the-india-china-standoff-and-banning-tiktok-3421044",
    },
    {
        title: "Amazon Hands Goodwill to eBay With Move to Shut Australians out of Overseas Sites",
        publishedAt: 1531987154,
        uri: "/world/amazon-hands-goodwill-to-ebay-with-move-to-shut-australians-out-of-overseas-sites-2596248",
    },
    {
        title: "The Fragile Chinese Empire",
        publishedAt: 1543539005,
        uri: "/china/the-fragile-chinese-empire-2726623",
    },
    {
        title: "Zimbabwe Can't Escape Demagoguery",
        publishedAt: 1533763753,
        uri: "/opinion/zimbabwe-cant-escape-demagogery-2619284",
    },
    {
        title: "The Growing Cartel of Big Government, Big Media, and Big Tech—Rachel Bovard",
        publishedAt: 1619556921,
        uri: "/epochtv/the-growing-cartel-of-big-government-big-media-and-big-tech-rachel-bovard-3792970",
    },
    {
        title: "Pentagon Racing to Create New Weapon That Can Deter China, Says Official",
        publishedAt: 1524169498,
        uri: "/us/pentagon-races-to-create-new-weapon-that-can-deter-china-says-official-2499181",
    },
    {
        title: "Chinese Student Sentenced for Photographing US Military Base, Raising Questions About His Military Ties",
        publishedAt: 1549569807,
        uri: "/china/chinese-student-sentenced-for-photographing-us-military-base-raising-questions-about-his-military-ties-2793708",
    },
    {
        title: "NASA Finds New Planet in Far off Solar System as Large as Ours",
        publishedAt: 1513291857,
        uri: "/us/nasa-finds-new-planet-in-far-off-solar-system-as-large-as-ours-2387869",
    },
    {
        title: "Decoupling the US Capital Market from China, Now or Never?",
        publishedAt: 1572569009,
        uri: "/article/decoupling-the-u-s-capital-market-from-china-its-now-or-never-3134182",
    },
    {
        title: "Technology at the Heart of US–China Trade Dispute",
        publishedAt: 1525824895,
        uri: "/opinion/technology-at-the-heart-of-u-s-china-trade-dispute-2516577",
    },
    {
        title: "San Francisco's War on Airbnb Is a War on the Free Market",
        publishedAt: 1542169626,
        uri: "/opinion/san-franciscos-war-on-airbnb-is-a-war-on-the-free-market-2715403",
    },
    {
        title: "World AI Experts: Time Is Running Out to Avert Robotic Warfare Disaster",
        publishedAt: 1503346261,
        uri: "/article/world-ai-experts-time-is-running-out-to-avert-robotic-warfare-disaster-2284366",
    },
    { title: "Big Tech Versus Freedom", publishedAt: 1547499207, uri: "/opinion/big-tech-vs-freedom-2766496" },
    {
        title: "China's Latest IP Theft Distraction: Letting Foreign Companies Win Copyright Lawsuits",
        publishedAt: 1543898681,
        uri: "/china/chinas-latest-ip-theft-distraction-letting-foreign-companies-win-copyright-lawsuits-2729693",
    },
    {
        title: "Alibaba Founder Jack Ma Announces Resignation as Beijing Clamps Down on Private Firms",
        publishedAt: 1536616377,
        uri: "/china/alibaba-founder-jack-ma-announces-resignation-as-beijing-clamps-down-on-private-firms-2656985",
    },
    {
        title: "GE CEO’s Make-or-Break Overhaul Took Shape on a Ski Vacation",
        publishedAt: 1530195817,
        uri: "/us/ge-ceos-make-or-break-overhaul-took-shape-on-a-ski-vacation-2576219",
    },
    {
        title: "Former Presidential Campaign Adviser Andrew Puzder on the US–China Trade Relationship",
        publishedAt: 1525635508,
        uri: "/china/former-presidential-campaign-advisor-andrew-puzder-on-the-us-china-trade-relationship-2515444",
    },
    {
        title: "Congressional Scrutiny Reveals Social Media Platforms Vulnerable to Foreign Influence",
        publishedAt: 1509714758,
        uri: "/us/congressional-scrutiny-reveals-social-media-platforms-vulnerable-to-foreign-influence-2348706",
    },
    {
        title: "British Official Urges Social Media Companies to Block Terrorist Content",
        publishedAt: 1510288693,
        uri: "/world/british-official-urges-social-media-companies-to-block-terrorist-content-2354162",
    },
    {
        title: "Republicans Must Stay Focused and Broaden Their Base, as Prospective Democratic Presidential Hopefuls Gather",
        publishedAt: 1549576074,
        uri: "/opinion/as-prospective-democratic-presidential-hopefuls-continue-to-line-up-republicans-must-stay-focused-and-broaden-their-base-2791450",
    },
    {
        title: "US–China Trade War to Hurt Chinese Economy",
        publishedAt: 1529854869,
        uri: "/article/us-china-trade-war-to-hurt-chinese-economy-2569796",
    },
    {
        title: "Technology Advancements Are Double-Edged Sword for China",
        publishedAt: 1535741062,
        uri: "/china/for-china-tech-advancement-is-a-double-edged-sword-2638278",
    },
    {
        title: "Housing Shortages Are Self-Made, Unnecessary",
        publishedAt: 1549077734,
        uri: "/opinion/housing-shortages-are-self-made-and-unnecessary-2787839",
    },
    {
        title: "An Update From the Trenches: Where Are We With Cloud Computing and Its Deployment?",
        publishedAt: 1548782935,
        uri: "/opinion/an-update-from-the-trenches-where-are-we-with-cloud-computing-and-its-deployment-2780103",
    },
    {
        title: "Pence Says China Is Meddling in US Democracy, and US Won't Back Down",
        publishedAt: 1538691970,
        uri: "/us/pence-china-is-meddling-in-us-democracy-and-us-wont-back-down-2679446",
    },
    {
        title: "Takeover of Portuguese Utility Firm Latest Power Grab by China",
        publishedAt: 1526657962,
        uri: "/china/takeover-of-portuguese-utility-firm-latest-power-grab-by-china-2-2522333",
    },
    {
        title: "High School in China Installs Facial Recognition Cameras to Monitor Students’ Attentiveness",
        publishedAt: 1526494098,
        uri: "/china/high-school-in-china-installs-facial-recognition-cameras-to-monitor-students-attentiveness-2526662",
    },
    {
        title: "What Can Be Done About Our Modern-Day Frankensteins?",
        publishedAt: 1515346550,
        uri: "/bright/what-can-be-done-about-our-modern-day-frankensteins-2403585",
    },
    {
        title: "Sen. Cruz Grills Google Over China Censorship Plans, Political Bias",
        publishedAt: 1538081604,
        uri: "/article/sen-ted-cruz-grills-google-over-china-censorship-plans-political-bias-2672968",
    },
    {
        title: "Chinese Scholars Denied Visas as US Administration Seeks to Curb Tech Transfer",
        publishedAt: 1532366736,
        uri: "/china/chinese-scholars-denied-visas-as-us-administration-seeks-to-curb-tech-transfer-2601423",
    },
    {
        title: "In Memory of the Tiananmen Square Massacre",
        publishedAt: 1558919769,
        uri: "/opinion/in-memory-of-the-tiananmen-square-massacre-2933327",
    },
    {
        title: "Big Pharma Turns to AI to Speed Drug Discovery, GSK Signs Deal",
        publishedAt: 1498994708,
        uri: "/article/big-pharma-turns-to-ai-to-speed-drug-discovery-gsk-signs-deal-2263823",
    },
    {
        title: "China Reports 'Positive' Progress Made in Trade Talks With US",
        publishedAt: 1528040515,
        uri: "/china/us-china-trade-talks-gain-positive-momentum-2547652",
    },
    {
        title: "Gingrich Says US Needs 'Grand Strategy for China' That Fosters Freedom",
        publishedAt: 1572121717,
        uri: "/epochtv/newt-gingrich-us-needs-a-grand-strategy-for-china-that-fosters-freedom-3128544",
    },
    {
        title: "Legal Tech Starting to Disrupt Stubborn Industry in Canada",
        publishedAt: 1537390434,
        uri: "/article/legal-tech-starting-to-disrupt-stubborn-industry-2665952",
    },
    {
        title: "Following in US Footsteps, Germany Targets Chinese Investments",
        publishedAt: 1533684833,
        uri: "/china/following-in-us-footsteps-germany-targets-chinese-investments-2618318",
    },
    {
        title: "South Korean Weaponized Drones Unit Will Be a 'Game Changer'",
        publishedAt: 1512628034,
        uri: "/world/south-korean-weaponized-drones-unit-will-be-a-game-changer-2381028",
    },
    {
        title: "An Assessment of China’s Ground-Force Weapons at 12th Zhuhai Airshow",
        publishedAt: 1543192700,
        uri: "/china/an-assessment-of-chinas-ground-force-weapons-at-12th-zhuhai-airshow-2717600",
    },
    {
        title: "Rep. Warren Davidson: Is COVID Stimulus a Double-Edged Sword?",
        publishedAt: 1604069525,
        uri: "/epochtv/rep-warren-davidson-is-covid-stimulus-a-double-edged-sword-3558867",
    },
    {
        title: "Chinese Regime Enables Huawei's Overseas Expansion Through One Belt, One Road Initiative",
        publishedAt: 1547997175,
        uri: "/china/chinese-regime-enables-huaweis-overseas-expansion-through-one-belt-one-road-initiative-2772282",
    },
    {
        title: "With Sonic Weapon Attack, China Demonstrates Experimental Program",
        publishedAt: 1527522831,
        uri: "/china/with-sonic-weapon-attack-china-demonstrates-experimental-program-2539742",
    },
    {
        title: "An Assessment of China's Experimental Aircraft and UAVs at the 12th Zhuhai Airshow",
        publishedAt: 1542039320,
        uri: "/china/an-assessment-of-chinas-experimental-aircraft-and-uavs-at-the-12th-zhuhai-airshow-2713868",
    },
    {
        title: "Facebook Shut Down AI After It Invented Its Own Language",
        publishedAt: 1501354915,
        uri: "/article/facebook-shut-down-ai-after-it-invented-its-own-language-2274480",
    },
    {
        title: "Are Smartphone User Agreements and Harmful Technology Legal? Part 1",
        publishedAt: 1541639901,
        uri: "/opinion/are-smartphone-user-agreements-and-harmful-technology-legal-part-1-2707805",
    },
    {
        title: "Why Trump Will Win the US–China Trade War—Stephen Moore",
        publishedAt: 1558293586,
        uri: "/epochtv/why-trump-will-win-the-us-china-trade-war-stephen-moore-2928107",
    },
    {
        title: "Poor Diplomatic Relations With Russia Putting Millions of Lives at Risk, Says Trump",
        publishedAt: 1510429825,
        uri: "/us/fake-collusion-narrative-putting-millions-of-lives-at-risk-says-president-trump-2355150",
    },
    {
        title: "On the Chinese Communist Party’s Tactics for Stealing Western Military Technologies: Part 1 of 2",
        publishedAt: 1520710332,
        uri: "/china/on-the-chinese-communist-partys-tactics-for-stealing-western-military-technologies-part-1-of-2-2461615",
    },
    {
        title: "Video: 83 Global Brands Tied to Forced Labor in China—Benedict Rogers",
        publishedAt: 1610587555,
        uri: "/epochtv/video-83-global-brands-tied-to-forced-labor-in-china-benedict-rogers-3656081",
    },
    {
        title: "Canada an ‘Attractive Place’ for Tech, Says Entrepreneur",
        publishedAt: 1525790605,
        uri: "/article/canada-an-attractive-place-for-tech-says-entrepreneur-2516853",
    },
    {
        title: "Buick: A Modern Renaissance Story",
        publishedAt: 1514590819,
        uri: "/life-tradition/buick-a-modern-renaissance-story-2394498",
    },
    {
        title: "Shielded by Technology, Child Sex Abuse Epidemic Festers on Darknet",
        publishedAt: 1536178116,
        uri: "/world/shielded-by-technology-child-sex-abuse-epidemic-festers-on-darknet-2641611",
    },
    {
        title: "Chinese Ride-Hailing App Didi Chuxing to Test out Driverless Cars in California Amid Scandal and Tough Competition at Home",
        publishedAt: 1526347462,
        uri: "/china/chinese-ride-hailing-app-didi-chuxing-to-test-out-driverless-cars-in-california-amid-scandal-and-tough-competition-at-home-2524376",
    },
    {
        title: "K. T. McFarland on the Communist China Threat & the Unique Workings of Trump Foreign Policy [CPAC 2020]",
        publishedAt: 1583775044,
        uri: "/epochtv/k-t-mcfarland-on-the-communist-china-threat-the-unique-workings-of-trump-foreign-policy-cpac-2020-3265533",
    },
    {
        title: "The Chinese Regime's 'Social Credit' Dystopia",
        publishedAt: 1521763991,
        uri: "/china/the-chinese-regimes-social-credit-dystopia-2473100",
    },
    {
        title: "Bank of Canada Warns Workforce Automation Could Intensify Income Inequality",
        publishedAt: 1492565311,
        uri: "/article/bank-of-canada-warns-workforce-automation-could-intensify-income-inequality-2243624",
    },
    {
        title: "Apollo and the Making of Poetry",
        publishedAt: 1548800955,
        uri: "/bright/apollo-and-the-making-of-poetry-2776708",
    },
    {
        title: "UK Hospital's Data Deal With Google's Deepmind a 'Cautionary Tale'",
        publishedAt: 1490275091,
        uri: "/article/uk-hospitals-data-deal-with-googles-deepmind-a-cautionary-tale-2235288",
    },
    {
        title: "Cybersecurity Firms Underwhelm Despite Increased Investor Interest",
        publishedAt: 1506132957,
        uri: "/article/cybersecurity-firms-underwhelm-despite-increased-investor-interest-2-2298290",
    },
    {
        title: "China's Strategy Against Trump, America: Trade War, Huawei, 5G—Gen. Robert Spalding",
        publishedAt: 1559598623,
        uri: "/epochtv/chinas-strategy-against-trump-and-america-trade-war-huawei-5g-gen-robert-spalding-2949446",
    },
    {
        title: "Fixing America’s Education Crisis—K12's Kevin Chavous",
        publishedAt: 1555009937,
        uri: "/epochtv/fixing-americas-education-crisis-kevin-chavous-2876286",
    },
    {
        title: "Stephen Hawking Wonders Why People Sit All Day",
        publishedAt: 1480702437,
        uri: "/article/stephen-hawking-wonders-why-people-sit-all-day-2193425",
    },
    {
        title: "Why Canada Struggles to Attract Foreign Investment",
        publishedAt: 1522883493,
        uri: "/article/why-canada-struggles-to-attract-foreign-investment-2485135",
    },
    {
        title: "Human Skills, Digital Literacy Critical to Surviving Workforce Automation",
        publishedAt: 1522329402,
        uri: "/article/human-skills-digital-literacy-critical-to-surviving-workforce-automation-2479004",
    },
    {
        title: "Forecasters Adjust After Trump Election Broke the Rules",
        publishedAt: 1535504453,
        uri: "/article/election-forecasters-adjust-after-trump-election-broke-the-rules-2635666",
    },
    {
        title: "Japan's Abe Highlights ‘Free and Open Indo-Pacific’ Strategy to Counter Beijing",
        publishedAt: 1538348347,
        uri: "/china/japans-abe-highlights-free-and-open-indo-pacific-strategy-to-counter-beijing-2674832",
    },
    {
        title: "Apple Announces Big, Mysterious Sept. 12 Event",
        publishedAt: 1504209023,
        uri: "/article/apple-announces-big-mysterious-event-on-september-12-2289804",
    },
    {
        title: "Trump Hits China With Tariffs and Investment Restrictions",
        publishedAt: 1521740187,
        uri: "/us/trump-hits-china-with-tariffs-and-investment-restrictions-2472774",
    },
    {
        title: "How the Digitalization of Everything Is Making Us More Lonely",
        publishedAt: 1519560037,
        uri: "/health/how-the-digitalization-of-everything-is-making-us-more-lonely-2438989",
    },
    {
        title: "Venture Capital Slowdown Hits Silicon Valley",
        publishedAt: 1484850210,
        uri: "/article/venture-capital-slowdown-hits-silicon-valley-2-2211186",
    },
    {
        title: "Life of Raffaello Da Urbino, Painter and Architect",
        publishedAt: 1650300090,
        uri: "/bright/life-of-raffaello-da-urbino-painter-and-architect-4410890",
    },
    {
        title: "Mike Davis on Reining in Big Tech With Existing Law and How Trump Got 220 Judges Confirmed",
        publishedAt: 1604349777,
        uri: "/epochtv/mike-davis-on-reigning-in-big-tech-with-existing-law-and-how-trump-got-220-judges-confirmed-3562302",
    },
    {
        title: "Future of Jobs: The Battle Between Man and Machine",
        publishedAt: 1491491756,
        uri: "/article/future-of-jobs-the-battle-between-man-and-machine-2-2239023",
    },
    {
        title: "Chinese Regime Laying Siege to Global Screen-Making Industry",
        publishedAt: 1530523756,
        uri: "/china/chinese-regime-laying-siege-to-global-screen-making-industry-2580463",
    },
    {
        title: "The Cure for the Opioid Epidemic",
        publishedAt: 1538528240,
        uri: "/opinion/the-cure-for-the-opioid-epidemic-2677169",
    },
    {
        title: "Chinese Regime Building Orwellian Nightmare",
        publishedAt: 1510071187,
        uri: "/china/chinese-regime-building-orwellian-nightmare-2351383",
    },
    {
        title: "Canada in Brief, May 11-17",
        publishedAt: 1494467087,
        uri: "/article/canada-in-brief-may-11-17-2249071",
    },
    {
        title: "OPINION: Trump Fights Back in Industrial Warfare",
        publishedAt: 1520955533,
        uri: "/article/opinion-trump-fights-back-in-industrial-warfare-2464421",
    },
    {
        title: "USCIRF’s Tony Perkins: On China’s Surveillance State and Threats to Freedom of Religion Globally",
        publishedAt: 1588122763,
        uri: "/epochtv/uscirfs-tony-perkins-on-chinas-surveillance-state-and-threats-to-freedom-of-religion-globally-3331160",
    },
    {
        title: "Exclusive: Victor Davis Hanson on the Assault on Meritocracy, Politicization of the Virus, and the ‘Platonic Noble Lie’",
        publishedAt: 1624748965,
        uri: "/epochtv/exclusive-victor-davis-hanson-on-the-assault-on-meritocracy-politicization-of-the-virus-and-the-platonic-noble-lie-3875843",
    },
    {
        title: "Partnership Between Academic Publisher and Chinese Internet Giant Raises Questions on Academic Freedom",
        publishedAt: 1513885765,
        uri: "/china/partnership-between-german-based-academic-publisher-and-chinese-internet-giant-raises-questions-about-academic-freedom-2393471",
    },
    {
        title: "Australia Says It Will Stand up to China’s Challenges, While Calling for Stronger US Support",
        publishedAt: 1512017401,
        uri: "/world/australia-says-it-will-stand-up-to-chinas-challenges-while-calling-for-stronger-us-support-2369915",
    },
    {
        title: "Trudeau to Focus on Economic Agenda in 2018",
        publishedAt: 1513826529,
        uri: "/world/trudeau-to-focus-on-economic-agenda-in-2018-2392244",
    },
    {
        title: "Coming Later Today: Apple's Next Big Software Improvements",
        publishedAt: 1465803141,
        uri: "/article/coming-later-today-apples-next-big-software-improvements-2090196",
    },
    {
        title: "Fintech Thriving on Its Wide-Ranging Applicability",
        publishedAt: 1510170931,
        uri: "/article/fintech-thriving-on-its-wide-ranging-applicability-2352863",
    },
    {
        title: "'Crown' Tattoos Have an Unexpected Meaning",
        publishedAt: 1492525230,
        uri: "/tech/crown-tattoos-have-unexpected-meaning-2356721",
    },
    {
        title: "Elon Musk Worries AI Will Mean Humans End Up 'Like the House Cat'",
        publishedAt: 1464892263,
        uri: "/article/elon-musk-worries-ai-will-mean-humans-end-up-like-the-house-cat-2081750",
    },
    {
        title: "Curtis Ellis on China Sanctions, Hong Kong Media Mogul Jimmy Lai's Arrest, and the TikTok Ban",
        publishedAt: 1597326341,
        uri: "/epochtv/curtis-ellis-on-china-sanctions-hong-kong-media-mogul-jimmy-lais-arrest-and-the-tiktok-ban-3460346",
    },
    {
        title: "Gordon Chang: On the Hong Kong Protests, Chinese Economy, Trade War, & Trump’s New Tariffs",
        publishedAt: 1565113391,
        uri: "/epochtv/gordon-chang-on-hong-kong-protest-chinese-economy-trade-war-trumps-new-tariffs-3031966",
    },
    {
        title: "Mattis Warns Congress of Pending Threats to US Military, Urges Increase",
        publishedAt: 1497389592,
        uri: "/article/mattis-warns-congress-of-pending-threats-to-us-military-urges-increase-2257365",
    },
    {
        title: "In the China–US Trade War, How Much Will China Lose?",
        publishedAt: 1522690092,
        uri: "/china/he-qinglian-in-the-china-u-s-trade-war-how-much-wool-will-china-be-cut-2482492",
    },
    {
        title: "Google Gets Aggressive With New Phones, Other Gadgets",
        publishedAt: 1475606830,
        uri: "/article/google-gets-aggressive-with-new-phones-other-gadgets-2166763",
    },
    {
        title: "Rolls-Royce's New Driverless Car is Expectedly Breathtaking (Video)",
        publishedAt: 1466199937,
        uri: "/article/rolls-royces-new-driverless-car-is-expectedly-breathtaking-video-2094713",
    },
    {
        title: "Baidu Faces Headwinds as Regulatory, Competitor Pressures Mount",
        publishedAt: 1473019207,
        uri: "/article/baidu-faces-headwinds-as-regulatory-competitor-pressures-mount-2150135",
    },
    {
        title: "Chapter Eighteen, Part II: The Chinese Communist Party’s Global Ambitions (UPDATED)",
        publishedAt: 1527925328,
        uri: "/article/chapter-eighteen-the-chinese-communist-partys-global-ambitions-part-ii-2822429",
    },
    {
        title: "China Poaches Talent and Research From Abroad to Fuel High Tech Ambitions",
        publishedAt: 1513372993,
        uri: "/china/china-uses-love-of-the-motherland-and-plenty-of-cash-to-recruit-tech-talent-from-abroad-2388814",
    },
    {
        title: "America's Best Chain Restaurants Are at Risk of Becoming History",
        publishedAt: 1503003488,
        uri: "/article/americas-best-chain-restaurants-are-at-risk-of-becoming-history-2280989",
    },
    {
        title: "No Better Time to Be an Entrepreneur",
        publishedAt: 1496269855,
        uri: "/article/no-better-time-to-be-an-entrepreneur-2253940",
    },
    {
        title: "Ford Names James Hackett CEO to Shake up Operations",
        publishedAt: 1495478670,
        uri: "/article/ford-names-james-hackett-ceo-to-shake-up-operations-2251779",
    },
    {
        title: "How to Tell the World You've Discovered an Alien Civilisation",
        publishedAt: 1464278113,
        uri: "/article/how-to-tell-the-world-youve-discovered-an-alien-civilisation-2076103",
    },
    {
        title: "Video: Man Hacks Amazon's Alexa So It Can Drive His Tesla",
        publishedAt: 1462551304,
        uri: "/article/video-man-hacks-amazons-alexa-so-it-can-drive-his-tesla-2058130",
    },
    {
        title: "Russia Says US Infighting on Sessions Hampers Mending Ties",
        publishedAt: 1488572904,
        uri: "/article/russia-says-us-infighting-on-sessions-hampers-mending-ties-2229317",
    },
    {
        title: "US–China Trade War: ’Trump Is Not Going to Back Down,' 'This Is a War of Values’: Curtis Ellis",
        publishedAt: 1557958610,
        uri: "/epochtv/us-china-trade-war-trump-is-not-going-to-back-down-this-is-a-war-of-values-curtis-ellis-2925116",
    },
    {
        title: "Baritone Darren Chase: Classics Provide Endless Inspiration",
        publishedAt: 1495131510,
        uri: "/bright/baritone-darren-chase-classics-provide-endless-inspiration-2243950",
    },
    {
        title: "Jordan Peterson: Collectivism Is Tyranny Under the Guise of Benevolence",
        publishedAt: 1498663992,
        uri: "/opinion/jordan-peterson-explains-that-collectivism-is-tyranny-under-the-guise-of-benevolence-2261879",
    },
    {
        title: "Go World Champion Finally Beats Google AI After 3 Straight Losses",
        publishedAt: 1457891510,
        uri: "/article/go-world-champion-finally-beats-google-ai-after-3-straight-losses-1991064",
    },
    {
        title: "How Hedge Funds Use Twitter to Gain an Edge in Trading",
        publishedAt: 1488417018,
        uri: "/article/how-hedge-funds-use-twitter-to-gain-an-edge-in-trading-2227349",
    },
    {
        title: "A.I. Defeats European Go Champion, Chinese Internet Reacts",
        publishedAt: 1454100957,
        uri: "/article/a-i-defeats-european-go-champion-chinese-internet-reacts-1953513",
    },
    {
        title: "Google's Go Victory Shows AI Thinking Can Be Unpredictable, and That's a Concern",
        publishedAt: 1458398583,
        uri: "/article/googles-go-victory-shows-ai-thinking-can-be-unpredictable-and-thats-a-concern-1997818",
    },
    {
        title: "New Technology Could Threaten Human Survival, Says Stephen Hawking",
        publishedAt: 1453254441,
        uri: "/article/new-technology-could-threaten-human-survival-says-stephen-hawking-1945828",
    },
    {
        title: "On the Chinese Communist Party’s Tactics for Stealing Western Military Technologies: Part 2 of 2",
        publishedAt: 1520711019,
        uri: "/china/on-the-chinese-communist-partys-tactics-for-stealing-western-military-technologies-part-2-of-2-2462754",
    },
    {
        title: "Rise of the Humans: Intelligence Amplification Will Make Us as Smart as Machines",
        publishedAt: 1445194012,
        uri: "/article/rise-of-the-humans-intelligence-amplification-will-make-us-as-smart-as-machines-1880045",
    },
    {
        title: "Stephen Hawking: We Need to Start Working on AI Safety Right Now",
        publishedAt: 1444346951,
        uri: "/article/stephen-hawking-we-need-to-start-working-on-ai-safety-right-now-1874412",
    },
    {
        title: "Werner Herzog on His Doc 'Lo and Behold'",
        publishedAt: 1470892801,
        uri: "/article/werner-herzog-on-his-doc-lo-and-behold-2133482",
    },
    {
        title: "Apple Wants to Make the iPhone Smarter Without Compromising Your Privacy",
        publishedAt: 1441730783,
        uri: "/article/apple-wants-to-make-the-iphone-smarter-without-compromising-your-privacy-1747775",
    },
    {
        title: "Do We Need New Laws for Rise of the Robots?",
        publishedAt: 1437040815,
        uri: "/article/do-we-need-new-laws-for-rise-of-the-robots-1464127",
    },
    {
        title: "What Will Human Beings Look Like In 1,000 Years?",
        publishedAt: 1445966969,
        uri: "/article/what-will-human-beings-look-like-in-1000-years-1885910",
    },
    {
        title: "Microsoft's Cortana Assistant Launches on iPhone, Android",
        publishedAt: 1449780180,
        uri: "/article/microsofts-cortana-assistant-iphone-android-1916796",
    },
    {
        title: "Apple Wants a Smarter iPhone Without Touching Your Personal Data",
        publishedAt: 1444134051,
        uri: "/article/apple-wants-a-smarter-iphone-without-touching-your-personal-data-1872650",
    },
    {
        title: "Ford Says It Will Have a Fully Autonomous Car by 2021",
        publishedAt: 1471450560,
        uri: "/article/ford-says-it-will-have-a-fully-autonomous-car-by-2021-2140284",
    },
    {
        title: "'Scorpion' Executive Producer Designs Robot Defense System for Fighting Cyberattacks",
        publishedAt: 1453937945,
        uri: "/article/scorpion-co-producer-designs-robot-defense-system-for-fighting-cyberattacks-1952006",
    },
    {
        title: "Dr. Robert Epstein: How Big Tech’s Algorithms Can Impact Opinions and Votes—and the 2020 Election",
        publishedAt: 1568053304,
        uri: "/epochtv/dr-robert-epstein-how-big-techs-algorithms-can-impact-opinions-and-votes-and-the-2020-election-3074908",
    },
    {
        title: "World Split on How to Regulate 'Killer Robots'",
        publishedAt: 1460997967,
        uri: "/article/world-split-on-how-to-regulate-killer-robots-2027987",
    },
    {
        title: "World's Top Hedge Fund Managers Took Home $13 Billion in 2015",
        publishedAt: 1463512848,
        uri: "/article/worlds-top-hedge-fund-managers-took-home-13-billion-in-2015-2067771",
    },
    {
        title: "The Right Words in a Text Can Calm a Crisis",
        publishedAt: 1470909271,
        uri: "/bright/the-right-words-in-a-text-can-calm-a-crisis-2136112",
    },
    {
        title: "Man's Dream About Robot-Filled Future Spookily Connects With Reality",
        publishedAt: 1461613441,
        uri: "/bright/mans-dream-about-robot-filled-future-spookily-connects-with-reality-2038544",
    },
    {
        title: "Clinton Email Probe Fraught With Political Consequences",
        publishedAt: 1457091720,
        uri: "/article/clinton-email-probe-fraught-with-political-consequences-1983134",
    },
    {
        title: "Are Robots Taking Our Jobs?",
        publishedAt: 1460023205,
        uri: "/article/are-robots-taking-our-jobs-2015857",
    },
    {
        title: "Green Self-Driving Cars Take Center Stage at Tokyo Auto Show",
        publishedAt: 1446035869,
        uri: "/article/green-self-driving-cars-take-center-stage-at-tokyo-auto-show-1886490",
    },
    {
        title: "Facebook Closes In on Google After Strong Fourth Quarter",
        publishedAt: 1453952411,
        uri: "/article/facebook-closes-in-on-google-after-strong-fourth-quarter-1952158",
    },
    {
        title: "Elon Musk, Stephen Hawking, and Others Urge Ban on Killer Robots",
        publishedAt: 1438028413,
        uri: "/article/elon-musk-stephen-hawking-and-others-urge-ban-on-killer-robots-1646413",
    },
    {
        title: "Weeding Out Vaccine Toxins: MMR, Glyphosate, and the Health of a Generation",
        publishedAt: 1504172453,
        uri: "/article/weeding-out-vaccine-toxins-mmr-glyphosate-and-the-health-of-a-generation-2283832",
    },
    {
        title: "Beyond Today's Crowdsourced Science to Tomorrow's Citizen Science Cyborgs",
        publishedAt: 1458246153,
        uri: "/article/beyond-todays-crowdsourced-science-to-tomorrows-citizen-science-cyborgs-1996313",
    },
    {
        title: "The Marketing Corner: Tech Buzz",
        publishedAt: 1460215415,
        uri: "/article/the-marketing-corner-tech-buzz-2018871",
    },
    {
        title: "Would This A.I. Geometry Pro Beat Your S.A.T. Score?",
        publishedAt: 1443002457,
        uri: "/article/would-this-a-i-geometry-pro-beat-your-s-a-t-score-1758071",
    },
    {
        title: "Secrets of Korean Medicine, Part 25: The Game of Go and Mental Health",
        publishedAt: 1460712610,
        uri: "/health/secrets-of-korean-medicine-part-25-the-game-of-go-and-mental-health-2010941",
    },
    {
        title: "Evidence of Ancient Nuclear Explosions on Mars, Says Scientist",
        publishedAt: 1450828969,
        uri: "/article/evidence-of-ancient-nuclear-explosions-on-mars-says-scientist-1924819",
    },
    {
        title: "Watch This GoPro Footage of a SpaceX Rocket Falling Back to Earth",
        publishedAt: 1433625987,
        uri: "/article/watch-this-gopro-footage-of-a-spacex-rocket-falling-back-to-earth-1382789",
    },
    {
        title: "Here We Go Again: Paris Attacks May Renew Encryption Debate",
        publishedAt: 1447715357,
        uri: "/article/here-we-go-again-paris-attacks-may-renew-encryption-debate-1901267",
    },
    {
        title: "How Powerful Is the Human Brain Compared to a Computer?",
        publishedAt: 1456601573,
        uri: "/article/how-powerful-is-the-human-brain-compared-to-a-computer-1977544",
    },
    {
        title: "Seoul: North Korea's 5th Nuke Test 'Fanatic Recklessness'",
        publishedAt: 1473413118,
        uri: "/article/seoul-north-koreas-5th-nuke-test-fanatic-recklessness-2153063",
    },
    {
        title: "Is Stephen Hawking Right? Could AI Lead to the End of Humankind?",
        publishedAt: 1417706080,
        uri: "/article/is-stephen-hawking-right-could-ai-lead-to-the-end-of-humankind-1122312",
    },
    {
        title: "Homunculus: The Alchemical Creation of Little People With Great Powers",
        publishedAt: 1430751786,
        uri: "/article/homunculus-the-alchemical-creation-of-little-people-with-great-powers-1344375",
    },
    {
        title: "5 Reasons Your Food Is Hurting You",
        publishedAt: 1475396099,
        uri: "/health/5-reasons-your-food-is-hurting-you-2165670",
    },
    {
        title: "Is Communication From the Future Already Here?",
        publishedAt: 1452529491,
        uri: "/article/is-communication-from-the-future-already-here-1937687",
    },
    {
        title: "Why We Shouldn't Dismiss Bilderberg Conspiracies so Lightly",
        publishedAt: 1465587953,
        uri: "/article/why-we-shouldnt-dismiss-bilderberg-conspiracies-so-lightly-2089788",
    },
    {
        title: "Introduction: How the Specter of Communism Is Ruling Our World (UPDATED)",
        publishedAt: 1530210188,
        uri: "/article/how-the-specter-of-communism-is-ruling-our-world-introduction-2547882",
    },
    {
        title: "Will We Be Visiting RoboDocs in the Future?",
        publishedAt: 1440962219,
        uri: "/article/will-we-be-visiting-robodocs-in-the-future-1715863",
    },
    {
        title: "This Six-Legged Robot Learns to Limp Like an Animal (Video)",
        publishedAt: 1432854667,
        uri: "/article/this-six-legged-robot-learns-to-limp-like-an-animal-video-1373148",
    },
    {
        title: "China Builds Military Runway on Its Self-Made Spratly Island",
        publishedAt: 1429219840,
        uri: "/article/china-builds-military-runway-on-its-self-made-spratly-island-1323536",
    },
    {
        title: "Obama Seeing China Leader as South China Sea Tensions Rise",
        publishedAt: 1459237088,
        uri: "/article/obama-seeing-china-leader-as-south-china-sea-tensions-rise-2006667",
    },
    {
        title: "Apple's $1B Didi Bet Reveals Its Car, China Ambitions",
        publishedAt: 1463320836,
        uri: "/article/apples-1bn-didi-bet-reveals-its-car-china-ambitions-2066091",
    },
    {
        title: "Not the Western Banks, Stupid!",
        publishedAt: 1467036842,
        uri: "/article/not-the-western-banks-stupid-2101141",
    },
    {
        title: "DJ App Lets You Hear Everyone's Spotify Playlists Together in a Room",
        publishedAt: 1429264839,
        uri: "/article/dj-app-lets-you-hear-everyones-spotify-playlists-together-in-a-room-1323839",
    },
    {
        title: "SETI Detects No Signs of Life From 'Alien Megastructure' Star",
        publishedAt: 1446845361,
        uri: "/article/seti-says-theres-no-signs-of-life-from-alien-megastructure-star-1892691",
    },
    {
        title: "A Professor's Message for the Holidays: Time to Celebrate!",
        publishedAt: 1450894123,
        uri: "/article/a-professors-message-for-the-holidays-time-to-celebrate-1925248",
    },
    {
        title: "Traditional Business Models Won't Survive a Robot Takeover",
        publishedAt: 1459102979,
        uri: "/article/traditional-business-models-wont-survive-a-robot-takeover-2004827",
    },
    {
        title: "What Does It Mean to Think and Could a Machine Ever Do It?",
        publishedAt: 1452186187,
        uri: "/article/what-does-it-mean-to-think-and-could-a-machine-ever-do-it-1935800",
    },
    {
        title: "These Rescue Robots Need Rescuing Themselves (Video)",
        publishedAt: 1433860146,
        uri: "/article/these-would-be-cutting-edge-rescue-robots-can-barely-walk-video-1385518",
    },
    {
        title: "Film Review: 'Ex Machina,' Sex and the Singularity Android",
        publishedAt: 1428587973,
        uri: "/article/film-review-ex-machina-sex-and-the-singularity-android-1314812",
    },
    {
        title: "Could the Language Barrier Actually Fall Within the Next 10 Years?",
        publishedAt: 1459801036,
        uri: "/bright/could-the-language-barrier-actually-fall-within-the-next-10-years-2013163",
    },
    {
        title: "Memorandum to Hillary Clinton and Donald Trump",
        publishedAt: 1462817742,
        uri: "/article/memorandum-to-hillary-clinton-and-donald-trump-2060529",
    },
    {
        title: "They Won a Nobel for What? Why Good Science Communication Counts",
        publishedAt: 1444333247,
        uri: "/article/they-won-a-nobel-for-what-why-good-science-communication-counts-1874367",
    },
    {
        title: "US Employers Hire at Blistering Pace, Defying Global Trends",
        publishedAt: 1452283522,
        uri: "/article/us-employers-hire-at-blistering-pace-defying-global-trends-1936699",
    },
    {
        title: "Chapter Nine, Part I: The Communist Economic Trap (UPDATED)",
        publishedAt: 1529057571,
        uri: "/article/chapter-nine-the-communist-economic-trap-part-i-2596547",
    },
    {
        title: "Wars of the Future Will Be Fought by Robots and Hackers",
        publishedAt: 1438125357,
        uri: "/article/wars-of-the-future-will-be-fought-by-robots-and-hackers-1678032",
    },
    {
        title: "Marc Faber: Dow Could Reach 100,000",
        publishedAt: 1473711402,
        uri: "/article/dr-marc-faber-dow-could-go-to-100000-2153748",
    },
    {
        title: "What Is the DNA of Your Mind?",
        publishedAt: 1416418296,
        uri: "/article/what-is-the-dna-of-your-mind-1090597",
    },
    {
        title: "Scientist at Work: Observing Termite Behaviors, Personalities – and Souls?",
        publishedAt: 1445623326,
        uri: "/article/scientist-at-work-observing-termite-behaviors-personalities-and-souls-1882997",
    },
    {
        title: "China Pushes 'Brave New World' of Genetically Modified Embryos",
        publishedAt: 1429829924,
        uri: "/article/china-pushes-brave-new-world-of-genetically-modified-embryos-1331801",
    },
    {
        title: "2016 Nissan Maxima: Stylish Upscale Family Sedan",
        publishedAt: 1445830388,
        uri: "/article/2016-nissan-maxima-stylish-upscale-family-sedan-1885045",
    },
    {
        title: "Secrets of Korean Medicine, Part 14:  Autoimmune Disease: Conquer the Enemy Within",
        publishedAt: 1454079926,
        uri: "/health/secrets-of-korean-medicine-part-14-autoimmune-disease-conquer-the-enemy-within-1947826",
    },
    {
        title: "What Wal-Mart's and IBM's Troubles Really Tell Us About the US Economy",
        publishedAt: 1445448080,
        uri: "/article/what-walmarts-and-ibms-troubles-really-tell-us-about-the-us-economy-1882070",
    },
    {
        title: "The Lethal Suspects for Microcephaly in Brazil, With Zika Virus at the Bottom of the List",
        publishedAt: 1468749614,
        uri: "/article/the-lethal-suspects-of-microcephaly-in-brazil-with-zika-virus-at-the-bottom-of-the-list-2117149",
    },
    {
        title: "New Computer Learns How to Play Expert-Level Chess in Just 72 Hours",
        publishedAt: 1442359743,
        uri: "/article/new-computer-learns-how-to-play-expert-level-chess-in-just-72-hours-1752411",
    },
    {
        title: "Can Amazon Fix the Problem of Fake Online Reviews?",
        publishedAt: 1434916911,
        uri: "/article/can-amazon-fix-the-problem-of-fake-online-reviews-1399254",
    },
    {
        title: "Theater Review: 'Marjorie Prime'",
        publishedAt: 1451421709,
        uri: "/bright/theater-review-marjorie-prime-1927002",
    },
    {
        title: "The Impact of Technology's Invisible Hand",
        publishedAt: 1477649671,
        uri: "/article/technologys-invisible-hand-5-2176159",
    },
    {
        title: "Your Apple Watch May Soon Be Able to Order Room Service",
        publishedAt: 1430062241,
        uri: "/article/your-apple-watch-may-soon-be-able-to-order-room-service-1334392",
    },
    {
        title: "New Early-Warning System Could Protect Earth From Explosive Space Weather",
        publishedAt: 1448364000,
        uri: "/article/new-early-warning-system-could-protect-earth-from-explosive-space-weather-1905956",
    },
    {
        title: "Job Survival in the Age of Robots and Intelligent Machines",
        publishedAt: 1420407779,
        uri: "/article/job-survival-in-the-age-of-robots-and-intelligent-machines-1177876",
    },
    {
        title: "Computer 'Mines' Facebook to Predict Personality",
        publishedAt: 1421607774,
        uri: "/article/computer-mines-facebook-to-predict-personality-1205653",
    },
    {
        title: "Invisible Boyfriends Dating App Highlights the Failures of AI",
        publishedAt: 1427847641,
        uri: "/article/invisible-boyfriends-dating-app-highlights-the-failures-of-ai-1304748",
    },
    {
        title: "Google Partners With University of Oxford for Future AI Research",
        publishedAt: 1414079923,
        uri: "/article/google-partners-with-university-of-oxford-for-future-ai-research-1036921",
    },
    {
        title: "7 legal issue Self-Driving cars raise",
        publishedAt: 1420571149,
        uri: "/article/7-legal-issue-self-driving-cars-raise-1181319",
    },
    {
        title: "Here's Why Facebook's Profits Dropped 20 Percent in Q1",
        publishedAt: 1429814093,
        uri: "/article/heres-why-facebooks-profits-dropped-20-percent-in-q1-1331572",
    },
    {
        title: "Robots Learn to Use Kitchen Tools by Watching YouTube Videos",
        publishedAt: 1421269725,
        uri: "/article/robots-learn-to-use-kitchen-tools-by-watching-youtube-videos-1197921",
    },
    {
        title: "Deepening Dependency on Technology Raises Risk of Breakdowns",
        publishedAt: 1436437260,
        uri: "/article/deepening-dependency-on-technology-raises-risk-of-breakdowns-1421684",
    },
    {
        title: "China Uncensored: China Considering Orbital Laser to Fight Pollution",
        publishedAt: 1429804185,
        uri: "/article/china-uncensored-china-considering-orbital-laser-to-fight-pollution-1328525",
    },
    {
        title: "China Anti-Corruption Watch: Corrupt General's Death Won't Save Cronies, and 'Sky Net' Is Set to Snare Runaway Officials",
        publishedAt: 1427658686,
        uri: "/article/corrupt-generals-death-wont-save-cronies-and-sky-net-set-1302228",
    },
    {
        title: "Why Organizations of the Future Will Look Like Ant Colonies and Clouds",
        publishedAt: 1434362402,
        uri: "/article/why-organizations-of-the-future-will-look-like-anthills-and-clouds-1387134",
    },
    {
        title: "Iraq's Battle for Ramadi Isn't Just About Defeating Islamic State",
        publishedAt: 1451757489,
        uri: "/article/iraqs-battle-for-ramadi-isnt-just-about-defeating-islamic-state-1931561",
    },
    {
        title: "The Quixotic Quest for the Perfect Weatherman",
        publishedAt: 1448190147,
        uri: "/article/the-quixotic-quest-for-the-perfect-weatherman-1902121",
    },
    { title: "Scientists Against GMOs", publishedAt: 1439389967, uri: "/health/scientists-against-gmos-1715437" },
    {
        title: "Elon Musk Warns of Terminator-Style Robot Apocalypse",
        publishedAt: 1403816555,
        uri: "/article/elon-musk-warns-of-terminator-style-robot-apocalypse-760991",
    },
    {
        title: "Could Google's Self-Driving Cars Kill Uber?",
        publishedAt: 1420494396,
        uri: "/article/could-googles-self-driving-cars-kill-uber-1179683",
    },
    {
        title: "Uber's Next Disruption: Self-Driving Taxis",
        publishedAt: 1472809155,
        uri: "/article/ubers-next-disruption-self-driving-taxis-2-2145747",
    },
    {
        title: "Aliens Caused Nuclear War on Mars, Says Physicist",
        publishedAt: 1417034312,
        uri: "/article/aliens-caused-nuclear-war-on-mars-in-atomic-holocaust-says-physicist-1106360",
    },
    {
        title: "Ada Lovelace and the Role Models Who Guide Women Towards a Life Less Ordinary",
        publishedAt: 1444767475,
        uri: "/bright/ada-lovelace-and-the-role-models-who-guide-women-towards-a-life-less-ordinary-1877196",
    },
    {
        title: "Health Care: The Way Forward",
        publishedAt: 1456004853,
        uri: "/health/health-care-the-way-forward-1970989",
    },
    {
        title: "Can Self-Driving Cars Crash Into Each Other?",
        publishedAt: 1435501102,
        uri: "/article/can-self-driving-crash-into-each-other-1407979",
    },
    {
        title: "From Human Extinction to Super Intelligence, Two Futurists Explain",
        publishedAt: 1400467741,
        uri: "/article/from-human-extinction-to-super-intelligence-two-futurists-explain-682658",
    },
    {
        title: "What You Tweet When You Go Party Can Be Useful for Improving Urban Planning",
        publishedAt: 1420658926,
        uri: "/article/what-you-tweet-when-you-go-party-can-be-useful-for-improving-urban-planning-1183517",
    },
    {
        title: "Why a Novel on War With China Has the Pentagon Talking",
        publishedAt: 1438081244,
        uri: "/article/why-a-novel-on-war-with-china-has-the-pentagon-talking-1648090",
    },
    {
        title: "Software Gauges 'State of Mind' From Selfie Video",
        publishedAt: 1422909462,
        uri: "/health/software-gauges-state-of-mind-from-selfie-video-1236429",
    },
    {
        title: "Comic Con 2015 San Diego: Dates and Locations for All of Next Year's Comic Cons",
        publishedAt: 1406487630,
        uri: "/article/comic-con-2015-san-diego-dates-and-locations-for-all-of-next-years-comic-cons-817489",
    },
    {
        title: "Nepal's Next Challenge: Using Satellite Data to Prevent Landslide Deaths",
        publishedAt: 1430608457,
        uri: "/article/next-challenge-for-nepal-using-satellite-data-to-prevent-landslide-deaths-1342729",
    },
    {
        title: "In the Push for Marketable Skills, Are We Forgetting the Beauty and Poetry of STEM Disciplines?",
        publishedAt: 1440151201,
        uri: "/article/in-the-push-for-marketable-skills-are-we-forgetting-the-beauty-and-poetry-of-stem-disciplines-1726169",
    },
    {
        title: "Forget Killer Robots, It's the Rise of the Cyborgs",
        publishedAt: 1409113549,
        uri: "/article/forget-killer-robots-its-the-rise-of-the-cyborgs-915602",
    },
    {
        title: "Does 'Twitter Moments' Herald the Comeback of Human Beings?",
        publishedAt: 1446199247,
        uri: "/article/does-twitter-moments-herald-the-comeback-of-human-beings-1887641",
    },
    {
        title: "Glyphosate Causing Autism? MIT Researcher Claims Herbicide Will Cause Half of All Children to be Autistic",
        publishedAt: 1420491881,
        uri: "/health/glyphosate-causing-autism-mit-researcher-claims-herbicide-will-cause-half-of-all-children-to-be-autistic-1179553",
    },
    {
        title: "Can Technology Help Workers Eat Healthier?",
        publishedAt: 1465076131,
        uri: "/health/google-nyc-and-food-loves-tech-can-technology-help-workers-eat-healthier-2083061",
    },
    {
        title: "Siri Scarlett Johansson: Siri Says It's Not 'Her'",
        publishedAt: 1389216006,
        uri: "/article/siri-scarlett-johansson-siri-says-its-not-her-438948",
    },
    {
        title: "The Choice: LBJ's Decision to Go to War in Vietnam",
        publishedAt: 1425916843,
        uri: "/article/the-choice-lbjs-decision-to-go-to-war-in-vietnam-1276815",
    },
    {
        title: "Avengers 2 'Age of Ultron' Spoilers: The Vision Gains Avengers' Trust in a 'Shocking Way' (With Ms. Marvel Rumors)",
        publishedAt: 1407279073,
        uri: "/article/avengers-2-age-of-ultron-spoilers-the-vision-gains-avengers-trust-in-shocking-way-ms-marvel-rumors-846926",
    },
    {
        title: "Expert Systems: How Far Can Intelligence Be Automated?",
        publishedAt: 1406395919,
        uri: "/article/expert-systems-how-far-can-intelligence-be-automated-816333",
    },
    {
        title: "Q&A: Director Christopher Nolan on 'Interstellar' Robots",
        publishedAt: 1415239188,
        uri: "/article/qa-director-christopher-nolan-on-interstellar-robots-1083621",
    },
    {
        title: "Why Replacing Teachers With Automated Education Lacks Imagination",
        publishedAt: 1409415025,
        uri: "/article/why-replacing-teachers-with-automated-education-lacks-imagination-924171",
    },
    {
        title: "Computers Using Digital Footprints Are Better Judges of Personality Than Friends and Family",
        publishedAt: 1421110223,
        uri: "/article/computers-using-digital-footprints-are-better-judges-of-personality-than-friends-and-family-1193934",
    },
    {
        title: "Chapter Eighteen, Part I: The Chinese Communist Party’s Global Ambitions (UPDATED)",
        publishedAt: 1528005172,
        uri: "/article/chapter-eighteen-the-chinese-communist-partys-global-ambitions-part-i-2814398",
    },
    {
        title: "‘Transcendence’ an AI Film That Does Not Transcend",
        publishedAt: 1398332705,
        uri: "/article/transcendence-an-ai-film-that-does-not-transcend-637372",
    },
    {
        title: "Scientists Warn the Rise of AI Will Lead to Extinction of Humankind",
        publishedAt: 1397938057,
        uri: "/article/scientists-warn-the-rise-of-ai-will-lead-to-extinction-of-humankind-630445",
    },
    {
        title: "Film Review: 'The Machine' Starring Caity Lotz",
        publishedAt: 1398120892,
        uri: "/article/film-review-the-machine-starring-caity-lotz-634057",
    },
    {
        title: "What Skimming the Declassified US Govn't UFO Files Tells You",
        publishedAt: 1421885862,
        uri: "/article/what-skimming-the-declassified-us-govnt-ufo-files-tells-you-1212545",
    },
    {
        title: "AI Learns to Predict Powerful Solar Flares",
        publishedAt: 1421787727,
        uri: "/article/a-i-learns-to-predict-powerful-solar-flares-1209669",
    },
    {
        title: "7 Headlines You Won’t Read Anywhere Else Today: Dec. 18",
        publishedAt: 1387370706,
        uri: "/article/7-headlines-you-wont-read-anywhere-else-today-dec-18-405232",
    },
    {
        title: "Avengers 2 ‘Age of Ultron’: The Vision Now Has an Actor; Powers Explained",
        publishedAt: 1397879059,
        uri: "/article/avengers-2-age-of-ultron-the-vision-gets-an-actor-powers-explained-629582",
    },
    {
        title: "Baxter the Robot Could Revolutionize Manufacturing: Watch Him in Action",
        publishedAt: 1398745576,
        uri: "/article/watch-baxter-playing-with-the-robot-that-could-revolutionize-manufacturing-647029",
    },
    {
        title: "If People in Suspended Animation Are 'Dead,' Sticky Legal Issues Could Arise",
        publishedAt: 1413317591,
        uri: "/article/if-people-in-suspended-animation-are-dead-sticky-legal-issues-could-arise-1018594",
    },
    {
        title: "Japan and Their Love Story with Bidets",
        publishedAt: 1408474326,
        uri: "/article/japan-and-their-love-story-with-bidets-891744",
    },
    {
        title: "Scientists Calculate the Probability of Your Existence, Conclusions Similar to Buddhism",
        publishedAt: 1404466954,
        uri: "/bright/scientists-calculate-the-probability-of-your-existence-787114",
    },
    {
        title: "How Google Venture Capital Will Help Europe's Risk-Taking Techies",
        publishedAt: 1405164435,
        uri: "/article/how-google-venture-capital-will-help-europes-risk-taking-techies-798529",
    },
    {
        title: "Scientists Prove God Exists? German Scientists Say They Have",
        publishedAt: 1383154990,
        uri: "/article/scientists-prove-god-exists-german-scientists-say-they-have-335543",
    },
    {
        title: "'Hollywood Shark' Lawyer Takes on Monsanto",
        publishedAt: 1434372105,
        uri: "/health/lawsuit-accuses-monsanto-of-false-advertising-1392030",
    },
    {
        title: "Chapter Twelve, Part I: Sabotaging Education (UPDATED)",
        publishedAt: 1528730023,
        uri: "/article/chapter-twelve-sabotaging-education-part-i-2636144",
    },
    {
        title: "What to Expect From Dyson’s New Robotics Lab",
        publishedAt: 1392241587,
        uri: "/article/what-to-expect-from-dysons-new-robotics-lab-504050",
    },
    {
        title: "Is the UN a global epicenter of corruption?",
        publishedAt: 1434060180,
        uri: "/article/has-the-un-become-a-global-epicenter-of-corruption-1389251",
    },
    {
        title: "Cyberparks Will Be Intelligent Spaces Embedded With Sensors and Computers",
        publishedAt: 1400292441,
        uri: "/article/cyberparks-will-be-intelligent-spaces-embedded-with-sensors-and-computers-680250",
    },
    {
        title: "Fiction Writer Riffs Off Real Life Horror",
        publishedAt: 1403862979,
        uri: "/bright/fiction-writer-riffs-off-real-life-horror-767839",
    },
    {
        title: "Leslie Bogart, Stephen Bogart, Sam Robards: Lauren Bacall's Kids with Humphrey Bogart and Jason Robards, Jr. come in Focus After Death (+Photos, Age)",
        publishedAt: 1407888301,
        uri: "/article/leslie-bogart-stephen-bogart-sam-robarts-lauren-bacalls-3-kids-with-humphrey-bogart-and-jason-robards-jr-age-871366",
    },
    {
        title: "Why the Watched Pot May Actually Never Boil, According to Quantum Physics",
        publishedAt: 1404074128,
        uri: "/article/why-the-watched-pot-may-actually-never-boil-according-to-quantum-physics-776287",
    },
    { title: "Build Your Own Robot", publishedAt: 1386102219, uri: "/article/build-your-own-robot-381523" },
    {
        title: "Why the Most Advanced Computer Is Still No Match for the Human Brain",
        publishedAt: 1418328144,
        uri: "/article/why-the-most-advanced-computer-is-still-no-match-for-the-human-brain-1136853",
    },
    {
        title: "5 Radical New Technologies You Should Know About",
        publishedAt: 1385154475,
        uri: "/article/5-radical-new-technologies-you-should-know-about-367019",
    },
    {
        title: "The Mysterious Origins of Some Dead or Dying Languages",
        publishedAt: 1408567865,
        uri: "/article/mysterious-origins-of-dead-or-dying-languages-895058",
    },
    {
        title: "SeaWorld Pilot Whale Beached, Struggles to Get to Water (+Video)",
        publishedAt: 1374989236,
        uri: "/article/seaworld-pilot-whale-beached-struggles-to-get-to-water-video-211161",
    },
    {
        title: "Leslie Bogart, Sam Robards, Stephen Bogart: Children of Actress Lauren Bacall (+Photos)",
        publishedAt: 1408052927,
        uri: "/article/leslie-bogart-sam-robards-stephen-bogart-children-of-lauren-bacall-humphrey-bogart-jason-robards-photos-877946",
    },
    {
        title: "Scientists Search for Civilizations on Likely Planets",
        publishedAt: 1360868456,
        uri: "/article/scientists-search-for-civilizations-on-likely-planets-1477449",
    },
    {
        title: "Free Online Higher Education: 5 Best MOOCs",
        publishedAt: 1375695920,
        uri: "/article/5-best-moocs-for-free-online-higher-education-229640",
    },
    {
        title: "Gaming for Social Good Is More Than an Ethical Diversion",
        publishedAt: 1398187610,
        uri: "/article/gaming-for-social-good-is-more-than-an-ethical-diversion-635278",
    },
    {
        title: "Is Google Dumbing You Down?",
        publishedAt: 1368722688,
        uri: "/article/is-google-dumbing-you-down-59559",
    },
    {
        title: "From Cocaine Through High Fructose Corn Syrup, the Story of Coke ",
        publishedAt: 1371046063,
        uri: "/health/from-cocaine-through-high-fructose-corn-syrup-the-story-of-coke-104704",
    },
    {
        title: "Full-Time Work Scarce in US Recovery",
        publishedAt: 1381833190,
        uri: "/article/full-time-work-scarce-in-us-recovery-317868",
    },
    {
        title: "NOOWIT: A New & Very Witty Feed Innovation",
        publishedAt: 1370521155,
        uri: "/article/noowit-93747",
    },
    {
        title: "Energy Transition: The Issue of Power Grids",
        publishedAt: 1406476615,
        uri: "/article/energy-transition-the-issue-of-power-grids-817324",
    },
    {
        title: "Photo Tags Provide Edge for Finding Fossils",
        publishedAt: 1353697239,
        uri: "/article/photo-tags-provide-edge-for-finding-fossils-1480052",
    },
    {
        title: "What Exactly Is Big Data, Anyway?",
        publishedAt: 1376413760,
        uri: "/article/understanding-big-data-242577",
    },
    {
        title: "This Is New York: Daniel Kopulos on Saving Guatemalan Jungle Animals",
        publishedAt: 1369939298,
        uri: "/article/this-is-new-york-daniel-kopulos-saving-endangered-animals-in-a-guatemalan-jungle-82539",
    },
    {
        title: "Movie Review: 'Google and the World Brain'",
        publishedAt: 1359670682,
        uri: "/article/movie-review-google-and-the-world-brain-1477921",
    },
    {
        title: "The World is No Longer 'Flat', it's Automated",
        publishedAt: 1381242528,
        uri: "/article/the-world-is-no-longer-flat-its-automated-311978",
    },
    {
        title: "Anything for Power: The Real Story of China's Jiang Zemin – Chapter 22",
        publishedAt: 1416408402,
        uri: "/china/anything-for-power-the-real-story-of-chinas-jiang-zemin-chapter-22-1090567",
    },
    {
        title: "Top Universities Offer Free Online Education, Business Plan to Follow",
        publishedAt: 1357189052,
        uri: "/article/cousera-offers-free-higher-education-to-the-intellectually-curious-1478985",
    },
    {
        title: "Is Microsoft's Bing Finally the Google Killer?",
        publishedAt: 1348818715,
        uri: "/article/bing-finally-the-google-killer-1481447",
    },
    {
        title: "People in Vegetative State May Have Active Minds: Are They Trapped?",
        publishedAt: 1399731000,
        uri: "/health/people-in-vegetative-state-may-have-active-minds-are-they-trapped-668322",
    },
    {
        title: "Skynet: Terminator's Skynet to Become Sentient on Thursday",
        publishedAt: 1303313631,
        uri: "/bright/skynet-to-become-sentient-on-thursday-says-terminator-lore-1499014",
    },
    {
        title: "Humanoid Robot to Revolutionize U.S. Manufacturing",
        publishedAt: 1348019775,
        uri: "/article/humanoid-robot-to-revolutionize-u-s-manufacturing-1481732",
    },
    {
        title: "How Playing Twitter Games Can Build Your Business",
        publishedAt: 1342008927,
        uri: "/article/how-playing-twitter-games-can-build-your-business-1483707",
    },
    {
        title: "Dive Pioneers a Personal Voyage ",
        publishedAt: 1365017133,
        uri: "/bright/dive-pioneers-a-personal-voyage-21558",
    },
    {
        title: "War Drone Refueling a Major Step in Robotics",
        publishedAt: 1328162846,
        uri: "/article/war-drone-refueling-a-major-step-in-robotics-1489249",
    },
    {
        title: "Inventor Bringing Thought-controlled Robot Avatars to Quadriplegics",
        publishedAt: 1314121313,
        uri: "/article/inventor-bringing-thought-controlled-robot-avatars-to-quadriplegics-1494683",
    },
    {
        title: "Mumbai on Red Alert for Festival",
        publishedAt: 1284236437,
        uri: "/article/mumbai-on-red-alert-for-festival-1508643",
    },
    {
        title: "Can Facebook 'Friending' Develop True Friendship?",
        publishedAt: 1305286110,
        uri: "/bright/can-facebook-friending-develop-true-friendship-1498057",
    },
    {
        title: "City Doctors Help Distant Patients",
        publishedAt: 1285879322,
        uri: "/article/sana-telemedicine-mit-1507899",
    },
    { title: "UK Briefs: 27 July 2010", publishedAt: 1280214204, uri: "/article/uk-briefs-27-july-2010-1510430" },
    {
        title: "Genius Inventor Seeks Fountain of Youth",
        publishedAt: 1273028286,
        uri: "/article/inventor-futurist-ray-kurzweil-technology-1514019",
    },
    {
        title: "Driverless Electric Van Completes 8,000-Mile Trip",
        publishedAt: 1288576720,
        uri: "/article/driverless-electric-van-completes-8000-mile-trip-1506788",
    },
    {
        title: "Emotion Tech Developer Shares Dreams of Electric Sheep",
        publishedAt: 1291646537,
        uri: "/article/emotion-tech-developer-shares-dreams-of-electric-sheep-1505456",
    },
    {
        title: "Google's Director of Research to Deliver Annual Boole Lecture at UCC",
        publishedAt: 1260549536,
        uri: "/article/google-director-research-norvig-boole-lecture-ucc-1519577",
    },
    {
        title: "Movie Review: '9'",
        publishedAt: 1252462166,
        uri: "/article/machines-battle-humanity-in-animated-satire-movie-review-9-1521138",
    },
    { title: "Origins of the Moon", publishedAt: 1212750000, uri: "/article/origins-of-the-moon-1530792" },
    {
        title: "Attempt to Ban Aspartame 'Poison' From Food, Drink",
        publishedAt: 1217801803,
        uri: "/article/aspartame-951-ban-poison-1530338",
    },
    {
        title: 'New Development in "Quit the CCP" Internet Software and Its Applications',
        publishedAt: 1150257600,
        uri: "/article/new-development-in-quit-the-ccp-internet-software-and-its-applications-1732083",
    },
];

export { data };
