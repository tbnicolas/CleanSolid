(()=>{

    //No aplicando el principio de responsabilidad unica

    type Gender = 'M' | 'F';

     class Person{
        public name: string;
        public gender: Gender;
        public birthdate: Date;

        constructor(name:string, gender:Gender, birthdate:Date){
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
     }

     class User extends Person {
        
        private lastAccess: Date;
        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        )
        {
            super(name,gender,birthdate);
            this.lastAccess = new Date();
        }



        checkCredentials(){
            return true;
        }
     }


     class UserSettings extends User{
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthdate:Date

        ){

            super(email,role,name,gender,birthdate);
        }
     }


     const userSettings = new UserSettings(
        '/user/home',
        '/home',
        'njtrujillo@gmail.com',
        'Admin',
        'Nicolas',
        'M',
        new Date('1997-09-22')


     );

     console.log({userSettings});

})();

