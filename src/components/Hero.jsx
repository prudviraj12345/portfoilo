import React from "react";
import {
  Box,
  Typography,
  Button,
  Chip,
  Avatar,
  IconButton,
  Stack,
  Container,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import DownloadIcon from "@mui/icons-material/Download";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import { personal, heroTechChips } from "../data/portfolioData";

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background:
          "radial-gradient(ellipse at 20% 50%, rgba(139,92,246,0.12) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(6,182,212,0.08) 0%, transparent 60%), #0a0a14",
        pt: 10,
        pb: 6,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative background blur circles */}
      <Box
        sx={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "rgba(139,92,246,0.06)",
          top: -100,
          right: -150,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "rgba(6,182,212,0.05)",
          bottom: 0,
          left: -100,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
            alignItems: "center",
            gap: 6,
          }}
        >
          {/* Left – text content */}
          <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
            <Typography
              variant="overline"
              sx={{ color: "#8b5cf6", letterSpacing: 3, fontWeight: 600 }}
            >
              Portfolio
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ color: "grey.400", mt: 1, mb: 0.5 }}
            >
              Hello, I'm
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                fontSize: { xs: "2.4rem", md: "3.5rem" },
                background: "linear-gradient(135deg, #ffffff 40%, #8b5cf6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                lineHeight: 1.1,
                mb: 1,
              }}
            >
              {personal.name}
            </Typography>
            <Typography
              variant="h5"
              sx={{ color: "#8b5cf6", fontWeight: 500, mb: 2 }}
            >
              {personal.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "grey.400", mb: 3, maxWidth: 560, lineHeight: 1.8 }}
            >
              {personal.tagline}
            </Typography>

            {/* Tech chips */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1,
                mb: 4,
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              {heroTechChips.map((chip) => (
                <Chip
                  key={chip}
                  label={chip}
                  size="small"
                  sx={{
                    background: "rgba(139,92,246,0.15)",
                    color: "#c4b5fd",
                    border: "1px solid rgba(139,92,246,0.3)",
                    fontWeight: 500,
                    "&:hover": { background: "rgba(139,92,246,0.25)" },
                  }}
                />
              ))}
            </Box>

            {/* CTA buttons */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ mb: 4, alignItems: { xs: "center", md: "flex-start" } }}
            >
              <Button
                variant="contained"
                startIcon={<DownloadIcon />}
                href={personal.resumeLink}
                target="_blank"
                sx={{
                  background: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
                  px: 3,
                  py: 1.2,
                  fontWeight: 600,
                  textTransform: "none",
                  borderRadius: 2,
                  "&:hover": {
                    background: "linear-gradient(135deg, #a78bfa, #7c3aed)",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.2s",
                }}
              >
                Download Resume
              </Button>
              <Button
                variant="outlined"
                startIcon={<FolderOpenIcon />}
                onClick={() => scrollTo("projects")}
                sx={{
                  borderColor: "rgba(139,92,246,0.5)",
                  color: "#c4b5fd",
                  px: 3,
                  py: 1.2,
                  fontWeight: 600,
                  textTransform: "none",
                  borderRadius: 2,
                  "&:hover": {
                    borderColor: "#8b5cf6",
                    background: "rgba(139,92,246,0.08)",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.2s",
                }}
              >
                View Projects
              </Button>
            </Stack>

            {/* Social icons */}
            <Stack
              direction="row"
              spacing={1}
              sx={{ justifyContent: { xs: "center", md: "flex-start" } }}
            >
              <IconButton
                href={personal.github}
                target="_blank"
                sx={{ color: "grey.400", "&:hover": { color: "#8b5cf6" } }}
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                href={personal.linkedin}
                target="_blank"
                sx={{ color: "grey.400", "&:hover": { color: "#06b6d4" } }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                href={`mailto:${personal.email}`}
                sx={{ color: "grey.400", "&:hover": { color: "#8b5cf6" } }}
              >
                <EmailIcon />
              </IconButton>
            </Stack>
          </Box>

          {/* Right – profile image */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: 0,
            }}
          >
            <Box
              sx={{
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  inset: -4,
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, #8b5cf6, #06b6d4, #8b5cf6)",
                  zIndex: 0,
                  animation: "spin 8s linear infinite",
                  "@keyframes spin": { to: { transform: "rotate(360deg)" } },
                },
              }}
            >
              <Avatar
                src={personal.profileImage}
                alt={personal.name}
                sx={{
                  width: { xs: 220, md: 300 },
                  height: { xs: 220, md: 300 },
                  border: "4px solid #0a0a14",
                  position: "relative",
                  zIndex: 1,
                  fontSize: "5rem",
                  background: "linear-gradient(135deg, #1e1b4b, #312e81)",
                  "& .MuiAvatar-img": {
                    objectFit: "cover",
                    objectPosition: "50% 20%",
                    transform: "scale(1.06)",
                  },
                }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
