import * as Yup from "yup";

export const contactValidationSchema = Yup.object().shape({
    fullname: Yup.string().required("نام و نام خانوادگی الزامی می باشد"),
    email: Yup.string()
        .email("آدرس ایمیل معتبر نیست")
        .required("آدرس ایمیل الزامی می باشد"),
    subject: Yup.string().required("نوشتن عنوان الزامی می باشد"),
    message: Yup.string().required("نوشتن پیام الزامی می باشد"),
    recaptcha: Yup.string().required("کپتچا الزامی می باشد"),
});
