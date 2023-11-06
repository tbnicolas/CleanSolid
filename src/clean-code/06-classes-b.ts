(()=>{

    //No aplicando el principio de responsabilidad unica

    type Gender = 'M' | 'F';
    
    
    interface PersonProps{
        birthdate:Date;
        gender:Gender;
        name: string;
    }


     class Person{
         public birthdate: Date;
         public gender: Gender;
         public name: string;

        constructor({name, gender, birthdate}:PersonProps){
            this.name      = name;
            this.gender    = gender;
            this.birthdate = birthdate;
        }


     }

     interface UserProps{
        birthdate : Date;
        email     : string;
        gender    : Gender;
        name      : string;
        role      : string;

     }
     class User extends Person {
        
        private lastAccess: Date;
        public role: string;
        public email: string;


        constructor({
             birthdate,
             email,  
             gender,   
             name,     
             role,     
            }:UserProps)
        {
            super({name,gender,birthdate});
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;

        }



        checkCredentials(){
            return true;
        }
     }


     interface UserSettingsProps{
        birthdate        : Date;
        email            : string;
        gender           : Gender;
        lastOpenFolder   : string;
        name             : string;
        role             : string;
        workingDirectory : string;
     }

     class UserSettings extends User{
        public lastOpenFolder: string;
        public workingDirectory: string;
        constructor(
            {birthdate,
            email,
            gender,
            lastOpenFolder,
            name,
            role,
            workingDirectory}: UserSettingsProps )
        {

            super({email,role,name,gender,birthdate});
            this.lastOpenFolder = lastOpenFolder;
            this.workingDirectory = workingDirectory;
        }
     }


     const userSettings = new UserSettings({
        birthdate:new Date('1997-09-22'),
        email:'njtrujillo@gmail.com',
        gender:'M',
        lastOpenFolder:'/home',
        name:'Nicolas',
        role:'Admin',
        workingDirectory:'/user/home',
    });

     console.log({userSettings});

})();

