import React from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Chip,
  Grid,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { timeline, personal } from "../data/portfolioData";

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

const typeConfig = {
  education: { icon: <SchoolIcon />, color: "#8b5cf6", bg: "rgba(139,92,246,0.12)" },
  work: { icon: <WorkIcon />, color: "#06b6d4", bg: "rgba(6,182,212,0.12)" },
  certification: { icon: <EmojiEventsIcon />, color: "#f59e0b", bg: "rgba(245,158,11,0.12)" },
};

export default function Experience() {
  return (
    <Box
      id="experience"
      sx={{
        py: 12,
        background: "linear-gradient(180deg, #0d0d1f 0%, #0a0a14 100%)",
      }}
    >
      <Container maxWidth="lg">
        <SectionHeading
          overline="Experience & Education"
          title="Experience & Education"
          subtitle="My professional journey, educational background, and key achievements in the tech industry"
        />

        <Grid container spacing={4}>
          {/* Timeline */}
          <Grid item xs={12} md={8}>
            <Box sx={{ position: "relative" }}>
              {/* Vertical line */}
              <Box
                sx={{
                  position: "absolute",
                  left: 20,
                  top: 0,
                  bottom: 0,
                  width: 2,
                  background: "linear-gradient(180deg, #8b5cf6, rgba(139,92,246,0.1))",
                  zIndex: 0,
                }}
              />

              <Box sx={{ display: "flex", flexDirection: "column", gap: 3, pl: 7 }}>
                {timeline.map((item, i) => {
                  const cfg = typeConfig[item.type] || typeConfig.work;
                  return (
                    <Box key={i} sx={{ position: "relative" }}>
                      {/* Dot on the line */}
                      <Box
                        sx={{
                          position: "absolute",
                          left: -51,
                          top: 20,
                          width: 40,
                          height: 40,
                          borderRadius: "50%",
                          background: cfg.bg,
                          border: `2px solid ${cfg.color}`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: cfg.color,
                          zIndex: 1,
                          "& svg": { fontSize: 18 },
                        }}
                      >
                        {cfg.icon}
                      </Box>

                      <Paper
                        elevation={0}
                        sx={{
                          background: "rgba(139,92,246,0.05)",
                          border: "1px solid rgba(139,92,246,0.15)",
                          borderRadius: 3,
                          p: 3,
                          transition: "all 0.2s",
                          "&:hover": {
                            borderColor: `${cfg.color}44`,
                            transform: "translateX(4px)",
                          },
                        }}
                      >
                        <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 1, mb: 0.5 }}>
                          <Typography variant="subtitle1" sx={{ color: "white", fontWeight: 700 }}>
                            {item.title}
                          </Typography>
                          {item.current && (
                            <Chip
                              label="Current"
                              size="small"
                              sx={{
                                background: "rgba(139,92,246,0.2)",
                                color: "#c4b5fd",
                                fontWeight: 600,
                                fontSize: "0.7rem",
                                height: 22,
                              }}
                            />
                          )}
                        </Box>
                        <Typography variant="body2" sx={{ color: cfg.color, fontWeight: 600, mb: 0.3 }}>
                          {item.organization}
                        </Typography>
                        <Typography variant="caption" sx={{ color: "grey.500" }}>
                          {item.location} • {item.period}
                        </Typography>
                        <Typography variant="body2" sx={{ color: "grey.400", mt: 1.5, lineHeight: 1.7 }}>
                          {item.description}
                        </Typography>
                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mt: 1.5 }}>
                          {item.tags.map((tag) => (
                            <Chip
                              key={tag}
                              label={tag}
                              size="small"
                              sx={{
                                background: cfg.bg,
                                color: cfg.color,
                                fontSize: "0.7rem",
                                height: 22,
                              }}
                            />
                          ))}
                        </Box>
                      </Paper>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Grid>

          {/* Professional Summary */}
          <Grid item xs={12} md={4}>
            <Paper
              elevation={0}
              sx={{
                background: "rgba(139,92,246,0.05)",
                border: "1px solid rgba(139,92,246,0.15)",
                borderRadius: 3,
                p: 3,
                position: { md: "sticky" },
                top: { md: 100 },
              }}
            >
              <Typography variant="subtitle1" sx={{ color: "white", fontWeight: 700, mb: 2 }}>
                Professional Summary
              </Typography>
              <Typography variant="body2" sx={{ color: "grey.400", lineHeight: 1.9 }}>
                {personal.bio}
              </Typography>

              <Box sx={{ mt: 3, pt: 3, borderTop: "1px solid rgba(139,92,246,0.1)" }}>
                {[
                  { label: "Status", value: "Open to Opportunities" },
                  { label: "Location", value: personal.location },
                  { label: "Email", value: personal.email },
                ].map(({ label, value }) => (
                  <Box key={label} sx={{ display: "flex", gap: 1, mb: 1 }}>
                    <FiberManualRecordIcon sx={{ fontSize: 8, color: "#8b5cf6", mt: 0.8, flexShrink: 0 }} />
                    <Box>
                      <Typography variant="caption" sx={{ color: "grey.500", display: "block" }}>
                        {label}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "grey.300" }}>
                        {value}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
