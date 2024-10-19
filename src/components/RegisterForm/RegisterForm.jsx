import { Form, Field, Formik } from "formik";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/auth/operations";
import toast from "react-hot-toast";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const handleSubmit = (values, options) => {
    dispatch(registerUser(values))
      .unwrap()
      .then((res) => {
        toast.success(`Welcome ${res.user.name}`).catch((error) => {
          toast.error(`Error ${error}`);
        });
      });
    options.resetForm();
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl flex items-center">
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <Field
              name="name"
              type="text"
              placeholder="Username"
              className="input input-bordered"
              autoComplete="current-name"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <Field
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              autoComplete="current-email"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <Field
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              autoComplete="current-password"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
