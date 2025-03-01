export const projects = [
  {
    id: 0,
    name: 'FormsGPT',
    description: 'Fill out forms with the help of an AI assistant',
    type: 'Web App',
    categories: ['Web', 'AI'],
    url: 'https://github.com/bernardoarodrigues/FormsGPT',
    logo: 'https://firebasestorage.googleapis.com/v0/b/bernardo-portfolio.firebasestorage.app/o/projects%2Fformsgpt%2Fformsgpt-logo.png?alt=media&token=7d04f913-bbfa-4ce8-ae54-f2a538c174a3https://firebasestorage.googleapis.com/v0/b/bernardo-portfolio.firebasestorage.app/o/projects%2Fformsgpt%2Fformsgpt-logo.png?alt=media&token=cb943c3b-bbb4-4ae6-bb49-37966ca84d22',
    galleryCols: [[0,2],[2,4]],
    galleryBg: 'black',
    gallery: [
      {
        'type': 'video',
        'width': 'col-span-3',
        'url': 'https://youtu.be/WtXgcRbDnfU',
        'thumb': 'https://firebasestorage.googleapis.com/v0/b/bernardo-portfolio.firebasestorage.app/o/projects%2Fformsgpt%2FFormsGPT%20-%20Thumb.png?alt=media&token=b78bfa54-8258-4e93-a3f5-a95dc0c56760'
      },
      {
        'type': 'image',
        'width': 'col-span-1',
        'url': 'https://firebasestorage.googleapis.com/v0/b/bernardo-portfolio.firebasestorage.app/o/projects%2Fformsgpt%2Fformsgpt-2.png?alt=media&token=30e8f17e-22d6-4604-b4c5-a6c5834bec83'
      },
      {
        'type': 'image',
        'width': 'col-span-2',
        'url': 'https://firebasestorage.googleapis.com/v0/b/bernardo-portfolio.firebasestorage.app/o/projects%2Fformsgpt%2Fformsgpt-3.png?alt=media&token=10d3b0eb-3669-4cca-93fc-770a6431a9d1'
      },
      {
        'type': 'image',
        'width': 'col-span-2',
        'url': 'https://firebasestorage.googleapis.com/v0/b/bernardo-portfolio.firebasestorage.app/o/projects%2Fformsgpt%2Fformsgpt-4.png?alt=media&token=98c9aaba-2642-4f1e-a453-1313ed6fca2b'
      },
    ],
    about: `FormsGPT is a web app that leverages LLM models to autonomously parse and fill out pdf forms, based on information provided by the user.
The app initially parses a PDF file, extracting its text, images of its pages, and form fields. Then, it creates a JSON describing each field (name, data type, format, etc). Afterwards, the LLM dialogs with the user to find out values for each field. Finally, it creates a JSON with the provided information and fills out the initial PDF if it can be digitally annotated.`,
    stats: [['Multimodal', 'AI model integration'], ['Web GPU', 'hardware acceleration'], ['Kokoro 82M', 'text-to-speech model']],
    technologies: ['React', 'Typescript', 'Javascript', 'Vite', 'Tailwind', 'OpenAI API']
  },
  {
    id: 1,
    name: 'Reported: Against Violence',
    description: 'Report cases of sexual violence anonymously',
    type: 'Mobile App',
    categories: ['Mobile'],
    url: 'https://bit.ly/reportedapp',
    logo: 'https://firebasestorage.googleapis.com/v0/b/bernardo-portfolio.firebasestorage.app/o/projects%2Freported%2Freportedicon.png?alt=media&token=982af37b-ea9c-43e6-92d8-a128de3b6426',
    galleryCols: [[0,4],[4,8]],
    galleryBg: 'https://firebasestorage.googleapis.com/v0/b/bernardo-portfolio.firebasestorage.app/o/projects%2Freported%2FBackground-Reported.png?alt=media&token=04ede2fe-459c-47ba-9387-74848ac0948b',
    gallery: [
      {
        'type': 'video',
        'width': 'col-span-1',
        'url': 'https://youtube.com/shorts/cAi3yH8S9fs',
        'thumb': 'https://firebasestorage.googleapis.com/v0/b/bernardo-portfolio.firebasestorage.app/o/projects%2Freported%2FImage%202-16-25%20at%2012.18%E2%80%AFAM.jpeg?alt=media&token=6231c6c7-8135-4d9e-8ca9-236080cf9511'
      },
      {
        'type': 'image',
        'width': 'col-span-1',
        'url': 'https://firebasestorage.googleapis.com/v0/b/bernardo-portfolio.firebasestorage.app/o/projects%2Freported%2FGroup%201.png?alt=media&token=0eca21dd-3ae2-44df-958b-ce01a5ef8299'
      },
      {
        'type': 'image',
        'width': 'col-span-1',
        'url': 'https://firebasestorage.googleapis.com/v0/b/bernardo-portfolio.firebasestorage.app/o/projects%2Freported%2FGroup%202.png?alt=media&token=26722134-bc1e-4e70-9f8e-0d32ab4ba841'
      },
      {
        'type': 'image',
        'width': 'col-span-1',
        'url': 'https://firebasestorage.googleapis.com/v0/b/bernardo-portfolio.firebasestorage.app/o/projects%2Freported%2FGroup%203.png?alt=media&token=be1a28a0-0fe4-4b0a-b754-2d47b06f6178'
      },
      {
        'type': 'image',
        'width': 'col-span-1',
        'url': 'https://firebasestorage.googleapis.com/v0/b/bernardo-portfolio.firebasestorage.app/o/projects%2Freported%2FGroup%204.png?alt=media&token=7483500c-bb45-44fe-ad86-6d296360e8ba'
      },
      {
        'type': 'image',
        'width': 'col-span-1',
        'url': 'https://firebasestorage.googleapis.com/v0/b/bernardo-portfolio.firebasestorage.app/o/projects%2Freported%2FGroup%205.png?alt=media&token=cdd57312-d9e8-4aa9-b921-3cf73c65adb5'
      },
      {
        'type': 'image',
        'width': 'col-span-1',
        'url': 'https://firebasestorage.googleapis.com/v0/b/bernardo-portfolio.firebasestorage.app/o/projects%2Freported%2FGroup%206.png?alt=media&token=68a866da-9276-482b-918a-3a3e0751ffa7',
      },
      {
        'type': 'image',
        'width': 'col-span-1',
        'url': 'https://firebasestorage.googleapis.com/v0/b/bernardo-portfolio.firebasestorage.app/o/projects%2Freported%2FGroup%207.png?alt=media&token=9a47ea2c-20f4-4fa6-8612-ff2c6c61c88f'
      },
    ],
    about: `Reported is an iOS application where users can: anonymously report cases of sexual violence; find relevant information about prevention and awareness; and get help from nearby therapists, lawyers, and hotlines.
    By exploring reports shared by other users and engaging in meaningful discussions, users can build a sense of solidarity and contribute to the collective effort to combat sexual violence.`,
    stats: [['Hybrid App', 'iOS/Android support'], ['Real-time', 'data and analytics'], ['20,000+', 'views on social media']],
    technologies: ['React Native', 'Expo', 'Firebase', 'Typescript', 'Figma']
  },
  {
    id: 2,
    name: 'Teenager Works',
    description: 'Find local job offers and connect with companies',
    type: 'Mobile App',
    categories: ['Mobile'],
    url: 'https://bit.ly/jovemtrabalha',
    logo: 'https://firebasestorage.googleapis.com/v0/b/bernardo-portfolio.firebasestorage.app/o/projects%2Fteenagerworks%2Fteenagerworks-logo.png?alt=media&token=39d45629-f0b3-46cb-8714-b4439d7874fb',
    galleryCols: [[0,2],[2,6]],
    galleryBg: 'https://firebasestorage.googleapis.com/v0/b/bernardo-portfolio.firebasestorage.app/o/projects%2Fteenagerworks%2FBackground.png?alt=media&token=5b6bbb45-4e90-4b01-b4a1-8d661ba4af10',
    gallery: [
      {
        'type': 'video',
        'width': 'col-span-3',
        'url': 'https://youtu.be/HON8Y3_fqh8',
        'thumb': 'https://firebasestorage.googleapis.com/v0/b/bernardo-portfolio.firebasestorage.app/o/projects%2Fteenagerworks%2FJovem%20Trabalha%20-%20Thumb.png?alt=media&token=e17e89e8-d30c-4f83-998e-31187aa5d73d'
      },
      {
        'type': 'image',
        'width': 'col-span-1',
        'url': 'https://firebasestorage.googleapis.com/v0/b/bernardo-portfolio.firebasestorage.app/o/projects%2Fteenagerworks%2F1.png?alt=media&token=aa5e87f3-10d1-461d-892b-5a1951ec7940'
      },
      {
        'type': 'image',
        'width': 'col-span-1',
        'url': 'https://firebasestorage.googleapis.com/v0/b/bernardo-portfolio.firebasestorage.app/o/projects%2Fteenagerworks%2F2.png?alt=media&token=e17e7822-f66f-496f-8904-dd64066c0211'
      },
      {
        'type': 'image',
        'width': 'col-span-1',
        'url': 'https://firebasestorage.googleapis.com/v0/b/bernardo-portfolio.firebasestorage.app/o/projects%2Fteenagerworks%2F3.png?alt=media&token=70115a4b-9fcc-446a-9652-300fa8fc779e'
      },
      {
        'type': 'image',
        'width': 'col-span-1',
        'url': 'https://firebasestorage.googleapis.com/v0/b/bernardo-portfolio.firebasestorage.app/o/projects%2Fteenagerworks%2F4.png?alt=media&token=27f70002-b2e6-4d46-bd46-8538b3f7a4bb',
      },
      {
        'type': 'image',
        'width': 'col-span-1',
        'url': 'https://firebasestorage.googleapis.com/v0/b/bernardo-portfolio.firebasestorage.app/o/projects%2Fteenagerworks%2F5.png?alt=media&token=351bb003-8e6b-4031-b00a-e3a215ba8edd'
      },
    ],
    about: `Teenager Works is an Android app created to help Brazilian teenagers find local job offers. Users provide basic information, such as name, a short biography, contact, and their resume. Employers can create an account for their companies and manage offers.
For ease of use, the app implements Google OAuth to collect users' emails. Regarding security concerns, Firebase App Check ensures that only clients using the app have access to the database. It allows for geolocation-based queries, where recommended companies in the main feed are limited to a certain region and users can filter search queries by distance. Also, the app uses push notifications so users continue interacting with the app. `,
    stats: [['6,000', 'app downloads'], ['Native SDK', 'Android development'], ['Cloud Storage', 'of photos and docs']],
    technologies: ['Java', 'Firebase', 'Figma']
  },
  {
    id: 3,
    name: 'Simple To-do',
    description: 'Organize your tasks with a simple to-do list',
    type: 'Web App',
    categories: ['Web'],
    url: 'https://github.com/bernardoarodrigues/SimpleTodo',
    logo: 'https://firebasestorage.googleapis.com/v0/b/bernardo-portfolio.firebasestorage.app/o/projects%2Fsimple-todo%2FSimpleTodo-logo.png?alt=media&token=93d0d6a5-25ac-4f4e-864c-81ccf8552b24https://firebasestorage.googleapis.com/v0/b/bernardo-portfolio.firebasestorage.app/o/projects%2Fsimple-todo%2FSimpleTodo-logo.png?alt=media&token=db6b2dca-e480-4522-9952-040e451c1424',
    galleryCols: [[0,2],[2,4]],
    galleryBg: '#6371F0',
    gallery: [
      {
        'type': 'video',
        'width': 'col-span-3',
        'thumb': 'https://firebasestorage.googleapis.com/v0/b/bernardo-portfolio.firebasestorage.app/o/projects%2Fsimple-todo%2FSImpleTodo%20-%20Thumb.png?alt=media&token=2cf9599e-45fc-45e2-adee-4026c6df1779',
        'url': 'https://youtu.be/6XHiYeaPmoI'
      },
      {
        'type': 'image',
        'width': 'col-span-1',
        'url': 'https://firebasestorage.googleapis.com/v0/b/bernardo-portfolio.firebasestorage.app/o/projects%2Fsimple-todo%2Fsimpletodo-2.png?alt=media&token=074ae8f0-1d24-430c-90a4-28e13577b9f9'
      },
      {
        'type': 'image',
        'width': 'col-span-2',
        'url': 'https://firebasestorage.googleapis.com/v0/b/bernardo-portfolio.firebasestorage.app/o/projects%2Fsimple-todo%2Fsimpletodo-3.png?alt=media&token=6b3e3121-94dd-489e-a8d5-6f25d4e398ce'
      },
      {
        'type': 'image',
        'width': 'col-span-2',
        'url': 'https://firebasestorage.googleapis.com/v0/b/bernardo-portfolio.firebasestorage.app/o/projects%2Fsimple-todo%2Fsimpletodo-4.png?alt=media&token=2803a2c5-c9ef-44f4-acce-e47b597cdcc9',
      },
    ],
    about: `The Simple Todo project is a full-stack web application designed to manage tasks efficiently. It utilizes the PERN stack, comprising PostgreSQL for the database, Express.js for the backend server, React for the frontend user interface, and Node.js for the runtime environment. 
It offers complete CRUD functionality with additional features like: Filtering todos by status (All/Finished/Unfinished); Editing todos via modals; and marking todos as complete with visual strikethrough.`,
    stats: [['Full Stack', 'PERN Architecture'], ['RESTful', 'backend API'], ['Clean UI', 'and responsive design']],
    technologies: ['Javascript', 'React', 'NodeJS', 'PostgreSQL']
  },
  {
    id: 4,
    name: 'Power Source',
    description: 'Voltage regulated power supply from 3V to 12V',
    type: 'Electronics',
    categories: ['Electronics'],
    url: 'https://github.com/bernardoarodrigues/Voltage-Regulated-Power-Source',
    logo: 'https://firebasestorage.googleapis.com/v0/b/bernardo-portfolio.firebasestorage.app/o/projects%2Fpowersource%2FPower%20Source.png?alt=media&token=5117eee8-6313-47a5-afb8-41ee46b46162',
    galleryCols: [[0,2],[2,4]],
    galleryBg: '#FFBD59',
    gallery: [
      {
        'type': 'video',
        'thumb': 'https://firebasestorage.googleapis.com/v0/b/bernardo-portfolio.firebasestorage.app/o/projects%2Fpowersource%2FPower%20Source%20-%20Thumb.png?alt=media&token=f358e55c-50dd-4b46-86e9-f6b63c6677ce',
        'width': 'col-span-3',
        'url': 'https://youtu.be/LmAK9lCr3QM?si=aShRY9JnCxvXAO1k'
      },
      {
        'type': 'image',
        'width': 'col-span-1',
        'url': 'https://firebasestorage.googleapis.com/v0/b/bernardo-portfolio.firebasestorage.app/o/projects%2Fpowersource%2Fpowersource-1.png?alt=media&token=e5c6b3e9-183f-4786-9163-f19df5b3d789'
      },
      {
        'type': 'image',
        'width': 'col-span-2',
        'url': 'https://firebasestorage.googleapis.com/v0/b/bernardo-portfolio.firebasestorage.app/o/projects%2Fpowersource%2Fpowersource-2.jpg?alt=media&token=779d00a6-46ed-4c8d-92e8-f8827ccce9b5'
      },
      {
        'type': 'image',
        'width': 'col-span-2',
        'url': 'https://firebasestorage.googleapis.com/v0/b/bernardo-portfolio.firebasestorage.app/o/projects%2Fpowersource%2Fpowersource-3.png?alt=media&token=1fb4b88e-8e30-4eaf-9c30-a6974c8e344a',
      },
    ],
    about: `The “Voltage-Regulated Power Source” project is a rectifier power supply designed to convert an AC input of 127V to a DC output adjustable between 3V and 12V.
It operates by first stepping down a 127V AC input to a lower AC voltage using a transformer. Then, there is a conversion to DC through a bridge rectifier composed of diodes, producing a pulsating DC signal. To smooth this signal, capacitors are employed, reducing voltage ripples and providing a more stable DC output. Finally, a voltage regulator IC is used to adjust the output voltage to the desired range.`,
    stats: [['100 mA', 'maximum current'], ['1.5 months', 'of development'], ['Only $15', 'spent in the project']],
    technologies: ['Falstad', 'Autodesk Eagle']
  },
  {
    id: 5,
    name: 'Smart Intercom',
    description: 'Voltage regulated power supply from 3V to 12V',
    type: 'Electronics + Mobile',
    categories: ['Electronics'],
    url: 'https://github.com/bernardoarodrigues/Voltage-Regulated-Power-Source',
    logo: 'https://firebasestorage.googleapis.com/v0/b/bernardo-portfolio.firebasestorage.app/o/projects%2Fsmartintercom%2FSmartIntercom-logo.png?alt=media&token=48425280-7d3a-4049-9dce-6a2e46072851https://firebasestorage.googleapis.com/v0/b/bernardo-portfolio.firebasestorage.app/o/projects%2Fsmartintercom%2FSmartIntercom-logo.png?alt=media&token=3303e5f8-657c-453f-9158-5fe4966a9220',
    galleryCols: [[0,2],[2,5]],
    galleryBg: '#D9D9D9',
    gallery: [
      {
        'type': 'video',
        'thumb': 'https://firebasestorage.googleapis.com/v0/b/bernardo-portfolio.firebasestorage.app/o/projects%2Fsmartintercom%2FSmart%20Intercom%20-%20Thumb.png?alt=media&token=9d0a9a30-1193-4aee-b658-ac3803ab7874',
        'width': 'col-span-3',
        'url': 'https://youtu.be/EZ5hZXWJnWU?si=KyKrvhZYpBzIiZs4'
      },
      {
        'type': 'image',
        'width': 'col-span-1',
        'url': 'https://firebasestorage.googleapis.com/v0/b/bernardo-portfolio.firebasestorage.app/o/projects%2Fsmartintercom%2FSmartIntercom-1.jpg?alt=media&token=1f6e6644-2097-4df0-b5d1-25b07f4448cchttps://firebasestorage.googleapis.com/v0/b/bernardo-portfolio.firebasestorage.app/o/projects%2Fsmartintercom%2FSmartIntercom-1.jpg?alt=media&token=fd81ced8-827f-4364-ad55-6de854f2bc27'
      },
      {
        'type': 'image',
        'width': 'col-span-1',
        'url': 'https://firebasestorage.googleapis.com/v0/b/bernardo-portfolio.firebasestorage.app/o/projects%2Fsmartintercom%2FSmartIntercom-5.jpg?alt=media&token=5355b04d-57c9-40a8-ab78-16c0bb557a44',
      },
      {
        'type': 'image',
        'width': 'col-span-1',
        'url': 'https://firebasestorage.googleapis.com/v0/b/bernardo-portfolio.firebasestorage.app/o/projects%2Fsmartintercom%2FSmartIntercom-3.jpg?alt=media&token=2a8fdbdb-d69d-4de8-9af2-1e42b3b53bc5',
      },
      {
        'type': 'image',
        'width': 'col-span-1',
        'url': 'https://firebasestorage.googleapis.com/v0/b/bernardo-portfolio.firebasestorage.app/o/projects%2Fsmartintercom%2FSmartIntercom-2.jpg?alt=media&token=67106e6c-94a5-4a98-8686-ffbbf325ebc9'
      },
      {
        'type': 'image',
        'width': 'col-span-1',
        'url': 'https://firebasestorage.googleapis.com/v0/b/bernardo-portfolio.firebasestorage.app/o/projects%2Fsmartintercom%2FSmartIntercom-4.png?alt=media&token=1b4d2b8e-bfcb-4fd7-8195-a15d93994635',
      },
    ],
    about: `Smart Intercom is a project composed of: a circuit that uses video and audio Wifi-connected boards to interact with users; frontend, an Android app where residents can see who’s outside, open the door, and call the device; and backend, where a realtime database bridges the data sharing.
Regarding the video, the device hosts a local web server that shares a video stream. Considering the audio, a SIP system is hosted on a public server and it manages calls, where the device’s audio board and the Android client are connected. Finally, it uses other electronic parts, like LDR, relay, and LED, to provide other required functionalities.`,
    stats: [['Free PBX', 'hosted SIP server'], ['ESP32-Cam', 'real-time video stream'], ['ESP32-Lyrat', 'VOIP call to phone']],
    technologies: ['Java', 'Firebase', 'Arduino', 'C++', 'Python']
  },
]

export const techUrls = {
  'React': 'https://reactnative.dev',
  'React Native': 'https://react.dev',
  'Firebase': 'https://firebase.google.com',
  'Typescript': 'https://www.typescriptlang.org',
  'Figma': 'https://figma.com',
  'Java': 'https://www.java.com',
  'Vite': 'https://vite.dev',
  'Tailwind': 'https://tailwindcss.com',
  'OpenAI API': 'https://platform.openai.com/docs/overview',
  'Arduino': 'https://www.arduino.cc',
  'NodeJS': 'https://nodejs.org',
  'PostgreSQL': 'https://www.postgresql.org',
  'Falstad': 'http://www.falstad.com/circuit/',
  'Autodesk Eagle': 'https://www.autodesk.com/products/eagle/overview',
  'C++': 'https://www.cplusplus.com',
  'Python': 'https://www.python.org',
  'Javascript': 'https://www.javascript.com',
  'Expo': 'https://expo.dev',
};