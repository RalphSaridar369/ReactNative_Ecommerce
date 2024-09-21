import * as yup from "yup";
import AlertComponent from "../components/Alert";

const forms = {
  login: yup.object().shape({
    password: yup.string().required(),
    email: yup.string().required().email(),
  }),

  buyerRegister: yup.object().shape({
    id: yup.object().shape({
      doc_title: yup.string().required(),
      doc_url: yup.string().required(),
      doc_extension: yup.string().required(),
    }),
    confirm: yup
      .string()
      .required()
      .test("passwords-match", "Passwords must match", function (value) {
        return this.parent.password === value;
      }),
    password: yup.string().required(),
    email: yup.string().required().email(),
  }),

  sellerRegister: yup.object().shape({
    id: yup
      .object()
      .shape({
        doc_title: yup.string(),
        doc_url: yup.string(),
        doc_extension: yup.string(),
      })
      .required(),
    company: yup
      .object()
      .shape({
        doc_title: yup.string(),
        doc_url: yup.string(),
        doc_extension: yup.string(),
      })
      .required(),
    brand: yup.number().positive().required("Brand is required"),
    category: yup.number().positive().required("Category is required"),
    confirm: yup
      .string()
      .required()
      .test("passwords-match", "Passwords must match", function (value) {
        return this.parent.password === value;
      }),
    password: yup.string().required(),
    email: yup.string().required().email(),
  }),
};

export const formValidator = async (payload, type, callback) => {
  const validationResult = await forms[type]
    .validate(payload, { abortEarly: "false" })
    .catch((err) => {
      return err;
    });
  let error = (validationResult + "").split(": ")[1];
  if (error) {
    AlertComponent("Error", error);
    return;
  }
  callback();
};
