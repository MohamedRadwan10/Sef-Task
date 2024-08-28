import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/55371b87-94dd-401c-bdd5-138890353d23.jfif";
import { RiFileList2Line } from "react-icons/ri";
import { RiCalendar2Line } from "react-icons/ri";
import logo2 from "../../assets/images/download (1).png";
import { Link } from "react-router-dom";
export default function InstructorPortal() {
  const GlobalStyle = styled.div`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    @media (max-width: 768px) {
      * {
        font-size: 14px;
      }
    }

    @media (max-width: 480px) {
      * {
        font-size: 12px;
      }
    }
  `;

  const Container = styled.div`
    width: 80%;
    margin: auto;
    /* Large devices (laptops/desktops) */
    @media (max-width: 1200px) {
    }
    width: 80%;
    /* Medium devices (tablets) */
    @media (max-width: 992px) {
    }
    width: 85%;
    /* Small devices (smartphones) */
    @media (max-width: 768px) {
    }
    width: 85%;
    /* Extra small devices (small smartphones) */
    @media (max-width: 480px) {
      width: 90%;
    }
  `;

  const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(26, 25, 25, 0.9);
  `;

  const Content = styled.main`
    position: relative;
    background-image: url("${logo}");
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;
    width: 100%;
    padding: 30px 0;
  `;

  const DateMain = styled.div`
    width: 20%;
    margin: 20px 0;

    /* Large devices (laptops/desktops) */
    @media (max-width: 1200px) {
    }
    width: 25%;
    /* Medium devices (tablets) */
    @media (max-width: 992px) {
    }
    width: 30%;
    /* Small devices (smartphones) */
    @media (max-width: 768px) {
    }
    width: 40%;
    /* Extra small devices (small smartphones) */
    @media (max-width: 480px) {
      width: 40%;
    }
  `;

  const DateMainP = styled.p`
    color: #d0d0d0;
  `;

  const DateMainDay = styled.p`
    color: #d0d0d0;
  `;
  const Line = styled.p`
    width: 80px;
    height: 1px;
    margin: 5px 0 5px 0;
    background-color: #bf9b30;
  `;

  const WelcomeName = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  `;

  const Welcome = styled.div``;

  const WelcomeNameH1 = styled.h1`
    font-size: 28px;
    color: #fff;

    @media (max-width: 1200px) {
    }
    width: 40%;
    font-size: 26px;
    /* Medium devices (tablets) */
    @media (max-width: 992px) {
    }
    width: 40%;
    font-size: 24px;
    /* Small devices (smartphones) */
    @media (max-width: 768px) {
    }
    width: 70%;
    font-size: 22px;
    /* Extra small devices (small smartphones) */
    @media (max-width: 480px) {
      width: 60%;
      font-size: 20px;
    }
  `;

  const ViewButton = styled.button`
    padding: 10px 20px;
    color: #fff;
    background-color: #bf9b30;
    border: 0;
    border-radius: 5px;
      cursor: pointer;d
    &:hover {
      background-color: #eab20c;
    }
  `;

  const Name = styled.span`
    color: #bf9b30;
    font-size: 28px;

    /* Large devices (laptops/desktops) */
    @media (max-width: 1200px) {
    }
    font-size: 26px;
    /* Medium devices (tablets) */
    @media (max-width: 992px) {
    }
    font-size: 24px;
    /* Small devices (smartphones) */
    @media (max-width: 768px) {
    }
    font-size: 22px;
    /* Extra small devices (small smartphones) */
    @media (max-width: 480px) {
      font-size: 20px;
    }
  `;

  const LevelProgress = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
  `;

  const Progress = styled.div`
    padding: 30px 10px;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: space-between;

    /* Large devices (laptops/desktops) */
    @media (max-width: 1200px) {
    }

    /* Medium devices (tablets) */
    @media (max-width: 992px) {
    }

    /* Small devices (smartphones) */
    @media (max-width: 768px) {
      padding: 15px 5px;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin: auto;
      gap: 30px;
    }

    /* Extra small devices (small smartphones) */
    @media (max-width: 480px) {
      padding: 15px 5px;
      flex-direction: column;
      width: 100%;
      gap: 30px;
    }
  `;

  const ProgressBarItem = styled.div`
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    gap: 20px;

    /* Large devices (laptops/desktops) */
    @media (max-width: 1200px) {
    }

    /* Medium devices (tablets) */
    @media (max-width: 992px) {
    }

    /* Small devices (smartphones) */
    @media (max-width: 768px) {
    }

    /* Extra small devices (small smartphones) */
    @media (max-width: 480px) {
      padding: 0 70px;
    }
  `;

  const Number = styled.div`
    padding: 10px 20px;
    border: 1px solid #bf9b30;
    font-size: 30px;
    font-weight: 700;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;

    /* Large devices (laptops/desktops) */
    @media (max-width: 1200px) {
      font-size: 30px;
    }

    /* Medium devices (tablets) */
    @media (max-width: 992px) {
      font-size: 30px;
    }

    /* Small devices (smartphones) */
    @media (max-width: 768px) {
      font-size: 30px;
    }

    /* Extra small devices (small smartphones) */
    @media (max-width: 480px) {
      font-size: 30px;
      padding: 20px 40px;
    }
  `;
  const Label = styled.p`
    color: #d0d0d0;
    width: 20%;

    /* Large devices (laptops/desktops) */
    @media (max-width: 1200px) {
      width: 60%;
    }

    /* Medium devices (tablets) */
    @media (max-width: 992px) {
      width: 50%;
    }

    /* Small devices (smartphones) */
    @media (max-width: 768px) {
      width: 40%;
    }

    /* Extra small devices (small smartphones) */
    @media (max-width: 480px) {
      font-size: 20px;
    }
  `;

  const Status = styled.div`
    padding: 20px;
    color: #fff;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    background-color: #313131;
    border-radius: 5px;
    margin-top: 30px;

    /* Large devices (laptops/desktops) */
    @media (max-width: 1200px) {
      width: 50%;
    }

    /* Medium devices (tablets) */
    @media (max-width: 992px) {
      width: 50%;
    }

    /* Small devices (smartphones) */
    @media (max-width: 768px) {
      width: 70%;
    }

    /* Extra small devices (small smartphones) */
    @media (max-width: 480px) {
      width: 100%;
    }
  `;

  const StatusI = styled.i`
    font-size: 40px;
  `;

  const StatusP = styled.p`
    font-size: 20px;
    /* Large devices (laptops/desktops) */
    @media (max-width: 1200px) {
    }
    font-size: 20px;
    /* Medium devices (tablets) */
    @media (max-width: 992px) {
    }
    font-size: 19px;
    /* Small devices (smartphones) */
    @media (max-width: 768px) {
    }
    font-size: 18px;
    /* Extra small devices (small smartphones) */
    @media (max-width: 480px) {
      font-size: 16px;
    }
  `;

  // ^---------------------------------------------------------------------------------------
  const Course = styled.section`
    padding: 20px 0;
    background-color: rgb(26, 25, 25);

    @media (max-width: 1200px) {
    }

    /* Medium devices (tablets) */
    @media (max-width: 992px) {
    }

    /* Small devices (smartphones) */
    @media (max-width: 768px) {
    }
    padding: 40px 0;
    /* Extra small devices (small smartphones) */
    @media (max-width: 480px) {
      padding: 50px 0;
    }
  `;

  const CourseH2 = styled.h2`
    color: #fff;
    margin-bottom: 20px;
  `;

  const CourseItem1 = styled.div`
    margin-bottom: 20px;
  `;

  const CourseItem = styled.div`
    width: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    padding: 20px;
  `;

  const CourseItemH3 = styled.h3`
    color: #fff;
    margin-bottom: 30px;
  `;

  const Instructor = styled.div`
    color: #d0d0d0;
  `;

  const InstructorSpan = styled.span`
    color: #bf9b30;
  `;

  const Detail = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const Lev = styled.div`
    color: #fff;
    font-weight: 600;
    font-size: 25px;

    /* Large devices (laptops/desktops) */
    @media (max-width: 1200px) {
      font-size: 22px;
    }

    /* Medium devices (tablets) */
    @media (max-width: 992px) {
      font-size: 18px;
    }

    /* Small devices (smartphones) */
    @media (max-width: 768px) {
      font-size: 16px;
    }

    /* Extra small devices (small smartphones) */
    @media (max-width: 480px) {
      font-size: 12px;
      width: 20%;
    }
  `;

  const Flex = styled.div`
    display: flex;
    justify-content: space-between;

    /* Small devices (smartphones) */
    @media (max-width: 768px) {
      flex-direction: column;
    }

    /* Extra small devices (small smartphones) */
    @media (max-width: 480px) {
      flex-direction: column;
    }
  `;
  const CoursInfo = styled.div`
    width: 40%;

    /* Small devices (smartphones) */
    @media (max-width: 768px) {
      order: 2;
      width: 100%;
    }

    /* Extra small devices (small smartphones) */
    @media (max-width: 480px) {
      order: 2;
      width: 100%;
    }
  `;

  const CourseExam = styled.div`
    color: white;
    width: 40%;

    /* Large devices (laptops/desktops) */
    @media (max-width: 1200px) {
    }

    /* Medium devices (tablets) */
    @media (max-width: 992px) {
    }

    /* Small devices (smartphones) */
    @media (max-width: 768px) {
      order: 1;
      padding: 30px 0;
      width: 100%;
    }

    /* Extra small devices (small smartphones) */
    @media (max-width: 480px) {
      order: 1;
      padding: 20px 0;
      width: 100%;
    }
  `;

  const CourseExamH2 = styled.h2`
    margin-bottom: 20px;
  `;

  const CourseExamContent = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
  `;

  const CourseDay = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 5px;
  `;

  const CourseDaySpan = styled.span``;

  const CourseDaySpanBg = styled.span`
    background-color: #bf9b30;
    width: 100%;
    margin-top: 5px;
    border-radius: 0 0 5px 5px;
  `;
  const CourseExamInfo = styled.p`
    width: 50%;
    /* Large devices (laptops/desktops) */
    @media (max-width: 1200px) {
    }

    /* Medium devices (tablets) */
    @media (max-width: 992px) {
    }

    /* Small devices (smartphones) */
    @media (max-width: 768px) {
      width: 100%;
    }

    /* Extra small devices (small smartphones) */
    @media (max-width: 480px) {
      width: 100%;
    }
  `;

  const CourseExamInfoIcon = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    i {
      align-self: flex-end;
      color: rgb(128, 128, 128);
    }
  `;

  const Watch = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;

    /* Large devices (laptops/desktops) */
    @media (max-width: 1200px) {
    }

    /* Medium devices (tablets) */
    @media (max-width: 992px) {
    }

    /* Small devices (smartphones) */
    @media (max-width: 768px) {
      button {
        padding: 10px 5px;
        font-size: 14px;
      }
    }

    /* Extra small devices (small smartphones) */
    @media (max-width: 480px) {
      width: 100%;
      button {
        padding: 10px 5px;
        font-size: 12px;
      }
    }
  `;
  const WatchSpan = styled.span`
    color: #fff;
  `;

  const WatchI = styled.i`
    color: #bf9b30;
  `;
  const CourseExamInfoSpan = styled.span``;

  // ^-------------------------------------------------------------

  const CardInfoAll = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    /* Large devices (laptops/desktops) */
    @media (max-width: 1200px) {
    }

    /* Medium devices (tablets) */
    @media (max-width: 992px) {
    }

    /* Small devices (smartphones) */
    @media (max-width: 768px) {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 0px;
    }

    /* Extra small devices (small smartphones) */
    @media (max-width: 480px) {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 0px;
    }
  `;

  const CardInfo = styled.div`
    padding: 0;
  `;

  const Image = styled.img`
    width: 100%;
    height: 100%;
  `;

  const UpcomingSec = styled.section`
    padding: 70px 0 150px 0;
  `;

  const UpcomingSecTitle = styled.h2`
    color: #fff;
    margin-bottom: 40px;
  `;

  const UpcomingCourse = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;

    /* Large devices (laptops/desktops) */
    @media (max-width: 1200px) {
    }

    /* Medium devices (tablets) */
    @media (max-width: 992px) {
    }

    /* Small devices (smartphones) */
    @media (max-width: 768px) {
      flex-direction: column;
      gap: 30px;
    }

    /* Extra small devices (small smartphones) */
    @media (max-width: 480px) {
      flex-direction: column;
      gap: 30px;
    }
  `;

  const CourseCard = styled.div`
    position: relative;
    display: flex;
    gap: 20px;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    width: 45%;
    color: #d0d0d0;

    /* Large devices (laptops/desktops) */
    @media (max-width: 1200px) {
    }

    /* Medium devices (tablets) */
    @media (max-width: 992px) {
    }

    /* Small devices (smartphones) */
    @media (max-width: 768px) {
      flex-direction: column;
      width: 100%;
      padding: 30px;
    }

    /* Extra small devices (small smartphones) */
    @media (max-width: 480px) {
      flex-direction: column;
      width: 100%;
      padding: 20px;
    }
  `;

  const CourseTitle = styled.h3`
    margin-top: 10px;
    color: #fff;
  `;

  const CourseDetails = styled.div`
    margin: 10px 0 20px 0;
    display: flex;
    flex-direction: column;
  `;

  const CourseDate = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
  `;

  const CourseIcon = styled.div`
  width: 15px;
  border-radius: 50%;
  color:#BF9B30;
  font-size:20px;S
`;

  const CourseLessons = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
  `;

  const CourseButton = styled.button`
    padding: 10px 20px;
    color: #fff;
    background-color: #bf9b30;
    border: 0;
    border-radius: 5px;
    align-self: flex-end;
    margin-bottom: 10px;
  `;

  const CourseImage = styled.div`
    width: 30%;
    border-radius: 8px;

    /* Large devices (laptops/desktops) */
    @media (max-width: 1200px) {
    }

    /* Medium devices (tablets) */
    @media (max-width: 992px) {
    }

    /* Small devices (smartphones) */
    @media (max-width: 768px) {
      width: 100%;
    }

    /* Extra small devices (small smartphones) */
    @media (max-width: 480px) {
      width: 100%;
    }
  `;

  const CourseLevel = styled.p`
    width: 100%;
    font-weight: bold;
    position: absolute;
    top: 70%;
    left: 5%;
    font-size: 20px;
    color: #fff;

    /* Large devices (laptops/desktops) */
    @media (max-width: 1200px) {
    }

    /* Medium devices (tablets) */
    @media (max-width: 992px) {
    }

    /* Small devices (smartphones) */
    @media (max-width: 768px) {
      top: 87%;
      left: 5%;
    }

    /* Extra small devices (small smartphones) */
    @media (max-width: 480px) {
      top: 83%;
      left: 5%;
    }
  `;

  return (
    <>
      <GlobalStyle>
        <Content>
          <Overlay>
            <Container>
              <DateMain>
                <DateMainP>Student Portal</DateMainP>
                <Line></Line>
                <DateMainDay>6th June 2024</DateMainDay>
              </DateMain>
              <Welcome>
                <WelcomeName>
                  <WelcomeNameH1>
                    WELCOME BACK, <Name>BALQEES SABIR</Name>
                  </WelcomeNameH1>
                  <Link to="profile">
                    {" "}
                    <ViewButton>View Profile</ViewButton>
                  </Link>
                </WelcomeName>
                <LevelProgress>
                  <Progress>
                    <ProgressBarItem>
                      <Number>1</Number>
                      <Label>UPCOMING EXAMS</Label>
                    </ProgressBarItem>
                    <ProgressBarItem>
                      <Number>4</Number>
                      <Label>REGISTERED COURSES</Label>
                    </ProgressBarItem>
                    <ProgressBarItem>
                      <Number>2</Number>
                      <Label>COMPLETED COURSES</Label>
                    </ProgressBarItem>
                  </Progress>
                </LevelProgress>
                <Status>
                  <StatusI className="fa-regular fa-circle-check"></StatusI>
                  <StatusP>ALL CLEAR, YOU DON'T HAVE ANY EXAMS TODAY.</StatusP>
                </Status>
              </Welcome>
            </Container>
          </Overlay>
        </Content>
        <Course>
          <Container>
            <Flex>
              <CoursInfo>
                <CourseH2>Ongoing Courses</CourseH2>
                <CourseItem1>
                  <CourseItem>
                    <CourseItemH3>Introduction to React js</CourseItemH3>

                    <Detail>
                      <Lev>LEV. 1</Lev>
                      <Watch>
                        <WatchI className="fa-solid fa-users"></WatchI>
                        <WatchSpan>20 Students</WatchSpan>
                        <ViewButton>VIEW DETAILS</ViewButton>
                      </Watch>
                    </Detail>
                  </CourseItem>
                </CourseItem1>
                <CourseItem>
                  <CourseItemH3>Introduction to Data Analysis</CourseItemH3>

                  <Detail>
                    <Lev>LEV. 1</Lev>
                    <Watch>
                      <WatchI className="fa-solid fa-users"></WatchI>
                      <WatchSpan>20 Students</WatchSpan>
                      <ViewButton>VIEW DETAILS</ViewButton>
                    </Watch>
                  </Detail>
                </CourseItem>
              </CoursInfo>
              <CourseExam>
                <CourseExamH2>Upcoming Exams</CourseExamH2>
                <CourseExamContent>
                  <CourseDay>
                    <CourseDaySpan>7TH</CourseDaySpan>
                    <CourseDaySpan>JUN</CourseDaySpan>
                    <CourseDaySpanBg>WED</CourseDaySpanBg>
                  </CourseDay>
                  <CourseExamInfo>
                    <h3>Introduction to React js</h3>
                    <Instructor>
                      <InstructorSpan>Instructor</InstructorSpan> : Tariq Ali
                    </Instructor>

                    <Detail>
                      <span>Lev. 1 Exam</span>
                      <CourseExamInfoIcon>
                        <i className="fa-regular fa-clock"></i>
                        <CourseExamInfoSpan>12:30 PM</CourseExamInfoSpan>
                      </CourseExamInfoIcon>
                    </Detail>
                  </CourseExamInfo>
                </CourseExamContent>
              </CourseExam>
            </Flex>
            <UpcomingSec>
              <UpcomingSecTitle>Upcoming courses</UpcomingSecTitle>
              <UpcomingCourse>
                <CourseCard>
                  <CourseImage>
                    <Image src={logo2} alt="Image" draggable="false" />
                  </CourseImage>
                  <CourseLevel>LEV. 1</CourseLevel>{" "}
                  <CardInfoAll>
                    <CardInfo>
                      <CourseTitle>Python for Beginners</CourseTitle>
                      <CourseDetails>
                        <CourseDate>
                          <CourseIcon>
                            <RiCalendar2Line />
                          </CourseIcon>
                          Wednesday, June 7th
                        </CourseDate>
                        <CourseLessons>
                          <CourseIcon>
                            <RiFileList2Line />
                          </CourseIcon>
                          12 lessons
                        </CourseLessons>
                      </CourseDetails>
                    </CardInfo>
                    <CourseButton>VIEW DETAILS</CourseButton>
                  </CardInfoAll>
                </CourseCard>
                <CourseCard>
                  <CourseImage>
                    <Image src={logo2} alt="Image" />
                  </CourseImage>
                  <CourseLevel>LEV. 1</CourseLevel>
                  <CardInfoAll>
                    <CardInfo>
                      <CourseTitle>Python for Beginners</CourseTitle>
                      <CourseDetails>
                        <CourseDate>
                          <CourseIcon>
                            <RiCalendar2Line />
                          </CourseIcon>
                          Wednesday, June 7th
                        </CourseDate>
                        <CourseLessons>
                          <CourseIcon>
                            <RiFileList2Line />
                          </CourseIcon>
                          12 lessons
                        </CourseLessons>
                      </CourseDetails>
                    </CardInfo>

                    <CourseButton>VIEW DETAILS</CourseButton>
                  </CardInfoAll>
                </CourseCard>
              </UpcomingCourse>
            </UpcomingSec>
          </Container>
        </Course>
      </GlobalStyle>
    </>
  );
}
