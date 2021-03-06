'use strict';



var Entities = {
  1: {
    id: 1,
    kind: 'person',
    name: 'Clay Shirky',
    image_url: "http://www.worldchanging.com/postimages/article/7925_largearticlephoto.jpg",
    bio: "Clay Shirky (born 1964) is an American writer, consultant and teacher on the social and economic effects of Internet technologies. He has a joint appointment at New York University (NYU) as a Distinguished Writer in Residence at the Arthur L. Carter Journalism Institute and Assistant Arts Professor in the New Media focused graduate Interactive Telecommunications Program (ITP).",
    bio_source: 'Wikipedia',
    facts: [{
      content: 'He is a memeber of the Wikimedia Foundation',
      source: 'http://wikimediafoundation.org/wiki/Advisory_Board#Clay_Shirky',
    }],
    content: [0],
    external_sources: [{
      username: '@cshirky',
      network: 'twitter',
      link: 'https://twitter.com/cshirky'
    }]
  },
  2: {
    id: 2,
    kind: 'person',
    name: 'Nick Carr',
    image_url: "http://www.newscientist.com/blogs/culturelab/NicholasCarr2.jpg",
    bio: "Nicholas G. Carr is an American writer who has published books and articles on technology, business, and culture. His book The Shallows: What the Internet Is Doing to Our Brains was a finalist for the 2011 Pulitzer Prize in General Nonfiction.",
    content: [0],
    facts: [{
      content: 'He is a member of the Editorial Board of Advisors of Encyclopædia Britannica',
      source: 'http://blogs.britannica.com/blog/main/2008/01/nick-carr-david-gelernter-and-michael-wesch-new-britannica-advisors/'
    }],
    external_sources: [{
      username: '@roughtype',
      network: 'twitter',
      link: 'https://twitter.com/roughtype'
    }]
  },
  3: {
    id: 3,
    kind: 'organization',
    name: 'NPR',
    favicon: 'http://www.npr.org/favicon.ico'
  },
  4: {
    id: 4,
    kind: 'website',
    url: 'http://www.roughtype.com/',
    favicon: 'http://www.roughtype.com/favicon.ico',
    name: 'Rough Type'
  },
  5: {
    id: 5,
    kind: 'person',
    name: 'Ken Barcus',
  },
  6: {
    id: 6,
    kind: 'person',
    name: 'Merlin Mann',
    image_url: 'http://sfsketchfest.com/x/wp-content/uploads/2013/12/0822-merlin.jpg',
    bio: "Mann is the founder and writer of 43 Folders, a blog about \"finding the time and attention to do your best creative work.\"",
    facts: [{
      content: "He lives in San Francisco",
      source: 'http://en.wikipedia.org/wiki/Merlin_Mann',
    }],
    content: [2],
    external_sources: [{
      username: '@hotdogsladies',
      network: 'twitter',
      link: 'https://twitter.com/hotdogsladies'
    }]
  },
  7: {
    id: 7,
    kind: 'website',
    name: '43 Folders',
    url: 'http://www.43folders.com',
    favicon: 'http://www.43folders.com/favicon.ico',
  },
  8: {
    id: 8,
    kind: 'person',
    name: 'Ira Glass',
  },
  9: {
    id: 9,
    kind: 'website',
    name: 'Youtube',
    url: 'Youtube',
    favicon: 'https://www.youtube.com/favicon.ico'
  },
  10: {
    id: 10,
    kind: 'person',
    name: 'Dr. Seuss',
  },
  11: {
    id: 11,
    kind: 'website',
    name: 'Goodreads',
    url: 'http://goodreads.com',
    favicon: 'http://www.goodreads.com/favicon.ico'
  }
};


var Content = [
{
  kind: 'article',
  display_as: 'quote',
  parts: [{
    kind: 'quote',
    source: Entities[2],
    content: 'It has been taken on faith by many, including your benighted scribe, that the future of book.',
  },{
    kind: 'quote',
    source: Entities[1],
    content: 'Maybe books won’t survive the transition to digital devices, any more than scrolls survived the transition to movable type.'
  },{
    kind: 'quote',
    source: Entities[2],
    content: 'The mainstay of book publishing is the extended narrative, either fictional or factual and almost always shaped by a single authorial consciousness and expressed in a single authorial voice. It is, in other words, a work of art. As you note, attempts to reinvent the narrative of the book in new hypermedia forms have been dismal failures.'
  },{
    kind: 'quote',
    source: Entities[1],
    content: 'I do believe is that books, and in particular novels, have their form pretty decisively wrapped up in the affordances and limitations of print, from their length of ~50K-500K words, to the consistent use of prose, to the idea of delivering the whole bolus of text at once. I also don’t think that, given the native grain of the internet, those affordances and limitations are transferrable wholesale.'
  }],
  source: Entities[4],
  title: 'Will Gutenberg laugh last?',
  url: 'http://www.roughtype.com/?p=2296',
},

{
  kind: 'article',
  display_as: 'image',
  parts: [{
    kind: 'img',
    url: 'http://www.npr.org/assets/multimedia/2014/01/ND/deskrig.gif',
    source: Entities[3]
  }],
  source: Entities[3],
  author: Entities[5],
  title: "Oil Boom: See A Modern-Day Gold Rush In Motion",
  url: 'http://www.npr.org/2014/01/29/266757131/welcome-to-oil-country-a-modern-day-gold-rush-in-north-dakota'
},

{
  kind: 'article',
  display_as: 'quote',
  parts: [{
    kind: 'quote',
    source: Entities[6],
    content: "So, there you have it. An article that's clearly not a chapter of \"email stuff.\"\nMe? I'm off to prep for \"Daddy-Daughter Night.\"\nAnd, tomorrow morning, unlike last Saturday morning and countless other days before it, at the crack of 6:00 am Pacific Time, I will be available in my regular crankless bed to ask my daughter whether she had nice sleeps. And I will tell her and my regular wife that I think they're the Greatest Things in the Universe.\n"
  }],
  source: Entities[7],
  url: 'http://www.43folders.com/2011/04/22/cranking',
  title: 'Cranking',
},

{
  kind: 'video',
  display_as: 'video',
  parts: [{
    kind: 'video',
    source: Entities[8],
    content: {
      source: Entities[9],
      video_id: 'loxJ3FtCJJA',
      embed_url: '//www.youtube.com/embed/loxJ3FtCJJA?autohide=1&color=white&fs=1&autoplay=0&iv_load_policy=3&rel=0&modestbranding=1&showinfo=0&hd=1'
    }
  }],
  source: Entities[9],
  title: 'Ira Glass on Storytelling',
  url: 'https://www.youtube.com/watch?v=loxJ3FtCJJA',
},

{
  kind: 'quote',
  display_as: 'image',
  parts: [{
    kind: 'quote_image',
    source: Entities[10],
    url: 'https://files.app.net/wmb1wBwWR.png'
  }],
  source: Entities[11],
  title: 'via Good Reads',
  url: 'https://www.goodreads.com/quotes/1173-don-t-cry-because-it-s-over-smile-because-it-happened',
}];
