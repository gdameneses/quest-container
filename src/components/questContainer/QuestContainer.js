import './QuestContainer.scss'
import { 
  QuestAddContactContent, 
  QuestSubmitApplicationContent,
  QuestCoffeeContent,
  QuestCommentContent,
  QuestFirstCompanyContent,
  QuestFirstEmailContent,
  QuestFollowUpEmailContent,
  QuestInstallExtensionContent,
  QuestLinkedInMessageContent,
  QuestLinkedinConnectionContent,
  QuestNewContactContent
} from './questCards/contentComponents/index.js'
import React, { useEffect, useState } from 'react';


const useFetchQuests = () => {
    /**
     * Mocks an API call returning the value of response.quests
     * @returns {array}
     */
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

function QuestCardWrapper({ quest, Content }) {
    return <Content {...quest} />;
  }

const renderQuestCard = (quest) => {
    const Content = {
        "install_extension": QuestInstallExtensionContent,
        "submit_application": QuestSubmitApplicationContent,
        "resolve-comment": QuestCommentContent,
        "save_first_company": QuestFirstCompanyContent,
        "add_contact": QuestAddContactContent,
        "send_linkedin_message": QuestLinkedInMessageContent,
        "send_linkedin_connection": QuestLinkedinConnectionContent,
        "send_first_email": QuestFirstEmailContent,
        "add_new_contact": QuestNewContactContent,
        "schedule_coffee_chat": QuestCoffeeContent,
        "send_follow_up_email": QuestFollowUpEmailContent
    }[quest.type];

    if (!Content) return null;

    return <QuestCardWrapper quest={quest} Content={Content} key={quest.id} />;
  };

function QuestContainer () {
    const quests = useFetchQuests();
    return (
        <div>
            <div>
                <h1>Quests</h1>
                <img src={`${process.env.PUBLIC_URL}/info.svg`} alt="Info button"/>
            </div>
            <div className="quest-container">
                {quests.map(renderQuestCard)}    
            </div>
        </div>
    )
}

export default QuestContainer;