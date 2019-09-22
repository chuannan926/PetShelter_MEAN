const What = require('./models');

module.exports ={
    index:(request,response) =>{
        What.find({}).sort({type:1})
        .then(All_What =>{
            console.log("All_What");
            response.json(All_What);
        })
        .catch(err => response.json(err))
    },

    new_what:(request, response) =>{
        console.log("new what controller",request.body);
        What.create(request.body)
        .then(New_What =>{
            console.log("Show new What controller");
            response.json(New_What);
        })
        .catch(err => response.json(err))
    },

    one_what:(request, response) =>{
        console.log("One_what_ID controller", request.params.id);
        What.findOne({_id : request.params.id})
        .then(One_What =>{
            console.log("found one_what controller", One_What);
            response.json(One_What);
        })
        .catch(err => response.json(err)) 
    },

    delete_what:(request,response) =>{
        What.findByIdAndRemove({_id : request.params.id})
        .then(Delete_what=>{
            console.log("Delete_What controller",Delete_what);
            response.json(Delete_what)
        })
        .catch(err =>response.json(err))
    },

    update_what:(request,response) =>{
        console.log("this what ID controller", request.params.id);
        What.findByIdAndUpdate({_id:request.params.id},request.body,{runValidators:true})
        //request.body 是传进来的Form
        .then(Edit_What =>{
            console.log("Update this what controller", Edit_What);
            response.json(Edit_What);
        })
        .catch(err => response.json(err))
    },
    
    like_what:(request,response) =>{
       console.log("likelikelikelike controller",request.params.id);
       What.findByIdAndUpdate({_id:request.params.id},{runValidators:true})
        .then(Like_What =>{
            console.log("Like What What controller", Like_What.like)
            Like_What.like++;
            Like_What.save();
            console.log("Like What What controller", Like_What.like)
        })
        .then(Like_What=>response.json(Like_What))

        .catch(err => response.json(err))
    },





}