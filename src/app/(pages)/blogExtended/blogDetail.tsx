import { Box, Typography } from "@mui/material"
import Assests from "@/app/assests/images"
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

const BlogDetails:React.FC = ()=>{
    return(
        <Box>
            <Typography style={Styles.heading}>Blog</Typography>
            <Box my={2} style={Styles.image} component="img" src={Assests.BlogDetail_1.src} alt={"img_here"}/>
            <Box display={"flex"} justifyContent={'space-between'} alignItems={'center'}>
               <Typography style={Styles.heading}>What’s an API?</Typography>
               <Typography style={Styles.ShareText}><ShareOutlinedIcon sx={{color:"#008BF4"}}/> Share Now</Typography>
            </Box>
               <Typography style={Styles.text}>Posted on: August,2022</Typography>
               <Typography style={Styles.text}>Reading time: 06 Minutes</Typography>
               <Typography mt={2} style={Styles.text}>
                   Business owners are known for wearing many hats – but one area they tend to fall short in is technology. There’s only but so much you can learn about technology without a degree.<br/>
                   This is why outsourcing your IT department is a good idea. But this doesn’t mean business owners shouldn’t get a grasp on some of the technologies they’ll be implementing into their workplace.<br/>
                   For example – APIs. This is a term you’ve likely heard a lot about when researching software and tools for your company. The technical jargon may be a bit confusing, which scares a lot of non-tech saavy people away.<br/>
                   And that’s where we come in. We’re going to quickly break down what APIs are, what they do, and why businesses should use them.<br/>
                   Let’s get started!
              </Typography>
              <Typography style={Styles.heading} my={2}>What is an API (in Layman Terms)?</Typography>
              <Typography style={Styles.text}>
                   API is an acronym for application programming interfaces. While they’ve been getting a name recently, they’ve been around since the 1960s.<br/>
                   You’ll find that many processes consumers and businesses use today via the web are made possible using APIs – but more on that later.
              </Typography>
              <Box my={2} style={Styles.image} component="img" src={Assests.BlogDetail_2.src} alt={"img_here"}/>
              <Typography style={Styles.text}>
                   APIs are used for both mobile and web applications. Each time you tap or click to order, book, or buy something, there’s an API at work.<br/><br/>
                   Even when you download software or rate a song, you’re using an API.<br/><br/>
                   Let’s take a look at the break down of how it’s doing this.<br/><br/>
                   The A in API stands for application, which you’ll find many computerized products using. For example, logging into your bank account using your bank’s mobile app. You’re able to see your balance, past transactions, and can transfer money from one account to another.<br/><br/>
                   In some instances, you’re even able to wire money to someone who has an entirely different bank.<br/><br/>
                   The way this all works is by two software communicating with one another to meet the command of the user. Applications work via inputs and outputs.<br/><br/>
                   You input something and the software outputs whatever it is you’re looking to do – book a flight or hotel, or withdraw money from an ATM. This can be done using customer-facing or back-end apps, such as server software that transfers requests to databases.<br/><br/>
                   Next, we have the programming. Your bank app allows your device to communicate with your bank. The application is programmed to take the information you input (i.e. your login details and transfer requests) and translate it into an output.<br/><br/>
                   For instance, if you input a request to transfer $100 from your checking account to your savings account, the API will verify with your bank that the funds are available for the transaction.<br/><br/>
                   Once your bank grants permission, the app communicates with your bank the amount withdrawn and deposited so it can update your balances.<br/><br/>
                   And last is the interface or (UI/user interface). This enables humans to engage with the application. So in the example with the mobile app, it’s your touch screen and buttons on the screen that allows you to do this.<br/><br/>
                   You type in your login (or use a smart login), go to the transfer funds area, and type in the amount you’d like to transfer.So all-in-all, an API consists of a user interface that’s used by software to access data, server software, or other applications.
              </Typography>
              <Typography my={2} style={Styles.heading}>What Exactly Does an API Do?</Typography>
              <Typography my={2} style={Styles.text}>Now that you have a better understanding of what an API is, it’s time to look closer at how they work. You’ll commonly find APIs used by websites – this is why you may find it useful for your business.</Typography>
              <Box my={2} style={Styles.image} component="img" src={Assests.BlogDetail_3.src} alt={"img_here"}/>
              <Typography style={Styles.text}>
                    One way to demonstrate how an API works is to look at how websites operate. To access a website, you have to type in a URL. That URL then calls to a server and pulls the web page into your browser.<br/><br/>
                    APIs work in a similar fashion – they facilitate calls to a server. But it goes about it in a simpler way. APIs connect the web so that applications, developers, and websites can access databases, services, or assets – similar to an open source software.<br/><br/>
                    You can think of the API as a converter plug that offers a standard set of instructions. Let’s break this down further:<br/>
              </Typography>
              <ul style={Styles.text}>
                <li>APIs all start with shared assets, which is its currency. If you’re a company looking to share assets internally or externally to developers you can do so. This includes services, software, data points, and pieces of code.</li><br/>
                <li>APIs act as the doorway to the server, allowing your recipients (i.e. developers) that receive your assets to build their own software. Plus the API filters out the assets, so that only those particular assets are accessible. After all, you don’t want to open up your entire server to outsiders.</li><br/>
                <li>APIs aren’t always used by end users – in many cases, it’s used by developers to create an app or software using those assets. This has opened the door for businesses to be more creative with data that was previously ignored and unused. Plus, developers can cut their work in half by using existing software components vs starting from scratch.</li><br/>
                <li>This allows apps connected to services and data to offer rich and “smart” experiences for the end user. You’ll also find that apps powered by APIs are compatible with a larger number of operating system and devices, allowing for better experiences.</li><br/>
                <li>In the end, the end user gets to access multiple assets seamlessly on multiple devices. For example, using their social media page to engage with third-party applications and services.</li>
              </ul>
              <Typography my={1} style={Styles.text}>Hopefully, this gives you more insight into how APIs work.</Typography>
              <Box my={2} display={"flex"} alignItems={'center'} gap={2} sx={{cursor:"pointer",width:"fit-content"}}>
              <Box my={2} sx={Styles.avatar} component="img" src={Assests.Avatar.src} alt={"img_here"}/>
               <Box> <Typography sx={Styles.readMore}>Read more from this Author</Typography> <Typography sx={Styles.userName}>Ez Signature</Typography>  </Box>
              </Box>
        </Box>
    )
}

const Styles = {
    image:{
    width:'100%',
    height:"100%",
    },
    ShareText:{
    width:"fit-content",
    padding:"6px 20px",
    borderRadius:"19px",
    cursor:"pointer",
    backgroundColor:"#BDE1FC",    
    fontSize:16,
    fontWeight:400,
    fontFamily:"var(--mada-text)" , 
    color:"#008BF4",
    display:"flex",
    alignItems:"center",
    gap:9
    },
    heading:{
    fontSize:29,
    fontWeight:700,
    fontFamily:"var(--mada-text)"
    },
    text:{
    fontSize:16,
    fontWeight:600,
    fontFamily:"var(--mada-text)" , 
    color:"#59668D"      
    },
    avatar:{
    width:34,
    height:34,
    objectFit:"contain"
    },
    readMore:{
    fontSize:14,
    fontWeight:600,
    fontFamily:"var(--mada-text)",
    lineHeight:"normal"
    },
    userName:{
    fontSize:18,
    fontWeight:700,
    fontFamily:"var(--mada-text)",
    color:"var(--secondary-color)",
    lineHeight:"normal"
    }
}

export default BlogDetails