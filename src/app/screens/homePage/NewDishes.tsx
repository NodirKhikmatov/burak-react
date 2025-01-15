import { Container, Stack, Box } from "@mui/material";
import { CssVarsProvider } from "@mui/joy/styles";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import CardOverflow from "@mui/joy/CardOverflow";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AspectRatio from "@mui/joy/AspectRatio";
import Divider from "../../components/divider/index";
const newDishes = [
  { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
  { productName: "Kebab", imagePath: "/img/kebab.webp" },
  { productName: "Lavash", imagePath: "/img/lavash.webp" },
];

export default function NewDishes() {
  return (
    <div className={"new-products-frame"}>
      <Container>
        <Stack className={"main"}>
          <Box className={"category-title"}>Popular Dishes </Box>
          <Stack className={"cards-frame"}>
            <CssVarsProvider>
              {newDishes.map((ele, index) => {
                return (
                  <Card key={index} variant="outlined" className={"card"}>
                    <CardOverflow>
                      <div className={"product-sale"}>Normal Sizs</div>
                      <AspectRatio ratio="1">
                        <img src={ele.imagePath} alt="" />{" "}
                      </AspectRatio>
                    </CardOverflow>

                    <CardOverflow className={"product-detail"} variant="soft">
                      <Stack className="info">
                        <Stack className={"row"}>
                          <Typography className={"title"}>
                            {ele.productName}
                          </Typography>
                          <Divider width="2" height="24" bg="#d9d9d9" />
                          <Typography className={"price"}>12$</Typography>
                        </Stack>
                        <Stack>
                          <Typography className={"views"}>
                            20
                            <VisibilityIcon
                              sx={{ fontSize: 20, marginLeft: "5px" }}
                            />{" "}
                          </Typography>
                        </Stack>
                      </Stack>
                    </CardOverflow>
                  </Card>
                );
              })}
            </CssVarsProvider>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
