import igniteCover from "../../../public/ignite_cover.png";
import igniteTwo from "../../../public/ignite_02.png";
import reactIcon from "../../../public/react.svg";
import getxLogo from "../../../public/getx_logo.png";

export const juniorDevProjectList = [
  // my fun city
  {
    id: 1,
    title: "My Fun City",
    description:
      "The MyFunCity project is a complete campaign to collect and analyze data from various target audiences via a mobile application to create a product that governments and businesses can use to track issues in people's environments and deliver ideas to help solve depression and anxiety issues. ",
    ideaDescription:
      'The project aims to bring people together in their community to identify and solve daily problems that may affect our lives. Still, because we are always busy and occupied, we need help to change our neighborhood. In those moments, one might wonder, "How can I make MY CITY better, more efficient, and more FUN?"\n' +
      "Teenagers and young adults have the potential to be the most influential participants in this project. Smartphones, mobile applications, and technology are already essential to their daily lives. MyFunCity is a wordplay that is easy to remember and repeat, and it also explains our goal with that application and will undoubtedly connect with our target audience.\n",
    features: [
      "Firebase User Authentication allows users to securely sign in using their email credentials.",
      "Data Collection: The project would utilize Firebase Firestore, a NoSQL document database.",
      "Navigation: Version 1.0 of the Flutter framework. This would allow users to navigate between different sections or features of the application seamlessly.",
      "Bottom Navigation Bar: Customized bottom navigation bar, providing easy access to critical sections or functionalities within the app.",
      "Customized App Bar: Customized using the Preferred Size widget. This would allow for a visually appealing and consistent design across different screens and provide a cohesive user experience.",
    ],
    techStack: [
      "/assets/project_images/icons_images/flutter.png",
      "/assets/project_images/icons_images/firebase.png",
      "/assets/project_images/icons_images/android_studio.png",
      "/assets/project_images/icons_images/vscode.png",
    ],
    images: [
      "/assets/project_images/myFunCity/image_cover.png",
      "/assets/project_images/myFunCity/image_1.png",

      "/assets/project_images/myFunCity/image_3.png",
    ],
    video: "/assets/project_images/myFunCity/myfuncity.mp4",
    linkTitle: "See the project. Tell me what you think!",
    projectIconVercel: "",
    linkVercel: "",
    linkGit: "https://github.com/WladimirFilho/Flutter-MyFunCity",
    projectIconGit: "/icons/git.svg",
  },

  // react music player
  {
    id: 4,
    title: "Wave Player",
    description:
      "An Elegant music player, that combines React Js, Props, Static Files and so on.",
    ideaDescription:
      "Introducing Waves Music App, your charming companion for musical bliss. Waves is not just your ordinary music player; it's a delightful web app that creates an enchanting atmosphere for your listening pleasure. Unleash the power of Chillhop as Waves taps into a curated collection of soothing tunes that will transport you to tranquillity and inspiration. From laid-back beats to soul-stirring melodies, this app serves as your gateway to the mesmerizing world of Chillhop music",
    features: [
      "User-friendly Interface: The app should have a visually appealing and intuitive interface for a smooth user experience.",
      "Music Playback Controls: Include play/pause buttons that allow users to start or pause the currently playing music.",
      "Font-awesome Icons used to complete the layout.",
      "Ability to switch between different songs in the playlist. This can be done through previous/following track buttons.",
      "Display a progress bar that indicates the current position of the playing song and allows users to seek within the track.",
      "Drawer for Music List: Create a drawer or sidebar that displays the list of songs in the playlist. Users can view and select songs from this list.",
      "Using the dependency useRef to reach the audio in the object list, and to be able to pass on the audio HTML tag.",
    ],
    techStack: [reactIcon, "/icons/font_awesome_logo.png"],

    images: [
      "/react_cover.png",
      "/react_musicplayer_03.png",
      "/react_musicplayer_01.png",
    ],

    video: "",
    linkTitle: "See the project. Tell me what you think!",
    projectIconVercel:
      "/assets/project_images/icons_images/logo-vercel-svgrepo-com.svg",
    linkVercel:
      "https://music-player-react-o38e6llek-wladimirfilho.vercel.app/",
    linkGit: "https://github.com/WladimirFilho/React-Waves-MusicPlayer",
    projectIconGit: "/icons/git.svg",
  },

  // Flutter Music Player App
  {
    id: 2,
    title: "Music Player",
    description: "",
    ideaDescription:
      "I'm currently working on a Flutter-based mobile app with a minimalist design, incorporating neomorphic elements. As a junior developer, I find certain aspects of the development process, such as modules, dependency injection, and serialization, quite challenging. However, with the help of GetX, which has been a fantastic experience, I am able to navigate through these complexities. GetX has been instrumental in managing modules, dependency injection, serialization, and many other aspects of my project. Additionally, I'm also exploring the use of the HTTP package to fetch data from an API that I created, allowing me to simulate real-world scenarios. While the pages of my app are still taking shape, each time I work on the project, it feels like diving into a new chapter of a book. This app serves as a valuable practice exercise, and I'm thrilled to be using GetX as the main package in my development journey.",
    features: [
      "Backend API Integration: Integrate backend APIs to fetch data from external sources.",
      "GetX as State Management to efficiently manage and organize the app state. The package offers reactive programming capabilities, making it easier to handle state changes and update the UI.",
      "Modular Architecture to Implement the app features using a modular architecture provided by GetX. This promotes code reusability and separation of concerns.",
      "Dependency Injection to handle the instantiation and management of dependencies within your app. This simplifies the process of managing dependencies and facilitates code organization.",
      "Favourites page that will allows users to mark and save their preferred content or data.",
      "Integrate Audio player package into the app to enable users to play audio files that will be provides by the Api.",
    ],
    techStack: [
      "/assets/project_images/icons_images/flutter.png",
      "/assets/project_images/icons_images/dart.svg",
      "/getx_logo.png",
    ],
    images: [
      "/assets/project_images/music_player/player_cover.png",
      "/assets/project_images/music_player/player_mockup1.png",
      "/assets/project_images/music_player/player_mockup2.png",
    ],
    video: "",
    linkTitle: "See the project. Tell me what you think!",
    projectIconVercel: "",
    linkVercel: "",
    linkGit:
      "https://github.com/WladimirFilho/music_player_neumorphic_flutter.git",
    projectIconGit: "/icons/git.svg",
  },

  // Ignite Blog
  {
    id: 5,
    title: "Ignite Blog",
    description:
      "A Blog that shows posts and comments. Made using React Js, CSS Modules and Vite",
    ideaDescription:
      "That is another project that helps me improve my skills and align with my studying routine. This project can combine my knowledge of React JS, with an idea that can be used in the future for a real purpose. A shout-out to the guys from RocketSeat for the tutorials. This project is not even near to being finished yet. I still have a lot to implement.",
    features: ["Vite", "React Js", "Multiple packages", "Adding new posts"],
    techStack: ["/assets/project_images/icons_images/vite.svg", reactIcon],

    images: ["/ignite_cover_1.png", "/ignite_cover.png", "/ignite_02.png"],

    projectIcon:
      "/assets/project_images/icons_images/logo-vercel-svgrepo-com.svg",
    linkTitle: "See the project. Tell me what you think!",
    link: "https://ignite-project-5tqf6clg8-wladimirfilho.vercel.app/",

    video: "",
    linkTitle: "See the project. Tell me what you think!",
    projectIconVercel:
      "/assets/project_images/icons_images/logo-vercel-svgrepo-com.svg",
    linkVercel: "https://ignite-project-5tqf6clg8-wladimirfilho.vercel.app/",
    linkGit: "https://github.com/WladimirFilho/React_Vite_IgniteBlog",
    projectIconGit: "/icons/git.svg",
  },

  // To-do List Flutter
  {
    id: 3,
    title: "To-do List",
    description: "",
    ideaDescription:
      "This is a minimalistic idea for a Flutter-based mobile app featuring a simple design with a UX/UI experience. The app aims to provide a simple to-do list with features for creating new notes, marking tasks as completed, and deleting notes. The usage of Hive ensures that the app can store and retrieve data locally on the user's device.",
    features: [
      "New notes: Users can create and add new notes to the app. This feature allows users to input text and save it as a new note.",

      "CheckBox for concluding tasks: Each note or task in the app has a checkbox associated with it. Users can mark the checkbox to indicate that a particular task has been concluded or completed.",

      "Delete notes using the slider: The app includes a slider or swipe gesture that allows users to delete notes. By swiping on a note, users can delete it from the app.",

      "Hive as local storage: The app utilizes Hive as a dependency for local storage. Hive is a lightweight and efficient NoSQL database solution for Flutter, enabling you to store and retrieve data on the device.",
    ],
    techStack: [
      "/assets/project_images/icons_images/dart.svg",
      "/assets/project_images/icons_images/flutter.png",
      "/assets/project_images/icons_images/vscode.png",
      "/assets/project_images/icons_images/hive.png",
    ],
    images: [
      "/assets/project_images/todo/todo_cover.png",
      "/assets/project_images/todo/todo.mockup.png",
    ],
    video: "/assets/project_images/todo/todo_video_1.mp4",
    linkTitle: "See the project. Tell me what you think!",
    projectIconVercel: "",
    linkVercel: "",
    linkGit: "https://github.com/WladimirFilho/Flutter-TodoList.git",
    projectIconGit: "/icons/git.svg",
  },

  // To-do Java Web App
  {
    id: 6,
    title: "Web - Todo List",
    description: "",
    ideaDescription:
      "The web app you developed is a simple note-taking application built using JavaScript (vanilla), HTML, and CSS. It provides users with a convenient way to create and manage their notes. The app leverages local web storage, allowing users to retain their notes even after reloading the webpage. With its minimalist design and user-friendly interface, this app offers a seamless note-taking experience.",
    features: [
      "New notes can easily create new notes by inputting text into the app. The interface provides a space to enter and save the contents of each note.",
      "Check complete notes clicking the checkbox, allowing users to mark notes as completed or finished. This feature helps users keep track of their tasks and quickly identify which notes have been addressed.",
      "Delete single notes if users no longer need a particular note. They can delete it individually.",
      "Delete all notes is also an option. Besides deleting individual notes, the app provides a feature to delete all notes simultaneously.",
      "Local web storage. The app utilizes local web storage to store the notes locally on the user's computer. This means that even if the webpage is reloaded or the browser is closed and reopened, the notes will persist, ensuring that users don't lose their data.",
    ],
    techStack: [
      "/icons/html-5-logo-svgrepo-com.png",
      "/icons/css-3-svgrepo-com.png",
      "/icons/javascript-svgrepo-com.png",
    ],

    images: ["/todo_web_javascript_cover.png", "/todo_cover.png"],

    projectIcon:
      "/assets/project_images/icons_images/logo-vercel-svgrepo-com.svg",
    linkTitle: "See the project. Tell me what you think!",
    link: "https://ignite-project-5tqf6clg8-wladimirfilho.vercel.app/",

    video: "",
    linkTitle: "See the project. Tell me what you think!",
    projectIconVercel:
      "/assets/project_images/icons_images/logo-vercel-svgrepo-com.svg",
    linkVercel: "https://javascript-todo-list-psi.vercel.app/",
    linkGit: "https://github.com/WladimirFilho/HTML-CSS-JavaScript-todo-list",
    projectIconGit: "/icons/git.svg",
  },

  // Flutter Instagram
  {
    id: 7,
    title: "Instagram UI Clone",
    description: "",
    ideaDescription:
      "A well know mobile app such as the instagram app come as an amazing exercise to work with the Flutter UI possibilities. Building this project was a pleasure",
    features: [
      "Bubble stories: When you click in the bubbles, that takes you to the story page. That page has a Clickable onPress for each side of the screen. That allows the user to navigate forwards or backwards on each story post.",
      "Feed Reel: The widgets have an encapsulated code that allows implementation of a possible dynamic database in the future.",
      "TikTok ¬Post: The video section also has a navigability option to swipe up and down.",
      "Favorites: Heart button on TikTok post.",
    ],
    techStack: ["/assets/project_images/icons_images/flutter.png"],

    images: [
      "/assets/project_images/instagram /instagram_03.png",
      "/assets/project_images/instagram /instagram_01.png",
      "/assets/project_images/instagram /intagram_01.png",
    ],

    projectIcon:
      "/assets/project_images/icons_images/logo-vercel-svgrepo-com.svg",
    linkTitle: "See the project. Tell me what you think!",
    link: "https://ignite-project-5tqf6clg8-wladimirfilho.vercel.app/",

    video: "/assets/project_images/instagram /instagram_cover.mp4",
    linkTitle: "See the project. Tell me what you think!",
    projectIconVercel: "",
    linkVercel: "",
    linkGit: "https://github.com/WladimirFilho/Flutter-Instagram-Clone-UI",
    projectIconGit: "/icons/git.svg",
  },
];

////////////////////////////////////////////////////////////////////////

export const designerProjectList = [
  // BR Mania
  {
    id: 1,
    title: "BR Mania, Service station",
    description: "",
    ideaDescription:
      "BR Mania, one of the largest 24-hour petrol station networks in Brazil, launched a campaign with the slogan - Everyone meets inside BR Mania -.  The campaign was inspired by the concept that all aspects of an individual's personality can converge within the various locations of BR Mania throughout the day. The central idea behind the campaign revolved around the notion that BR Mania serves as more than just a petrol station. Whether it is the early risers stopping by for a fresh cup of coffee, professionals catching a quick snack during their lunch break, or night owls fueling up for their late-night adventures, BR Mania caters to the diverse needs and moods of its customers at any hour.",

    features: [
      "Designing and Brainstorm",
      "Art Direction planning",
      "Photoshop Image composing",
      "Illustrator Design and vector manipulation",
      "Indesign layouts",
    ],
    techStack: [
      "/assets/project_images/icons_images/ai.png",
      "/assets/project_images/icons_images/ps.png",
      "/assets/project_images/icons_images/id.png",
    ],
    images: [
      "/assets/project_images/br_mania/1.png",
      "/assets/project_images/br_mania/2.jpg",
    ],

    video: "",
    linkTitle: "See the project on behance.",
    projectIconVercel: "",
    linkVercel: "",
    linkGit: "https://www.behance.net/gallery/66127745/BR-Mania",
    projectIconGit: "/icons/behance.svg",
  },

  // It is Painting a New subway
  {
    id: 2,
    title: "It is Painting a New subway",
    description:
      "The public transportation of São Paulo, Brazil, is hosting a cultural competition campaign. The" +
      ' expression "Painting a new subway" in portuguese, suggests that "a new idea is coming".',
    ideaDescription:
      "The call for participation invites individuals to submit their creative graphic proposals for" +
      " the purpose of painting the new carriages. A distinguished committee, consisting of acclaimed artists well-versed in the field, will meticulously assess the submissions. Out of the pool of imaginative ideas, the committee will carefully select a standout concept that demonstrates exceptional artistic merit and aligns with the vision of the project. The chosen proposal will not only be rewarded with a prestigious prize but also enjoy substantial exposure that extends far beyond traditional advertising channels. The commendable work will naturally generate buzz and enthusiasm through word-of-mouth, igniting conversations among art enthusiasts, commuters, and the general public. This organic, grassroots promotion will serve as a testament to the brilliance of the selected idea, fostering intrigue and anticipation for the forthcoming implementation of the artwork on the new carriages.",
    features: [
      "Designing and Brainstorm",
      "Art Direction planning",
      "Photoshop Image composing",
      "Illustrator Design and vector manipulation",
      "Indesign layouts",
    ],
    techStack: [
      "/assets/project_images/icons_images/ai.png",
      "/assets/project_images/icons_images/ps.png",
      "/assets/project_images/icons_images/id.png",
    ],
    images: [
      "/assets/project_images/metro/1.png",
      "/assets/project_images/metro/2.png",
      "/assets/project_images/metro/3.png",
      "/assets/project_images/metro/4.png",
    ],

    video: "",
    linkTitle: "See the project on behance.",
    projectIconVercel: "",
    linkVercel: "",
    linkGit:
      "https://www.behance.net/gallery/65979183/It-is-panting-a-new-subway-Ta-pintando-um-novo-metro",
    projectIconGit: "/icons/behance.svg",
  },

  // Santa Rita
  {
    id: 3,
    title: "Santa Rita Movies Production",
    description:
      "The design project entails creating a comprehensive stationary pack, which encompasses various elements such as a logo guideline, business card, brochure, and more.",
    ideaDescription:
      "The design project involves developing an extensive stationary pack that encompasses a range" +
      " of essential branding materials. These materials not only establish a consistent visual identity but also" +
      " serve as powerful marketing tools for businesses. The pack typically includes a variety of items, such as:" +
      " Logo Guideline, Business Card, Letterhead, Envelopes, Notepads, Email signatures, Product Brochures and more.",
    features: [
      "Stationary production and printing",
      "Art Direction",
      "Photoshop Image composing",
      "Illustrator Design and vector manipulation",
      "Contact with printing companiesDelivery",
    ],
    techStack: [
      "/assets/project_images/icons_images/ai.png",
      "/assets/project_images/icons_images/ps.png",
      "/assets/project_images/icons_images/id.png",
    ],
    images: [
      "/assets/project_images/santa_rita/1.png",
      "/assets/project_images/santa_rita/2.png",
      "/assets/project_images/santa_rita/3.png",
      "/assets/project_images/santa_rita/4.png",
      "/assets/project_images/santa_rita/5.png",
    ],
    video: "",
    linkTitle: "See the project on behance.",
    projectIconVercel: "",
    linkVercel: "",
    linkGit: "https://www.behance.net/gallery/65991053/Business-stationery",
    projectIconGit: "/icons/behance.svg",
  },

  // Sao Paulo Country Parade
  {
    id: 4,
    title: "Sao Paulo Country Parade",
    description:
      'The "Festa de Peão," which translates to Cowboy Party, is a lively Brazilian event centered around a country theme. It offers attendees the opportunity to indulge in traditional cuisine and immerse themselves in the vibrant sounds of typical music.',
    ideaDescription:
      "he lively and spirited CowParty event not only promises a thrilling experience filled with" +
      " traditional food and vibrant music but also places a strong emphasis on safety and responsible driving." +
      " Recognizing the need to educate attendees about potential risks and their responsibilities, a comprehensive" +
      ' campaign was launched in conjunction with the festivities. With the slogan "In the CowParty, accidents are' +
      ' nonexistent," the campaign seeks to instill a sense of awareness and caution among drivers attending the' +
      " event. By incorporating themed phrases on belt buckles, a fashion-forward approach was adopted to deliver" +
      " the safety message in a creative and visually impactful manner. The belt buckles, adorned with phrases" +
      " relevant to the CowParty theme, serve as eye-catching accessories that spark conversations and draw" +
      ' attention to the importance of responsible driving. Whether it\'s "Ride Safe in the Wild West" or "Keep the' +
      " Trails Accident-Free,\" each phrase encapsulates the campaign's core message while embracing the spirit of the event. The campaign aims to create a lasting impression on attendees, reminding them to exercise caution, follow traffic rules, and prioritize safety during their journey to and from the CowParty. By coupling the festive atmosphere with a strong safety message, the event organizers hope to foster a culture of responsible driving, ensuring that participants can enjoy the celebration without compromising their well-being or that of others. Through this integrated approach of blending entertainment, cultural festivities, and safety advocacy, the CowParty campaign demonstrates a commitment to providing a wholesome and secure experience for all attendees. By raising awareness, encouraging responsible behavior, and engaging participants with innovative messaging, the event organizers strive to make the CowParty not only an unforgettable celebration but also a platform for promoting a culture of safety and well-being on the roads.",
    features: [],
    techStack: [
      "/assets/project_images/icons_images/ai.png",
      "/assets/project_images/icons_images/ps.png",
      "/assets/project_images/icons_images/id.png",
    ],
    images: [
      "/assets/project_images/peao/1.png",
      "/assets/project_images/peao/5.png",
      "/assets/project_images/peao/4.png",
      "/assets/project_images/peao/2.png",
      "/assets/project_images/peao/3.png",
    ],
    projectIcon: "/icons/behance.svg",
    linkTitle: "See the project on behance",
    link: "https://www.behance.net/gallery/65898065/Country-Party",

    video: "",
    linkTitle: "See the project on behance.",
    projectIconVercel: "",
    linkVercel: "",
    linkGit: "https://www.behance.net/gallery/65898065/Country-Party",
    projectIconGit: "/icons/behance.svg",
  },

  // e-Club Vacation
  {
    id: 5,
    title: "e-Club Vacation care",
    description:
      "e-Club is an innovative online entertainment center designed exclusively for children. It functions as a virtual school that provides educational support, engaging lessons, and stimulating activities, ensuring that kids are occupied and entertained while their parents attend to their responsibilities.",
    ideaDescription:
      "At e-Club, children can delve into a variety of subjects and topics, exploring a diverse range" +
      " of lessons that are designed to be engaging, age-appropriate, and aligned with educational standards. Through interactive multimedia content, intuitive learning tools, and personalized guidance, kids can absorb knowledge, develop new skills, and foster a love for learning. Moreover, e-Club recognizes the importance of a balanced approach to education and offers an array of stimulating activities and playtime opportunities. These activities are thoughtfully curated to be both educational and entertaining, promoting creativity, critical thinking, and social development. Whether it's engaging in virtual group projects, participating in interactive games, or exploring virtual worlds, children can embark on exciting adventures and build connections with their peers in a safe and supervised online environment.",
    features: [
      "Web page design",
      "Instagram post design",
      "Art Direction",
      "Photoshop Image composing",
      "Illustrator Design and vector manipulation",
      "Contact with printing companiesDelivery",
    ],
    techStack: [
      "/assets/project_images/icons_images/ai.png",
      "/assets/project_images/icons_images/ps.png",
      "/assets/project_images/icons_images/id.png",
    ],
    images: [
      "/assets/project_images/e-club/02.png",
      "/assets/project_images/e-club/03.png",
      "/assets/project_images/e-club/04.png",
      "/assets/project_images/e-club/05.png",
      "/assets/project_images/e-club/07.png",
    ],
    video: "",
    linkTitle: "See the project on behance.",
    projectIconVercel: "",
    linkVercel: "",
    linkGit: "https://www.behance.net/gallery/171685117/e-Club-vacation-care?",
    projectIconGit: "/icons/behance.svg",
  },

  // Art on Site
  {
    id: 6,
    title: "Art on Site",
    description:
      '"Arte na obra" that stands for "Art on Site" was an integral component of the larger campaign' +
      ' "Painting a New Subway, offering participants the opportunity to submit their design ideas for' +
      " consideration. The project specifically focuses on selecting winning designs to be painted on the protective barriers surrounding the new train stations throughout the city.",
    ideaDescription:
      'Art on Site is a captivating project that forms an essential part of the larger "Painting a' +
      ' New Subway" campaign. It provides a unique platform for talented individuals to showcase their artistic' +
      " prowess and have their creative visions come to life in the city's train stations. By inviting participants" +
      " to submit their design ideas, Art on Site opens up a world of possibilities, transforming the protective barriers surrounding the new train stations into vibrant and visually striking artworks. The project serves as a celebration of artistic expression, bringing together artists, designers, and visionaries to contribute their unique perspectives to the urban landscape. Through this initiative, the train stations become not just functional spaces but also immersive artistic experiences, where commuters and passersby are greeted by captivating visuals that reflect the rich diversity and creative spirit of the community. The selection process is a testament to the campaign's commitment to excellence and innovation. A panel of esteemed judges carefully evaluates the submitted designs, considering their artistic merit, relevance to the campaign theme, and ability to engage and inspire viewers. The chosen designs will be awarded the prestigious opportunity to have their ideas transformed into stunning murals, adorning the protective barriers around the train stations. ",
    features: [
      "Web page design",
      "Art Direction",
      "Photoshop Image composing",
      "Illustrator Design and vector manipulation",
      "Contact with printing companiesDelivery",
    ],
    techStack: [
      "/assets/project_images/icons_images/ai.png",
      "/assets/project_images/icons_images/ps.png",
      "/assets/project_images/icons_images/id.png",
    ],
    images: [
      "/assets/project_images/art_na_obra/1.png",
      "/assets/project_images/art_na_obra/2.png",
      "/assets/project_images/art_na_obra/3.png",
      "/assets/project_images/art_na_obra/4.png",
    ],
    video: "",
    linkTitle: "See the project on behance.",
    projectIconVercel: "",
    linkVercel: "",
    linkGit:
      "https://www.behance.net/gallery/65932555/Arte-de-Obra-Art-at-the-site",
    projectIconGit: "/icons/behance.svg",
  },
];
