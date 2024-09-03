import React from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/system";

// Styled components for basic styling
const DropdownMenu = styled("div")({
    display: "none",
    position: "absolute",
    top: "100%",
    left: 0,
    backgroundColor: "white",
    border: "1px solid #ddd",
    borderRadius: "4px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    zIndex: 1300, // Ensures the menu is on top of other elements
    fontSize: "1.5rem",
});

const DropdownItem = styled("a")({
    display: "block",
    padding: "8px 16px",
    textDecoration: "none",
    color: "black",
    fontSize: "1.05rem",
    "&:hover": {
        backgroundColor: "#f0f0f0",
    },
});

const Navbar = () => {
    return (
        <nav className=" py-2 ">
            <div className="container mx-auto flex items-center justify-between">
                {/* Navigation Links */}
                <div className="hidden md:flex space-x-4 relative">
                    {/* Jobs Dropdown */}
                    <div className="relative group">
                        <Button color="inherit" className="">
                            Jobs
                        </Button>
                        <DropdownMenu className="group-hover:block">
                            <DropdownItem href="#jobs-apply">Apply</DropdownItem>
                            <DropdownItem href="#jobs-post">Post</DropdownItem>
                            <DropdownItem href="#jobs-hire">Hire</DropdownItem>
                        </DropdownMenu>
                    </div>

                    {/* Internship Dropdown */}
                    <div className="relative group">
                        <Button color="inherit" className="">
                            Internship
                        </Button>
                        <DropdownMenu className="group-hover:block">
                            <DropdownItem href="#internship-apply">
                                Apply
                            </DropdownItem>
                            <DropdownItem href="#internship-post">
                                Post
                            </DropdownItem>
                            <DropdownItem href="#internship-hire">
                                Hire
                            </DropdownItem>
                        </DropdownMenu>
                    </div>

                    {/* Career Tools Dropdown */}
                    <div className="relative group">
                        <Button color="inherit" className="">
                            Career Tools
                        </Button>
                        <DropdownMenu className="group-hover:block">
                            <DropdownItem href="#mentorship">
                                Mentorship
                            </DropdownItem>
                            <DropdownItem href="#skill-courses">
                                Skill Courses
                            </DropdownItem>
                            <DropdownItem href="#resume-builder">
                                Resume Builder
                            </DropdownItem>
                            <DropdownItem href="#resume-analysis">
                                Resume Analysis
                            </DropdownItem>
                            <DropdownItem href="#virtual-interview">
                                Virtual Interview
                            </DropdownItem>
                            <DropdownItem href="#assessments">
                                Assessments
                            </DropdownItem>
                            <DropdownItem href="#roadmap">Roadmap</DropdownItem>
                        </DropdownMenu>
                    </div>

                    {/* Community & Events Dropdown */}
                    <div className="relative group">
                        <Button color="inherit" className="">
                            Community & Events
                        </Button>
                        <DropdownMenu className="group-hover:block">
                            <DropdownItem href="#hackathons">
                                Hackathons
                            </DropdownItem>
                            <DropdownItem href="#alumni">Alumni</DropdownItem>
                            <DropdownItem href="#blog">Blog</DropdownItem>
                            <DropdownItem href="#community">
                                Community
                            </DropdownItem>
                            <DropdownItem href="#virtual-lab">
                                Virtual Lab
                            </DropdownItem>
                        </DropdownMenu>
                    </div>

                    {/* Contact Dropdown */}
                    <div className="relative group">
                        <Button color="inherit" className="">
                            Contact
                        </Button>
                        <DropdownMenu className="group-hover:block">
                            <DropdownItem href="#faq">FAQ</DropdownItem>
                            <DropdownItem href="#support">Support</DropdownItem>
                            <DropdownItem href="#partnership">
                                Partnership
                            </DropdownItem>
                            <DropdownItem href="#about-us">
                                About Us
                            </DropdownItem>
                            <DropdownItem href="#careers">Careers</DropdownItem>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
