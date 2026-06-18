import React from "react";
import { Box, Container, Typography, Link, IconButton, Grid, Divider } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { personal } from "../data/portfolioData";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      component="footer"
      sx={{
        background: "#070710",
        borderTop: "1px solid rgba(139,92,246,0.15)",
        pt: 6,
        pb: 3,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ mb: 4 }}>
          {/* Brand */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 800,
                background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mb: 1,
              }}
            >
              {personal.name}
            </Typography>
            <Typography variant="body2" sx={{ color: "grey.500", lineHeight: 1.8, mb: 2, maxWidth: 280 }}>
              Computer Science & AI/ML Student passionate about creating innovative solutions and contributing to
              open-source projects.
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton
                href={personal.github}
                target="_blank"
                size="small"
                sx={{ color: "grey.500", "&:hover": { color: "#8b5cf6" } }}
              >
                <GitHubIcon fontSize="small" />
              </IconButton>
              <IconButton
                href={personal.linkedin}
                target="_blank"
                size="small"
                sx={{ color: "grey.500", "&:hover": { color: "#06b6d4" } }}
              >
                <LinkedInIcon fontSize="small" />
              </IconButton>
              <IconButton
                href={`mailto:${personal.email}`}
                size="small"
                sx={{ color: "grey.500", "&:hover": { color: "#8b5cf6" } }}
              >
                <EmailIcon fontSize="small" />
              </IconButton>
            </Box>
          </Grid>

          {/* Quick links */}
          <Grid item xs={6} md={2}>
            <Typography variant="subtitle2" sx={{ color: "white", fontWeight: 700, mb: 2 }}>
              Quick Links
            </Typography>
            {navLinks.map((link) => (
              <Typography
                key={link.id}
                variant="body2"
                component="div"
                onClick={() => scrollTo(link.id)}
                sx={{
                  color: "grey.500",
                  cursor: "pointer",
                  mb: 1,
                  "&:hover": { color: "#8b5cf6" },
                  transition: "color 0.2s",
                }}
              >
                {link.label}
              </Typography>
            ))}
          </Grid>

          {/* Contact */}
          <Grid item xs={6} md={3}>
            <Typography variant="subtitle2" sx={{ color: "white", fontWeight: 700, mb: 2 }}>
              Get In Touch
            </Typography>
            <Typography variant="body2" sx={{ color: "grey.500", mb: 1 }}>
              {personal.location}
            </Typography>
            <Typography variant="body2" sx={{ color: "grey.500", mb: 1 }}>
              {personal.email}
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: "rgba(139,92,246,0.1)", mb: 3 }} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 0.5,
          }}
        >
          <Typography variant="body2" sx={{ color: "grey.600" }}>
            © {new Date().getFullYear()} Made with
          </Typography>
          <FavoriteIcon sx={{ fontSize: 14, color: "#ef4444" }} />
          <Typography variant="body2" sx={{ color: "grey.600" }}>
            by {personal.name.split(" ")[1] || personal.name} · Built with React & Material-UI
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
