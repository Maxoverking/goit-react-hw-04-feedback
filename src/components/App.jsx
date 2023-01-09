import {useState} from 'react'
import { Container } from "./App.styled";
import { Section } from "./Section/Section";
import { FeedbackBtn } from "./FeedbackBtn/FeedbackBtn";
import { Notification } from './Notification/Notification';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = (evt) => {
    const {textContent} = evt.target;
    // console.log("🚀  textContent", textContent);

    if (textContent === 'good') {
        setGood(good+ 1);
    } else if (textContent === 'neutral') {
        setNeutral (neutral+1);
      }else if (textContent ==='bad') {
        setBad(bad + 1);;
      }
  }
  
    const countTotalFeedback = () => {
      let result = good + neutral + bad;
      return result;
    }
  
    const positiveComentsCount = () => {
      const result = countTotalFeedback();
      const coments = (good * 100) / result;
      return Math.round(coments);
    }

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackBtn
            options={["good", "neutral", "bad"]}
            onLeaveFeedback={onLeaveFeedback} />
        </Section>
        {countTotalFeedback() === 0
          ?
          <Notification message="There is no feedback" />
          :
          <Section title="Statictics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={positiveComentsCount()}
            />
          </Section>
        }
      </Container>
    )
}