const {CityRepository} = require('../repository/index');

class CityService {

    constructor(){
        this.cityRepository = new CityRepository();
    }

    async createCity(data) {
        try {
            const city = await this.cityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log("Somthing went wrong in the createCity service layer!");
            throw {error};
        }
    }

    async deleteCity(id) {
        try {
            console.log("CityService `deleteCity`: -> ",id);
            const response = await this.cityRepository.deleteCity(id);
            return response;
        } catch (error) {
            console.log("Somthing went wrong in the deleteCity service layer!");
            throw {error};
        }
    }

    async updateCity(id,data) {
        try {
            const city = await this.cityRepository.updateCity(id,data);
            return city;
        } catch (error) {
            console.log("Somthing went wrong in the updateCity service layer!");
            throw {error};
        }
    }

    async getAllCity(){
        try {
            const cities = await this.cityRepository.getAllCity();
            return cities;
        } catch (error) {
            console.log("Failed to fetch the all cities!");
            throw {error};
        }
    }

    async getCity(id) {
        try {
            console.log("city-service id: ->",id);
            const city = await this.cityRepository.getCity(id);
            return city;
        } catch (error) {
            console.log("Somthing went wrong in the getCity service layer!");
            throw {error};
        }
    }
}

module.exports = CityService;
