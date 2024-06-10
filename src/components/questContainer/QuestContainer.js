import './QuestContainer.scss'
import { QuestCard } from './questCard/index.js';
import React, { useEffect, useState } from 'react';


const useFetchQuests = () => {
  /**
   * Mocks quest data from an API endpoint.
   *
   * @returns {Array<Object>} An array of quest objects.
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

const dictionary = {
  "install_extension": (quest) => ({
    logo: `${process.env.PUBLIC_URL}/download.svg`,
    title: `Install the CareerOS Chrome Extension`, 
    text: 
      { p: `
        Unlock the superpowers of CareerOS with our Chrome Extension. This plugin lets you save companies, contacts, and jobs from Linkedin and other job boards. It also lets you access our messaging template and send Linkedin messages directly from CareerOS.
        `
      }
  }),
  "submit_application": (quest) => ({
    logo: `${process.env.PUBLIC_URL}/send.svg`,
    title: `Submit your application for ${quest.job.title} at ${quest.company.name}`,
    text: {p: `Deadline: ${new Date(quest.due_date).toLocaleDateString("en-GB")}`}
  }),
  "resolve-comment": (quest) => ({
    logo: `${process.env.PUBLIC_URL}/message.svg`, 
    title: `Resolve a comment from [CA name]`,
    text: { p: `You have an unresolved comment from your Career Advisor.`}
  }),
  "save_first_company": (quest) => ({
    logo: `${process.env.PUBLIC_URL}/bookmark.svg`, 
    title: `Save your first company`,
    text: {
      p: `Browse our company database for your favorite companies or new inspiration and save your first company to get started.`
    }
  }),
  "add_contact": (quest) => ({
    logo: `${quest?.company?.logo_url}`,
    title: `Save a contact at ${quest?.company?.name}`, 
    text: 
      { p: `
        You recently saved ${quest?.company?.name}. The next step is to now save a contact who’s working there to start networking with.
        `
      }
  }),
  "send_linkedin_message": (quest) => ({
    logo: `${process.env.PUBLIC_URL}/avatar.svg`, // TODO: this should actually be an existing value from quest.contact. profile_image
    title: `Send a LinkedIn message to ${quest?.contact?.first_name} ${quest?.contact?.last_name} at ${quest?.company?.name}`,
    text: { 
      format: `lineBreak`,
      p: `Send a customized LinkedIn message to reach out to your new contact.`,
      p2: `Don't worry! We'll help you with the wording.`
    }
  }),
  "send_linkedin_connection": (quest) => ({
    logo: `${process.env.PUBLIC_URL}/avatar.svg`, // TODO: this should actually be an existing value from quest.contact.profile_image,
    title: `Send a LinkedIn Invitation to ${quest?.contact?.first_name} ${quest?.contact?.last_name} at ${quest?.company?.name}`,
    text: { p: 'Send an invitation with a tailored message to your new contact. Our AI will help you!'}
  }),
  "send_first_email": (quest) => ({
    logo: `${process.env.PUBLIC_URL}/avatar.svg`, // TODO: this should actually be an existing value from quest.contact.profile_image
    title: `Send a first email to ${quest?.contact?.first_name} ${quest?.contact?.last_name} at ${quest?.company?.name}`,
    text: { 
      p: `Send a first email to ${quest?.contact?.first_name} ${quest?.contact?.last_name} at ${quest?.company?.name} to get a conversation started.`
    }
  }),
  "add_new_contact": (quest) => ({
    logo: `${quest?.company?.logo_url}`,
    title: `Save a new contact at ${quest?.company?.name}`,
    text: { p: `Add another contact to this company to start networking.` }
  }),
  "schedule_coffee_chat": (quest) => ({
    logo: `${process.env.PUBLIC_URL}/coffee.svg`,
    title: `Schedule a coffee with ${quest?.contact?.first_name} ${quest?.contact?.last_name} at ${quest?.company?.name}`,
    text: { 
      format: 'span',
      p: `Get unique insights from your new contact by scheduling an informational interview with them. Make sure to use our`,
      spanText: `coffee chat tips`,
      p2:`to prepare for your meeting.`
    }
  }),
  "send_follow_up_email": (quest) => ({
    logo: `${process.env.PUBLIC_URL}/avatar.svg`, // TODO: this should actually be an existing value from quest.contact.profile_image
    title: `Send a follow-up email to ${quest?.contact?.first_name} ${quest?.contact?.last_name} at ${quest?.company?.name}`,
    text: { 
      p: `Send a follow-up email to ${quest?.contact?.first_name} ${quest?.contact?.last_name} at ${quest?.company?.name} to get a conversation started.`}
  })
};

/**
 * 
 * @param {QuestData} quest - An object containing quest data.
 * @returns {QuestProps} - An object with the corresponding props to be passed to QuestCard component
 */
const getQuestProps = (quest) => {
  /**
   * Dictionary mapping quest types to their corresponding properties.
   */
  
  // TODO: Change this implementation to a switch case as all objects are being created for every iteration


  const questProps = dictionary[quest.type](quest);

  return questProps;
};

/**
 * Renders a Quest Card component based on the provided quest data.
 * @param {Object} quest - An object containing quest data. (See getQuestProps documentation for details)
 */
const renderQuestCard = (quest) => {
    const questCardProps = getQuestProps(quest);
    const { logo, title, text, buttonType } = questCardProps;
    return (
    <QuestCard.Root key={quest.id}>
      <QuestCard.Logo src={logo}/>
      <QuestCard.Title content={title}/>
      <QuestCard.Text textProps={text}/>
      <QuestCard.Button button={buttonType}/>
    </QuestCard.Root>
    )
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