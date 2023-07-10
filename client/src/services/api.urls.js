// Urls to handle api example sent mail, delete mail
export const API_URLS = {
    saveSentEmail:{
        endpoint:"save",
        method:"POST"
    },
    getEmailFromType:{
        endpoint:"emails",
        method:"GET"
    },
    saveDraftEmail:{
        endpoint:"save-draft",
        method:"POST"
    },
    moveEmailsToBin:{
        endpoint:"bin",
        method:"POST"
    },
    toggleStarredEmails:{
        endpoint:"starred",
        method:"POST"
    }
}