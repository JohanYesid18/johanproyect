const mongoose = require('mongoose');

const cursosSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "título requerido"],
        max: [30, "título muy largo"],
        minlength: [10, "título muy corto"],
    },
    description: {
        type: String,
        required: [true, "descripción requerida"],
        minlength: [10, "descripción muy corta"],
    },
    weeks: {
        type: Number,
        required: [true, "semanas requeridas"],
        min: [1, "semanas mínimas"],
        max: [9, "semanas máximas"],
    },
    enroll_cost: {
        type: Number,
        required: [true, "coste de inscripción requerido"],
    },
    minimum_skill: {
        type: String,
        required: [true, "nivel de habilidad mínimo requerido"],
        enum: ["Beginner", "Intermediate", "Advanced", "Expert"],
    },
    createdAt: Date,
});

const cursosModel = mongoose.model("cursos", cursosSchema);

module.exports = cursosModel;