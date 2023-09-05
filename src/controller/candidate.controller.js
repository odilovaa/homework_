const Candidates = require("../model/candidate.model");
const Users = require("../model/user.model");
const Vacancys = require("../model/vacancy.model");

const create = async (req, res) =>
{
    try 
    {
        const {vacancy_id} = req.body;

        let findUser = Vacancys.findOne({owner_id: req.userID});
        const owner_id = findUser.owner_id;

        if(findUser)
            return res.json({message: 'The owner cannot be a candidate!'})


        findUser = Candidates.findOne({candidate_id: req.userID});

        if(findUser)
            return res.json({message: 'You already exit in candidate list!'});

        const newcandidate = new Candidates({vacancy_id, candidate_id: req.userID, owner_id});

        res.json({message: 'Success', newcandidate});
        
    }catch(error)
    {
        console.log(message.error);
        res.status(500).json({message: "INTERNAL SERVER ERROR"});
    };
};


const getbyid = async (req, res) =>
{
    try 
    {
        const {id} = req.params;

        const findUser = Vacancys.findOne({owner_id: id});

        if(!findUser)
            return res.json({message: 'You are not the owner of this vacancy!'})

        const data = Candidates.findOne({vacancy_id: id}).populate("vacancy_id", "candidate_id", "owner_id");

        res.json({message: data});

    }catch(error)
    {
        console.log(message.error);
        res.status(500).json({message: "INTERNAL SERVER ERROR"});
    };
};

module.exports = {
    create, getbyid
};