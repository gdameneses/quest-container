import './QuestContainer.scss'
import { getQuestProps } from './helpers/getQuestProps.js';
import { QuestCard } from './questCard/index.js';
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
                  const { logo, title, text, buttonType } = cardProps;
                  return (
                  <QuestCard.Root key={quest.id}>
                    {logo && <QuestCard.Logo src={logo} />}
                    {title && <QuestCard.Title content={title} />}
                    {text && <QuestCard.Text textProps={text} />}
                    {buttonType && <QuestCard.Button button={buttonType} />}
                  </QuestCard.Root>
      )
                })}    
            </div>
        </div>
    )
}

export default QuestContainer;