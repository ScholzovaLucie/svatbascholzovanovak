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
import StyledCard from "./StyledCard";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import CelebrationIcon from "@mui/icons-material/Celebration";
import DanceIcon from "@mui/icons-material/SportsBar";
import FlowerIcon from "@mui/icons-material/LocalFlorist";
import PartyModeIcon from "@mui/icons-material/EmojiEmotions";
import GroupIcon from "@mui/icons-material/Group";

const Schedule = () => {
  const events = [
    {
      time: "12:00",
      title: "Sraz",
      description: "Sraz na adrese Machov 195, 549 63.",
      icon: <AccessTimeIcon />,
    },
    {
      time: "12:30",
      title: "Odjezd",
      description: "Hromadný odjezd na obřad.",
      icon: <DirectionsBusIcon />,
    },
    {
      time: "13:00",
      title: "Obřad",
      description: "Začátek svatebního obřadu.",
      icon: <CelebrationIcon />,
    },
    {
      time: "14:00",
      title: "Focení",
      description: "Společné focení novomanželů a hostů.",
      icon: <CameraAltIcon />,
    },
    {
      time: "15:00",
      title: "Oběd",
      description: "Rodinný oběd.",
      icon: <RestaurantIcon />,
    },
    {
      time: "16:30",
      title: "Hosté",
      description: "Příjezd odpoledních hostů.",
      icon: <GroupIcon />,
    },
    {
      time: "17:00",
      title: "První tanec",
      description: "První tanec novomanželů.",
      icon: <DanceIcon />,
    },
    {
      time: "17:30",
      title: "Kytka",
      description: "Házení kytkou.",
      icon: <FlowerIcon />,
    },
    {
      time: "18:00",
      title: "Zábava",
      description: "Začátek volné zábavy.",
      icon: <PartyModeIcon />,
    },
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
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          fontFamily: "'Playfair Display', serif",
          color: "var(--chocolate-cosmos)",
          marginBottom: "20px",
        }}
      >
        Časy jsou pouze orientační
      </Typography>
      <StyledCard
        key={"Harmonogram dne"}
        title={""}
        details={
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
                  <TimelineConnector
                    sx={{ bgcolor: "var(--chocolate-cosmos)" }}
                  />
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
                  <TimelineConnector
                    sx={{ bgcolor: "var(--chocolate-cosmos)" }}
                  />
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
        }
        customStyles={{ maxWidth: "600px", margin: "auto" }}
      />
    </Box>
  );
};

export default Schedule;
