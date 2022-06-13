const { Schema, model } = require('mongoose');

const skemaPertandingan = new Schema({
    pengelola: { type: Schema.Types.ObjectId, required: true, ref: 'pengelola' },
    nama: { type: String, required: true, maxlength: [255, 'Nama pertandingan tidak boleh melebihi 255 perkataan'] },
    tentang: {
        deskripsi: String,
        tarikhPelaksanaan: Date,
        syarat: { type: [String] },
        sumber: { type: [{
            nama: String,
            url: String
        }] }
    },
    hadPeserta: { type: Number },
    pengiraan: { type: Schema.Types.ObjectId, ref: 'pengiraan', required: true },
    tarikhMasa: {
        cipta: Date,
        laksana: Date,
        tamat: Date
    },
    bilPusingan: Number,
    bilPeserta: { type: Number, default: 0 },
    statistik: {
        jumlah: Number,
        purata: Number,
        julat: Number,
        standardDeviation: Number
    },
    format: { type: Object, required: true, default: {}}
});

module.exports = model('pertandingan', skemaPertandingan, 'pertandingan');