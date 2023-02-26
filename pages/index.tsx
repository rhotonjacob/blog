import Head from "next/head"
import { Box, Container, Flex } from '@chakra-ui/react'
import Nav from '../components/Nav';

interface Position {
  title: string;
  company: string;
  url: string;
  duration: string;
  bulletPoints: string[];
}

const workHistory: Position[] = [
  {
    title: "Software Engineer",
    company: "Hotel Engine",
    url: "https://www.hotelengine.com/",
    duration: "July 2021 - November 2022",
    bulletPoints: [
      "Built a new full-stack analytics application using React, TypeScript, and Node, providing individual properties with actionable insights on their performance",
      "Collaborated directly with the Product and Design teams to ensure new features could be shipped quickly while still meeting all customer needs",
      "Improved the robustness of the code by implementing components in Storybook and writing end-to-end tests using Cypress",
      "Peer-reviewed code to ensure department-wide standards were being met",
      "Onboarded new engineers by engaging in pair-programming",
    ]
  },
  {
    title: "Software Developer",
    company: "Reynolds and Reynolds",
    url: "https://www.reyrey.com/",
    duration: "January 2019 - July 2021",
    bulletPoints: [
      "2020 Meritorious Performance Award winner",
      "Built a responsive single-page application using React and TypeScript on top of a legacy codebase",
      "Increased automated unit test coverage using Jest and React Testing Library, reducing bugs and improving build times",
    ],
  },
]

const Home = () => {
  return (
    <>
      <Head>
        <title>Jacob Rhoton</title>
      </Head>
      <Nav />
      <main>
        <section>
          <Flex alignItems="center" justifyContent="center" height="100vh">
            <h1>Welcome to my resume site!</h1>
          </Flex>
        </section>
        <section id="about">
          <Flex alignItems="center" justifyContent="center" height="100vh">
            <h2>About me</h2>
            <p>I am a Software Engineer from Denver, Colorado with over three years of professional web development experience, primarily using React and TypeScript. The most rewarding part of this career, for me, is having regular opportunities to learn and grow in order to overcome new challenges.</p>
          </Flex>
        </section>
        <section id="work">
          <Flex alignItems="center" justifyContent="center" height="100vh">
            <h2>Experience</h2>
            {workHistory.map(({title, company, url, duration, bulletPoints}, jobIndex) => (
              <div key={jobIndex}>
                <h2 style={{display: "inline-block"}}>{`${title} @ `}</h2>
                <a href={url} target="_blank" style={{display: "inline-block"}}>{company}</a>
                <p>{duration}</p>
                {bulletPoints.map((item, i) => (
                  <p key={i}>{`- ${item}`}</p>
                ))}
              </div>
            ))}
          </Flex>
        </section>
        <section id="portfolio">
          <Flex alignItems="center" justifyContent="center" height="100vh">
            <h1>Portfolio</h1>
          </Flex>
        </section>
        <section id="contact">
          <Flex alignItems="center" justifyContent="center" height="100vh">
            <h1>Contact</h1>
          </Flex>
        </section>
      </main>

    </>
  );
}

export default Home;