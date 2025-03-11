import Topbar from "@/app/components/dashboardTopbar/topbar";
import Grid from "@mui/material/Grid2";
import Checkbox from '@mui/material/Checkbox';
import { grey } from '@mui/material/colors';
import Text from "@/app/components/text";
import { Help, DraftsOutlined} from '@mui/icons-material';



export default function SigningPreferencesPage() {
return(
    <Topbar  title="Signing Preferences" buttonText="Save Changes">
            <Grid component={"div"} container direction={"column"} marginInline={"20px"} marginBottom={"40px"}>
        {/* General seting */}
        <Grid component={"div"} container border= {"1px solid #d7d7d9"} borderRadius={"3px"} >
          {/* 1st div */}
          <Grid component={"div"} container direction={"row"} gap={1} alignItems={"center"} borderBottom={"1px solid #e8e8e9"} sx={{background: "rgba(25, 118, 210, 0.08)"}} height={"50%"} width={"100%"} padding= {"10px 20px"}>
              <Text fontSize="1rem" color="rgb(0 8 61)">General settings</Text>
          </Grid>
      {/* 2nd div */}
      <Grid component={"div"} container direction={"column"} padding={"15px 20px"} width={"100%"} borderBottom={"1px solid #c7c7c9"}>
      <Grid component={"div"} container alignItems={"center"}>
        <Checkbox defaultChecked  size="small" sx={{padding: "4px 4px 4px 0"}} />
        <Text fontSize="1rem" color="rgb(0 8 61)">Enable document signing status page for all documents </Text>
        <Help fontSize="small" sx={{color: grey[300], marginLeft: "5px"}} />
        </Grid>
        <Grid component={"div"} container alignItems={"center"}>
        <Checkbox defaultChecked size="small" sx={{padding: "4px 4px 4px 0"}}/>
        <Text fontSize="1rem" color="rgb(0 8 61)">Show signer & CC email addresses on signing status page</Text>
        <Help fontSize="small" sx={{color: grey[300], marginLeft: "5px"}} />
        </Grid> 
        <Grid component={"div"} container alignItems={"center"}>
        <Checkbox  size="small" sx={{padding: "4px 4px 4px 0"}}/>
        <Text fontSize="1rem" color="rgb(0 8 61)">Disable PDF document download for incomplete documents</Text>
        <Help fontSize="small" sx={{color: grey[300], marginLeft: "5px"}} />
        </Grid> 
        <Grid component={"div"} container alignItems={"center"}>
        <Checkbox  size="small" sx={{padding: "4px 4px 4px 0"}}/>
        <Text fontSize="1rem" color="rgb(0 8 61)">Hide Xodo Sign branding on document signing page</Text>
        <Help fontSize="small" sx={{color: grey[300], marginLeft: "5px"}} />
        </Grid> 
        <Grid component={"div"} container alignItems={"center"}>
        <Checkbox  size="small" sx={{padding: "4px 4px 4px 0"}}/>
        <Text fontSize="1rem" color="rgb(0 8 61)">Include the document hash on every page of completed documents</Text>
        <Help fontSize="small" sx={{color: grey[300], marginLeft: "5px"}} />
        </Grid> 
        <Grid component={"div"} container alignItems={"center"}>
        <Checkbox  size="small" sx={{padding: "4px 4px 4px 0"}}/>
        <Text fontSize="1rem" color="rgb(0 8 61)">Disallow overage billing for Signer Authentication via SMS.</Text>
        <Help fontSize="small" sx={{color: grey[300], marginLeft: "5px"}} />
        </Grid>      
      </Grid>
      </Grid>

      {/* signature type */}

      <Grid component={"div"} container marginTop={"30px"} border= {"1px solid #d7d7d9"} borderRadius={"3px"} >
          {/* 1st div */}
          <Grid component={"div"} container direction={"row"} gap={1} alignItems={"center"} borderBottom={"1px solid #e8e8e9"} sx={{background: "rgba(25, 118, 210, 0.08)"}} height={"50%"} width={"100%"} padding= {"10px 20px"}>
              <Text fontSize="1rem" color="rgb(0 8 61)">Signature Type</Text>
          </Grid>
      {/* 2nd div */}
      <Grid component={"div"} container direction={"column"} padding={"15px 20px"} width={"100%"} borderBottom={"1px solid #c7c7c9"}>
      <Grid component={"div"} container alignItems={"center"}>
        <Checkbox defaultChecked size="small" sx={{padding: "4px 4px 4px 0"}} />
        <Text fontSize="1rem" color="rgb(0 8 61)">Allow signatures to be drawn</Text>
        </Grid>
        <Grid component={"div"} container alignItems={"center"}>
        <Checkbox defaultChecked size="small" sx={{padding: "4px 4px 4px 0"}}/>
        <Text fontSize="1rem" color="rgb(0 8 61)">Allow signatures to be typed</Text>
        </Grid>
        <Grid component={"div"} container alignItems={"center"}>
        <Checkbox defaultChecked size="small" sx={{padding: "4px 4px 4px 0"}}/>
        <Text fontSize="1rem" color="rgb(0 8 61)">Allow signatures to be uploaded</Text>
        </Grid>      
      </Grid>
      </Grid>

{/* signature & recipients */}

<Grid component={"div"} container marginTop={"30px"} border= {"1px solid #d7d7d9"} borderRadius={"3px"} >
          {/* 1st div */}
          <Grid component={"div"} container direction={"row"} gap={1} alignItems={"center"} borderBottom={"1px solid #e8e8e9"} sx={{background: "rgba(25, 118, 210, 0.08)"}} height={"50%"} width={"100%"} padding= {"10px 20px"}>
              <Text fontSize="1rem" color="rgb(0 8 61)">Signer & Recipients</Text>
          </Grid>
      {/* 2nd div */}
      <Grid component={"div"} container direction={"column"} padding={"15px 20px"} width={"100%"} borderBottom={"1px solid #c7c7c9"}>
      <Grid component={"div"} container alignItems={"center"}>
        <Checkbox  size="small" sx={{padding: "4px 4px 4px 0"}} />
        <Text fontSize="1rem" color="rgb(0 8 61)">Allow signers to decline documents</Text>
        <Help fontSize="small" sx={{color: grey[300], marginLeft: "5px"}} />
        </Grid>
        <Grid component={"div"} container alignItems={"center"}>
        <Checkbox  size="small" sx={{padding: "4px 4px 4px 0"}}/>
        <Text fontSize="1rem" color="rgb(0 8 61)">Require the submission of a reason when a document is declined</Text>
        <Help fontSize="small" sx={{color: grey[300], marginLeft: "5px"}} />
        </Grid>
        <Grid component={"div"} container alignItems={"center"}>
        <Checkbox  size="small" sx={{padding: "4px 4px 4px 0"}}/>
        <Text fontSize="1rem" color="rgb(0 8 61)">Allow signers to reassign documents to someone else</Text>
        <Help fontSize="small" sx={{color: grey[300], marginLeft: "5px"}} />
        </Grid>  
        <Grid component={"div"} container alignItems={"center"}>
        <Checkbox  size="small" sx={{padding: "4px 4px 4px 0"}}/>
        <Text fontSize="1rem" color="rgb(0 8 61)">Allow signers to view attachments uploaded by other signers</Text>
        <Help fontSize="small" sx={{color: grey[300], marginLeft: "5px"}} />
        </Grid>
        <Grid component={"div"} container alignItems={"center"}>
        <Checkbox  size="small" sx={{padding: "4px 4px 4px 0"}}/>
        <Text fontSize="1rem" color="rgb(0 8 61)">Require signers to complete each signature/initials field separately</Text>
        <Help fontSize="small" sx={{color: grey[300], marginLeft: "5px"}} />
        </Grid>
        <Grid component={"div"} container alignItems={"center"}>
        <Checkbox  size="small" sx={{padding: "4px 4px 4px 0"}}/>
        <Text fontSize="1rem" color="rgb(0 8 61)"> Require signers to skip through optional fields during the signing process</Text>
        <Help fontSize="small" sx={{color: grey[300], marginLeft: "5px"}} />
        </Grid>
        <Grid component={"div"} container alignItems={"center"}>
        <Checkbox  size="small" sx={{padding: "4px 4px 4px 0"}}/>
        <Text fontSize="1rem" color="rgb(0 8 61)">Enable one-click signing for signature/initials fields </Text>
        <Help fontSize="small" sx={{color: grey[300], marginLeft: "5px"}} />
        </Grid>
        <Grid component={"div"} container alignItems={"center"}>
        <Checkbox  size="small" sx={{padding: "4px 4px 4px 0"}}/>
        <Text fontSize="1rem" color="rgb(0 8 61)">Enable recipients to set up an Xodo Sign account after signing a document</Text>
        <Help fontSize="small" sx={{color: grey[300], marginLeft: "5px"}} />
        </Grid>
        <Grid component={"div"} container alignItems={"center"}>
        <Checkbox  size="small" sx={{padding: "4px 4px 4px 0"}}/>
        <Text fontSize="1rem" color="rgb(0 8 61)">Enable autoscroll navigation for signers</Text>
        <Help fontSize="small" sx={{color: grey[300], marginLeft: "5px"}} />
        <span style={{color: "#7B341E", background: "#FF7D1B", fontWeight: "700", fontSize:"0.75rem", borderRadius: "0.125rem", padding: "0.25rem", marginLeft: "8px"}}>EXPERIMENT</span>
        <span style={{color: "#2a4365", background: "#bee3f8", fontWeight: "700", fontSize:"0.75rem", borderRadius: "0.125rem", padding: "0.25rem", marginLeft: "8px"}}>DESKTOP</span>

        </Grid>
            
      </Grid>
      </Grid>

      {/* disclaimer */}
      <Grid component={"div"} container marginTop={"30px"} border= {"1px solid #d7d7d9"} borderRadius={"3px"} >
          {/* 1st div */}
          <Grid component={"div"} container direction={"row"} gap={1} alignItems={"center"} borderBottom={"1px solid #e8e8e9"} sx={{background: "rgba(25, 118, 210, 0.08)"}} height={"50%"} width={"100%"} padding= {"10px 20px"}>
              <Text fontSize="1rem" color="rgb(0 8 61)">Signer & Recipients</Text>
          </Grid>
      {/* 2nd div */}
      <Grid component={"div"} container direction={"column"} padding={"15px 20px"} width={"100%"} borderBottom={"1px solid #c7c7c9"}>
      <Grid component={"div"} container alignItems={"center"}>
        <Checkbox  size="small" sx={{padding: "4px 4px 4px 0"}} />
        <Text fontSize="1rem" color="rgb(0 8 61)">Enable Custom Disclaimer Notice</Text>
        </Grid>
        </Grid>
        {/* 3rd */}
        <Grid component={"div"} container direction={"column"} padding={"15px 20px"} width={"100%"} borderBottom={"1px solid #c7c7c9"}>
      <Grid component={"div"} container alignItems={"center"} direction={"row"} marginBottom={"8px"}>
        <Text marginBottom={6} paddingTop={5} fontWeight="500" fontSize="1rem" color="rgb(0 8 61)">Custom Disclaimer Notice</Text>
        <Help fontSize="small" sx={{color: grey[300], marginLeft: "5px"}} />
        </Grid> 
        <textarea name="" id="" className="title_input" style={{padding: "5px 3px"}}>Enter Your Custom disclaimer notice here</textarea>
        
   
      </Grid>
        </Grid>

        {/* redirects */}
        <Grid component={"div"} container marginTop={"30px"} border= {"1px solid #d7d7d9"} borderRadius={"3px"} >
          {/* 1st div */}
          <Grid component={"div"} container direction={"row"} gap={1} alignItems={"center"} borderBottom={"1px solid #e8e8e9"} sx={{background: "rgba(25, 118, 210, 0.08)"}} height={"50%"} width={"100%"} padding= {"10px 20px"}>
              <DraftsOutlined fontSize="small" />
              <Text fontSize="0.875rem" color="rgb(0 8 61)">Redirects</Text>
          </Grid>
          {/* 2nd div */}
          <Grid component={"div"} container direction={"column"} padding={"15px 20px"} width={"100%"} borderBottom={"1px solid #c7c7c9"}>
      <Grid component={"div"} container alignItems={"center"} direction={"row"} marginBottom={"8px"}>
        <Text marginBottom={6} paddingTop={5} fontWeight="500" fontSize="1rem" color="rgb(0 8 61)">Post-Signature Completion Redirect URL</Text>
        <Help fontSize="small" sx={{color: grey[300], marginLeft: "5px"}} />
        </Grid> 
        <input type="text" className="title_input" placeholder="http://website.com" style={{height: "35px"}}/>     
   
      </Grid>
          {/* 3rd div */}
          <Grid component={"div"} container direction={"column"} padding={"15px 20px"} width={"100%"} borderBottom={"1px solid #c7c7c9"}>
      <Grid component={"div"} container alignItems={"center"} direction={"row"} marginBottom={"8px"}>
        <Text marginBottom={6} paddingTop={5} fontWeight="500" fontSize="1rem" color="rgb(0 8 61)">Post-Signature Decline Redirect URL</Text>
        <Help fontSize="small" sx={{color: grey[300], marginLeft: "5px"}} />
        </Grid> 
        <input type="text" className="title_input" placeholder="http://website.com" style={{height: "35px"}}/>     
   
      </Grid>
          </Grid>

</Grid>

    </Topbar>
)
}