const QuestLinkedInMessageContent = (quest) => {
    const logo = `${process.env.PUBLIC_URL}/avatar.svg` // this should actually be an existing value from quest.contact.profile_image
    const title = `Send a LinkedIn message to ${quest.contact.first_name} ${quest.contact.last_name} at ${quest.company.name}`
    const text1 = `Send a customized LinkedIn message to reach out to your new contact.`
    const text2 = `Don't worry! We'll help you with the wording.`
    const button = '';
    return (
        <div className="quest-card">
            <img src={logo} alt="Quest logo" />
            <h2>{title}</h2>
            <p>{text1} <br></br> {text2}</p>
            {button && <button>{button}</button>}
        </div>
    )
}

export default QuestLinkedInMessageContent;