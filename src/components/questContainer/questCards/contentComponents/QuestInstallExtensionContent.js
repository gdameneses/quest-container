import QuestCard from "../QuestCard"

const QuestInstallExtensionContent = () => {
    const logo = `${process.env.PUBLIC_URL}/download.svg`
    const title = `Install the CareerOS Chrome Extension`
    const text = `Unlock the superpowers of CareerOS with our Chrome Extension. This plugin lets you save companies, contacts, and jobs from Linkedin and other job boards. It also lets you access our messaging template and send Linkedin messages directly from CareerOS.`
    return (
        <QuestCard logo={logo} title={title} text={text}/>
    )
}

export default QuestInstallExtensionContent;