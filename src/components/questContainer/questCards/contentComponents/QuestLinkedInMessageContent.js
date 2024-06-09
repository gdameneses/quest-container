import QuestCard from "../QuestCard";

const QuestLinkedInMessageContent = (quest) => {
    const logo = `${process.env.PUBLIC_URL}/avatar.svg` // this should actually be an existing value from quest.contact.profile_image
    const title = `Send a LinkedIn message to ${quest.contact.first_name} ${quest.contact.last_name} at ${quest.company.name}`
    const text = `Send a customized LinkedIn message to reach out to your new contact.
Don't worry! We'll help you with the wording.`
    return (
        <QuestCard logo={logo} title={title} text={text}/>
    )
}

export default QuestLinkedInMessageContent;