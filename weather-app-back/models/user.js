const user = {
    name: String,
    email:{
        type: String,
        unique: true
    },
    googleId:{
        type: String,
        unique: true
    },
    defaultCountry: String
}