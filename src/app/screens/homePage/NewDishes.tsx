import { Container, Stack, Box } from "@mui/material";
import { CssVarsProvider } from "@mui/joy/styles";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import CardOverflow from "@mui/joy/CardOverflow";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AspectRatio from "@mui/joy/AspectRatio";
import Divider from "../../components/divider/index";

// new dishes data
const newDishes = [
  { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
  { productName: "Kebab", imagePath: "/img/kebab.webp" },
  { productName: "Lavash", imagePath: "/img/lavash.webp" },
];

export default function NewDishes() {
  return (
    <div className="new-products-frame">
      <Container>
        <Stack className="main">
          <Box className="category-title">Popular Dishes</Box>
          <Stack className="cards-frame">
            <CssVarsProvider>
              {newDishes.length !== 0 ? (
                newDishes.map((ele, index) => (
                  <Card key={index} variant="outlined" className="card">
                    <CardOverflow>
                      <div className="product-sale">Normal Size</div>
                      <AspectRatio ratio="1">
                        <img src={ele.imagePath} alt={ele.productName} />
                      </AspectRatio>
                    </CardOverflow>

                    <CardOverflow className="product-detail" variant="soft">
                      <Stack className="info">
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <Typography className="title">
                            {ele.productName}
                          </Typography>
                          <Divider height="64" width="2" bg="#E3C08D" />
                          <Typography className="price">12$</Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center">
                          <Typography className="views">
                            20
                            <VisibilityIcon
                              sx={{ fontSize: 20, marginLeft: "5px" }}
                            />
                          </Typography>
                        </Stack>
                      </Stack>
                    </CardOverflow>
                  </Card>
                ))
              ) : (
                <Box className="no-data">New products are not available!</Box>
              )}
            </CssVarsProvider>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
