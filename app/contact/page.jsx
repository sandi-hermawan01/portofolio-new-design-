"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+62) -",
  },
  {
    icon: <FaEnvelope />,
    title: "email",
    description: "sandihermawanf01@gmai.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Bandung Indonesia",
  },
];

const Contact = () => {
  const form = useRef(null);
  const { toast } = useToast();

  const sendEmail = (e) => {
    e.preventDefault();

    // Check if form fields are empty
    const formElements = form.current.elements;
    let isEmpty = false;

    for (let i = 0; i < formElements.length; i++) {
      if (
        formElements[i].classList.contains("hook-input") ||
        formElements[i].tagName === "TEXTAREA"
      ) {
        if (formElements[i].value.trim() === "") {
          isEmpty = true;
          break;
        }
      }
    }

    if (isEmpty) {
      toast({
        variant: "destructive",
        description: "Form must be filled in",
      });
      return;
    }

    emailjs
      .sendForm("service_tedv7zj", "template_7ij8bgw", form.current, {
        publicKey: "ZT6FW1PtsOYxTT0Pm",
      })
      .then(
        () => {
          console.log("SUCCESS");
          toast({
            title: "Success",
            description: "Email sent successfully!",
          });
          Array.from(form.current.elements).forEach((element) => {
            if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
              element.value = "";
            }
          });
        },

        (error) => {
          console.log("FAILED...");
          toast({
            variant: "destructive",
            title: "Error",
            description: "Failed to send email. Please try again.",
          });
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto xl:mt-20 mt-11">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-accent-hover rounded-xl"
              ref={form}
              onSubmit={sendEmail}
            >
              <h3 className="text-4xl text-primary">{`Let's work together`}</h3>
              <p className="text-primary/70 text-lg">
                You can contact me via the form below or you can also contact me
                via email.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  className="hook-input placeholder:text-red-400"
                  type="firstname"
                  placeholder="*Firstname"
                  name="user_firstname"
                />

                <Input
                  className="hook-input placeholder:text-red-400"
                  type="lastname"
                  placeholder="*Lastname"
                  name="user_lastname"
                />
                <Input
                  className="hook-input placeholder:text-red-400"
                  type="email"
                  placeholder="*Email address"
                  name="user_email"
                />
                <Input
                  type="phone"
                  placeholder="Phone number"
                  name="user_phone"
                />
              </div>

              {/* text area */}
              <Textarea
                className="h-[200px] placeholder:text-red-400"
                placeholder="*Type message."
                name="message"
              />
              <Button size="md" className="max-w-40" type="submit" value="Send">
                Send message
              </Button>
              <Toaster />
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-accent-hover text-primary rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-primary/70">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
