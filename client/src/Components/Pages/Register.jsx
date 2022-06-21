import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { makeRegisterRequest } from "../../Redux/Register/actions";
import MyAppbar from "../Layout/appbar/MyAppbar";
import styles from "./Register.module.css";
// import {motion} from "framer-motion";
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion';
import { useHistory } from "react-router-dom";

export function Register() {
  // const isAuth = useSelector((state) => state.login.isAuth);

  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(makeRegisterRequest({ name, email, password }));
    history.push("/login");
  };

  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <MyAppbar />
      <div className={styles.mybox}>
        <div className={styles.signup_container}>
          <div className={styles.signup_form_container}>
            <div className={styles.left}>
              <h1>Already an User?</h1>
              <Link to="/login">
                <button type="button" className={styles.white_btn}>
                  Sign in
                </button>
              </Link>
            </div>
            <div className={styles.right}>
              <form className={styles.form_container} onSubmit={handleSubmit}>
                <h1>Create Account</h1>
                <input
                  type="text"
                  name="name"
                  className={styles.input}
                  value={name}
                  placeholder="Your Name"
                  onChange={onNameChange}
                  required
                ></input>
                <input
                  type="email"
                  name="email"
                  className={styles.input}
                  value={email}
                  placeholder="Your Email"
                  onChange={onEmailChange}
                  required
                ></input>
                <input
                  type="password"
                  name="password"
                  className={styles.input}
                  value={password}
                  placeholder="Your Password"
                  onChange={onPasswordChange}
                  required
                  minlength="6"
                ></input>
                <button type="submit" className={styles.green_btn}>
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      </motion.div>
  ) ;
}
