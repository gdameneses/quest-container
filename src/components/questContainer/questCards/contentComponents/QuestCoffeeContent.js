import QuestCard from "../QuestCard"

const QuestCoffeeContent = (quest) => {
    const logo = `${process.env.PUBLIC_URL}/coffee.svg` // this should actually be an existing value from quest.contact.profile_image
    const title = `Schedule a coffee with ${quest.contact.first_name} ${quest.contact.last_name} at ${quest.company.name}`
    // Fix span. First idea is to have a TextComponent that accepts a few props, thus allowing for <br> and <span> tags to be built
    const text = `Get unique insights from your new contact by scheduling an informational interview with them. Make sure to use our <span>coffee chat tips</span> to prepare for your meeting.`
    return (
        <QuestCard logo={logo} title={title} text={text}/>
    )
}

export default QuestCoffeeContent;