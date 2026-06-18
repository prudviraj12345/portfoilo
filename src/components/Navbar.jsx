import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  useScrollTrigger,
  Slide,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { personal } from "../data/portfolioData";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((l) => l.id);
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setDrawerOpen(false);
  };

  return (
    <>
      <HideOnScroll>
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            background: "rgba(10, 10, 20, 0.85)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid rgba(139, 92, 246, 0.15)",
          }}
        >
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                cursor: "pointer",
              }}
              onClick={() => scrollTo("home")}
            >
              {personal.name.split(" ")[0]}
            </Typography>

            {/* Desktop nav */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 0.5 }}>
              {navLinks.map((link) => (
                <Button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  sx={{
                    color: activeSection === link.id ? "#8b5cf6" : "grey.300",
                    fontWeight: activeSection === link.id ? 700 : 400,
                    textTransform: "none",
                    fontSize: "0.95rem",
                    "&:hover": { color: "#8b5cf6" },
                  }}
                >
                  {link.label}
                </Button>
              ))}
            </Box>

            {/* Mobile menu icon */}
            <IconButton
              sx={{ display: { md: "none" }, color: "grey.300" }}
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: { background: "#0d0d1a", width: 220, pt: 2 },
        }}
      >
        <List>
          {navLinks.map((link) => (
            <ListItem key={link.id} disablePadding>
              <ListItemButton onClick={() => scrollTo(link.id)}>
                <ListItemText
                  primary={link.label}
                  sx={{
                    "& .MuiListItemText-primary": {
                      color:
                        activeSection === link.id ? "#8b5cf6" : "grey.300",
                      fontWeight: activeSection === link.id ? 700 : 400,
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
