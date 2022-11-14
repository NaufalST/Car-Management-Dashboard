import Cars from "../models/cars.js";

export const getCars = async(req,res)=>{
    try {
        const cars = await Cars.findAll({
            attributes:['id','name','price','size','photo']
        });
        res.json(cars)
    } catch (error) {
        console.log(error.message);
    }
}

export const getCarsbySize = async(req,res)=>{
    try {
        const cars = await Cars.findOne({
            where:{
                size: req.params.size
            }
        });
        res.status(200).json(cars)
    } catch (error) {
        console.log(error.message);
    }
}

export const createCars = async(req,res)=>{
    try {
        await Cars.create({
            name: req.body.name,
            price: req.body.price,
            size: req.body.size,
            photo: req.body.photo
        });
        res.status(200).json("Cars created")


    } catch (error) {
        console.log(error.message);
    }
}

export const updateCars = async(req,res)=>{
    try {
        await Cars.update({
            name: req.body.name,
            price: req.body.price,
            size: req.body.size,
            photo: req.body.photo
        },{
            where: {id: req.params.id}
        });
        res.status(200).json("Cars updated")
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteCars = async(req,res)=>{
    try {
        await Cars.destroy({
            where: {id: req.params.id}
        });
        res.status(200).json("Cars deleted")
    } catch (error) {
        console.log(error.message);
    }
}