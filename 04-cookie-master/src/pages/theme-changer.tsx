import { Layout } from "@/components/layout";
import {
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { ChangeEvent, FC, useState } from "react";
import Cookies from "js-cookie";
import { GetServerSideProps } from "next";

const ThemeChangerPage: FC = (props) => {
  console.log({ props });
  const [currentTheme, setCurrentTheme] = useState("light");
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedTheme = event.target.value;
    setCurrentTheme(selectedTheme);

    Cookies.set("theme", selectedTheme);
  };
  return (
    <Layout>
      <Card>
        <CardContent>
          <FormControl>
            <FormLabel>Tema</FormLabel>
            <RadioGroup value={currentTheme} onChange={onChange}>
              <FormControlLabel
                value={"light"}
                control={<Radio></Radio>}
                label="Light"
              ></FormControlLabel>
              <FormControlLabel
                value={"dark"}
                control={<Radio></Radio>}
                label="Dark"
              ></FormControlLabel>
              <FormControlLabel
                value={"custom"}
                control={<Radio></Radio>}
                label="Custom"
              ></FormControlLabel>
            </RadioGroup>
          </FormControl>
        </CardContent>
      </Card>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { theme = "light", name = "No name" } = req.cookies;
  return {
    props: {
      theme,
      name,
    },
  };
};

export default ThemeChangerPage;
