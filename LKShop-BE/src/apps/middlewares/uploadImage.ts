import multer from "multer";

const pathFile = "src/public"

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        switch(file.fieldname){
            case "ClientAvatar":
                cb(null, `${pathFile}/ClientAvatar`);
                break;
            case "MovieTrailer":
                cb(null, `${pathFile}/MovieTrailer`);
                break;
            case "TVSeriesTrailer":
                cb(null,`${pathFile}/TVSeriesTrailer`)
                break;
            case "MoviePoster":
                cb(null, `${pathFile}/MoviePoster`);
                break;
            case "MovieVideo":
                cb(null, `${pathFile}/MovieVideo`);
                break;
            case "TVSeriesVideo":
                cb(null, `${pathFile}/TVSeriesVideo`);
                break;
            case "CelebrityAvatar":
                cb(null, `${pathFile}/CelebrityAvatar`);
                break;
        }
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });

export default upload