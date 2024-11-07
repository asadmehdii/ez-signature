import Sidebar from '@/app/components/sidebar';
import Grid from "@mui/material/Grid2";


 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Grid
      component={"div"}
      container
      flexWrap={"nowrap"}
      // width={"100%"}
    >
      <Grid display={{xs: "none", sm: "none", md: "flex"}} 
      size={{md: 3 ,lg: 2}}
      height={"100%"}
      >
        <Sidebar />
      </Grid>
      <Grid 
      component={"div"}
      size={{md: 9,lg: 10}}
      >{children}</Grid>
    </Grid>
  );
}