import * as React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { Container, Box, Grid, Slider, Typography, Transition, TextField, Link, IconButton} from '@mui/material';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { List, ListItem, ListItemIcon, ListItemAvatar, Avatar, ListItemText } from '@mui/material';
import { Card, CardContent, CardActions } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';

import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HomeIcon from '@mui/icons-material/Home';
import MaleIcon from '@mui/icons-material/Male';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

import SendIcon from '@mui/icons-material/Send';

import styles from './index.module.css';
import { createTheme, ThemeProvider } from '@mui/material';

// 아래 변수를 지정해서 필요할 때 태그로 사용하는 것이 styled-components

// Global_Font Theme
const themefont = createTheme({
	Typography: {
		fontFamily: "'Noto Sans KR', sans-serif"
	}
})

// 
const yearmarks = [
	{
		value: 0,
		label: '2014',
	},
	{
		value: 25,
		label: '2020',
	},
	{
		value: 55,
		label: '2021',
	},
	{
		value: 85,
		label: '2022',
	},
	{
		value: 100,
		label: '2023',
	},
]

// Project_Img
const fadeImg = [
	{
		url: "/ulsanpass_main.jpg",
		caption: "Home"
	},
	{
		url: "/ulsanpass_board.jpg",
		caption: "Board"
	},
	{
		url: "/ulsanpass_mission.jpg",
		caption: "Mission"
	},
]

// Project_Indicator Style
const buttonStyle = {
	width: "40px",
	background: "none",
	border: "0px"
	
}

// Project_Indicator Properties
const arrowprop = {
	prevArrow: <button style={{ ...buttonStyle, marginLeft: "15%", }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#111"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></button>,
    nextArrow: <button style={{ ...buttonStyle, marginRight: "10%", }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#111"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></button>
}

function valueLabelFormat(value) {
	
	var htmlCode;

	if(value == "0")
	{
		htmlCode = (
			<ListItemText>
				<Typography variant="body1" gutterBottom> 2014.02 무거고등학교 졸업</Typography>
				<Typography variant="body1" gutterBottom> 2014.02 동서대학교 컴퓨터공학부 입학</Typography>
			</ListItemText>
		)
	}
	else if(value == "35")
	{
		htmlCode += (
			<ListItemText>
				<Typography variant="body1" gutterBottom> 2020.01 ~ 2020.05 핀란드 오울루대학 교환학생</Typography>
				<Typography variant="body1" gutterBottom> 2020.08 ~ 2021.01 BIPA 인턴</Typography>
			</ListItemText>
		)
	}
	else if(value == "55")
	{
		htmlCode = (
			<ListItemText>
				<Typography variant="body1" gutterBottom> 2021.02 동서대학교 컴퓨터공학전공 졸업</Typography>
				<Typography variant="body1" gutterBottom> 2021.02 ~ 2021.10 부경대학교 JAVA 교육 수료</Typography>
			</ListItemText>
		)
	}
	else if(value == "80")
	{
		htmlCode = (
			<ListItemText>
				<Typography variant="body1" gutterBottom> 2022.07 ~ 2022.11 위클램 스튜디오</Typography>
			</ListItemText>
		)
	}
	else if(value == "100")
	{
		htmlCode = (
			<ListItemText>
				<Typography variant="body1" gutterBottom> 2014.02 무거고등학교 졸업</Typography>
				<Typography variant="body1" gutterBottom> 2014.02 동서대학교 컴퓨터공학부 입학</Typography>
			</ListItemText>
		)
	}
	// return yearmarks.findIndex((mark) => mark.value === value) + 1;
}

export default function portfoli() {

	return (
		<React.Fragment>
			<ThemeProvider theme={themefont}>
{/* 첫번째 컨테이너 */}
				<Container maxWidth="xl" className={styles.container}>
					<Grid container>
						<Grid item xs={6} md={6} xl={6}>
							<Box sx={{
								width: '100%',
								height: '100%',
								display: 'flex',
								justifyContent: 'center',
							}}>
								<List
									sx={{
										display: 'flex',
										flexDirection: 'column', 
										justifyContent: 'center',
										width: '55%',
									}}>
									<img src="/img_I.jpg" />
								</List>
							</Box>
						</Grid>

						<Grid item xs={6} md={6} xl={6}>
						<Box sx={{
								width: '100%',
								height: '100%',
								display: 'flex',
								justifyContent: 'flex-start',
							}}>
								<List
									sx={{
										paddingRight: '35%',
										width: '100%',
									}}>
									<div className={styles.title}> 
										반갑습니다.
										<br/>	웹 개발자 박민석입니다.	
									</div>
									<ListItem className={styles.listitem}>
										<ListItemText primary="연락처" secondary="010-9026-7216"
											classes={{primary: styles.listitemtext, secondary: styles.listdetail}} />
									</ListItem>
									<Divider classes={styles.divider} />
									<ListItem className={styles.listitem}>
										<ListItemText primary="이메일" secondary="cjsan30@gmail.com"
											classes={{primary: styles.listitemtext, secondary: styles.listdetail}} />
									</ListItem>
									<Divider classes={styles.divider} />

									<ListItem className={styles.listitem} >
									{/* button divider */}
										<ListItemText 
											primary="블로그"
											secondary={
												<Link href="https://blog.naver.com/cjsan1000"
													underline='none'
													style= {{
														color: 'black',
													}}
												>
													blog.naver.com/cjsan1000
												</Link>
											}
											classes={{primary: styles.listitemtext, secondary: styles.listdetail}}
										/>
									</ListItem>
									<Divider light />
								</List>
							</Box>
						</Grid>
					</Grid>
					<Box sx={{
						width: '100%',
					}}>
						<Typography className={styles.title}>
							3줄 안으로의 자기소개
							<br/>ㅁ
							<br/>ㅁ
						</Typography>
					</Box>
				</Container>

	{/* 두번째 컨테이너 */}
				<Container maxWidth="xl" className={styles.container}>
					{/* <yearSlider value={state} onChange={(val) => SettingsInputAntenna(val)} /> */}
					<div className={styles.slider}>
						<Slider
							size="large"
							valueLabelFormat={valueLabelFormat}
							step={null}
							marks={yearmarks}

						/>
					</div>
					<List
						sx={{
							paddingLeft: '3%',
							width: '100%',
						}}>
						<ListItem className={styles.listitem}
							style={{
								marginLeft: '14%',
								marginTop: '2%',
								padding: '0%',
							}}>
							<ListItemText>
								<Typography variant="body1" gutterBottom> 2014.02 무거고등학교 졸업</Typography>
								<Typography variant="body1" gutterBottom> 2014.02 동서대학교 컴퓨터공학부 입학</Typography>
							</ListItemText>
						</ListItem>

						<ListItem className={styles.listitem}
							style={{
								marginLeft: '38%',
								marginTop: '2%',
								padding: '0%',
							}}>
							<ListItemText>
								<Typography variant="body1" gutterBottom> 2020.01 ~ 2020.05 핀란드 오울루대학 교환학생</Typography>
								<Typography variant="body1" gutterBottom> 2020.08 ~ 2021.01 BIPA 인턴</Typography>
							</ListItemText>
						</ListItem>

						<ListItem className={styles.listitem}
							style={{
								marginLeft: '52%',
								marginTop: '2%',
								padding: '0%',
							}}>
							<ListItemText>
								<Typography variant="body1" gutterBottom> 2021.02 동서대학교 컴퓨터공학전공 졸업</Typography>
								<Typography variant="body1" gutterBottom> 2021.02 ~ 2021.10 부경대학교 JAVA 교육 수료</Typography>
							</ListItemText>
						</ListItem>
						<ListItem className={styles.listitem}
							style={{
								marginLeft: '70%',
								marginTop: '2%',
								padding: '0%',
							}}>
							<ListItemText>
								<Typography variant="body1" gutterBottom> 2022.07 ~ 2022.11 위클램 스튜디오</Typography>
							</ListItemText>
						</ListItem>
					</List>

				</Container>
				<Container maxWidth="xl" className={styles.container}>
					스택 추가
				</Container>
	{/* 세번째 컨테이너 */}
				<Container maxWidth="xl" className={styles.container}>
						<div className={styles.projectTitle}> 울산패스 </div>
						<Grid container>
							<Grid item xs={6} md={6} xl={6}>
								<div className="slide-container">
									<Fade autoplay={false} {...arrowprop} indicators={true}>
										{fadeImg.map((fadeImg, index) => (
											<div key={index} className="each-fade" >
												<div className="image-container">
													<img src={fadeImg.url} 
														width= "40%"
														style={{
															marginLeft: "32.5%"
														}}
													/>
												</div>
												{/* <h2>{fadeImg.caption}</h2> */}
											</div>
										))}
									</Fade>
								</div>
							</Grid>
							
							<Grid item xs={6} md={6} xl={6}>
								<Box sx={{
									width: '100%',
									height: '100%',
									display: 'flex',
									justifyContent: 'flex-end',
									marginTop: "5%",
								}}>
									<List
										sx={{
											width: '100%',	
										}}>
											<ListItem className={styles.listitem}>
												<ListItemText 
													primary="소속 : 위클램 스튜디오"
													classes={{primary: styles.listitemtext,}} />
											</ListItem>
											<ListItem className={styles.listitem}>
												<ListItemText
													primary="기간 : 22.07 ~ 22.11"
													classes={{primary: styles.listitemtext,}} />
											</ListItem>
											<ListItem className={styles.listitem}>
												<ListItemText 
													primary="울산 해양 관광지를 알리기 위한 모바일 앱으로써,"
													classes={{primary: styles.listitemtext,}} />
											</ListItem>
											<ListItem className={styles.listitem}>
												<ListItemText 
													primary="낯선 Unity를 처음 접해보는 계기가 되었고,"
													classes={{primary: styles.listitemtext,}} />
											</ListItem>
									</List>
								</Box>
							</Grid>
						</Grid>
				</Container>

				<Container maxWidth="xl" className={ styles.footer }>
					<Box sx={{
						width: '100%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						marginTop: 20,
					}}>
						<Typography className={styles.thx}> 방문해주셔서 감사합니다. </Typography>
						
						<Card className={ styles.contact }>
							<CardContent className={styles.cardcontent}>
								<div>
									<TextField 
										sx= {{
											width: { sm: 80, md: 200, lg: 300, xl: 360},
											height: 80,
										}}
										label="이름" 
										variant="standard"
									/>
									<TextField 
										sx= {{
											width: { sm: 80, md: 200, lg: 300, xl: 360},
											height: 80,
											marginLeft: "10%",
										}}
										InputProps={{
											endAdornment: (
											<InputAdornment position="end ">
												<EmailIcon />
											</InputAdornment>
											),
										}}
											id="standard-basic" 
											label="이메일" 
											variant="standard" 
											required />
								</div>
								<TextField
									sx= {{
										width: { sm: 200, md: 400, lg: 600, xl: 800},
										height: 80,
									}}
									id="standard-multiline-flexible" 
									label="메세지" 
									multiline 
									rows={4}
									variant="standard" />
								<CardActions style={{ display: "flex", justifyContent: "center", marginTop: "10%", }}>
									<Button variant="contained" className={styles.sendbtn}> 보내기 	</Button>
								</CardActions>
							</CardContent>
						</Card>	
					</Box>
				</Container>
			</ThemeProvider>
		</React.Fragment>
	)
}