const QuestCoffeeContent = (quest) => {
    const logo = `${process.env.PUBLIC_URL}/coffee.svg` // this should actually be an existing value from quest.contact.profile_image
    const title = `Schedule a coffee with ${quest.contact.first_name} ${quest.contact.last_name} at ${quest.company.name}`
    const text1 = `Get unique insights from your new contact by scheduling an informational interview with them. Make sure to use our`
    const textSpan = `coffee chat tips`
    const text2 = `to prepare for your meeting.`
    const button = null;
    return (
        <div className="quest-card">
            <img src={logo} alt="Quest logo" />
            <h2>{title}</h2>
            <p>{text1} <span>{textSpan}</span> {text2}</p>
            {button && <button>{button}</button>}
        </div>
    )
}

export default QuestCoffeeContent;