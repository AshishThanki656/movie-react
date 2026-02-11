const moviesData = [
  // =======================
  // Hollywood Movies (1–50)
  // =======================
  {
    id: 1,
    title: "Inception",
    year: 2010,
    genre: "Sci-Fi",
    type: "Hollywood",
    plot: "A thief enters dreams to steal secrets and plant ideas.",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
  },
  {
    id: 2,
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
    type: "Hollywood",
    plot: "Batman faces the Joker, a criminal mastermind spreading chaos.",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  },
  {
    id: 3,
    title: "Interstellar",
    year: 2014,
    genre: "Sci-Fi",
    type: "Hollywood",
    plot: "Explorers travel through a wormhole to save humanity.",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  },
  {
    id: 4,
    title: "The Matrix",
    year: 1999,
    genre: "Sci-Fi",
    type: "Hollywood",
    plot: "A hacker discovers reality is a simulated illusion.",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
  },
  {
    id: 5,
    title: "Gladiator",
    year: 2000,
    genre: "Action",
    type: "Hollywood",
    plot: "A Roman general seeks revenge after betrayal.",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
  },
  {
    id: 6,
    title: "Avatar",
    year: 2009,
    genre: "Sci-Fi",
    type: "Hollywood",
    plot: "A marine bonds with an alien world on Pandora.",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
  },
  {
    id: 7,
    title: "The Avengers",
    year: 2012,
    genre: "Action",
    type: "Hollywood",
    plot: "Earth's heroes unite to stop an alien invasion.",
    posterUrl: "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
  },
  {
    id: 8,
    title: "Joker",
    year: 2019,
    genre: "Drama",
    type: "Hollywood",
    plot: "A troubled man descends into madness and crime.",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
  },
  {
    id: 9,
    title: "Pulp Fiction",
    year: 1994,
    genre: "Crime",
    type: "Hollywood",
    plot: "Interconnected stories of crime and redemption.",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
  },
  {
    id: 10,
    title: "The Social Network",
    year: 2010,
    genre: "Drama",
    type: "Hollywood",
    plot: "The rise of Facebook and its personal costs.",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg",
  },
  {
    id: 11,
    title: "The Shawshank Redemption",
    year: 1994,
    genre: "Drama",
    type: "Hollywood",
    plot: "Two imprisoned men bond over years, finding redemption.",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
  },
  {
    id: 12,
    title: "Forrest Gump",
    year: 1994,
    genre: "Drama",
    type: "Hollywood",
    plot: "A simple man witnesses and influences historical events.",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
  },
  {
    id: 13,
    title: "The Godfather",
    year: 1972,
    genre: "Crime",
    type: "Hollywood",
    plot: "The aging patriarch of a crime dynasty transfers power.",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
  },
  {
    id: 14,
    title: "Fight Club",
    year: 1999,
    genre: "Drama",
    type: "Hollywood",
    plot: "An insomniac and a soap maker form an underground club.",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
  },
  {
    id: 15,
    title: "The Lord of the Rings: The Fellowship",
    year: 2001,
    genre: "Fantasy",
    type: "Hollywood",
    plot: "A hobbit must destroy a powerful ring.",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
  },
  {
    id: 16,
    title: "Star Wars: A New Hope",
    year: 1977,
    genre: "Sci-Fi",
    type: "Hollywood",
    plot: "A farm boy joins rebels to save the galaxy.",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
  },
  {
    id: 17,
    title: "Titanic",
    year: 1997,
    genre: "Romance",
    type: "Hollywood",
    plot: "A love story aboard the doomed ship.",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
  },
  {
    id: 18,
    title: "Jurassic Park",
    year: 1993,
    genre: "Adventure",
    type: "Hollywood",
    plot: "Dinosaurs are brought back to life in a theme park.",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/oU7Oq2kFAAlGqbU4VoAE36g4hoI.jpg",
  },
  {
    id: 19,
    title: "The Lion King",
    year: 1994,
    genre: "Animation",
    type: "Hollywood",
    plot: "A lion cub flees after his father's death.",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
  },
  {
    id: 20,
    title: "Goodfellas",
    year: 1990,
    genre: "Crime",
    type: "Hollywood",
    plot: "The rise and fall of a mob associate.",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
  },
  {
    id: 21,
    title: "The Silence of the Lambs",
    year: 1991,
    genre: "Thriller",
    type: "Hollywood",
    plot: "An FBI agent seeks help from a cannibal psychiatrist.",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/uS9m8OBk1A8eM9I042bx8XXpqAq.jpg",
  },
  {
    id: 22,
    title: "Saving Private Ryan",
    year: 1998,
    genre: "War",
    type: "Hollywood",
    plot: "Soldiers search for a paratrooper during D-Day.",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/uqx37WrMiHYb4KKpYhVFS5Zqnuj.jpg",
  },
  {
    id: 23,
    title: "Schindler's List",
    year: 1993,
    genre: "Historical",
    type: "Hollywood",
    plot: "A businessman saves Jews during the Holocaust.",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
  },
  {
    id: 24,
    title: "The Departed",
    year: 2006,
    genre: "Crime",
    type: "Hollywood",
    plot: "An undercover cop and a mole try to identify each other.",
    posterUrl: "https://image.tmdb.org/t/p/w500/nT97ifVT2J1yMQmeq20Qblg61T.jpg",
  },
  {
    id: 25,
    title: "The Prestige",
    year: 2006,
    genre: "Mystery",
    type: "Hollywood",
    plot: "Two magicians engage in a competitive rivalry.",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/tRNlZbgNCNOpLpbPEz5L8G8A0JN.jpg",
  },
  {
    id: 26,
    title: "Django Unchained",
    year: 2012,
    genre: "Western",
    type: "Hollywood",
    plot: "A freed slave hunts down criminals with a bounty hunter.",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/7oWY8VDWW7thTzWh3OKYRkWUlD5.jpg",
  },
  {
    id: 27,
    title: "The Wolf of Wall Street",
    year: 2013,
    genre: "Biography",
    type: "Hollywood",
    plot: "A stockbroker's rise and fall due to corruption.",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/34m2tygAYBGqA9MXKhRDtzYd4MR.jpg",
  },
  {
    id: 28,
    title: "Mad Max: Fury Road",
    year: 2015,
    genre: "Action",
    type: "Hollywood",
    plot: "A woman rebels in a post-apocalyptic wasteland.",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/hA2ple9q4qnwxp3hKVNhroipsir.jpg",
  },
  {
    id: 29,
    title: "Parasite",
    year: 2019,
    genre: "Thriller",
    type: "Hollywood",
    plot: "A poor family schemes to work for a wealthy household.",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
  },
  {
    id: 30,
    title: "Whiplash",
    year: 2014,
    genre: "Drama",
    type: "Hollywood",
    plot: "A drummer faces an abusive instructor's demands.",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg",
  },
  {
    id: 31,
    title: "The Grand Budapest Hotel",
    year: 2014,
    genre: "Comedy",
    type: "Hollywood",
    plot: "A concierge and lobby boy become friends.",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg",
  },
  {
    id: 32,
    title: "Blade Runner 2049",
    year: 2017,
    genre: "Sci-Fi",
    type: "Hollywood",
    plot: "A blade runner uncovers a secret that threatens society.",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
  },
  {
    id: 33,
    title: "La La Land",
    year: 2016,
    genre: "Musical",
    type: "Hollywood",
    plot: "A jazz pianist and actress fall in love in LA.",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
  },
  {
    id: 34,
    title: "The Revenant",
    year: 2015,
    genre: "Adventure",
    type: "Hollywood",
    plot: "A frontiersman seeks revenge after being left for dead.",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/tSaBkriE7TpbjFoQUFXuikoz0dF.jpg",
  },
  {
    id: 35,
    title: "Dunkirk",
    year: 2017,
    genre: "War",
    type: "Hollywood",
    plot: "Allied soldiers evacuate from Dunkirk during WWII.",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/bOXBV303Fgkzn2K4FeKDc0O31q4.jpg",
  },
  {
    id: 36,
    title: "Arrival",
    year: 2016,
    genre: "Sci-Fi",
    type: "Hollywood",
    plot: "A linguist communicates with extraterrestrial visitors.",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg",
  },
  {
    id: 37,
    title: "Get Out",
    year: 2017,
    genre: "Horror",
    type: "Hollywood",
    plot: "A young man uncovers disturbing secrets at his girlfriend's home.",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg",
  },
  {
    id: 38,
    title: "Baby Driver",
    year: 2017,
    genre: "Action",
    type: "Hollywood",
    plot: "A talented driver tries to escape his criminal life.",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/rmnQ9jKW72bHu8uKlMjPIb2VLMI.jpg",
  },
  {
    id: 39,
    title: "1917",
    year: 2019,
    genre: "War",
    type: "Hollywood",
    plot: "Two soldiers race to deliver a message during WWI.",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/iZf0KyrE25z1sage4SYFLCCrMi9.jpg",
  },
  {
    id: 40,
    title: "Once Upon a Time in Hollywood",
    year: 2019,
    genre: "Comedy",
    type: "Hollywood",
    plot: "An actor and his stunt double navigate changing Hollywood.",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/8j58iEBw9pOXFD2L0nt0ZXeHviB.jpg",
  },
  {
    id: 41,
    title: "Jojo Rabbit",
    year: 2019,
    genre: "Comedy",
    type: "Hollywood",
    plot: "A boy's worldview is challenged during WWII.",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/7GsM4mtM0worCtIVeiQt28HieeN.jpg",
  },
  {
    id: 42,
    title: "Ford v Ferrari",
    year: 2019,
    genre: "Biography",
    type: "Hollywood",
    plot: "Ford challenges Ferrari at Le Mans in 1966.",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/dR1Ju50iudrOh3YgfwkAU1g2HZe.jpg",
  },
  {
    id: 43,
    title: "Knives Out",
    year: 2019,
    genre: "Mystery",
    type: "Hollywood",
    plot: "A detective investigates a wealthy family's patriarch's death.",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/pThyQovXQrw2m0s9x82twj48Jq4.jpg",
  },
  {
    id: 44,
    title: "Spider-Man: Into the Spider-Verse",
    year: 2018,
    genre: "Animation",
    type: "Hollywood",
    plot: "Miles Morales meets Spider-People from other dimensions.",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
  },
  {
    id: 45,
    title: "The Shape of Water",
    year: 2017,
    genre: "Fantasy",
    type: "Hollywood",
    plot: "A mute woman forms a relationship with an aquatic creature.",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/9zfwPffUXpBrEP26yp0q1ckXDcj.jpg",
  },
  {
    id: 46,
    title: "Logan",
    year: 2017,
    genre: "Action",
    type: "Hollywood",
    plot: "An aging Wolverine cares for a young mutant.",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/fnbjcRDYn6YviCcePDnGdyAkYsB.jpg",
  },
  {
    id: 47,
    title: "Coco",
    year: 2017,
    genre: "Animation",
    type: "Hollywood",
    plot: "A boy enters the Land of the Dead to find his ancestor.",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg",
  },
  {
    id: 48,
    title: "The Irishman",
    year: 2019,
    genre: "Crime",
    type: "Hollywood",
    plot: "A hitman recalls his involvement with the mob.",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/mbm8k3GFhXS0ROd9AD1gqYbIFbM.jpg",
  },
  {
    id: 49,
    title: "A Quiet Place",
    year: 2018,
    genre: "Horror",
    type: "Hollywood",
    plot: "A family survives in silence to avoid alien creatures.",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3bufwDq4n.jpg",
  },
  {
    id: 50,
    title: "Mission: Impossible - Fallout",
    year: 2018,
    genre: "Action",
    type: "Hollywood",
    plot: "Ethan Hunt races to prevent a global catastrophe.",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg",
  },
];

export default moviesData;

/*
 * POSTER URLs INFO:
 * - All posters are from TMDB CDN (image.tmdb.org)
 * - These are direct image URLs that work WITHOUT any API key
 * - Format: https://image.tmdb.org/t/p/w500/{poster_path}
 * - w500 = 500px width (you can change to w300, w780, or 'original')
 * - These URLs are reliable and will work permanently
 * - FREE to use, no signup required, no rate limits on CDN
 */
