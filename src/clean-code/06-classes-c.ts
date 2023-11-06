(()=>{

    //Aplicando el principio de responsabilidad unica
    // Priorizar la composicion frente a la herencia

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
        email     : string;
        role      : string;

     }
     class User {
        
        private lastAccess: Date;
        public role: string;
        public email: string;


        constructor({
             email,      
             role,     
            }:UserProps)
        {
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;

        }



        checkCredentials(){
            return true;
        }
     }


     interface SettingsProps{
        lastOpenFolder   : string;
        workingDirectory : string;
     }

     class Settings {
        public lastOpenFolder: string;
        public workingDirectory: string;
        constructor(
            {
            lastOpenFolder,
            workingDirectory}: SettingsProps )
        {

            this.lastOpenFolder = lastOpenFolder;
            this.workingDirectory = workingDirectory;
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
     class UserSettings{
        public person   : Person;
        public user     : User;
        public setting  : Settings;

        constructor({
            name,gender,birthdate,
            email,role,
            lastOpenFolder,workingDirectory
        }:UserSettingsProps){
            this.person  = new Person({name,gender,birthdate});
            this.user    = new User({email,role});
            this.setting = new Settings({lastOpenFolder,workingDirectory}); 
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

