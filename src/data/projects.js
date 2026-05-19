export const projects = [

// PROJECT 1 //

{
  title: "Crashouts",

  slug: "crashouts",

  category: "Data / Algorithms",

  dates: "March 2026 - May 2026",

  shortDescription:
    "A routing system that incorporates crash-risk weighting from real car crash data into A* pathfinding to recommend safer routes.",

  tech: [
    "Python",
    "OSMnx",
    "NetworkX",
    "Pandas",
    "PySpark",
    "React"
  ],

  longDescription: `
  Automobile accidents are a persistent issue for public safety in Atlanta, GA with many roads experiencing repeated crash activity over time. While navigation tools like Google and Apple Maps help users optimize for distance, traffic, and time, they do not consider long-term historical crash patterns into route recommendations. As a result, drivers may be repeatedly routed through areas with elevated accident risk without being made aware of the danger.

  Additionally, afflictions such as PTSD and Driving Anxiety make it difficult for people to navigate daily life in an automobile-centric society such that is found in Atlanta. By factoring in historic car crash data into traditional routing algorithms, not only do we provide safer trips for everyone, but we can improve the quality of life among these aforementioned communities.

  Through this group project, we were able to successfully create an application that does just this. Personally, my responsibilities were data-related. I first obtained a large dataset from the Georgia Department of Transportation which chronicled all crashes taking place in the state of Georgia between 2020 and 2024 (roughly 1 million records). I then utilized PySpark to preprocess this data by filtering incomplete rows, omitting crashes not in the city of Atlanta, and standardizing row names. Following this, I systematically appended each crash from the cleaned dataframe onto corresponding edges of an OSMnx graph representing the road network of Atlanta.

  I then designed a mathematical formula to assign each of these road segments a crash-severity score, acting as an additional punishing weight for our A* algorithm. The algorithm accounts for the type and result of each crash, a user sensitivity slider, the current weather, and the length of the road segment (as a normalizing factor). This formula can be seen in the photo gallery. The values for each of these factors were determined by applying a conditional probability analysis on the crash data; specifically, I looked at relative risk ratios. Following this, my team handled the A* algorithm and the visualization of the navigation.

  We tested the system by generating 1,000 randomized start and end coordinate pairs across the city of Atlanta. For each of these 1,000 trips, our testing suite computed two distinct paths. First was the Baseline Route which is the standard fastest-path routing, optimizing strictly for minimum travel time. And second was the Safer Route, our custom heuristic A* algorithm. We measured the performance of both algorithms across two primary metrics: Travel Time (measured in minutes) and the Danger Score (the accumulated historical crash penalty of all edges and intersections traversed on the route). Across the randomized routes, our A* pathfinder achieved a 73.64% average reduction in the Danger Score compared to the baseline routes. This massive increase in physical safety came at a highly manageable cost, resulting in only a 25.59% average increase in travel time. By comparing these metrics, we demonstrated that this project creates a highly practical trade-off between safety and efficiency.
  `,

  features: [
    "Mapped crash data to road graph edges",
    "Designed custom crash-risk weighting formula",
    "Implemented graph caching for performance",
    "Compared safer vs shortest routes"
  ],

  images: [
    {
      src: "/project-images/crashout1.png",
      caption: "My formula and reference tables"
    },
    {
      src: "/project-images/crashout2.png",
      caption: "Routing example"
    },
    {
      src: "/project-images/crashout3.png",
      caption: "Route comparisons"
    }
  ]
},

// PROJECT 2 //

{
  title: "ML4Bio Protein Fitness Hackathon",

  slug: "protein",

  category: "Machine Learning",

  dates: "March 2026 - April 2026",

  shortDescription:
    "A machine learning model using active learning components to predict protein mutant fitness scores.",

  tech: [
    "Python",
    "Pytorch",
    "Pandas"
  ],

  longDescription: `
The idea of optimizing naturally occurring proteins through artificial mutations is instrumental in biology and medicine. Different mutations of a wild type protein may be better at performing specific functions. However, it is difficult to individually test all possible mutations of proteins due to the incredibly large search space. Therefore, it is common to use machine learning models to predict the efficacy of mutations.

In this project, our group entered the ML4Bio Hackathon to develop a model that most accurately ranks the mutations of a provided 656 amino acid-lengthed protein. Of the roughly 11,000 mutations, we were provided a training set of 1,100 mutation-score tuples, and we were given three opportunities to request 100 additional pairs. Because of this, the task at hand was to develop an effective regression model and simultaneously strategically choose which pairs we should request.

I solely built out an MLP model in PyTorch featuring an efficient method of protein encoding that reduced the input dimension of the model from the initial 13,120 nodes (656 amino acids, each with 20 possibilities) to just 21. Just with the initial model, our group was able to achieve a Spearman coefficient of 0.25.

For the active learning component, we hypothesized querying in a balance of exploration and exploitation would be effective. I was responsible for the exploration half, so I devised an algorithm that sampled mutations based on ones with the highest amount of variance in their predictions derived from a 5-part ML ensemble. After all of our queries, we achieved a Spearman coefficient of 0.33.

  `,

  features: [
    "Designed and improved MLP model",
    "Researched and executed active learning strategies"
  ],

  images: [
    {
      src: "/project-images/protein1.png",
      caption: "Visual of example search space"
    }
  ]
},

// PROJECT 3 //

{
  title: "LinkedIn Learning Redesign",

  slug: "linkedin-learning",

  category: "Design",

  dates: "January 2026 - April 2026",

  shortDescription:
    "An overhaul of LinkedIn Learning's UI utilizing a user-centered design.",

  tech: [
    "Figma"
  ],

  longDescription: `
For those looking to upskill, LinkedIn Learning offers itself as a quality platform to ingest educational modules. However, the platform is not without its issues. Through a contextual inquiry, it was determined that LinkedIn Learning could be improved by emphasizing the teaching of component skills. In Learning Science, component skills are the more basic skills that a larger, more complex task is composed of.

By applying an iterative, user-centered design framework, my group and I executed a redesign of the LinkedIn Learning platform to focus on this aforementioned issue. We were each responsible for the design of one feature, all of which would contribute to the larger design. My feature was a Skill Tree, inspired by other Learning Science frameworks such as Constructivism and Advance Organizers.

As previously stated, we took an iterative, user-centered approach consisting of multiple rounds of prototypes, all of which are displayed in the gallery section.
  `,

  features: [
    "Performed contextual inquiry through user testing",
    "Utilized Learning Science principles in design choices",
    "Designed final prototypes using Figma"
  ],

  images: [
    {
      src: "/project-images/linkedin1.png",
      caption: "Lo-fi prototype"
    },
    {
      src: "/project-images/linkedin2.png",
      caption: "Mid-fi prototype"
    },
    {
      src: "/project-images/linkedin3.png",
      caption: "Hi-fi prototype"
    }
  ]
},

// PROJECT 4 //

{
  title: "Automatic Ostrich Mister",

  slug: "ostrich",

  category: "Design",

  dates: "September 2025 - December 2025",

  shortDescription:
    "A device used to automatically mist ostriches with water at Zoo Atlanta.",

  tech: [
    "Arduino"
  ],

  longDescription: `
The ostrich at Zoo Atlanta, like other birds, enjoys being misted with water. This is done laboriously by a zookeeper standing with a hose over a long duration, sometimes hours. To remedy this, my group decided to design a device that could alleviate zookeepers of this burden, an automatic ostrich mister.

Needless to say, designing for an ostrich is much different than designing for a human. To understand ostrich affordances as well as the constraints and limitations of the ostrich enclosure, I interacted with multiple zookeepers and animal researchers at Zoo Atlanta.

Ultimately, we decided on a proximity-sensor based system that interacts with a real-time clock to toggle a water solenoid valve, all of which was controlled via Arduino. The components were enclosed in a customized waterproof container, which was designed to hang from the fence of the enclosure.
  `,

  features: [
    "Gathered requirements and constraints through interviews with zoo professionals",
    "Designed physical prototype"
  ],

  images: [
    {
      src: "/project-images/ostrich1.png",
      caption: "Component diagram"
    },
    {
      src: "/project-images/ostrich2.png",
      caption: "Final prototype"
    },
    {
      src: "/project-images/ostrich3.png",
      caption: "Area of enclosure for device"
    }
  ]
},

// PROJECT 5 //

{
  title: "TSP Genetic Algorithm",

  slug: "tsp",

  category: "Data / Algorithms",

  dates: "November 2025",

  shortDescription:
    "An effective novel algorithm estimating optimal routes of the Traveling Salesman Problem.",

  tech: [
    "Python",
    "Pandas"
  ],

  longDescription: `
The Traveling Salesman Problem (TSP) is one of the most well known problems in NP-complete. It involves correctly identifying the optimal route to visit cities on a map and arrive back to the origin city. Currently, it is considered unsolvable due to the exponential amount of time it takes to compute the correct answer. Thus, we must resort to estimations in order to solve the problem. To accomplish this, I created a novel genetic algorithm that effectively estimates the solution of the TSP problem. The genetic algorithm uses the popular genetic algorithm framework: evaluate, sample, mate, mutate.

The algorithm begins by creating a storage of pairwise Euclidean distances. This is done by iterating over each i coordinate and calculating j pairwise costs and storing them in adjMatrix[i][j]. We also initialize variables bestRoute and bestScore Then, we initialize a list, population, of 50 randomly generated routes. For the rest of the algorithm, we perform the following loop (only terminating when time expires or when the same bestScore has remained for 50 iterations): First, we call an ‘evaluate’ method to iterate over each route in population and calculate their total cost by iterating over each index (utilizing the adjMatrix). These routes are then sorted by least to most expensive total cost. Here is where bestRoute and bestScore are updated. We then call another method, a ‘sample’ method, which samples the top 15 of routes. Our algorithm utilizes elitism because the top three are always ‘parents’. The next 12 are selected with probability 1 - (.02 * i). If a route is skipped, the next is automatically chosen. The third, ‘mating’, method is called, which randomly generates 35 unique pairwise combinations of parents. Mating involves a random slice of indices being selected from one parent, ParentA. This slice is inserted into the ‘baby’ route directly where it is in ParentA. We then use a two-pointer method to insert the rest of the indices in the baby route in ParentB-order. These 35 ‘babies’ are combined with the 15 ‘parents’ to update the population. We then call the final ‘mutate’ method. It leaves the first three routes (the best three) unaltered, but with a .20 probability, We use the common mutation of slice reversal, where a random slice within the route is reversed and reinserted back where it was. This concludes the contents of each loop. The algorithm returns bestRoute and bestScore.

This algorithm generated more optimal routes than the commonly used 2-Approx approach to solving the TSP for 11/13 of the tested cities.
  `,

  features: [
    "Preprocessed city data using Pandas",
    "Designed genetic algorithm"
  ],

  images: [
    {
      src: "/project-images/tsp1.png",
      caption: "Results of testing"
    }
  ]
},

// PROJECT 6 //

{
  title: "Better Place Drones",

  slug: "drones",

  category: "Data / Algorithms",

  dates: "August 2024 - December 2025",

  shortDescription:
    "A multidisciplinary team competing in the XPRIZE Wildfire competition for $11 million, using autonomous drones for wildfire detection and neutralization.",

  tech: [
    "Python",
    "DroneKit"
  ],

  longDescription: `
Better Place Drones was a Vertically Integrated Project (VIP) team competing in XPRIZE Wildfire, an international competition with a prize purse of $11 Million.The goal of the competition was to design an autonomous drone system that detects and neutralizes wildfires over a 1,000 sq. km area. I was on the team for nearly two years, and for half of that time, I served as the team lead of the Path Planning subteam.

Over the course this time, I designed simulations for drone coverage using Python’s Gymnasium and DroneKit libraries, devised a see-think-act loop that powered our fire neutralization phase, and worked with the machine learning team to translate the results of their computer vision model for fire detection into drone movements. Over the course of the project, I applied various algorithms such as A*, RRT, Perlin Noise, and Voronoi Tessellations.

Our team made it to the semi-finals.
  `,

  features: [
    "Led weekly standup meetings for the Path Planning subteam",
    "Utilized a suite of algorithms",
    "Spearheaded development using the DroneKit library"
  ],

  images: [
    {
      src: "/project-images/drone1.png",
      caption: "Lawnmower pattern example"
    },
    {
      src: "/project-images/drone2.png",
      caption: "Fire detection model bounding box with confidence score"
    }
  ]
},

// PROJECT 7 //

{
  title: "SNU Yellow Pages",

  slug: "yellow-pages",

  category: "Data / Algorithms",

  dates: "Jun 2024 - October 2025",

  shortDescription:
    "A platform for alumni networking.",

  tech: [
    "Python",
    "Flask",
    "SQL",
    "Supabase",
    "React",
    "Tailwind CSS"
  ],

  longDescription: `
SNU Yellowpages is the culmination of a long-term networking project for my fraternity. What began as simple data collection on our alumni turned into an application I developed serving both current and past members with roughly 100 active monthly users.

The application uses a Flask backend using compounding SQL queries to interact with the Supabase database. The frontend is built using React with Tailwind CSS and utilizes D3.js to display certain interactive elements.

Users can search alumni based on name, graduation year, employment, current location, and undergraduate major. To perform the location search, I used a city name to coordinates API which is then factored into a formula. The name search utilizes the FuzzySearch package for approximate name matches.

Active members have found great use in the application, with multiple people each semester making connections that have led to internships.
  `,

  features: [
    "Led development of a full-stack networking platform for brothers and alumni serving 100+ active users",
  ],

  images: [
    {
      src: "/project-images/yp1.png",
      caption: "Family tree feature"
    }
  ]
}
];