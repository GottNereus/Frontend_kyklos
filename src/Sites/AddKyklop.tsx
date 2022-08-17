import {useFormik} from "formik";
import {useNavigate} from "react-router-dom";
import LandingPageService from "../Service/LandingPageService";


export function AddKyklop() {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            vulgo: "",
            password: "",
        },
        enableReinitialize: true,
        onSubmit: (values) => {
            LandingPageService().postKyklop(values.vulgo, values.password);
            navigate("/")
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="alignEdit">

                {/*Vulgo Box*/}
                <label htmlFor="Name">
                    <h5>Name</h5>
                    {formik.errors.vulgo && (
                        <div className="error">{formik.errors.vulgo}</div>
                    )}
                </label>
                <input
                    type="text"
                    id="vulgo"
                    name="vulgo"
                    placeholder="vulgo"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.vulgo}>
                </input>

                {/*Password Box*/}
                <label htmlFor="Password">
                    <h5>Name</h5>
                    {formik.errors.password && (
                        <div className="error">{formik.errors.password}</div>
                    )}
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}>
                </input>

                <br></br>
                <button className="editButton" type="submit">
                    Save
                </button>
            </div>
        </form>
    );
}