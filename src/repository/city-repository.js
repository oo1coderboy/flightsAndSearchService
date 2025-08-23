const { where } = require('sequelize');
const { City } = require('../models/index');

class CityRepository {
    async createCity({ name }) {
        try {
            const city = await City.create({ name });
            return city;
        } catch (error) {
            console.log("Something went wrong in the createCity repository layer.");
            throw { error };
        }
    }

    async deleteCity({ id }) {
        try {
            await City.destroy({
                where: {
                    id
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in the deleteCity repository layer.");
            throw { error };
        }
    }

    async updateCity({ id, data }) {
        try {
            const city = await City.update(
                data,
                {
                    where: {
                        id: id,
                    },
                },
            );
            return city;
        } catch (error) {
            console.log("Something went wrong in the updateCity repository layer.");
            throw { error };
        }
    }
    
    async getCity({id}){
        try {
            const city = await City.findByPk(id);
            return city;
        } catch (error) {
            console.log("Something went wrong in the getCity repository layer.");
            throw {error};
        }
    }
}

module.exports = CityRepository;
