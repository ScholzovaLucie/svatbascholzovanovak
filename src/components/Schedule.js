import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { Box, Typography } from "@mui/material";

const Schedule = () => {
  const events = [
    { time: "14:00", title: "Obřad", description: "Začátek svatebního obřadu.", icon: <AccessTimeIcon /> },
    { time: "15:00", title: "Focení", description: "Společné focení novomanželů a hostů.", icon: <CameraAltIcon /> },
    { time: "16:00", title: "Hostina", description: "Začátek svatební hostiny.", icon: <RestaurantIcon /> },
  ];

  return (
    <Box sx={{ padding: "50px 20px", textAlign: "center" }}>
      <Typography
        variant="h4"
        align="center"
        sx={{
          fontFamily: "'Playfair Display', serif",
          marginBottom: "30px",
          color: "var(--chocolate-cosmos)",
        }}
      >
        Harmonogram dne
      </Typography>
      <Timeline position="alternate">
        {events.map((event, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align={index % 2 === 0 ? "right" : "left"}
              variant="body2"
              color="text.secondary"
            >
              {event.time}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "var(--chocolate-cosmos)" }} />
              <TimelineDot
                sx={{
                  bgcolor: "rgba(255, 255, 255, 0.5)", // Průhledné pozadí
                  backdropFilter: "blur(5px)", // Sklovitý efekt
                  border: "2px solid var(--cinnabar)", // Červený obrys
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {React.cloneElement(event.icon, {
                  sx: { color: "var(--cinnabar)" }, // Červená barva ikon
                })}
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "var(--chocolate-cosmos)" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                {event.title}
              </Typography>
              <Typography>{event.description}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
};

export default Schedule;