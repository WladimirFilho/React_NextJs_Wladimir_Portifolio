import igniteCover from "../../../public/ignite_cover.png";
import igniteTwo from "../../../public/ignite_02.png";
import reactIcon from "../../../public/react.svg";
import getxLogo from "../../../public/getx_logo.png";

export const juniorDevProjectList = [
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
      "/assets/project_images/myFunCity/image_2.png",
      "/assets/project_images/myFunCity/image_3.png",
    ],
    projectIcon: "/icons/git.svg",
    linkTitle: "See the code. Tell me what you think!",
    link: "https://github.com/WladimirFilho/MyFunCity.git",
  },
  {
    id: 2,
    title: "Music Player",
    description:
      "The homepage of the music player layout exhibits a Neumorphic design. This application is currently under development.",
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
    projectIcon: "/icons/git.svg",
    linkTitle: "See the code. Tell me what you think!",
    link: "https://github.com/WladimirFilho/music_player_neumorphic_flutter.git",
  },
  {
    id: 3,
    title: "Todo List",
    description:
      "A simple Todo list. Internat Storage using Hive as dependency",
    ideaDescription:
      "This is a minimalistic idea for a Flutter-based mobile app featuring a neomorphic design." +
      " The project is currently in the development stage and serves as a practice exercise.",
    features: [
      "New notes",
      "CheckBox for conclude task",
      "Delete notes using the slider",
      "Hive as local storage",
    ],
    techStack: [
      "/assets/project_images/icons_images/dart.svg",
      "/assets/project_images/icons_images/flutter.png",
      "/assets/project_images/icons_images/vscode.png",
      "/assets/project_images/icons_images/hive.png",
    ],
    images: [
      "/assets/project_images/todo/todo_cover.png",
      "/assets/project_images/todo/todo.mockup2.png",
      "/assets/project_images/todo/todo.mockup.png",
    ],
    projectIcon: "/icons/git.svg",
    linkTitle: "See the code. Tell me what you think!",
    link: "https://github.com/WladimirFilho/Flutter-TodoList.git",
  },

  {
    id: 4,
    title: "Music player",
    description:
      "An Elegant music player, that combines React Js, Props, Static Files and so on.",
    ideaDescription:
      "Introducing Waves Music App, your charming companion for musical bliss. Waves is not just your ordinary music player; it's a delightful web app that creates an enchanting atmosphere for your listening pleasure. Unleash the power of Chillhop as Waves taps into a curated collection of soothing tunes that will transport you to tranquillity and inspiration. From laid-back beats to soul-stirring melodies, this app serves as your gateway to the mesmerizing world of Chillhop music",
    features: [
      "User-friendly Interface: The app should have a visually appealing and intuitive interface for a smooth user experience.",
      "Music Playback Controls: Include play/pause buttons that allow users to start or pause the currently playing music.",
      "Fontawesome Icons used to complete the layout.",
      "Ability to switch between different songs in the playlist. This can be done through previous/following track buttons.",
      "Display a progress bar that indicates the current position of the playing song and allows users to seek within the track.",
      "Drawer for Music List: Create a drawer or sidebar that displays the list of songs in the playlist. Users can view and select songs from this list.",
      "Using the dependency useRef to reach the audio in the object list, and to be able to pass on the audio HTML tag.",
    ],
    techStack: [reactIcon, "/icons/font_awesome_logo.png"],

    images: [
      "/react_cover.png",
      "/react_musicplayer_01.png",
      "/react_musicplayer_02.png",
      "/react_musicplayer_03.png",
    ],

    projectIcon:
      "/assets/project_images/icons_images/logo-vercel-svgrepo-com.svg",

    linkTitle: "See the project. Tell me what you think!",
    link: "https://vercel.com/wladimirfilho/music-player-react",
  },
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
  },
  {
    id: 6,
    title: "Online Todo List",
    description: "",
    ideaDescription: "",
    features: [""],
    techStack: [
      "/icons/html-5-logo-svgrepo-com.png",
      "/icons/css-3-svgrepo-com.png",
      "/icons/javascript-svgrepo-com.png",
    ],

    images: ["/todo_cover.png"],

    projectIcon:
      "/assets/project_images/icons_images/logo-vercel-svgrepo-com.svg",
    linkTitle: "See the project. Tell me what you think!",
    link: "https://ignite-project-5tqf6clg8-wladimirfilho.vercel.app/",
  },
];

////////////////////////////////////////////////////////////////////////

export const designerProjectList = [
  {
    id: 1,
    title: "BR Mania, Service station",
    description:
      "- BR Mania, one of the largest 24-hour petrol station networks in Brazil, launched a campaign with" +
      ' the slogan "Everyone meets inside BR Mania." The campaign was inspired by the concept that all aspects of an individual\'s personality can converge within the various locations of BR Mania throughout the day.',
    ideaDescription:
      "- The central idea behind the campaign revolved around the notion that BR Mania serves as more" +
      " than just a petrol station. It is a bustling hub where different aspects of a person's character and preferences seamlessly come together. Whether it's the early risers stopping by for a fresh cup of coffee, professionals catching a quick snack during their lunch break, or night owls fueling up for their late-night adventures, BR Mania caters to the diverse needs and moods of its customers at any hour. The campaign sought to capture the essence of this dynamic environment through creative visuals, captivating slogans, and relatable narratives. Each advertisement showcased various characters representing different personality traits, demonstrating how BR Mania accommodates everyone within its welcoming atmosphere. From the energetic and ambitious to the laid-back and contemplative, the campaign emphasized that every individual can find a place to connect and feel at home inside BR Mania.",

    features: [],
    techStack: [
      "/assets/project_images/icons_images/ai.png",
      "/assets/project_images/icons_images/ps.png",
      "/assets/project_images/icons_images/id.png",
    ],
    images: [
      "/assets/project_images/br_mania/1.png",
      "/assets/project_images/br_mania/2.jpg",
    ],
    projectIcon: "/icons/behance.svg",
    linkTitle: "See the project on behance",
    link: "https://www.behance.net/gallery/66127745/BR-Mania",
  },
  {
    id: 2,
    title: "It is Painting a New subway",
    description:
      "The public transportation of São Paulo, Brazil, is hosting a cultural competition campaign. The" +
      ' expression "Painting a new subway" in portuguese, suggests that "a new idea is coming".',
    ideaDescription:
      "The call for participation invites individuals to submit their creative graphic proposals for" +
      " the purpose of painting the new carriages. A distinguished committee, consisting of acclaimed artists well-versed in the field, will meticulously assess the submissions. Out of the pool of imaginative ideas, the committee will carefully select a standout concept that demonstrates exceptional artistic merit and aligns with the vision of the project. The chosen proposal will not only be rewarded with a prestigious prize but also enjoy substantial exposure that extends far beyond traditional advertising channels. The commendable work will naturally generate buzz and enthusiasm through word-of-mouth, igniting conversations among art enthusiasts, commuters, and the general public. This organic, grassroots promotion will serve as a testament to the brilliance of the selected idea, fostering intrigue and anticipation for the forthcoming implementation of the artwork on the new carriages.",
    features: [],
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
    projectIcon: "/icons/behance.svg",
    linkTitle: "See the project on behance",
    link: "https://www.behance.net/gallery/65979183/It-is-panting-a-new-subway-Ta-pintando-um-novo-metro",
  },
  {
    id: 3,
    title: "Santa Rita Movies",
    description:
      "The design project entails creating a comprehensive stationary pack, which encompasses various elements such as a logo guideline, business card, brochure, and more.",
    ideaDescription:
      "The design project involves developing an extensive stationary pack that encompasses a range" +
      " of essential branding materials. These materials not only establish a consistent visual identity but also" +
      " serve as powerful marketing tools for businesses. The pack typically includes a variety of items, such as:" +
      " Logo Guideline, Business Card, Letterhead, Envelopes, Notepads, Email signatures, Product Brochures and more.",
    features: [],
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
    projectIcon: "/icons/behance.svg",
    linkTitle: "See the project on behance",
    link: "https://www.behance.net/gallery/65991053/Business-stationery",
  },
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
  },
  {
    id: 5,
    title: "e-Club Vacation care",
    description:
      "e-Club is an innovative online entertainment center designed exclusively for children. It functions as a virtual school that provides educational support, engaging lessons, and stimulating activities, ensuring that kids are occupied and entertained while their parents attend to their responsibilities.",
    ideaDescription:
      "At e-Club, children can delve into a variety of subjects and topics, exploring a diverse range" +
      " of lessons that are designed to be engaging, age-appropriate, and aligned with educational standards. Through interactive multimedia content, intuitive learning tools, and personalized guidance, kids can absorb knowledge, develop new skills, and foster a love for learning. Moreover, e-Club recognizes the importance of a balanced approach to education and offers an array of stimulating activities and playtime opportunities. These activities are thoughtfully curated to be both educational and entertaining, promoting creativity, critical thinking, and social development. Whether it's engaging in virtual group projects, participating in interactive games, or exploring virtual worlds, children can embark on exciting adventures and build connections with their peers in a safe and supervised online environment.",
    features: [],
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
    projectIcon: "/icons/behance.svg",
    linkTitle: "See the project on behance",
    link: "https://www.behance.net/gallery/171685117/e-Club-vacation-care?",
  },
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
    features: [],
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
    projectIcon: "/icons/behance.svg",
    linkTitle: "See the project on behance",
    link: "https://www.behance.net/gallery/65932555/Arte-de-Obra-Art-at-the-site",
  },
];
