/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {
  Button,
  Heading,
  Stack,
  Text,
  VStack,
  Image,
  Box,
  HStack,
} from '@chakra-ui/react';
import './home.css';
import { Link } from 'react-router-dom';
import vg from '../../assets/images/studying.png';
import { SiUdemy, SiCoursera } from 'react-icons/si';
import { CgGoogle, CgYoutube } from 'react-icons/cg';
import { DiAws } from 'react-icons/di';
import introVideo from '../../assets/videos/intro.mp4';
import Faq from '../Faq/Faq';
import Features from '../Features/Features';

function Home() {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={['column', 'row']}
          height="100%"
          justifyContent={['center', 'space-between']}
          alignItems="center"
          spacing={['16', '56']}
        >
          <VStack width={'full'} alignItems={['center', 'flex-end']} spacing="8">
            <Heading children="LEARN FROM THE EXPERTS" size={'2xl'} fontFamily={"cursive"}/>
            <Text textAlign={["center", "left"]} children="Find Valuable Content At Reasonable Price" />
            <Link to="/internships">
              <Button size={'lg'} colorScheme="blue">
                Explore Now
              </Button>
            </Link>
          </VStack>

          <Image
            className="vector-graphics"
            boxSize={'md'}
            src={vg}
            objectFit="contain"
          />
        </Stack>
      </div>

      <Box padding={'8'} bg="blackAlpha.800">
        <Heading
          textAlign={'center'}
          fontFamily="body"
          color={'blue.400'}
          children="Our Students Work At"
        />
        <HStack
          className="brandsBanner"
          justifyContent={'space-evenly'}
          marginTop="4px"
        >
          {/* <SiUdemy /> */}
          <h1 className='company'>Cognizant</h1>
          <h1 className='company'>Wipro</h1>
          <h1 className='company'>Zoho</h1>
          <h1 className='company'>IBM</h1>
          <h1 className='company'>Focus Edumatics</h1>
          <h1 className='company'>Accenture</h1>
          <h1 className='company'>Sutherland</h1>
          <h1 className='company'>Acuvate</h1>
          {/* <CgGoogle /> */}
          {/* <CgYoutube />
          <SiCoursera />
          <DiAws /> */}
        </HStack>
      </Box>

{/* leaderboard */}
{/* <div class="leaderboard">
<div class="card one">
  <div class="header">
    <i class="arrow fas fa-chevron-lef"></i>
    <h3 class="title">Leaderboard</h3>
    <div></div>
  </div>
  <div class="sort">
    <div class="day active">This Week Top Interns</div>
  </div>
  <div class="profile">
    <div class="person second">
      <div class="num">2</div>
      <i class="fas fa-caret-up"></i>
      <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" class="photo"/>
      <p class="link">Rama Krishna</p>
      <p class="points">8023</p>
    </div>
    <div class="person first">
      <div class="num">1</div>
      <i class="fas fa-crown"></i>
      <img src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png" alt="" class="photo main"/>
      <p class="link">Akhil Reddy</p>
      <p class="points">8122</p>
    </div>
    <div class="person third">
      <div class="num">3</div>
      <i class="fas fa-caret-up"></i>
      <img src="https://cdn-icons-png.flaticon.com/512/2922/2922561.png" alt="" class="photo"/>
      <p class="link">Joshna</p>
      <p class="points">7884</p>
    </div>
  </div>
  <div class="rest">
    <div class="others flex">
      <div class="rank">
        <i class="fas fa-caret-up"></i>
        <p class="num">4</p>
      </div>
      <div class="info flex">
        <img src="https://cdn-icons-png.flaticon.com/512/4140/4140047.png" alt="" class="p_img"/>
        <p class="link">Meena</p>
        <p class="points">7861</p>
      </div>
    </div>
  </div>
</div>
</div> */}
{/* video */}
      <div className="container2">
        <video
          src={introVideo}
          autoPlay
          controls
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
        ></video>
      </div>
{/* features */}
<Features />


      {/* faq */}
      <div class="card-wrapper  | content-cc">
  <div class="faq-card">

    <div class="faq-ilustrations">

      
      <img class="mobile pattern" 
           src="https://raw.githubusercontent.com/Romerof/FAQ-accordion-card/main/images/bg-pattern-mobile.svg">
      </img>
      <img class="mobile ilust" 
           src="https://raw.githubusercontent.com/Romerof/FAQ-accordion-card/main/images/illustration-woman-online-mobile.svg">
      </img>
      
    </div>

    <main class="faq-content">
      <h1>FAQ</h1>

      <div class="faq-articles">

        <article class="faq-accordion">

          <input type="checkbox" class="tgg-title" id="tgg-title-1"/>

          <div class="faq-accordion-title">
            <label for="tgg-title-1">
              <h2>How many team members can I invite?</h2>
              <span class="arrow-icon">
                <img src="https://raw.githubusercontent.com/Romerof/FAQ-accordion-card/main/images/icon-arrow-down.svg"/>
              </span>
            </label>
          </div>

          <div class="faq-accordion-content">
            <p>You can invite up to 2 additional users on the Free plan. There is no limit on
              team members for the Premium plan.</p>
          </div>

        </article>

        <article class="faq-accordion">

          <input type="checkbox" class="tgg-title" id="tgg-title-2"/>

          <div class="faq-accordion-title">
            <label for="tgg-title-2">
              <h2>
                What is the maximum file upload size?
              </h2>
              <span class="arrow-icon">
                <img src="https://raw.githubusercontent.com/Romerof/FAQ-accordion-card/main/images/icon-arrow-down.svg"/>
              </span>
            </label>
          </div>

          <div class="faq-accordion-content">
            <p>No more than 2GB. All files in your account must fit your allotted storage space.</p>
          </div>

        </article>

        <article class="faq-accordion">

          <input class="tgg-title" type="checkbox" id="tgg-title-3"/>

          <div class="faq-accordion-title">
            <label for="tgg-title-3">
              <h2>
                How do I reset my password?
              </h2>
              <span class="arrow-icon">
                <img src="https://raw.githubusercontent.com/Romerof/FAQ-accordion-card/main/images/icon-arrow-down.svg"/>
              </span>
            </label>
          </div>

          <div class="faq-accordion-content">
            <p>Click “Forgot password” from the login page or “Change password” from your profile page.
              A reset link will be emailed to you.</p>
          </div>

        </article> 

        <article class="faq-accordion">

          <input class="tgg-title" type="checkbox" id="tgg-title-4" />

          <div class="faq-accordion-title">
            <label for="tgg-title-4">
              <h2>
                Can I cancel my subscription?
              </h2>
              <span class="arrow-icon">
                <img src="https://raw.githubusercontent.com/Romerof/FAQ-accordion-card/main/images/icon-arrow-down.svg" />
              </span>
            </label>
          </div>

          <div class="faq-accordion-content">
            <p>
              Yes! Send us a message and we’ll process your request no questions asked.</p>
          </div>

        </article>

        <article class="faq-accordion">

          <input class="tgg-title" type="checkbox" id="tgg-title-5" />

          <div class="faq-accordion-title">
            <label for="tgg-title-5">
              <h2>
                Do you provide additional support?
              </h2>
              <span class="arrow-icon">
                <img src="https://raw.githubusercontent.com/Romerof/FAQ-accordion-card/main/images/icon-arrow-down.svg" />
              </span>
            </label>
          </div>

          <div class="faq-accordion-content">
            <p> Chat and email support is available 24/7. Phone lines are open during normal business hours.</p>
          </div>

        </article> 

      </div>

    </main> 

  </div> 

</div> 

    </section>
  );
}

export default Home;
