// import React from "react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import Gallery from "@/components/Gallery";

// // Gallery images data
// const galleryImages = [
//   {
//     id: "git-workshop-1",
//     src: "https://ext.same-assets.com/812608780/849522504.jpeg",
//     alt: "Git Workshop Session",
//     title: "Git & GitHub Workshop",
//     date: "October 23, 2024",
//     description: "Students learning version control basics with hands-on practice using Git and GitHub. The workshop covered creating repositories, branching, merging, and collaborating on open-source projects."
//   },
//   {
//     id: "code-clash-1",
//     src: "https://ext.same-assets.com/1856141055/849522504.jpeg",
//     alt: "Code Clash Competition",
//     title: "Code Clash Coding Competition",
//     date: "November 19, 2024",
//     description: "An exciting coding competition in collaboration with GeeksforGeeks. Participants solved algorithmic challenges and competed for a prize pool of ₹8,500."
//   },
//   {
//     id: "tensorflow-1",
//     src: "https://ext.same-assets.com/812608780/849522504.jpeg",
//     alt: "TensorFlow Workshop",
//     title: "Introduction to TensorFlow",
//     date: "November 11, 2024",
//     description: "A beginner-friendly workshop on TensorFlow, where participants learned the basics of machine learning and implemented their first neural network models."
//   },
//   {
//     id: "gear-up-1",
//     src: "https://ext.same-assets.com/1856141055/849522504.jpeg",
//     alt: "Gear Up Robotics",
//     title: "Gear Up: Robotics Exhibition",
//     date: "November 14, 2024",
//     description: "Students showcasing their robotics projects at the Gear Up exhibition. The event featured hands-on demonstrations, interactive exhibits, and a competitive challenge."
//   },
//   {
//     id: "kotlin-workshop-1",
//     src: "https://ext.same-assets.com/812608780/849522504.jpeg",
//     alt: "Kotlin Workshop",
//     title: "App Development with Kotlin",
//     date: "January 28, 2025",
//     description: "Participants learning mobile app development using Kotlin. This hands-on workshop covered creating UI elements, implementing functionality, and deploying simple Android applications."
//   },
//   {
//     id: "fastapi-workshop-1",
//     src: "https://ext.same-assets.com/1856141055/849522504.jpeg",
//     alt: "FastAPI Workshop",
//     title: "Backend Development with FastAPI",
//     date: "March 26, 2025",
//     description: "An in-depth workshop on building efficient backend systems using FastAPI. Students learned how to create API endpoints, handle authentication, and connect to databases."
//   },
//   {
//     id: "hack-summit-1",
//     src: "https://ext.same-assets.com/812608780/849522504.jpeg",
//     alt: "Hack Summit Hackathon",
//     title: "Hack Summit 24-Hour Hackathon",
//     date: "March 30, 2025",
//     description: "A collaborative 24-hour hackathon organized in partnership with E-Cell Plaksha. Teams worked on innovative solutions to real-world problems and presented their prototypes to a panel of judges."
//   },
//   {
//     id: "tech-talk-1",
//     src: "https://ext.same-assets.com/1856141055/849522504.jpeg",
//     alt: "Tech Talk Session",
//     title: "Industry Insights: AI in Healthcare",
//     date: "February 15, 2025",
//     description: "A guest lecture on the applications of artificial intelligence in healthcare. Industry professionals shared insights on current innovations and future trends in medical technology."
//   },
//   {
//     id: "project-showcase-1",
//     src: "https://ext.same-assets.com/812608780/849522504.jpeg",
//     alt: "Project Showcase",
//     title: "Student Projects Showcase",
//     date: "December 10, 2024",
//     description: "Geek Room members presenting their semester projects to the Plaksha community. The showcase featured a variety of innovations across web development, AI, robotics, and IoT domains."
//   }
// ];

// export default function GalleryPage() {
//   return (
//     <>
//       <Navbar />

//       <section className="pt-32 pb-16 md:pt-40 md:pb-24">
//         <div className="container mx-auto px-4 md:px-6">
//           <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
//             Event Gallery
//           </h1>

//           <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-16">
//             Explore our past events, workshops, and activities through this visual journey.
//             Click on any image to see more details about the event.
//           </p>

//           <Gallery images={galleryImages} />
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// }














import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";

// Gallery images data
const galleryImages = [
  {
    id: "git-workshop-1",
    src: "https://ext.same-assets.com/812608780/849522504.jpeg",
    alt: "Git Workshop Session",
    title: "Git & GitHub Workshop",
    date: "October 23, 2024",
    description: "Students learning version control basics with hands-on practice using Git and GitHub. The workshop covered creating repositories, branching, merging, and collaborating on open-source projects."
  },
  {
    id: "code-clash-1",
    src: "https://ext.same-assets.com/1856141055/849522504.jpeg",
    alt: "Code Clash Competition",
    title: "Code Clash Coding Competition",
    date: "November 19, 2024",
    description: "An exciting coding competition in collaboration with GeeksforGeeks. Participants solved algorithmic challenges and competed for a prize pool of ₹8,500."
  },
  {
    id: "tensorflow-1",
    src: "https://ext.same-assets.com/812608780/849522504.jpeg",
    alt: "TensorFlow Workshop",
    title: "Introduction to TensorFlow",
    date: "November 11, 2024",
    description: "A beginner-friendly workshop on TensorFlow, where participants learned the basics of machine learning and implemented their first neural network models."
  },
  {
    id: "gear-up-1",
    src: "https://ext.same-assets.com/1856141055/849522504.jpeg",
    alt: "Gear Up Robotics",
    title: "Gear Up: Robotics Exhibition",
    date: "November 14, 2024",
    description: "Students showcasing their robotics projects at the Gear Up exhibition. The event featured hands-on demonstrations, interactive exhibits, and a competitive challenge."
  },
  {
    id: "kotlin-workshop-1",
    src: "https://ext.same-assets.com/812608780/849522504.jpeg",
    alt: "Kotlin Workshop",
    title: "App Development with Kotlin",
    date: "January 28, 2025",
    description: "Participants learning mobile app development using Kotlin. This hands-on workshop covered creating UI elements, implementing functionality, and deploying simple Android applications."
  },
  {
    id: "fastapi-workshop-1",
    src: "https://ext.same-assets.com/1856141055/849522504.jpeg",
    alt: "FastAPI Workshop",
    title: "Backend Development with FastAPI",
    date: "March 26, 2025",
    description: "An in-depth workshop on building efficient backend systems using FastAPI. Students learned how to create API endpoints, handle authentication, and connect to databases."
  },
  {
    id: "hack-summit-1",
    src: "https://ext.same-assets.com/812608780/849522504.jpeg",
    alt: "Hack Summit Hackathon",
    title: "Hack Summit 24-Hour Hackathon",
    date: "March 30, 2025",
    description: "A collaborative 24-hour hackathon organized in partnership with E-Cell Plaksha. Teams worked on innovative solutions to real-world problems and presented their prototypes to a panel of judges."
  },
  {
    id: "tech-talk-1",
    src: "https://ext.same-assets.com/1856141055/849522504.jpeg",
    alt: "Tech Talk Session",
    title: "Industry Insights: AI in Healthcare",
    date: "February 15, 2025",
    description: "A guest lecture on the applications of artificial intelligence in healthcare. Industry professionals shared insights on current innovations and future trends in medical technology."
  },
  {
    id: "project-showcase-1",
    src: "https://ext.same-assets.com/812608780/849522504.jpeg",
    alt: "Project Showcase",
    title: "Student Projects Showcase",
    date: "December 10, 2024",
    description: "Geek Room members presenting their semester projects to the Plaksha community. The showcase featured a variety of innovations across web development, AI, robotics, and IoT domains."
  }
];

export default function GalleryPage() {
  return (
    <>
      <Navbar />

      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Event Gallery
          </h1>

          <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-16">
            Explore our past events, workshops, and activities through this visual journey.
            Click on any image to see more details about the event.
          </p>

          <Gallery images={galleryImages} />
        </div>
      </section>

      <Footer />
    </>
  );
}
