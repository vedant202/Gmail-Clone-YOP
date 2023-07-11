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

        if(request.params.type=='bin'){
            emails = await Email.find({'bin':true});
            console.log("Bin Emails "+emails);
        }
        if(request.params.type=='allmail'){
            emails = await Email.find();
            console.log("All Mails "+emails)
        }
        if(request.params.type=='starred'){
            emails = await Email.find({'starred':true});
            console.log("All Mails "+emails)
        }
        
        

        return response.status(200).json(emails);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}

export const toggleStarredEmails = async(request,response)=>{
    try{
        await Email.updateOne({_id:request.body.id},{$set:{starred:request.body.value}});
        return response.status(200).json("emails starred marked");
    }catch(error){
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



export const moveEmailsBin=async(request,response)=>{
    try{
        await Email.updateMany({_id:{$in:request.body}},{$set:{bin:true,starred:false,type:''}})

        return response.status(200).json('email deleted successfully');
    }catch(error){
        console.log(error)
        return response.status(500).json(error);
    }
}

export const deleteEmails = async(request,response)=>{
    try {
        await Email.deleteMany({_id:{$in:request.body}})
        return response.status(200).json('email deleted successfully');
    } catch (error) {
        console.log(error)
        return response.status(500).json(error);
    }
}
