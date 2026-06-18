import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  LinearProgress,
  Link,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { skillCategories, certifications } from "../data/portfolioData";

function SectionHeading({ overline, title, subtitle }) {
  return (
    <Box sx={{ textAlign: "center", mb: 7 }}>
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

export default function Skills() {
  return (
    <Box
      id="skills"
      sx={{
        py: 12,
        background: "linear-gradient(180deg, #0a0a14 0%, #0d0d1f 100%)",
      }}
    >
      <Container maxWidth="lg">
        <SectionHeading
          overline="Skills & Expertise"
          title="Skills & Expertise"
          subtitle="A comprehensive overview of my technical skills and proficiency levels across various technologies"
        />

        {/* Skill category cards */}
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {skillCategories.map((cat) => (
            <Grid item xs={12} md={6} key={cat.category}>
              <Paper
                elevation={0}
                sx={{
                  background: "rgba(139,92,246,0.05)",
                  border: "1px solid rgba(139,92,246,0.15)",
                  borderRadius: 3,
                  p: 3,
                  height: "100%",
                  transition: "border-color 0.2s",
                  "&:hover": { borderColor: "rgba(139,92,246,0.35)" },
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#a78bfa", fontWeight: 700, mb: 2.5 }}
                >
                  {cat.category}
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1.8 }}>
                  {cat.skills.map((skill) => (
                    <Box key={skill.name}>
                      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}>
                        <Typography variant="body2" sx={{ color: "grey.300", fontWeight: 500 }}>
                          {skill.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: "#8b5cf6", fontWeight: 700 }}>
                          {skill.level}%
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={skill.level}
                        sx={{
                          height: 6,
                          borderRadius: 3,
                          background: "rgba(255,255,255,0.07)",
                          "& .MuiLinearProgress-bar": {
                            background: "linear-gradient(90deg, #8b5cf6, #06b6d4)",
                            borderRadius: 3,
                          },
                        }}
                      />
                    </Box>
                  ))}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Certifications */}
        <Paper
          elevation={0}
          sx={{
            background: "rgba(139,92,246,0.05)",
            border: "1px solid rgba(139,92,246,0.15)",
            borderRadius: 3,
            p: 4,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
            <EmojiEventsIcon sx={{ color: "#f59e0b" }} />
            <Typography variant="subtitle1" sx={{ color: "white", fontWeight: 700 }}>
              Certifications & Achievements
            </Typography>
          </Box>
          <Grid container spacing={2}>
            {certifications.map((cert) => (
              <Grid item xs={12} sm={6} key={cert.title}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    p: 2,
                    borderRadius: 2,
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(139,92,246,0.1)",
                    transition: "all 0.2s",
                    "&:hover": {
                      background: "rgba(139,92,246,0.08)",
                      borderColor: "rgba(139,92,246,0.25)",
                    },
                  }}
                >
                  <EmojiEventsIcon sx={{ color: "#f59e0b", fontSize: 20, flexShrink: 0 }} />
                  <Link
                    href={cert.link}
                    target="_blank"
                    underline="hover"
                    sx={{
                      color: "grey.300",
                      fontSize: "0.85rem",
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                      "&:hover": { color: "#c4b5fd" },
                    }}
                  >
                    {cert.title}
                    <OpenInNewIcon sx={{ fontSize: 14 }} />
                  </Link>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Box
            sx={{
              mt: 4,
              pt: 3,
              borderTop: "1px solid rgba(139,92,246,0.1)",
            }}
          >
            <Typography variant="subtitle2" sx={{ color: "white", fontWeight: 600, mb: 1 }}>
              Continuous Learning Journey
            </Typography>
            <Typography variant="body2" sx={{ color: "grey.400", lineHeight: 1.8 }}>
              I believe in continuous learning and staying updated with the latest technologies. My skill set is
              constantly evolving as I explore new frameworks, tools, and best practices in the ever-changing world
              of software development.
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
