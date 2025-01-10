import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  MenuItem,
} from "@mui/material";

const ReservationForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    adults: 0,
    children: 0,
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Děkujeme, ${form.name}, vaše rezervace byla odeslána!`);
  };

  return (
    <Box
      sx={{
        padding: "50px 20px",
        backgroundColor: "var(--buff)",
        borderRadius: "8px",
        maxWidth: "600px",
        margin: "auto",
      }}
    >
      <Typography variant="h4" gutterBottom align="center" sx={{
        fontFamily: "'Playfair Display', serif",
      }}>
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
              sx={{
                padding: "10px",
                backgroundColor: "var(--cinnabar)",
                "&:hover": { backgroundColor: "var(--chocolate-cosmos)" },
              }}
            >
              Odeslat rezervaci
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default ReservationForm;