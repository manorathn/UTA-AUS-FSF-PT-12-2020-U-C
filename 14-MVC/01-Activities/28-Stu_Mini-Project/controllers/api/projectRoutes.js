const router = require('express').Router();
const { Projects } = require('../../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const userData = await User.findAll({
            attributes: { exclude: ['password'] },
            order: [['name', 'ASC']],
        });
        const users = userData.map((project) => project.get({ plain: true }));
        res.render('homepage', {
            users,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/projects/:id`', async (req, res) => {
    try {
        const projectRoute = await Projects.findByPk(req.params.id);
        if (!projectRoute) {
            res.status(404).json({ message: '' });
            return;
        }
        res.status(200).json(projectRoute);
    } catch (err) {
        res.status(500).json(err);
    }
});