const Users = require("../model/user.model");
const Vacancys = require("../model/vacancy.model");

const create = async (req, res) =>
{
    try
    {
        const {company_name, job_name, job_experiance, gaphic, salary, requirement} = req.body;

        const vacancy = new Vacancys({company_name, job_name, job_experiance, gaphic, salary, requirement, owner_id:req.userID});
        await vacancy.save()

        res.status(201).json({message: "Success", vacancy});

    }catch(error)
    {
        console.log(message.error);
        res.status(500).json({message: "INTERNAL SERVER ERROR"});
    };
};


const getAll = async (req, res) =>
{
    try
    {
        const date = Vacancys.find().populate("owner_id");
        res.json({message: date});

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

        const date = Vacancys.findById(id).populate("owner_id");
        res.json({message: date});

    }catch(error)
    {
        console.log(message.error);
        res.status(500).json({message: "INTERNAL SERVER ERROR"});
    };
};


const update = async (req, res) =>
{
    try
    {
        const {id} = req.params;
        const {company_name, job_name, job_experiance, gaphic, salary, requirement} = req.body;

        const data = Users.findById(id)

        if(data.id != req.userID)
            return res.json({message: 'You are not the owner of this user!'});

        const newdata = await Vacancys.findByIdAndUpdate(id, {company_name, job_name, job_experiance, gaphic, salary, requirement});
            
        res.json({message: "Success", newdata});

    }catch(error)
    {
        console.log(message.error);
        res.status(500).json({message: "INTERNAL SERVER ERROR"});
    };
};


const remove = async (req, res) =>
{
    try
    {
        const {id} = req.params;
        const data = Vacancys.findById(id)

        if(data.id != req.userID)
            return res.json({message: 'You are not the owner of this user!'})

        await Vacancys.findByIdAndDelete(id);

        res.json({message: 'Success'});
        
    }catch(error)
    {
        console.log(message.error);
        res.status(500).json({message: "INTERNAL SERVER ERROR"});
    };
};


module.exports = {
    create, getAll, getbyid, update, remove
};