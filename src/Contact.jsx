import React from "react";
import { useState } from "react";

const Contact = () => {
    const [data, setData] = useState({
        fullname:'',
        phone:'',
        email:'',
        msg:'',

    });

    const InputEvent = (event) => {
        const {name, value} = event.target;

        setData ((preVal) => {
            return {
                ...preVal,
                [name] : value,
            }
        })
    };

    const formSubmit = (e) =>{
        e.preventDefault();
        alert(`My Name is ${data.fullname}. My mobile number is ${data.phone}. My Email address is ${data.email} and I would like to say ${data.msg}. ThankYou`)
    };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="co-md-6 col-10 mx-auto">
            <form action="" onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter you name"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  required
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Phone No.
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="Mobile Number"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Enter Your Message.
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                  rows="3"
                  required
                ></textarea>
              </div>
              <div class="col-12">
                <button class="btn btn-outline-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
