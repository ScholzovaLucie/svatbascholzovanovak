import React, { useState } from "react";
import { Box, Typography, TextField, Button, Grid } from "@mui/material";

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
        border: "1px solid var(--cinnabar)", // Ohraničení pro zvýraznění
        borderRadius: "12px",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", // Jemný stín
        maxWidth: "600px",
        margin: "auto",
        marginBottom: "35px",
        backdropFilter: "blur(3px)", // Sklovitý efek
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
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": { borderColor: "var(--cinnabar)" },
                  "&.Mui-focused fieldset": { borderColor: "var(--chocolate-cosmos)" },
                },
              }}
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
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": { borderColor: "var(--cinnabar)" },
                  "&.Mui-focused fieldset": { borderColor: "var(--chocolate-cosmos)" },
                },
              }}
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
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": { borderColor: "var(--cinnabar)" },
                  "&.Mui-focused fieldset": { borderColor: "var(--chocolate-cosmos)" },
                },
              }}
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
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": { borderColor: "var(--cinnabar)" },
                  "&.Mui-focused fieldset": { borderColor: "var(--chocolate-cosmos)" },
                },
              }}
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
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": { borderColor: "var(--cinnabar)" },
                  "&.Mui-focused fieldset": { borderColor: "var(--chocolate-cosmos)" },
                },
              }}
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
                fontWeight: "bold",
                fontSize: "16px",
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