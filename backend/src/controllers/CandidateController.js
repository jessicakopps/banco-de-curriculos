const Candidate = require('../models/Candidate');


module.exports = {
    async register(req, res) {

        const { name, job, date, cep, address, district, city, addressNumber, uf, cell, email, cpf, 
          gender, maritalStatus, phone1, phone2, rg, vehicle, cnh} = req.body;

        const newCandidate = new Candidate();

        newCandidate.name = name;
        newCandidate.job = job;
        newCandidate.date = date;
        newCandidate.cep = cep;
        newCandidate.address = address;
        newCandidate.district = district;
        newCandidate.city = city;
        newCandidate.addressNumber = addressNumber;
        newCandidate.uf = uf;
        newCandidate.cell = cell;
        newCandidate.email = email;
        newCandidate.cpf = cpf;
        
        newCandidate.gender = gender;
        newCandidate.maritalStatus = maritalStatus;
        newCandidate.phone1 = phone1;
        newCandidate.phone2 = phone2;
        newCandidate.rg = rg;
        newCandidate.vehicle = vehicle;
        newCandidate.cnh = cnh;


        newCandidate.save((err, savedCandidate) => {
            if (err) {
                console.log(err);
                return res.status(500).send('DB: Algo deu errado');
                
            } 
            return res.status(200).send(savedCandidate);
        });
    },



};