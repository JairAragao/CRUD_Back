module.exports = app => {
    let result = [
        {
            name: 'Jair',
            description: 'developer',
            checked: false,
            status: true,
            integer: 0,
            decimal: 1.5,
            date: '20/01/2022',
            time: '10:20'
        },
        {
            name: 'Gabriel',
            description: 'developer',
            checked: true,
            status: true,
            integer: 0,
            decimal: 5.6,
            date: '20/01/2022',
            time: '10:20'
        }
    ]
    const getGeneric = (req, res) => {
        res.send(result)
    }



    const postGeneric = (req, res) => {
        try {
            resulta.push(req.body)
            res.send(result)
        }
        catch (err) {
            res.status(400).send('Deu merda')
        }
    }

    return { getGeneric, postGeneric }
}
