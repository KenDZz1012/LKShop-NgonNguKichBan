import multer from "multer";

const pathFile = "src/public"

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log(file.fieldname)
        switch (file.fieldname) {
            case "ClientAvatar":
                cb(null, `${pathFile}/ClientAvatar`);
                break;
            case "MoviePoster":
                cb(null, `${pathFile}/MoviePoster`);
                break;
            case "MovieVideo":
                cb(null, `${pathFile}/MovieVideo`);
                break;
            case "TVVideo":
                cb(null, `${pathFile}/TVVideo`);
                break;
            case "CelebrityAvatar":
                cb(null, `${pathFile}/CelebrityAvatar`);
                break;
            case "TVPoster":
                cb(null, `${pathFile}/TVPoster`);
                break;
        }
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });

export default upload