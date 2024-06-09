import QuestCard from "../QuestCard";

const QuestFirstCompanyContent = () => {
    const logo = `${process.env.PUBLIC_URL}/bookmark.svg`
    const title = `Save your first company`
    const text = `Browse our company database for your favorite companies or new inspiration and save your first company to get started.`
    return (
        <QuestCard logo={logo} title={title} text={text}/>
    )
}

export default QuestFirstCompanyContent;