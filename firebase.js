// Initialize Firebase
var firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);

// Sign up
document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var email = document.getElementById('signupEmail').value;
    var password = document.getElementById('signupPassword').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            var user = userCredential.user;
            console.log('User signed up:', user);
            updateUserInfo(user);
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.error('Sign up error:', errorMessage);
        });
});

// Sign in
document.getElementById('signinForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var email = document.getElementById('signinEmail').value;
    var password = document.getElementById('signinPassword').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            var user = userCredential.user;
            console.log('User signed in:', user);
            updateUserInfo(user);
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.error('Sign in error:', errorMessage);
        });
});

// Sign out
function signOut() {
    firebase.auth().signOut().then(() => {
        console.log('User signed out');
        document.getElementById('userInfo').innerHTML = '';
    }).catch((error) => {
        console.error('Sign out error:', error);
    });
}

// Update user info
function updateUserInfo(user) {
    var userInfo = document.getElementById('userInfo');
    userInfo.innerHTML = '<p>Welcome, ' + user.email + '!</p>';
}
