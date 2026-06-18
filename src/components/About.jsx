import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Avatar,
  Chip,
  LinearProgress,
  Paper,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SchoolIcon from "@mui/icons-material/School";
import { personal, interests, aboutSkills } from "../data/portfolioData";

function SectionHeading({ overline, title, subtitle }) {
  return (
    <Box sx={{ textAlign: "center", mb: 7 }}>
      <Typography
        variant="overline"
        sx={{ color: "#8b5cf6", letterSpacing: 3, fontWeight: 600 }}
      >
        {overline}
      </Typography>
      <Typography
        variant="h3"
        sx={{ fontWeight: 800, color: "white", mt: 0.5, mb: 1.5 }}
      >
        {title}
      </Typography>
      <Typography variant="body1" sx={{ color: "grey.400", maxWidth: 600, mx: "auto" }}>
        {subtitle}
      </Typography>
    </Box>
  );
}

export default function About() {
  return (
    <Box
      id="about"
      sx={{
        py: 12,
        background:
          "linear-gradient(180deg, #0a0a14 0%, #0d0d1f 100%)",
      }}
    >
      <Container maxWidth="lg">
        <SectionHeading
          overline="About Me"
          title="About Me"
          subtitle="Get to know more about my background, skills, and what drives my passion for technology"
        />

        <Grid container spacing={5} alignItems="flex-start">
          {/* Personal Info column */}
          <Grid item xs={12} md={4}>
            <Paper
              elevation={0}
              sx={{
                background: "rgba(139,92,246,0.05)",
                border: "1px solid rgba(139,92,246,0.15)",
                borderRadius: 3,
                p: 4,
                textAlign: "center",
              }}
            >
              <Avatar
                src={personal.profileImage}
                alt={personal.name}
                sx={{
                  width: 120,
                  height: 120,
                  mx: "auto",
                  mb: 2,
                  border: "3px solid rgba(139,92,246,0.5)",
                  "& .MuiAvatar-img": {
                    objectFit: "cover",
                    objectPosition: "50% 20%",
                    transform: "scale(1.06)",
                  },
                }}
              />
              <Typography variant="h6" sx={{ color: "white", fontWeight: 700 }}>
                {personal.name}
              </Typography>
              <Typography variant="body2" sx={{ color: "#8b5cf6", mb: 2 }}>
                {personal.title}
              </Typography>

              <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 0.5, mb: 0.5 }}>
                <LocationOnIcon sx={{ fontSize: 16, color: "grey.500" }} />
                <Typography variant="body2" sx={{ color: "grey.400" }}>
                  {personal.location}
                </Typography>
              </Box>
            </Paper>

            {/* Interests */}
            <Paper
              elevation={0}
              sx={{
                background: "rgba(139,92,246,0.05)",
                border: "1px solid rgba(139,92,246,0.15)",
                borderRadius: 3,
                p: 3,
                mt: 3,
              }}
            >
              <Typography variant="subtitle1" sx={{ color: "white", fontWeight: 700, mb: 2 }}>
                Interests
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {interests.map((item) => (
                  <Chip
                    key={item}
                    label={item}
                    size="small"
                    sx={{
                      background: "rgba(139,92,246,0.12)",
                      color: "#c4b5fd",
                      border: "1px solid rgba(139,92,246,0.25)",
                      fontSize: "0.75rem",
                    }}
                  />
                ))}
              </Box>
            </Paper>
          </Grid>

          {/* Bio + Skills column */}
          <Grid item xs={12} md={8}>
            <Paper
              elevation={0}
              sx={{
                background: "rgba(139,92,246,0.05)",
                border: "1px solid rgba(139,92,246,0.15)",
                borderRadius: 3,
                p: 4,
                mb: 3,
              }}
            >
              <Typography variant="body1" sx={{ color: "grey.300", lineHeight: 1.9, whiteSpace: "pre-line" }}>
                {personal.bio}
              </Typography>
            </Paper>

            {/* Technical Skills */}
            <Paper
              elevation={0}
              sx={{
                background: "rgba(139,92,246,0.05)",
                border: "1px solid rgba(139,92,246,0.15)",
                borderRadius: 3,
                p: 4,
                mb: 3,
              }}
            >
              <Typography variant="subtitle1" sx={{ color: "white", fontWeight: 700, mb: 3 }}>
                Technical Skills
              </Typography>
              <Grid container spacing={2}>
                {aboutSkills.map((skill) => (
                  <Grid item xs={12} sm={6} key={skill.name}>
                    <Box sx={{ mb: 0.5 }}>
                      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}>
                        <Typography variant="body2" sx={{ color: "grey.300", fontWeight: 500 }}>
                          {skill.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: "#8b5cf6", fontWeight: 600 }}>
                          {skill.level}%
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={skill.level}
                        sx={{
                          height: 6,
                          borderRadius: 3,
                          background: "rgba(255,255,255,0.08)",
                          "& .MuiLinearProgress-bar": {
                            background: "linear-gradient(90deg, #8b5cf6, #06b6d4)",
                            borderRadius: 3,
                          },
                        }}
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Paper>

            {/* Education */}
            <Paper
              elevation={0}
              sx={{
                background: "rgba(6,182,212,0.04)",
                border: "1px solid rgba(6,182,212,0.15)",
                borderRadius: 3,
                p: 4,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                <SchoolIcon sx={{ color: "#06b6d4" }} />
                <Typography variant="subtitle1" sx={{ color: "white", fontWeight: 700 }}>
                  Education
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ color: "#06b6d4", fontWeight: 600 }}>
                Bachelor of Technology – Computer Science and Engineering (AI/ML)
              </Typography>
              <Typography variant="body2" sx={{ color: "grey.400", mt: 0.5 }}>
                {personal.bio.includes("CGPA") ? "" : ""}CGPA 8.3
              </Typography>
            </Paper>

            {/* Quote */}
            <Box
              sx={{
                mt: 3,
                p: 3,
                borderLeft: "4px solid #8b5cf6",
                background: "rgba(139,92,246,0.05)",
                borderRadius: "0 12px 12px 0",
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "grey.200", fontStyle: "italic", fontWeight: 400 }}
              >
                "{personal.quote}"
              </Typography>
              <Typography variant="body2" sx={{ color: "#8b5cf6", mt: 1, fontWeight: 600 }}>
                — {personal.quoteAuthor}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
