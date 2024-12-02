import { Tabs, Tab, Typography, Badge } from '@mui/material';
import Grid from "@mui/material/Grid2";


interface TabSectionProp{
    activeTab: number;
    tabLabels: string[];
    handleTabChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const TabSection: React.FC<TabSectionProp> = ({activeTab, handleTabChange, tabLabels}) =>{
   return(
    <>
    <Grid container 
    justifyContent={"flex-end"}
    marginBottom={""}
    >
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        textColor="primary"
        indicatorColor="primary"
        aria-label="document tabs"
      >
        {tabLabels.map((label, index) => (
          <Tab
            key={index}
            label={
              label === 'I need to sign' ? (
                <Badge color="error" badgeContent={1}>
                  {label}
                </Badge>
              ) : (
                label
              )
            }
          />
        ))}
      </Tabs>
</Grid>
      {/* Content Section */}
      <Grid
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="300px"
        border="5px solid gainsboro"
      >
        <Typography variant="body1" color="textSecondary">
          {activeTab === 0 && 'No results to display'}
          {activeTab === 1 && 'No results to display'}
          {activeTab === 2 && 'No results to display'}
          {activeTab === 3 && 'No results to display'}
          {activeTab === 4 && 'No results to display'}
          {activeTab === 5 && 'No results to display'}
        </Typography>
      </Grid>
    </>
   );
}
export default TabSection;