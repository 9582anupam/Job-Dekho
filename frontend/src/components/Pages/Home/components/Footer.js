// import React from 'react';
// import { Link } from 'react-router-dom';

// const footerColumns = [
//     {
//         title: "Jobs",
//         items: [
//             { href: "/", text: "Apply" },
//             { href: "/", text: "Post" },
//             { href: "/", text: "Hire" },
//         ],
//     },
//     {
//         title: "Internship",
//         items: [
//             { href: "/", text: "Apply" },
//             { href: "/", text: "Post" },
//             { href: "/", text: "Hire" },
//         ],
//     },
//     {
//         title: "Career Tools",
//         items: [
//             { href: "/", text: "Mentorship" },
//             { href: "/", text: "Skill Courses" },
//             { href: "/", text: "Resume Builder" },
//             { href: "/", text: "Resume Analysis" },
//             { href: "/", text: "Virtual Interview" },
//             { href: "/", text: "Assessments" },
//             { href: "/", text: "Roadmap" },
//         ],
//     },
//     {
//         title: "Community & Events",
//         items: [
//             { href: "/", text: "Hackathons" },
//             { href: "/", text: "Alumni" },
//             { href: "/", text: "Blog" },
//             { href: "/", text: "Community" },
//             { href: "/", text: "Virtual Lab" },
//         ],
//     },
//     {
//         title: "Contact",
//         items: [
//             { href: "/", text: "FAQ" },
//             { href: "/", text: "Support" },
//             { href: "/", text: "Partnership" },
//             { href: "/", text: "About Us" },
//             { href: "/", text: "Careers" },
//         ],
//     },
// ];  

// const Footer = () => {
//     return (
//         <div className="mt-20">
//             <footer className="py-8">
//                 <div className="container mx-auto w-10/12">
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
//                         {footerColumns.map((column, columnIndex) => (
//                             <div key={columnIndex}>
//                                 <p className="text-xl font-bold mb-4">
//                                     {column.title}
//                                 </p>
//                                 {column.newsletter ? (
//                                     <>
//                                         <p className="text-muted-foreground mb-4 text-lg">
//                                             Subscribe to our newsletter for
//                                             updates and exclusive offers.
//                                         </p>
//                                         <form className="flex gap-2">
//                                             <input
//                                                 className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
//                                                 type="email"
//                                                 placeholder="Enter your email"
//                                             />
//                                             <button
//                                                 className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
//                                                 type="submit">
//                                                 Subscribe
//                                             </button>
//                                         </form>
//                                     </>
//                                 ) : (
//                                     <ul className="space-y-2 text-lg">
//                                         {column.items.map((item, itemIndex) => (
//                                             <li key={itemIndex} className="opacity-100 translate-y-0 transition-all duration-500 delay-[itemIndex * 0.2s]">
//                                                 <Link
//                                                     className="hover:underline"
//                                                     to={item.href}>
//                                                     {item.text}
//                                                 </Link>
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 )}
//                             </div>
//                         ))}
//                     </div>
//                     <div className="mt-8 text-center text-muted-foreground text-base">
//                         © 2024 Sticky Notes. All rights reserved.
//                     </div>
//                 </div>
//             </footer>
//         </div>
//     );
// };

// export default Footer;
