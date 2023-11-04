interface MovieOptions{
    cast: string[];
    description: string;
    rating: number;
    title: string;
}

(() => {

    function getMovieById( movieId: string ) {
        console.log({ movieId });
    }

    function getMovieCastById( id: string ) {
        console.log({ id });
    }

    function getActorBiographyById( ActorId: string ) {
        console.log({ ActorId });
    }
    
    function createMovie({title,description,rating,cast} : MovieOptions) {
        console.log({ title, description, rating, cast });
    }

    function checkFullName (fullName: string) {
        console.log({fullName});
        return true ;
    }

    // Crea un nuevo actor
    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( checkFullName(fullName) ) return false;

        console.log('Crear actor');
        return true;        

    }

    //Continuar

    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
        
        if ( isDead ) return 1500;
        
        if ( isSeparated ) return 2500;

        return ( isRetired ) ? 3000 : 4000;
        
    }


})();




