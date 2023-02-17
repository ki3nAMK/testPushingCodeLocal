console.log("start !");

const loginUsers = (email, users) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("==> Now  we get the data!");
            resolve({ Useremail: email });
        }, 3000);
    })
}

const getUserVideos = (email) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["video1", "video2", "video3", "video4", "video5"]);
        }, 3000);
    })
}

const videoDetails = (email) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("title of the video !");
        }, 3000);
    })
}

// const email = "123nguyenbahoangkien123@gmail.com"
// let infor = loginUsers( email , "N3HK@@", (user) => {
//     console.log(user) ;
//     getUserVideos(user.Useremail, (videos) => {
//         console.log(videos) ;
//     })
// } ) ;

loginUsers("Kien", "Kien123...")
    .then(user => getUserVideos(user.Useremail))
    .then(videos => videoDetails(videos[0]))
    .then(details => videoDetails(details)) 

console.log("finish !");   