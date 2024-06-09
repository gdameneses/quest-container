import QuestCard from "../QuestCard"

const QuestAddContactContent = (quest) => {
    const companyName = quest.company.name
    const logo = `${quest.company.logo_url}`
    const title = `Save a contact at ${companyName}`
    const text = `You recently saved ${companyName}. The next step is to now save a contact who’s working there to start networking with.`
    return (
        <QuestCard logo={logo} title={title} text={text}/>
    )
}

export default QuestAddContactContent;  