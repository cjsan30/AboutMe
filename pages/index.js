import { Fragment } from "react"
import Link from "next/link"
// import 'react-slideshow-image/dist/style.css';
import { Container, Box, Grid, Slider, Typography, Transition, TextField, IconButton} from '@mui/material'
import { List, ListItem, ListItemIcon, ListItemAvatar, Avatar, ListItemText } from '@mui/material'

import styled from "./index.module.css"
import CheckRoundedIcon from '@mui/icons-material/CheckRounded'
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import NewspaperRoundedIcon from '@mui/icons-material/NewspaperRounded';
// 아래 변수를 지정해서 필요할 때 태그로 사용하는 것이 styled-components



export default function Main() {
	return (
		<Fragment>
			<Container maxWidth="lg">
				<Grid container>
					<Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
						<Box className={styled.introbox}>
						<List sx={{
								display: "fixed",
							}}>
								<img src="img_I.jpg"/>
							</List>
						</Box>
					</Grid>

					<Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
						<Box className={styled.introbox}>
						<List sx={{
								width: "100%",
								margin: "0% 0% 0% 5%",
							}}>
								<Typography className={styled.title} noWrap>
									웹 개발자 박민석입니다.
								</Typography>
								<ListItem>
									<ListItemIcon>
										<CheckRoundedIcon 
											fontSize="medium"
											sx={{color: "#006400"}}
										/>
									</ListItemIcon>
									<ListItemText
										primary="새로운 기술에 대한 관심이 높습니다"
									/>
								</ListItem>
								<ListItem>
									<ListItemIcon>
										<CheckRoundedIcon 
											fontSize="medium"
											sx={{color: "#006400"}}
										/>
									</ListItemIcon>
									<ListItemText
										primary="동료들과의 소통을 중요하게 여깁니다"
									/>
								</ListItem>
								<ListItem>
									<ListItemIcon>
										<CheckRoundedIcon 
											fontSize="medium"
											sx={{color: "#006400"}}
										/>
									</ListItemIcon>
									<ListItemText
										primary="대충 삽니다"
									/>
								</ListItem>
								<ListItem>
									<Grid sx={{
										width: "100%",
										marginTop: "20%",
									}}>
										<Grid item>
											<List sx={{
												width: "50%",
												float: "left",
											}}>
												<Typography sx={{fontSize: "32px", marginBottom: "10%", fontFamily: "nanumbarunb", color: "#006400"}}>Contact</Typography>
												<ListItem>
													<ListItemIcon>
														<PhoneIcon
															fontSize="medium"
															/>
													</ListItemIcon>
													<Typography> 010-9026-7216 </Typography>
												</ListItem>

												<ListItem>
												<ListItemIcon>
													<EmailIcon
														fontSize="medium"
													/>
											</ListItemIcon>
													<Typography> cjsan30@gmail.com </Typography>
												</ListItem>
											</List>
										</Grid>
										<Grid item> 
											<List sx={{
												width: "40%",
												float: "left",
												marginLeft: "10%",
												
											}}>
													<Typography sx={{fontSize: "32px", marginBottom: "10%", fontFamily: "nanumbarunb", color: "#006400"}}>Channel</Typography>
													<ListItem>
														<ListItemIcon>
															<NewspaperRoundedIcon
																fontSize="medium"
															/>
														</ListItemIcon>
														<Link href="https://blog.naver.com/cjsan1000">
																<Typography> blog.naver.com/cjsan1000 </Typography>
														</Link>
													</ListItem>

													<ListItem>
													<ListItemIcon>
														<GitHubIcon
															fontSize="medium"
														/>
													</ListItemIcon>
													<Link href="https://github.com/cjsan30">
															<Typography> github.com/cjsan30 </Typography>
													</Link>
												</ListItem>
											</List>
										</Grid>
									</Grid>
								</ListItem>
							</List>
						</Box>
					</Grid>
				</Grid>
			</Container> 
			{/* 자기소개 */}


			<Container maxWidth="lg" className={styled.skills}>
				<Typography sx={{ fontSize: "40px", marginBottom: "4%", fontFamily: "nanumbarunb", color: "#006400"}}> Skills </Typography> 
					<Grid container>
						<Grid item xs={3} md={3} xl={3}>
							<Typography className={styled.skillcate}> Front-End </Typography>
							<img src="javascript.png"/>
							<img src="next.svg" />
						</Grid>
						<Grid item xs={3} md={3} xl={3}>
							<Typography className={styled.skillcate}> Back-End </Typography>
							<img src="node.png" />
							<img src="/" />
						</Grid>
						<Grid item xs={3} md={3} xl={3}>
							<Typography className={styled.skillcate}> DB </Typography>
							<img src="oracle.png" />
							<img src="mysql.png" />
						</Grid>
						<Grid item xs={3} md={3} xl={3}>
							<Typography className={styled.skillcate}> Communication </Typography>
							<img src="github.png" />
							<img src="sourcetree.png" />
						</Grid>
					</Grid> 
				<Grid container sx={{marginTop: "10%",}}>
				<List sx={{width:"50%",}}>
					<Typography sx={{ fontSize: "40px", fontFamily: "nanumbarunb", marginBottom: "20%", color: "#006400"}}> Education </Typography>
					<ListItemText
						primary="동서대학교 컴퓨터공학부 졸업" secondary="2014. 02 ~ 2021. 02"
						classes={{primary: styled.edupri, secondary: styled.edusec}}
					/>
					<ListItemText
						primary="핀란드 오울루 대학 교환학생" secondary="2020. 01 ~ 2020. 05"
						classes={{primary: styled.edupri, secondary: styled.edusec}}
					/>
					<ListItemText
						primary="부경대학교 Java 웹 개발 교육과정" secondary="2021. 02 ~ 2021. 10"
						classes={{primary: styled.edupri, secondary: styled.edusec}}
					/>
				</List>
				<List sx={{width:"50%",}}>
					<Typography sx={{ fontSize: "40px", fontFamily: "nanumbarunb", marginBottom: "20%", color: "#006400"}}> Career </Typography>
					<ListItemText
						primary="부산정보산업진흥원 아마존혁신센터 현장실습" secondary="2020. 07 ~ 2021. 01"
						classes={{primary: styled.edupri, secondary: styled.edusec}}
					/>
						<ListItemText
						primary="위클램 스튜디오" secondary="2022. 07 ~ 2022. 11"
						classes={{primary: styled.edupri, secondary: styled.edusec}}
					/>
				</List>
				</Grid>
			</Container>
			{/* 기술스택, 교육사항, 경력사항 */}

			<Container maxWidth="lg" className={styled.projectCon}>
				<Typography sx={{ fontSize: "40px", fontFamily: "nanumbarunb", marginBottom: "10%", color: "#006400"}}> Project </Typography>
					<Grid container>
						<Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
							<img src="test00.jpg" />
						</Grid>
						<Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
							<Grid container>
								<Grid item xs={4} sm={2} md={2} lg={6} xl={6}>
									<Typography> 프로젝트 명 : 울산패스</Typography>
									<Typography> 프로젝트 기간</Typography>
									<Typography> 프로젝트 성격</Typography>
									<Typography> 프로젝트 업무</Typography>
									
								</Grid>
								{/* <Grid item xs={8} sm={10} md={10} lg={6} xl={6}>
									<Typography> 울산패스 </Typography>
									<Typography> 2022.07 - 2022.11 </Typography>
									<Typography> 위클램 스튜디오 </Typography>
									<Typography> Unity를 사용해 메인화면과, MBTI, 게시판의 UI/UX 부분을 맡았으며, MBTI를 통해 관광지를 추천해주는 간단한 기능 구현 진행함
										문제점 : 생소한 Unity를 가지고 단 시간 내에 성과를 내야하는 상황, 우선 Unity와 친해지기 위해 Editor를 유심히 만져보았고, 상사분에게 필요한 기능을 상세하게 요구함으로써 공식문서를 찾는데 걸리는 시간이 단축되었음 </Typography>
									<br /><br />
									<Link href="/"><Typography> 구글 스토어 링크</Typography></Link>
								</Grid> */}
							</Grid>
						</Grid>
					</Grid>

					<Grid container sx={{marginLeft: "0%",}}>
					<Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
							<img src="test01.jpg" />
						</Grid>
						<Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
							<Grid container>
							<Grid item xs={4} sm={2} md={2} lg={6} xl={6}>
									<Typography> 프로젝트 명</Typography>
									<Typography> 프로젝트 기간</Typography>
									<Typography> 프로젝트 성격</Typography>
									<Typography> 프로젝트 업무</Typography>
								</Grid>
								<Grid item xs={8} sm={10} md={10} lg={6} xl={6}>
									<Typography> 울산패스 </Typography>
									<Typography> 2022.07 - 2022.11 </Typography>
									<Typography> 위클램 스튜디오 </Typography>
									<Typography> Unity를 사용해 메인화면과, MBTI, 게시판의 UI/UX 부분을 맡았으며, MBTI를 통해 관광지를 추천해주는 간단한 기능 구현 진행함
										문제점 : 생소한 Unity를 가지고 단 시간 내에 성과를 내야하는 상황, 우선 Unity와 친해지기 위해 Editor를 유심히 만져보았고, 상사분에게 필요한 기능을 상세하게 요구함으로써 공식문서를 찾는데 걸리는 시간이 단축되었음 </Typography>
								</Grid>
							</Grid>
						</Grid>
					</Grid>

					<Grid container sx={{marginLeft: "0%",}}>
					<Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
							<img src="test02.jpg" />
						</Grid>
						<Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
							<Grid container>
							<Grid item xs={4} sm={2} md={2} lg={6} xl={6}>
									<Typography> 프로젝트 명</Typography>
									<Typography> 프로젝트 기간</Typography>
									<Typography> 프로젝트 성격</Typography>
									<Typography> 프로젝트 업무</Typography>
								</Grid>
								<Grid item xs={8} sm={10} md={10} lg={6} xl={6}>
									<Typography> 울산패스 </Typography>
									<Typography> 2022.07 - 2022.11 </Typography>
									<Typography> 위클램 스튜디오 </Typography>
									<Typography> Unity를 사용해 메인화면과, MBTI, 게시판의 UI/UX 부분을 맡았으며, MBTI를 통해 관광지를 추천해주는 간단한 기능 구현 진행함
										문제점 : 생소한 Unity를 가지고 단 시간 내에 성과를 내야하는 상황, 우선 Unity와 친해지기 위해 Editor를 유심히 만져보았고, 상사분에게 필요한 기능을 상세하게 요구함으로써 공식문서를 찾는데 걸리는 시간이 단축되었음 </Typography>
								</Grid>
							</Grid>
						</Grid>
					</Grid>



			</Container>
		</Fragment>
	)
}


































































































































































































































// Global_Font Theme
// const themefont = createTheme({
// 	Typography: {
// 		fontFamily: "'Noto Sans KR', sans-serif"
// 	}
// })

// // 
// const yearmarks = [
// 	{
// 		value: 0,
// 		label: '2014',
// 	},
// 	{
// 		value: 25,
// 		label: '2020',
// 	},
// 	{
// 		value: 55,
// 		label: '2021',
// 	},
// 	{
// 		value: 85,
// 		label: '2022',
// 	},
// 	{
// 		value: 100,
// 		label: '2023',
// 	},
// ]

// // Project_Img
// const fadeImg = [
// 	{
// 		url: "/ulsanpass_main.jpg",
// 		caption: "Home"
// 	},
// 	{
// 		url: "/ulsanpass_board.jpg",
// 		caption: "Board"
// 	},
// 	{
// 		url: "/ulsanpass_mission.jpg",
// 		caption: "Mission"
// 	},
// ]

// // Project_Indicator Style
// const buttonStyle = {
// 	width: "40px",
// 	background: "none",
// 	border: "0px"
	
// }

// // Project_Indicator Properties
// const arrowprop = {
// 	prevArrow: <button style={{ ...buttonStyle, marginLeft: "15%", }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#111"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></button>,
//     nextArrow: <button style={{ ...buttonStyle, marginRight: "10%", }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#111"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></button>
// }

// function valueLabelFormat(value) {
	
// 	var htmlCode;

// 	if(value == "0")
// 	{
// 		htmlCode = (
// 			<ListItemText>
// 				<Typography variant="body1" gutterBottom> 2014.02 무거고등학교 졸업</Typography>
// 				<Typography variant="body1" gutterBottom> 2014.02 동서대학교 컴퓨터공학부 입학</Typography>
// 			</ListItemText>
// 		)
// 	}
// 	else if(value == "35")
// 	{
// 		htmlCode += (
// 			<ListItemText>
// 				<Typography variant="body1" gutterBottom> 2020.01 ~ 2020.05 핀란드 오울루대학 교환학생</Typography>
// 				<Typography variant="body1" gutterBottom> 2020.08 ~ 2021.01 BIPA 인턴</Typography>
// 			</ListItemText>
// 		)
// 	}
// 	else if(value == "55")
// 	{
// 		htmlCode = (
// 			<ListItemText>
// 				<Typography variant="body1" gutterBottom> 2021.02 동서대학교 컴퓨터공학전공 졸업</Typography>
// 				<Typography variant="body1" gutterBottom> 2021.02 ~ 2021.10 부경대학교 JAVA 교육 수료</Typography>
// 			</ListItemText>
// 		)
// 	}
// 	else if(value == "80")
// 	{
// 		htmlCode = (
// 			<ListItemText>
// 				<Typography variant="body1" gutterBottom> 2022.07 ~ 2022.11 위클램 스튜디오</Typography>
// 			</ListItemText>
// 		)
// 	}
// 	else if(value == "100")
// 	{
// 		htmlCode = (
// 			<ListItemText>
// 				<Typography variant="body1" gutterBottom> 2014.02 무거고등학교 졸업</Typography>
// 				<Typography variant="body1" gutterBottom> 2014.02 동서대학교 컴퓨터공학부 입학</Typography>
// 			</ListItemText>
// 		)
// 	}
// 	// return yearmarks.findIndex((mark) => mark.value === value) + 1;
// }

// export default function portfoli() {

// 	return (
// 		<React.Fragment>
// 			<ThemeProvider theme={themefont}>
// {/* 첫번째 컨테이너 */}
// 				<Container maxWidth="md" className="container">
// 					<Grid container>
// 						<Grid item xs={6} md={6} xl={6}>
// 							<Box sx={{
// 								width: '100%',
// 								height: '100%',
// 								display: 'flex',
// 								justifyContent: 'center',
// 							}}>
// 								<List
// 									sx={{
// 										display: 'flex',
// 										flexDirection: 'column', 
// 										justifyContent: 'center',
// 										width: '55%',
// 									}}>
// 									<img src="/img_I.jpg" />
// 								</List>
// 							</Box>
// 						</Grid>

// 						<Grid item xs={6} md={6} xl={6}>
// 						<Box sx={{
// 								width: '100%',
// 								height: '100%',
// 								display: 'flex',
// 								justifyContent: 'flex-start',
// 							}}>
// 								<List
// 									sx={{
// 										paddingRight: '35%',
// 										width: '100%',
// 									}}>
// 									<div className="title"> 
// 										반갑습니다.
// 										<br/>	웹 개발자 박민석입니다.	
// 									</div>
// 									<ListItem className="listitem">
// 										<ListItemText primary="연락처" secondary="010-9026-7216"
// 											classes={{primary: "listitemtext", secondary: "listdetail"}}
// 											/>
// 									</ListItem>
// 									<Divider classes="divider" />
// 									<ListItem className="listitem">
// 										<ListItemText primary="이메일" secondary="cjsan30@gmail.com"
// 											classes={{primary: "listitemtext", secondary: "listdetail"}} />
// 									</ListItem>
// 									<Divider classes="divider" />

// 									<ListItem className="listitem" >
// 									{/* button divider */}
// 										<ListItemText 
// 											primary="블로그"
// 											secondary={
// 												<Link href="https://blog.naver.com/cjsan1000"
// 													underline='none'
// 													style= {{
// 														color: 'black',
// 													}}
// 												>
// 													blog.naver.com/cjsan1000
// 												</Link>
// 											}
// 											classes={{primary: "listitemtext", secondary: "listdetail"}}
// 										/>
// 									</ListItem>
// 									<Divider light />
// 								</List>
// 							</Box>
// 						</Grid>
// 					</Grid>
// 					<Box sx={{
// 						width: '100%',
// 					}}>
// 						<Typography className="title">
// 							3줄 안으로의 자기소개
// 							<br/>ㅁ
// 							<br/>ㅁ
// 						</Typography>
// 					</Box>
// 				</Container>

// 	{/* 두번째 컨테이너 */}
// 				<Container maxWidth="md" className="container">
// 					{/* <yearSlider value={state} onChange={(val) => SettingsInputAntenna(val)} /> */}
// 					<div className="slider">
// 						<Slider
// 							size="large"
// 							valueLabelFormat={valueLabelFormat}
// 							step={null}
// 							marks={yearmarks}

// 						/>
// 					</div>
// 					<List
// 						sx={{
// 							paddingLeft: '3%',
// 							width: '100%',
// 						}}>
// 						<ListItem className="listitemHistory"
// 							style={{
// 								marginLeft: '14%',
// 								marginTop: '2%',
// 							}}>
// 							<ListItemText>
// 								<Typography variant="body1" gutterBottom> 2014.02 무거고등학교 졸업</Typography>
// 								<Typography variant="body1" gutterBottom> 2014.02 동서대학교 컴퓨터공학부 입학</Typography>
// 							</ListItemText>
// 						</ListItem>

// 						<ListItem className="listitemHistory"
// 							style={{
// 								marginLeft: '38%',
// 							}}>
// 							<ListItemText>
// 								<Typography variant="body1" gutterBottom> 2020.01 ~ 2020.05 핀란드 오울루대학 교환학생</Typography>
// 								<Typography variant="body1" gutterBottom> 2020.08 ~ 2021.01 BIPA 인턴</Typography>
// 							</ListItemText>
// 						</ListItem>

// 						<ListItem className="listitemHistory"
// 							style={{
// 								marginLeft: '52%',
// 							}}>
// 							<ListItemText>
// 								<Typography variant="body1" gutterBottom> 2021.02 동서대학교 컴퓨터공학전공 졸업</Typography>
// 								<Typography variant="body1" gutterBottom> 2021.02 ~ 2021.10 부경대학교 JAVA 교육 수료</Typography>
// 							</ListItemText>
// 						</ListItem>
// 						<ListItem className="listitemHistory"
// 							style={{
// 								marginLeft: '70%',
// 							}}>
// 							<ListItemText>
// 								<Typography variant="body1" gutterBottom> 2022.07 ~ 2022.11 위클램 스튜디오</Typography>
// 							</ListItemText>
// 						</ListItem>
// 					</List>

// 				</Container>
// 				<Container maxWidth="md" className="containr">
// 					스택 추가
// 				</Container>
// 	{/* 세번째 컨테이너 */}
// 				<Container maxWidth="md" className="containr">
// 						<div className="projectTitle"> 울산패스 </div>
// 						<Grid container>
// 							<Grid item xs={6} md={6} xl={8}>
// 								<div className="slide-container">
// 									<Fade autoplay={false} {...arrowprop} indicators={true}>
// 										{fadeImg.map((fadeImg, index) => (
// 											<div key={index} className="each-fade" >
// 												<div className="image-container">
// 													<img src={fadeImg.url} 
// 														width= "40%"
// 														style={{
// 															marginLeft: "32.5%"
// 														}}
// 													/>
// 												</div>
// 												{/* <h2>{fadeImg.caption}</h2> */}
// 											</div>
// 										))}
// 									</Fade>
// 								</div>
// 							</Grid>
							
// 							<Grid item xs={6} md={6} xl={4}>
// 								<Box sx={{
// 									width: '100%',
// 									height: '100%',
// 									display: 'flex',
// 									justifyContent: 'flex-end',
// 									marginTop: "5%",
// 								}}>
// 									<List
// 										sx={{
// 											width: '100%',	
// 										}}>
// 											<ListItem className="listitem">
// 												<ListItemText 
// 													primary="소속 : 위클램 스튜디오"
// 													classes={{primary: "listitemtext"}} />
// 											</ListItem>
// 											<ListItem className="listitem">
// 												<ListItemText
// 													primary="기간 : 22.07 ~ 22.11"
// 													classes={{primary: "listitemtext"}} />
// 											</ListItem>
// 											<ListItem className="listitem">
// 												<ListItemText 
// 													primary="울산 해양 관광지를 알리기 위한 모바일 앱으로써,"
// 													classes={{primary: "listitemtext"}} />
// 											</ListItem>
// 											<ListItem className="listitem">
// 												<ListItemText 
// 													primary="낯선 Unity를 처음 접해보는 계기가 되었고,"
// 													classes={{primary: "listitemtext"}} />
// 											</ListItem>
// 									</List>
// 								</Box>
// 							</Grid>
// 						</Grid>
// 				</Container>

// 				<Container maxWidth="md" className="footer">
// 					<Box sx={{
// 						width: '100%',
// 						display: 'flex',
// 						justifyContent: 'center',
// 						alignItems: 'center',
// 						marginTop: 20,
// 					}}>
// 						<Typography className="thx"> 방문해주셔서 감사합니다. </Typography>
						
// 						<Card className="contact">
// 							<CardContent className="cardcontent">
// 								<div>
// 									<TextField 
// 										sx= {{
// 											width: { sm: 80, md: 200, lg: 300, xl: 360},
// 											height: 80,
// 										}}
// 										label="이름" 
// 										variant="standard"
// 									/>
// 									<TextField 
// 										sx= {{
// 											width: { sm: 80, md: 200, lg: 300, xl: 360},
// 											height: 80,
// 											marginLeft: "10%",
// 										}}
// 										InputProps={{
// 											endAdornment: (
// 											<InputAdornment position="end ">
// 												{/* <EmailIcon /> */}
// 											</InputAdornment>
// 											),
// 										}}
// 											id="standard-basic" 
// 											label="이메일" 
// 											variant="standard" 
// 											required />
// 								</div>
// 								<TextField
// 									sx= {{
// 										width: { sm: 200, md: 400, lg: 600, xl: 800},
// 										height: 80,
// 									}}
// 									id="standard-multiline-flexible" 
// 									label="메세지" 
// 									multiline 
// 									rows={4}
// 									variant="standard" />
// 								<CardActions style={{ display: "flex", justifyContent: "center", marginTop: "10%", }}>
// 									<Button variant="contained" className="sendbtn"> 보내기 	</Button>
// 								</CardActions>
// 							</CardContent>
// 						</Card>	
// 					</Box>
// 				</Container>
// 			</ThemeProvider>
// 			{/* --------------------------------------------------- */}
// 			<style jsx>
// 				{`
// {/* .container {
// border:1px solid red;
// height: 950px;
// } */}

// .title {
// 	display: flex;
// 	justify-content: center;
// 	margin: 10% 0% 10% 0%;
// 	font-size: 36px;
// }

// .titlecontent {
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// }

// /* .list{
// 	border: 1px solid red;
// 	padding: 0% 0% 0% 35%;
// 	width: 100%;
// } */

// .listitem {
// 	width: 100%;
// 	padding: 3% 0% 5% 10%;
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
	
// }

// .listitemHistory {
// 	marginTop: '2%',
// }

// .listitemtext {
// 	width: 100%;
// 	font-size: 24px;
// 	font-family: 'Noto Sans KR', sans-serif;
// }

// .listdetail {
// 	color: black;
// 	font-size: 20px;
// 	margin-left: 30%;
// 	font-family: 'Noto Sans KR', sans-serif;
// }

// .footer {
// 	width: 100%;
// 	height: 900px;
// 	border: 1px solid red;
// }

// .slider {
// 	width: 87%;
// 	padding: 0% 10% 0% 10%;
// 	margin: 5% 0% 0% 7%;
// 	color: black;
// }

// .avatar {
// 	width: 5rem;
// 	height: 5rem;
// }

// .projectTitle {
// 	display:flex;
// 	justify-content: center;
// 	font-size: 48px;
// 	margin-top: 5%;
// }

// .projectDetail {
// 	display: flex;
// 	justify-content: center;
// 	font-size: 20px;
// 	align-items: center;
// 	vertical-align: middle;
// }



// .sendbtn {
// 	width: 50%;
// 	height: 100%;
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// }

// .contact {
// 	width: 70%;
// 	height: 60%;
// 	position: absolute;
// 	top: 30%;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// }

// .cardcontent {
// 	/* vertical-align: middle; */
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: center;
// 	align-items: left;
// }

// .contactTxT {
// 	width: 100%;
// }

// .thx {
// 	font-size: 60px;
// }

// 				`}
// 			</style>
// 		</React.Fragment>
// 	)
// }