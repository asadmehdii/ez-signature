import React from "react";

import { Grid as MuiGrid, Box, Typography } from "@mui/material";
import ContentBox from "../contentBox";
import Text from "../text";
import { EzFeature } from "./content"; // Ensure correct import
import Assests from "@/app/assests/images";
import Link from "next/link"; 

type Props = {
  mt?: number;
  mb?: number;
};

const MoreFeatures: React.FC<Props> = ({ mt, mb }) => {
  return (
    <ContentBox sx={{ marginTop: mt, marginBottom: mb }}>
      <MuiGrid component={"div"}>
        <Typography fontFamily="var(--mada-text)" fontSize={{ xs: 40, md: 65 }} fontWeight={700}>
          Explore more Ezsignature features
        </Typography>
        <Typography maxWidth={1160} fontSize={{ xs: 16, md: 24 }} margin={"10px 0"} fontWeight="600">
          Go paperless and accelerate your business — using Ezsignature you will be equipped with all the tools you need to increase your efficiency working with contracts and agreements of any kind.
        </Typography>
        <MuiGrid container component={"div"} mt={4} rowSpacing={4} justifyContent={"space-between"}>
          {Array.isArray(EzFeature) &&
            EzFeature.map((item, index) => {
              const featureName = item?.featureName ? item.featureName.replace(/\s+/g, "-") : `feature-${index}`;
              const navigatePath = item?.navigate ? `${item.navigate}?feature=${featureName}` : "#";

              return (
<MuiGrid
                  item
                  xs={12}
                  sm={6}
                  md={3}
                  key={featureName}
                  display="flex"
                  justifyContent="center"
                >
                  <Link href={navigatePath} passHref>
                    <Box
                      component="div"
                      sx={{
                        width: "100%",
                        maxWidth: 277,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        cursor: "pointer",
                      }}
                    >
                      {item?.icon?.src && (
                        <Box
                          component="img"
                          sx={Styles.bgEllipseImage}
                          src={item.icon.src}
                          alt={featureName}
                        />
                      )}
                      <Text fontWeight="800" fontSize="22px" marginTop={2}>
                        {item.featureName || "Feature"}
                      </Text>
                    </Box>
                  </Link>
                </MuiGrid>
              );
            })}
        </MuiGrid>
      </MuiGrid>
    </ContentBox>
  );
};

const Styles = {
  bgEllipseImage: {
    width: "45px",
    height: "45px",
    objectFit: "contain",
    background: Assests?.BackgroundEllipse?.src ? `url("${Assests.BackgroundEllipse.src}")` : "none",
    backgroundSize: "90%",
    backgroundRepeat: "no-repeat",
    padding: "8px",
    backgroundPosition: "bottom left",
  },
};

export default MoreFeatures;
