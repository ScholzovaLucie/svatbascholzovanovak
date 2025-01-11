import React, { useState } from "react";
import { Box, Typography, TextField, Button, Grid } from "@mui/material";
import emailjs from "emailjs-com";

const ReservationForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    adults: 0,
    children: 0,
    message: "",
  });

  const [sending, setSending] = useState(false); // Indikátor odesílání

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true); // Nastav indikátor odesílání

    const templateParams = {
      name: form.name,
      email: form.email,
      adults: form.adults,
      children: form.children,
      message: form.message,
    };

    emailjs
      .send(
        "service_c0k0zfy", 
        "template_5tuy8db",
        templateParams,
        "rs4VbdOfi0NbYm8Vu"
      )
      .then(
        (response) => {
          alert(`Děkujeme, ${form.name}, vaše rezervace byla odeslána!`);
          setSending(false);
          setForm({ name: "", email: "", adults: 0, children: 0, message: "" }); // Vyprázdnění formuláře
        },
        (error) => {
          alert("Došlo k chybě při odesílání. Zkuste to prosím znovu.");
          setSending(false);
        }
      );
  };

  return (
    <Box
      sx={{
        padding: "50px 20px",
        border: "1px solid var(--cinnabar)", // Ohraničení
        borderRadius: "12px",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", // Jemný stín
        maxWidth: "600px",
        margin: "auto",
        marginBottom: "35px",
        backgroundColor: "rgba(255, 255, 255, 0.5)", // Jemná průhlednost
        backdropFilter: "blur(3px)", // Sklovitý efekt
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        sx={{
          fontFamily: "'Playfair Display', serif",
          color: "var(--chocolate-cosmos)",
          marginBottom: "20px",
        }}
      >
        Rezervační formulář
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Jméno"
              name="name"
              value={form.name}
              onChange={handleChange}
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Počet dospělých"
              name="adults"
              type="number"
              value={form.adults}
              onChange={handleChange}
              variant="outlined"
              required
              inputProps={{ min: 0 }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Počet dětí"
              name="children"
              type="number"
              value={form.children}
              onChange={handleChange}
              variant="outlined"
              inputProps={{ min: 0 }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Zpráva (volitelné)"
              name="message"
              value={form.message}
              onChange={handleChange}
              variant="outlined"
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              color="secondary"
              disabled={sending} // Deaktivace tlačítka během odesílání
              sx={{
                padding: "10px",
                fontWeight: "bold",
                fontSize: "16px",
                backgroundColor: "var(--cinnabar)",
                "&:hover": { backgroundColor: "var(--chocolate-cosmos)" },
              }}
            >
              {sending ? "Odesílám..." : "Odeslat rezervaci"}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default ReservationForm;