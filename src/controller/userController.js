const introduccion = (req,res) => {
    res.render('start/landing',{

    })
}

const formularioDijkstra = (req,res) => {
    res.render('start/dijkstra',{
    })
}

const aplicaciones = (req,res) => {
    res.render('start/aplicaciones',{

    })
}

export {
    introduccion,
    formularioDijkstra,
    aplicaciones
}