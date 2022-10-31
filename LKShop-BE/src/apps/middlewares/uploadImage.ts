import multer from "multer";

const pathFile = "src/public"

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        switch(file.fieldname){
            case "Avatar":
                cb(null, `${pathFile}/ClientAvatar`);
                break;
            case "Trailer":
                cb(null, `${pathFile}/MovieTrailer`);
                break;
            case "Poster":
                cb(null, `${pathFile}/MovieTrailer`);
                break;
            case "MovieVideo":
                cb(null, `${pathFile}/MovieVideo`);
                break;
            case "TVSeriesVideo":
                cb(null, `${pathFile}/TVSeriesVideo`);
                break;
        }
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });

export default upload