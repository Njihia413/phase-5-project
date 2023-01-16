// import React from "react";
// import { useForm } from 'react-hook-form';
// import emailjs from 'emailjs-com';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.min.css';;
// import Navbar from './Navbar';

// const ContactUs = () => {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors }
//   } = useForm();
//    // Function that displays a success toast on bottom right of the page when form submission is successful
//    const toastifySuccess = () => {
//     toast('Thank you for contacting us! Our Team will get back to you within 48hours.', {
//         position: 'bottom-right',
//         autoClose: 5000,
//         hideProgressBar: true,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: false,
//         className: 'submit-feedback',
//         toastId: 'notifyToast'
//     });
//   };
//  // Function called on submit that uses emailjs to send email of valid contact form
//  const onSubmit = async (data) => {
//   // Destrcture data object
//   const { name, email, subject, message } = data;
//   try {
//       const templateParams = {
//           name,
//           email,
//           subject,
//           message
//       };

//       await emailjs.send(
//           "service_423gfo8",
//           "template_kicerto",
//           templateParams,
//           "kc2pjZyrhc5dxKH2b"
//       );

//       reset();
//       toastifySuccess();
//   } catch (e) {
//       console.log(e);
//   }
// };
//     formState: { errors }
//   } = useForm();

//   const onSubmit = async (data) => {
//     const { name, email, subject, message } = data;

//     console.log('Name: ', name);
//     console.log('Email: ', email);
//     console.log('Subject: ', subject);
//     console.log('Message: ', message);
//   };

//   return (
//     <div>
//       <section className="contact">
//         <div className="bg-contact">
//           <Navbar />
//           <div className="row">
//             <div className="col">
//               <div className="intro">
//                 <h1>24Hrs On Deck Customer Support</h1>
//               </div>
//               <div className="intro-p">
//                 <h3>We are at your call, we serve you always</h3>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="contact-header">
//         <div className="row text-center">
//           <div className="col-md-12">
//             <h3 className="contact-heading">Let's Talk!</h3>
//           </div>
//         </div>
//       </section>

//       <section className="contact-section">
//         <div className="cnt">
//           <div className="row d-flex justify-content-center">
//             <div className="col-md-5">
//               <div className="contact-card">
//                 <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
//                   <div className="container text-center">
//                     <p>We do normally respond within 48hrs. Please <br></br> leave a message</p>
//                   </div>
//                   {/* Row 1 of form */}
//                   <div className="row">
//                     <div className="col-md-12 mb-2">
//                       <input
//                         type="text"
//                         name="name"
//                         {...register("name", {
//                           required: { value: true, message: "Please enter your name" },
//                           maxLength: {
//                             value: 30,
//                             message: "Please use 30 characters or less"
//                           }
//                         })}
//                         className="form-control2"
//                         placeholder="Full Name"
//                       ></input>
//                       {errors.name && <span className="errorMessage">{errors.name.message}</span>}
//                     </div>
//                     <div className="col-md-12 mb-2">
//                       <input
//                         type="email"
//                         name="email"
//                         {...register("email", {
//                           required: true,
//                           pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
//                         })}
//                         className="form-control2"
//                         placeholder="Email address"
//                       ></input>
//                       {errors.email && (
//                         <span className="errorMessage">Please enter a valid email address</span>
//                       )}
//                     </div>
//                   </div>
//                   {/* Row 2 of form */}
//                   <div className="row">
//                     <div className="col-md-12 mb-2">
//                       <input
//                         type="text"
//                         name="subject"
//                         {...register("subject", {
//                           required: { value: true, message: "Please enter a subject" },
//                           maxLength: {
//                             value: 75,
//                             message: "Subject cannot exceed 75 characters"
//                           }
//                         })}
//                         className="form-control2"
//                         placeholder="Subject"
//                       ></input>
//                       {errors.subject && (
//                         <span className="errorMessage">{errors.subject.message}</span>
//                       )}
//                     </div>
//                   </div>
//                   {/* Row 3 of form */}
//                   <div className="row">
//                     <div className="col-md-12 mb-4">
//                       <textarea
//                         rows={6}
//                         name="message"
//                         {...register("message", {
//                           required: true
//                         })}
//                         className="form-control2"
//                         placeholder="Your Message"
//                       ></textarea>
//                       {errors.message && <span className="errorMessage">Please enter a message</span>}
//                     </div>
//                   </div>
//                   <button className="btn btn-contact" type="submit">
//                     Send message
//                   </button>
//                 </form>
//               </div>
//               <ToastContainer />
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ContactUs;