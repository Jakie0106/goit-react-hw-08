import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import css from "./contactForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

const ContactForm = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const tellValid = /^\d{3}-\d{3}-\d{4}$/;

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
    number: Yup.string()
      .matches(tellValid, "It`s not a number!")
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
  });

  const initialValues = {
    name: "",
    number: "",
    id: "",
  };

  const handleSubmit = (values, options) => {
    const newContact = {
      name: values.name,
      number: values.number,
    };

    const isDuplicate = filteredContacts.some(
      (contact) => contact.number === newContact.number
    );

    if (isDuplicate) {
      toast.error("This contact already exists.");

      return;
    }

    dispatch(addContact(newContact))
      .then(() => {
        toast.success("Contact added successfully!");

        options.resetForm();
      })
      .catch((error) => {
        toast.error(`"Failed to add contact." ${error}`);
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl px-4 py-5 flex justify-center ">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className="card-body">
          <div className={css.formItem}>
            <label htmlFor="name">Name</label>
            <Field
              className="input input-bordered"
              name="name"
              type="text"
              id="name"
            />
            <ErrorMessage className={css.error} name="name" component="span" />
          </div>

          <div className={css.formItem}>
            <label htmlFor="number">Number</label>
            <Field
              className="input input-bordered"
              type="text"
              name="number"
              id="number"
            />
            <ErrorMessage
              className={css.error}
              name="number"
              component="span"
            />
          </div>

          <button className="btn btn-primary" type="submit">
            Add Contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
