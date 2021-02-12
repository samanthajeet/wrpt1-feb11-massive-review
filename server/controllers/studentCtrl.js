module.exports = {
    getAllStudents: (req, res) => {
        const db = req.app.get('db')

        db.get_all_students().then( students => {
            res.status(200).send(students)
        }).catch(err => {
            console.log(err);
            res.status(500).send(err)
            return
        })
    }
}