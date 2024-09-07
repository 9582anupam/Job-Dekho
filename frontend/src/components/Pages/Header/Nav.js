import React from "react";
import { styled } from "@mui/system";

// Styled components for basic styling
const DropdownMenu = styled("div")({
    position: "absolute",
    top: "100%",
    left: 0, // Align the menu to the left of the parent
    backgroundColor: "white",
    border: "1px solid #ddd",
    borderRadius: "4px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    zIndex: 1300,
    fontSize: "1.5rem",
    opacity: 0,
    visibility: "hidden",
    transition: "opacity 0.3s ease, visibility 0.3s ease",
    pointerEvents: "none",
});

const DropdownItem = styled("a")({
    display: "block",
    padding: "8px 16px",
    textDecoration: "none",
    color: "black",
    fontSize: "1.3rem",
    "&:hover": {
        backgroundColor: "#f0f0f0",
    },
});

// Additional styled component for title
const DropdownTitle = styled("div")({
    fontSize: "1.5rem",
    transition: "color 0.3s ease",
    "&:hover": {
        color: "#007BFF",
    },
});

const dropdownData = [
    {
        title: "Job",
        items: [
            { text: "Apply", href: "#jobs-apply" },
            { text: "Post", href: "#jobs-post" },
            { text: "Hire", href: "#jobs-hire" }
        ]
    },
    {
        title: "Internship",
        items: [
            { text: "Apply", href: "#internship-apply" },
            { text: "Post", href: "#internship-post" },
            { text: "Hire", href: "#internship-hire" }
        ]
    },
    {
        title: "Career Tools",
        items: [
            { text: "Mentorship", href: "#mentorship" },
            { text: "Skill Courses", href: "#skill-courses" },
            { text: "Resume Builder", href: "#resume-builder" },
            { text: "Resume Analysis", href: "#resume-analysis" },
            { text: "Virtual Interview", href: "#virtual-interview" },
            { text: "Assessments", href: "#assessments" },
            { text: "Roadmap", href: "#roadmap" }
        ]
    },
    {
        title: "Community & Events",
        items: [
            { text: "Hackathons", href: "#hackathons" },
            { text: "Alumni", href: "#alumni" },
            { text: "Blog", href: "#blog" },
            { text: "Community", href: "#community" },
            { text: "Virtual Lab", href: "#virtual-lab" }
        ]
    },
    {
        title: "Contact",
        items: [
            { text: "FAQ", href: "#faq" },
            { text: "Support", href: "#support" },
            { text: "Partnership", href: "#partnership" },
            { text: "About Us", href: "#about-us" },
            { text: "Careers", href: "#careers" }
        ]
    }
];

const Navbar = () => {
    return (
        <nav className="py-2">
            <div className="container mx-auto flex items-center justify-between ">
                {/* Navigation Links */}
                <div className="hidden md:flex space-x-4 relative text-black text-xl rounded-3xl px-4 py-1">
                    {dropdownData.map((dropdown, index) => (
                        <div key={index} className="relative group">
                            <DropdownTitle className="cursor-pointer group-hover:text-blue-600">
                                {dropdown.title}
                            </DropdownTitle>
                            <DropdownMenu className="group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto">
                                {dropdown.items.map((item, itemIndex) => (
                                    <DropdownItem key={itemIndex} href={item.href}>
                                        {item.text}
                                    </DropdownItem>
                                ))}
                            </DropdownMenu>
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
