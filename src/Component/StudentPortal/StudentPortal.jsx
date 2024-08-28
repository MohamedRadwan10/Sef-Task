import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/55371b87-94dd-401c-bdd5-138890353d23.jfif";
import { Knob } from "primereact/knob";
import { useState } from "react";

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
    width: 40%;
    font-size: 24px;
  }

  /* Small devices (smartphones) */
  @media (max-width: 768px) {
    width: 70%;
    font-size: 22px;
  }

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
  cursor: pointer;
  &:hover {
    background-color: #eab20c;
  }
`;

const Name = styled.span`
  color: #bf9b30;
  font-size: 28px;

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
const Level = styled.div`
  color: #fff;
  margin-bottom: 20px;
  font-weight: 600;

  /* Large devices (laptops/desktops) */
  @media (max-width: 1200px) {
  }

  /* Medium devices (tablets) */
  @media (max-width: 992px) {
  }

  /* Small devices (smartphones) */
  @media (max-width: 768px) {
  }
  order: 1;
  width: 100%;
  /* Extra small devices (small smartphones) */
  @media (max-width: 480px) {
    order: 1;
    width: 100%;
  }
`;

const LevelText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProgressBar = styled.div`
  width: 100%;
  border-radius: 20px;
  background-color: #fff;
  margin-top: 10px;
`;

const ProgressBar97 = styled.div`
  width: 97%;
  height: 5px;
  border-radius: 20px 0 0 20px;
  background-color: #bf9b30;
  text-align: center;
  line-height: 30px;
  color: white;
  transition: width 0.5s ease-in-out;
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

  /* Small devices (smartphones) */
  @media (max-width: 768px) {
    padding: 40px 0;
  }

  /* Extra small devices (small smartphones) */
  @media (max-width: 480px) {
    padding: 70px 0;
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

  /* Small devices (smartphones) */
  @media (max-width: 768px) {
    order: 1;
    padding: 20px 0;
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

const CourseExamInfoSpan = styled.span``;

// ^-----------------------------------------------------------------------------

const ProgressSection = styled.section`
  padding-top: 20px;
  background-color: rgb(26, 25, 25);
`;

const ProgressSectionH2 = styled.h2`
  color: #fff;
  width: 30%;
  margin-bottom: 20px;

  /* Small devices (smartphones) */
  @media (max-width: 768px) {
    width: 75%;
    font-size: 24px;
  }

  /* Extra small devices (small smartphones) */
  @media (max-width: 480px) {
    width: 85%;
    font-size: 20px;
  }
`;

const ProgressSectionH2Span = styled.span`
  color: #bf9b30;

  /* Small devices (smartphones) */
  @media (max-width: 768px) {
    width: 60%;
    font-size: 24px;
  }

  /* Extra small devices (small smartphones) */
  @media (max-width: 480px) {
    width: 80%;
    font-size: 20px;
  }
`;

const ProgressItems = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  /* Small devices (smartphones) */
  @media (max-width: 768px) {
    gap: 20px;
  }

  /* Extra small devices (small smartphones) */
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`;

const ProgressItem = styled.div`
  width: 25%;
  background-color: rgba(0, 0, 0, 0.3);
  text-align: center;
  color: #fff;
  padding: 25px;

  /* Small devices (smartphones) */
  @media (max-width: 768px) {
    padding: 10px;
  }

  /* Extra small devices (small smartphones) */
  @media (max-width: 480px) {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    text-align: start;
    width: 100%;
  }
`;

const Circle = styled.div`
  margin: auto;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: relative;
  background-color: #bf9b30;
`;

const Percentage = styled.span`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  font-size: 14px;
  font-weight: bold;
  background-color: #1a1919;
`;

const LevelTxt = styled.p`
  font-size: 25px;
  margin-bottom: 10px;

  /* Small devices (smartphones) */
  @media (max-width: 768px) {
    font-size: 16px;
  }

  /* Extra small devices (small smartphones) */
  @media (max-width: 480px) {
    font-size: 12px;
    margin-bottom: 0px;
  }
`;

const ProgressItemH3 = styled.h3`
  margin-block: 30px;

  /* Small devices (smartphones) */
  @media (max-width: 768px) {
  }

  /* Extra small devices (small smartphones) */
  @media (max-width: 480px) {
    font-size: 12px;
    margin-block: 0px;
  }
`;
const ProgressItemInfo = styled.div``;

const CertificatesSection = styled.section`
  padding: 20px 0;
  background-color: rgba(26, 25, 25);
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
    padding: 30px 0;
  }
`;

const CertificatesSectionH2 = styled.h2`
  color: #fff;
  margin-bottom: 20px;
`;

const CertificateItem = styled.div`
  padding: 20px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* Small devices (smartphones) */
  @media (max-width: 768px) {
    padding: 15px;
    gap: 5px;
    button {
      align-self: flex-end;
    }
  }

  /* Extra small devices (small smartphones) */
  @media (max-width: 480px) {
    padding: 15px;
    gap: 5px;
    button {
      align-self: flex-end;
    }
  }
`;

const CertificateItemH3 = styled.h3`
  color: #fff;
`;

const CertificateItemInfo = styled.div``;

const CertificateItemInfoText = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  margin-top: 5px;

  /* Small devices (smartphones) */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    font-size: 14px;
    margin-bottom: 25px;
  }

  /* Extra small devices (small smartphones) */
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
    font-size: 10px;
    margin-bottom: 25px;
  }
`;

const Date = styled.p`
  color: #d0d0d0;
  /* Medium devices (tablets) */
  @media (max-width: 992px) {
  }

  /* Small devices (smartphones) */
  @media (max-width: 768px) {
    font-size: 14px;
  }

  /* Extra small devices (small smartphones) */
  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

const DateSpan = styled.span`
  color: #bf9b30;
`;
const StudentPortal = () => {
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

                  <ViewButton>View Profile</ViewButton>
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
                  <Level>
                    <LevelText>
                      <p>LEVEL : 1</p>
                      <p>97%</p>
                    </LevelText>
                    <ProgressBar>
                      <ProgressBar97></ProgressBar97>
                    </ProgressBar>
                  </Level>
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
                <CourseH2>Registered Courses</CourseH2>
                <CourseItem1>
                  <CourseItem>
                    <CourseItemH3>Introduction to React js</CourseItemH3>
                    <Instructor>
                      <InstructorSpan>Instructor</InstructorSpan> : Tariq Ali
                    </Instructor>
                    <Detail>
                      <Lev>LEV. 1</Lev>
                      <ViewButton>VIEW DETAILS</ViewButton>
                    </Detail>
                  </CourseItem>
                </CourseItem1>
                <CourseItem>
                  <CourseItemH3>Introduction to Data Analysis</CourseItemH3>
                  <Instructor>
                    <InstructorSpan>Instructor</InstructorSpan> : Tariq Ali
                  </Instructor>
                  <Detail>
                    <Lev>LEV. 1</Lev>
                    <ViewButton>VIEW DETAILS</ViewButton>
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
          </Container>
        </Course>
        <ProgressSection>
          <Container>
            <ProgressSectionH2>
              Here's how you've been doing for the{" "}
              <ProgressSectionH2Span>last month</ProgressSectionH2Span>
            </ProgressSectionH2>
            <ProgressItems>
              <ProgressItem>
                <Knob
                  value={91}
                  valueColor="#BF9B30"
                  rangeColor="#fff"
                  textColor="#fff"
                  readOnly
                  size={90}
                />
                <ProgressItemInfo>
                  <ProgressItemH3>Introduction to React js</ProgressItemH3>
                  <LevelTxt>LEV. 1</LevelTxt>
                  <p className="hours">27 / 30 Hours</p>
                </ProgressItemInfo>
              </ProgressItem>
              <ProgressItem>
                <Knob
                  value={75}
                  valueColor="#BF9B30"
                  rangeColor="#fff"
                  textColor="#fff"
                  readOnly
                  size={90}
                />
                <ProgressItemInfo>
                  <ProgressItemH3>Introduction to Data Analysis</ProgressItemH3>
                  <LevelTxt>LEV. 2</LevelTxt>
                  <p className="hours">27 / 30 Hours</p>
                </ProgressItemInfo>
              </ProgressItem>
              <ProgressItem>
                <Knob
                  value={100}
                  valueColor="#BF9B30"
                  rangeColor="#fff"
                  textColor="#fff"
                  readOnly
                  size={90}
                />
                <ProgressItemInfo>
                  <ProgressItemH3>System analysis and design</ProgressItemH3>
                  <LevelTxt>LEV. 3</LevelTxt>
                  <p className="hours">27 / 30 Hours</p>
                </ProgressItemInfo>
              </ProgressItem>
              <ProgressItem>
                <Knob
                  value={91}
                  valueColor="#BF9B30"
                  rangeColor="#fff"
                  textColor="#fff"
                  readOnly
                  size={90}
                />
                <ProgressItemInfo>
                  <ProgressItemH3>Introduction to React js</ProgressItemH3>
                  <LevelTxt>LEV. 4</LevelTxt>
                  <p className="hours">27 / 30 Hours</p>
                </ProgressItemInfo>
              </ProgressItem>
            </ProgressItems>
          </Container>
        </ProgressSection>
        <CertificatesSection>
          <Container>
            <CertificatesSectionH2>Earned Certificates</CertificatesSectionH2>
            <CertificateItem>
              <CertificateItemInfo>
                <CertificateItemH3>Introduction to React js</CertificateItemH3>
                <CertificateItemInfoText>
                  <Instructor>
                    <InstructorSpan>Instructor</InstructorSpan> : Tariq Ali
                  </Instructor>
                  <Date>
                    <DateSpan>Date Acquired</DateSpan> : Monday, June 5th
                  </Date>
                </CertificateItemInfoText>
              </CertificateItemInfo>
              <ViewButton>Download</ViewButton>
            </CertificateItem>
          </Container>
        </CertificatesSection>
      </GlobalStyle>
    </>
  );
};

export default StudentPortal;

/* <Circle>
                <Percentage>91%</Percentage>
              </Circle>
*/
