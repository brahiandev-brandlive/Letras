import { useState } from 'react'

const Formulario = ({ guardarBusquedaLetra }) => {

    const [ busqueda, guardarBusqueda ] = useState({
        artista: '',
        cancion: ''
    });
    const [ error, guardarError ] = useState(false);

    const {  artista, cancion } = busqueda;

    // Funcion para leer contenido en cada Input
    const actualizarState = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    // Consultar APIS
    const buscarInformacion = e => {
        e.preventDefault();

        // Validar que ambos campos esten llenos
        if(artista.trim() === '' || cancion.trim() === ''){
            guardarError(true);
            return;
        }

        guardarError(false);

        // Todo bien pasar al componente Principal
        guardarBusquedaLetra(busqueda);
    }

    return (
        <div className="bg-info">
            <div className="container">
                { error ? <p className='alert alert-danger text-center p-2'> Todos los campos son obligatorios </p> : null }
                <div className="row">
                    <form
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                        onSubmit={ buscarInformacion }
                    >
                        <fieldset>
                            <legend className="text-center">
                                Buscador letras canciones
                            </legend>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label> Artista </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="artista"
                                            placeholder="Nombre Artista"
                                            onChange={ actualizarState }
                                            value={ artista }
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label> Cancion </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="cancion"
                                            placeholder="Nombre Cancion"
                                            onChange={ actualizarState }
                                            value={ cancion }
                                        />
                                    </div>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary float-right"
                            >
                                Buscar
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Formulario;