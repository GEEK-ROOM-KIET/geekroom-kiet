// import Link from "next/link";
// import Image from "next/image";
// import { Github, Linkedin, Instagram } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="bg-background border-t border-muted py-8">
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* Logo and Address */}
//           <div className="flex flex-col">
//             <Link href="/" className="flex items-center mb-4">
//               <Image
//                 src="logo.png"
//                 alt="Geek Room Plaksha"
//                 width={120}
//                 height={40}
//                 className="h-10 w-auto"
//               />
//             </Link>
//             <div className="text-sm text-muted-foreground pl-0.5 space-y-1">
//               <p>Muradnagar, Ghaziabad</p>
//               <p>
//                 Email: {" "}
//                 <a
//                   href="mailto:geekroomkiet@gmail.com"
//                   className="text-inherit no-underline hover:text-primary transition-colors"
//                 >
//                   geekroomkiet@gmail.com
//                 </a>
//               </p>
//             </div>
//           </div>

//           {/* Social Media */}
//           <div className="flex flex-col items-center">
//             <h3 className="text-base mb-4">Follow us on Social Media</h3>
//             <div className="flex space-x-4">
//               {/* <a
//                 href="https://www.linkedin.com/company/geekroom-kiet"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-400 hover:text-primary transition-colors"
//               >
//                 <Linkedin size={20} />
//               </a> */}
//               <a
//                 href="https://www.instagram.com/geekroom_kiet//"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-400 hover:text-primary transition-colors"
//               >
//                 <Instagram size={20} />
//               </a>
//               {/* <a
//                 href="https://chat.whatsapp.com/KLsOEWvVMGEBbcxNqxIInD"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-400 hover:text-primary transition-colors"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="20"
//                   height="20"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
//                   <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
//                   <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
//                   <path d="M9.5 13.5c.5 1 1.5 1 2.5 1s2 0 2.5-1" />
//                 </svg>
//               </a> */}
//             </div>
//           </div>

//           {/* Contributor Section */}
//           <div className="flex flex-col items-end">
//             <div className="mb-2 text-right">
//               <p>Want to contribute to our community?</p>
//               <p>Feel free to do react us out!</p>
//             </div>
//             {/* <div className="flex items-center justify-end">
//                 <Github size={20} />
//               </a>
//             </div> */}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-muted py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Address */}
          <div className="flex flex-col">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="logo.png"
                alt="Geek Room Plaksha"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <div className="text-sm text-muted-foreground pl-0.5 space-y-1">
              <p>Muradnagar, Ghaziabad</p>
              <p>
                Email: {" "}
                <a
                  href="mailto:geekroomkiet@gmail.com"
                  className="text-inherit no-underline hover:text-primary transition-colors"
                >
                  geekroomkiet@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center">
            <h3 className="text-base mb-4">Follow us on Social Media</h3>
            <div className="flex space-x-4">
              {/* <a
                href="https://www.linkedin.com/company/geekroom-kiet"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a> */}
              <a
                href="https://www.instagram.com/geekroom_kiet//"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Instagram size={20} />
              </a>
              {/* <a
                href="https://chat.whatsapp.com/KLsOEWvVMGEBbcxNqxIInD"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                  <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                  <path d="M9.5 13.5c.5 1 1.5 1 2.5 1s2 0 2.5-1" />
                </svg>
              </a> */}
            </div>
          </div>

          {/* Contributor Section */}
          <div className="flex flex-col items-end">
            <div className="mb-2 text-right">
              <p>Want to contribute to our community?</p>
              <p>Feel free to do react us out!</p>
            </div>
            {/* <div className="flex items-center justify-end">
                <Github size={20} />
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
