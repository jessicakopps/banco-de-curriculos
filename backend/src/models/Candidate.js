const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    name: { type: String, unique: false, required: true },
    job: { type: String, unique: false, required: true },
    date: { type: String, unique: false, required: true },
    cep: { type: String, unique: false, required: true },
    address: { type: String, unique: false, required: true },
    district: { type: String, unique: false, required: true },
    city: { type: String, unique: false, required: true },
    addressNumber: { type: String, unique: false, required: true },
    uf: { type: String, unique: false, required: true },
    cell: { type: String, unique: false, required: true },
    email: { type: String, unique: true, required: true },
    cpf: { type: String, unique: true, required: true },
    
    gender: { type: String, unique: false, required: false },
    maritalStatus: { type: String, unique: false, required: false },
    phone1: { type: String, unique: false, required: false },
    phone2: { type: String, unique: false, required: false },
    rg: { type: String, unique: false, required: false },    
    vehicle: { type: String, unique: false, required: false },
    cnh: { type: String, unique: false, required: false }
}, {
    timestamps: true
});

module.exports = mongoose.model('Candidate', CandidateSchema);