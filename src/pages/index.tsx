import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { ChallengeBox } from "../components/ChallengeBox";
import { Profile } from "../components/Profile";

import Head from 'next/head';

import styles from "../styles/pages/Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Move.it</title>
      </Head>
      <ExperienceBar />
      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
    </div>
  )
}
