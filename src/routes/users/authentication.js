const express = require("express");
const bcrypt = require("bcrypt"); 
const router = express.Router(); 
const userSchema = require("../../models/users/User.model");
const specialistSchema = require("../../models/specialists/Specialist.model");
const validationsFields = require("../../validations/validationsFields");
const { getCompleteMenu } = require("../../helpers/completeMenu");

//user-sign-up
router.post('/signup', async (req, res) => {
    const { documentType, documentNumber, names, surnames, email, password, confirmPassword } = req.body;
    const user = new userSchema({
        documentType: documentType,
        documentNumber: documentNumber,
        names: names,
        surnames: surnames,
        email: email,
        password: password,
        confirmPassword: confirmPassword
    });
    
    var isValidFields = validationsFields.validateNotEmptyFields(user)
    if (!isValidFields) return res.status(400).json({ error: 'todos los campos son requeridos' })

    var validPassword = password === confirmPassword ? true : false
    if (!validPassword) return res.status(400).json({ error: 'las contraseñas no coinciden' })
    user.password = await user.encryptClave(user.password);
    user.confirmPassword = await user.encryptClave(user.confirmPassword);
    await user.save();
    res.json({
        message: "Usuario guardado.",
        userMenu: getCompleteMenu('USER')
    });

});

//user-login
router.post('/login', async (req, res) => {
    const { error } = userSchema.validate(req.body.documentType, req.body.documentNumber, req.body.password);
    if (error) return res.status(400).json({ error: error.details[0].message })

    const user = await userSchema.findOne({ documentType:req.body.documentType, documentNumber: req.body.documentNumber });
    if (!user) return res.status(400).json({ error: 'Usuario no encontrado' });

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).json({ error: 'contraseña no válida' })
    res.json({
        error: null,
        data: 'exito bienvenido usuario',
        michi: user._id, // ????????????????????????????????????????????
        userMenu: getCompleteMenu('USER')
    })
})

//specialist-login
router.post('/login_specialist', async (req, res) => {
    const { error } = specialistSchema.validate(req.body.documentNumber, req.body.password);
    if (error) return res.status(400).json({ error: error.details[0].message })

    const specialist = await specialistSchema.findOne({ documentNumber: req.body.documentNumber });
    if (!specialist) return res.status(400).json({ error: 'Especialista no encontrado' });

    const validPasswordSpe = await bcrypt.compare(req.body.password, specialist.password);
    if (!validPasswordSpe) return res.status(400).json({ error: 'contraseña no válida' })
    res.json({
        error: null,
        data: 'exito bienvenido especialista',
        speciality: specialist.specialityType,
        userMenu: getCompleteMenu('SPECIALIST')
    })
})

module.exports = router;