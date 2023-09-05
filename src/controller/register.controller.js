const Users = require("../model/user.model");
const jwt = require("jsonwebtoken");

const config = require("../../config");

const create = async (req, res) =>
{
    try
    {
        const {full_name, age, country, job, photo, phone_number, job_experiance, email} = req.body;

        const findUser = await Users.findOne({email});
        
        if(findUser)
            return res.json({message: 'This user already exists!'});

        const data = new Users({full_name, age, country, job, photo, phone_number, job_experiance, email});
        await data.save();

        const token = jwt.sign({full_name}, config.jwt, {expiresIn: '10h'});

        res.status(201).json({message: "Success", data, token});

    }catch (error)
    {
        console.log(error.message);
        res.status(500).json({message: "INTERNAL SERVER ERROR"});
    }
};


const update = async (req, res) =>
{
    try
    {
        const {id} = req.params;
        const {full_name, age, country, job, photo, phone_number, job_experiance, email} = req.body;

        const data = await Users.findById(id)

        if(data.id != req.userID)
            return res.json({message: 'You are not the owner of this user!'});

        const newdata = await Users.findByIdAndUpdate(id, {full_name, age, country, job, photo, phone_number, job_experiance, email});
            
        res.json({message: "Success", newdata});

    }catch (error)
    {
        console.log(message.error);
        res.status(500).json({message: "INTERNAL SERVER ERROR"});
    }
};


const remove = async (req, res) =>
{
    try
    {
        const {id} = req.params;
        const data = Users.findById(id)

        if(data.id != req.userID)
            return res.json({message: 'You are not the owner of this user!'})

        await Users.findByIdAndDelete(id);

        res.json({message: 'Success'});
    }catch (error)
    {
        console.log(message.error);
        res.status(500).json({message: "INTERNAL SERVER ERROR"});
    }
};

module.exports = {
    create, update, remove
};
