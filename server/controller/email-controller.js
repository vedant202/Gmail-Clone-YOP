import Email from "../model/email.js"

export const saveSentEmails =(request,response)=>{
    try {
        const email = new Email(request.body);
        email.save();
        return response.status(200).json('email saved successfully')
    } catch (error) {
        return response.status(500).json(error.message);
    }
}

export const getEmails = async(request,response)=>{
    try {
        let emails;
        console.log(request.params)
        if(request.params.type=='sent'){
            emails = await Email.find({'type':'sent'});
            console.log("Emails "+emails)
        }
        if(request.params.type=='draft'){
            emails = await Email.find({'type':'drafts'});
            console.log("Draft Emails "+emails)
        }
        

        return response.status(200).json(emails);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}

export const saveDraftemails = (request,response)=>{
    try {
        // console.log(request.body)
        const body = request.body;
        const email = new Email(request.body);
        email.save();

        return response.status(200).json('email saved successfully '+body.subject)

    } catch (error) {
        return response.status(500).json(error);
    }
}

