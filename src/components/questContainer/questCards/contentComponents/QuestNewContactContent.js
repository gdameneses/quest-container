import QuestCard from "../QuestCard"

const QuestNewContactContent = (quest) => {
    const logo = `${quest.company.logo_url}` // this should actually be an existing value from quest.contact.profile_image
    const title = `Save a new contact at ${quest.company.name}`
    const text = `Add another contact to this company to start networking.`
    return (
        <QuestCard logo={logo} title={title} text={text}/>
    )
}

export default QuestNewContactContent;