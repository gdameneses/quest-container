import QuestCard from "../QuestCard"

const QuestCommentContent = () => {
    const logo = `${process.env.PUBLIC_URL}/message.svg`
    const title = `Resolve a comment from [CA name]`
    const text = `You have an unresolved comment from your Career Advisor.`
    return (
        <QuestCard logo={logo} title={title} text={text}/>
    )
}

export default QuestCommentContent