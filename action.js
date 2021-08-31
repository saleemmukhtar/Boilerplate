import firebase from "../config/firebase"

const signupUser = (user) => {
    return (dispatch) => {

        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)

            .then((res) => {

                firebase.database().ref('/').child(`users/${res.user.uid}`).set(user)

                alert("User Signup Successfully ")

            })
            .catch((err) => {

                console.log(err.message)
            })

    }

}


const loginUser = (user) => {
    return (dispatch) => {

        firebase.auth().signInWithEmailAndPassword(user.email, user.password)

            .then((res) => {

               firebase.database().ref( '/').child (`users/${res.user.uid}`)
               .once('value',(data) =>{
                   console.log (data.val())
                   
               })

            })
            .catch((err) => {

                console.log(err.message)
                alert (err.message)
            })

    }

}

export {
    signupUser,
    loginUser
}