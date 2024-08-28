import styled from "styled-components";
import React, { useEffect } from "react";
import logo from "../../assets/images/55371b87-94dd-401c-bdd5-138890353d23.jfif";
import { useState } from "react";

// Usage example:

const Profile = () => {
  const [IsEdit, setIsEdit] = useState(false);
  const [iD, setID] = useState(1420);
  const [age, setAge] = useState(26);
  const [national, setNational] = useState("Sudanese");
  const [country, setCountry] = useState("Egypt");
  const [city, setCity] = useState("Cairo");
  const [unive, setunive] = useState("international islamic university");
  const [graduate, setGraduate] = useState(2019);
  const [email, setEmail] = useState("balqeeshamdi@gmail.com");
  const [phone, setPhone] = useState("0020164569047");
  const [about, setAbout] = useState(
    "At vero eos eta accusamus et iusto odio dignissimos ducimus qui blanditii praesentium voluptatum deleniti atqua corrupti quos dolores"
  );
  const [selectedCity, setSelectedCity] = useState("Computer Science");

  const cities = [
    { name: "Computer Science", code: "IST" },
    { name: "Computer Information", code: "RM" },
    { name: "Business", code: "NY" },
    { name: "Artificial Intelligence", code: "LDN" },
  ];
  const handleEditToggle = () => {
    setIsEdit(!IsEdit);
  };

  const handleSave = () => {
    setIsEdit(false);
    let data = {
      id: iD,
      age: age,
      national: national,
      country: country,
      city: city,
      unive: unive,
      graduate: graduate,
      email: email,
      phone: phone,
      about: about,
      selectedCity: selectedCity,
    };

    localStorage.setItem("userData", JSON.stringify(data));
  };
  const handleSaveRefresh = () => {
    const storedData = localStorage.getItem("userData");

    if (storedData) {
      const data = JSON.parse(storedData);
      setID(data.id);
      setAge(data.age);
      setNational(data.national);
      setCountry(data.country);
      setCity(data.city);
      setunive(data.unive);
      setGraduate(data.graduate);
      setEmail(data.email);
      setPhone(data.phone);
      setAbout(data.about);
      setSelectedCity(data.selectedCity);
    }
  };

  useEffect(() => {
    handleSaveRefresh();
  }, []);
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

  const DivBG = styled.div`
    min-height: 200vh;
    background-color: #1a1919;
    z-index: -1;

    @media (max-width: 1024px) {
      min-height: 300vh;
    }
    @media (max-width: 768px) {
      min-height: 280vh;
    }

    @media (max-width: 480px) {
      min-height: 230vh;
    }
  `;
  const StyledInput = styled.input`
    padding: 5px 15px;
    border: 0;
    border-radius: 5px;
    width: 100%;

    &:enabled {
      background-color: #414141;
      color: #d0d0d0;
    }

    &:disabled {
      color: #d0d0d0;
      background-color: transparent;
    }
    @media (max-width: 1024px) {
      padding: 5px 15px;
    }
    @media (max-width: 1024px) {
      padding: 5px 15px;
    }
    @media (max-width: 768px) {
      padding: 10px;
    }
  `;

  const StyledSelect = styled.select`
    padding: 5px 15px;
    border: 0;
    border-radius: 5px;
    width: 100%;

    &:enabled {
      background-color: #414141;
      color: #d0d0d0;
      &:hover {
        background-color: #bf9b30;
      }
    }

    &:disabled {
      color: #d0d0d0;
      background-color: transparent;
    }

    @media (max-width: 768px) {
      padding: 10px; // Adjust padding for smaller screens
    }
  `;

  const StyledOption = styled.option`
    padding: 30px;

    &:hover {
      background-color: #bf9b30;
    }
  `;

  const StyledInputAbout = styled.textarea`
    padding: 5px 20px;
    border: 0;
    border-radius: 5px;
    width: 100%;

    &:enabled {
      background-color: #414141;
      color: #d0d0d0;
    }

    &:disabled {
      background-color: transparent;
      color: #d0d0d0;
    }

    @media (max-width: 768px) {
      padding: 10px; // Adjust padding for smaller screens
      height: 100px; // Set a minimum height for better usability
    }
  `;

  const Container = styled.div`
    width: 80%;
    margin: auto;

    @media (max-width: 1024px) {
      width: 90%;
    }

    @media (max-width: 768px) {
      width: 95%;
    }

    @media (max-width: 480px) {
      width: 90%;
    }
  `;

  const Profile = styled.div`
    position: relative;
    background-image: url("${logo}");
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;
    width: 100%;
    z-index: 1;

    @media (max-width: 768px) {
      min-height: 80vh;
    }

    @media (max-width: 480px) {
      min-height: 60vh;
    }
  `;

  const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(26, 25, 25, 0.9);
    z-index: 1;

    @media (max-width: 768px) {
      background-color: rgba(26, 25, 25, 0.8);
    }

    @media (max-width: 480px) {
      background-color: rgba(26, 25, 25, 0.7);
    }
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

  const ProfileContent = styled.div`
    padding: 20px 30px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
      margin-top: 40px;
      padding: 10px 20px;
    }

    @media (max-width: 480px) {
      margin-top: 20px;
      padding: 10px;
    }
  `;

  const ProfileContentInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    @media (max-width: 768px) {
      gap: 10px;
    }

    @media (max-width: 480px) {
      gap: 15px;
      flex-direction: column;
      align-items: flex-start;
    }
  `;

  const ProfileContentInfoImg = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #d0d0d0;

    @media (max-width: 768px) {
      width: 80px;
      height: 80px;
    }

    @media (max-width: 480px) {
      width: 60px;
      height: 60px;
    }
  `;

  const ProfileContentInfoText = styled.div`
    color: #fff;
    width: 60%;

    @media (max-width: 768px) {
      width: 50%;
    }

    @media (max-width: 480px) {
      width: 100%;
    }
  `;

  const ProfileContentBtn = styled.button`
    padding: 10px 20px;
    background-color: #bf9b30;
    border-radius: 5px;
    border: 0;
    align-self: flex-start;
    color: #fff;
    cursor: pointer;
    &:hover  {
    background-color: #eab20c;
  }
    @media (max-width: 768px) {
      padding: 5px 5px;
      width:100px;
      `;

  //   ^---------------------------------------------------
  const ProfileInfo = styled.div`
    padding: 20px 0;
    display: flex;
    gap: 50px;

    @media (max-width: 1550px) {
    }

    @media (max-width: 1024px) {
      flex-direction: column;
    }

    @media (max-width: 480px) {
      flex-direction: column;
    }
  `;

  const ProfileData = styled.div`
    width: 30%;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.3);

    @media (max-width: 1550px) {
      width: 40%;
    }

    @media (max-width: 1024px) {
      width: 100%;
    }

    @media (max-width: 480px) {
      width: 100%;
      padding: 10px;
    }
  `;

  const ProfileDataH3 = styled.h3`
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    text-align: center;
    padding: 5px 10px;

    @media (max-width: 768px) {
      font-size: 18px;
    }

    @media (max-width: 480px) {
      font-size: 16px;
    }
  `;

  const ProfileDataContent = styled.div`
    display: flex;
    justify-content:space-between;
    gap: 30px;
    padding: 20px;

    @media (max-width: 1024px) {
      gap: 20px;
    }

    @media (max-width: 480px) {
      gap: 10px;
      align-item-center
    }
  `;

  const ProfileDataContentLabels = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    color: #fff;

    @media (max-width: 768px) {
      gap: 23px;
    }

    @media (max-width: 480px) {
      gap: 18px;
    }
  `;

  const ProfileDataContentInputs = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;

    @media (max-width: 1024px) {
      gap: 15px;
    }

    @media (max-width: 768px) {
      gap: 5px;
      width: 70%;
    }

    @media (max-width: 480px) {
      gap: 2px;
    }
  `;

  const EducationData = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: #fff;

    @media (max-width: 768px) {
      padding: 15px;
    }

    @media (max-width: 480px) {
      padding: 10px;
    }
  `;

  const EducationDataInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    @media (max-width: 768px) {
      gap: 3px;
    }

    @media (max-width: 480px) {
      gap: 2px;
    }
  `;

  const Contact = styled.div`
    color: #fff;
  `;

  const ContactData = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media (max-width: 768px) {
      padding: 15px;
    }

    @media (max-width: 480px) {
      padding: 10px;
    }
  `;

  const ContactDataInfo = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;

    @media (max-width: 768px) {
      gap: 10px;
    }

    @media (max-width: 480px) {
      gap: 10px;
    }
  `;

  const ContactDataInfoText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media (max-width: 768px) {
      gap: 5px;
    }

    @media (max-width: 480px) {
      gap: 2px;
    }
  `;

  const ContactDataInfoIcon = styled.div`
    align-self: start;
    color: #bf9b30;
    font-size: 20px;

    @media (max-width: 768px) {
      font-size: 18px;
    }

    @media (max-width: 480px) {
      font-size: 16px;
    }
  `;
  // ^--------------------------------------------------
  const ProfileAbout = styled.div`
    width: 70%;

    @media (max-width: 1024px) {
      width: 100%;
    }

    @media (max-width: 768px) {
      width: 100%;
    }

    @media (max-width: 480px) {
      width: 100%;
    }
  `;

  const ProfileAboutData = styled.div`
    width: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    padding: 20px;
    color: #fff;

    @media (max-width: 768px) {
      padding: 15px;
    }

    @media (max-width: 480px) {
      padding: 10px;
    }
  `;

  const ProfileAboutH3 = styled.h3`
    color: #fff;
    padding: 40px;

    @media (max-width: 768px) {
      padding: 20px;
    }

    @media (max-width: 480px) {
      padding: 10px;
    }
  `;

  const ProfileAboutH32 = styled.h3`
    color: #fff;
    padding: 20px;

    @media (max-width: 768px) {
      padding: 15px;
    }

    @media (max-width: 480px) {
      padding: 10px;
    }
  `;

  const ProfileAboutProgressAll = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media (max-width: 768px) {
      gap: 5px;
    }

    @media (max-width: 480px) {
      gap: 2px;
    }
  `;

  const ProfileAboutProgress = styled.div`
    padding: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.3);
    color: #d0d0d0;

    @media (max-width: 768px) {
      padding: 15px;
    }

    @media (max-width: 480px) {
      padding: 10px;
    }
  `;

  const Instructor = styled.div`
    color: #d0d0d0;
  `;

  const InstructorSpan = styled.span`
    color: #bf9b30;

    @media (max-width: 768px) {
      font-size: 16px;
    }

    @media (max-width: 480px) {
      font-size: 14px;
    }
  `;
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  return (
    <>
      <GlobalStyle>
        <DivBG className="div">
          {" "}
          <Profile>
            <Overlay>
              <Container>
                <DateMain>
                  <DateMainP>Profile</DateMainP>
                  <Line></Line>
                  <DateMainDay>6th June 2024</DateMainDay>
                </DateMain>

                <ProfileContent>
                  <ProfileContentInfo>
                    <ProfileContentInfoImg>
                      <img src="" alt="" />
                    </ProfileContentInfoImg>
                    <ProfileContentInfoText>
                      <h3 className="profile-content-info-text-h3">
                        Balqees Hamdi Saber
                      </h3>
                      <p className="profile-content-info-text-p">
                        {selectedCity}, {unive}
                      </p>
                    </ProfileContentInfoText>
                  </ProfileContentInfo>
                  <ProfileContentBtn
                    type="submit"
                    onClick={IsEdit ? handleSave : handleEditToggle}
                  >
                    {IsEdit ? "Save" : "Edit"} Profile
                  </ProfileContentBtn>
                </ProfileContent>
                <ProfileInfo>
                  <ProfileData>
                    <ProfileDataH3>Personal info</ProfileDataH3>
                    <ProfileDataContent>
                      <ProfileDataContentLabels>
                        <label className="profile-data-lable" htmlFor="studId">
                          Student ID
                        </label>
                        <label className="profile-data-lable" htmlFor="age">
                          Age
                        </label>
                        <label
                          className="profile-data-lable"
                          htmlFor="national"
                        >
                          Nationality
                        </label>
                        <label className="profile-data-lable" htmlFor="country">
                          Country
                        </label>
                        <label className="profile-data-lable" htmlFor="city">
                          City
                        </label>
                      </ProfileDataContentLabels>
                      <ProfileDataContentInputs className="inputs-p">
                        <StyledInput
                          type="tel"
                          value={iD}
                          readOnly
                          disabled
                          name="iD"
                        />
                        <StyledInput
                          type="text"
                          // keyfilter={/[^s]/}
                          value={age}
                          onChange={(e) => setAge(e.target.value)}
                          // suffix=" yo"
                          disabled={!IsEdit}
                          name="age"
                        />

                        <StyledInput
                          type="text"
                          keyfilter="alpha"
                          value={national}
                          onChange={(e) => setNational(e.target.value)}
                          disabled={!IsEdit}
                          name="national"
                        />
                        <StyledInput
                          type="text"
                          keyfilter="alpha"
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          disabled={!IsEdit}
                          name="country"
                        />
                        <StyledInput
                          type="text"
                          keyfilter="alpha"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          disabled={!IsEdit}
                          name="city"
                        />
                      </ProfileDataContentInputs>
                    </ProfileDataContent>
                    <ProfileDataH3>Education</ProfileDataH3>
                    <EducationData>
                      <EducationDataInfo className="inputs-e">
                        <label htmlFor="univ">Universty</label>
                        <StyledInput
                          type="text"
                          keyfilter="alpha"
                          value={unive}
                          onChange={(e) => setunive(e.target.value)}
                          disabled={!IsEdit}
                          name="unive"
                        />
                      </EducationDataInfo>
                      <EducationDataInfo className="inputs-e">
                        <label htmlFor="major">Major</label>

                        <StyledSelect
                          value={selectedCity}
                          onChange={(e) => setSelectedCity(e.target.value)}
                          disabled={!IsEdit}
                          name="cities"
                        >
                          {cities.map((city) => (
                            <StyledOption key={city.code} value={city.name}>
                              {city.name}
                            </StyledOption>
                          ))}
                        </StyledSelect>
                      </EducationDataInfo>
                      <EducationDataInfo className="inputs-e">
                        <label htmlFor="graduate">Graduation Year</label>
                        <StyledInput
                          type="text"
                          keyfilter={/^[+]?(d{1,5})?$/}
                          value={graduate}
                          onChange={(e) => setGraduate(e.target.value)}
                          disabled={!IsEdit}
                          name="graduate"
                        />
                      </EducationDataInfo>
                    </EducationData>
                    <ProfileDataH3>Contanct info</ProfileDataH3>
                    <Contact>
                      <ContactData>
                        <ContactDataInfo>
                          <ContactDataInfoIcon>
                            <i className="fa-solid fa-envelope"></i>
                          </ContactDataInfoIcon>
                          <ContactDataInfoText>
                            <label htmlFor="email">Email</label>
                            <StyledInput
                              type="email"
                              keyfilter="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              disabled={!IsEdit}
                              name="email"
                            />
                          </ContactDataInfoText>
                        </ContactDataInfo>
                        <ContactDataInfo>
                          <ContactDataInfoIcon>
                            <i className="fa-solid fa-phone-volume"></i>
                          </ContactDataInfoIcon>
                          <ContactDataInfoText>
                            <label htmlFor="tel">Mobile Number</label>
                            <StyledInput
                              type="textarea"
                              keyfilter="num"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              disabled={!IsEdit}
                              name="phone"
                            />
                          </ContactDataInfoText>
                        </ContactDataInfo>
                      </ContactData>
                    </Contact>
                  </ProfileData>
                  <ProfileAbout>
                    <ProfileAboutData>
                      <ProfileAboutH32>About</ProfileAboutH32>
                      <StyledInputAbout
                        className="input-about"
                        autoResize
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
                        disabled={!IsEdit}
                        name="about"
                        rows={3}
                        cols={30}
                      />
                    </ProfileAboutData>
                    <ProfileAboutH3>In Progress</ProfileAboutH3>
                    <ProfileAboutProgressAll>
                      <ProfileAboutProgress>
                        <div className="profile-about-progress-info">
                          <h3>Introduction to Data Analysis</h3>
                          <Instructor>
                            <InstructorSpan>Instructor</InstructorSpan> :
                            Mohamed Nour{" "}
                          </Instructor>
                        </div>
                        <h2>LEV.1</h2>
                      </ProfileAboutProgress>
                      <ProfileAboutProgress>
                        <div className="profile-about-progress-info">
                          <h3>Introduction to React JS</h3>
                          <Instructor>
                            <InstructorSpan>Instructor</InstructorSpan> : Tariq
                            Ali
                          </Instructor>
                        </div>
                        <h2>LEV.1</h2>
                      </ProfileAboutProgress>
                    </ProfileAboutProgressAll>
                    <ProfileAboutH3>Previous</ProfileAboutH3>
                    <ProfileAboutProgressAll>
                      <ProfileAboutProgress>
                        <div className="profile-about-progress-info">
                          <h3>System Analysis and design</h3>
                          <Instructor>
                            <InstructorSpan>Instructor</InstructorSpan> : Sarah
                            Ahmed{" "}
                          </Instructor>
                        </div>
                        <h2>LEV.1</h2>
                      </ProfileAboutProgress>
                      <ProfileAboutProgress>
                        <div className="profile-about-progress-info">
                          <h3>Introduction to React JS</h3>
                          <Instructor>
                            <InstructorSpan>Instructor</InstructorSpan> : Alaa
                            Sameer
                          </Instructor>
                        </div>
                        <h2>LEV.1</h2>
                      </ProfileAboutProgress>
                    </ProfileAboutProgressAll>
                  </ProfileAbout>
                </ProfileInfo>
              </Container>
            </Overlay>
          </Profile>
        </DivBG>
      </GlobalStyle>
    </>
  );
};

export default Profile;
// const handleChange = (e) => {
//   const { name, value } = e.target;
//   setUserProfile((prevProfile) => ({
//     ...prevProfile,
//     [name]: value,
//   })); // const [userProfile, setUserProfile] = useState();
// };
