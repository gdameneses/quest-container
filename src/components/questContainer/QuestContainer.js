import './QuestContainer.scss'
import { getQuestProps } from './helpers/getQuestProps.js';
import { Card } from '../card/index.js';
import React, { useEffect, useState } from 'react';

  /**
   * Mocks quest data from an API endpoint.
   *
   * @returns {Array<Object>} An array of quest objects.
   */
const useFetchQuests = () => {
  const [quests, setQuests] = useState([]);

  useEffect(() => {
    const fetchQuests = async () => {
      const data = await fetch('/quests.json').then(res => res.json());
      setQuests(data.quests);
    };

    fetchQuests();
  }, []);
  return quests;
};


function QuestContainer () {  
    const quests = useFetchQuests();
    return (
        <div>
            <div>
                <h1>Quests</h1>
                <img src={`${process.env.PUBLIC_URL}/info.svg`} alt="Info button"/>
            </div>
            <div>
                {quests.map(quest => {
                  const cardProps = getQuestProps(quest);
                  const { logo, title, text } = cardProps;
                  const buttonType = 'PH'
                  return (
                    <Card.Root key={quest.id}>
                      <div className="card__content">
                        {logo && <Card.Logo src={logo} />}
                        <div className="card__body">
                          {title && <Card.Title content={title}/>}
                          {text && <Card.Text textProps={text}/>}
                        </div>
                        {buttonType && <Card.Action button={buttonType}/>}
                      </div>
                    </Card.Root>
                  )
                })}
            </div>
        </div>
    )
}

export default QuestContainer;