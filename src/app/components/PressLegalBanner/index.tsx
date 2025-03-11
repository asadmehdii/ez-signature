import { FC } from "react";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import Assests from "@/app/assests/images";

type PressLegalProps = {
  textWidth?: number;
  heading: string;
  text: string;
  isButton?: boolean;
  btnText?: string;
  btnLink?: string; // Accept dynamic link
};

const PressLegalBanner: FC<PressLegalProps> = ({
  textWidth,
  heading,
  text,
  isButton = false,
  btnText,
  btnLink,
}) => {
  return (
    <Box
      sx={{ background: `url('${Assests.topBannerBg.src}') no-repeat center` }}
      width={"100%"}
      py={{ xs: "70px", md: "100px" }}
      textAlign={"center"}
      component={"div"}
    >
      <Box px={2} sx={{ placeItems: "center" }}>
        <Typography
          variant="h1"
          fontWeight={"800"}
          fontSize={{ xs: "46px", md: "97px" }}
        >
          {heading}
        </Typography>
        <Typography
          variant="body1"
          maxWidth={`${textWidth}px`}
          my={3}
          fontWeight={"700"}
          fontSize={{ xs: "18px", md: "22px" }}
        >
          {text}
        </Typography>
        {isButton && btnLink && (
          <Link href={btnLink} passHref>
            <Button
              sx={{
                width: "245px",
                height: "67px",
                bgcolor: "#21D0B3",
                borderRadius: "19px",
                color: "#fff",
                fontSize: "18px",
                fontWeight: "600",
              }}
            >
              {btnText}
            </Button>
          </Link>
        )}
      </Box>
    </Box>
  );
};

export default PressLegalBanner;
