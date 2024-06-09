import QuestCard from "../QuestCard";

const QuestLinkedinConnectionContent = (quest) => {
    const logo = `${process.env.PUBLIC_URL}/avatar.svg` // this should actually be an existing value from quest.contact.profile_image
    const title = `Send a LinkedIn Invitation to ${quest.contact.first_name} ${quest.contact.last_name} at ${quest.company.name}`
    const text = `Send an invitation with a tailored message to your new contact. Our AI will help you!`
    return (
        <QuestCard logo={logo} title={title} text={text}/>
    )
}

export default QuestLinkedinConnectionContent;