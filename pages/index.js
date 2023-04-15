import { useState, Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Box, Grid, Typography, Divider, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

import styled from './index.module.css';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import NewspaperRoundedIcon from '@mui/icons-material/NewspaperRounded';

import ImageSlideshow from '../components/ImageSlideShow';

import ScrollSpy from 'react-ui-scrollspy';
import Center from '../components/scrollspy/Center/Center';

export default function Main() {

	return (
		<Fragment>
			
			<Container className={styled.backimg}>
			</Container>
			
			<Container maxWidth="xl" >
				<Grid container>
					<Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
						<Box className={styled.introbox}>
						<List sx={{
								display: "absolute",
							}}>
								<Image src="/img/img_I.jpg" alt="" width={350} height={450} />
							</List>
						</Box>
					</Grid>

					<Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
						<Box className={styled.introbox}>
							<List sx={{
								width: "100%",
								margin: "0% 0% 0% 5%",
							}}>
								<Typography sx={{
									fontFamily: 'nanumsqureb',
									fontWeight: '500',
									fontSize: '48px',
								}}>
									안녕하세요. 박민석입니다.
								</Typography>
								<ListItem>
									<ListItemIcon>
										<CheckRoundedIcon 
											fontSize="medium"
											sx={{color: "#006400"}}
										/>
									</ListItemIcon>
									<ListItemText	primary="강점1"/>
								</ListItem>

								<ListItem>
									<Grid container rowSpacing={2}
										sx={{
										width: "100%",
									}}>
										<Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
											<List sx={{
												width: "30%",
											}}>
												<Typography sx={{fontSize: "32px", marginBottom: "10%", fontFamily: "nanumbarunb", color: "#006400"}}>Contact</Typography>
												<ListItem>
													<ListItemIcon>
														<PhoneIcon fontSize="medium"/>
													</ListItemIcon>
													<Typography> 010.9026.7216 </Typography>
												</ListItem>

												<ListItem>
												<ListItemIcon>
													<EmailIcon fontSize="medium"/>
											</ListItemIcon>
													<Typography> cjsan30@gmail.com </Typography>
												</ListItem>
											</List>
											
										</Grid> {/* Contact */}
										<Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
											<List sx={{
												width: "30%",
											}}>
													<Typography sx={{fontSize: "32px", marginBottom: "10%", fontFamily: "nanumbarunb", color: "#006400"}}>Channel</Typography>
													<ListItem>
														<ListItemIcon>
															<NewspaperRoundedIcon fontSize="medium"/>
														</ListItemIcon>
														<Link href="https://blog.naver.com/cjsan1000">
																<Typography> blog.naver.com/cjsan1000 </Typography>
														</Link>
													</ListItem>

													<ListItem>
													<ListItemIcon>
														<GitHubIcon fontSize="medium"/>
													</ListItemIcon>
													<Link href="https://github.com/cjsan30">
															<Typography> github.com/cjsan30 </Typography>
													</Link>
												</ListItem>
											</List>
										</Grid> {/* Channel */}
									</Grid>
								</ListItem>
							</List>
						</Box>
					</Grid> {/* 자기소개 텍스트 */}
				</Grid>
			</Container> 
			{/* 자기소개 */}


			<Container maxWidth="xl" className={styled.skills} >
				<Typography sx={{ fontSize: "40px", marginBottom: "4%", marginLeft: "13%", fontFamily: "nanumbarunb", color: "#006400"}}> Skills </Typography> 
				<Box className={styled.skillbox}>
					<Grid container>
						<Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
							<Typography className={styled.skillcate}> Front-End </Typography>
							<Image src="/logo/javascript.png" alt=""  width={100} height={100}/>
							<Image src="/logo/next.svg" alt=""  width={100} height={100}/>
						</Grid>
						<Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
							<Typography className={styled.skillcate}> Back-End </Typography>
							<Image src="/logo/node.svg" alt=""  width={100} height={100}/>
							<Image src="/logo/spring.svg" alt=""  width={100} height={100}/>
						</Grid>
						<Grid item xs={12} sm={6} md={2} lg={3} xl={3}>
							<Typography className={styled.skillcate}> DB </Typography>
							<Image src="/logo/oracle.svg" alt=""  width={100} height={100}/>
						</Grid>
						<Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
							<Typography className={styled.skillcate}> Communication </Typography>
							<Image src="/logo/github.svg" alt=""  width={100} height={100}/>
							<Image src="/logo/sourcetree.svg" alt=""  width={100} height={100}/>
						</Grid>
					</Grid> 
				</Box>
				<Grid container sx={{marginTop: "5%", width: "100%",}}>
					<Grid item xs={12} sm={12} md={12} lg={4} xl={4}
						 sx={{marginLeft: "14%", width: "26%", }}>
						<List sx={{ width: "fit-content",}}>
								<Typography sx={{ fontSize: "40px", fontFamily: "nanumbarunb", marginBottom: "10%", color: "#006400"}}> Education </Typography>
								<Accordion sx={{width: "fit-content", height: "fit-content", marginBottom: "5%",}}>
									<AccordionSummary>
										<ListItemText
											primary="동서대학교 컴퓨터공학부 졸업" secondary="2014. 02 ~ 2021. 02"
											classes={{primary: styled.edupri, secondary: styled.edusec}}
										/>
									</AccordionSummary>
									<AccordionDetails>
									다년간의 전공 수업을 통해 빠르게 바뀌어가는 개발 트렌드에 적응하는 법을 배우고, 컴퓨터 사이언스 학문에 기초를 배웠습니다. 교내에서의 다양한 활동을 통해 사람들과 소통하는 것도 알게 되었습니다.
									</AccordionDetails>
								</Accordion>

								<Accordion sx={{width: "fit-content", height: "fit-content", marginBottom: "5%",}}>
									<AccordionSummary>
										<ListItemText
											primary="핀란드 오울루 대학 교환학생" secondary="2020. 01 ~ 2020. 05"
											classes={{primary: styled.edupri, secondary: styled.edusec}}
										/>
									</AccordionSummary>
									<AccordionDetails>
									국내와는 다른 환경에서 진행되는 학업은 매일매일이 새로워서 폭넓은 시야를 가지게되었고, 실제 오울루 대학 교내 기업과 연계되어 애자일 방법론에 대해 배울 수 있었던 시간이었습니다.
									</AccordionDetails>
								</Accordion>

								<Accordion sx={{width: "fit-content", height: "fit-content", marginBottom: "5%",}}>
									<AccordionSummary>
										<ListItemText
											primary="부경대학교 Java 웹 개발 교육과정" secondary="2021. 02 ~ 2021. 10"
											classes={{primary: styled.edupri, secondary: styled.edusec}}
										/>
									</AccordionSummary>
									<AccordionDetails>
											Java와 Spring, Oracle을 활용한 웹 개발 수업을 수강했으며, 웹 페이지가 구동되는 흐름을 알 수 있게 되었습니다.
									</AccordionDetails>
								</Accordion>
						</List>
					</Grid>
					<Grid item xs={12} sm={12} md={12} lg={4} xl={4}
						sx={{ marginLeft: "14%", width: "26%", }}>
							<List sx={{ width: "fit-content",}}>
							<Typography sx={{ fontSize: "40px", fontFamily: "nanumbarunb", marginBottom: "10%", color: "#006400"}}> Career </Typography>
							<Accordion sx={{width: "fit-content", height: "fit-content", marginBottom: "5%",}}>
								<AccordionSummary>
									<ListItemText
										primary="부산정보산업진흥원 아마존혁신센터 현장실습" secondary="2020. 07 ~ 2021. 01"
										classes={{primary: styled.edupri, secondary: styled.edusec}}
									/>
								</AccordionSummary>
								<AccordionDetails>
								비 개발 분야였지만, 문서작업이 많은 공무원분들과 함께 일하며 문서작성 능력을 키울 수 있었고 Amazon 기업과의 업무로 다른 사내 문화를 경험했던 시간이었습니다.
								</AccordionDetails>
							</Accordion>

							<Accordion sx={{width: "fit-content", height: "fit-content", marginBottom: "5%",}}>
								<AccordionSummary>
									<ListItemText
									primary="위클램 스튜디오" secondary="2022. 07 ~ 2022. 11"
									classes={{primary: styled.edupri, secondary: styled.edusec}}
									/>
								</AccordionSummary>
								<AccordionDetails>
									교육 앱 개발을 진행하는 스타트업이며, 현장에서의 협업과 사내문화를 경험할 수 있었습니다. 가장 크게 얻었던 점은 언어와 프로그램이 달라도 겁먹지 않게되었습니다.
								</AccordionDetails>
							</Accordion>
						</List>
					</Grid>
				</Grid>
			</Container>
			{/* 기술스택, 교육사항, 경력사항 */}

			<Container maxWidth="xl" className={styled.projectCon}>
				<Typography sx={{ fontSize: "40px", fontFamily: "nanumbarunb", marginBottom: "5%", marginLeft: "14%", color: "#006400"}}> Project </Typography>
				<Box className={styled.projectbox}>
					<Grid container>
						<Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
							<ImageSlideshow images={["https://play-lh.googleusercontent.com/2efeHkbT0KSXiQ4MSiIESomDXpHGddfQgsXIHNh3ouUl1qXI6oijg7VLpllBRDET6w=w240-h480-rw",]}/>
							<Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
								<Link href="https://play.google.com/store/apps/details?id=com.weklem.UlsanPass"><Typography sx={{textAlign: "right", fontSize: "18px",}}> 구글 스토어 링크</Typography></Link>
								<Typography className={styled.projecttitle}> 울산패스 </Typography>
								
								<Grid container rowSpacing={3}>
									<Grid item sm={12}>
										<Typography> 프로젝트 기간 : 2022.07 - 2022.11</Typography>
										<Divider />
									</Grid>
									<Grid item sm={12}>
										<Typography> 프로젝트 성격 : 위클램 스튜디오 </Typography>
										<Divider />
									</Grid>
									<Grid item>
										<Typography> [프로젝트 업무] </Typography>
										<br />
										<Typography>
										Unity를 사용해 메인화면과, MBTI, 게시판의 UI/UX 부분을 맡았으며, MBTI를 통해 관광지를 추천해 주는 간단한 기능 구현 진행하였습니다.
										<br /> <br />
										힘들었던 부분은 생소한 Unity를 가지고 짧은 시간 내에 성과를 내야 하는 상황이 낯설었습니다. Unity와 친해지기 위해 Editor를 유심히 만져보면서 직장동료에게 적절하게 질문했던 점과 팀 미팅 시 디테일한 부분을 요청함으로써 공식 문서를 찾는데 걸리는 시간이 단축되었음
										</Typography>
									</Grid>
								</Grid>
								
							</Grid>
						</Grid>

						<Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
						<ImageSlideshow images={["/img/test01.jpg",]}/>
							<Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
							<Link href="https://github.com/cjsan30/AboutMe"><Typography sx={{textAlign: "right", fontSize: "18px",}}> Github</Typography></Link>
							<Typography className={styled.projecttitle}> 포트폴리오</Typography>
								<Grid container rowSpacing={3}>
									<Grid item sm={12}>
										<Typography> 프로젝트 기간 : 2022.11 - 2023.01</Typography>
										<Divider />
									</Grid>
									<Grid item sm={12}>
										<Typography> 프로젝트 성격 : 개인 프로젝트 </Typography>
										<Divider />
									</Grid>
									<Grid item>
										<Typography> [프로젝트 업무] </Typography>
										<br />
										<Typography>
										포트폴리오를 웹 페이지 형식으로 제작하고자 하여, Next.js를 이용했고 Material-UI를 이용해 Design 부분을 보완하였습니다. Firebase로 호스팅을 진행하였고 지속적으로 보완해 나갈 것입니다.
										<br /> <br />
										최근 변경 된 Next.js와 Firebase 버전, Material-UI 대한 국내자료가 부족했던 점에서 공식 Document를 적극적으로 참고함으로써 해결하였습니다.
										</Typography>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
						<ImageSlideshow images={["/img/PDM.png",]}/>
							<Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
							<Link href="https://github.com/cjsan30/PDM"><Typography sx={{textAlign: "right", fontSize: "18px",}}> Github</Typography></Link>
							<Typography className={styled.projecttitle}> PDM </Typography>
								<Grid container rowSpacing={3}>
									<Grid item sm={12}>
										<Typography> 프로젝트 기간 : 2021.05 - 2021.05</Typography>
										<Divider />
									</Grid>
									<Grid item sm={12}>
										<Typography> 프로젝트 성격 : 팀 프로젝트 </Typography>
										<Divider />
									</Grid>
									<Grid item>
										<Typography> [프로젝트 업무] </Typography>
										<br />
										<Typography>
											부경대학교 교육 과정 중 진행된 데이터베이스 프로젝트.
											<br /> <br />
											인력과 물품 관리에 대한 데이터베이스 재정비를 위해서 관계도와 테이블 설계서, 순이익, 직급별 월급 등 부가기능도 함께 작성하였습니다.
										</Typography>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</Fragment>
	)
}

