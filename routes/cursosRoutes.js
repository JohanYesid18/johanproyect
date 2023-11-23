const express = require('express');
const cursosModel = require('../models/cursosModel');
const mongoose = require('mongoose');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const cursos = await cursosModel.find();
        if (cursos.length === 0) {
            res.status(400).json({
                success: false,
                msg: "No hay cursos disponibles"
            });
        } else {
            res.status(200).json({
                success: true,
                data: cursos
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: error.message
        });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const curso = await cursosModel.findById(req.params.id);
        if (curso) {
            res.status(200).json({
                success: true,
                data: curso
            });
        } else {
            res.status(400).json({
                success: false,
                msg: "No se encontró el curso"
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: error.message
        });
    }
});

router.post('/', async (req, res) => {
    try {
        const newCurso = await cursosModel.create(req.body);
        res.status(201).json({
            success: true,
            data: newCurso
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: error.message
        });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedCurso = await cursosModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updatedCurso) {
            res.status(200).json({
                success: true,
                data: updatedCurso
            });
        } else {
            res.status(400).json({
                success: false,
                msg: "No se encontró el curso para actualizar"
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: error.message
        });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedCurso = await cursosModel.findByIdAndDelete(req.params.id);
        if (deletedCurso) {
            res.status(200).json({
                success: true,
                data: deletedCurso
            });
        } else {
            res.status(400).json({
                success: false,
                msg: "No se encontró el curso para eliminar"
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: error.message
        });
    }
});

module.exports = router;