import QuestCard from "../QuestCard"

const QuestFirstEmailContent = (quest) => {
    const logo = `${process.env.PUBLIC_URL}/avatar.svg` // this should actually be an existing value from quest.contact.profile_image
    const title = `Send a first email to ${quest.contact.first_name} ${quest.contact.last_name} at ${quest.company.name}`
    const text = `Send a first email to ${quest.contact.first_name} ${quest.contact.last_name} at ${quest.company.name} to get a conversation started.`
    return (
        <QuestCard logo={logo} title={title} text={text}/>
    )
}

export default QuestFirstEmailContent