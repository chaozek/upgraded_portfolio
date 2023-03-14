/* import multer from "multer";
import path from "path"; */
const storage = multer.diskStorage({
  /* destination: (req, file, callback) => {
    callback(null, "./public/book_image");
  },
  filename: (req, file, callback) => {
    console.log("====================================");
    console.log(file);
    console.log("====================================");
    const NameFormat = `${Date.now()}-$(file.fieldname)${path.extname(
      file.originalname
    )}`;

    callback(null, NameFormat);
  },
});

const upload = multer({
  storage: storage,
  limits: 2 * 1000 * 1000,
});

const singleUpload = (req, res, next) => {
  const uploadSingle = upload.single("image");
  console.log(uploadSingle, "SINGLE");
  uploadSingle(req, res, (err) => {
    if (err) {
      res.status(500).send({
        message: "multer error",
        error: err,
      });
    } else {
      next();
    }
  }); */
};
export default singleUpload;
