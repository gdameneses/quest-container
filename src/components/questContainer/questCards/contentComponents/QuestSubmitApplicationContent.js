import QuestCard from "../QuestCard";

const QuestSubmitApplicationContent = (quest) => {
    const logo = `${process.env.PUBLIC_URL}/send.svg`
    const title = `Submit your application for ${quest.job.title} at ${quest.company.name}`
    const text = `Deadline: ${new Date(quest.due_date).toLocaleDateString("en-GB")}`
    return (
        <QuestCard title={title} text={text} logo={logo}/>
    )
}

export default QuestSubmitApplicationContent;