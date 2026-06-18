import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  IconButton,
  Link,
  Alert,
  Snackbar,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SendIcon from "@mui/icons-material/Send";
import { personal } from "../data/portfolioData";

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

const inputSx = {
  "& .MuiOutlinedInput-root": {
    color: "white",
    "& fieldset": { borderColor: "rgba(139,92,246,0.3)" },
    "&:hover fieldset": { borderColor: "rgba(139,92,246,0.6)" },
    "&.Mui-focused fieldset": { borderColor: "#8b5cf6" },
  },
  "& .MuiInputLabel-root": { color: "grey.500" },
  "& .MuiInputLabel-root.Mui-focused": { color: "#8b5cf6" },
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [snackbar, setSnackbar] = useState({ open: false, msg: "", severity: "success" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setSnackbar({ open: true, msg: "Please fill in all required fields.", severity: "error" });
      return;
    }
    // Opens default email client with pre-filled content
    const subject = encodeURIComponent(form.subject || `Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:${personal.email}?subject=${subject}&body=${body}`);
    setSnackbar({ open: true, msg: "Opening your email client...", severity: "success" });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <EmailIcon />,
      label: "Email",
      value: personal.email,
      href: `mailto:${personal.email}`,
    },
    {
      icon: <PhoneIcon />,
      label: "Phone",
      value: personal.phone,
      href: `tel:${personal.phone}`,
    },
    {
      icon: <LocationOnIcon />,
      label: "Location",
      value: personal.location,
      href: "https://maps.google.com/",
    },
  ];

  return (
    <Box
      id="contact"
      sx={{
        py: 12,
        background: "linear-gradient(180deg, #0a0a14 0%, #0d0d1f 100%)",
      }}
    >
      <Container maxWidth="lg">
        <SectionHeading
          overline="Get In Touch"
          title="Get In Touch"
          subtitle="I'm always interested in new opportunities and exciting projects. Let's connect!"
        />

        <Grid container spacing={5}>
          {/* Left – contact info */}
          <Grid item xs={12} md={5}>
            <Paper
              elevation={0}
              sx={{
                background: "rgba(139,92,246,0.05)",
                border: "1px solid rgba(139,92,246,0.15)",
                borderRadius: 3,
                p: 4,
                height: "100%",
              }}
            >
              <Typography variant="h5" sx={{ color: "white", fontWeight: 700, mb: 1 }}>
                Let's Talk
              </Typography>
              <Typography variant="body2" sx={{ color: "grey.400", mb: 4, lineHeight: 1.8 }}>
                I'm currently available for freelance work and new opportunities. Whether you have a project in mind,
                want to collaborate, or just want to say hello, I'd love to hear from you.
              </Typography>

              {contactInfo.map(({ icon, label, value, href }) => (
                <Box
                  key={label}
                  component={Link}
                  href={href}
                  target="_blank"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    mb: 2.5,
                    p: 2,
                    borderRadius: 2,
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(139,92,246,0.1)",
                    textDecoration: "none",
                    transition: "all 0.2s",
                    "&:hover": { background: "rgba(139,92,246,0.1)", borderColor: "rgba(139,92,246,0.3)" },
                  }}
                >
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: 2,
                      background: "rgba(139,92,246,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#8b5cf6",
                      flexShrink: 0,
                    }}
                  >
                    {icon}
                  </Box>
                  <Box>
                    <Typography variant="caption" sx={{ color: "grey.500", display: "block" }}>
                      {label}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "grey.200" }}>
                      {value}
                    </Typography>
                  </Box>
                </Box>
              ))}

              <Typography variant="overline" sx={{ color: "grey.500", letterSpacing: 2, display: "block", mt: 3, mb: 1.5 }}>
                Follow Me
              </Typography>
              <Box sx={{ display: "flex", gap: 1 }}>
                <IconButton
                  href={personal.github}
                  target="_blank"
                  sx={{
                    background: "rgba(255,255,255,0.05)",
                    color: "grey.300",
                    "&:hover": { background: "rgba(139,92,246,0.2)", color: "#c4b5fd" },
                  }}
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton
                  href={personal.linkedin}
                  target="_blank"
                  sx={{
                    background: "rgba(255,255,255,0.05)",
                    color: "grey.300",
                    "&:hover": { background: "rgba(6,182,212,0.2)", color: "#67e8f9" },
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
              </Box>
            </Paper>
          </Grid>

          {/* Right – contact form */}
          <Grid item xs={12} md={7}>
            <Paper
              elevation={0}
              component="form"
              onSubmit={handleSubmit}
              sx={{
                background: "rgba(139,92,246,0.05)",
                border: "1px solid rgba(139,92,246,0.15)",
                borderRadius: 3,
                p: 4,
              }}
            >
              <Typography variant="h5" sx={{ color: "white", fontWeight: 700, mb: 3 }}>
                Send Message
              </Typography>

              <Grid container spacing={2.5}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Your Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    fullWidth
                    sx={inputSx}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Your Email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    fullWidth
                    sx={inputSx}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    fullWidth
                    sx={inputSx}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Your Message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    fullWidth
                    multiline
                    rows={5}
                    sx={inputSx}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    endIcon={<SendIcon />}
                    fullWidth
                    sx={{
                      background: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
                      py: 1.4,
                      fontWeight: 600,
                      textTransform: "none",
                      fontSize: "1rem",
                      borderRadius: 2,
                      "&:hover": {
                        background: "linear-gradient(135deg, #a78bfa, #7c3aed)",
                        transform: "translateY(-2px)",
                        boxShadow: "0 8px 25px rgba(139,92,246,0.35)",
                      },
                      transition: "all 0.2s",
                    }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity={snackbar.severity} variant="filled" onClose={() => setSnackbar({ ...snackbar, open: false })}>
          {snackbar.msg}
        </Alert>
      </Snackbar>
    </Box>
  );
}
