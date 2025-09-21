// import Link from "next/link";
// import Image from "next/image";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardFooter } from "@/components/ui/card";

// const event = {
//   id: "hack-summit",
//   date: "10 March 2025",
//   upcoming: true,
//   title: "Basha Bandhu",
//   description:
//     "Hosted by MLSA-KIET X Geek Room KIET, Basha Bnadhu is a 24-hour in-person ideathon.",
//   image: "/1.jpg", // ✅ correct usage for public image
// };

// export default function EventsPage() {
//   return (
//     <>
//       <Navbar />

//       <section className="pt-32 pb-16 md:pt-40 md:pb-24">
//         <div className="container mx-auto px-4 md:px-6">
//           <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
//             Our Events
//           </h1>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <Card className="bg-background border-2 border-white/10 rounded-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
//               <div className="relative h-48 overflow-hidden">
//                 <Image
//                   src="/1.jpg"
//                   alt={event.title}
//                   width={600}
//                   height={400}
//                   className="object-cover w-full h-full"
//                 />
//               </div>

//               <CardContent className="p-6">
//                 <div className="flex items-center justify-between mb-3">
//                   <span className="text-sm text-muted-foreground">
//                     {event.date}
//                   </span>
//                   {event.upcoming && (
//                     <span className="text-sm font-medium text-secondary">
//                       Upcoming
//                     </span>
//                   )}
//                 </div>

//                 <h2 className="text-xl font-bold mb-2">{event.title}</h2>
//                 <p className="text-sm text-muted-foreground line-clamp-3">
//                   {event.description}
//                 </p>
//               </CardContent>

//               <CardFooter className="p-6 pt-0">
//                 <Link href={`/events/${event.id}`} className="w-full">
//                   <Button
//                     variant="default"
//                     className="w-full bg-primary hover:bg-primary/90"
//                   >
//                     Learn More
//                   </Button>
//                 </Link>
//               </CardFooter>
//             </Card>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// }













import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const event = {
  id: "hack-summit",
  date: "10 March 2025",
  upcoming: false,
  title: "Basha Bandhu",
  description:
    "Hosted by MLSA-KIET X Geek Room KIET, Basha Bnadhu is a 24-hour in-person ideathon.",
  image: "/1.jpg", // ✅ correct usage for public image
};

export default function EventsPage() {
  return (
    <>
      <Navbar />

      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Our Events
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-background border-2 border-white/10 rounded-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/1.jpg"
                  alt={event.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>

              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-muted-foreground">
                    {event.date}
                  </span>
                  {!event.upcoming && (
                    <span className="text-sm font-medium text-red-700">
                      Past
                    </span>
                  )}
                </div>

                <h2 className="text-xl font-bold mb-2">{event.title}</h2>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {event.description}
                </p>
              </CardContent>

              <CardFooter className="p-6 pt-0">
 <Link
  href="/events/basha-bandhu"
  className="w-full"
>
  <Button
    variant="default"
    className="w-full bg-primary hover:bg-primary/90"
  >
    Learn More
  </Button>
</Link>

</CardFooter>

            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
