const { Router } = require('express');
const routeLogin = require('./login');
const routeLogout = require('./logout');
const routeRegister = require('./register');
const routeHome = require('./home');
const routeProfile = require('./profile');
const routeAvatar = require('./avatar');
const routeUser = require('./user');
const run = require('../controlers/test');
const Users = require('../models/User');
const routeUpdatePassword = require('./updatePass');
const routeGyms = require('./gyms');
const routeActivation = require('./activation');
const routeEmailValidate = require('./emailValidate')
const { findAllUsers } = require('../controlers/users');
const Run = require('../controlers/test');



const router = Router();


router.use('/api', routeLogin);
router.use('/api', routeLogout);
router.use('/api', routeRegister);
router.use('/api', routeHome);
router.use('/api', routeProfile);
router.use('/api', routeAvatar);
router.use('/api', routeUser);
router.use('/api', routeUpdatePassword);
router.use('/api', routeGyms);
router.use('/api', routeActivation);
router.use('/api', routeEmailValidate);







router.post('/create', (req, res) => {
    const newUser = Run()
    console.log(newUser)
    res.send(newUser)
})

// Rutas creadas
// 0. Barra y barra api responde cuando un usuario no fue validado o 
//    cuando un usuario que se registó se desloguea
// 1. Barra api barra login permite al usuario loguearse
// 2. Barra api barra logout permite al usuario desloguarse
// 3. Barra api barra register debe permitir a un usuario no registrado crear una
//    cuenta simplificada (id, name, email, password, tipo de cliente)
// 5. Barra api barra home debería devolver la info de las cards

// Rutas pendientes
// barra api barra profile debería devolver la info del perfil del usuario
// 
//

router.get('/', async (req, res) => {
    try {
        console.log('fue redirigido a barra')
        const prueba = await Run()
        console.log(prueba)
        res.status(200).send("se creo el usuario")
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: "No se pudo crear el usuario"
        })
    }
});

router.get('/users', async (req, res) => {
    const response = await findAllUsers()
    if (response === null) {
        res.status(404).send('User not found')
    } else {
        res.status(200).send(response)
    }
})


router.get('/api', async (req, res) => {
    const response = await Users.find()
    console.log('fue redirigido a barra api')
    res.status(200).send(response)
});






module.exports = router;
