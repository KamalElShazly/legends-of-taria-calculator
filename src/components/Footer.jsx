import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Footer = () => {
  return (
    <Box component="footer" sx={{ marginTop: 5, marginBottom: 2 }}>
      <Container maxWidth="lg">
        <Typography variant="body2" align="center" color="text.secondary" component="p">
          Made by:{" "}
          <Link color="inherit" href="https://discordapp.com/users/kamal9365" rel="noopener" target="_blank">
            Kamal
          </Link>
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          {"All data from "}
          <Link color="inherit" href="https://legendsoftaria.com//" rel="noopener" target="_blank">
            Legends of Taria
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
