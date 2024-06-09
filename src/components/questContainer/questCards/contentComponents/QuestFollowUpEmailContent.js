import QuestCard from "../QuestCard"

const QuestFollowUpEmailContent = (quest) => {
    const logo = `${process.env.PUBLIC_URL}/avatar.svg` // this should actually be an existing value from quest.contact.profile_image
    const title = `Send a follow-up email to ${quest.contact.first_name} ${quest.contact.last_name} at ${quest.company.name}`
    const text = `Send a follow-up email to ${quest.contact.first_name} ${quest.contact.last_name} at ${quest.company.name} to get a conversation started.`
    return (
        <QuestCard logo={logo} title={title} text={text}/>
    )
}

export default QuestFollowUpEmailContent;