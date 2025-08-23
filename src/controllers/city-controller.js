const {CityService} = require('../services/index');


const cityService = new CityService();

// POST :-> /city  -> req.body
const create = async (req,res) => {
    try {
        console.log("Request-body: ",req.body);
        const response = await cityService.createCity(req.body);
        return res.status(201).json({
            data:response,
            success:true,
            message:'Successfully created a city!',
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to create the new city!',
            error:error
        })
    }
}

// DELETE :-> /city/:id  -> req.params.id
const destroy = async (req,res) => {
    try {
        console.log("Request-Params: ",req.params.id);
        const response = await cityService.deleteCity({id:req.params.id});

        return res.status(200).json({
            data:response,
            success:true,
            message:`Successfully deleted the city with id ${req.params.id}`,
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:`Not able to delete the city with id ${req.params.id}`,
            err: error
        })
    }
}

// Patch :-> /city/:id  -> req.body
const update = async (req,res) => {
    try {
        const response = await cityService.updateCity({id:req.params.id,data:req.body});
        return res.status(200).json({
            data:response,
            success:true,
            message:'Successfully updated the city record !',
            err:null
        })
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message:`Not able to update the city !`,
            err:error
        })
    }
}

// GET : -> /city 
const getAllCities = async (req,res) =>{
    try {
        const response = await cityService.getAllCity();
        return res.status(200).json({
            data:response,
            success:true,
            message:"Successfully fetched all the cities data!",
            err: null
        })
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message:"Failed to fetch all the cities data.",
            err:error
        })
    }
}

// GET :-> /city/:id  -> req.params.id
const get = async (req,res) => {
    try {
        console.log("Fetching the id from search: ->",req.params.id);
        const response = await cityService.getCity({id:req.params.id});
        return res.status(200).json({
            data:response,
            success:true,
            message:`Successfully fetched the city with the id as ${req.params.id}`,
            err:{}
        })
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message:`Not able to fetch the city with the id as ${req.params.id}`,
            err:error
        })
    }
}

module.exports = {
    create,
    destroy,
    update,
    getAllCities,
    get
}
