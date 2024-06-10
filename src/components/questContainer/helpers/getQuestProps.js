  /**
   * Dictionary mapping quest types to a function that returns the correct QuestCardProps
   * It could also be a switch statement, but due to not a large
   * options for quest.type this approach can be used for readability
   */
  const QUEST_TYPES_DICTIONARY = {
    "install_extension": () => ({
      logo: `${process.env.PUBLIC_URL}/download.svg`,
      title: `Install the CareerOS Chrome Extension`, 
      text: 
        { p: `
          Unlock the superpowers of CareerOS with our Chrome Extension. This plugin lets you save companies, contacts, and jobs from Linkedin and other job boards. It also lets you access our messaging template and send Linkedin messages directly from CareerOS.
          `
        },
      action: {
        modifier: `card__action--primary`,
        elements: { text: `Install`, icon: `box-arrow-up-right`}
      }
    }),
    "submit_application": (quest) => ({
      logo: `${process.env.PUBLIC_URL}/send.svg`,
      title: `Submit your application for ${quest.job.title} at ${quest.company.name}`,
      text: {p: `Deadline: ${new Date(quest.due_date).toLocaleDateString("en-GB")}`},
      action: {
        modifier: `card__action--outline card__action--rounded`,
        elements: { icon: `arrow-up-right`}
      }
    }),
    "resolve-comment": () => ({
      logo: `${process.env.PUBLIC_URL}/message.svg`, 
      title: `Resolve a comment from [CA name]`,
      text: { p: `You have an unresolved comment from your Career Advisor.`},
      action: {
        modifier: `card__action--outline card__action--rounded`,
        elements: { icon: `arrow-up-right`}
      }
    }),
    "save_first_company": () => ({
      logo: `${process.env.PUBLIC_URL}/bookmark.svg`, 
      title: `Save your first company`,
      text: {
        p: `Browse our company database for your favorite companies or new inspiration and save your first company to get started.`
      },
      action: {
        modifier: `card__action--outline card__action--rounded`,
        elements: { icon: `arrow-up-right`}
      }
    }),
    "add_contact": (quest) => ({
      logo: `${quest?.company?.logo_url}`,
      title: `Save a contact at ${quest?.company?.name}`, 
      text: 
        { p: `
          You recently saved ${quest?.company?.name}. The next step is to now save a contact who’s working there to start networking with.
          `
        },
      action: {
        modifier: `card__action--outline card__action--rounded`,
        elements: { icon: `arrow-up-right`}
      }
    }),
    "send_linkedin_message": (quest) => ({
      logo: `${process.env.PUBLIC_URL}/avatar.svg`, // TODO: this should actually be an existing value from quest.contact. profile_image
      title: `Send a LinkedIn message to ${quest?.contact?.first_name} ${quest?.contact?.last_name} at ${quest?.company?.name}`,
      text: { 
        format: `lineBreak`,
        p: `Send a customized LinkedIn message to reach out to your new contact.`,
        p2: `Don't worry! We'll help you with the wording.`
      },
      action: {
        modifier: `card__action--outline card__action--rounded`,
        elements: { icon: `arrow-up-right`}
      }
    }),
    "send_linkedin_connection": (quest) => ({
      logo: `${process.env.PUBLIC_URL}/avatar.svg`, // TODO: this should actually be an existing value from quest.contact.profile_image,
      title: `Send a LinkedIn Invitation to ${quest?.contact?.first_name} ${quest?.contact?.last_name} at ${quest?.company?.name}`,
      text: { p: `Send an invitation with a tailored message to your new contact. Our AI will help you!`},
      action: {
        modifier: `card__action--outline card__action--rounded`,
        elements: { icon: `arrow-up-right`}
      }
    }),
    "send_first_email": (quest) => ({
      logo: `${process.env.PUBLIC_URL}/avatar.svg`, // TODO: this should actually be an existing value from quest.contact.profile_image
      title: `Send a first email to ${quest?.contact?.first_name} ${quest?.contact?.last_name} at ${quest?.company?.name}`,
      text: { 
        p: `Send a first email to ${quest?.contact?.first_name} ${quest?.contact?.last_name} at ${quest?.company?.name} to get a conversation started.`
      },
      action: {
        modifier: `card__action--outline card__action--rounded`,
        elements: { icon: `arrow-up-right`}
      }
    }),
    "add_new_contact": (quest) => ({
      logo: `${quest?.company?.logo_url}`,
      title: `Save a new contact at ${quest?.company?.name}`,
      text: { p: `Add another contact to this company to start networking.` },
      action: {
        modifier: `card__action--outline card__action--rounded`,
        elements: { icon: `arrow-up-right`}
      }
    }),
    "schedule_coffee_chat": (quest) => ({
      logo: `${process.env.PUBLIC_URL}/coffee.svg`,
      title: `Schedule a coffee with ${quest?.contact?.first_name} ${quest?.contact?.last_name} at ${quest?.company?.name}`,
      text: { 
        format: 'span',
        p: `Get unique insights from your new contact by scheduling an informational interview with them. Make sure to use our`,
        spanText: `coffee chat tips`,
        p2:`to prepare for your meeting.`
      },
      action: {
        modifier: `card__action--outline card__action--rounded`,
        elements: { icon: `arrow-up-right`}
      }
    }),
    "send_follow_up_email": (quest) => ({
      logo: `${process.env.PUBLIC_URL}/avatar.svg`, // TODO: this should actually be an existing value from quest.contact.profile_image
      title: `Send a follow-up email to ${quest?.contact?.first_name} ${quest?.contact?.last_name} at ${quest?.company?.name}`,
      text: { 
        p: `Send a follow-up email to ${quest?.contact?.first_name} ${quest?.contact?.last_name} at ${quest?.company?.name} to get a conversation started.`},
      action: {
        modifier: `card__action--outline card__action--rounded`,
        elements: { icon: `arrow-up-right`}
      }
    })
  };
  
/**
   * Looks up the QUEST_TYPES_DICTIONARY object and retrieves the relevant function to
   * get the properties
   * @param {QuestData} quest - An object containing quest data.
   * @returns {QuestProps} - An object with the corresponding props to be passed to QuestCard component
   */
  const getQuestProps = (quest) => {
    const questProps = QUEST_TYPES_DICTIONARY[quest.type]?.(quest);
  
    return questProps || {};
  };
  
export { getQuestProps }