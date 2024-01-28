# Installation
cd into `server` and `client` using two terminals, and run `npm start`. Now head over to `localhost:3000`!

## ⚡ Inspiration behind ABOT 'O WAT 💡
The inspiration behind ABOT O'WAT stemmed from the enchanting concept of messages in bottles washing up on beaches, carrying stories and creating a tangible connection between memories and locations. ABOT O'WAT is a a digital platform where users can encapsulate and share their cherished moments in virtual bottles.

## 🌊 What it does 🍾
ABOT O'WAT is a web app that reimagines the concept of messages in bottles. Users can capture their memories by taking a photo and store them in virtual "bottles". Bottles are then geotagged and made discoverable to others nearby, who can comment and add to that location's collection of memories. Then, sometime in the future, your bottle will "wash up" for you to experience the nostalgia of the past. This digital time capsule gives users a unique way to preserve and relieve their favourite memories while witnessing how different places change with time.

## 🛠️ How we built it 🏗️
We built ABOT O' WAT using the MERN stack: MongoDB, Express.JS, React, and Node. We also used the geolocation API to access the user's location, MediaDevice's web API to take pictures, and Auth0 for user sign-in and verification.

## 🚧 Challenges we ran into ⁉️
The greatest challenge we faced was saving images into a database using our tech stack. We had to find a way to send our images from the frontend image capture to the backend. We tried various different methods outlined online to solve this issue: FormData, FileReader, Bolbs (yes Blob datatypes exist), and Multer for our backend. At first, nothing seemed to work, and we were starting to lose hope on our prospects of finishing this project. However, 3 hours before the deadline, we were finally able to send images over to the backend; we started working in overdrive, finishing the complete functionality of the rest of our project in a simple three hours, and filming our demo video. This experience reminded us all the importance of persevering through challenges, and the knowledge and value we gained through this challenge was definitely worth it! 



## 🎗️ Accomplishments that we're proud of 🏆
1) Creating a functional web application that is able to capture and save pictures within the hacking time :D 
2) UI/UX Design 📐, the home screen and the bottle screen welcomes users to capture their memories, incorporating 3D designs and animations

## What we learned 📚
Three-quarters of our team consists of novice hackers, so we gained valuable insights into front-end design, particularly with React. We also learned how to implement APIs, such as Auth0, and we gained proficiency in storing and querying data from databases. The entire team dedicated substantial effort to brainstorming innovative tools for users, gaining valuable experience in user-centric design. We take pride in our rapid progress, successfully developing a functional and meaningful product despite our limited prior exposure to hackathons.

## What's next for ABOT O'WAT 🚀
1) **Collaborative Bottles 🤝** We can enable multiple users to contribute to a single bottle, fostering collaborative storytelling and shared memories among friends, family, or communities.
2) **Mobile App 📱** We hope to make this web app into a mobile app making it easily for user to capture and store memories. 
3) **Multimedia Bottles 🎥** We can allow for other forms of media, like videos and audio recordings, to be added to bottles to create a more immersive and dynamic experience
4) **VR Capabilities 🥽** We hope to integrate virtual reality into ABOT O'WAT so users can be immersively transported back in time to relive their favourite moments.