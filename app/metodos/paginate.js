export const paginate = async (model, pageSize, pageLimit, search = {}, order = [], transform,associations) => {
    try {
        const limit = parseInt(pageLimit, 10) || 10;
        const page = parseInt(pageSize, 10) || 1;

        
        //Crea opciones del objeto
        var options = {};

        // Comprueba si el objeto bucado esta vacio
        if (Object.keys(search).length) {
            options = {options, ...search};
        }

        // comprueba si el orden está vacio
        if (order && order.length) {
            options['order'] = order;
        }

        //Si le pasamos asociaciones las añade
        if(associations){
            options['include'] = associations;
        }

        //Ponemos la página
        options['offset'] =  getOffset(page, limit);

        //Ponemos el límite de productos
        options['limit'] = limit;

        // Le paso las opciones (no lo hago por varible porque no funcionan las asociaciones)
        // asimilar el modelo, asimilar las opciones
        let {count, rows} = await model.findAndCountAll(options);

        // compruebe si la transformación es una función y no es nula
        if (transform && typeof transform === 'function') {
           rows = transform(rows);
        }

        
        return {
            previousPage: getPreviousPage(page),
            currentPage: page,
            nextPage: getNextPage(page, limit, count),
            total: count,
            limit: limit,
            data: rows
        }

    } catch (error) {
        console.log(error);
    }
}

const getOffset = (page, limit) => {
 return (page * limit) - limit;
}

const getNextPage = (page, limit, total) => {
    if ((total/limit) > page) {
        return page + 1;
    }

    return null
}

const getPreviousPage = (page) => {
    if (page <= 1) {
        return null
    }
    return page - 1;
}