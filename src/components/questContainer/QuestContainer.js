import './questContainer.scss'
import { getQuestProps } from './helpers/getQuestProps.js';
import { Card } from '../card/Card.js';
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
        <div className="container">
            <div>
                <h1>Quests</h1>
                <img src={`${process.env.PUBLIC_URL}/info.svg`} alt="Info button"/>
            </div>
            <div>
                {quests.map(quest => {
                  const cardProps = getQuestProps(quest);
                  return (
                    <Card key={quest.id} props={cardProps}/>
                  )
                })}
            </div>
        </div>
    )
}

export default QuestContainer;