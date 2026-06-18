import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Chip,
  ToggleButton,
  ToggleButtonGroup,
  IconButton,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { projects } from "../data/portfolioData";

function SectionHeading({ overline, title, subtitle }) {
  return (
    <Box sx={{ textAlign: "center", mb: 6 }}>
      <Typography variant="overline" sx={{ color: "#8b5cf6", letterSpacing: 3, fontWeight: 600 }}>
        {overline}
      </Typography>
      <Typography variant="h3" sx={{ fontWeight: 800, color: "white", mt: 0.5, mb: 1.5 }}>
        {title}
      </Typography>
      <Typography variant="body1" sx={{ color: "grey.400", maxWidth: 600, mx: "auto" }}>
        {subtitle}
      </Typography>
    </Box>
  );
}

const CATEGORIES = [
  "All Projects",
  ...Array.from(new Set(projects.map((project) => project.category))),
];

export default function Projects() {
  const [filter, setFilter] = useState("All Projects");

  const filtered =
    filter === "All Projects"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <Box
      id="projects"
      sx={{
        py: 12,
        background: "linear-gradient(180deg, #0d0d1f 0%, #0a0a14 100%)",
      }}
    >
      <Container maxWidth="lg">
        <SectionHeading
          overline="My Projects"
          title="My Projects"
          subtitle="A collection of projects that showcase my skills and passion for creating innovative solutions"
        />

        {/* Filter tabs */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 5 }}>
          <ToggleButtonGroup
            value={filter}
            exclusive
            onChange={(_, val) => val && setFilter(val)}
            sx={{
              flexWrap: "wrap",
              gap: 1,
              "& .MuiToggleButton-root": {
                border: "1px solid rgba(139,92,246,0.3)",
                color: "grey.400",
                borderRadius: "20px !important",
                px: 2.5,
                py: 0.8,
                textTransform: "none",
                fontWeight: 500,
                "&.Mui-selected": {
                  background: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
                  color: "white",
                  border: "1px solid transparent",
                },
                "&:hover": {
                  background: "rgba(139,92,246,0.1)",
                  color: "#c4b5fd",
                },
              },
            }}
          >
            {CATEGORIES.map((cat) => (
              <ToggleButton key={cat} value={cat}>
                {cat}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Box>

        {/* Project cards */}
        <Grid container spacing={3}>
          {filtered.map((project) => (
            <Grid item xs={12} sm={6} lg={4} key={project.title}>
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  background: "rgba(139,92,246,0.05)",
                  border: "1px solid rgba(139,92,246,0.15)",
                  borderRadius: 3,
                  overflow: "hidden",
                  transition: "all 0.3s",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    borderColor: "rgba(139,92,246,0.4)",
                    boxShadow: "0 12px 40px rgba(139,92,246,0.15)",
                  },
                }}
              >
                {/* Project image */}
                <Box sx={{ position: "relative", overflow: "hidden" }}>
                  <CardMedia
                    component="img"
                    height="180"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      objectFit: "cover",
                      transition: "transform 0.4s",
                      ".MuiCard-root:hover &": { transform: "scale(1.05)" },
                    }}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  {/* Overlay with icons on hover */}
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(10,10,20,0.7)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 2,
                      opacity: 0,
                      transition: "opacity 0.3s",
                      ".MuiCard-root:hover &": { opacity: 1 },
                    }}
                  >
                    {project.liveLink && project.liveLink !== "#" && (
                      <IconButton
                        href={project.liveLink}
                        target="_blank"
                        sx={{
                          background: "rgba(139,92,246,0.8)",
                          color: "white",
                          "&:hover": { background: "#8b5cf6" },
                        }}
                      >
                        <OpenInNewIcon />
                      </IconButton>
                    )}
                    {project.githubLink && (
                      <IconButton
                        href={project.githubLink}
                        target="_blank"
                        sx={{
                          background: "rgba(255,255,255,0.15)",
                          color: "white",
                          "&:hover": { background: "rgba(255,255,255,0.25)" },
                        }}
                      >
                        <GitHubIcon />
                      </IconButton>
                    )}
                  </Box>
                </Box>

                <CardContent sx={{ flex: 1, p: 3 }}>
                  <Typography variant="h6" sx={{ color: "white", fontWeight: 700, mb: 1, fontSize: "1rem" }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "grey.400", lineHeight: 1.7, mb: 2 }}>
                    {project.description}
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {project.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        sx={{
                          background: "rgba(139,92,246,0.12)",
                          color: "#c4b5fd",
                          fontSize: "0.7rem",
                          height: 22,
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>

                <CardActions sx={{ px: 3, pb: 3, pt: 0, gap: 1 }}>
                  {project.liveLink && project.liveLink !== "#" && (
                    <Button
                      size="small"
                      variant="contained"
                      href={project.liveLink}
                      target="_blank"
                      startIcon={<OpenInNewIcon sx={{ fontSize: 14 }} />}
                      sx={{
                        background: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
                        textTransform: "none",
                        fontSize: "0.8rem",
                        py: 0.6,
                        "&:hover": { background: "linear-gradient(135deg, #a78bfa, #7c3aed)" },
                      }}
                    >
                      Live Demo
                    </Button>
                  )}
                  {project.githubLink && (
                    <Button
                      size="small"
                      variant="outlined"
                      href={project.githubLink}
                      target="_blank"
                      startIcon={<GitHubIcon sx={{ fontSize: 14 }} />}
                      sx={{
                        borderColor: "rgba(139,92,246,0.4)",
                        color: "#c4b5fd",
                        textTransform: "none",
                        fontSize: "0.8rem",
                        py: 0.6,
                        "&:hover": { borderColor: "#8b5cf6", background: "rgba(139,92,246,0.08)" },
                      }}
                    >
                      GitHub
                    </Button>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
