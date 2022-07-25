import { style } from "@mui/system";
import React, { useState } from "react";
import styles from "./Modules/Admin.module.css";

const Admin = () => {
  const [values, setValues] = useState({
    title: "",
    discription: "",
    price: "",
    category: "",
    sale: "",
    onStock: true,
    image: "",
  });
  const handleInputChange = (e) => {
    const { target } = e;
    const value = target.type === "checkbox" ? target.checked : target.value;
    if (e.target.files) {
      //console.log(e.target.files[0]);
      setValues({ ...values, image: [e.target.files[0]] });
    }
    const { name } = target;
    setValues((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    console.log(values);
    e.preventDefault();
    setValues({
      title: "",
      discription: "",
      price: "",
      category: "",
      sale: "",
      onStock: true,
      image: "",
    });
  };
  return (
    <>
      <div className={styles.adminpage}>
        <h1>ADMIN FORM</h1>
        <div className={styles.conatiner}>
          <div className={styles.addsection}>
            addsection
            <form onSubmit={handleSubmit} className={styles.form}>
              <input
                value={values.title}
                onChange={handleInputChange}
                name="title"
                placeholder="Title"
              />
              <input
                value={values.discription}
                onChange={handleInputChange}
                name="discription"
                placeholder="Discription"
              />
              <input
                value={values.price}
                onChange={handleInputChange}
                name="price"
                placeholder="Price"
              />
              <input
                value={values.sale}
                onChange={handleInputChange}
                name="sale"
                placeholder="Sale"
              />

              <select
                value={values.category}
                name="category"
                onChange={handleInputChange}
              >
                <option value="">!!!</option>
                <option value="Takdir">Takdir</option>
                <option value="Tntesakan">Tntesakan</option>
                <option value="Ker">Ker</option>
              </select>
              <p style={{ color: "white", marginTop: 10 }}>
                OnStock:
                <input
                  type="checkbox"
                  name="onStock"
                  value={values.onStock}
                  onChange={handleInputChange}
                  defaultChecked={true}
                />
              </p>
              <input
                type="file"
                accept="image/*"
                value={values.image}
                onChange={handleInputChange}
                name="image"
                placeholder="Pickture"
              />
              <button type="submit">Submit </button>
            </form>
          </div>

          {/*----------------------*/}
          <div className={styles.changesection}>
            changesection
            <div>
					{/*<img src={values.picture[0]} alt="" />*/}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
