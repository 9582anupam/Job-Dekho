import { Link } from "react-router-dom";

const footerColumns = [
    {
        title: "Jobs",
        items: [
            { href: "/", text: "Find Jobs" },
            { href: "/", text: "Post a Job" },
            { href: "/", text: "Hiring Insights" },
        ],
    },
    {
        title: "Internships",
        items: [
            { href: "/", text: "Find Internships" },
            { href: "/", text: "Post an Internship" },
            { href: "/", text: "Internship Guides" },
        ],
    },
    {
        title: "Resources",
        items: [
            { href: "/", text: "Mentorship" },
            { href: "/", text: "Hackathons" },
            { href: "/", text: "Skill Courses" },
            { href: "/", text: "Resume Analysis" },
            { href: "/", text: "Blog" },
            { href: "/", text: "Community" },
            { href: "/", text: "Support" },
            { href: "/", text: "FAQs" },
        ],
    },
    {
        title: "Community",
        items: [
            { href: "/", text: "Blogs" },
            { href: "/", text: "Virtual Practice Lab" },
            { href: "/", text: "Assessments" },
        ],
    },
    {
        title: "Contact",
        items: [
            { href: "/", text: "Support" },
            { href: "/", text: "Partnerships" },
        ],
    },
    {
        title: "Legal",
        items: [
            { href: "/", text: "Privacy Policy" },
            { href: "/", text: "Terms of Service" },
            { href: "/", text: "Cookie Policy" },
        ],
    },
    {
        title: "Company",
        items: [
            { href: "/", text: "About Us" },
            { href: "/", text: "Our Team" },
            { href: "/", text: "Careers" },
            { href: "/", text: "News" },
        ],
    },
];

const Footer = () => {
    return (
        <div className="flex flex-col bg-gray-200">
            <footer className="py-8">
                <div className="container mx-auto px-4 w-11/12">
                    <div className="flex flex-wrap gap-28 text-left w-fit">
                        {footerColumns.map((column, columnIndex) => (
                            <div key={columnIndex} className="">
                                <p className="text-xl font-bold mb-4">
                                    {column.title}
                                </p>
                                {column.newsletter ? (
                                    <>
                                        <p className="text-muted-foreground mb-4 text-lg">
                                            Subscribe to our newsletter for updates and exclusive offers.
                                        </p>
                                        <form className="flex gap-2">
                                            <input
                                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
                                                type="email"
                                                placeholder="Enter your email"
                                            />
                                            <button
                                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                                                type="submit">
                                                Subscribe
                                            </button>
                                        </form>
                                    </>
                                ) : (
                                    <ul className="space-y-2 text-lg">
                                        {column.items.map((item, itemIndex) => (
                                            <li key={itemIndex} className="">
                                                <Link
                                                    className="hover:underline"
                                                    to={item.href}>
                                                    {item.text}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 text-center text-muted-foreground text-base">
                        © 2024 Job Dekho. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
